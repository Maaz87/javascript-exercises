const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Maaz', () => {
    expect(values.firstName).toEqual('Maaz');
  });
  test('lastName is Khan', () => {
    expect(values.lastName).toEqual('Khan');
  });
  test('thisYear is 2026', () => {
    expect(values.thisYear).toEqual(2026);
  });
  test('birthYear is 2004', () => {
    expect(values.birthYear).toEqual(2004);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Maaz Khan and I am 22 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Maaz Khan', () => {
    expect(values.fullName).toEqual('Maaz Khan');
  });
  test('age is 18', () => {
    expect(values.age).toEqual(22);
  });
});
