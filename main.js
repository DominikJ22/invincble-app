document.querySelector('#getButton').addEventListener('click', apiRequest)

async function apiRequest(){
    const alienName = document.querySelector('input').value
    try{
        const response = await fetch( `https://invincible-o7rr.onrender.com/api/${alienName}`)
        const data = await response.json()
        console.log(data)
        
        document.getElementById('alienName').innerText = data.alienName
        document.getElementById('alienSpecies').innerText = data.speciesName
        document.getElementById('alienWorld').innerText = data.homeWorld
        document.getElementById('alienTeam').innerText = data.Team
        document.getElementById('alienSuit').innerText = data.Suit
        document.getElementById('alienAbilities').innerText = data.
        Abilities
       document.getElementById('alienImage').src = data.image
       
    }catch(error) {
        console.log(error)
    }
}