import { ProjetoModeloAngularPage } from './app.po';

describe('projeto-modelo-angular App', () => {
  let page: ProjetoModeloAngularPage;

  beforeEach(() => {
    page = new ProjetoModeloAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
