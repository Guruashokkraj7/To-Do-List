const input= document.getElementById('input-box')
console.log(input.value);
const listItems = document.getElementById('task-items')

const quoteTitle=document.getElementById('quote');
const quoteAuthor = document.getElementById('author');


 const data = async ()=>{
    const response = await fetch('https://api.api-ninjas.com/v1/quotes',{
        method:"GET",
        headers:{
            'X-Api-Key':'OZDVHdTifhXeV/FFT7B9Dw==hHWqVwPH9fprvhRz'
        }
    }); 
    const result = await response.json();
    quoteTitle.innerHTML=(result[0].quote)
    quoteAuthor.innerHTML="- "+(result[0].author)
}

data();

function addTask(){
    if(input.value === ""){
        alert('Task cannot be empty');
    }
    else{
        let li=document.createElement('li');
        let span=document.createElement('span');
        span.innerHTML='✕';
        li.innerHTML=input.value;
        listItems.appendChild(li);
        li.appendChild(span);
    }
    input.value='';
    saveData();       
}

listItems.addEventListener('click', function (click){
    
    if(click.target.tagName==='LI'){
        click.target.classList.toggle('marked');
        saveData();
    }else if(click.target.tagName==='SPAN'){
        click.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem('data',listItems.innerHTML);
}

function fetchData(){
    listItems.innerHTML=localStorage.getItem('data');
}


fetchData()