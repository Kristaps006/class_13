


const taskList = function (container){
  let count = 0;
  this.addTask = function(){
    let task = document.querySelector('.template').cloneNode(true);
    task.classList.remove('template');
  
    document.querySelector(container).append(template);
  };

};

let todo = new taskList(".task-list");

console.log(todo);

//todo.addTask()