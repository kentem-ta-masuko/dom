//document.getElementById('button1')?.addEventListener('click', () => {
const s1 = document.querySelector('#s1') as HTMLElement;
const s2 = document.querySelector('#s2') as HTMLElement;
const s3 = document.querySelector('#s3') as HTMLElement;
const textArea = document.querySelector('#textarea') as HTMLTextAreaElement;

const setSpan = () => {
    const content = textArea.value;
    s1!.textContent　= content;
    s2!.innerText = content;
    s3!.innerHTML　= content;
};

textArea!.addEventListener('input', (e) => {
    setSpan();
});

window.addEventListener('load', () => {
    textArea.value = 'abc';
    setSpan();
});



