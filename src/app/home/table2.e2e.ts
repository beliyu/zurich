import { browser, by, element } from 'protractor';

xdescribe('', () => {

  beforeEach(() => {
    // change hash depending on router LocationStrategy
    browser.get('/#/home');
  });


  it('should toggle red/blue', () => {
    element(by.buttonText('Submit')).click();
    let tRow = element.all(by.css('tbody tr')).last();
    let collButtom = tRow.element(by.css('.colButt'));
    let buttSpan  = collButtom.element(by.css('span'));
    expect(buttSpan.getText()).toEqual('bl');
    collButtom.click();
    expect(buttSpan.getText()).toEqual('rd');
  });

  it('should delete last row', () => {
    let trElms = element.all(by.css('tbody tr'));
    let delButtom = trElms.last().element(by.css('.delButt'));
    trElms.count().then((cnt0) => {
       delButtom.click().then(() => {
          expect(trElms.count()).toBe(cnt0 - 1);
        });
    });
    ;
  });


});
