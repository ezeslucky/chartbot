import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: NextRequest, resp: NextResponse) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, error } = await supabase.from("bots").select();
  return NextResponse.json({ bots: data || [] });
}
