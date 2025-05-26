const counters = document.querySelectorAll('.counter .number');

counters.forEach((node) => {
    node.innerText = '0';
    console.log('Counter initialized:', 0);
    (function updateCounter() {
        const end_value = +node.getAttribute('data-count');
        const current_value = +node.innerText;
        const increment = end_value / 100;

        if (current_value < end_value) {
            node.innerText = Math.ceil(current_value + increment);
            self.setTimeout(updateCounter, 1);
        }else{
            node.innerText = end_value;
        }
    })();
});