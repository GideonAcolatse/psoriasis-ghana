import { NextResponse } from "next/server";
import { getDonations, recordDonation } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const donations = await getDonations();
  return NextResponse.json({ success: true, donations });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { reference, donorName, donorEmail, amount, currency, channel, status } = body;

    if (!reference || !donorName || !amount) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const created = await recordDonation({
      reference,
      donorName,
      donorEmail: donorEmail || "donor@example.com",
      amount: Number(amount),
      currency: currency || "GHS",
      channel: channel || "Direct Transfer",
      status: status || "success",
      date: new Date().toISOString().split("T")[0],
    });

    return NextResponse.json({ success: true, donation: created });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to record donation" },
      { status: 500 }
    );
  }
}
