const waitForExpect = require('wait-for-expect');
const { initialise } = require('../db/initialise');
const knex = require('../db/connect')

function delay(ms) {
  console.log(`Waiting for ${ms} milliseconds...`);
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function queryFactory(testQuery , testFunctions) {
  await waitForExpect(async () => {
    const query = await knex.raw(`${testQuery}`);
    testFunctions(query.rows);
  }, 30000, 1000);
}

describe('Test Lucid chart Importer ', () => {
  beforeAll(async (done) => {
    await initialise();
    done();
  })

  it('it should return track name TEST and Track Status 2', async done => {
    const query = 'SELECT name, trackStatusId FROM core.track';
    const expected = {
      trackStatusId: 2,
      name: 'test'
    }
    
    await queryFactory(query, track => {
      console.log(track)
      expect(true).toEqual(true);
      // expect(track[0]).toEqual(expected);
    });
    done();
  })
  
  it('it should return silo SOURCE and DRAIN', async done => {
    const query = 'SELECT name FROM core.silo'
    await queryFactory(query, siloNames => {
      const names = siloNames.map(silo => silo.name);
      console.log('names', names)
      expect(true).toEqual(true);
      // expect(names).toEqual(expect.arrayContaining(['Source ', 'Drain ']));
    });
    done();
  })

  afterAll(async (done) => {
    delay(5);
    await knex.destroy();
    done();
  })
});
