const myLikes = ['resor', 'progarmmera', 'spela basket', 'vara ute i naturen', 'lära sig något nytt']

// Lösning 1
const ul1 = document.createElement('ul')
div1.appendChild(ul1)

for(i=0; i < myLikes.length; i++){
    const li = document.createElement('li')
    let values = document.createTextNode(myLikes[i])  

    ul1.appendChild(li)
    li.appendChild(values)  
    
    //console.log(myLikes[i])
}


// Lösning 2
const ul2 = document.createElement('ul')
div2.appendChild(ul2)

let n = 0;
while (n <myLikes.length) {
    const li = document.createElement('li')
    let values = document.createTextNode(myLikes[n])

    ul2.appendChild(li)
    li.appendChild(values) 

    //console.log(myLikes[n])
    n++
}


// Lösning 3
const ul3 = document.createElement('ul')
div3.appendChild(ul3)

myLikes.forEach(function(value){
    const li = document.createElement('li')
    let values = document.createTextNode(value)

    ul3.appendChild(li)
    li.appendChild(values) 

    //console.log(value)
})


// Lösning 4
const ul4 = document.createElement('ul')
div4.appendChild(ul4)

myLikes.map(function(value){
    const li = document.createElement('li')
    let values = document.createTextNode(value)

    ul4.appendChild(li)
    li.appendChild(values) 
    
    //console.log(value)
})