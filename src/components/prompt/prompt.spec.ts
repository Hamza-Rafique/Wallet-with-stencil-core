import { Prompt } from './prompt';

describe('stellar-prompt', () => {
  it('builds', () => {
    expect(new Prompt()).toBeTruthy();
  });
});
