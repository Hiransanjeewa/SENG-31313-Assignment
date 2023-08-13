
// Function to update button icons and trigger collapses
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


        fetch('./cards/'+buttonID+'.html')
        .then(response => response.text())
        .then(content => {
            var contentContainer = document.getElementById('content-container');
            cardContents.innerHTML =  content;
        })
        .catch(error => console.error('Error loading content:', error));



           // Change this content as needed
    }
}




// scrolling functions
function scrollDown(scrollButton) {
    var buttons = document.querySelectorAll('.header-button');

    // closing other opened collapses
    function setClicked(clickedButton) {
        buttons.forEach(function(button) {
            if (button === clickedButton) {
                button.classList.add('clicked');
            } else {
                button.classList.remove('clicked');
            }
        });


    document.getElementById(scrollButton+'_section').scrollIntoView();
    // Clicking the collapse button along with the scrolling .
    document.getElementById(scrollButton).click();

}
}
