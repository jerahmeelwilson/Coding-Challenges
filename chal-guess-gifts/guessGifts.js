var wishlist = [
  { name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light" },
  { name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium" },
  { name: "Card Game", size: "small", clatters: "no", weight: "light" },
];

var presents = [
  { size: "medium", clatters: "a bit", weight: "medium" },
  { size: "small", clatters: "yes", weight: "light" },
];

function guessGifts(wishlist, presents) {
  let guesses = [];

  presents.forEach((present) => {
    wishlist.forEach((wishlistItem) => {
      if (
        present.size == wishlistItem.size &&
        present.clatters == wishlistItem.clatters &&
        present.weight == wishlistItem.weight
      ) {
        guesses.push(wishlistItem.name);
      }
    });
  });
  return guesses;
}

console.log(guessGifts(wishlist, presents));
