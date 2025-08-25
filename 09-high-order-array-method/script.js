const companies = [
  { name: "company one", category: "retail", start: 1993, end: 2003 },
  { name: "company two", category: "auto", start: 1986, end: 1993 },
  { name: "company three", category: "finance", start: 1989, end: 2006 },
  { name: "company four", category: "pertrol", start: 1983, end: 2009 },
  { name: "company five", category: "retail", start: 1990, end: 2000 },
  { name: "company six", category: "auto", start: 1992, end: 2008 },
  { name: "company seven", category: "finance", start: 2006, end: 2016 },
  { name: "company eight", category: "retail", start: 2007, end: 2013 },
];

const ages = [12, 34, 54, 35, 4, 64, 6, 2, 45, 32, 13, 28];

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// forEach
// companies.forEach(function(company){
//     console.log(company)
// })

// companies.forEach((company) => console.log(company));

// filter
// companies.filter((company) => console.log(company.name));

// let canDrink = ages.filter(function (age) {
//   if (age <= 20) {
//     return age;
//   }
// });
// console.log(canDrink);

// let company = companies.filter(function (company) {
//   if (company.category === "retail") {
//     return company;
//   }
// });
// console.log(company);

// Map

// let company = companies.map((companyName) => companyName.name);
// console.log(company)

// let ageMap = ages.map((age) => Math.sqrt(age));
// console.log(ageMap);

// sort

// let companySorted = companies.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// let ageMap = ages.map((age) => age * 2);
// console.log(ageMap);

// let companySorted = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(companySorted);

// reduce

// let sumAge = 0;
// for (let i = 0; i < ages.length; i++) {
//   sumAge += ages[i];
// }

// let sumAge = ages.reduce((total, current) => (total += current));
// console.log(sumAge);

// combined methods

let combined = ages
  .map((age) => age * 2)
  .filter((age) => age <= 40)
  .sort((a, b) => a - b)
  .reduce((total, current) => (total += current), 0);
console.log(combined);
