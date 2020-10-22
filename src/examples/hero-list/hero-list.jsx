import * as React from 'react';

class HeroList extends React.Component {
    render() {
        const { list } = this.props;
        return <div>
            {list?.map((hero) => <div className="row" key={`hero-${hero.id}`}>
                <div className="col">
                    <h4>{hero.name}</h4>
                </div>
                <div className="col">
                    <img src={hero.images.sm} alt="hero-avatar" />
                </div>
            </div>)}           
        </div>;
    }
}

export default HeroList;