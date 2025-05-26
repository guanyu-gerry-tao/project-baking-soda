const inputFields = document.querySelectorAll('.forms div input');
const inputFieldPrompts = document.querySelectorAll('.forms div span');

inputFields.forEach((node, index) => {
    node.addEventListener('focus', () => {
        console.log('Input focused:', node);
        node.previousElementSibling.classList.add('wave');
    });

    node.addEventListener('blur', () => {
        console.log('Input blurred:', node);
        if (node.value === '') {
            node.previousElementSibling.classList.remove('wave');
        }
    });
})

function createWave() {
    inputFieldPrompts.forEach((node) => {
        let letters = node.innerText.split('');
        node.innerHTML = letters
        .map((letter, i) => {
            return `<span class="letter" style="transition-delay: ${i * 50}ms">${letter}</span>`;
        })
        .join('');
        
    });
}

createWave();
