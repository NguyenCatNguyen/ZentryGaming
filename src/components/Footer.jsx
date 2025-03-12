import React from 'react';
import Button from './Button.jsx';

const Footer = () => {
  
  return (
    <div className='w-screen p-10  bg-violet-300 uppercase text-1xl flex flex-col items-center'>
      <ul className='flex justify-center space-x-10 py-5'>
        <a href="https://github.com/NguyenCatNguyen"><Button title="Github" /></a>
        <a href="https://www.linkedin.com/in/cat-nguyen-626621235/"><Button title="LinkedIn" /></a>
      </ul>
      <p className=''>
        Copyright @ 2025 Cat Nguyen</p>
    </div>
  );
};

export default Footer;
