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

	});

/////// I have tried many approaches but cannot get this function to work yet... It's got to be right, I swear it should work! Why doesn't it work?! Before, it would make all my results disappear. Now nothing happens. ///////


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
	$el.append('<button class="remove">Remove This Entry</button>');

}

$(function(){	
	$('.results').on('click', '.deleteBtn', function(){
		$(this).parent('.results').remove();
	});
});








