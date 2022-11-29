let parentElm = document.querySelector('.drag-wrap');
let ulElm = document.createElement('ul');
let aElm = document.createElement('a');
aElm.id = 'link-to-top';
aElm.href = '/';
aElm.textContent = 'top';

parentElm.appendChild(ulElm);
parentElm.appendChild(aElm);
for (let i = 0; i <= 5; i++) {
  let liElm = document.createElement('li');
  liElm.textContent = i;
  ulElm.appendChild(liElm);
}

let add =
  '<h3>HTMLをソースコードで追加する</h3><p id="text1" class="normal_text">テキスト1</p><p id="text2" class="normal_text">テキスト2</p>';

parentElm.innerHTML = add;

parentElm.insertAdjacentHTML('afterbegin', add);
