var employeeArray = [];
var employeeUniqueId = 0;

$(document).ready(function(){
	$("#employeeinfo").on('submit',function(event){
		event.preventDefault();

		var values = {};
		employeeUniqueId++;

		var serializedArray = $("#employeeinfo").serializeArray();

		$.each(serializedArray, function(i, field){
			values[field.name] = field.value;
		})
		
		$("#employeeinfo").find("input[type=text]").val("");

		values.employeeUniqueId = employeeUniqueId;

		appendDom(values);

		employeeArray.push(values);
		
		totalSalary();
	});

	enable();
});

function init(){
	
}

function enable(){
	$("#container").on('click', '.delete-btn', clickDelete);
}

function clickDelete(){
	var $el = $(this).parent();

	for(var i = 0; i < employeeArray.length; i++){
		if(employeeArray[i].employeeUniqueId == $el.data("kittyfoo")){
			employeeArray.splice(i, 1);
		}
	}

	$el.remove();
	totalSalary();
}

function appendDom(object){
	$("#container").append("<div class='employee'></div>");
	var $el = $("#container").children().last();
	$el.data("kittyfoo", employeeUniqueId);


	$el.append("<p>" + object.employeefirstname + "</p>");
	$el.append("<p>" + object.employeelastname + "</p>");
	$el.append("<p>" + object.employeenumber + "</p>");
	$el.append("<p>" + object.employeetitle + "</p>");
	$el.append("<p>" + object.employeesalary + "</p>");
	$el.append("<button class='delete-btn'>Delete</button>");
}

function totalSalary(){
	// [{}, {}, {}]

	var totalCalcSalary = 0;

	for(var i = 0; i < employeeArray.length; i++){
		var object = employeeArray[i];
		totalCalcSalary += parseInt(object.employeesalary);
	}

	totalCalcSalary /= 12;

	$("#totalContainer").text("Total Monthly Salary: " + totalCalcSalary);
}