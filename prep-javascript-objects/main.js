const person = {
  firstName: 'Mike',
  lastName: 'Flemming',
  hobby: 'Warhammer 40k'
};

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;

console.log("This person's full name is: " + fullName);

person.job = 'Youtube';

console.log("This person's current job is: " + person.job);

person.previousJob = 'Building Inspector';

console.log("This person's previous job is: " + person.previousJob);

console.log(person);
