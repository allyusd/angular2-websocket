import { Angular2WebsocketPage } from './app.po';

describe('angular2-websocket App', function() {
  let page: Angular2WebsocketPage;

  beforeEach(() => {
    page = new Angular2WebsocketPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
