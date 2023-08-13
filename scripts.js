

// function dropDownHandler(buttonID) {
//     const favButton = document.getElementById(buttonID);
//     const icon = favButton.querySelector('i');

//         if (icon.classList.contains('fa-plus')) {
//             icon.classList.remove('fa-plus');
//             icon.classList.add('fa-minus');

//         // adding collapse features
             
//         } else {
//             icon.classList.remove('fa-minus');
//             icon.classList.add('fa-plus');
//         }

//         const cardContents = document.getElementById(favButton.id+'-Contents');
    
//         favButton.addEventListener('click', function() {
//             cardContents.classList.toggle('active');
//             if (cardContents.style.display===' '  ) {
//                 console.log('asxasx')
//             }
//             if (cardContents.style.display === 'block' ) {
//                 cardContents.style.display = 'none';
//                 cardContents.innerHTML=''
//             } else {
//                 cardContents.style.display = 'block';
//                 cardContents.innerHTML='<span>aaa</span>'
//             }
//         });




//     };
    


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




// scrolling
function scrollDown(scrollButton) {
    var buttons = document.querySelectorAll('.header-button');

    function setClicked(clickedButton) {
        buttons.forEach(function(button) {
            if (button === clickedButton) {
                button.classList.add('clicked');
            } else {
                button.classList.remove('clicked');
            }
        });
        

    document.getElementById(scrollButton+'_section').scrollIntoView();
    document.getElementById(scrollButton).click();

}
