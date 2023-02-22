const correct_answer = document.getElementById("formFile");
const answers = document.getElementById("formFileMultiple");

// 名前と点数を保存
var scores = [{}]

document.getElementById("scoring").onclick = function () {
  // console.log(correct_answer.files[0]["name"]);

  const reader = new FileReader();
  var cset = new Set()

  // 正答のファイルを読み込み
  reader.readAsText(correct_answer.files[0]);

  reader.onload = function(e){
    var correct_answers = reader.result.split(/\r\n|\n/);

    for(let i = 0;i < correct_answers.length;i++){
      cset.add(correct_answers[i])
    }
  };


  // 回答者たちの答えを読み込みしたいがエラー(同期ができていない？)
  for(let i = 0;i < answers.files.length;i++){
    reader.readAsText(answers.files[i]);
    reader.onload = function(e){
      console.log(reader.result)
    }
  }

};

