// обработчик, слушатель, подписчик, handler? listener, subscriber - это function
// function()  (вызывает браузер) => callback
// {...} => сведения о событии => event => ev => e -- создаётся объект Event
// 


// target - элемент по которому кликнули
// currentTarget - элемент по которому кликнули И родительсууие элементы . желательно испольовать его

// addEventListener - лучше чем getElement, можно добавить несколько обработчиков и указывать доп.параметры (например поменять порядок всплытия)