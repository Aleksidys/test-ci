class Team {
  constructor() {
    this.members = new Set();
  }

  add(Character) {
    if (this.members.has(Character)) {
      throw new Error('Персонаж уже есть в команде.');
    }
    this.members.add(Character);
  }

  addAll(...Character) {
    Character.forEach((item) => {
      this.members.add(item);
    });
  }

  toArray() {
    return [...this.members];
  }
}

export default Team;
