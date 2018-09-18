import { Learnangular4Page } from './app.po';

describe('learnangular4 App', () => {
  let page: Learnangular4Page;

  beforeEach(() => {
    page = new Learnangular4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
