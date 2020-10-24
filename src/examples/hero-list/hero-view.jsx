import * as React from 'react';
import axios from 'axios';

import HeroList from './hero-list';
import Pagination, { paginate } from './pagination';

const PAGE_SIZE = 10;
const HEROES_API_ALL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';

const useGetRequest = (url) => {
    const [list, setList] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        axios.get(url)
        .then((response) => {
            setList(response.data);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [url]);

    return [list, loading];
} 

const HeroView = () => {
  
    const [currentPage, setCurrentPage] = React.useState(1);
    const [ selectedHero, setSelectedHero ] = React.useState('');
    const [list, loading] = useGetRequest(HEROES_API_ALL);

    // NOTA - el console log tenia q estar dentro de la funcion paginate :P my bad
    const paginatedList = React.useMemo(() => paginate(list, PAGE_SIZE, currentPage), [list, currentPage]);

    if (loading) {
        return <div>Loading</div>;
    }

    return (
        <>
            { selectedHero && <div>HERO SELECTED: {selectedHero}</div> }
            <HeroList setSelectedHero={setSelectedHero} list={paginatedList} />
            <Pagination current={currentPage} onClick={(curr) => setCurrentPage(curr)} />
        </>
    )
}

export default HeroView;
