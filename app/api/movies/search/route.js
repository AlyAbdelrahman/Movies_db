import 'dotenv/config'
const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;


import { NextResponse } from 'next/server'
export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const searchTerm = searchParams.get('searchTerm');
  const selectedCategory = searchParams.get('type');
  const seasonNumber = searchParams.get('Season');
  const episodeNumber = searchParams.get('Episode');
  const url = `${apiUrl}?apikey=${apiKey}&s=${searchTerm}&type=${selectedCategory}&Season=${seasonNumber}&Episode=${episodeNumber}`;
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const movies = await res.json();
  return NextResponse.json(movies)
}