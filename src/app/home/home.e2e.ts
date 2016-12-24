import { browser, by, element } from 'protractor';

xdescribe('Home', () => {

  beforeEach(() => {
    // change hash depending on router LocationStrategy
    browser.get('/#/home');
  });


  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'Angular2 Webpack Starter from @AngularClass';
    expect(subject).toEqual(result);
  });

  it('should have "Dobro vece" h2', () => {
    let subject = element.all(by.css('h2')).get(0).getText();
    let result  = 'Dobro vece, ...';
    expect(subject).toEqual(result);
  });

  it('should have <home>', () => {
    let subject = element(by.css('app home')).isPresent();
    let result  = true;
    expect(subject).toEqual(result);
  });

  it('should have buttons', () => {
    let subject = element.all(by.css('button')).first().getText();
    let result  = 'home';
    expect(subject).toEqual(result);
  });


});
