const { withGreeting, printUserInfo } = require('../challenge2.js');

describe('withGreeting decorator', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('should log a welcome message and user info', () => {
    const userJSON = JSON.stringify({
      name: 'Alice',
      age: 25,
    });

    const decoratedPrintUserInfo = withGreeting(printUserInfo);

    decoratedPrintUserInfo(userJSON);

    expect(consoleSpy).toHaveBeenCalledWith('Welcome, Alice!');

    expect(consoleSpy).toHaveBeenCalledWith('Name: Alice, Age: 25');
  });
});
