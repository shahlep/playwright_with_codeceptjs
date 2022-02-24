Feature('example');

Scenario('visit Github', ({ I }) => {
    I.amOnPage('https://github.com')
    I.see('GitHub')
    I.seeElement('h1')
});
