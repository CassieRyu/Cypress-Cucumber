Feature: Authentication Feature

    Scenario: Login on action page
        Given I am on action page
        When I fill in email '<user email>' and password '<password>'
        Then I can submit coupon '<coupon number>'

        Examples:
            | page name | user email    | password | coupon number |
            | action    | test@test.com | 12345    | HJGUYIIK      |


    Scenario: Comments table
        Given I am on aliasing page
        When I review the comments table
        Then I can submit request the new comments 'Hello, nice to meet you'