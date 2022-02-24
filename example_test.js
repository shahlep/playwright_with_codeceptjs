Feature('Example Test Suite');

Before(({I})=>{
    console.log('Before hook')
    I.amOnPage('https://github.com')
})

After(({I})=>{
    console.log('After hooks')
})

Scenario('First Test -visit Github', ({ I }) => {
    I.see('GitHub')
    I.seeElement('h1')
});

Scenario('Second Test -visit Github', ({ I }) => {
    I.see('GitHub')
    I.seeElement('h1')
});

