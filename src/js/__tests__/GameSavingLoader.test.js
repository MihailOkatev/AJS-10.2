import { GameSavingLoader } from '../GameSavingLoader';

test('should work correct', (done) => {
  const result = GameSavingLoader.load().then((saving) => saving);
  // eslint-disable-next-line no-shadow
  result.then((result) => {
    expect(result).toEqual(JSON.stringify({
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    }));
    done();
  });
});
