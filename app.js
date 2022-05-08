const testFunction = () => {
	console.log("hi");
};

$(() => {
	$("img").on("click", testFunction);
});
