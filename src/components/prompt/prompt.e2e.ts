import { newE2EPage } from '@stencil/core/testing';

describe('stellar-prompt', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stellar-prompt></stellar-prompt>');

    const element = await page.find('stellar-prompt');
    expect(element).toHaveClass('hydrated');
  });
});
