import { browser, by, element } from 'protractor';

xdescribe('AddForm', () => {

  beforeEach(() => {
    // change hash depending on router LocationStrategy
    browser.get('/#/home');
  });

  it('should have ime require ', () => {
    let subject = element(by.css('input[formControlName=ime]'));
    let err = element(by.id('errIme'));
    expect(err.getAttribute('hidden')).toBeTruthy();
    subject.sendKeys(String.fromCharCode(8, 8, 8, 8));
    expect(err.getAttribute('hidden')).toBeFalsy();

  });

  it('should have grad > 4 leter ', () => {
    let subject = element(by.css('input[formControlName=grad]'));
    let err = element(by.id('errGrad'));
    expect(err.getAttribute('hidden')).toBeTruthy();
    subject.sendKeys(String.fromCharCode(8));
    expect(err.getAttribute('hidden')).toBeFalsy();
  });

  it('should disable button on error ', () => {
    let subject = element(by.css('input[formControlName=grad]'));
    let button = element(by.buttonText('Submit'))
    subject.sendKeys(String.fromCharCode(8));
    expect(button.isEnabled()).toBeFalsy();
  });

  it('should add new tr', () => {
    let trElement = element.all(by.css('tbody tr'));
    trElement.count().then((cnt0) => {
        element(by.buttonText('Submit')).click().then(() => {
          expect(trElement.count()).toBe(cnt0 + 1);
        });
    });
  });

  it('should have buttons Moj', () => {
    let subject = element(by.buttonText('Moj'));
    expect(subject).toBeTruthy();
  });

});
