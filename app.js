let testArr = [];

const winArr = [];

const resetWrongMatch = () => {
	const $firstItem = testArr[0];
	const $secondItem = testArr[1];

	$firstItem.on("click", clickEvent)
	$secondItem.on("click", clickEvent)

	$firstItem.css("opacity", 0);
	$secondItem.css("opacity", 0);

	testArr = [];

};

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
		if (winArr.length === 16) {
			setTimeout(() => alert("You win!"), 0)
		}
	} else setTimeout(resetWrongMatch, 1500);
};

const clickEvent = (event) => {
	if (testArr.length === 0) {
		// For first item, increase opacity to 1
		const clicked = $(event.currentTarget).css("opacity", 1);
		// Off click event so that it cannot be registered more than once
		$(event.currentTarget).off("click");
		testArr.push(clicked);
	} else if (testArr.length === 1) {
		const clicked = $(event.currentTarget).css("opacity", 1);
		$(event.currentTarget).off("click");
		// test Arr should have 2 items and ready for comparison
		testArr.push(clicked);
		testIfMatch();
	}
};

const reload = () => {
	window.location.reload()
}

$(() => {
	$("img").on("click", clickEvent);
	$("#reset").on("click", reload)
});
