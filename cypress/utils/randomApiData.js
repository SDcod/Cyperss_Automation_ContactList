import { faker } from "@faker-js/faker";

export const randomEmail = () => {
  return faker.internet.email(); // Kassandra.Haley@erich.biz
};

export const randomFullName = () => {
  return faker.person.fullName(); // Rowan Nikolaus
};

export const randomFirstName = () => {
  return faker.person.firstName(); // Rowan
};
