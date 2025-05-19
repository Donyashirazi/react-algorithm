type BinarySearchProps = {
	listofValues: number[];
	targetValue: number;
};

const BinarySearch = ({ listofValues, targetValue }: BinarySearchProps) => {
	//For Basic programming
	// const mapValues = listofValues.map((item) => item).sort();
	//For React
	// const foundIndex = listofValues.findIndex((item) => item === targetValue);
	const mapValues = listofValues.map((item) => item).sort();

	return mapValues;
};

export default BinarySearch;
