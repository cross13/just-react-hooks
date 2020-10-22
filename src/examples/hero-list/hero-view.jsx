import * as React from 'react';
import axios from 'axios';

import HeroList from './hero-list';
import Pagination, { paginate } from './pagination';

const PAGE_SIZE = 10;
const HEROES_API_ALL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';

class HeroView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            loading: true,
            currentPage: 1,
            total: 0
        };
    }

    componentDidMount() {
        axios.get(HEROES_API_ALL)
        .then((response) => {
            this.setState({
                list: response.data,
                total: parseInt(response.data / PAGE_SIZE)
            })
        })
        .finally(() => {
            this.setState({
                loading: false
            })
        })
    }


    render() {
        const { loading, list, currentPage } = this.state;

        if (loading) {
            return <div>Loading</div>;
        }

        return (
            <>
                <HeroList list={paginate(list, PAGE_SIZE, currentPage)} />
                <Pagination current={currentPage} onClick={(curr) => this.setState({
                    currentPage: curr
                })} />
            </>
        )
    }
}

export default HeroView;
