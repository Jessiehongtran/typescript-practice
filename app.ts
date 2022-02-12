console.log('Your code goes here...');

enum Role { ADMIN = 'ADMIN', READ_ONLY = 'HAH', AUTHOR = 'COOL' };

const person: {
    name: string,
    age: number,
    hobbies: string [],
    role: any,
    totalRoles: string
} = {
    name: 'Hong Tran',
    age: 30,
    hobbies: ['Na', 'Ni'],
    role: [2, 'author'],
    totalRoles: Role.ADMIN,
}

person.role.push('admin');
person.role[1] = 10;

console.log(person.role)

let favoriteActivities: any;

favoriteActivities = ['sports', 1, 5, 6];


function combine(input1:number | string, input2: number | string){
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result
}

const combinedAges = combine(30,26);

console.log(combinedAges);

const combinedNames = combine('Max', 'Anna');

console.log(combinedNames);
