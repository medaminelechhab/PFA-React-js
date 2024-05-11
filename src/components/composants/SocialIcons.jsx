import React from 'react';

function SocialIcons({ icons }) {
  return (
    <div className="flex justify-center p-0">
      {icons.map((icon, index) => (
        <a key={index} href={icon.link} className="flex items-center justify-center bg-white w-12 h-12 rounded-full shadow-md mr-14">
          <img src={icon.image} alt={icon.alt} className="w-7 h-7" />
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;
