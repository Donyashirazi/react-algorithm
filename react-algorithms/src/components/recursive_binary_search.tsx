type BinarySearchProps = {
	listofValues: number[];
	targetValue: number;
};

const RecursiveBinarySearch = ({
	listofValues,
	targetValue,
}: BinarySearchProps): boolean => {
	if (listofValues.length === 0) {
		return false;
	}

	const midPoint = Math.floor(listofValues.length / 2);

	if (listofValues[midPoint] === targetValue) {
		return true;
	} else if (listofValues[midPoint] < targetValue) {
		// Search right half
		return RecursiveBinarySearch({
			listofValues: listofValues.slice(midPoint + 1),
			targetValue,
		});
	} else {
		// Search left half
		return RecursiveBinarySearch({
			listofValues: listofValues.slice(0, midPoint),
			targetValue,
		});
	}
};

export default RecursiveBinarySearch;
