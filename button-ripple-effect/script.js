const button = document.querySelector('.container button');

button.addEventListener('click', (e) => {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');

    const x = e.clientX;
    const y = e.clientY;
    const buttonX = e.target.getBoundingClientRect().left;
    const buttonY = e.target.getBoundingClientRect().top;

    const xInside = x - buttonX;
    const yInside = y - buttonY;
    ripple.style.left = `${xInside}px`;
    ripple.style.top = `${yInside}px`;
    button.appendChild(ripple);
    setTimeout(() => {
        ripple.remove();
    }, 500);
})
