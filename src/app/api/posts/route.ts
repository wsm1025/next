import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "http://taizonga.top:3333/api/public/getAllList?current=1&size=20"
  );
  const data = await res.json();

  return NextResponse.json({ data });
}

export async function POST(request: any) {
  const article = await request.json();

  return NextResponse.json(
    {
      id: Math.random().toString(36).slice(-8),
      data: article,
    },
    { status: 201 }
  );
}
