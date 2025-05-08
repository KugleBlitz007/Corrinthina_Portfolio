import React, { useState } from 'react';
import CardGrid from './profileCard';

const filters = [
  'All Projects',
  'Brand Identity',
  'Campaign',
  'Packaging',
  'Articles', 
];

const FilterGallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('All Projects');

  return (
    <div className="px-4 py-8">
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-4 py-2 border text-lg rounded-md ${
              selectedFilter === filter
                ? 'bg-black text-white'
                : 'bg-white text-black'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <CardGrid activeFilter={selectedFilter} />
    </div>
  );
};

export default FilterGallery;
