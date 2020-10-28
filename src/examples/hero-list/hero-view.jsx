import React, { useMemo, useState } from 'react';

import HeroList from './hero-list';
import Pagination, { paginate } from './pagination';
import { useHerosList } from './useHeroList';

const PAGE_SIZE = 10;

const HeroView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedHero, setSelectedHero] = useState();

  const { list, loading } = useHerosList();

  const paginatedList = useMemo(() => paginate(list, PAGE_SIZE, currentPage), [list, currentPage]);

  return (
    <>
      { loading 
        ? <div>Loading</div>
        : (
          <>
            { selectedHero && <div>Selected: {selectedHero}</div> }
            <HeroList setSelectedHero={setSelectedHero} list={paginatedList} />
            <Pagination current={currentPage} onClick={setCurrentPage} />
          </>
        )
      }
    </>
  );
}

export default HeroView;
