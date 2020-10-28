import React from 'react';

const HeroList = ({ setSelectedHero, list }) => 
  <div>
    { list?.map(({ id, name, images}) => 
      <div className="row" key={`hero-${id}`} onClick={() => setSelectedHero(name)}>
        <div className="col">
          <h4>{name}</h4>
        </div>
        <div className="col">
          <img src={images.sm} alt="hero-avatar" />
        </div>
      </div>
    )}           
  </div>;

export default HeroList;