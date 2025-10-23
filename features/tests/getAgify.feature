Feature: Agify api to get age of a person

Scenario: get user age by name
    Given base url is set
    When I request user age with name "Swapna"
    Then the api response with status code 200
    And the response should contain age and count fields

Scenario: get user age by name and country id
    Given base url is set
    When I request user age with name "Michael" and country id "US"
    Then the api response with status code 200
    And the response should contain age and count fields

Scenario: get user age for a list of names
    Given base url is set
    When I request user age with names "Alice", "Bob", "Charlie" 
    Then the api response with status code 200
    And the response should contain age and count fields for each name