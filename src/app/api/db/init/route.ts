import { NextResponse } from "next/server";
import { initDatabase, isDatabaseConfigured } from "@/lib/db";

export async function GET() {
  const configured = isDatabaseConfigured();
  return NextResponse.json({
    status: configured ? "connected" : "standalone_memory",
    database: "Neon Serverless PostgreSQL",
    configured,
    notice: configured
      ? "Neon PostgreSQL connection detected."
      : "DATABASE_URL not detected in environment. Running in resilient baseline mode.",
  });
}

export async function POST() {
  const result = await initDatabase();
  return NextResponse.json(result);
}
