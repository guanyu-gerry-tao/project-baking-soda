const dragImage = document.querySelectorAll('.image')[0];
const slots = document.querySelectorAll('.slot');

for (const slot of slots) {
    slot.addEventListener('dragover', dragOver);
    slot.addEventListener('dragenter', dragEnter);
    slot.addEventListener('dragleave', dragLeave);
    slot.addEventListener('drop', dragDrop);
}

dragImage.addEventListener('dragstart', dragStart);
dragImage.addEventListener('dragend', dragEnd);

function dragStart(e) {
    console.log('dragStart');
    const rect = e.target.getBoundingClientRect();
    const xOffset = rect.width / 2;
    const yOffset = rect.height / 2;
    //e.dataTransfer.setdragImage(e.target, xOffset, yOffset);
    setTimeout(() => e.target.classList.add('invisible'), 0);
}

function dragEnd(e) {
    console.log('dragEnd', e.target);
    dragImage.classList.remove('invisible');
}
function dragOver(e) {
    e.preventDefault(); // Prevent default to allow drop
    //console.log('dragOver', e.target);
}
function dragEnter(e) {
    console.log('dragEnter', e.target);
    
}
function dragLeave(e) {
    console.log('dragLeave');
    if (e.target.classList.contains('slot') && e.target.classList.contains('box')) {
        const randX = Math.random();
        const randY = Math.random();
        const box_rect = e.target.getBoundingClientRect();
        const x = box_rect.width * randX;
        const y = box_rect.height * randY;
        const poop = document.createElement('span');
        poop.textContent = '💩';
        poop.className = 'poop';
        poop.style.left = `${x}px`;
        poop.style.top = `${y}px`;
        e.target.appendChild(poop);
    }
}
function dragDrop(e) {   
    console.log('dragDrop');
    if (e.target.classList.contains('slot')) {
        e.target.appendChild(dragImage);
    }
}