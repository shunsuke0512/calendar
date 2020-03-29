const date = new Date();//今の日時を取得
const aWeek = ["日", "月", "火", "水", "木", "金", "土"];//曜日の配列
const aYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];//1-12月の日数の配列
const year = date.getFullYear();//年を取得
//閏年の時に29日に入れ替えする
//西暦を4で割れるかつ、100で割り切れるけど400では割り切れない
if(year % 4 === 0 && year % 100 === 0 && year % 400 !== 0) {
  aYear[1] = 29;
}
const month = date.getMonth() + 1;//月を取得
const maxDays = aYear[month - 1];//月の最大日数を取得
const today = date.getDate();//日にちを取得
date.setDate(1);//日付を1日にセットする
const firstWeek = date.getDay();//月の初日の曜日を取得

const main = document.getElementById("main");//main要素を読み取る
const main_style = document.createTextNode(year + "年"　+ month + "月");//ヘッド部分にカレンダーのタイトル(年月を表示)
main.appendChild(main_style);//mainに反映させて表示させる

const table = document.createElement("table");//bodyにtable要素を作成
let tr = document.createElement("tr");//tr要素を作成
//for文使って1行目の曜日を作る
for(let i = 0; i < 7; i++) {
  let td = document.createElement("td");//td要素作成
  td.textContent = aWeek[i];//曜日を順番に表示
  tr.appendChild(td);//tr要素に紐付けさせる
}
table.appendChild(tr);//tableにtrを紐付けさせる
document.body.appendChild(table);//table要素に反映させて表示させる

//ますは初日までfor文つかって空白を入れる
let tr1 = document.createElement("tr");
for(let empty = 0; empty < firstWeek; empty++) {
  let td = document.createElement("td");
  td.textContent = " ";
  tr1.appendChild(td);
}
table.appendChild(tr1);
document.body.appendChild(table);

let col = firstWeek;//初日の列の場所を宣言
let row = tr1;//tr要素を変数rowに入れとく

//for文使って日付を入れていく
for(let j = 1; j <= maxDays; j++) {
  const td = document.createElement("td");
  td.textContent = j;
  row.appendChild(td);
  col ++;//列を増やしていく

  //今日の日を色つけて分かりやすくする
  if(j === today) {
    td.style.backgroundColor = "orange";
  }
  //列が7列目まで来たら行を追加して0列目まで折り返し
  if(col === 7) {
    row = table.insertRow(-1);
    col = 0;
  }
}
