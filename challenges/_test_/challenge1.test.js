const setEventReminder = require('../challenge1.js');

describe('setEventReminder', () => {
  let consoleSpy;

  beforeAll(() => {
    jest.useFakeTimers();
  });

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('logs a passed-date message if the event date is in the past', () => {
    const pastEventJSON = JSON.stringify({
      name: 'Past Event',
      date: '2000-01-01',
      reminderTime: 5000,
    });

    setEventReminder(pastEventJSON);

    expect(consoleSpy).toHaveBeenCalledWith(
      'The event date has already passed.'
    );
  });

  test('schedules a reminder if the event date is in the future', () => {
    const futureDate = new Date(Date.now() + 10_000).toISOString();

    const futureEventJSON = JSON.stringify({
      name: 'Future Event',
      date: futureDate,
      reminderTime: 5000,
    });

    setEventReminder(futureEventJSON);

    expect(consoleSpy).not.toHaveBeenCalled();

    jest.advanceTimersByTime(15_000);

    expect(consoleSpy).toHaveBeenCalledWith(
      `Reminder: Future Event is on ${futureDate}`
    );
  });
});
