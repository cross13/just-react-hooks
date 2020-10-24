import * as React from 'react';

const HeroList = (props) =>  {
    const { list, setSelectedHero } = props;
    return <div>
        {list?.map((hero) => <div className="row" key={`hero-${hero.id}`}>
            <div className="col">
                <h4 onClick={() => setSelectedHero(hero.name)}>{hero.name}</h4>
            </div>
            <div className="col">
                <img src={hero.images.sm} alt="hero-avatar" />
            </div>
        </div>)}           
    </div>;
}

export default HeroList;