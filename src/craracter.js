class Character {
  constructor(name, type) {
    if (typeof name !== 'string') {
      throw new Error('Имя должно быть строкой.');
    }
    if (name.length < 2 || name.length > 10) {
      throw new Error('Длина имени должна быть от 2 до 10 символов.');
    }
    const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!validTypes.includes(type)) {
      throw new Error('Недопустимый тип персонажа.');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    let attack = this._attack - Math.log2(this.distance) * 5;
    if (this.stoned) {
      attack -= Math.floor(Math.log2(this.distance) * 5);
    }
    if (attack < 0) {
      return 0;
    }
    return Math.round(attack);
  }

  set attack(value) {
    this._attack = value;
  }

  lvlUp() {
    if (this.health <= 0) {
      throw new Error('Персонаж уже мертв.');
    } else {
      this.level += 1;
      this.defence *= 1.2;
      this.attack *= 1.2;
      this.health = 100;
    }
  }

  damage(points) {
    if (this.health > 0) {
      const damageTaken = points * (1 - this.defence / 100);
      this.health -= damageTaken;
      if (this.health < 0) {
        this.health = 0;
      }
    }
  }
}

export default Character;
