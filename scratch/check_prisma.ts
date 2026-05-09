import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function check() {
  try {
    const blog = await prisma.blog.findFirst();
    console.log("Blog fields found at runtime:", Object.keys(blog || {}));
  } catch (err) {
    console.error("Prisma Error:", err);
  } finally {
    await prisma.$disconnect();
  }
}

check();
