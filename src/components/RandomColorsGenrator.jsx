import { useState } from 'react';

const COLORS = 20;

const RandomColorsGenrator = () => {
	const [colors, setColors] = useState([]);
	const [copiedColor, setCopiedColor] = useState('');

	const generateRandomHexColor = () => {
		const chars = '0123456789ABCDEF';
		let color = '';

		for (let i = 0; i < 6; i++) {
			const randomIndex = Math.floor(Math.random() * chars.length);
			color += chars.charAt(randomIndex);
		}

		return '#' + color;
	};

	const generateColors = () => {
		return Array.from({ length: COLORS }, () => generateRandomHexColor());
	};

	const handleGenerateColors = () => {
		setColors(generateColors());
		setCopiedColor('');
	};

	const handleCopy = (color) => {
		navigator.clipboard.writeText(color);
		setCopiedColor(color);
		setTimeout(() => setCopiedColor(''), 2000);
	};

	return (
		<div className='container'>
			<header>
				<h1>Random Color Generator</h1>
				<button onClick={handleGenerateColors}>Generate Colors</button>
			</header>
			{!colors.length ? (
				<div className='info'>
					<h2>Generate Random Colors</h2>
				</div>
			) : (
				<div className='grid'>
					{colors.map((color, index) => (
						<div
							key={index}
							className='color-box'
							style={{ backgroundColor: color }}
						>
							<span>{color}</span>
							<div className='overlay'>
								<button
									className='copy-btn'
									onClick={() => handleCopy(color)}
								>
									{copiedColor === color ? 'Copied!' : 'Copy'}
								</button>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default RandomColorsGenrator;
