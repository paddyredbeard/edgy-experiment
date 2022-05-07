// netlify/edge-functions/hello.ts

import type { Context } from 'netlify:edge';

export default async (request: Request, context: Context) => {
  /*
  return new Response('Hello, World!', {
    headers: { 'content-type': 'text/html' },
  })
  */

  return context.json({ msg: "hello, world" });
}

