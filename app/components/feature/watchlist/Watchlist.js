'use client'
import { Fragment, useEffect, useState } from 'react';
import { firestore } from '@/firebase';
import { onSnapshot, doc } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserWatchlistData } from '@/provider/reducers/userReducer';

const WatchList = () => {
    const [watchlist, setWatchlist] = useState([]);
    const { userData } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {


        const fetchWatchlist = async () => {
            if (userData && userData.uid) {
                try {
                    // Get the user document from Firestore
                    const userDocRef = doc(firestore, 'users', userData.uid);
                    // Set up a real-time listener for changes to the watchlist
                    const unsubscribe = onSnapshot(userDocRef, (doc) => {
                        console.log('doc.exists()', doc.exists())
                        if (doc.exists()) {
                            const user = doc.data();
                            // Set the watchlist in the component state
                            setWatchlist(user.watchlist || []);
                            dispatch(updateUserWatchlistData({ userWatchlist: user.watchlist }));

                        }
                    });

                    // Clean up the listener when the component unmounts
                    return () => unsubscribe();
                } catch (error) {
                    console.error('Error fetching watchlist:', error);
                }
            }
        };

        // Call the fetchWatchlist function when the component mounts
        fetchWatchlist();
    }, [userData]);

    return (
        <div className="max-w-md mx-auto my-8 p-6 bg-gray-900 text-white rounded-md shadow-md text-center">
            {userData ? (
                <div>
                    {/* Display the user's watchlist */}
                    <div className="mt-4">
                        <p className="text-xl font-semibold mb-2">Watchlist</p>
                        {watchlist.length > 0 ? (
                            <ul>
                                {watchlist.map((movie, index) => (
                                    <Fragment key={index}>
                                        <div className="flex items-center mb-4">
                                            <img src={movie.Poster} alt={movie.Title} className="w-16 h-20 mr-4" />
                                            <div>
                                                <p className="text-lg font-semibold">{movie.Title}</p>
                                                <p className="text-gray-500">{movie.Genre}</p>
                                            </div>
                                        </div>
                                        {index !== watchlist.length - 1 && <hr className="border-t border-gray-300 my-4" />}
                                    </Fragment>
                                ))}
                            </ul>
                        ) : (
                            <p>No movies in the watchlist. Add some!</p>
                        )}
                    </div>
                </div>
            ) : (
                'Sign in to add new watch list'
            )}
        </div>
    );
};

export default WatchList;
