import { AceUcommercePage } from './app.po';

describe('ace-ucommerce App', () => {
  let page: AceUcommercePage;

  beforeEach(() => {
    page = new AceUcommercePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
