/*
	 Assignment 1 - jQuery
	{Manpreet Kaur}
*/

$(document).ready(function()
{
$("input").change(function()   //Changing the required fields(salary/percent)
{
 let salary= $("#yearly-salary").val();
 let percent= $("#percent").val();


 let result=((salary*percent)/100).toFixed(2); // To round of the numbers to remove the (Extra decimals)
 $("#amount").text("$" +result);

});
});

