import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const testUser = await prisma.user.upsert({
    where: { email: "test-user-goals@yopmail.com" },
    update: {},
    create: {
      email: "test-user-goals@yopmail.com",
      username: "Test User",
    },
  });

  console.log({ testUser });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
