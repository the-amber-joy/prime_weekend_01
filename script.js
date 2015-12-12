var array = [];


$(document).ready(function(){
	$("#employeeinfo").on('submit',function(event){
		event.preventDefault();

		var values = {};

		$.each($("#employeeinfo").serializeArray(), function(i, field){
			values[field.name] = field.value;
		});
		
		$("#employeeinfo").find("input[type=number]").val("");
		$("#employeeinfo").find("input[type=text]").val("");
		console.log(values);
		appendDom(values);

		var allSalaries = 0;
		var getMonthlySalaries = function(param){
			for (i = 0; i < array.length; i++) {
				allSalaries += (array[i].employeeSalary)/12;
			}
			return allSalaries;
		};

		array.push(values);
		console.log(array);
		console.log(getMonthlySalaries());

	});

	$("#deleteEmployee").on('submit',function(event){
		array.remove(this);
	});

});


function appendDom(object){
	$("#container").append("<div class='results'></div>");
	var $el = $("#container").children().last();

	$el.append("<h2>Employee #" + object.employeeNumber + "</h2>")
	$el.append("<p>First Name: " + object.employeeFirstname + "</p>");
	$el.append("<p>Last Name: " + object.employeeLastname + "</p>");
	$el.append("<p>Employee ID: " + object.employeeNumber + "</p>");
	$el.append("<p>Job Title: " + object.employeeTitle + "</p>");
	$el.append("<p>Annual Salary: $" + object.employeeSalary + ".00</p>");
	$el.append("<form id='deleteEmployee'><input type='submit' value='Delete This Employee'/></form>");
}