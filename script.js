let arr_names = ["Alex", 'Adam', 'Jordan', 'Suxrob', 'Bekzod',]
let name = prompt()

if (arr_names.includes(name)) {
   let dlt = confirm(`Удалить этого пользователя ${name}?`)

   if (dlt === true) {
      arr_names.splice(arr_names.indexOf(name), 1)
      console.log(arr_names);
   } else {
      console.log(arr_names, 'не удалено');
   }
} else {
   console.log('такого человека в списке нет');
}