import React from 'react';
import LoadableImage from '../LoadableImage/LoadableImage';
import s from './ItemsGrid.module.css';

const ItemsGrid = props => {
	return (
		<div className={s.container}>
			{props.data.map((item, id) => (
				<div key={id} className={s.item}>
					<LoadableImage src={item} />
				</div>
			))}
		</div>
	);
};

export default ItemsGrid;
