// import fetch from 'isomorphic-unfetch';
import 'dotenv/config'
// import { NextResponse } from 'next/server';
const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;


// export default async function GET(req, {params}) {
//   const { search } = params;
// console.log('first',search)
//   if (!search) {
//     return res.status(400).json({ message: 'Missing search query parameter' });
//   }

//   try {
//     const url = `${apiUrl}?apikey=${apiKey}&s=${search}`;
//     console.log('firsttttt',url)
//     const response = await fetch(url);
//     const data = await response.json();

//     if (data.Error) {
//       return res.status(404).json({ message: 'Movie not found' });
//     }

//     NextResponse.json(data);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// }

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
  const movies = await res.json()
  return NextResponse.json(movies)
}