const submitButton = document.getElementById('submitButton')
let checkBoxes = []
for (let i = 0; i < 7; i++) { //change the n in  i < n
    checkBoxes.push(document.getElementById(`c${i+1}`))
}


submitButton.addEventListener("click", function(e) {
    e.preventDefault()
    
    let id = '';
    for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked == true) {
            id = `${id}1`
        } else {
            id = `${id}0`
        }
    }
    
    window.localStorage.setItem('id', id)

    window.location.href = 'page.html'
})