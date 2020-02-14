import faker from 'faker';

const users = Array.from(Array(10)).map(() => ({
  email: faker.internet.email(),
  jobTitle: faker.name.jobTitle(),
  avatar: faker.image.avatar(),
  content: faker.lorem.sentences(),
  countryCode: faker.address.countryCode(),
}));
console.log(users);

const timeout = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

export const findUser = async (email) => {
  await timeout(1000);
  return users.filter(u => u.email === email);
};

