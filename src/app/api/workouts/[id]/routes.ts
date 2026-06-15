import { getWorkOutCollection } from "@/lib/collections/workout";
import { auth } from "@clerk/nextjs/server";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET() {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const workouts = await getWorkOutCollection();

    const result = await workouts
        .find({ userId })
        .sort({ date: -1 })
        .toArray();

    return NextResponse.json(result);
}

export async function POST(req: Request) {

    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();

    const workouts = await getWorkOutCollection();
    const result = await workouts.insertOne({
        userId,
        date: body.date,
        exercises: body.exercises,
        notes: body.notes,
        createdAt: new Date(),
    });

    return NextResponse.json({ id: result.insertedId });
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const workouts = await getWorkOutCollection();

    const result = await workouts.deleteOne({

        _id: new ObjectId(params.id),
        userId,
    });

    return NextResponse.json({ success: true });
}