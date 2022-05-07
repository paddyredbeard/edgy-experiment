import type { Context } from 'netlify:edge';

export default async (request: Request, context: Context) => {
  return context.json({ msg: "hello, world" });
};
