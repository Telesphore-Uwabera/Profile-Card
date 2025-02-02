import React from 'react';

interface ListProps {
  items: string[];
}

const List: React.FC<ListProps> = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export default List;
