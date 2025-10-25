import React from 'react'; // Add this import

const TranslationSelector = ({ translations, selectedTranslation, onChange }) => {
  return (
    <div className="relative">
      <select
        value={selectedTranslation}
        onChange={(e) => onChange(e.target.value)}
        className="translation-selector appearance-none pr-8"
      >
        {translations.map((trans) => (
          <option key={trans} value={trans}>
            {trans}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default TranslationSelector;