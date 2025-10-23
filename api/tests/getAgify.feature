Feature: Agify api to get age of a person

Scenario: get user age by name
    Given base url is set
    When I request user age with name "Swapna"
    Then the api response with status code 200
    And the response headers should be content-type "application/json; charset=utf-8"
    And the response should contain age and count fields

Scenario: get user age by name and country id
    Given base url is set
    When I request user age with name "Michael" and country id "US"
    Then the api response with status code 200
    And the response should contain age and count fields

Scenario: get user age for a list of names
    Given base url is set
    When I request user age for multiple names
    Then the api response with status code 200
    And the response should contain age and count fields for each name

Scenario: get api throws error if name is not provided
    Given base url is set
    When I request user age without name
    Then the api response with status code 422
    And the response should contain error message "Missing 'name' parameter" 

Scenario: request agify with invalid api toen
    Given base url is set
    When I request user age with name "John" and invalid api token "invalid_token"
    Then the api response with status code 401
    And the response should contain error message "Invalid API key" 