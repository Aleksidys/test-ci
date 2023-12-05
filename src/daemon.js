import Character from './craracter';

class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
    this.distance = 0;
    this.stoned = false;
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
}


export default Daemon;
