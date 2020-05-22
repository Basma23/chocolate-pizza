'use strict'

function checkboxManipulate(form) {
    var chBX;
    var slectParagraph 
    var cb = document.getElementById('formy').getElementsByTagName('input');
    for (var i = 0; i < cb.length; i++) {
        if (cb[i].checked == true) {
             chBX = cb[i].id;
             slectParagraph = document.getElementsByName(chBX);
            slectParagraph[i].innerHTML = `<del> ${slectParagraph[i].textContent}</del>`;
        }else if(cb[i].checked == false){
            chBX = cb[i].id;
            slectParagraph = document.getElementsByName(chBX);
           slectParagraph[i].innerHTML = slectParagraph[i].textContent;
        }
    }
}