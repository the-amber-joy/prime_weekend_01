var array = [];


$(function(){
	$('#employeeinfo').on('submit',function(event){
		event.preventDefault();

		var values = {};

		$.each($('#employeeinfo').serializeArray(), function(i, field){
			values[field.name] = field.value;
		});
		
		$('#employeeinfo').find('input[type=number]').val('');
		$('#employeeinfo').find('input[type=text]').val('');
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

$('.results').on('click', '.deleteBtn', function(){
			$(this).parents('.results').remove();
		});

	});
});


function appendDom(object){
	$('#resultsContainer').append('<div class="results"></div>');
	var $el = $('#resultsContainer').children().last();

	$el.append('<h2>Employee #' + object.employeeNumber + '</h2>');
	$el.append('<p>First Name: ' + object.employeeFirstname + '</p>');
	$el.append('<p>Last Name: ' + object.employeeLastname + '</p>');
	$el.append('<p>Employee ID: ' + object.employeeNumber + '</p>');
	$el.append('<p>Job Title: ' + object.employeeTitle + '</p>');
	$el.append('<p>Salary: $' + object.employeeSalary + '</p>');
	$el.append('<button class="deleteBtn">Remove This Entry</button>');

}







