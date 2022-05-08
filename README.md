# Memory-Matching-Game

Icons: <a href="https://www.flaticon.com/free-icons/pokemon" title="pokemon icons">Pokemon icons created by Darius Dan - Flaticon</a>

A simple memory matching game using html, CSS, javascript and Jquery.

Grid is randomized everytime the page is refreshed by random shuffling of an array of numbers, then using the order to build the img and divs.

Flexbox is used to center the main board and simple CSS with fixed dimensions generally used.

Game works by applying a opacity value onto the image. When image is clicked, opacity changes to 100, "over-riding" the default pokeball image.

Arrays/conditionals are used for game logic. Test array prevents more than 2 images from being clicked. Also, onclick function is removed when clicked to prevent double clicking of the same image.

If two images matches, the test array is cleared allowing for further matches. The two images are also pushed into the win array. When win array length reaches 16 (all matched), win condition is achieved.

If two images dont match, test array is cleared, and the opacity values and on click functionality is reset after 1500 ms. Player can continue playing afterwards.

Other minor fixes: (1) Prevent dragging of images that allows ghosting and player to see the image underneath.

9 May 2022 - Base game complete. To test for bugs.
Vercel Deploy: <a href="https://memory-matching-game-hazel.vercel.app/" title="Vercel Deploy">Vercel Deploy</a>
