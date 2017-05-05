import { TableNgPrimePage } from './app.po';

describe('table-ng-prime App', function() {
  let page: TableNgPrimePage;

  beforeEach(() => {
    page = new TableNgPrimePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
