let a = Math.random() *20 + 1;
let num = Number.parseInt(a);
console.log(num);

let score = 20;
let highscore = 0;

let parent= document.getElementsByClassName('C2')[0];
let test = document.getElementById('test');
test.innerHTML=`<h3>Start guessing...</h3>
<br>
<h3>💯 Score: ${score}</h3>
<h3>⚡ Highscore: ${highscore}</h3>`

parent.append(test);
// console.log("score = " + score );

let check = document.getElementById('check');
let guess = document.getElementById('guess');
let again = document.getElementById('again');
let answer = document.getElementsByClassName('C4')[1];

check.addEventListener('click', (e)=>{
    let value = guess.value;
    if(value>num && value<=20){
        answer.innerHTML = `Your guess is greater than the actual number`;
        let newScore = score - 1;
        score = newScore;
        // console.log("score = " + score );
        test.innerHTML=`<h3>Start guessing...</h3>
        <br>
        <h3>💯 Score: ${score}</h3>
        <h3>⚡ Highscore: ${highscore}</h3>`
    }
    else if(value<num && value>0){
        answer.innerHTML = `Your guess is smaller than the actual number`;
        // `${score} -= 1`;
        let newScore = score - 1;
        score = newScore;
        // console.log("score = " + score );
        test.innerHTML=`<h3>Start guessing...</h3>
        <br>
        <h3>💯 Score: ${score}</h3>
        <h3>⚡ Highscore: ${highscore}</h3>`
    }
    else{
        answer.innerHTML = `Your guess is correct!!`;
        answer.style.backgroundColor = 'green';
        // answer.style.display = 'inline';
        highscore = score;
        test.innerHTML=`<h3>Start guessing...</h3>
        <br>
        <h3>💯 Score: ${score}</h3>
        <h3>⚡ Highscore: ${highscore}</h3>`
    }
})

again.addEventListener('click', ()=>{
    guess.value = "";
    answer.innerHTML = ``;
    // score -= 1;
})