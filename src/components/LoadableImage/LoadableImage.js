import React, { useEffect, useRef, useState } from 'react';
import s from './LoadableImage.module.css';
import cn from 'classnames';
import useOnScreen from '../../hooks/useOnScreen';

const LoadableImage = ({ src, alt = '', onLoad = () => {} }) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const imageRef = useRef(null);
	const containerRef = useRef(null);
	const isVisible = useOnScreen(containerRef);

	useEffect(() => {
		if (!isVisible || isLoaded) {
			return;
		}
		if (imageRef.current) {
			imageRef.current.onload = () => {
				setIsLoaded(true);
				onLoad();
			};
		}
	}, [isVisible, onLoad, isLoaded]);

	return (
		<div
			ref={containerRef}
			className={cn(s.container, {
				[s.containerLoaded]: isLoaded,
			})}
		>
			{(isVisible || isLoaded) && (
				<img
					ref={imageRef}
					className={cn(s.image, {
						[s.imageLoaded]: isLoaded,
					})}
					src={src}
					alt={alt}
				/>
			)}
		</div>
	);
};

export default LoadableImage;
