Feature('Example Test Suite');

Scenario('First Test -visit Github', ({ I }) => {
    I.amOnPage('https://github.com')
    I.see('GitHub')
    I.seeElement('h1')
});

Scenario('Second Test -visit Github', ({ I }) => {
    I.amOnPage('https://github.com')
    I.see('GitHub')
    I.seeElement('h1')
});

