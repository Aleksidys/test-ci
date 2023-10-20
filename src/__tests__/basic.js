import getHealth from '../person';
import sortHeroes from '../sortHero';
import sortOptions from '../Forin';
import extractSpecialAttacks from '../Destructuring';

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

describe('sortOptions', () => {
  it('сортирует по заданным опциям', () => {
    const obj = {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    };

    const result = sortOptions(obj, 'level', 'attack');
    expect(result).toEqual([
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'name', value: 'мечник' },
    ]);
  });

  it('сортирует по одной опции', () => {
    const obj = {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    };

    const result = sortOptions(obj, 'name');
    expect(result).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
    ]);
  });

  it('сортирует без опций', () => {
    const obj = {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    };

    const result = sortOptions(obj);
    expect(result).toEqual([
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
    ]);
  });
});

describe('extractSpecialAttacks', () => {
  it('должен вернуть пустой массив, если нет специальных атак', () => {
    const characterWithoutSpecial = {
      name: 'Лучник', type: 'Bowman', health: 50, level: 3, attack: 40, defence: 10,
    };
    const result = extractSpecialAttacks(characterWithoutSpecial);
    expect(result).toEqual([]);
  });

  it('должен вернуть массив специальных атак с описанием "Описание недоступно", если описание отсутствует', () => {
    const characterWithSpecial = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        { id: 8, name: 'Двойной выстрел', icon: 'http://...' },
        { id: 9, name: 'Нокаутирующий удар', icon: 'http://...' },
      ],
    };
    const expected = [
      {
        id: 8, name: 'Двойной выстрел', description: 'Описание недоступно', icon: 'http://...',
      },
      {
        id: 9, name: 'Нокаутирующий удар', description: 'Описание недоступно', icon: 'http://...',
      },
    ];
    const result = extractSpecialAttacks(characterWithSpecial);
    expect(result).toEqual(expected);
  });

  it('должен вернуть массив специальных атак с правильными данными', () => {
    const characterWithSpecial = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон',
        },
        {
          id: 9, name: 'Нокаутирующий удар', icon: 'http://...', description: 'Засекречено',
        },
      ],
    };
    const expected = [
      {
        id: 8, name: 'Двойной выстрел', description: 'Двойной выстрел наносит двойной урон', icon: 'http://...',
      },
      {
        id: 9, name: 'Нокаутирующий удар', description: 'Засекречено', icon: 'http://...',
      },
    ];
    const result = extractSpecialAttacks(characterWithSpecial);
    expect(result).toEqual(expected);
  });
});
