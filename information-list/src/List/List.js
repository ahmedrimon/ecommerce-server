import React, { useState } from 'react';
import fakeData from '../fakedata/fakedata.json';
import Information from '../Information/Information';
import './List.css';
const List = () => {
    const first15 = fakeData.slice(0, 15);
    const [informations, setInformations] = useState(first15);
    console.log(first15);
    return (
        <div className="list-container">
            <div className="info-container">
                {
                    informations.map(information => <Information information={information} key={information.id}></Information>)
                }
            </div>
            <div className="cart-container">
                <h2>Total count: </h2>
                <h3>Yearly salary: </h3>

            </div>
        </div>
    );
};

export default List;