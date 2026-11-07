import { NextResponse } from "next/server";
import { signPetition } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, region, whyMatters } = body;

    if (!fullName || !email || !region) {
      return NextResponse.json(
        { success: false, error: "Name, email, and region are required" },
        { status: 400 }
      );
    }

    const result = await signPetition({ fullName, email, region, whyMatters });
    return NextResponse.json(result);
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to sign petition" },
      { status: 500 }
    );
  }
}
