export function extractSymbols(text: string): string[] {
  const symbolsSet = new Set<string>();

  // First, extract explicit tickers prefixed with "$"
  const regex = /\$([A-Za-z]{1,5})/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    symbolsSet.add(match[1].toUpperCase());
  }

  // Define a mapping for common company names to their ticker symbols.
  const companyMap: { [key: string]: string } = {
    "tesla": "TSLA",
    "microsoft": "MSFT",
    "google": "GOOGL",
    "alphabet": "GOOGL",
    "apple": "AAPL",
    "amazon": "AMZN",
    // Add more mappings as needed.
  };

  const lowerText = text.toLowerCase();
  for (const company in companyMap) {
    if (lowerText.includes(company)) {
      symbolsSet.add(companyMap[company]);
    }
  }

  return Array.from(symbolsSet);
}

interface StockData {
  c: number; // Current price
  h: number; // High price of the day
  l: number; // Low price of the day
  o: number; // Open price of the day
  pc: number; // Previous close price
}

export async function fetchStockData(symbol: string): Promise<StockData> {
  const finnhubKey = process.env.FINNHUB_API_KEY!;
  const quoteRes = await fetch(
    `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${finnhubKey}`
  );
  console.log(quoteRes);
  return await quoteRes.json();
}

interface CompanyNews {
  category: string;
  datetime: number;
  headline: string;
  id: number;
  image: string;
  related: string;
  source: string;
  summary: string;
  url: string;
}

export async function fetchCompanyNews(symbol: string): Promise<CompanyNews[]> {
  const finnhubKey = process.env.FINNHUB_API_KEY!;
  const today = new Date();
  const prior = new Date();
  prior.setDate(today.getDate() - 7);
  const from = prior.toISOString().split("T")[0];
  const to = today.toISOString().split("T")[0];

  const newsRes = await fetch(
    `https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=${from}&to=${to}&token=${finnhubKey}`
  );
  console.log(newsRes);
  return await newsRes.json();
}