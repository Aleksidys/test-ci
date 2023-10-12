import { getHealth } from '../person.js';

test('check health status', () => {
    let person = { name: 'Маг', health: 90 };
    expect(getHealth(person)).toBe('healthy');
  });
  
  test('check health status when wounded', () => {
    let person = { name: 'Воин', health: 30 };
    expect(getHealth(person)).toBe('wounded');
  });
  
  test('check health status when critical', () => {
    let person = { name: 'Рыцарь', health: 10 };
    expect(getHealth(person)).toBe('critical');
  });
  
  test('check health status when unknown', () => {
    let person = { name: 'Другой персонаж', health: -10 };
    expect(getHealth(person)).toBe('unknown');
  });
  