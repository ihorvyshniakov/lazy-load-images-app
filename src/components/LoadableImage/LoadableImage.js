import React, { useEffect, useRef, useState } from 'react';
import s from './LoadableImage.module.css';
import cn from 'classnames';

const LoadableImage = ({ src, alt = '', onLoad = () => {} }) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const imageRef = useRef(null);

	useEffect(() => {
		if (imageRef.current) {
			imageRef.current.onload = () => setIsLoaded(true);
		}
	}, []);

	return (
		<div
			className={cn(s.container, {
				[s.containerLoaded]: isLoaded,
			})}
		>
			<img
				ref={imageRef}
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
