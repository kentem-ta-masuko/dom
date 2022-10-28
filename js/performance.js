"use strict";
var _a, _b, _c, _d;
const ul = document.querySelector('#ul1');
const inputNum = document.querySelector('#inputNum');
let list;
const initialize = () => {
    ul.textContent = null;
    const num = parseInt(inputNum.value);
    list = [...Array(num).keys()].map(i => ++i);
};
const watchTime = (func) => {
    const start = performance.now();
    func();
    const end = performance.now();
    document.querySelector('#label1').textContent = (end - start).toString();
};
(_a = document.querySelector('#button1')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', e => {
    initialize();
    watchTime(() => {
        for (let i = 0; i < list.length; i++) {
            ul.innerHTML += `<li>${list[i]} 低速</li>`;
        }
    });
});
(_b = document.querySelector('#button2')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', e => {
    initialize();
    watchTime(() => {
        //for文
        let html = '';
        for (let i = 0; i < list.length; i++) {
            html += `<li>${list[i]} 高速1</li>`;
        }
        ul.innerHTML = html;
    });
});
(_c = document.querySelector('#button3')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', e => {
    initialize();
    watchTime(() => {
        //フラグメント
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < list.length; i++) {
            const li = document.createElement('li');
            li.textContent = `${list[i]} 高速3`;
            fragment.appendChild(li);
        }
        ul === null || ul === void 0 ? void 0 : ul.appendChild(fragment);
    });
});
(_d = document.querySelector('#button4')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', e => {
    initialize();
    watchTime(() => {
        //map+joinで一行化
        ul.innerHTML = list.map((i) => `<li>${i} 高速2</li>`).join('\n');
    });
});
