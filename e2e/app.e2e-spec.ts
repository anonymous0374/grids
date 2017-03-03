import { GridsPage } from './app.po';

describe('grids App', () => {
  let page: GridsPage;

  beforeEach(() => {
    page = new GridsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
