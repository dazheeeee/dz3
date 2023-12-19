// Исходный массив
const data = [5, 10, 'Shopping', 20, 'Homework'];

// Создаю пустой массив result для записи результатов
const result = [];

// Перебор элементов массива в обратном порядке
for (let i = data.length - 1; i >= 0; i--) {
  // Получаем элемент из исходного массива
  const element = data[i];

  // Добавляю элемент в массив результатов
  result.push(element);
}

// Выводим результат 
console.log(result);
