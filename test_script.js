var employeeArray = [];
var employeeUniqueId = 0;


$(function(){
	$('#employeeinfo').on('submit',function(event){
		event.preventDefault();

		var values = {};

		var serializedArray = $("#employeeinfo").serializeArray();

		$.each(serializedArray, function(i, field){
			values[field.name] = field.value;
		});
		
		$('#employeeinfo').find('input[type=number]').val('');
		$('#employeeinfo').find('input[type=text]').val('');
		
		values.employeeUniqueId = employeeUniqueId;
		
		appendDom(values);

		employeeArray.push(values);

		console.log("Total Monthly Salaries: " + totalSalaries());

	enable();
});

function init(){

}		

function enable(){
	// This was Scott's code, replacing with my old version $("#container").on('click', '.delete-btn', clickDelete);
	$('.results').on('click', '.deleteBtn', clickDelete);
}

function clickDelete(){
	$el = $(this).parents('.results')

	for(var i = 0; i < employeeArray.length; i++){
		if(employeeArray[i].employeeUniqueId == $el.data("kittyfoo")){
			employeeArray.splice(i, 1);
		}
	}
	
	$el.remove();
	totalSalaries();
}



	});



function appendDom(object){
	// $('#totalContainer').append('<div class="results"></div>');
	// 	$el.append('<p>Monthly Salaries: ' + monthlySalaries + '</p>');


	$('#resultsContainer').append('<div class="results"></div>');
	var $el = $('#resultsContainer').children().last();
	// $el.data("kittyfoo", employeeUniqueId);

	$el.append('<h2>Employee #' + object.employeeNumber + '</h2>');
	$el.append('<p>First Name: ' + object.employeeFirstname + '</p>');
	$el.append('<p>Last Name: ' + object.employeeLastname + '</p>');
	$el.append('<p>Employee ID: ' + object.employeeNumber + '</p>');
	$el.append('<p>Job Title: ' + object.employeeTitle + '</p>');
	$el.append('<p>Salary: $' + object.employeeSalary + '</p>');
	$el.append('<button class="deleteBtn">Remove This Entry</button>');

}


function totalSalaries(){

	var allSalaries = 0;

	for(i = 0; i < employeeArray.length; i++){
		var object = employeeArray[i];
		allSalaries += parseInt(object.employeesalary);
	}

	allSalaries /= 12;

	$("#totalContainer").text("Total Monthly Salary: " + allSalaries);
}
