// let parks = []
const parksContainer = () => document.getElementById("parks-container")

const getParks = () => {
    fetch("http://localhost:3000/parks")
    .then(resp => resp.json())
    .then(parks => renderParks(parks))
}

const getPark = () => {
    fetch(`http://localhost:3000/parks/${2}`)
    .then(resp => resp.json())
    .then(park => renderPark(park))
}

const renderPark = (park) => {
   debugger
}

const renderParks = (parks) => {
    parks.forEach(park => {

        let div = document.createElement('div')
        let h1 = document.createElement('h1')
        let p1 = document.createElement('p')
        let a = document.createElement('a')
        let p2 = document.createElement('p')

        div.id = park.id
        h1.innerText = park.fullName
        p1.innerText = park.states
        a.href = park.url
        a.innerText = "visit park site"
        p2.innerText = park.designation


        div.appendChild(h1)
        div.appendChild(p1)
        div.appendChild(a)
        div.appendChild(p2)

        parksContainer().append(div)

        
        
//         id: 81,
// states: "WV",
// parkCode: "neri",
// designation: "National Park and Preserve",
// fullName: "New River Gorge National Park and Preserve",
// url: "https://www.nps.gov/neri/index.htm",
// name: "New River Gorge",
// created_at: "2021-07-28T15:22:24.947Z",
// updated_at: "2021-07-28T15:22:24.947Z"
div.style.padding = "25px"
    })
}


const startProgram  = () => {

    getParks()
    getPark()
}

document.addEventListener('DOMContentLoaded', startProgram)