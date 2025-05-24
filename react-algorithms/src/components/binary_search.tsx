type BinarySearchProps = {
	listofValues: number[];
	targetValue: number;
};

//Imaging list of value = [1, 2, 3, 4, 5]

const BinarySearch = ({ listofValues, targetValue }: BinarySearchProps) => {
	const sortedList = [...listofValues].sort((a, b) => a - b);

	//For Basic programming
	let leftSideIndex = 0;
	let rightSideIndex = listofValues.length - 1;
	console.log('leftSideIndex ', leftSideIndex);
	console.log('rightSideIndex ', rightSideIndex);

	while (leftSideIndex <= rightSideIndex) {
		const midElementIndex = Math.floor((leftSideIndex + rightSideIndex) / 2);
		console.log('Middle index:', midElementIndex);

		if (sortedList[midElementIndex] === targetValue) {
			return midElementIndex;
		} else if (sortedList[midElementIndex] < targetValue) {
			leftSideIndex = midElementIndex + 1;
		} else {
			rightSideIndex = midElementIndex - 1;
		}
	}

	return -1;
};

export default BinarySearch;
