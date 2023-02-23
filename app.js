const correct_answer = document.getElementById("formFile");
const answers = document.getElementById("formFileMultiple");

// 名前と点数を保存
var scores = {}

async function answer_parser(file){
  const reader = new FileReader();
  var set = new Set()

  reader.readAsText(file);
  reader.onload =  await function(e){
    set = new Set(reader.result.split(/\r\n|\n/))
  }
  console.log(set)
  return set;
};

document.getElementById("scoring").onclick = function () {
  var cset = await answer_parser(correct_answer.files[0]);

  for (let i = 0; i < answers.files.length; i++){
    var aset = await answer_parser(answers.files[i]);
    // 以下で点数の採点を行い、連想配列scoresにファイルの名前から取った回答者名と点数を記録

  }
  // htmlに順位、名前、点数を表示
}