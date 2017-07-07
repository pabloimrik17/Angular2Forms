import { MyApPage } from './app.po';

describe('my-ap App', () => {
  let page: MyApPage;

  beforeEach(() => {
    page = new MyApPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
