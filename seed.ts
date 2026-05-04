import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient({});

async function main() {
  const hashedPassword = await bcrypt.hash('password123', 10);
  
  const user = await prisma.user.upsert({
    where: { email: 'admin@thevisaconsultancy.com' },
    update: {},
    create: {
      email: 'admin@thevisaconsultancy.com',
      name: 'Super Admin',
      password: hashedPassword,
      role: 'superadmin',
    },
  });
  
  console.log('Seed completed. Admin user created:', user);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
