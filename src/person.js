 let person = {name: 'Маг', health: 90}
 export function getHealth(person){
    let health = person.health;
    switch (true) {
        case health >= 50:
          return 'healthy';
          break;
        case health >= 25:
            return 'wounded';
          break;
          case health <= 25:
            return 'critical';
          break;
        default:
         return 'unknown';    
      }
 }


