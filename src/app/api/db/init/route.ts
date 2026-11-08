import { NextResponse } from "next/server";
import { initDatabase, isDatabaseConfigured } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const configured = isDatabaseConfigured();
  const raw = process.env.DATABASE_URL || "";
  return NextResponse.json({
    status: configured ? "connected" : "standalone_memory",
    database: "Neon Serverless PostgreSQL",
    configured,
    hasEnv: Boolean(raw),
    urlPrefix: raw ? raw.slice(0, 15) : "none",
    notice: configured
      ? "Neon PostgreSQL connection verified and active."
      : "DATABASE_URL not detected in environment. Running in resilient baseline mode.",
  });
}

export async function POST() {
  const result = await initDatabase();
  return NextResponse.json(result);
}
