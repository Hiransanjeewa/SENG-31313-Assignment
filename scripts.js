

function dropDownHandler(buttonID) {
    const favButton = document.getElementById(buttonID);
    const icon = favButton.querySelector('i');

        if (icon.classList.contains('fa-plus')) {
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');

        // adding collapse features
             

        } else {
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        }




        
        const cardContents = document.getElementById(favButton.id+'-Contents');
    
        favButton.addEventListener('click', function() {
            cardContents.classList.toggle('active');
            if (cardContents.style.display === 'block') {
                cardContents.style.display = 'none';
            } else {
                cardContents.style.display = 'block';
            }
        });




    };
    



