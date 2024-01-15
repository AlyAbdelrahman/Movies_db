'use client'
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { firestore } from '@/firebase';

export default function AddToWatchList({ movieData }) {
  const { userData, userWatchlist } = useSelector((state) => state.user);

  const [isMovieInWatchedlist, setIsMovieInWatchedlist] = useState(false);

  useEffect(() => {
    if (userWatchlist && userWatchlist.length > 0) {
      const isAdded = userWatchlist.find((movie) => movie.imdbID === movieData.imdbID);
      setIsMovieInWatchedlist(!!isAdded);
    } else {
      setIsMovieInWatchedlist(false);
    }
  }, [userWatchlist, movieData]);

  const addToWatchList = async (movie) => {
    if (userData && userData.uid) {
      try {
        const userDocRef = doc(firestore, 'users', userData.uid);
        await updateDoc(userDocRef, {
          watchlist: arrayUnion(movie),
        });

        console.log('Movie added to watch list:', movie);
      } catch (error) {
        console.error('Error adding movie to watch list:', error);
      }
    }
  };

  const removeFromWatchList = async (movie) => {
    if (userData && userData.uid) {
      try {
        const userDocRef = doc(firestore, 'users', userData.uid);
        await updateDoc(userDocRef, {
          watchlist: arrayRemove(movie),
        });

        console.log('Movie removed from watch list:', movie);
        setIsMovieInWatchedlist(false); // Update local state
      } catch (error) {
        console.error('Error removing movie from watch list:', error);
      }
    }
  };

  if (!userData) return null;

  return (
    <div>
      {isMovieInWatchedlist ? (
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => removeFromWatchList(movieData)}
        >
          Remove from watch list
        </button>
      ) : (
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => addToWatchList(movieData)}
        >
          Add to watch list
        </button>
      )}
    </div>
  );
}
