Feature: To test the AngularJS website home page.

  Background: 
    Given I am on the AngularJS website home page.

  @angularJSWebsite
  Scenario: Test basic components on the AngularJS home page.
    When I confirm I am on the AngularJS website home page.
      | Field                          | Value                                    |
      | DownLoad Angular JS One Button | Download AngularJS 1\n\n(1.5.8 / 1.2.30) |
