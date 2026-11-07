import { NextResponse } from "next/server";
import { getMetrics, updateMetric } from "@/lib/db";

export async function GET() {
  const metrics = await getMetrics();
  return NextResponse.json({ success: true, metrics });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { key, value } = body;

    if (!key || typeof value !== "string") {
      return NextResponse.json(
        { success: false, error: "Invalid key or value" },
        { status: 400 }
      );
    }

    const ok = await updateMetric(key, value);
    return NextResponse.json({ success: ok });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to update metric" },
      { status: 500 }
    );
  }
}
