export default class ErrorRepository {
  constructor() {
    this.errors = new Map([[687787, 'wrong format'], [558878, 'unknow-user']]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
