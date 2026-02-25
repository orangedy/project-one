import { promises as fs } from "node:fs";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";

type JsonRecord = Record<string, unknown>;

function pickFirst(values: string[] | undefined): string {
  if (!values || values.length === 0) {
    return "";
  }
  return values[0] ?? "";
}

export async function POST(req: NextRequest) {
  let clientData: JsonRecord = {};

  try {
    clientData = (await req.json()) as JsonRecord;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const forwardedFor = req.headers.get("x-forwarded-for")?.split(",").map((v) => v.trim());

  const serverData = {
    ip: pickFirst(forwardedFor),
    vercelIpCountry: req.headers.get("x-vercel-ip-country") ?? "",
    vercelIpRegion: req.headers.get("x-vercel-ip-country-region") ?? "",
    vercelIpCity: req.headers.get("x-vercel-ip-city") ?? "",
    vercelIpLatitude: req.headers.get("x-vercel-ip-latitude") ?? "",
    vercelIpLongitude: req.headers.get("x-vercel-ip-longitude") ?? "",
    host: req.headers.get("host") ?? "",
    receivedAt: new Date().toISOString()
  };

  const record = {
    server: serverData,
    client: clientData
  };

  console.log("[collect]", JSON.stringify(record));

  // On Vercel this is ephemeral (/tmp). Useful for short-term debugging.
  const logPath = path.join("/tmp", "collect.log");
  try {
    await fs.appendFile(logPath, `${JSON.stringify(record)}\n`, "utf8");
  } catch {
    // Ignore file write failures to avoid impacting requests.
  }

  return NextResponse.json({ ok: true });
}
