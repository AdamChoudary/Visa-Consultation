import { PrismaClient } from '@prisma/client'

// Prevent crash during build if DATABASE_URL is missing
if (!process.env.DATABASE_URL && process.env.NODE_ENV === 'production') {
  process.env.DATABASE_URL = "file:./dev.db";
}

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
