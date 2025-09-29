import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create sample data
  console.log('Seeding database...');
  
  try {
    const user = await prisma.user.create({
      data: {
        firebaseUid: 'sample-uid',
        email: 'test@example.com',
        name: 'Test User',
        travelFrequency: 'often',
        primaryTravelReason: 'work',
        preferredDistance: 'medium',
        primaryVehicle: 'car',
      },
    });

    await prisma.travel.create({
      data: {
        userId: user.id,
        origin: 'Batangas City',
        destination: 'Manila',
        distance: 110,
        vehicleType: 'car',
        fuelType: 'petrol',
        completedAt: new Date(),
      },
    });

    await prisma.emission.create({
      data: {
        userId: user.id,
        amount: 23.1, // 110km * 0.21 kg CO2/km
        vehicleType: 'car',
        distance: 110,
        date: new Date(),
      },
    });

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });