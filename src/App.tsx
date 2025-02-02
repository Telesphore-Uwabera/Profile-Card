import React from 'react';
import ProfileCard from './ProfileCard';
import profileImage from '../src/assets/ut.jpg';

const App: React.FC = () => {
  return (
    <div className="app">
      <ProfileCard
        name="Telesphore Uwabera"
        title="CEO of TeleTech Solutions Ltd."
        description="I am a multifaceted professional, proficient in software engineering, frontend web development, backend web development, mobile development, cybersecurity, web design, and graphic design. I am fueled by my passion for mathematics and aspire to be a leader in the tech industry, bringing a versatile skill set and unwavering enthusiasm for every challenge I take on."
        imageUrl={profileImage} 
      />
    </div>
  );
};

export default App;
