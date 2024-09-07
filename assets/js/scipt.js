$(document).submit((ev) => {
  let inputValue = $("#addTodo").val();
  const addButton = $(".submit");


  const newItem = $("<li class='items'></li>");
  const checkbox = $("<input type='checkbox' class='checkbox'>");
  const newItemtext = $("<span class='newitemtext'>" + inputValue + "</span>");
  const buttons = $("<div class='buttons'></div>");
  const editButtons = $("<button class='editbutton'>Edit</button>");
  const deleteButtons = $("<button class='deletebutton'>delete</button>");
  const editinput = $("<input class='editinput'></input>");
  const cancelButton = $("<button class='canclebutton'>cancle</button>");
  const saveButton = $("<button class='savebutton'>save</button>");
  const textBox=$("<div class='text-box'></div>")
  
  $(".todolist").append(newItem);
  
  newItem.append(textBox).append(buttons);
 textBox.append(checkbox).append(newItemtext);
  buttons.append(editButtons).append(deleteButtons);

  buttons.append(cancelButton).append(saveButton);
  newItem.append(editinput).append(buttons);
  textBox.show();
  editinput.hide();
  cancelButton.hide();
  saveButton.hide();
  editButtons.on("click", () => {
    // Remove buttons and add edit input while preserving clarity and correctness
    editButtons.hide();
    deleteButtons.hide();
    saveButton.show();
    cancelButton.show();
    textBox.hide();
    editinput.show();
  });

  $("#addTodo").val("");

  saveButton.on('click', ()=>{
 
    editinput.hide();
    textBox.show();
    newItemtext.text(editinput.val());
    saveButton.hide();
    cancelButton.hide();
    editButtons.show(); 
    deleteButtons.show();
    
  })
  deleteButtons.on('click',()=>{
   newItem.remove();

  })

  cancelButton.on('click',()=>{
    editinput.hide();
    textBox.show();
    saveButton.hide();
    cancelButton.hide();
    editButtons.show(); 
    deleteButtons.show();

  })

  if(inputValue===""){
    alert('please write something')
    newItem.remove()
  }
  // جلوگیری از رفتار پیش‌فرض ارسال فرم
  ev.preventDefault();
});
