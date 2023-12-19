  const restorantData = {
    menu: [
      {
        name: 'Salad Caesar',
        price: '14$',
      },
      {
        name: 'Pizza Diavola',
        price: '9$',
      },
      {
        name: 'Beefsteak',
        price: '17$',
      },
      {
        name: 'Napoleon',
        price: '7$',
      },
    ],
    waitors: [
      { name: 'Alice', age: 22 },
      { name: 'John', age: 24 },
    ],
    averageLunchPrice: '20$',
    openNow: true,
  }
  
  function isOpen(prop) {
    let answer = '';
    prop ? (answer = 'Открыто') : (answer = 'Закрыто'); // Сделала ответы наоборот
  
    return answer; // Исправила опечатку
  }
  
  console.log(isOpen(restorantData.openNow));
  
  function isAverageLunchPriceTrue(fDish, sDish, average) {
    // Преобразование цены в числа, так как price - строка
    const fPrice = +fDish.price.slice(0, -1);
    const sPrice = +sDish.price.slice(0, -1);
  
    // Сравнение сумм двух любых цен с средним чеком
    // Добавила преобразование цен в числа с помощью оператора + перед присвоением переменным fPrice и sPrice
    if (fPrice + sPrice < +average) {
      return 'Цена ниже средней';
    } else {
      return 'Цена выше средней';
    }
  }
  
  console.log(
    isAverageLunchPriceTrue(
      restorantData.menu[0],
      restorantData.menu[1],
      restorantData.averageLunchPrice
    )
  );
  // Использование Object.assign({}, data) для создания копии объекта data
  function transferWaitors(data) {
    const copy = Object.assign({}, data);

    // Изменение данных в копии, не затрагивая исходные данные
    copy.waitors[0] = { name: 'Mike', age: 32 };
    return copy;
  }
  
  console.log(transferWaitors(restorantData));