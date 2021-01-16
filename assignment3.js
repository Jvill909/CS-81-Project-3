let array = []

function add(firstName, lastName, isFullTime){
  let employeeName = {
    firstName : firstName,
    lastName : lastName,
    isFullTime : isFullTime,
    }
  array.push(employeeName);
  showAll(array);
}

function remove(firstName, lastName){
  for(let i = 0; i < array.length; i++){
    if(array[i] == undefined){
      continue;
    }
    else if(((firstName == array[i].firstName) && (lastName == array[i].lastName)) == true){
      delete array[i];
      }
      
  }
  showAll(array)
}
