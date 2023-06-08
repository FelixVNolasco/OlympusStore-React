Feature: Google Search
  Como usuario de Google
  Quiero realizar una búsqueda y seleccionar la quinta opción

  Scenario: Scroll and Select
    Given I am on the Google search page
    When I enter "example search" in the search bar
    And I press Enter
    Then I should see search results
    When I scroll down the page
    And I click on the fifth search result
    Then I should be redirected to the selected page
