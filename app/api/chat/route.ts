import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const runtime = 'edge';

const minimax = createOpenAI({
  apiKey: process.env.MINIMAX_API_KEY,
  baseURL: 'https://api.minimax.io/v1',
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: minimax('abab5.5-chat'),
    messages,
  });

  return result.toAIStreamResponse();
}
