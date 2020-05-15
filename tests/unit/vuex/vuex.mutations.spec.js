import { expect } from 'chai';
import { mutations } from '../../../src/store/index';

describe('Vuex', () => {
  describe('mutations', () => {
    it('setPeople: add initial people', async () => {
      const person = {
        _id: '5d5d7ad6ae763b95f3a7f3fe',
        age: 31,
        eyeColor: 'blue',
        name: 'Carolina Chaney',
        gender: 'female',
        location: {
          latitude: -3.69726,
          longitude: -122.033715,
        },
        preferences: {
          pet: 'dog',
          fruit: 'banana',
        },
      };

      const state = {
        people: null,
      };

      const { setPeople } = mutations;

      setPeople(state, [
        person,
      ]);

      expect(state.people).to.deep.equal([person]);
    });

    it('setPeople: replace people', async () => {
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

      const state = {
        people: [{
          _id: '5d5d7ad6ae763b95f3a7f3fe',
          age: 31,
          eyeColor: 'blue',
          name: 'Carolina Chaney',
          gender: 'female',
          location: {
            latitude: -3.69726,
            longitude: -122.033715,
          },
          preferences: {
            pet: 'dog',
            fruit: 'banana',
          },
        }],
      };

      const { setPeople } = mutations;

      setPeople(state, [
        person,
      ]);

      expect(state.people).to.deep.equal([{
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
      }]);
    });
  });
});
