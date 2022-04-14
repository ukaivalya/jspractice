const reviews = [
{
    id:1,
    name:"Michael",
    job:"web developer",
    img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "I am a web Developer having five years of experience in css,html,react and redux",

},
{
    id:2,
    name:"Monalisa",
    job:"Enterpreneur",
    img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I am a Enterpreneur having five years of experienence "
},
{
    id:3,
    name:"Miha",
    job:"Teacher",
    img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "I am a dotnet developer having three years of experience in this domain"
}
]

//const img = document.querySelector("person-img")
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");
const img = document.querySelector("#person-img");

const prevbtn = document.querySelector(".prev-button");
const nextbtn = document.querySelector(".aftr-button");
const rdmbtn = document.querySelector(".rdm-button");

let currentitem = 0;

window.addEventListener("DOMContentLoaded",function(){
   // console.log("Ji");
    showPerson(currentitem);
});



function showPerson(){

    const item = reviews[currentitem];
    console.log(item);
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    

};


nextbtn.addEventListener("click",function(){
    currentitem++;
    if(currentitem > reviews.length-1){
        currentitem=0;
    }
    showPerson();

});

prevbtn.addEventListener("click",function(){
   currentitem--;
   if(currentitem < reviews.length-1){
       currentitem = 0;
   }
   showPerson();

});

rdmbtn.addEventListener("click",function(){

    currentitem = Math.floor(Math.random()* reviews.length);
    console.log(currentitem);
    showPerson();
});