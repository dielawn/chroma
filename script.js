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
        }

        
    })
}
const closeForm = () => {
    emailForm.style.display = 'none'
}

document.addEventListener('click', (e) =>{
    console.log(e.target)
let currentStylistBtn = e.target.id
let currentStylist = document.getElementById(currentStylistBtn)
console.log(currentStylist.id)
    switch(currentStylist.id){
        case cynthiaContactBtn:
            emailForm.action = 'mailto:CynthiaO.Hairmakup@gmail.com'
            emailForm.style.display = 'block'
            break;
    }
   
    
})
