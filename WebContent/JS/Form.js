//////    REGULAR EXPRESSION   ////////////


function validateName(){
	document.getElementById('nameSpan').innerHTML = '' ;
	var name = document.getElementById('nameR').value ;
	var name_regex = /^[a-z]+[ ]?[a-z]+$/i ; 
	
	if(!name_regex.test(name)){
		document.getElementById('nameSpan').innerHTML = 'Invalid Name' ;
	}else{
		document.getElementById('nameSpan').innerHTML = '' ;
	}
	
}

function validateEmail(){
	document.getElementById('emailSpan').innerHTML = '' ;
	var name = document.getElementById('emailR').value ;
	var email_regex = /^[a-z0-9]{3,10}@[a-z]+\.[a-z]+$/i ; 
	
	if(!email_regex.test(name)){
		document.getElementById('emailSpan').innerHTML = 'Invalid Email' ;
	}else{
		document.getElementById('emailSpan').innerHTML = '' ;
	}
	
}

function validateAddress(){
	document.getElementById('addressSpan').innerHTML = '' ;
	var name = document.getElementById('addressR').value ;
	var address_regex = /^[a-z\d\s\,\.\-]{5,50}$/i ; 
	
	if(!address_regex.test(name)){
		document.getElementById('addressSpan').innerHTML = 'Invalid Address' ;
	}else{
		document.getElementById('addressSpan').innerHTML = '' ;
	}
	
}

function validatePhone(){
	document.getElementById('phoneSpan').innerHTML = '' ;
	var name = document.getElementById('mobileR').value ;
	var phone_regex = /^\d{10}$/i ; 
	
	if(!phone_regex.test(name)){
		document.getElementById('phoneSpan').innerHTML ='Invalid Mobile' ; 
	}else{
		document.getElementById('phoneSpan').innerHTML = '' ;
	}
	
}





/////   STRICT MODE   ////////////

function strcitFunction(){
	
	"use strict";
	
	y = 30 // wont allow to execute because of strict
	 
	console.log('value of Y :  ' + y );
	
}














/////////// JSON ////////////////////////////////////

function jsonFunction(){
	var tableRow = document.getElementById('employeeData') ; 
	while (tableRow.hasChildNodes()) {
		tableRow.removeChild(tableRow.lastChild);
	}
	
	var jsonObject = 
		{ data : [{"id":1,"first_name":"Brander","last_name":"Satyford","email":"bsatyford0@artisteer.com","gender":"Male","dob":"3/14/2017","salary":60},
	{"id":2,"first_name":"Brooke","last_name":"Barnhart","email":"bbarnhart1@wisc.edu","gender":"Male","dob":"5/27/2017","salary":61},
	{"id":3,"first_name":"Fax","last_name":"Jandak","email":"fjandak2@wisc.edu","gender":"Male","dob":"7/14/2017","salary":67},
	{"id":4,"first_name":"Mylo","last_name":"Faccini","email":"mfaccini3@eepurl.com","gender":"Male","dob":"1/30/2017","salary":56},
	{"id":5,"first_name":"Ave","last_name":"Ickov","email":"aickov4@archive.org","gender":"Male","dob":"8/16/2016","salary":96},
	{"id":6,"first_name":"Terrence","last_name":"Goreisr","email":"tgoreisr5@noaa.gov","gender":"Male","dob":"8/4/2017","salary":63},
	{"id":7,"first_name":"Brian","last_name":"Enden","email":"benden6@china.com.cn","gender":"Male","dob":"2/25/2017","salary":98},
	{"id":8,"first_name":"Miguel","last_name":"Bromfield","email":"mbromfield7@meetup.com","gender":"Male","dob":"10/15/2016","salary":42},
	{"id":9,"first_name":"Marjy","last_name":"Pottle","email":"mpottle8@wikipedia.org","gender":"Female","dob":"10/14/2016","salary":91},
	{"id":10,"first_name":"Jayme","last_name":"Twigg","email":"jtwigg9@nature.com","gender":"Female","dob":"3/24/2017","salary":92},
	{"id":11,"first_name":"Lorrayne","last_name":"Osborn","email":"losborna@bloomberg.com","gender":"Female","dob":"3/8/2017","salary":28},
	{"id":12,"first_name":"Myrtice","last_name":"Lynthal","email":"mlynthalb@businesswire.com","gender":"Female","dob":"7/22/2017","salary":98},
	{"id":13,"first_name":"Fredek","last_name":"Dive","email":"fdivec@bravesites.com","gender":"Male","dob":"12/3/2016","salary":35},
	{"id":14,"first_name":"Celisse","last_name":"McKennan","email":"cmckennand@nytimes.com","gender":"Female","dob":"3/31/2017","salary":71},
	{"id":15,"first_name":"Rebecca","last_name":"Baiyle","email":"rbaiylee@jigsy.com","gender":"Female","dob":"10/29/2016","salary":89}]} ;
	
	 
	
	
	 var arrayObject = jsonObject.data ; 
	 
	 for (var int = 0; int < arrayObject.length; int++) {
		var tr = document.createElement('tr'); 
		
		var td1 = document.createElement('td');
		td1.appendChild(document.createTextNode(arrayObject[int].id)) ;
		
		var td2 = document.createElement('td');
		td2.appendChild(document.createTextNode(arrayObject[int].first_name + ' ' + arrayObject[int].last_name )) ; 
		
		
		var td3 = document.createElement('td');
		td3.appendChild(document.createTextNode(arrayObject[int].email)) ; 
		
		
		var td4 = document.createElement('td');
		td4.appendChild(document.createTextNode(arrayObject[int].gender)) ; 
		
		
		var td5 = document.createElement('td');
		td5.appendChild(document.createTextNode(arrayObject[int].dob)) ; 
		
		
		var td6 = document.createElement('td');
		td6.appendChild(document.createTextNode(arrayObject[int].salary)) ; 
		

		tr.appendChild(td1); 
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		tr.appendChild(td5);
		tr.appendChild(td6);
		tableRow.appendChild(tr);
		
	}
	 
}







