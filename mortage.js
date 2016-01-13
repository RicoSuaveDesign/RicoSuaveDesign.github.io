// time to do some math my compatriots


// make into arrays, then use for loop to populate them. Another for loop to display months.

// Select months if the full table is too much

var whenMonth = "";
var whenMonthEnd= "";
var beginMonth = 1;
var endMonth = 360;
//whenMonth += "<div class='form-group'>"						
//whenMonth +="<label for='Monthselectbegin'>Which month would you like to begin on? </label> "
	
//whenMonth += "<select class='form-control' id='monthBeginSelect'> "
for(i=1; i<=360; i++){
whenMonth += "<option value=" + i + ">Month " + i + "</option>";
} 
document.querySelector("#monthBeginSelect").innerHTML = whenMonth;
	
for(i=1; i<=360; i++){
whenMonthEnd += "<option value=" + i + ">Month " + i + "</option>";
} 
document.querySelector("#monthEndSelect").innerHTML = whenMonthEnd;	

//whenMonth += "</select> <br/>"


//whenMonth += "<div class='form-group'>"						
//whenMonth +="<label for='Monthselectend'>Which month would you like to end on? </label> "
	
//whenMonth += "<select class='form-control' id='monthEndSelect'> "
//for(i=1; i<=months; i++){
//whenMonth += "<option value=" + i + ">Week" + i + "</option>";
//} 



$('#calculateButton').on('click', function () {
var beginMonthSelect = document.querySelector("#monthBeginSelect");
var monthBeginIndex = beginMonthSelect.selectedIndex;
var beginMonth = beginMonthSelect.options[monthBeginIndex].value;

var endMonthSelect = document.querySelector("#monthEndSelect");
var monthEndIndex = endMonthSelect.selectedIndex;
var endMonth = endMonthSelect.options[monthEndIndex].value;

var principal = document.querySelector("#Principal").value;
var annualInterest = document.querySelector("#AnnualInterestRate").value;
var yearsamount = document.querySelector("#yearselect");
var yearindex = yearsamount.selectedIndex;
var years = yearsamount.options[yearindex].value;

// If statement to make input work regardless of whether in percent or in decimal form 
if(annualInterest > 1){
	annualInterest = annualInterest/100;
	} 
var monthlyInterest = annualInterest/12;
var months = years*12;

var fuckyou = (1+monthlyInterest);
var fuckthis = Math.pow(fuckyou, -months);
var heck = 1-fuckthis;
var monthlyPayment = (monthlyInterest/heck)*principal; // literally all variables so that I dont heck up the syntax
monthlyPayment = monthlyPayment.toFixed(2);

var monthlyInterestPayment = new Array(360); // Declare all these gosh darned arrays
var totalInterestPaid = new Array(360);
var remainingPrincipal = new Array(360);
var monthlyPrincipalPayment = new Array(360);




// Fill up all these gosh darned arrays
for(var i=0; i<360; i++){
monthlyInterestPayment[i] = 0;
totalInterestPaid[i] = 0;	
remainingPrincipal[i] = principal;
monthlyPrincipalPayment[i] = 0;
}

//console.log(monthlyPayment);
//console.log(monthlyPayment*months + " Is total money");
//Fill up all these arrays with their actual values rather than placeholding start values
	for(var i = 1; i<=months; i++){
	//console.log("Month " + i);
	//console.log(monthlyPayment);
	monthlyInterestPayment[i] = monthlyInterest*remainingPrincipal[i-1];
	monthlyInterestPayment[i] = monthlyInterestPayment[i].toFixed(2);
	monthlyPrincipalPayment[i] = monthlyPayment-monthlyInterestPayment[i];
	monthlyPrincipalPayment[i] = monthlyPrincipalPayment[i].toFixed(2);
	//console.log(monthlyPrincipalPayment)
	totalInterestPaid[i] = totalInterestPaid[i-1] /+ monthlyInterestPayment[i];
	totalInterestPaid[i] = totalInterestPaid[i].toFixed(2);
	//console.log(totalInterestPaid + " Is total interest paid");
	remainingPrincipal[i] = remainingPrincipal[i-1] - (monthlyPayment-monthlyInterestPayment[i]);
	remainingPrincipal[i] = remainingPrincipal[i].toFixed(2);
	//console.log(remainingPrincipal + " Is remaining principal")
}

var totalAmount = monthlyPayment*months;
totalAmount = totalAmount.toFixed(2);
var totalInterestnotArray = (monthlyPayment*months) - principal;
totalInterestnotArray = totalInterestnotArray.toFixed(2);
var output = "<hr>";
output += "<table class = 'table'><tr><th>Loan Amount</th><th>Interest Rate(Annual)</th><th>Interest Rate(Monthly)</th><th>Monthly Payment</th><th>Total Amount Paid</th><th>Total Interest Paid</th><th>Interest:Principal Ratio</th></tr>";
output += "<tr><td>" + principal + "</td><td>" + annualInterest + "</td><td>" + monthlyInterest + "</td><td>" + monthlyPayment + "</td><td>" + totalAmount + "</td><td>" + totalInterestnotArray + "</td><td>" + (monthlyPayment*months)/principal + "</td></tr></table>"
var year = 1;
// Begin the fixed point of the table
output += "<table class='table'>";
output += "<tr><th>Month number</th><th>Monthly payment</th><th>Amount paid(Principal)</th><th>Amount paid(Interest)</th><th>Remaining Principal</th></tr>";
output += "<tr><td colspan='5'>Year " + year + "</td></tr>";
//console.log(monthlyInterestPayment[12]);
// Fill up the table with aforementioned gosh darned array values
for(j = beginMonth; j <= endMonth; j++){
output += "<tr><td>" + j + "</td><td>" + monthlyPayment + "</td><td>" + monthlyPrincipalPayment[j] + "</td><td>" + monthlyInterestPayment[j] + "</td><td>" + remainingPrincipal[j] + "</td></tr>";

	if(j%12 === 0){
		year++;
		output += "<tr><td colspan='5'>Year " + year + "</td></tr>";
	}
}
// Thingie that actually outputs these results so user actually sees them 
document.querySelector("#results").innerHTML = output;	
	
})




