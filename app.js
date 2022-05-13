let testArr = [];

const winArr = [];

const startArrPics = [
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
];

// Shuffle Array code from: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffleArr = () => {
	let currentIndex = startArrPics.length;
	let randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex != 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[startArrPics[currentIndex], startArrPics[randomIndex]] = [
			startArrPics[randomIndex],
			startArrPics[currentIndex],
		];
	}

	return startArrPics;
};

const generateGrid = () => {
	const shuffledArr = shuffleArr();
	for (let grid of shuffledArr) {
		const $div = $("<div>").addClass("covered");
		const $img = $("<img>")
			.addClass("gameImg")
			.attr("data-img", grid)
			.attr("src", `./images/${grid}.png`);
		$div.append($img);
		$("#board").append($div);
	}
};

const resetWrongMatch = () => {
	const $firstItem = testArr[0];
	const $secondItem = testArr[1];

	$firstItem.on("click", clickEvent);
	$secondItem.on("click", clickEvent);

	$firstItem.css("opacity", 0);
	$secondItem.css("opacity", 0);

	testArr = [];
};

const testIfMatch = () => {
	const $firstItem = testArr[0];
	const $secondItem = testArr[1];

	// run code if match
	if ($firstItem.attr("data-img") === $secondItem.attr("data-img")) {
		// push matching items to win Array
		winArr.push($firstItem);
		winArr.push($secondItem);
		// clear out the testArr
		testArr = [];
		// console.log(testArr);
		// console.log(winArr);
		if (winArr.length === 16) {
			setTimeout(() => alert("You win!"), 0);
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
	window.location.reload();
};

$(() => {
	generateGrid();
	$("img").on("click", clickEvent);
	$("#reset").on("click", reload);
});