///////////// TYPE CONVERSION   ////////////////////////////

function typeConversionFunction(){
	 var companyName = document.getElementById('nameTC').value ; 
	 var years = document.getElementById('ageTC').value ;
	 var employeeCount = document.getElementById('salTC').value ;
	 var turnOver = document.getElementById('turnoverTC').value ;
	 
	 
	 
	 try{
		 
		 
		 
		 years = Number(years);
		 employeeCount = Number(employeeCount);
		 turnOver = Number(turnOver);
		 
		 if(isNaN(years)) throw 'The year cannot be a string';
		 if(isNaN(employeeCount)) throw 'The year cannot be a string';
		 if(isNaN(turnOver)) throw 'The year cannot be a string';
		 
		 var averageSal = (0.5*turnOver)/employeeCount ; 
		 console.log(averageSal);
		 document.getElementById('typeCId').innerHTML = '<b style="color:white">Average Salary of an employee should be $' +  averageSal.toFixed(2) + '<b>' ;
		 	 
	 }catch(err){
		console.log('Error occured : ' + err.name);	
		 document.getElementById('typeCId').innerHTML = '<b style="color:red">Please enter the number format in Count/Year Of Establishment/Annual Turnover<b>' ; 
	 }
	 
	
}














/////////// ERRORS ////////////////////////

function errorFunction(){
	 document.getElementById('courseMessage').innerHTML = '' ; 
	var message ;
	try{
		var dropDownValue = document.getElementById('courseId').value;
		
		
		if(dropDownValue == '202-1' || dropDownValue == '273'){
			throw '<b style=\'color:red\'> Sorry, the course '+ dropDownValue + ' is already full</b>'  ; 
		}else{
			message = '<b style=\'color:white\'> You have successfully enrolled for the course '+ dropDownValue + '</b>'  ; 
		}
		
		
	}catch(err){
		console.log(err);
		message = err   ; 
	}
	finally{
		 document.getElementById('courseMessage').innerHTML = message ; 
	}
	
}









////////////// CONDITIONS

