export default function getHealth(person) {
  const { health } = person;
  if (health >= 50) {
    return 'healthy';
  } if (health >= 25) {
    return 'wounded';
  }
  return 'critical';
}
