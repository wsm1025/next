import { NextResponse } from "next/server";

// // 中间件可以是 async 函数，如果使用了 await
// export function middleware(request) {
//   return NextResponse.redirect(new URL("/", request.url));
// }

// // 设置匹配路径
// export const config = {
//   matcher: "/dashboard/:path*",
// };

export function middleware(request) {
  // 假设传入的请求 header 里 "Cookie:nextjs=fast"
  let cookie = request.cookies.get("nextjs");
  console.log(cookie); // => { name: 'nextjs', value: 'fast', Path: '/' }
  const allCookies = request.cookies.getAll();
  console.log(allCookies); // => [{ name: 'nextjs', value: 'fast' }]

  request.cookies.has("nextjs"); // => true
  request.cookies.delete("nextjs");
  request.cookies.has("nextjs"); // => false

  // 设置 cookies
  const response = NextResponse.next();
  response.cookies.set("vercel", "fast");
  response.cookies.set({
    name: "vercel",
    value: "fast",
    path: "/",
  });
  cookie = response.cookies.get("vercel");
  console.log(cookie); // => { name: 'vercel', value: 'fast', Path: '/' }

  // 响应 header 为 `Set-Cookie:vercel=fast;path=/test`
  return response;
}
