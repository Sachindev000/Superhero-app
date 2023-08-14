//  https://superheroapi.com/api/access-token/character-id

const BASE_URL = `https://superheroapi.com/api.php/1281275322523430`

const nextBtndiv = document.getElementById('nextBtn')

const heroImgDiv = document.getElementById('heroImg')

const searchHeroDiv = document.getElementById('searchHero')

const searchInpDiv = document.getElementById('searchInp')

searchInpDiv.innerText

///////////////////
const getSuperHero = (id, name) => {
    fetch(`${BASE_URL}/${id}`)
        .then(res => res.json())
        .then(json => {
            // console.log(json)

            const superHero = json
            getPowerStat(superHero)


        }
        )

}

////////////////////////


const statToEmoji = {
    intelligence: '🧠',
    strength: '💪',
    speed: '⚡',
    durability: '🏋️‍♂️',
    power: '📊',
    combat: '⚔️',
}
/////////////////////


const getPowerStat = (character) => {

    const name = `<h2>${character.name}</h2>`
    const img = `<img src = "${character.image.url}" height=200 width=300/>`


    const stats = Object.keys(character.powerstats).map(stat => {
        return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}:
        ${character.powerstats[stat]}</>`


    })


    heroImgDiv.innerHTML = `${name}${img}${stats}`



}
////////////////////////////


const getSearchSuperHero = (name) => {
    console.log(searchInpDiv.value)
    fetch(`${BASE_URL}/search/${name}`)
        .then(res => res.json())
        .then(json => {
            const hero = json.results[0]
            // console.log(hero);
            getPowerStat(hero)
        })

    
}

const randomHero = () => {
    const numberOfHeroes = 731
    return Math.floor(Math.random() * numberOfHeroes) + 1
}


nextBtndiv.onclick = () => {
    getSuperHero(randomHero())
}

searchHeroDiv.onclick = () => {
    getSearchSuperHero(searchInpDiv.value)
}

