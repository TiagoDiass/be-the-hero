const app = require('../../src/app');
const request = require('supertest');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeAll(async () => {
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app).post('/ongs').send({
      name: 'BEA',
      email: 'contato@bea.com',
      whatsapp: '19989898989',
      city: 'Mogi Mirim',
      uf: 'SP',
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
