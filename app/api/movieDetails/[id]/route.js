import { NextResponse } from 'next/server'
import 'dotenv/config'
const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

export async function GET(request,{params}) {

  // const { searchParams } = new URL(request.url)
  console.log('reqID>>>>>>>>>>>>>>',params.id)
  const url = `${apiUrl}?apikey=${apiKey}&i=${params.id}`;

  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const movies = await res.json()
  return NextResponse.json(movies)


  // const { searchParams } = new URL(request.url)
  // const searchTerm = searchParams.get('searchTerm')
  // const url = `${apiUrl}?apikey=${apiKey}&s=${searchTerm}`;
 
  // const { id } = req.query;
  // console.log('>>req',req)
  // console.log('>>id',id)

  
  //   if (!id) {
  //     return res.status(400).json({ message: 'Missing movie ID parameter' });
  //   }
  
  //   try {
  //     const url = `${apiUrl}?apikey=${apiKey}&i=${id}`;
  //     const response = await fetch(url);
  //     const data = await response.json();
  
  //     if (data.Error) {
  //       return res.status(404).json({ message: 'Movie not found' });
  //     }
  
  //     res.status(200).json(data);
  //   } catch (error) {
  //     res.status(500).json({ message: 'Server error' });
  //   }
  }