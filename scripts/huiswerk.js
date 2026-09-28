/* opdracht 1a */

const employees = departments.sales.numberOfEmployees;
/*console.log(employees); */
console.log("De afdeling Sales heeft " + employees + " medewerkers");

/* opdracht 1b */

const marketingdescription = departments.marketing.description;
/*console.log(marketingdescription); */
console.log("Marketing is een leuke afdeling om te werken. " + marketingdescription + ".");

/* opdracht 1c */

const employeescs = departments["customer-service"].numberOfEmployees;
/*console.log(employeescs);*/
console.log("De afdeling Customer Service heeft " + employeescs + " medewerkers");

/* opdracht 1d */

const salesmanagerdescription = departments.sales.jobs[1].description;
/*console.log(salesmanagerdescription);*/
console.log("Sales is een uitdagende afdeling om te werken als Verkoopmanager. " + salesmanagerdescription)

/* opdracht 2 */

const userInput = prompt('Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]');
console.log(userInput);

if (userInput=="marketing") {
    const descriptiondept = departments.marketing.description;
    console.log("Je koos " + userInput + "." + descriptiondept);
}
else if (userInput=="sales") {
    const descriptiondept = departments.sales.description;
    console.log("Je koos " + userInput + "." + descriptiondept);
}
else if (userInput=="customer-service") {
    const descriptiondept = departments["customer-service"].description;
    console.log("Je koos " + userInput + ". " + descriptiondept);
}

else {
    console.log("Je koos verkeerd.");
}

/* const dept = userInput; */




/* opdracht 3 en 4 */

const xjob0 = departments[userInput].jobs[0].title;

const xjob1 = departments[userInput].jobs[1].title;

const xjob2 = departments[userInput].jobs[2].title;

const xjob3 = departments[userInput].jobs[3].title;


const userInput2 = prompt('Je koos' + userInput + '. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in.,\n' +
    '    0: '+ xjob0 + ', \n' +
    '    1: '+ xjob1 + ',\n' +
    '    2: '+ xjob2 + ',\n' +
    '    3: '+ xjob3);
console.log(userInput);

if (userInput2=="0") {
    console.log("Je koos " +xjob0+". Een uitdagende rol! " + departments[userInput].jobs[0].description);
}

else if (userInput2=="1") {
    console.log("Je koos " +xjob1+". Een uitdagende rol! " + departments[userInput].jobs[1].description);
}


else if (userInput2=="2") {
    console.log("Je koos " +xjob2+". Een uitdagende rol! " + departments[userInput].jobs[2].description);
}

else if (userInput2=="3") {
    console.log("Je koos " +xjob3+". Een uitdagende rol! " + departments[userInput].jobs[3].description);
}

else {
    console.log("Je koos verkeerd.");
}

/* opdracht 3b */



/* opdracht 3c */


/* opdracht 4a */



/* opdracht 4b */



/* opdracht 4c */



/* opdracht 5a */



/* opdracht 5b */



/* opdracht 5c */