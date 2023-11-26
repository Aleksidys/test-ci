class ErrorRepository {
  constructor() {
    this.errorMap = new Map();
  }

  addError(code, description) {
    this.errorMap.set(code, description);
  }

  translate(code) {
    return this.errorMap.has(code) ? this.errorMap.get(code) : 'Unknown error';
  }
}

export default ErrorRepository;