function infiniteLoop(){
	
	 var date = new Date();
	 var imageDIsplayed = document.getElementById('imageId');
	 
	 var imageUrl ;
	 var image; 
	 
	 console.log(date.getSeconds());
	 
	 if(date.getSeconds() < 20){
		 image = 'day' ;
	 }else if (date.getSeconds() > 20 && date.getSeconds() < 40){
		image = 'evening' ;
	 }else{
		image = 'night' ; 
	 }
	 
	
	 switch (image) {
	
	 case 'day':
		 imageUrl = '../Images/day.jpg';
		break;
		
	 case 'evening':
		 imageUrl = '../Images/evening.jpg';
			break;

	 case 'night':
		 imageUrl = '../Images/night.jpg'
			break;

	default:
		break;
	}
	 
	 document.getElementById('secondsContainer').innerHTML = '<b>Current Seconds : ' + date.getSeconds()+'</b>';
	 document.getElementById('imageId').innerHTML = '<b style="color:green">' + date.getHours()  + '</b>';
	 imageDIsplayed.setAttribute('src', imageUrl);
	 window.setInterval(infiniteLoop, 5000);
 }



//////////        Events    ///////////////////////////////

function eventFunction(){
	
	alert("Name " + document.getElementById('nameE').value + ", Email : " + 
			document.getElementById('emailE').value)
	
}

function keyPressNameFunction(){
	var name = document.getElementById('nameE').value ;
	console.log(name.length);
	if(name.length < 5 ){
		 document.getElementById('nameErrorMessage').innerHTML = '<b style="color:red">Name length cannot be less than 5 character</b>'
	}else{
		document.getElementById('nameErrorMessage').innerHTML = '';
	}
	
}

function keyPressEmailFunction(){
	var name = document.getElementById('emailE').value ;
	
	if(name.length < 10 ){
		 document.getElementById('emailErrorMessage').innerHTML = '<b style="color:red">Email length cannot be less than 10 character</b>'
	}else{
		document.getElementById('emailErrorMessage').innerHTML = '';
	}
	
}





// Arrays  
function Display(){
	var email = document.getElementById('emailID').value ; 
	var trackingNo = document.getElementById('trackingNo').value ;
	
		
	var details = [
			 {
				Name :  'Andrew', 
				Location : 'San Jose' ,
				EstimatedTIme : '19 Sep 2017',
				trackingNo : '1111'	
			},
			{ 
				Name :  'Boris', 
				Location : 'St Louis' ,
				EstimatedTIme : '21 Sep 2017',
				trackingNo : '2222'	
			},
			{
				Name :  'Michael', 
				Location : 'Dallas' ,
				EstimatedTIme : '23 Sep 2017',
				trackingNo : '3333'	
			}
	] ; 

	
	var flag = false ; 
	
	var ul = document.getElementById("trackingDetails") ;
	while (ul.hasChildNodes()) {
	    ul.removeChild(ul.lastChild);
	}
	
	
	for (var int = 0; int < details.length; int++) {
		if(trackingNo === details[int].trackingNo){
			console.log("Tracking# " + trackingNo + " Found");
			flag = true ;
			
			var li1 = document.createElement("li");
			li1.appendChild(document.createTextNode("Name : " +  details[int].Name));
			
			var li2 = document.createElement("li");
			li2.appendChild(document.createTextNode("Location : " +  details[int].Location));
			
			
			var li3 = document.createElement("li");
			li3.appendChild(document.createTextNode("ETA : " +  details[int].EstimatedTIme));
			
			ul.appendChild(li1);
			ul.appendChild(li2);
			ul.appendChild(li3);
			
			break ;
		}
	}	
	
	if(!flag){
		var notFOundMessage = document.createElement("h4");
		notFOundMessage.setAttribute("style","color:red");
		notFOundMessage.appendChild(document.createTextNode("Invalid Tracking#... Please provide a correct one"));
		
		ul.appendChild(notFOundMessage);
		
	}
}


///////////////////////////////////////

function objectFunction(){
	var person  = {
		Name :  'Andrew', 
		Location : 'San Jose' ,
		EstimatedTIme : '19 Sep 2017',
		trackingNo : '1111',
		randomFunction : function(){
			return 'Hedau' ; 
		}
	}
	
	console.log(person.randomFunction());
	
	
}

/////////////////// Inheritence ////////////////////////

