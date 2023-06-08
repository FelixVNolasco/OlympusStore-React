Feature: Enter the 'Basketball' section from the main page

    Scenario: Enter  the 'Basketball' section from the main page
        Given the user visit the Olympus main page
        When the user scroll down 
        And select basketball section 
        Then the user see the main products for Basketball 