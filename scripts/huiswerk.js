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