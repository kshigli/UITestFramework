Feature: challenging DOM and Dynamic Loading

    Scenario: Confirm id changes when red button clicked
        Given User Navigate to the test URL
        When Challenging DOM link is clicked
        And red button is clicked
        Then confirm that the blue, red, and green button ids changes

    Scenario: Confirm id changes when red button clicked
        Given User Navigate to the test URL
        When Dynamic Loading link is clicked
        And Example 2: Element rendered after the fact link is clicked
        Then 'Hello World!' is rendered after the loading bar disappears