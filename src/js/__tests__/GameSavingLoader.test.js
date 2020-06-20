import { GameSavingLoader } from '../GameSavingLoader';

test('should work correct', (done) => {
  let result = GameSavingLoader.load().then((saving) => saving);
  result = JSON.parse(result);
  expect(result).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
  done();
});
