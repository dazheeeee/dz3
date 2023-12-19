//  Создаю функцию
function getCoupeNumber(seatNumber) {
    if (Number.isInteger(seatNumber) && seatNumber >= 1 && seatNumber <= 36) {  // Проверяю, значение аргумента от 1 до 36
      if (seatNumber <= 6) {
        return 1;  // Если место от 1 до 6, то купе номер 1
      } else if (seatNumber <= 12) {
        return 2;  // Если место от 7 до 12, то купе номер 2
      } else if (seatNumber <= 18) {
        return 3;  // Если место от 13 до 18, то купе номер 3
      } else if (seatNumber <= 24) {
        return 4;  // Если место от 19 до 24, то купе номер 4
      } else if (seatNumber <= 30) {
        return 5;  // Если место от 25 до 30, то купе номер 5
      } else {
        return 6;  // Если место от 31 до 36, то купе номер 6
      }
    } else if (typeof seatNumber !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
    return "Ошибка. Проверьте правильность введенного номера места";  // Если аргумент не является отрицательным или дробным числом
    } else {
      return "Таких мест в вагоне не существует";  // Если аргумент равен 0 или больше 36
    }
  }
  
  // Примеры использования
  console.log(getCoupeNumber(33));  // => 9
  console.log(getCoupeNumber(7));  // => 2
  console.log(getCoupeNumber(300));  // => "Таких мест в вагоне не существует"
  console.log(getCoupeNumber(0));  // => "Таких мест в вагоне не существует"
  console.log(getCoupeNumber(7.7));  // => "Ошибка. Проверьте правильность введенного номера места"
  console.log(getCoupeNumber(-10));  // => "Ошибка. Проверьте правильность введенного номера места"
  console.log(getCoupeNumber('Hello'));  // => "Ошибка. Проверьте правильность введенного номера места"