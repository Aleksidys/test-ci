import Character from '../craracter';

describe('Character', () => {
  describe('constructor', () => {
    it('should create a character with correct name and type', () => {
      const character = new Character('Alice', 'Bowman');
      expect(character.name).toBe('Alice');
      expect(character.type).toBe('Bowman');
    });

    it('should throw an error if name is not a string', () => {
      expect(() => new Character(123, 'Swordsman')).toThrow('Имя должно быть строкой.');
    });

    it('should throw an error if name length is less than 2 or more than 10', () => {
      expect(() => new Character('A', 'Magician')).toThrow('Длина имени должна быть от 2 до 10 символов.');
    });

    it('should throw an error if type is not valid', () => {
      expect(() => new Character('Bob', 'Warrior')).toThrow('Недопустимый тип персонажа.');
    });
  });

  describe('lvlUp', () => {
    it('should increase level and stats if health is greater than 0', () => {
      const character = new Character('Alice', 'Bowman');
      character.attack = 20;
      character.defence = 10;
      character.health = 50;
      character.lvlUp();
      expect(character.level).toBe(2);
      expect(character.attack).toBe(24);
      expect(character.defence).toBe(12);
      expect(character.health).toBe(100);
    });

    it('should throw an error if health is 0', () => {
      const character = new Character('Bob', 'Swordsman');
      character.health = 0;
      expect(() => character.lvlUp()).toThrow('Персонаж уже мертв.');
    });
  });

  describe('damage', () => {
    it('should reduce health based on damage taken', () => {
      const character = new Character('Alice', 'Bowman');
      character.defence = 20;
      character.damage(30);
      expect(character.health).toBe(76);
    });

    it('should set health to 0 if damage taken is greater than current health', () => {
      const character = new Character('Bob', 'Swordsman');
      character.damage(150);
      expect(character.health).toBe(0);
    });

    it('should not reduce health if health is already 0', () => {
      const character = new Character('Charlie', 'Magician');
      character.health = 0;
      character.damage(50);
      expect(character.health).toBe(0);
    });
  });
});
