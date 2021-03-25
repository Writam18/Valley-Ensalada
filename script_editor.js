/*
@author  Writam Mallik, Ipshita Nandy
@version 3.0
@Date 15/03/2021
*/

var arr = [];
const mando = new Image(350, 550);
mando.src = 'img/salad-maker.png';

/* Events fired on the drag target */
document.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("Text", event.target.id);
  arr.push(event.target.id);
  event.target.style.opacity = "0.4";
});

document.addEventListener("drag", function(event) {
});

document.addEventListener("dragend", function(event) {
  event.target.style.opacity = "1";
});

document.addEventListener("dragenter", function(event) {
  if (event.target.className == "dropTarget") {
    event.target.style.border = "5px dotted black";
  }
});

document.addEventListener("dragover", function(event) {
  event.preventDefault();
});

document.addEventListener("dragleave", function(event) {
  if (event.target.className == "dropTarget") {
    event.target.style.border = "";
  }
});

document.addEventListener("drop", function(event) {
  event.preventDefault();
  const dropTarget = event.target.closest('.dropTarget');
  if (dropTarget) {
    dropTarget.append(mando); 
  }
});

function Saving(e){
	for (i = 0; i < arr.length; i++)
    	console.log(arr[i]);
}

function FinalSaving(){
               console.log(arr);
}
function getquerystring() {
                    var form = document.forms['f1'];
                    var word = form.word.value;
                    qstr = escape(word);
                    return qstr;
}
function PerlSubmit() {
                //var dd=JSON.stringify(arr)
                var dd = arr;
                console.log(dd);
                var design_no = getquerystring();
                $.ajax({
                    type: 'POST',
                    url: 'hello.cgi',
                    data: { "r": JSON.stringify({'salad' : [{'design': [design_no], 'itemlist' :dd}]})},
                    success: function(res) { alert(res); },
                    error: function() { alert("did not work"); }
                });

                dd = [];
                arr = [];
}


