class Validator {
  static validateUsername(username) {
    const regex = /^[a-zA-Z0-9_-]+$/;
    const consecutiveDigitsRegex = /[0-9]{4}/;
    const startEndRegex = /^[0-9_-]|[_-]$/;
    
    if (!regex.test(username)) {
      return false; // имя содержит недопустимые символы
    }
    
    if (consecutiveDigitsRegex.test(username)) {
      return false; // имя содержит подряд более трех цифр
    }
    
    if (startEndRegex.test(username)) {
      return false; // имя начинается или заканчивается цифрами, символами подчёркивания или тире
    }
    
    return true; // имя пользователя соответствует всем правилам
  }
}

  export default Validator;