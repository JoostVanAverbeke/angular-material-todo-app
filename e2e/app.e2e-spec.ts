import { AngularMaterialTodoAppPage } from './app.po';

describe('angular-material-todo-app App', () => {
  let page: AngularMaterialTodoAppPage;

  beforeEach(() => {
    page = new AngularMaterialTodoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
