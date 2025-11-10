function getRandomRange(min, max) {
    return min + Math.floor(Math.random() * (max + 1 - min));
}

window.onload = function gioco() {
var CUR = 0;

const gridContainer = document.querySelector('.body_game');

for (var i = 0; i < 9; i++) {
    const cellButton = document.createElement('button');
    cellButton.textContent = getRandomRange(-10, 10);
   
    if (Math.random() < 0.5) {
        cellButton.classList.add('cella_attiva');
        var CUR = CUR + parseInt(cellButton.textContent); 
    } else {
        cellButton.classList.add('cella_inattiva');
    }

    cellButton.addEventListener('click', function() {
        gestisciClick(this);
    });

    gridContainer.appendChild(cellButton);
}

var TOT = getRandomRange(-10, 10);
var NT = getRandomRange(3, 9);
var REM = NT;



document.getElementById('tot_val').innerText = TOT;
document.getElementById('nt_val').innerText = NT;
document.getElementById('cur_val').innerText = CUR;
document.getElementById('rem_val').innerText = REM;



function gestisciClick(button) {

    if(button.classList.contains('cella_attiva')){
        button.classList.remove('cella_attiva');
        button.classList.add('cella_inattiva');
        CUR -= parseInt(button.textContent);
        REM -=1;
    }
    
    else{
        button.classList.remove('cella_inattiva');
        button.classList.add('cella_attiva');
        CUR += parseInt(button.textContent);
        REM -=1;
    }

    document.getElementById('cur_val').innerText = CUR;
    document.getElementById('rem_val').innerText = REM;

    controlloFineGioco();
}


function controlloFineGioco(){
    if(CUR == TOT){
        alert("Hai vinto!");
    }
    if(REM == 0){
        if(CUR == TOT){
            alert("Hai vinto! Clicca OK per giocare ancora.");
            gridContainer.innerHTML = '';
            gioco();
        } else {
            alert("Hai perso! Clicca OK per giocare ancora.");
            gridContainer.innerHTML = '';
            gioco();
        }       
    }
}

}
