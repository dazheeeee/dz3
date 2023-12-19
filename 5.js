// Создаю функцию
function showFamily(family) {
    // Проверяю, является ли массив пустым
    if (family.length === 0) {
      // Если массив пустой, возвращается "Семья пуста"
      return 'Семья пуста';
    } else {
      // Соединяю все имена в одну строку с разделителем " ", с помощью join()
      const names = family.join(' ');
      // Создаю "Семья состоит из:", добавляя имена к нему
      const message = 'Семья состоит из: ' + names;
      // Возврат
      return message;
    }
  }
  // Вывод 
  console.log(showFamily(['Peter', 'Ann', 'Alex', 'Linda']));  // => 'Семья состоит из: Peter Ann Alex Linda'
  console.log(showFamily([]));  // => 'Семья пуста'
