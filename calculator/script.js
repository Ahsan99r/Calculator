const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (value === 'C') {
            display.value = '';
        } else if (value === '=') {
            try {
                display.value = eval(display.value.replace(/[^-()\d/*+.]/g, ''));
            } catch {
                display.value = 'Error';
            }
        } else {
            display.value += value;
        }
    });
});


document.addEventListener('keydown', (e) => {
    const key = e.key;
    if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
        display.value += key;
    } else if (key === 'Enter' || key === '=') {
        e.preventDefault();
        try {
            display.value = eval(display.value.replace(/[^-()\d/*+.]/g, ''));
        } catch {
            display.value = 'Error';
        }
    } else if (key === 'Escape' || key.toLowerCase() === 'c') {
        display.value = '';
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    }
});
