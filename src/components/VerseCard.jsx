import React from 'react';

const VerseCard = ({ verse, error, translation, onRefresh }) => {
  return (
    <div className="verse-card bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 z-10">
      <img
        src="/backdrop.jpg"
        alt="Backdrop"
        className="verse-backdrop w-full h-80 md:h-96 object-cover opacity-50"
      />
      <div className="verse-content bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-center items-center text-center p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg">
          Daily Bible Verse
        </h1>
        {error ? (
          <p className="text-red-400 text-lg md:text-xl lg:text-2xl mb-6 drop-shadow-md">
            {error}
          </p>
        ) : verse ? (
          <>
            <p className="verse-text text-lg md:text-xl lg:text-2xl font-serif italic text-white mb-6 drop-shadow-md max-w-full">
              "{verse.text}"
            </p>
            <p className="verse-reference text-base md:text-lg lg:text-xl font-semibold text-white drop-shadow-md mb-8">
              {verse.reference} ({translation})
            </p>
          </>
        ) : (
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-6 drop-shadow-md">
            Loading verse...
          </p>
        )}
        <button
          onClick={onRefresh}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 text-base md:text-lg"
        >
          New Verse
        </button>
      </div>
    </div>
  );
};

export default VerseCard;