import { NextResponse } from 'next/server'
import 'dotenv/config'
const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

export async function GET(request, { params }) {

  if (!params.id) {
    return res.status(400).json({ message: 'Missing movie ID parameter' });
  }
  const url = `${apiUrl}?apikey=${apiKey}&i=${params.id}`;
  try {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const movies = await res.json()
    return NextResponse.json(movies)
  }
  catch {
    res.status(500).json({ message: 'Server error' });
  }
}