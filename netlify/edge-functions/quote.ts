import type { Context } from 'netlify:edge';
import quotes from "../../public/quotes.json" assert { type: 'json' };

export default async (request: Request, context: Context) => {
  const myQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return context.json({ quote: myQuote });
};
