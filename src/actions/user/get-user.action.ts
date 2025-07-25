import prisma from "@/lib";

export const getUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: { email: email },
  });
};
