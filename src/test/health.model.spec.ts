import { HealthModel } from '../health/health.model';

describe('Healt model', () => {
  describe('check properties', () => {
    it('should get', () => {
      const health = new HealthModel({ replyTo: 'prueba', version: '1' });
      console.log(health);
      expect(health).toBeDefined();
    });
  });
});
