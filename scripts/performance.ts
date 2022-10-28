const ul = document.querySelector('#ul1');
const inputNum = document.querySelector('#inputNum') as HTMLInputElement;

let list: number[];
const initialize = () => {
    ul!.textContent = null;
    
    const num = parseInt(inputNum.value);
    list = [...Array(num).keys()].map(i => ++i); 
};

const watchTime = (func: any) => {
    const start = performance.now();
    func();
    const end = performance.now();

    document.querySelector('#label1')!.textContent = (end - start).toString();
}

document.querySelector('#button1')?.addEventListener('click', e => {
    initialize();

    watchTime( () => {
        for(let i = 0; i < list.length; i++) {
            ul!.innerHTML += `<li>${list[i]} 低速</li>`;
        }
    });
})

document.querySelector('#button2')?.addEventListener('click', e => {
    initialize();

    watchTime( () => {
        //for文
        let html: string = '';
        for(let i = 0; i < list.length; i++) {
            html += `<li>${list[i]} 高速1</li>`;
        }
        ul!.innerHTML = html;
    });
});
    document.querySelector('#button3')?.addEventListener('click', e => {
        initialize();
    
        watchTime( () => {
            //フラグメント
            const fragment = document.createDocumentFragment();
            for (let i = 0; i < list.length; i++) {
                const li = document.createElement('li');
                li.textContent = `${list[i]} 高速3`;
                fragment.appendChild(li);
            }
            ul?.appendChild(fragment);
        });
    });

    document.querySelector('#button4')?.addEventListener('click', e => {
        initialize();
    
        watchTime( () => {
            //map+joinで一行化
            ul!.innerHTML = list.map((i) => `<li>${i} 高速2</li>`).join('\n');
        });
    });
