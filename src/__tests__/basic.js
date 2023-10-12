import getHealth from '../person';
import sortHeroes from '../sortHero';

test('check health status', () => {
  const person = { name: 'Маг', health: 90 };
  expect(getHealth(person)).toBe('healthy');
});

test('check health status when wounded', () => {
  const person = { name: 'Воин', health: 30 };
  expect(getHealth(person)).toBe('wounded');
});

test('check health status when critical', () => {
  const person = { name: 'Рыцарь', health: 10 };
  expect(getHealth(person)).toBe('critical');
});

test('sortHeroes should sort heroes by health in descending order', () => {
  const testHeroes = [
    { name: 'мечник', health: 20 },
    { name: 'маг', health: 50 },
    { name: 'лучник', health: 30 },
  ];

  const expectedSortedHeroes = [
    { name: 'маг', health: 50 },
    { name: 'лучник', health: 30 },
    { name: 'мечник', health: 20 },
  ];

  const sortedHeroes = sortHeroes(testHeroes);

  expect(sortedHeroes).toEqual(expectedSortedHeroes);
});
