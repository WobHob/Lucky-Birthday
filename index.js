const fullDate = document.querySelector("#date-of-birth");
var luckyNum = document.querySelector("#lucky-number-slider");
const checkBtn = document.querySelector("#calculate-number");
const displayMsg = document.querySelector("#output-container");
const luckyNumDisp = document.querySelector("#range-output");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");

luckyNumDisp.innerHTML = luckyNum.value;

const calcSum = (date)=> {
    let sum =0;
    date = date.replaceAll("-","");
    for(let dig of date){
        sum+=Number(dig);
    }
    return sum;
}

const checkIsNumLucky = (sumOfDates,numToCheck)=> {
    if(sumOfDates%numToCheck === 0){
        return showMsg(`${numToCheck} is a lucky number!`);
    }
    showMsg(`${numToCheck} is not a lucky number!`);
}

const showMsg = (msg)=> {
    displayMsg.innerText = msg;
}

luckyNum.addEventListener("input",function(){
    luckyNumDisp.innerHTML = luckyNum.value;
})

// function incrementValue(){
//     val = isNan(luckyNum.value)?0:val;
//     val++;
//     luckyNumDisp.innerHTML = luckyNum.value;
// }


// function decrementValue(){
//     val = (isNan(luckyNum.value) || luckyNum.value<=0)?1:val;
//     val--;
//     luckyNumDisp.innerHTML = luckyNum.value;
// }

checkBtn.addEventListener("click",() => {
    const date = fullDate.value;
    const numToCheck = luckyNum.value;
    if(date && numToCheck){
        const sumOfDates = calcSum(date);
        checkIsNumLucky(sumOfDates,numToCheck);
    }
    else{
        showMsg("Please fill in both fields.");
    }
});