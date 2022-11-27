// TODO: select the input with class task-input
const taskInput = document.querySelector(".task-input");
// TODO: select the button with class task-add-btn
const taskAddButton = document.querySelector(".task-add-btn");
// TODO: select the div with class task-elements
const taskElements = document.querySelector(".task-elements");

let taskCount = 1;

function addTask() {
  taskId = `task-${++taskCount}`;

  // TODO: create <div class="task-element"></div>
  const newTask = document.createElement("div");
  newTask.classList.add("task-element");

  // TODO: create <input class="task-checkbox" type="checkbox" id=taskId />
  const taskCheckbox = document.createElement("input");
  taskCheckbox.classList.add("task-checkbox");
  taskCheckbox.setAttribute("type", "checkbox");
  taskCheckbox.setAttribute("id", taskId);

  // TODO: create <label for=taskId>task</label>
  const taskLabel = document.createElement("label");
  taskLabel.innerText = taskInput.value;
  taskLabel.setAttribute("for", taskId);

  // TODO: add taskCheckbox & taskLabel to <div class="task-element"></div>
  newTask.append(taskCheckbox, taskLabel);

  // TODO add <div class="task-element">...</div> to <div class="task-elements">...</div>
  taskElements.append(newTask);

  taskInput.value = "";
  addListenerToCheckboxes();
}

// TODO: set a task as complete by crossing out the label by including task-done class
function setTaskComplete(e) {
  const taskLabel = e.target.nextElementSibling;
  taskLabel.classList.toggle("task-done");
}

// TODO: add event listener to task-add-btn
taskAddButton.addEventListener("click", addTask);

// TODO: add event listener to task-checkboxes
function addListenerToCheckboxes() {
  const taskCheckboxes = document.querySelectorAll(".task-checkbox");

  taskCheckboxes.forEach((checkbox) =>
    checkbox.addEventListener("click", setTaskComplete)
  );
}
addListenerToCheckboxes();
