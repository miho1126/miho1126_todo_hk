console.log(localStorage);
let data = [];

// 2回目に読み込むとき。
if (localStorage.getItem('inquiry','calendarTEST')){
  data = JSON.parse(localStorage.getItem('inquiry','calendarTEST'));
}
// ストレージにデータがあったがデータの中に上書きされる。
// ーーーーーーー

// クリックイベント
document.getElementById('add').addEventListener('click',function(){
  data.push(document.getElementById('text1').value);
  creatDOM(document.getElementById('text1').value);
  localStorage.setItem('text1',JSON.stringify(data));
});

for (const value of data) {
  creatDOM(value);
}

document.getElementById('add').addEventListener('click',function(){
  data.push(document.getElementById('q1').value);
  creatDOM(document.getElementById('q1').value);
  localStorage.setItem('q1',JSON.stringify(data));
});

for (const value of data) {
  creatDOM(value);
}

document.getElementById('add').addEventListener('click',
  function(){
    // 預ける
    data.push(document.getElementById('calendarTEST').value);
    // creatDOMの中のものをまとめて書いた奴。
    creatDOM(document.getElementById('calendarTEST').value);
    localStorage.setItem('calendarTEST', JSON.stringify(data));
  }
);

for (const value of data) {
  creatDOM(value);
}

document.getElementById('add').addEventListener('click',
  function(){
    // 預ける
    const task = document.getElementById('inquiry');
    data.push(task.value);
    // creatDOMの中のものをまとめて書いた奴。
    creatDOM(task.value);
    dataUpdated();
    task.value = "";
  }
);

// 取り出す
// dataに格納されたHTMLを描画する
for (const value of data) {
  creatDOM(value);
}

// 引数、値が変わるか変わらないかをみる。（　）の中に入れるもの親タグは一緒。
// HTMLを追加する関数。
function creatDOM( value ){
  // liタグを作成
  let list = document.createElement('li');
  // リストタグないにvalueを格納
  list.textContent = value;

  let button = document.createElement('button');
  button.textContent = '削除';
  list.appendChild(button);

  button.addEventListener('click',remove)

  // listの子要素として追加
  document.getElementById('list').appendChild(list);
}

// 引数、値が変わるか変わらないかをみる。（　）の中に入れるもの親タグは一緒。
// HTMLを追加する関数。
function creatDOM( value ){
  // liタグを作成
  let list = document.createElement('li');
  // リストタグないにvalueを格納
  list.textContent = value;

  let button = document.createElement('button');
  button.textContent = '削除';
  list.appendChild(button);

  button.addEventListener('click',remove)

  // listの子要素として追加
  document.getElementById('list').appendChild(list);
}


function remove(){
  this.parentNode.remove();
  data.splice(data.indexOf(this.parentNode.textContent.slice(0,-2)),1);
  dataUpdated();
}

function dataUpdated(){
  localStorage.setItem('inquiry',JSON.stringify(data));
}


