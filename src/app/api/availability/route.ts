import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../libs/prisma";

export async function POST(request: NextRequest) {
  try {
    const { startHour, endHour, days, userId } = await request.json();
    if (!startHour || !endHour || !days || !userId || days.length === 0) {
      return NextResponse.json(
        { message: "Please provide all the fields" },
        { status: 400 }
      );
    }

    const upsertAvailability = await prisma.availability.upsert({
      where: { userId },
      create: { startHour, endHour, days, userId },
      update: { startHour, endHour, days, userId },
    });

    if (!upsertAvailability) {
      return NextResponse.json(
        { message: "Something went wrong" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Availability updated", availability:upsertAvailability },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const userId = searchParams.get("userId");
    if (!userId) {
      return NextResponse.json(
        { message: "Please provide all the fields" },
        { status: 400 }
      );
    }
    const availability = await prisma.availability.findUnique({
      where: { userId },
    });

    return NextResponse.json({ availability }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}