const { faker } = require('@faker-js/faker');

function generateFakeName() {
  return faker.name.firstName() + ' ' + faker.name.lastName();
}

module.exports = generateFakeName;
