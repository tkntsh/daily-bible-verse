import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VerseCard from './components/VerseCard';
import './App.css';

const App = () => {
  const [verse, setVerse] = useState(null);
  const [error, setError] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const translation = 'NET';

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const fetchVerse = async () => {
    try {
      setError(null);
      const today = getTodayDate();
      const cacheKey = `verse_${today}_${refreshTrigger}`;
      const cachedVerse = localStorage.getItem(cacheKey);

      if (cachedVerse) {
        setVerse(JSON.parse(cachedVerse));
        console.log(`Using cached verse for ${today} in ${translation}...`);
        return;
      }

      console.log(`Fetching random verse in ${translation}...`);
      const response = await axios.get(
        'https://labs.bible.org/api/?passage=random&type=json'
      );

      const verseData = response.data[0];
      const formattedVerse = {
        text: verseData.text,
        reference: `${verseData.bookname} ${verseData.chapter}:${verseData.verse}`,
        translation: translation,
      };

      localStorage.setItem(cacheKey, JSON.stringify(formattedVerse));
      setVerse(formattedVerse);
    } catch (error) {
      console.error('Error fetching verse:', error.response?.data || error.message);
      setError('Failed to fetch verse. Please try again later.');
      setVerse(null);
    }
  };

  useEffect(() => {
    fetchVerse();
  }, [refreshTrigger]);

  const handleRefresh = () => {
    setRefreshTrigger((prev) => prev + 1);
    localStorage.clear();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-4 relative">
      <div className="backdrop-card bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl shadow-xl"></div>
      <VerseCard
        verse={verse}
        error={error}
        translation={translation}
        onRefresh={handleRefresh}
      />
    </div>
  );
};

export default App;