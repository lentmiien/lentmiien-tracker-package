const index = require('./index');

test('Test sample function', async () => {
  expect(await index.AxiosTest()).toBe(200);
});