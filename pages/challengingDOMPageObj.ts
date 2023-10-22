import { waitForDisplayed } from '../utils/helperMethods';

const challengingDOMLink = '//a[text()="Challenging DOM"]';
const greenButtonXPath = '//div[@class="large-2 columns"]/a[3]';
const redButtonXPath = '//div[@class="large-2 columns"]/a[2]';

let value: string;
export class ChallengingDOMPageObj {

    async clickChallengingDOMLink() {
        const greenButton = await $(greenButtonXPath);
        const challengingDOMLinkSelector = await $(challengingDOMLink);    
        await challengingDOMLinkSelector.click();
        /*Wait for any element on the page after click */
        await waitForDisplayed(greenButton);
    }

    async clickRedButton() {
        const redButton = await $(redButtonXPath);
        await redButton.moveTo();
        await redButton.click();
        /*Wait for any element on the page after click */
        await waitForDisplayed(redButton);
    }

    async getId(buttonColour: string) {   
        
        if(buttonColour === 'Blue') {
            const id = await $('//div[@class="large-2 columns"]/a[1]');  
            value = await id.getAttribute('id');  
        } 
        else if(buttonColour ==='Red') {
            const id = await $('//div[@class="large-2 columns"]/a[2]');  
            value = await id.getAttribute('id');  

        } else if (buttonColour === 'Green') {
            const id = await $('//div[@class="large-2 columns"]/a[3]');  
            value = await id.getAttribute('id'); 
        }
        return value;
    }

    async getIds() {   
        
        let buttonsIds: Array<string> = [];
        const buttonCount = (
            await browser.findElements(
                'xpath',
                '//a[contains(@class,"button")]'
            )
        ).length;
        for (let i = 1; i <= buttonCount; i++) {
            const buttonIdSelector = `//div[@class="large-2 columns"]/a[${i}]`;
            const buttonId = await $(buttonIdSelector);
            const id: string = await buttonId.getAttribute('id'); 
            buttonsIds.push(id);
        }
        console.log("ids--------->>> "+buttonsIds)
        return buttonsIds;
    }
}