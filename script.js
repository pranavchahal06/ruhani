document.getElementById('yes').addEventListener('click', function() {
    window.location.href = 'thankyou.html';
});

document.getElementById('no').addEventListener('mouseover', function() {
    const button = document.getElementById('no');
    const container = document.querySelector('.container');

    // Get random position within the container bounds
    const maxWidth = container.clientWidth - button.clientWidth;
    const maxHeight = container.clientHeight - button.clientHeight;

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
});
