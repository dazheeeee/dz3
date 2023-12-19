// Указываю количество строк
const row = 6;

// Цикл для перебора строк
for (let i = 1; i <= row; i++) {
  let string = '';
  
  // Добавляю пробелы перед звездочками
  for (let j = 1; j <= row - i; j++) {
    string += ' ';
  }
  
  // Добавляю сами звездочки
  for (let k = 0; k < 2 * i - 1; k++) {
    string += '*';
  }
  
  // Вывод строки
  console.log(string);
}