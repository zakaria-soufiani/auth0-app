import { Auth0AppPage } from './app.po';

describe('auth0-app App', function() {
  let page: Auth0AppPage;

  beforeEach(() => {
    page = new Auth0AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
