import React from 'react';
import s from './ItemsGrid.module.css';

const ItemsGrid = props => {
	return (
		<div className={s.container}>
			{props.data.map((item, id) => (
				<div key={id} className={s.item}>
					<img src={item} alt='' />
				</div>
			))}
		</div>
	);
};

export default ItemsGrid;
