function dropDownHandler(buttonID) {
    const favButton = document.getElementById(buttonID);
    const icon = favButton.querySelector('i');

    if (icon.classList.contains('fa-plus')) {
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
    } else {
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
    }

    const cardContents = document.getElementById(buttonID + '-Contents');

    if (cardContents.style.display === 'block') {
        cardContents.style.display = 'none';
        cardContents.innerHTML = '';
    } else {
        cardContents.style.display = 'block';
        cardContents.innerHTML = '<span>Contents will be loaded here.</span>'; // Change this content as needed
    }
}

// Add event listeners for each button
document.getElementById('aboutMe').addEventListener('click', function () {
    dropDownHandler('aboutMe');
});

document.getElementById('education').addEventListener('click', function () {
    dropDownHandler('education');
});

document.getElementById('experience').addEventListener('click', function () {
    dropDownHandler('experience');
});
