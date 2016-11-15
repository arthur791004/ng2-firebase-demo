import { Ng2FirebaseDemoPage } from './app.po';

describe('ng2-firebase-demo App', function() {
  let page: Ng2FirebaseDemoPage;

  beforeEach(() => {
    page = new Ng2FirebaseDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
