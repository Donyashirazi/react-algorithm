import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import LinearSearch from './components/linear_search';
import BinarySearch from './components/binary_search';

function App() {
	return (
		<>
			<div>
				<a
					href="https://vite.dev"
					target="_blank"
				>
					<img
						src={viteLogo}
						className="logo"
						alt="Vite logo"
					/>
				</a>
				<a
					href="https://react.dev"
					target="_blank"
				>
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			{/* <LinearSearch
				listofValues={[1, 2, 3, 4]}
				targetValue={2}
			/> */}
			<BinarySearch
				listofValues={[1, 3, 2, 4]}
				targetValue={2}
			/>
		</>
	);
}

export default App;
