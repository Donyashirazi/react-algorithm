// import React from 'react';
// import '../App.css';
// import IndividualBox from './box';

// export interface IGridProps {
// 	rows: number;
// 	columns: number;
// }

// const Grid = ({ rows, columns }: IGridProps) => {
// 	const numbers = rows * columns;
// 	// const createdNumbers = Array.from({ length: numbers }, (_, i) => i + 1);

// 	const ArrayOnTest = [[], [], []];

// 	const createNumbers = () => {
// 		const rowArray = [];
// 		for (let i = 1; i <= columns; i++) {
// 			rowArray.push(i);
// 		}
// 		return rowArray;
// 	};
// 	//@ts-ignore
// 	const createdArrays = new Array(rows).fill(createNumbers());

// 	console.log('createdArray', createdArrays);
// 	let lastChild;

// 	return (
// 		<div className="">
// 			{createdArrays.map((item) => {
// 				lastChild = item[item.length - 1];

// 				return (
// 					<div className="container">
// 						<IndividualBox
// 							items={item}
// 							lastChild={lastChild}
// 						/>
// 					</div>
// 				);
// 			})}
// 		</div>
// 	);
// };

// export default Grid;
