const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../TheVisaConsultancy PHP');
const destDir = path.join(__dirname, 'src/app');

const pagesToMigrate = [
  { file: 'Clients.html', route: 'clients' },
  { file: 'Partners.html', route: 'partners' },
  { file: 'immigration.html', route: 'immigration' },
  { file: 'studentvisa.html', route: 'studentvisa' },
  { file: 'visitvisas.html', route: 'visitvisas' },
  { file: 'workvisas.html', route: 'workvisas' },
  { file: 'familyreunion.html', route: 'familyreunion' },
  { file: 'toefl-test.html', route: 'toefl-test' },
  { file: 'pte-test.html', route: 'pte-test' },
  { file: 'ielts.html', route: 'ielts' },
  { file: 'duolingo.html', route: 'duolingo' }
];

pagesToMigrate.forEach(({ file, route }) => {
  const filePath = path.join(srcDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${file}, not found.`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Extract content between </header> and <footer>
  let match = content.match(/<\/header>([\s\S]*?)<footer/i);
  if (!match) {
    // try fallback
    match = content.match(/<\/header>([\s\S]*?)<!-- FOOTER/i);
  }

  if (match) {
    let innerContent = match[1];
    
    // Convert class to className
    innerContent = innerContent.replace(/class=/g, 'className=');
    // Convert inline styles slightly (basic ones)
    innerContent = innerContent.replace(/style="([^"]*)"/g, (match, styleString) => {
        // very rudimentary style to react style object for this specific use case
        // most of these pages don't have complex inline styles, mostly empty or standard
        return ''; // stripping inline styles to prevent React errors, or we can leave them if none exist
    });
    // Fix unclosed tags like <img> and <input> and <br>
    innerContent = innerContent.replace(/<img([^>]*[^\/])>/g, '<img$1 />');
    innerContent = innerContent.replace(/<input([^>]*[^\/])>/g, '<input$1 />');
    innerContent = innerContent.replace(/<br>/g, '<br />');

    // Convert HTML comments to JSX comments
    innerContent = innerContent.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

    const componentName = route.replace(/-./g, x => x[1].toUpperCase());
    const capitalizedName = componentName.charAt(0).toUpperCase() + componentName.slice(1);

    const reactCode = `import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "${capitalizedName} | The Visa Consultancy",
};

export default function ${capitalizedName}() {
  return (
    <>
      ${innerContent}
    </>
  );
}
`;
    
    const routeDir = path.join(destDir, route);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    fs.writeFileSync(path.join(routeDir, 'page.js'), reactCode);
    console.log(`Migrated ${file} to src/app/${route}/page.js`);
  } else {
    console.log(`Could not extract content from ${file}`);
  }
});
