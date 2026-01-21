'use strict';

// Ітерування циклами - функція sum(...args)
// Реалізація п'ятьма різними способами

const sum = (...args) => {
  // Перевірка на порожні аргументи
  if (args.length === 0) return 0;
  
  const results = [];
  
  // 1. Цикл for
  let sumFor = 0;
  for (let i = 0; i < args.length; i++) {
    sumFor += args[i];
  }
  results.push(sumFor);
  
  // 2. Цикл for..of
  let sumForOf = 0;
  for (const value of args) {
    sumForOf += value;
  }
  results.push(sumForOf);
  
  // 3. Цикл while
  let sumWhile = 0;
  let index = 0;
  while (index < args.length) {
    sumWhile += args[index];
    index++;
  }
  results.push(sumWhile);
  
  // 4. Цикл do..while
  let sumDoWhile = 0;
  let counter = 0;
  if (args.length > 0) {
    do {
      sumDoWhile += args[counter];
      counter++;
    } while (counter < args.length);
  }
  results.push(sumDoWhile);
  
  // 5. Метод Array.prototype.reduce()
  const sumReduce = args.reduce((accumulator, current) => accumulator + current, 0);
  results.push(sumReduce);
  
  return results;
};

// Тестування функції sum
console.log('sum(5, 3, 8):', sum(5, 3, 8));
console.log('sum(0):', sum(0));
console.log('sum():', sum());
console.log('sum(2, -2, 2):', sum(2, -2, 2));
console.log('sum(15, -3, -3, -3):', sum(15, -3, -3, -3));

// Ітерування по двумірному масиву - знайти максимальний елемент
const max = (matrix) => {
  let maxValue = matrix[0][0];
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > maxValue) {
        maxValue = matrix[i][j];
      }
    }
  }
  
  return maxValue;
};

const maxElement = max([[2, 4, 6], [8, 10, 12], [14, 16, 18]]);
console.log('Max element:', maxElement);

// Ітерування об'єктів-справочників
const persons = {
  newton: { born: 1643, died: 1727 },
  einstein: { born: 1879, died: 1955 },
  curie: { born: 1867, died: 1934 },
  tesla: { born: 1856, died: 1943 },
};

const calculateAges = (people) => {
  const ages = {};
  
  for (const name in people) {
    const person = people[name];
    ages[name] = person.died - person.born;
  }
  
  return ages;
};

console.log('Ages:', calculateAges(persons));
