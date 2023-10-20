const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

export default function sortOptions(inputObj, ...options) {
  const necessaryElements = [];
  const otherElements = [];

  Object.keys(inputObj).forEach((key) => {
    if (options.includes(key)) {
      necessaryElements.push({ key, value: inputObj[key] });
    } else {
      otherElements.push({ key, value: inputObj[key] });
    }
  });

  necessaryElements.sort((a, b) => options.indexOf(a.key) - options.indexOf(b.key));

  otherElements.sort((a, b) => a.key.localeCompare(b.key));

  return necessaryElements.concat(otherElements);
}

const answer = sortOptions(obj, 'level');
console.log(answer);
