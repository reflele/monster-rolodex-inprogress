import React from 'react';
import PropTypes from 'prop-types';
import MonsterCards from "./MonsterCards";
import "./styles/card-list.css"

const MonsterList = ({monsters}) => {
    return (
        <div className="card-list">
            {
                monsters.map( (element) => {
                    return <MonsterCards name={"Mo"} email={"email"} image={"https://robohash.org/${" + element.id + "}?set=set2&size=180x180"}  />
                })
            }
        </div>
    );
};

MonsterList.propTypes = {

};

export default MonsterList;