# prime_weekend_01

This project successfully meets the basic requirements of logging each employee's information, and adding those results to the web page, while also having the console return the budget requirement for all monthly salaries as the total entries are updated. Additionally, "Hard Mode" requirements have been met by adding a delete button to each section appended to the DOM, which will remove only that section from the DOM. 

Project currently stalled at "Pro Mode" which I have not begun coding for yet.

Hey Thetas!

For your weekend challenge, you will need to create an application that adds employee salaries so that a company knows how much they are spending each month in salary.

The application should first have an input form that collects:
The Employee's First and Last name
The Employee's ID Number
The Employee's Job Title
The Employee's Salary (Yearly)
The form should have a submit button that clears out the form and your logic should store that information. Then, that information should be appended to the DOM so that the user of the application can see the information they just entered.

Finally, your logic should calculate all of the employee salaries and report back what the monthly cost of salaries is.

////////////DONE THIS FAR////////////

Hard Mode
Create a delete button that removes an employee from the form. Note that in hard mode, it need not remove that Employee's salary from the reported total. (Note, you will need to look up the '.remove()' jQuery function).

Pro Mode
Once the employee is deleted, also update the total spend on salaries to discount the removed employee's salary. This will require that the logic knows which element was removed. You will need to stretch yourself for this one. I also recommend that you look into jQuery's .data() function to help complete this. Note, you will need to do something both when the employee is added and when they are deleted to make your application 'smart'.

Good Luck, have a great weekend!