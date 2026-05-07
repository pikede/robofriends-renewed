import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const cardComponent = robots.map((user,index) => {
        return (
            <Card 
                key={index} 
                id={user.id} 
                name={user.name} 
                email={robots[index].email}
            />
        );
    })
    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;