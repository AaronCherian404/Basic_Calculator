let answer = document.getElementById('answer');
inputs = document.querySelectorAll('.button input');
//let screenvalue = ''; //value on the input feild
inputs.forEach(inp => {
  inp.addEventListener('click', e => {
    //listens for a click
    text = e.target.value;
    if (text == 'AC') {
      //when "All Clear" has been selected
      answer.value = 'Enter';
    } else if (text == '=') {
      //when it is time to evaluate the expression
      answer.value = eval(answer.value);
    } else if (text == 'DEL') {
      //when last entered element needs to be removed
      answer.value = answer.value.substr(0, answer.value.length - 1);
    } else {
      if (answer.value == 'Enter') {
        answer.value = '';
      }
      //case for when any input has to be added to the input field
      answer.value += text;
    }
  });
});
if (answer.value == '') {
  answer.value = 'Enter';
}
