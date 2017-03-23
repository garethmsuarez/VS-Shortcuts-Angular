import { AngularWebsitePage } from './app.po';

describe('angular-website App', () => {
  let page: AngularWebsitePage;

  beforeEach(() => {
    page = new AngularWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
