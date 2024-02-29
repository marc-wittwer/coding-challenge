import React from 'react';

function Title({ title, description }) {
  return (
    <div className='my-2'>
      <h1 className='bg-gray-800'>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Title;
