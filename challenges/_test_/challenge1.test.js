// main.test.js
const setEventReminder = require('../challenge1.js');

describe('setEventReminder', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('logs a passed-date message if the event date is in the past', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    const eventJSON = JSON.stringify({
      name: 'Past Event',
      date: '2000-01-01',
      reminderTime: 5000,
    });

    setEventReminder(eventJSON);

    expect(consoleSpy).toHaveBeenCalledWith(
      'The event date has already passed.'
    );
  });

  test('schedules a reminder if the event date is in the future', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    const futureDate = new Date(Date.now() + 10000);
    const dateString = futureDate.toISOString().split('T')[0];

    const eventJSON = JSON.stringify({
      name: 'Future Event',
      date: dateString,
      reminderTime: 5000,
    });

    setEventReminder(eventJSON);

    expect(consoleSpy).not.toHaveBeenCalled();

    jest.advanceTimersByTime(15000);

    expect(consoleSpy).toHaveBeenCalledWith(
      `Reminder: Future Event is on ${dateString}`
    );
  });
});
