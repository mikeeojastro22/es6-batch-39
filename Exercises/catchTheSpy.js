const spy = {
    name: 'James Bond',
    codeName: '007',
    age: 32,
    address: {
      city: 'London'
    }
}

const { name, codeName, age, address } = spy;
const { city } = address;
console.log(name, codeName, age, city);