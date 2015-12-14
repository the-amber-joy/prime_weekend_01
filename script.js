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


// This is where I'm trying to make Pro Mode work. My thinking is that I will loop through 'array' when the button is clicked, and compare the employeeNumber in each Object of that array to the employeeNumber in this div. If they match, I want that entire Object removed from the array, which should also update the salary total since that employee's salary will now be missing.
			for (i = 0; i < array.length; i++) {
				if ($(this).parents('.results').find('object.employeeNumber') == array[i].employeeNumber) {
					remove(array[i])
				};
				console.log(array);
				///// Nope, that didn't do it... I need to go to bed. Maybe attack it again in the morning.
			}; 


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
