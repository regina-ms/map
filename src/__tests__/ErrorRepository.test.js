import ErrorRepository from '../ErrorRepository';

test('should create a new ErrorRepository', () => {
  const badErrors = new ErrorRepository();
  expect(badErrors).toBeInstanceOf(ErrorRepository);
});

test('should return translate of error code', () => {
  const badErrors = new ErrorRepository();
  badErrors.errors.set(687787, 'wrong format');
  expect(badErrors.translate(687787)).toBe('wrong format');
});

test('should return "Unknown error"', () => {
  const badErrors = new ErrorRepository();
  expect(badErrors.translate(687787)).toBe('Unknown error');
});
