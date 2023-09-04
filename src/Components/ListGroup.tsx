import React, { useState } from 'react';

interface Props {
    items: string[];
    heading: string;
}
function ListGroup(props: Props) {
    

    const [selecteditem, setselecteditem] = useState(-1);

    return (
        <>
        <h1>List</h1>
        { props.items.length === 0 && <p>There are no items in the list</p>}
        <ul className="list-group">
            {props.items.map((item,index) => <li className={selecteditem===index? "list-group-item active" :"list-group-item"} key={item} onClick={() => {setselecteditem(index)}}>{(item)}</li>)}
        </ul>
        </>
    )
}

export default ListGroup;