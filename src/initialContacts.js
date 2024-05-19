import { faker } from "@faker-js/faker";

// faker.seed(1)

const initiateContacts = (numContacts) => {
  const phoneRegex = "[0-9]{3}-[0-9]{3}-[0-9]{4}";
  let initialContacts = [];
  for (let i = 0; i < numContacts; i++) {
    initialContacts.push({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      number: faker.helpers.fromRegExp(phoneRegex),
    });
  }
  return initialContacts;
};

export default initiateContacts;
