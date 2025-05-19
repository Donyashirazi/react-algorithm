type linearSearchProps = {
	listofValues: number[];
	targetValue: number;
};

const LinearSearch = ({ listofValues, targetValue }: linearSearchProps) => {
	//For Basic programming
	for (let index = 0; index < listofValues.length; index++) {
		if (listofValues[index] == targetValue) {
			return index;
		}
		return -1;
	}
	//For React
	const foundIndex = listofValues.findIndex((item) => item === targetValue);

	return foundIndex;
};

export default LinearSearch;
