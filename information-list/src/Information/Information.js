import React from 'react';
import './Information.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Information = (props) => {
    console.log(props.information);
    const {name, address, number, email, profile} = props.information;
    return (
        <div className="picture">
            <div>
                <img style={{height: '200px'}} src={profile} alt="" />
            </div>
            <div className="name">
                <h4 className="picture-name">{name}</h4>
                <h3>Own Address: {address}</h3>
                <h3>His Email Address: {email}</h3>
                <h3>Contact-Number: {number}</h3>
                <button className="main-button"> <FontAwesomeIcon icon={faPlus} />  Add count</button>
            </div>
            
        </div>
    );
};

export default Information;