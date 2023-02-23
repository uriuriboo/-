const correct_answer = document.getElementById("formFile");
const answers = document.getElementById("formFileMultiple");

// 名前と点数を保存
var scores = {}

async function answer_parser(file){
  let result_base64 = await new Promise((resolve) => {
      let fileReader = new FileReader();
      fileReader.onload = (e) => resolve(fileReader.result);
      fileReader.readAsText(file);
  });

  var set = new Set(result_base64.split(/\r\n|\n/))

  return set;
};

document.getElementById("scoring").onclick = async function () {
  var correct_set = await answer_parser(correct_answer.files[0]);

  for (let i = 0; i < answers.files.length; i++){
    var answer_set = await answer_parser(answers.files[i]);
    var ans_file = answers.files[i]
    var ans_name = ans_file["name"].substr(0, ans_file["name"].length-4);
    scores[ans_name] = 0

    // 以下で点数の採点を行い、連想配列scoresにファイルの名前から取った回答者名と点数を記録
    for(var ans of answer_set){
      if(correct_set.has(ans)){
        scores[ans_name] += 1;
      }
    }

  }
  // htmlに順位、名前、点数を表示
  console.log(scores)
  var result_array = Object.keys(scores).map((k) => ({ key: k, value: scores[k] }));
  result_array.reverse()
  console.log(result_array)

  const element = document.getElementById("result")
  if(element.hasChildNodes()){
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  document.getElementById("result").insertAdjacentHTML("beforeend",`<h2>結果</h2>`)
  for(let i = 0;i < result_array.length;i++){
    var result = `<p>${i+1}位 ${result_array[i]["key"]}さん ${result_array[i]["value"]}点</p>`
    document
      .getElementById("result")
      .insertAdjacentHTML("beforeend", result);
  }
}