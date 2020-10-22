import * as React from 'react';

export const paginate = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}

const Pagination = ({current = 1, onClick}) => <div className="pagination">
    <ul>
        <li className="previous" onClick={() => onClick(current - 1)}>
            <a className="fui-arrow-left" />
        </li>
        <li className="next" onClick={() => onClick(current + 1)}>
            <a className="fui-arrow-right"></a>
        </li>
    </ul>
</div>

export default Pagination;
