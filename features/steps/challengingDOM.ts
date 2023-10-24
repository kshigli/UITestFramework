import { Given, When, Then } from '@cucumber/cucumber';
import { waitForDisplayed } from '../../utils/helperMethods';
import assert from 'assert';
import  {isEqual} from 'lodash';

import { ChallengingDOMPageObj } from '../../pages/challengingDOMPageObj';
import { DynamicLoadingPageObj } from '../../pages/dynamicLoadingPageObj';

const challengingDOMPageObj = new ChallengingDOMPageObj();
const dynamicLoadingPageObj = new DynamicLoadingPageObj();

const challengingDOMLink = '//a[text()="Challenging DOM"]';
let buttonIdsBeforeClick: any;

Given(/^User Navigate to the test URL$/, {}, async () => {  
    const challengingDOMSelector = await $(challengingDOMLink);
    await browser.url('/');    
    await waitForDisplayed(challengingDOMSelector);
});

When(/^Challenging DOM link is clicked$/, {}, async () => {    
    await challengingDOMPageObj.clickChallengingDOMLink();
});

When(/^red button is clicked$/, {}, async () => {
    /* capture button ids before red button click */   
    buttonIdsBeforeClick = await challengingDOMPageObj.getIds();
    await challengingDOMPageObj.clickRedButton();
});

Then(/^confirm that the blue, red, and green button ids changes$/, {}, async () => {     
    /* capture button ids after red button click */
    let buttonIdsAfterClick = await challengingDOMPageObj.getIds();

    console.log("Ids before Red button click "+buttonIdsBeforeClick);
    console.log("Ids after Red button click "+buttonIdsAfterClick);

    /* compare 2 arrays using loadash to confirm ids are different */
    assert(! isEqual(buttonIdsBeforeClick, buttonIdsAfterClick));
});

When(/^Dynamic Loading link is clicked$/, {}, async () => {    
    await dynamicLoadingPageObj.clickDynamicLoadingLink();
});

When(/^Example 2: Element rendered after the fact link is clicked$/, {}, async () => {    
    await dynamicLoadingPageObj.clickExampleTwoElement();
    await dynamicLoadingPageObj.clickStart();
});

Then(/^'Hello World!' is rendered after the loading bar disappears$/, {}, async () => {     
    await dynamicLoadingPageObj.waitUntilLoadBarDisappears();
    const welcomeText = await dynamicLoadingPageObj.getWelcomeText();
    assert.equal(welcomeText,"Hello World!");
});