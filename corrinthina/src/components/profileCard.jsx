import React from 'react';
import coco from '../assets/coco.jpg'; // You can replace this with actual dynamic imports or props
import { Link } from 'react-router-dom';


export const cards = [
  {
    id: 1,
    image: coco,
    title: 'Giving Day',
    subtitle: 'Campaign',
    filters: ['Campaign'],
    images: [coco, coco, coco],
    link: 'brand1'
  },
  {
    id: 2,
    image: coco,
    title: 'Malou',
    subtitle: 'Brand Identity',
    filters: ['Brand Identity'],
    images: [coco, coco],
    link: 'brand2'
  },
  {
    id: 3,
    image: coco,
    title: 'Lissa Moore Article',
    subtitle: 'Articles',
    filters: ['Articles'],
    images: [coco, coco],
    link: 'brand3'
  },
  {
    id: 4,
    image: coco,
    title: 'Inside Fashion',
    subtitle: 'Brand Identity, Articles',
    filters: ['Brand Identity', 'Articles'],
    images: [coco, coco],
    link: 'brand4'
  },
];

const CardGrid = ({ activeFilter }) => {
  const filteredCards =
    activeFilter === 'All Projects'
      ? cards
      : cards.filter((card) => card.filters.includes(activeFilter));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
      {filteredCards.map((card) => (
        <div key={card.id}>
          <Link to={`/${card.link}`} onClick={handleLinkClick}>
          <img
            src={card.image}
            alt={card.title}
            className=" aspect-square object-cover"
          />
          <p className="mt-4 text-xl font-light">{card.title}</p>
          <p className="text-gray-600">{card.subtitle}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;

const handleLinkClick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};