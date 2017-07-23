import { SearchGithubUsersPage } from './app.po';

describe('search-github-users App', () => {
  let page: SearchGithubUsersPage;

  beforeEach(() => {
    page = new SearchGithubUsersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
