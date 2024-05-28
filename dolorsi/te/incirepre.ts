interface Person {
  name: string;
}

function createPerson(name: string): Person {
  return { name };
}
