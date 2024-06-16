import { PrismaClient } from '@prisma/client';

//* Here we are caching the connection - if we already initialized a client we don't need to do again and again
// Declaring global here to avoid typescript error!
declare global {
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }

  prisma = global.cachedPrisma;
}

export const db = prisma;
