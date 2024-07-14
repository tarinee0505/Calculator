// let input = document.getElementById('inputbox').value
let buttons = document.querySelectorAll('button')

let strings = ""
let arr = Array.from(buttons)
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        console.log(e.target.value,"//")
        if(e.target.value == '='){
           
            document.getElementById('inputbox').value = eval(strings)
        }
        else if(e.target.value == 'AC'){
            strings = ''
            document.getElementById('inputbox').value = "0"
            // input.value = strings
        }
        else if(e.target.value == 'DEL'){
            strings = strings.substring(0,strings.length-1)
            document.getElementById('inputbox').value = strings
            // input.value = strings
        }
        else{
            strings += e.target.value
            console.log(strings,'..............')
           document.getElementById('inputbox').value = strings;
        }
    })
})