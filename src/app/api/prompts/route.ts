import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: NextRequest, resp: NextResponse) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, error } = await supabase.from("prompts").select();
  return NextResponse.json({ prompts: data || [] });
}
