import Character from '../craracter';
import Bowman from '../bownam';
import Daemon from '../daemon';
import Magician from '../magician';
import Zombie from '../zombie';
import Undead from '../undean';
import Swordsman from '../swordsman';

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

describe('Bowman', () => {
  it('should create a Bowman with correct attack and defence stats', () => {
    const bowman = new Bowman('Alice');
    expect(bowman.name).toBe('Alice');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });
});

describe('Swordsman', () => {
  it('should create a Swordsman with correct attack and defence stats', () => {
    const swordsman = new Swordsman('Bob');
    expect(swordsman.name).toBe('Bob');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
  });
});

describe('Magician', () => {
  it('should create a Magician with correct attack and defence stats', () => {
    const magician = new Magician('Charlie');
    expect(magician.name).toBe('Charlie');
    expect(magician.type).toBe('Magician');
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  });
});

describe('Daemon', () => {
  it('should create a Daemon with correct attack and defence stats', () => {
    const daemon = new Daemon('Dave');
    expect(daemon.name).toBe('Dave');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });
});

describe('Undead', () => {
  it('should create an Undead with correct attack and defence stats', () => {
    const undead = new Undead('Eve');
    expect(undead.name).toBe('Eve');
    expect(undead.type).toBe('Undead');
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });
});

describe('Zombie', () => {
  it('should create a Zombie with correct attack and defence stats', () => {
    const zombie = new Zombie('Frank');
    expect(zombie.name).toBe('Frank');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });
});
