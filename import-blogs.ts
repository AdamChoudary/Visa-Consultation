import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const blogs = [
  {
    title: 'hello',
    slug: 'hello',
    content: '<p>Wha is your name tell about your self&nbsp;</p>\r\n\r\n<p><img alt=\"nothing\" src=\"/images/HeroImage.png\" style=\"height:200px; width:200px\" /></p>\r\n\r\n<p>What are you doing next in your life and . what is your profession . what you want from me . what is you life&nbsp;</p>\r\n',
    status: 'published',
    createdAt: new Date('2026-03-17 12:18:03'),
  },
  {
    title: 'Tesgin ',
    slug: 'tesgin',
    content: '<p>&nbsp;</p><p>Hellow What is your name tell me about your self&nbsp;</p><figure class=\"image image-style-side\"><img style=\"aspect-ratio:2000/2000;\" src=\"/images/AustraliaReunionPartner.jpg\" width=\"2000\" height=\"2000\"><figcaption>&nbsp;</figcaption></figure><p>&nbsp;</p><p>Your life is not importat for Me what you want form me&nbsp;</p>',
    status: 'published',
    createdAt: new Date('2026-03-17 13:32:41'),
  },
  {
    title: 'Blan Blan',
    slug: 'blan-blan',
    content: '<figure class=\"image image-style-side\"><img style=\"aspect-ratio:2000/2000;\" src=\"/images/DubaiWorkVisa.jpg\" width=\"2000\" height=\"2000\"></figure><p>&nbsp;</p><p>Testing Our Blogs Site</p>',
    status: 'published',
    createdAt: new Date('2026-03-17 14:06:48'),
  },
  {
    title: 'Visa Processing for usa',
    slug: 'visa-processing-for-usa',
    content: '<p>We have some consultancy visa for usa&nbsp;</p><figure class=\"image\"><img style=\"aspect-ratio:1366/768;\" src=\"/images/HeroImage.png\" width=\"1366\" height=\"768\"></figure>',
    status: 'published',
    createdAt: new Date('2026-03-18 17:35:00'),
  },
  {
    title: 'Saudi Arabia Visa Guide for Pakistanis',
    slug: 'saudi-arabia-visa-guide-for-pakistanis',
    content: '<h3>Introduction</h3><p>Saudi Arabia is a top destination for work, tourism, and religious travel.</p><h3>2️⃣ Work Visa</h3><p>Requires a job offer from a Saudi employer.</p><h3>3️⃣ Tourist Visa</h3><p>Can be applied online through the official eVisa system.</p><h3>4️⃣ Visit Visa</h3><p>Used for family visits and short stays.</p><h3>5️⃣ Umrah Visa</h3><p>For performing Umrah (not Hajj without permit).</p><h3>6️⃣ Business Visa</h3><p>For meetings and professional purposes.</p>',
    status: 'published',
    createdAt: new Date('2026-03-18 20:35:38'),
  }
];

async function main() {
  const admin = await prisma.user.findFirst();
  if (!admin) {
    console.log('No admin user found. Run seed first.');
    return;
  }

  for (const blog of blogs) {
    await prisma.blog.upsert({
      where: { slug: blog.slug },
      update: {},
      create: {
        ...blog,
        authorId: admin.id,
      },
    });
  }
  console.log('Imported existing blogs successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
