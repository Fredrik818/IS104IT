var element_unordered_list = document.getElementById("first7");alert(element_unordered_list);element_unordered_list.style.color = "green";

function printToOutputBox(selectobj){
 var e_proglangs = document.getElementById("proglangs");
 var e_outputbox = document.getElementById("outputbox");
 e_outputbox.innerHTML = "Du har valgt: "+ e_proglangs.options[selectobj.selectedIndex].text;
}