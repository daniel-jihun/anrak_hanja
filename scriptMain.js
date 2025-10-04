const submitButton = document.getElementById('submitButton')
const errText = document.getElementById('errText')
errText.textContent = ""
let checkBoxes = []
for (let i = 0; i < 10; i++) { //change the n in  i < n
    checkBoxes.push(document.getElementById(`c${i+1}`))
}


submitButton.addEventListener("click", function(e) {
    e.preventDefault()
    
    let selected = false;
    let id = '';
    for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked == true) {
            id = `${id}1`
            selected = true
        } else {
            id = `${id}0`
        }
    }

    if (selected == true) {
        window.localStorage.setItem('id', id)
        window.location.href = 'page.html'
    } else {
        errText.textContent = "연습할 항목을 선택하시오"
    }
    
})