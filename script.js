window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let topBtn = document.getElementById('topBtn')
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}


let bookBtns = document.getElementsByClassName('contactBtn')
for(let i = 0; i < bookBtns.length; i++){
    let book = document.getElementById(bookBtns[i].id)
    book.addEventListener('click', () =>{
        console.log(book.id)
        switch(book.id){
            case 'cynthiaContactBtn':
                window.location.href = 'mailto:CynthiaO.Hairmakup@gmail.com';
                console.log('cynthia')
            break;
            case 'lindsayRiderContactBtn':
                window.location.href = 'mailto:msrae13@gmail.com';
                console.log('lindsay')
            break;
            case 'jackieEppersonContactBtn':
                window.location.href = 'mailto:notsure@gmail.com';
                console.log('jackie')
            break;
            case 'maryCroswellContactBtn':
                window.location.href = 'mailto:notsure@gmail.com'
                console.log('mary')
            break;
            case 'elizabethJacobsonContactBtn':
                window.location.href = 'mailto:notsure@gmail.com'
                console.log('elizabeth')
            break;
            case 'stevieCondonContactBtn':
                window.location.href = 'mailto:notsure@gmail.com'
                console.log('stevie jo')
            break;
            case 'ashleyShinContactBtn':
                window.location.href = 'mailto:notsure@gmail.com'
                console.log('ashley')
            break;
            case 'crystalCorallesContactBtn':
                window.location.href = 'mailto:notsure@gmail.com'
                console.log('crystal')
            break;
            case 'brendPaigeContactBtn':
                window.location.href = 'mailto:notsure@gmail.com'
                console.log('brenda')
            break;
            case 'gabiTorgersonContactBtn':
                window.location.href = 'mailto:notsure@gmail.com'
                console.log('gabi')
            break;
            case 'sarahLeonardContactBtn':
                window.location.href = 'mailto:notsure@gmail.com'
                console.log('sarah')
            break;
            case 'michelleStanzelContactBtn':
                window.location.href = 'mailto:notsure@gmail.com'
                console.log('michelle')
            break;
        }

        
    })
}



