import React, { useEffect } from 'react';
import './app.css';
import Typed from 'react-typed';

const Header = () => {
  useEffect(() => {
    const header = document.getElementById('header');
    header.style.animation = 'slide-in 1s ease-in-out';
    
    const title = document.getElementById('title');
    title.style.animation = 'bounce 2s infinite';
  }, []);

  return (
    <div className='container'>
        <div className='header' id='header'>
      <h1 className='title' id='title'>
        hi, i am Daniel
        
      </h1>
      
      <span>
        <div className='animated-typing'>
            <Typed
              strings={[
                "beginner in developer",
                "fgrkergkm",
                "rghfmn"
              ]}
              typeSpeed={40}
              backSpeed={30}
              loop                
            />
        </div>
      </span>
      <div>
        <img src='src/data/image.png' alt='description' className='header-image' />
      </div>
      
    </div>
    </div>
    
  );
};

export default Header;
