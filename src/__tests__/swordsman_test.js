import Swordsman from '../swordsman';

test('Правильно создаётся объект', () => {
  const swordsman = new Swordsman('Swordsman');
  const correct = {
    attack: 40, defence: 10, health: 100, level: 1, name: 'Swordsman', type: 'Swordsman',
  };
  expect(swordsman).toEqual(correct);
});
