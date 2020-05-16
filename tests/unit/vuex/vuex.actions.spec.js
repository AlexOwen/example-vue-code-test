import http from 'http';
import fetch from 'node-fetch';
import { expect } from 'chai';
import { actions } from '../../../src/store/index';

global.fetch = fetch;

describe('Vuex', () => {
  describe('actions', () => {
    it('fetchPeople', async () => {
      const person = {
        _id: '5d5d7ad60d207e06de94dfae',
        age: 26,
        eyeColor: 'blue',
        name: 'Brennan Rodriguez',
        gender: 'male',
        location: {
          latitude: -67.771206,
          longitude: 173.18896,
        },
        preferences: {
          pet: 'cat',
          fruit: 'banana',
        },
      };
      const httpServer = http.createServer((_, res) => {
        res.write(`[${JSON.stringify(person)}]`);
        res.end();
      }).listen(8080);

      const commit = (type, data) => {
        expect(type).to.equal('setPeople');
        expect(data).to.deep.equal([person]);
        httpServer.close();
      };

      return actions.fetchPeople({ commit });
    });

    it('initialiseChart', () => {
      const commit = (type, data) => {
        expect(type).to.equal('setChartOption');
        expect(data).to.equal('preferences_pet');
      };

      return actions.initialiseChart({ commit });
    });
  });

  describe('failed actions', () => {
    it('fetchPeople: fetch error', async () => {
      const httpServer = http.createServer((_, res) => {
        res.statusCode = 404;
        res.end();
      }).listen(8080);

      const commit = (type, data) => {
        expect(type).to.equal('setPeople');
        expect(data).to.deep.equal([]);
        httpServer.close();
      };

      return actions.fetchPeople({ commit });
    });
  });
});
