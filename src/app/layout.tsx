import React from "react";
import "./globals.css";

export default function Layout({ children, modal, analytics, team }: any) {
  return (
    <html>
      <body>
        {children}
        <hr />
        {modal}
        <hr />
        {analytics}
        {team}
      </body>
    </html>
  );
}
