import React from 'react';

const CategoryList = ({ categories }) => {
  return (
    <div>
      {categories.map((category) => (
        <h3 key={category}>{category}</h3>
      ))}
    </div>
  );
};

export default CategoryList;