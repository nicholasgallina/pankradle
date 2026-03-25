import { NextResponse } from "next/server";
import { getTodaysEvent } from "@/utils/dailyEventSelector";

export async function GET() {
    const event = await getTodaysEvent();
    return NextResponse.json(event);
}