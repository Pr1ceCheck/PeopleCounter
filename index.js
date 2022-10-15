//intalize the count as 0
// listen for clicks on the increment button
// increment the count variable when the buton is clicked
// change the count-ed in the HTML to reflect the new count 
//------------ steps -----------
let countEd = document.getElementById("count-ed") 
let paraEd = document.getElementById("para-ed")
let count = 0
let showSaved = count + " - "
//declare funtion
function increment () {
count = count + 1
countEd.innerText = count//can change like ln 13
}
//document.getElementById(count).innerText = count
let results = 0 

function save() {
paraEd.textContent += showSaved // did not use inner.text
console.log(count)
}

