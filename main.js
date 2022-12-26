document.querySelector('#getButton').addEventListener('click', apiRequest)

async function apiRequest(){
    const charName = document.querySelector('input').value
    try{
        const response = await fetch( `https:/puce-powerful-trout.cyclic.app/api/:${charName}`)
        const data = await response.json()
        console.log(data)
        
        document.getElementById('charName').innerText = data.alienName
        document.getElementById('charSpecies').innerText = data.speciesName
        document.getElementById('charWorld').innerText = data.homeWorld
        document.getElementById('charTeam').innerText = data.Team
        document.getElementById('charSuit').innerText = data.Suit
        document.getElementById('charAbilities').innerText = data.
        Abilities
        document.getElementById('alienImage').src = data.image
       
    }catch(error) {
        console.log(error)
    }
}