"use client";
// app/global-error.js
export default function GlobalError({
  error,
  reset,
}: {
  error: any;
  reset: any;
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong! global</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
