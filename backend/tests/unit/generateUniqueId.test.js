const generateUniqueId = require('../../src/controllers/utils/generateUniqueId');

describe('Generate Unique ID', () => {
  it('should return an unique ID', () => {
    const id = generateUniqueId();
    expect(id).toHaveLength(8);
  });
});
