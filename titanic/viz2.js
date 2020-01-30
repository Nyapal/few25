// General
const embarked = document.getElementById('pEmbarked')
const classes = document.getElementById('pClass')
const gender = document.getElementById('pGender')
const survivors = document.getElementById('pSurvivors')
// Sorted
const genderSorted = document.getElementById('genderSorted')
const survivedSorted = document.getElementById('survivedSorted')
const embarkedSorted = document.getElementById('embarkedSorted')
const classSorted = document.getElementById('classSorted')
// Filtered
const menOnly = document.getElementById('menFiltered')

fetch('passengers.json')
.then(res => res.json())
.then(json => {
  handleData(json)
})

function handleData(data) {
  const betterData = data.map(passengers => passengers.fields)
  // General Visualizations
  embarkedGraph(betterData)
  classGraph(betterData)
  genderGraph(betterData)
  survivorsGraph(betterData)

  // Sorted Visualizations 
  genderGraphSorted(betterData)
  survivedGraphSorted(betterData)
  embarkedGraphSorted(betterData)
  classGraphSorted(betterData)

  // Filtered Visualizations
  menGraphFiltered(betterData)
}

function embarkedGraph(betterData) {
  // EMBARKED
  betterData.forEach(passenger => {
    //make an element
    const el = document.createElement('div')
    //attach the element to the dom 
    pEmbarked.appendChild(el)
    //styling element 
    el.style.width = '10px'
    el.style.height = '10px'
    el.style.margin = '1px'
    
    if (passenger.embarked === 'S') {
      el.style.backgroundColor = '#B22222'
    } else if (passenger.embarked === 'Q') {
      el.style.backgroundColor = '#000080'
    } else if (passenger.embarked === 'C') {
      el.style.backgroundColor = 'silver'
    } else {
      el.style.backgroundColor = 'black'
    }
  })
}

function classGraph(betterData) {
  //CLASS
  betterData.forEach(passenger => {
    //make an element 
    const el = document.createElement('div')
    //attach the element to the dom 
    classes.appendChild(el)
    //style element 
    el.style.width = '10px'
    el.style.height = '10px'
    el.style.margin = '1px'

    if(passenger.pclass === 1) {
      el.style.backgroundColor = 'gold'
    } else if (passenger.pclass === 2) {
      el.style.backgroundColor = 'silver' 
    } else if (passenger.pclass === 3) {
      el.style.backgroundColor = '#B87333'
    } else {
      el.style.backgroundColor = 'black'
    }
  })
}

function genderGraph (betterData) {
  betterData.forEach(passenger => {
    //make an element
    const el = document.createElement('div')
    //attach the element to the dom 
    gender.appendChild(el)
    //styling element 
    el.style.width = '10px'
    el.style.height = '10px'
    el.style.margin = '1px'
    
    el.style.backgroundColor = passenger.sex === 'male' ? '#000080' : 'pink'
  }) 
}

function survivorsGraph (betterData) {
  betterData.forEach(passenger => {
    //make an element
    const el = document.createElement('div')
    //attach the element to the dom 
    survivors.appendChild(el)
    //styling element 
    el.style.width = '10px'
    el.style.height = '10px'
    el.style.margin = '1px'
    
    el.style.backgroundColor = passenger.survived === 'No' ? '#B22222' : '#000080'
  }) 
}

function genderGraphSorted (betterData) {
  betterData.sort((a, b) => {
    if (a.sex === 'male') {
      return -1
    } else {
      return 1
    }
    // return a.sex === 'male' ? -1 : 1
  })

  betterData.forEach(passenger => {
    //make an element
    const el = document.createElement('div')
    //attach the element to the dom 
    genderSorted.appendChild(el)
    //styling element 
    el.style.width = '10px'
    el.style.height = '10px'
    el.style.margin = '1px'
    
    el.style.backgroundColor = passenger.sex === 'male' ? '#000080' : 'pink'
  }) 
}

function survivedGraphSorted (betterData) {
  betterData.sort((a, b) => a.survived === 'Yes' ? -1: 1)
  betterData.forEach(passenger => {
    //make an element
    const el = document.createElement('div')
    //attach the element to the dom 
    survivedSorted.appendChild(el)
    //styling element 
    el.style.width = '10px'
    el.style.height = '10px'
    el.style.margin = '1px'
    
    el.style.backgroundColor = passenger.survived === 'No' ? '#B22222' : '#000080'
  }) 
}

function embarkedGraphSorted (betterData) {
  betterData.sort((a, b) => a.embarked === 'C' ? -1 : 1)
  betterData.sort((a, b) => a.embarked === 'S' ? -1 : 1)
  // EMBARKED
  betterData.forEach(passenger => {
    //make an element
    const el = document.createElement('div')
    //attach the element to the dom 
    embarkedSorted.appendChild(el)
    //styling element 
    el.style.width = '10px'
    el.style.height = '10px'
    el.style.margin = '1px'
    
    if (passenger.embarked === 'S') {
      el.style.backgroundColor = '#B22222'
    } else if (passenger.embarked === 'Q') {
      el.style.backgroundColor = '#000080'
    } else if (passenger.embarked === 'C') {
      el.style.backgroundColor = 'silver'
    } else {
      el.style.backgroundColor = 'black'
    }
  })
}

function classGraphSorted (betterData) {
  // Sorting Passengers by Class
  betterData.sort((a, b) => a.pclass === 2 ? -1 : 1)
  betterData.sort((a, b) => a.pclass === 1 ? -1 : 1)
  //CLASS
  betterData.forEach(passenger => {
    //make an element 
    const el = document.createElement('div')
    //attach the element to the dom 
    classSorted.appendChild(el)
    //style element 
    el.style.width = '10px'
    el.style.height = '10px'
    el.style.margin = '1px'

    if(passenger.pclass === 1) {
      el.style.backgroundColor = 'gold'
    } else if (passenger.pclass === 2) {
      el.style.backgroundColor = 'silver' 
    } else if (passenger.pclass === 3) {
      el.style.backgroundColor = '#B87333'
    } else {
      el.style.backgroundColor = 'black'
    }
  })
}

function menGraphFiltered (betterData) {
  const menFilteredGraph = betterData.filter(passenger => passenger.sex === 'male')
  menFilteredGraph.forEach(passenger => {
    const el = document.createElement('div')
    menFiltered.appendChild(el)

    el.style.width = '10px'
    el.style.height = '10px'
    el.style.margin = '1px'
    el.style.backgroundColor = '#000080'
  })
}