// Задание 1
document.getElementById('clickButton').addEventListener('click', function () {
    this.classList.toggle('clicked');
    this.textContent = this.classList.contains('clicked') ? 'Кликнуто' : 'Нажмите на меня';
});

document.getElementById('hoverButton').addEventListener('mouseover', function () {
    this.textContent = 'Наведено';
});

document.getElementById('hoverButton').addEventListener('mouseout', function () {
    this.textContent = 'Наведите на меня';
});

document.getElementById('mouseoutButton').addEventListener('mouseout', function () {
    this.classList.add('mouseout');
    this.textContent = 'Курсор уведен';
});

document.getElementById('mouseoutButton').addEventListener('mouseover', function () {
    this.classList.remove('mouseout');
    this.textContent = 'Уведите курсор';
});

// Задание 2
document.addEventListener('keydown', function (event) {
    const key = event.key.toLowerCase();
    if (key === 'r') {
        document.getElementById('rButton').style.backgroundColor = 'red';
    } else if (key === 'g') {
        document.getElementById('gButton').style.backgroundColor = 'green';
    } else if (key === 'b') {
        document.getElementById('bButton').style.backgroundColor = 'blue';
    }
});

document.addEventListener('keyup', function (event) {
    const key = event.key.toLowerCase();
    if (key === 'r') {
        document.getElementById('rButton').style.backgroundColor = '#ddd';
    } else if (key === 'g') {
        document.getElementById('gButton').style.backgroundColor = '#ddd';
    } else if (key === 'b') {
        document.getElementById('bButton').style.backgroundColor = '#ddd';
    }
});

// Задание 3
let block = document.getElementById('movableBlock');

document.addEventListener('keydown', function (event) {
    let key = event.key.toLowerCase();
    let step = 10;
    let left = parseInt(block.style.left, 10) || 0;
    let top = parseInt(block.style.top, 10) || 0;

    switch (key) {
        case 'w':
            block.style.top = `${top - step}px`;
            break;
        case 's':
            block.style.top = `${top + step}px`;
            break;
        case 'a':
            block.style.left = `${left - step}px`;
            break;
        case 'd':
            block.style.left = `${left + step}px`;
            break;
    }
});