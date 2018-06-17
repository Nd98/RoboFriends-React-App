import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
	const cardComponent = robots.map((user, i) =>{
		return (
		<Card 
		key={i} 
		id={robots[i].id} 
		name={robots[i].name} 
		email={robots[i].email} 
		/>
	);

})
	return !robots.length ?
	<h1 className='tc'>No Robots Found!!!</h1> :
	 (
    <div>
        {cardComponent}
    </div>
 );
}

export default CardList;