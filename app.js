const addBtn = document.querySelector('.button')
const myInput = document.querySelector('#myInput')
const ul = document.querySelector('ul')

const divs = document.querySelectorAll('.list-wrapper')
const spans = document.querySelectorAll('span')

// addBtn.addEventListener('click', function() {
//     alert('working')
// })

myInput.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
        addBtn.click()
    }
})

function addNewItem() {
    let newItem = myInput.value

    if(newItem.length !== 0) {

        //Create elements
        const div = document.createElement('div')
        div.classList.add('list-wrapper')
    
        const li = document.createElement('li')
        li.textContent = newItem
    
        const removeSpan = document.createElement('span')
        removeSpan.textContent = '❌'
    
        div.appendChild(li)
        div.appendChild(removeSpan)
    
        ul.appendChild(div)
        div.addEventListener('click', function() {
            li.classList.toggle('checked')
        })
    
        removeSpan.addEventListener('click', function() {
            div.style.display = 'none'
        })
        myInput.value = ''

    } else {
        alert('Please add and Item')
    }
    

}

divs.forEach((div) => {
    div.addEventListener('click', function() {
        div.childNodes[1].classList.toggle('checked')
    })
})

spans.forEach((span) => {
    span.addEventListener('click', function() {
        const removeDiv = span.parentNode
        removeDiv.style.display = 'none'
    })
})