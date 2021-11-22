const quizdata = [
    {
        question:"Which did anime seire got best anime seire in 2020?",
        a:"Viloet garden",
        b:"Black clover",
        c:"Jujustu kaisen",
        d:"Towr of god",
        ra : 'c'
    },
    {
        question:"When was You tube lunch?",
        a:"1999",
        b:"2002",
        c:"2005",
        d:"2000",
        ra : 'c'
    },
    {
        question:"The logn term of html",
        a:'high technology machine language',
        b:'hyper text markup langauge',
        c:'hori temmini language',
        d:'none of them',
        ra : 'b'
    },
    {
        question:"the distance between moon and earth is ",
        a:'384,400KM',
        b:'384,400miles',
        c:'384,400MM',
        d:'384,400M',
        ra : 'a'
    },
    {
        question:"The new name of facebook company",
        a:'Meta',
        b:'AutoBan',
        c:'Report',
        d:'Zuzu',
        ra : 'a'
    },
    {
        question:"The prizepool of Dota2 Ti 10",
        a:'$1bilion',
        b:'$44million',
        c:'$8million',
        d:'$18million',
        ra : 'd'
    },
    {
        question:"Who is the richest man over world?",
        a:'Jeff Bezos',
        b:'Bil Gates',
        c:'Elon Musk',
        d:'Bernard Arnault',
        ra : 'a'
    },
    {
        question:"Country that have most hacker all over the world",
        a:'China',
        b:'Russia',
        c:'France',
        d:'USA',
        ra : 'a'
    },
    {
        question:"the year Daw Aung San Su Kyi got noble peace prize",
        a:'1991',
        b:'1990',
        c:'1989',
        d:'1998',
        ra : 'a'
    },
    {
        question:"best online shop enviroment",
        a:'Elbay',
        b:'Amazon',
        c:'Alibaba',
        d:'Aliexpress',
        ra : 'b'
    },


]
let score = 0;
let currentquiz = 0;
const scoreboard = document.querySelector(".show");
const sle = document.querySelectorAll(".answer")
const que = document.getElementById("question")
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const btn = document.getElementById("submit");
quizload();

function quizload(){
    deselct();
    const currentquiznumber = quizdata[currentquiz];
    que.innerText = currentquiznumber.question;
    a_text.innerText = currentquiznumber.a;
    b_text.innerText = currentquiznumber.b;
    c_text.innerText = currentquiznumber.c;
    d_text.innerText = currentquiznumber.d;
}
function deselct(){
    sle.forEach((ans)=>{
        ans.checked = false;
        
    })
}
function selectionels(){
    let answer = undefined;
    sle.forEach((ans)=>{
        if(ans.checked){
            answer = ans.id;
        }
        
    })

    return answer;
}
btn.addEventListener('click',()=>{    
    const answer = selectionels();
     if(answer){
         if(answer ===  quizdata[currentquiz].ra){
            score++;
            
        }console.log(answer);
        currentquiz++;
     if(currentquiz<quizdata.length){     
        quizload();  
     }
   else{
        scoreboard.innerHTML = `<h2>You score in ${score}/${quizdata.length}</h2>
        <p>thanks for participating in this quiz!!</p>
        `;
    }
}
})
 

