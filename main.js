document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const rapper=document.querySelector('input').value
    try{
        const response= await fetch(`https://rap-monsta.herokuapp.com/api/${rapper}`)
        const data= await response.json()

        console.log(data)
        document.querySelector('h2').innerText=data.line
        document.querySelector('h3').innerText=data.name
    }catch(error){
        console.log(error)
    }
}


