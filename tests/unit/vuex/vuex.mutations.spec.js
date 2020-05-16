import { expect } from 'chai';
import { mutations } from '../../../src/store/index';

describe('Vuex', () => {
  describe('mutations', () => {
    it('setPeople: add initial people', () => {
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

    it('setPeople: replace all people', () => {
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

    it('setChartOption', () => {
      const state = {
        chartType: 'bar',
        chartOption: 'eyeColor',
        chartLabels: ['blue'],
        chartData: [
          'blue',
        ],
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

      const { setChartOption } = mutations;

      setChartOption(state, 'gender');

      expect(state.chartData[0].data).to.exist;
      expect(state.chartData[0].data).to.deep.equal([1]);
      expect(state.chartData[0].label).to.exist;
      expect(state.chartData[0].label).to.equal('gender');
      expect(state.chartData[0].backgroundColor).to.exist;
      expect(state.chartOption).to.equal('gender');
      expect(state.chartLabels).to.deep.equal(['female']);
    });

    it('updatePerson', () => {
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

      // update the person's age
      const updatedPerson = {
        _id: '5d5d7ad6ae763b95f3a7f3fe',
        age: 33,
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
        people: [person],
      };

      const { updatePerson } = mutations;

      updatePerson(state, updatedPerson);

      expect(state.people.length).to.equal(1);
      expect(state.people[0]).to.deep.equal(updatedPerson);
    });
  });
});