/*function inheritenceFunction(){
	
	var employee = function(name){
		this.name = name ; 
	}
	
	employee.prototype.getName = function(){
		return this.name ; 
	}
	
	var permanentEmployee = function(annualSalary){
		this.annualSalary = annualSalary ; 
	}
	
	
	var employee1 = new employee("Palash") ;
	 
	permanentEmployee.prototype = employee1 ; 
	
	var pe = new permanentEmployee(4000);
	console.log(pe.getName());
	
	
	console.log('employee.name : ' + employee.hasOwnProperty('name'));
	console.log('permanentEmployee.name : ' + pe.hasOwnProperty('name'));
	console.log('employee.annualSalary : ' + employee.hasOwnProperty('annualSalary'));
	console.log('permanentEmployee.annualSalary : ' + pe.hasOwnProperty('annualSalary'));
	
	
}
*/

//Inheritence

function inherits(ctor, superCtor){
	ctor.super = superCtor ; 
	ctor.prototype = Object.create(superCtor.prototype, {
		constructor : {
			value : ctor,
			enumerable : false ,
			writable : false,
			configurable : false
		}
	})
	
} ; 

function inheritencee(){


	var animalArray = ['Lucy','Bruno','Puppy','Lily','Annie'] ;
	var humanArray = ['Patricia','Kate','Max','John','Dwayne'] ;
	
	var PersonName = function(name){
		this.name = name ;
	}

	PersonName.prototype.getName = function(){
		return this.name + ' is a Human' ; 
	}

	var AnimalName = function(name){
		this.name = name ;
	}

	AnimalName.prototype.getName = function(){
		return this.name + ' is an Animal' ; 
	}

	
	var individual = document.getElementById('namesOfIndividual').value ; 
	; 
	
	var flag = false ; 
	
	for (var int = 0; int < animalArray.length; int++) {
		if(individual === animalArray[int]){
			flag = true ; 
			
			var Animal = function(name) {
				Animal.super.call(this, name ) ; 
				 
			}
			inherits(Animal,AnimalName);
			
			var animalSearched = new Animal(individual);
			document.getElementById('getDetailsOfHeritence').innerHTML = animalSearched.getName() ; 
			console.log( animalSearched.getName()); 
			 break ;
		}
	}

	
	if(!flag){
		for (var int = 0; int < humanArray.length; int++) {
			if(individual === humanArray[int]){
				flag = true ; 
				
				var Human = function(name) {
					Human.super.call(this, name ) ; 
					 
				}
				inherits(Human,PersonName);
				
				var humanSearched = new Human(individual);
				document.getElementById('getDetailsOfHeritence').innerHTML = humanSearched.getName() ; 
				console.log( ); 
			}
		}
	}
	
}





///    STRICT MODE   //////////////


///     Variable     //////////////////
function variableFunctionTemprature(){
	
	document.getElementById('variableResult').innerHTML = "" ; 
	var textboxValue = document.getElementById('variableId').value ; 
	
	var tempInDegrees = Math.round((textboxValue-32)/1.8) ; 
	console.log(tempInDegrees);
	
	document.getElementById('variableResult').innerHTML = "Converted Temprature : " + tempInDegrees ; 
	
}


function variableFunctionCurrency(){
	document.getElementById('variableResult').innerHTML = "" ; 
	var textboxValue = document.getElementById('variableId').value ; 
	
	var currencyInRenminbi = Math.round( Number((textboxValue)/0.15)) ; 
	
	
	document.getElementById('variableResult').innerHTML = "Chinese Yuan : " + currencyInRenminbi ; 
	
}

//////  Object    //////////////////////


