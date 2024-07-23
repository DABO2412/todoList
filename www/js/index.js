function addTask() {
    const task = document.getElementById('task');
    if (task.value) {

        const taskList = document.getElementById('taskList');
        const newItem = document.createElement('li');
        newItem.innerText = task.value;

        $(newItem).on('swiperight', function () {
            $(this).toggleClass('termine').appendTo('#completedTaskList');
          });

        $(newItem).on('swipeleft', function () {
            $(this).hide('slow', function () {
                $(this).remove();
            });
          
        });

       taskList.append(newItem);
        $(taskList).listview('refresh');
        task.select();

    }
} 


function reinitialiser() {
    const task = document.getElementById('task');
    const taskList = document.getElementById('taskList');
    const completedTaskList = document.getElementById('completedTaskList');
    
    taskList.innerHTML = '';
    completedTaskList.innerHTML = '';
    
    task.value = '';
    task.focus();
  }