const correct_answer = document.getElementById("formFile");
const answers = document.getElementById("formFileMultiple");
document.getElementById("scoring").onclick = function () {
  // console.log(correct_answer.files);
  // console.log(correct_answer.files[0]["name"]);
  console.log(answers.files);
  const reader = new FileReader();
  var cset = new Set()

  reader.readAsText(correct_answer.files[0]);
  // console.log(correct_answer.files[0]);

  reader.onload = function(e){
    var correct_answers = reader.result.split(/\r\n|\n/);
    // console.log(correct_answers)
    for(let i = 0;i < correct_answers.length;i++){
      cset.add(correct_answers[i])
    }
    console.log(cset)
  };

  for(let i = 0;i < answers.length;i++){
    console.log(answers.files[i])
  }

};

