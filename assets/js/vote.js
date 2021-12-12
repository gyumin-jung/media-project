const subs = document.getElementById("btn_vote")

subs.addEventListener("click", function() {
    if(subs.innerText === 'Vote') {
        subs.innerText = 'Voted';
        subs.style.backgroundColor = 'red';
    } else if (subs.innerText =='Voted'){
        subs.innerText = 'Vote';
        subs.style.backgroundColor = '#0090c5';
    } else{        
    }
});
