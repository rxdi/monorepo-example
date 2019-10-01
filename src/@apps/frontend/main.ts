import { MyLibFunction } from '@lib/gosho';
console.log(MyLibFunction())

document.body.innerHTML = `<p>${MyLibFunction()}</p>`