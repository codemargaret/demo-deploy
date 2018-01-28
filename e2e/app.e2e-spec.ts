import { DemoDeployPage } from './app.po';

describe('demo-deploy App', () => {
  let page: DemoDeployPage;

  beforeEach(() => {
    page = new DemoDeployPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