function objectFunction(){
	document.getElementById("detailsOfaPlayer").innerHTML = ""; 
	
	var Person1 = {
			name : 'Messi' ,
			height : '5\' 10',
			weight : '66 KG',
			Country : 'Argentina' ,
			goals : 530 ,
			play : function(){
				return (this.name + " plays for " + this.Country + " and has scored a total tally of " + this.goals);
			}
	}
	
	var Person2 = {
			name : 'Coutinho' ,
			height : '5\' 9',
			weight : '68',
			Country : 'Brazil' ,
			goals : 65 , 
			play : function(){
				return (this.name + " plays for " + this.Country + " and has scored a total tally of " + this.goals);
			}
	}
	
	var Person3 = {
			name : 'Neymar' ,
			height : '5\' 11',
			weight : '61',
			Country : 'Brazil' ,
			goals : 215 ,
			play : function(){
				return (this.name + " plays for " + this.Country + " and has scored a total tally of " + this.goals);
			}
	}
	
	
	var Person4 = {
			name : 'Xavi' ,
			height : '5\' 6',
			weight : '70',
			Country : 'Spain' ,
			goals : 135 ,
			play : function(){
				return (this.name + " plays for " + this.Country + " and has scored a total tally of " + this.goals);
			}
	}
	
	
	var dropDownValue = document.getElementById("dropDownFootballers");
	var footballer = dropDownValue.options[dropDownValue.selectedIndex].value;
	console.log(footballer) ;
	
	
	var textToDisplay  = "<b style=\"color: red;\">Properties : </b>" + '<br>' ;
	
	
	if(footballer == 'Messi'){
		textToDisplay += 'Name : ' + Person1.name +  '<br>' +
						'Height : ' + Person1.height +  '<br>' +
						'Weight : ' + Person1.weight +  ' kg<br>' +
						'<b style=\"color: red;\">Function : </b>' +
						Person1.play();   
	}else if(footballer == 'Coutinho'){
		textToDisplay += 'Name : ' + Person2.name +  '<br>' +
		'Height : ' + Person2.height +  '<br>' +
		'Weight : ' + Person2.weight +  ' kg<br>' +
		'<b style=\"color: red;\">Function : </b>' +
		Person2.play();
	}else if(footballer == 'Neymar'){
		textToDisplay += 'Name : ' + Person3.name +  '<br>' +
		'Height : ' + Person3.height +  '<br>' +
		'Weight : ' + Person3.weight +  ' kg <br>' +
		'<b style=\"color: red;\">Function : </b>' +
		Person3.play(); 
	}else if(footballer == 'Xavi'){
		textToDisplay += 'Name : ' + Person4.name +  '<br>' +
		'Height : ' + Person4.height +  '<br>' +
		'Weight : ' + Person4.weight +  ' kg<br>' +
		'<b style=\"color: red;\">Function : </b>' +
		Person4.play();
	}
	
	 document.getElementById("detailsOfaPlayer").innerHTML = textToDisplay ; 
}


//////      FUNCTIONS   //////////////////////

function calculateInterest(){
	
	var radioElement = document.getElementsByName('interestType');
	var radioSize = radioElement.length;
    
	var loanAmount = document.getElementById('loan').value;
	
	var dropDownValue = document.getElementById("tenureId");
	var tenure = dropDownValue.options[dropDownValue.selectedIndex].value;
	
	var interestType ; 
	
    for (i=0; i < radioSize; i++) {
            if (radioElement[i].checked==true) {
            	console.log('Radio Element Found');
                console.log(radioElement[i].value); 
            	if(radioElement[i].value == 'SimpleInterest'){
            	  calculateSimpleInterest(loanAmount,tenure);
            	}else if(radioElement[i].value == 'CompoundInterest'){
            	  calculateCompoundInterest(loanAmount,tenure)
            	}
         }
    }
	
}

function calculateSimpleInterest(loanAmount,tenure){
	console.log(Math.round((parseInt(loanAmount) * 0.10) * parseInt(tenure)));
	document.getElementById('interestAmount').innerHTML = '<b>Interest Amount after ' + tenure + ' years is $' + (parseInt(loanAmount) * 0.10) * parseInt(tenure) +'</b>'; 
}

function calculateCompoundInterest(loanAmount,tenure){
	var totalLoanInterest = 0 ; 
	var totalRate = 1 ; 
	
	for (var int = 0; int < tenure; int++) {
		totalRate = totalRate * 1.1
	}
	
	totalLoanInterest = Math.round( loanAmount * (totalRate - 1 )) ; 
	document.getElementById('interestAmount').innerHTML = '<b>Interest Amount after ' + tenure + ' years is $' + totalLoanInterest+'</b>' ; 
}


/////// Events    ///////////////////////////////////////////////
