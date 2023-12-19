 //Создаю функцию calculateVolumeAndArea, которая будет вычислять объем и площадь полной поверхности куба
  function calculateVolumeAndArea(length) {
   // Смотрю, является ли значение числом и больше ли оно нуля 
    if (typeof length !== "number" || length <= 0 || !Number.isInteger(length)) {
      return "При вычислении произошла ошибка"; // Возвращаем сообщение об ошибке, если некорректный аргумент
    } else {
      // Вычисляю объем и площадь полной поверхности куба
      const volume = length ** 3;
      const area = 6 * (length ** 2);
      // Получаем результат в формате строки
      return 'Объем куба: ' + volume + ', площадь всей поверхности: ' + area;
    }
  }
  
  // Примеры
  console.log(calculateVolumeAndArea(5));  // => 'Объем куба: 125, площадь всей поверхности: 150'
  console.log(calculateVolumeAndArea(15));  // => 'Объем куба: 3375, площадь всей поверхности: 1350'
  console.log(calculateVolumeAndArea(15.5));  // => 'При вычислении произошла ошибка'
  console.log(calculateVolumeAndArea('15'));  // => 'При вычислении произошла ошибка'
  console.log(calculateVolumeAndArea(-15));  // => 'При вычислении произошла ошибка'