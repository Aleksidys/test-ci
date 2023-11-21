import Daemon from '../daemon';

test('Правильно создаётся объект', () => {
  const daemon = new Daemon('Daemon');
  const correct = {
    attack: 10, defence: 40, health: 100, level: 1, name: 'Daemon', type: 'Daemon',
  };
  expect(daemon).toEqual(correct);
});
