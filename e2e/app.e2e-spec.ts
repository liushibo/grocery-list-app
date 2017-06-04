import { GroceryListToolPage } from './app.po';

describe('grocery-list-tool App', () => {
  let page: GroceryListToolPage;

  beforeEach(() => {
    page = new GroceryListToolPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
