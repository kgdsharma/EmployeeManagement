import { EMPLOYEEMANAGEMENTPage } from './app.po';

describe('employeemanagement App', () => {
  let page: EMPLOYEEMANAGEMENTPage;

  beforeEach(() => {
    page = new EMPLOYEEMANAGEMENTPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
