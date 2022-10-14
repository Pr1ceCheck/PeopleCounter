//intalize the count as 0
// listen for clicks on the increment button
// increment the count variable when the buton is clicked
// change the count-ed in the HTML to reflect the new count 
//------------ steps -----------
let countEd = document.getElementById("count-ed") 

let count = 0


//declare funtion
function increment () {
count = count + 1
countEd.innerText = count
}
//document.getElementById(count).innerText = count
