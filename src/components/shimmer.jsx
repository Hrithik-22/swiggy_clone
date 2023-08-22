import React from 'react'

const SHimmer = () => {
  return (
    <div className="restaurantlist">

    {Array(10)
      .fill("")
      .map((e,index) => (
        <div  key="index" className="shimmerCard"></div>
        ))}
        </div>
    
    
  );
};

export default SHimmer;
