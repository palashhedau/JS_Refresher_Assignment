
	var contactNames = [];
	getFirstLoadData();

	function getFirstLoadData(){
		var httpreq = new XMLHttpRequest(); 
			httpreq.open('GET','https://randomuser.me/api/?results=30',true);
			httpreq.send();
			httpreq.onreadystatechange = function(){
				if (this.readyState ==  4 && this.status == 200){
					var ContactObj = JSON.parse(this.responseText);					
					getData(ContactObj.results);
				}
			}	
	}

	
	
	function resetElements(ul){
		while (ul.hasChildNodes()) {
		    ul.removeChild(ul.lastChild);
		}
	}

	function getData(array){
		array.sort(function(a, b){
		    var x = a.name.first.toLowerCase();
		    var y = b.name.first.toLowerCase();
		    if (x < y) {return -1;}
		    if (x > y) {return 1;}
	   		return 0;
	   	});

		var ul = document.getElementById('contactList');
		resetElements(ul);
		for (var i = 0; i < array.length; i++) {
			var li = document.createElement('li');
			li.setAttribute('class','col-sm-12 paddingLR0 list-group-item');

			var div1 = document.createElement('div');
			div1.setAttribute('class','col-sm-1 image-container');

			var img = document.createElement('img');
			img.setAttribute('src',array[i].picture.medium);
			img.setAttribute('class','img-circle');
			img.width = '30';
			img.height = '30';
			div1.appendChild(img);

			li.appendChild(div1);

			var div2 = document.createElement('div');
			var fName = document.createTextNode(array[i].name.first + ' ' + array[i].name.last);
			div2.setAttribute('class','col-sm-8"');
			div2.appendChild(fName);

			li.appendChild(div2);
			
			ul.appendChild(li);
		}

			var myLi = document.getElementById('contactList').getElementsByTagName('li');

		  	for (j = 0; j < myLi.length; j++) {
			    myLi[j].addEventListener('click',ListClick,false);
			}

			contactNames = array.slice();

			if(myLi[0]){
				myLi[0].click();
			}
	}

	

	function ListClick(event){
		var clickValue = this.innerText.replace(/\s/g, '');
		var li = document.getElementById('contactList').getElementsByTagName('li');

		for (i = 0; i < li.length; i++) {
			li[i].classList.remove('active');
		}
		
		for(var i=0;i < contactNames.length;i++){
			var flname = (contactNames[i].name.first + contactNames[i].name.last).replace(/\s/g,'');
			if (clickValue == flname){
				this.className += ' active';
				document.getElementById('mainHeading').innerHTML = contactNames[i].name.first + ' ' +contactNames[i].name.last;
				document.getElementById('headerImg').setAttribute('src',contactNames[i].picture.medium);
				document.getElementById('email').value = contactNames[i].email;
				document.getElementById('username').value = contactNames[i].login.username;
				document.getElementById('alternate').value = contactNames[i].phone;
				document.getElementById('phone').value = contactNames[i].cell;
				document.getElementById('address').value = contactNames[i].location.street + ', ' + contactNames[i].location.postcode + ', ' + contactNames[i].location.state + ', ' + contactNames[i].location.city;;
				var dateVal = (contactNames[i].dob).split(' ')[0].split('-');
				document.getElementById('dob').value =  dateVal[0] + '-' + dateVal[1] + '-' +dateVal[2];

			}
		}
	}
	
	
	function onContactChange(){
		var seachText = (document.getElementById('searchValue').value).toLowerCase();	
		
		var ul = document.getElementById('contactList');
		resetElements(ul);
		
		for (var int = 0; int < contactNames.length; int++) {	
			var firstName = contactNames[int].name.first.toLowerCase();		
			if((firstName).indexOf(seachText) > -1 ){
				if (document.getElementById('nodata').classList.contains('visibility-visible')) {
					document.getElementById('nodata').classList.remove('visibility-visible');
				}
				var li = document.createElement('li');
				li.setAttribute('class','col-sm-12 paddingLR0 list-group-item');

				var div1 = document.createElement('div');
				div1.setAttribute('class','col-sm-1 image-container');

				var img = document.createElement('img');
				img.setAttribute('src',contactNames[int].picture.medium);
				img.setAttribute('class','img-circle');
				img.width = '30';
				img.height = '30';
				div1.appendChild(img);

				li.appendChild(div1);

				var div2 = document.createElement('div');
				var fName = document.createTextNode(contactNames[int].name.first + ' ' + contactNames[int].name.last);
				div2.setAttribute('class','col-sm-8"');
				div2.appendChild(fName);

				li.appendChild(div2);
				
				ul.appendChild(li);

				var myLi = document.getElementById('contactList').getElementsByTagName('li');

			  	for (i = 0; i < myLi.length; i++) {
				    myLi[i].addEventListener('click',ListClick,false);
				}
			}
		}

		var myLi = document.getElementById('contactList').getElementsByTagName('li');
			if (myLi.length == 0){
				if(!document.getElementById('nodata').classList.contains('visibility-visible')){
					document.getElementById('nodata').classList.add('visibility-visible');
				} 
			}
		
	}

	var modal = '';
	function openModal(){			  
		modal = document.getElementById('myModal');
		resetModalFields();
		 modal.style.display = "block";
		document.getElementById('modalBody').scrollTop = 0;
		var span = document.getElementsByClassName("close")[0];
	}

	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}


	function previewFile(){
	       var preview = document.querySelector('#uploadImg');
	       var file    = document.querySelector('input[type=file]').files[0];
	       var reader  = new FileReader();
	       reader.onloadend = function () {
	           preview.src = reader.result;
	       }

	       if (file) {
	           reader.readAsDataURL(file);
	       } else {
	           preview.src = "";
	       }
	  }

	function resetModalFields(){
		document.getElementById('Mfirst').value = '';
		document.getElementById('Mlast').value = '';
		document.getElementById('Memail').value = '';
		document.getElementById('Mphone').value = '';
		document.getElementById('Mstreet').value = '';
		document.getElementById('Mcity').value = '';
		document.getElementById('Mstate').value = '';
		document.getElementById('Mpostcode').value = '';
		document.getElementById('Mdob').value = '';
		document.getElementById('uploadImg').src = '';
		document.getElementById('error-msg').innerHTML = '';
		document.getElementById('Musername').value = '';
		document.getElementById('Mmobile').value = '';
	}

	function deleteUser(){
		contactNamesAfterRemoval = [];
		var clickValue =  document.getElementById('mainHeading').innerHTML ; 	
		if(clickValue.length > 0){
			for(var i=0;i < contactNames.length;i++){
				var flname = (contactNames[i].name.first + ' ' + contactNames[i].name.last) ; 
				if (clickValue != flname){
					contactNamesAfterRemoval.push(contactNames[i]);
				}
			}
			contactNames = [];
			contactNames = contactNamesAfterRemoval;
			getData(contactNames) ;
			if (contactNames.length == 0) {
				resetFormDetails();
			} 

		}

	function resetFormDetails(){
		document.getElementById('mainHeading').innerHTML = '';
		document.getElementById('headerImg').src = '';
		document.getElementById('email').value = '';
		document.getElementById('phone').value = '';
		document.getElementById('username').value = '';
		document.getElementById('address').value = '';
		document.getElementById('alternate').value = '';
		document.getElementById('dob').value = '';
	}
		
		
		
	}

	function addContact(){
		var Mfirst = document.getElementById('Mfirst').value;
		var Mlast = document.getElementById('Mlast').value;
		var Musername = document.getElementById('Musername').value;
		var Memail = document.getElementById('Memail').value;
		var Mmobile = document.getElementById('Mmobile').value;
		var Mphone = document.getElementById('Mphone').value;
		var Mstreet = document.getElementById('Mstreet').value;
		var Mcity= document.getElementById('Mcity').value;
		var Mstate = document.getElementById('Mstate').value;
		var Mpostcode = document.getElementById('Mpostcode').value;
		var Mdob = document.getElementById('Mdob').value;
		var Mimg = document.getElementById('uploadImg').src;
		if (Mfirst && Mmobile) {
			document.getElementById('error-msg').innerHTML = "";
			var obj = {
				name : {
					first : Mfirst,
					last : Mlast
				},
				email : Memail,
				picture : {
					medium : Mimg
				},
				login:{
					username : Musername
				},
				phone : Mphone,
				cell : Mmobile,
				location : {
					street : Mstreet,
					city : Mcity,
					state : Mstate,
					postcode : Mpostcode
				},
				dob : Mdob
			}
			contactNames.push(obj);
			getData(contactNames);
			document.getElementById('searchValue').value = "";
			closeBtn();
		}else{
			document.getElementById('error-msg').innerHTML = "Enter Mandetory Felids...";
		}
	}

	function closeBtn(){
		modal.style.display = "none";
	}