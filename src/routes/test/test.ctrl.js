import { prisma } from 'generated/prisma-client';

export const helloWorld = (ctx, next) => {
  ctx.body = 'hello world';
};

export const getUser = async (ctx, next) => {
  console.log(prisma);

  ctx.body = await prisma.users();
};
