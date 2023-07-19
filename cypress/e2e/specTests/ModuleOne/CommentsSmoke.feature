Feature: Comments feature

    @comments
    Scenario: Comments table
        Given I am on aliasing page
        When I review the comments table
        Then I can submit request the new comments 'Hello, nice to meet you'