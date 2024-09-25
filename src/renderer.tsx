import { jsxRenderer } from "hono/jsx-renderer";

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html>
      <head>
        <link href="/static/style.css" rel="stylesheet" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/static/images/favicon.ico" rel="icon" />
        <title>ZeroSum — Maintenance</title>
      </head>
      <body>{children}</body>
    </html>
  );
});
