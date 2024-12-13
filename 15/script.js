document.addEventListener('DOMContentLoaded', () => {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    const desc = document.getElementById('description');
    
    img2.addEventListener('click', () => {
        img2.classList.toggle('clicked');
    });

    const originalSrc = img3.src;
    const hoverSrc = 'Dogs/Shutterstock_2265495145-min.png'; 

    img3.addEventListener('mouseover', () => {
        img3.src = hoverSrc;
    });

    img3.addEventListener('mouseout', () => {
        img3.src = originalSrc;
    });
});
