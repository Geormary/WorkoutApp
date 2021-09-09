import app from '../server.js';
import request from 'supertest';
import { expect } from 'chai';

describe('WorkoutApp', function() {
  it('can list all exercises', async () => {
    const resp = await request(app)
      .get('/exercises')
      .expect(200);
    
    expect(resp.body).to.eql([
      'exercise',
      'ex-er-cise',
      'eggs ARE sides',
      'for bacon',
      'bacon!'
    ]);
  });

  it('can create an exercise', async () => {
    const resp = await request(app)
      .post('/exercises')
      .expect(200);
    
    expect(resp.body).to.eql('Sure, I totally saved that for you ;)');
  });
});
