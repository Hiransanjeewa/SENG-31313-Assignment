const collapsibleButton = document.querySelector('.collapsible');
const content = document.querySelector('.content');

collapsibleButton.addEventListener('click', function() {
    content.classList.toggle('active');
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
});




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
    };
    



