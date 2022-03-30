import React from 'react';
import PropTypes from 'prop-types';

const MonsterCards = ({image, name, email}) => {
    return (
        <div Color = "red">
            <div>
{/*<img src= {"./src/images/"+image} width="500px" height="500px"/>*/}
                <img src={image}/>
            </div>
            <h3>
                {name}
            </h3>
            <br/>
            <h4>
                {email}
            </h4>
        </div>
    );
};

MonsterCards.propTypes = {
    image: PropTypes.string.isRequired,
    name:  PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};

export default MonsterCards;