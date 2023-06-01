function checkInput() {
    var inputValue = document.getElementById('inputField').value;
    var inputField=document.getElementById("inputField");
    
    if(inputValue.length>0){
        inputField.classList.remove("red")
    }
   else{
        console.log(inputValue.length)
        inputField.classList.add("red")
    }
 
}
function checkInput1() {
  var textarea=document.getElementById("textarea");
  var textareavalue=document.getElementById("textarea").value;

if(textareavalue.length>0){
  textarea.classList.remove("red")
}
else{
  textarea.classList.add("red")
}

}
function checkInput2() {
  var accept=document.getElementById("accept");
  var checkaccept=document.getElementById("checkaccept");

 if(!checkaccept.checked)
    accept.classList.add("red")
  else{
    accept.classList.remove("red")
  }

}
    


  // Clear Button
  document.getElementById("clearButton").addEventListener("click", function(event) {
    event.preventDefault();  // Prevent form submission
    document.getElementById("myForm").reset();  // Reset form fields
  });

  // Submit Button
  document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault();  // Prevent form submission
    
    // Perform form validation
    if (validateForm()) {
      var accept=document.getElementById("accept");
      var inputField=document.getElementById("inputField");
      var inputValue = document.getElementById('inputField').value;
      var textarea=document.getElementById("textarea");
      var textareavalue=document.getElementById("textarea").value;
      console.log(textareavalue.length)
      if(!checkaccept.checked)
    accept.classList.add("red")

      if(inputValue.length===0){
        inputField.classList.add("red")
    }
    if(textareavalue.length===0){
      textarea.classList.add("red")
  }
      alert("Please fill all the required field")
    }
    else{
      alert("Form submited successfully")
    }
  });

  // Form Validation
  function validateForm() {
    var inputValue = document.getElementById('inputField').value;
    var textareavalue=document.getElementById("textarea").value;
    
        var checkaccept=document.getElementById("checkaccept");
    if(inputValue.length==0 || textareavalue.length==0 || !checkaccept.checked )
    return true;
    else
    return false;
  }

