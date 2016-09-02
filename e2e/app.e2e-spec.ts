import { EmailExtractorAngular2Page } from './app.po';

describe('email-extractor-angular2 App', function() {
  let page: EmailExtractorAngular2Page;

  beforeEach(() => {
    page = new EmailExtractorAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
