const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

export default function extractSpecialAttacks({ special }) {
  if (!special || !Array.isArray(special)) {
    return [];
  }

  const extractedAttacks = special.map((attack) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = attack;
    return {
      id, name, description, icon,
    };
  });

  return extractedAttacks;
}

const specialAttacks = extractSpecialAttacks(character);
console.log(specialAttacks);
