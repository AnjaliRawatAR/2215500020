const { fetchNumbersFromAPI } = require("../utils/client");

const WINDOW_SIZE = 10;

exports.fetchStoreNumbers = async (numberId, number) => {
  const newNum = await fetchNumbersFromAPI(numberId);
  const uniqueNum = newNum.filter((num) => !number.includes(num));
  number.push(...uniqueNum);

  while (number.length > WINDOW_SIZE) {
    number.shift();
  }
  return number;
};

exports.Average = (numbers) => {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
};