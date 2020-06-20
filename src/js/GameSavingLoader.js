import read from './reader';
import json from './parser';

// eslint-disable-next-line import/prefer-default-export
export class GameSavingLoader {
  static async load() {
    const data = await read();
    const answer = await json(data);
    return answer;
  }
}
