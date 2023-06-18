let max_stars = 5;

for (let i = 1; i <= max_stars * 2 - 1; i++) {
  let numStars = i <= max_stars ? i : max_stars * 2 - i;
  let stars = "*".repeat(numStars);
  console.log(stars);
}