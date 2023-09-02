//  (actualWords / totalTimeTaken) * 60;

const typing_ground = document.querySelector('#textarea');
const btn = document.querySelector('#btn');
const score = document.querySelector('#score');
const show_sentence = document.querySelector('#showSentence');

let startTime, endTime, totalTimeTaken;


const sentences = ['The quick brown fox jumps over the lazy dog 1',
    'After all, you're only an immortal until someone manages to kill you.',
    'Time plays like an accordion in the way it can stretch out and compress itself in a thousand melodic ways.'
    'Life is beautiful, as long as it consumes you.']

// step 5

const calculateTypingSpeed = (time_taken) => {
    let  totalWords = typing_ground.value.trim();
    let actualWords = totalWords === '' ? 0 : totalWords.split(" ").length;

    if(actualWords !== 0) {
        let typing_speed  =  (actualWords / time_taken) * 60;
        typing_speed = Math.round(typing_speed);
        score.innerHTML = `Your typing speed is ${typing_speed} words per minutes & you wrote ${actualWords} words & time taken ${time_taken} sec`;
    }else{
        score.innerHTML = `Your typing speed is 0 words per minutes & time taken ${time_taken} sec`;
    }
}

// step 4
const endTypingTest = () => {
    btn.innerText = "Start";

    let date = new Date();
    endTime = date.getTime();

    totalTimeTaken = (endTime -startTime) / 1000;

    // console.log(totalTimeTaken);

    calculateTypingSpeed(totalTimeTaken);

    show_sentence.innerHTML = "";
    typing_ground.value = "";
}


// step 3
const startTyping = () => {
    let randomNumber = Math.floor(Math.random() * sentences.length);
    // console.log(randomNumber);
    show_sentence.innerHTML = sentences[randomNumber];

    let date = new Date();
    startTime = date.getTime();

    btn.innerText = "Done";
}




// step 2
btn.addEventListener('click', () => {
    switch (btn.innerText.toLowerCase()) {
        case "start":
            typing_ground.removeAttribute('disabled');
            startTyping();
            break;

        case "done":
            typing_ground.setAttribute('disabled' , 'true');
            endTypingTest();
            break;
    }
})
// //formula for calculating the time per words
// // (actual words/total time taken)*60

// const typing_ground=document.querySelector('#textarea');
// const btn=document.querySelector('#btn');
// const score=document.querySelector('#score');
// const show_sentence = document.querySelector('#showSentence');

// let startTime, endTime, totalTimeTaken;

// const sentences = ['The quick brown fox jumps over the lazy dog 1',
//     'The quick brown fox jumps over the lazy dog 2',
//     'The quick brown fox jumps over the lazy dog 3 ']

// //STEP==5
// const calculateTypingSpeed=(time_taken)=>{
//     let  totalWords = typing_ground.value.trim();                //trim spaces hata deta hai
//     let actualWords = totalWords === '' ? 0 : totalWords.split(" ").length;    //split sentances ke andar ke words ke char ko ginta hai

//     if(actualWords!==0){
//         let typing_speed=(actualWords/time_taken)*60;
//         typing_speed = Math.round(typing_speed);     //speed nearest whole number ke pass ho jayegi
//         score.innerHTML = `Your typing speed is ${typing_speed} words per minutes & you wrote ${actualWords} words & time taken ${time_taken} sec`;
//     }
//     else{
//         score.innerHTML = `Your typing speed is 0 words per minutes & time taken ${time_taken} sec`;
//     }
    
// }
// //STEP==4
// const endTyping=()=>{
//     btn.innerText="Start";

//     let date = new Date();
//     endTime = date.getTime();
//     totalTimeTaken = (endTime -startTime) / 1000;      //here (endTime -startTime) give time in millisec and 
//                                                        //we need to divide it by /1000 so as to get ans in sec 

//     // console.log(totalTimeTaken);
//     calculateTypingSpeed(totalTimeTaken);

//     show_sentence.innerHTML = "";
//     typing_ground.value = "";
// }

// //startTyping function 
// //this act as a variable and a function both
// //STEP==3
// const startTyping=()=>{
//     let randomNumber = Math.floor(Math.random() * sentences.length);
//     //generates a random integer that represents a valid index within the sentences array. 
//     //This random index can then be used to access a random sentence from the array.
//     // let randomSentence = sentences[randomNumber];
//     console.log(randomSentence);
//     show_sentence.innerHTML=sentences[randomNumber];

//     let date=new Date();
//     startTime=date.getTime();
//     btn.innerText="Done";
// }

// //STEP==2 for button
// btn.addEventListener('click',()=>{
//     switch(btn.innerText.toLowerCase()){
//         case "start":
//             typing_ground.removeAttribute('disabled');
//             startTyping();
//             break;
        
//         case "done":
//             typing_ground.setAttribute('disabled','true');
//             endTyping();
//             break;
//    }
// })  

