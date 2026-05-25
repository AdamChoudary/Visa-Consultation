const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const blog = await prisma.blog.findFirst({
    where: { slug: '2026-ultimate-visit-visa-guide' }
  });
  console.log(JSON.stringify(blog.content));
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
