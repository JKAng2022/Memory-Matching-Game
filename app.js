let testArr = [];

const winArr = [];

const testIfMatch = () => {
	const $firstItem = testArr[0];
	const $secondItem = testArr[1];

	if ($firstItem.attr("data-img") === $secondItem.attr("data-img")) {
		console.log("hihi");
		// push matching items to win Array
		winArr.push($firstItem);
		winArr.push($secondItem);
		// clear out the testArr
		testArr = [];
		console.log(testArr);
		console.log(winArr);
	}
};

const testFunction = (event) => {
	if (testArr.length === 0) {
		const clicked = $(event.currentTarget).css("opacity", 1);
		testArr.push(clicked);
	} else if (testArr.length === 1) {
		const clicked = $(event.currentTarget).css("opacity", 1);
		testArr.push(clicked);
		testIfMatch();
	}
};

$(() => {
	$("img").on("click", testFunction);
});
