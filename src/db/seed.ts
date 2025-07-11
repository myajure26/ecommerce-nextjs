import { PrismaClient } from '../generated/prisma';
import sampleData from './sample-data';

async function main() {
  
  const prisma = new PrismaClient();
  await prisma.product.deleteMany();

  try {
    
    await prisma.product.createMany({
      data: sampleData.products,
    });
    
    console.log("Database seeded successfully with sample data.");

  } catch (error) {
    
    console.error("Error seeding database:", error);
  
  } finally {
    
    await prisma.$disconnect();
  
  }

}

main();