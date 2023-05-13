import React, { useEffect } from 'react';
import './app.css';
import Typed from 'react-typed';

const Header = () => { 
  useEffect(() => {
    const header = document.getElementById('header');
    header.style.animation = 'slide-in 1s ease-in-out';
    
    const title = document.getElementById('title');
    title.style.animation = 'pulse 2s infinite';
  }, []);

  return (
    <div className='header' id='header'>
      <h1 className='title' id='title'>hi, i am Daniel</h1>
      <span>
        <Typed>
            strings={[
                "beginner in developer",
                "fgrkergkm",
                "rghfmn"
            ]}
            typeSpeed={150}
            backSpeed={100}
            loop
        </Typed>
      </span>
    </div>
  );
}

export default Header;
