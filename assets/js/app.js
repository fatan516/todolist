 $(document).ready(() => {
let todos = [];
const todoInput = $(".todo-input");
const todoForm = $(".todo-form");
const todosContainer = $(".todoes-list");

todoForm.submit((e) => {
  e.preventDefault();
  const todo = {};
  todo.id = Date.now();
  todo.title = todoInput.val();
  todo.isComplete = false;
  todo.createdAt = new Date();
  console.log(todo);
  if (todoInput.val() !== "") {
    todos.push(todo);
    //   console.log(todos);
    todoInput.val("");
    generateList(todos);
  }
});

function generateList(todosItem) {
  console.log(todos)
  if (todos.length === 0) {
    
    const emptyerror = $("<li>شما هیچ چیز ندارید یه چی بذار</li>");
    todosContainer.append(emptyerror);
  } else {
    todosItem.map((item, index) => {
      const todoItem =
        $(`<li id="${item.id}"><span class="todoitemtext">${item.title}</span>
          <div class="">
            <button onclick="editTodo(${item.id});" class="editbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">✅</button>
            <button onclick="removeTodo(${item.id});" class="deletebtn">🗑</button>
          </div></li>`);
      // console.log(item, "item");
      // console.log(index, "index");
      if (index === todosItem.length - 1) {
        todosContainer.append(todoItem);
      }
    });
  }
}

function removeTodo(id) {
  $(`#${id}`).remove();
}
function editTodo(id) {
  const oldValue = $(`#${id} span`).text();
  let updateValue = "";
  $(".edit-input").val(oldValue);

  $(".edit-input").change(() => {
    updateValue = $(".edit-input").val();
  });
  $(".savebutton").on("click", (e) => {
    todos.find((item) => {
      if (item.id === id) {
        return (item.title = updateValue);
      }
    });
    $(`#${id} span`).text(updateValue);
  });
}
})
