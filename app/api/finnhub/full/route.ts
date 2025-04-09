import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const symbol = searchParams.get('symbol') || 'AAPL';
  const apiKey = process.env.FINNHUB_API_KEY;

  const today = new Date();
  const prior = new Date();
  prior.setDate(today.getDate() - 7);

  const from = prior.toISOString().split("T")[0];
  const to = today.toISOString().split("T")[0];

  const quoteUrl = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`;
  const newsUrl = `https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=${from}&to=${to}&token=${apiKey}`;

  try {
    const [quoteRes, newsRes] = await Promise.all([
      fetch(quoteUrl),
      fetch(newsUrl),
    ]);

    const [stock, news] = await Promise.all([
      quoteRes.json(),
      newsRes.json(),
    ]);

    return NextResponse.json({ stock, news });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch stock or news data.' },
      { status: 500 }
    );
  }
}
