import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { calculateEmissions } from '../utils/calculations';

const prisma = new PrismaClient();

export const getEmissions = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { startDate, endDate } = req.query;

    const emissions = await prisma.emission.findMany({
      where: {
        userId,
        ...(startDate && endDate && {
          date: {
            gte: new Date(startDate as string),
            lte: new Date(endDate as string),
          },
        }),
      },
      orderBy: { date: 'desc' },
    });

    const totalEmissions = emissions.reduce((sum, emission) => sum + emission.amount, 0);

    res.json({
      success: true,
      data: {
        emissions,
        totalEmissions,
        count: emissions.length,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch emissions',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

export const calculateAndSaveEmission = async (req: Request, res: Response) => {
  try {
    const { userId, vehicleType, distance, fuelType, passengers } = req.body;

    const emissionAmount = calculateEmissions({
      vehicleType,
      distance,
      fuelType,
      passengers: passengers || 1,
    });

    const emission = await prisma.emission.create({
      data: {
        userId,
        amount: emissionAmount,
        vehicleType,
        distance,
      },
    });

    res.status(201).json({
      success: true,
      data: emission,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to calculate emission',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

export const getEmissionStats = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const stats = await prisma.emission.groupBy({
      by: ['vehicleType'],
      where: { userId },
      _sum: { amount: true },
      _count: true,
    });

    const monthlyStats = await prisma.$queryRaw`
      SELECT 
        DATE_TRUNC('month', date) as month,
        SUM(amount) as total_emissions,
        COUNT(*) as trip_count
      FROM emissions 
      WHERE user_id = ${userId}
      GROUP BY DATE_TRUNC('month', date)
      ORDER BY month DESC
      LIMIT 12
    `;

    res.json({
      success: true,
      data: {
        byVehicleType: stats,
        monthly: monthlyStats,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch emission stats',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};
