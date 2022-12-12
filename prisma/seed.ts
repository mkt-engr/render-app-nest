// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy tasks
  const task1 = await prisma.task.upsert({
    where: { id: 1 },
    update: {},
    create: {
      content: 'Prisma Adds Support for MongoDB',
    },
  });
  const task2 = await prisma.task.upsert({
    where: { id: 2 },
    update: {},
    create: {
      content: 'アドベントカレンダー',
    },
  });

  console.log({ task1, task2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
