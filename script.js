//your JS code here. If required.
const checkboxes = document.querySelectorAll(".toggle")
let selected = []
checkboxes.forEach((checkBox) => {
	checkBox.addEventListener("change", function () {
		// const checked = document.querySelectorAll(".toggle:checked")
		if(this.checked){
			selected.push(this)
		}
		else{
			selected = selected.filter( box => box !== this)
		}
		if(selected.length>2){
			let firstChecked = selected.shift(); 
            firstChecked.checked = false;
		}
	})
})