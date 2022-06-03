<<<<<<< HEAD
const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage':{
        'age': 29,
        'birthName':'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England' 
    },
    'chance the rapper':{
        'age': 29,
        'birthName':'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois' 
    },
    'dylan':{
        'age': 29,
        'birthName':'Dylan',
        'birthLocation': 'Dylan' 
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request,response)=>{
    const rappersName = request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    }else{
        response.json(rappers['dylan'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
=======
const express=require('express')
const app=express()
const cors=require('cors')
const { response } = require('express')
const PORT=7000

app.use(cors())

let rap={
    'eminem':{
        'line': "I'm a menace, a dentist, an oral hygienist. Open your mouth for about four or five minutes.",
        'name': 'Eminem'
    },
    'dre': {
        'line': "I dip through in that Six-Trey, like, 'Sick em, Dre!'",
        'name': 'Dr. Dre'
    },
    
    'migos': {
        'line': "Slippery, 'scuse me, please me (please) Arm up, or believe me, believe me (believe me)",
        'name': 'Migos'
    },
    'tory lanez': {
        'line': "Nigga, please, I got old nigga cheese, y'all got hoe nigga knees",
        'name': 'Tory Lanez'
    },
    'kendrick lamar': {
        'line': "Ayy, I remember syrup sandwiches and crime allowances. Finesse a nigga with some counterfeits, but now I'm counting this.",
        'name': 'Kendrick Lamar'
    },
    'cardi b': {
        'line': "They call me Cardi Bardi, banging body, Spicy mami, hot tamale, Hotter than a Somali, fur coat, Ferrari",
        'name': 'Cardi B'
    },
    'changmo': {
        'line': "I Want More One More One More Rollie",
        'name': 'Changmo'
    },
    'lil wayne': {
        'line': "A millionaire, I'm a Young Money millionaire",
        'name': 'Lil Wayne'
    },
    'lil nas x': {
        'line': "I wanna sell what you're buying, I wanna feel on your ass in Hawaii",
        'name': 'Lil Nas X'
    },
    '50 cent': {
        'line': "I'll take you to the candy shop. I'll let you lick the lollipop",
        'name': '50 Cent'
    },
    'travis scott': {
        'line': "At the gate outside, when they pull up, they get me loose",
        'name': 'Travis Scott'
    },
    'doja cat': {
        'line': "I keep it juicy juicy, I eat that lunch (Yeah)",
        'name': 'Doja Cat'
    },
    'logic': {
        'line': "Bustin' like an addict with a semi-automatic",
        'name': 'Logic'
    },
    'kanye west': {
        'line': "Now, I ain't sayin' she a gold digger, uh",
        'name': 'Yeezy'
    },
    'xxxtentacion': {
        'line': "Who am I? Someone that's afraid to let go.",
        'name': "XXXTENTACION"
    },
    
    'empty': {
        'line': "I'm a menace, a dentist, an oral hygienist. Open your mouth for about four or five minutes.",
        'name': 'Eminem'
    }
}


app.get('/', (req, res) => {   //note how this looks like an event listeners.
    res.sendFile(__dirname + '/index.html')
  })

app.get('/main.js', (req, res) => {
    res.sendFile(__dirname + '/main.js')
  })

app.get('/api/:name', (req, res)=>{
    const rapper = req.params.name.toLowerCase()
    if (rap[rapper]){
        res.json(rap[rapper])
    }else {
        res.json(rap['empty'])
    }
})

/*
app.get('/api/:name', (req, res)=>{
    console.log(rap[req.params.name])
    res.json(rap[req.params.name])
})
*/

app.listen(process.env.PORT || PORT, () => {   //use the port heroku wants to use, or default port
    console.log(`Server running on port ${PORT}`)
>>>>>>> f1
})