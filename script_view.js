/*
@author  Writam Mallik, Ipshita Nandy
@version 3.0
@Date 15/03/2021
*/

		var itemarr = [];
		var itemarrfinal = [];

		function makeUL(array) {
    		var list = document.createElement('ul');

    		for (var i = 0; i < array.length; i++) {
        		var item = document.createElement('li');
        		item.appendChild(document.createTextNode(array[i]));
        		list.appendChild(item);
    		}
    return list;
}
		function getResult() {
            var xml=document.getElementById("p");
            var designValue= xml.value;
            
			jQuery.extend({
				getValues: function(url) {
					var listdata = null;
					$.ajax({
						type:'GET',
						url:'fetch1.cgi',
						async: false,
						data:"p="+designValue,
						success:function(data) {
							listdata = data;
							//alert("success");
						}
					});
					return listdata;
			    }
			});
			
			var results = $.getValues("url string");
			var count = (results.match(/<itemlist>/g) || []).length;
			var parts = results.split("<itemlist>");
			for(i=1;i<= count ; i++){
				var thePart = parts[i].split("</itemlist>")[0];
				itemarr.push(thePart);
			}			
			var type;
			var t = itemarr[0].substr(0,1);
			switch (t) {
				case "g":
					type = 1;
					imagepath = "img/green.jpg";
					break;
				case "f":
					type = 2;
					imagepath = "img/fruit1.jpg";
					break;
				case "v":
					type = 3;
					imagepath = "img/vegetable1.jpg";
					break;
				case "n":
					type = 4;
					imagepath = "img/nonveg.jpg";
					break;
				default:
					type = 0;
					imagepath = "img/mixed.jpg";
					break;
  
			}


			for(i=0;i<itemarr.length;i++){
				var s = itemarr[i];
				var str = s.substring(1,s.length);
				itemarrfinal.push(str);
			}
			console.log(itemarrfinal);
			document.getElementById('foo').appendChild(makeUL(itemarrfinal));

			var sourceOfPicture1 = imagepath;
            var img1 = document.getElementById('x');
            img1.src = sourceOfPicture1.replace('200x200', '200x200');
            img1.style.display = "block";
	}
	
function myFunctiong() {
	document.getElementById('green1').style.display='block';
    document.getElementById('gcucumber').style.display='block';
	document.getElementById('gonion').style.display='block';
	document.getElementById('gcarrot').style.display='block';
	document.getElementById('gtomato').style.display='block';
}

function myFunctionf() {
	document.getElementById('green1').style.display='block';
    document.getElementById('gCucumber').style.display='block';
	document.getElementById('gOnion').style.display='block';
	document.getElementById('gCarrot').style.display='block';
	document.getElementById('gTomato').style.display='block';
}

function myFunctionv() {
	document.getElementById('green1').style.display='block';
    document.getElementById('gCucumber').style.display='block';
	document.getElementById('gOnion').style.display='block';
	document.getElementById('gCarrot').style.display='block';
	document.getElementById('gTomato').style.display='block';
}

function myFunctionn() {
	document.getElementById('green1').style.display='block';
    document.getElementById('gCucumber').style.display='block';
	document.getElementById('gOnion').style.display='block';
	document.getElementById('gCarrot').style.display='block';
	document.getElementById('gTomato').style.display='block';
}
		
	