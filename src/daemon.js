import Character from './craracter';

class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}

export default Daemon;
