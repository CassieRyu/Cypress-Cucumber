Feature: Authentication Feature

    Scenario: Login on action page
        Given I am on action page
        When I fill in email '<user email>' and password '<password>'
        Then I can submit coupon '<coupon number>'

        Examples:
            | page name | user email    | password | coupon number |
            | action    | test@test.com | 12345    | HJGUYIIK      |