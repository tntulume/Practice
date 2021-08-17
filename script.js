let history = ["2+2=4", "5*5=25", "30-20=10", "40+20=60"];
let currentIndex = 0;

const NEXTBTN = document.getElementById("next");
const HISTORY = document.getElementById("history");
const PREVBTN = document.getElementById("prev");
const SEPARATORVIEW = document.getElementById('separator');


NEXTBTN.addEventListener('click', () => showNextValue());
PREVBTN.addEventListener('click', () => showPrevValue());
let postion = 0;
let historyTotal = history.length;

function showNextValue(){
   
    let lastIndex = historyTotal - 1;
    postion = currentIndex + 1;
    
    if(currentIndex <= lastIndex){
        SEPARATORVIEW.textContent = postion +'/'+ historyTotal 
        HISTORY.innerHTML = history[currentIndex] + ' <button class = "remove" value = "0"><i class="las la-times"></i></button>';
        // to increment index by 1 to make the make the operation recurring
        currentIndex++;
    }
    else{
        alert('No more history values')
    }
    
    // console.log(HISTORY);
}

function showPrevValue(){
    let shownHistory = document.getElementById('history');
    // console.log(shownHistory.textContent);
    let shownHistoryContent = shownHistory.textContent;
    let historyValue = shownHistoryContent.split(' ')
    // console.log(historyValue);
    let actualValue = historyValue[0];
    // console.log(actualValue)
    let presentIndex = history.indexOf(actualValue);
    // console.log(presentIndex);
    
    if(presentIndex >= 1){
         
        // console.log(presentIndex);
        // if(presentIndex != 0 ){
            let previousIndex = presentIndex - 1;
            postion = previousIndex + 1;
            SEPARATORVIEW.textContent = postion +'/'+ historyTotal
            HISTORY.innerHTML = history[previousIndex] + ' <button class = "remove" value = "0"><i class="las la-times"></i></button>';
            // console.log(history[previousIndex]);
            // console.log(previousIndex);
        }
        // else{
        // //     alert('This is the first history value');
        // }
        
    else{
        let previousIndex = history.length - 1;
        postion = previousIndex + 1;
        HISTORY.innerHTML = history[previousIndex] + ' <button class = "remove" value = "0"><i class="las la-times"></i></button>';
        SEPARATORVIEW.textContent = postion +'/'+ historyTotal
    }
}