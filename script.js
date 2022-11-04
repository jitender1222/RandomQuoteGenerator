const text=document.querySelector('.quote');
const btn=document.getElementById('btn');
const author=document.querySelector('.author');

// let random;

btn.addEventListener('click',()=>{
    fetch('https://type.fit/api/quotes')
    .then((response) => response.json())
    .then((data) => {
        let random=Math.floor(Math.random()*data.length);
        console.log(random);
        text.innerHTML=data[random].text;
        author.innerHTML=`Author:- ${data[random].author}`;
    })
})