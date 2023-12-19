// Исходный массив
const data = [5, 10, "Shopping", 20, "Homework"];

// Перебираю массив, используя цикл for для перебора элементов массива data
for (let i = 0; i < data.length; i++) {
  // Проверяю, является ли элемент числом
  if (typeof data[i] === "number") {
    // Увеличиваю число в 2 раза(если число)
    data[i] *= 2;
  } else if (typeof data[i] === "string") {
    // Добавление к строке "- done"(если элемент строка)
    data[i] += " - done";
  }
}

console.log(data); // => [10, 20, 'Shopping - done', 40, 'Homework - done']