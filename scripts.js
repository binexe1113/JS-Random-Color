const button = document.getElementById('myButton');
button.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}