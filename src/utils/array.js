export function shuffle(arr) {
  const shuffleArray = [...arr];
  shuffleArray.sort(() => Math.random() - 0.5);

  return shuffleArray;
}