export function numberToWords(num) {
  const words = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four"
  };
  return words[num];
}