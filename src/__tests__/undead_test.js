import Undead from '../undean';

test('Правильно создаётся объект', () => {
  const undead = new Undead('Undead');
  const correct = {
    attack: 25, defence: 25, health: 100, level: 1, name: 'Undead', type: 'Undead',
  };
  expect(undead).toEqual(correct);
});
