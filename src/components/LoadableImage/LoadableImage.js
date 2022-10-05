import React, { useState } from 'react';
import s from './LoadableImage.module.css';
import cn from 'classnames';

const LoadableImage = ({ src, alt = '', onLoad = () => {} }) => {
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<div
			className={cn(s.container, {
				[s.containerLoaded]: isLoaded,
			})}
		>
			<img
				className={cn(s.image, {
					[s.imageLoaded]: isLoaded,
				})}
				src={src}
				alt={alt}
			/>
		</div>
	);
};

export default LoadableImage;
