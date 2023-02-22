const correct_answer = document.getElementById("formFile");
const answers = document.getElementById("formFileMultiple");

// 名前と点数を保存
var scores = [{}]

function answer_parser(file){
  const reader = new FileReader();
  var set = new Set()
  reader.readAsText(file);

  reader.onload = function(e){
    var answers = reader.result.split(/\r\n|\n/);

    for(let i = 0;i < answers.length;i++){
      set.add(answers[i])
    }
  }
  // サイズが0になる
  console.log(set)
  return set;
};

document.getElementById("scoring").onclick = function () {
  var cset = answer_parser(correct_answer.files[0]);
  for (let i = 0; i < answers.files.length; i++){
    var aset = answer_parser(answers.files[i]);
  }
}