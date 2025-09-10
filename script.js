//your JS code here. If required.
const selectColor=document.getElementById("colorSelect")
const select=document.getElementById("selectremove")
select.addEventListener("click",removecolor)
	

function removecolor() {
	const selectedIndex=selectColor.selectedIndex
	//selectedoption.remove()
	
	selectColor.remove(selectedIndex)
	
	
}

