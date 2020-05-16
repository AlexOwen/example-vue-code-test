import { expect } from 'chai';
import { mutations } from '../../../src/store/index';

describe('Vuex', () => {
  describe('mutations', () => {
    describe('setPeople', () => {
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
    });

    describe('setChartOption', () => {
      it('sets chartOption', () => {
        const state = {
          chartOption: 'eyeColor',
        };

        const { setChartOption } = mutations;

        setChartOption(state, 'gender');

        expect(state.chartOption).to.equal('gender');
      });
    });

    describe('setChartData', () => {
      it('setChartData', () => {
        const state = {
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

        const { setChartData } = mutations;

        setChartData(state);

        expect(state.chartData[0].data).to.exist;
        expect(state.chartData[0].data).to.deep.equal([1]);
        expect(state.chartData[0].label).to.exist;
        expect(state.chartData[0].label).to.equal('eyeColor');
        expect(state.chartData[0].backgroundColor).to.exist;
        expect(state.chartOption).to.equal('eyeColor');
        expect(state.chartLabels).to.deep.equal(['blue']);
      });
    });

    describe('updatePerson', () => {
      it('updatePerson: name', () => {
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

        // update the person's name
        const updatedPerson = {
          ...person,
          name: 'test name',
        };

        const state = {
          people: [person],
        };

        const { updatePerson } = mutations;

        updatePerson(state, updatedPerson);

        expect(state.people.length).to.equal(1);
        expect(state.people[0]).to.deep.equal(updatedPerson);
      });

      it('updatePerson: age', () => {
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
          ...person,
          age: 33,
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

    it('updatePerson: gender', () => {
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

      // update the person's gender
      const updatedPerson = {
        ...person,
        gender: 'not specified',
      };

      const state = {
        people: [person],
      };

      const { updatePerson } = mutations;

      updatePerson(state, updatedPerson);

      expect(state.people.length).to.equal(1);
      expect(state.people[0]).to.deep.equal(updatedPerson);
    });

    it('updatePerson: eyeColor', () => {
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

      // update the person's eye color
      const updatedPerson = {
        ...person,
        eyeColor: 'green',
      };

      const state = {
        people: [person],
      };

      const { updatePerson } = mutations;

      updatePerson(state, updatedPerson);

      expect(state.people.length).to.equal(1);
      expect(state.people[0]).to.deep.equal(updatedPerson);
    });

    it('updatePerson: preferences.pet', () => {
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

      // update the person's preferred pet
      const updatedPerson = {
        ...person,
        preferences: {
          ...person.preferences,
          pet: 'cat',
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

    it('updatePerson: preferences.fruit', () => {
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

      // update the person's preferred fruit
      const updatedPerson = {
        ...person,
        preferences: {
          ...person.preferences,
          fruit: 'mango',
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
