import { NextResponse } from "next/server";

export async function GET(request: any, { params }: any) {
  const field = request.nextUrl.searchParams.get("dataField");
  const data = await (
    await fetch(
      `http://taizonga.top:3333/api/public/getAllList?current=1&size=${params.id}`
    )
  ).json();
  const result = field ? { [field]: data[field] } : data;
  return NextResponse.json(result);
}
