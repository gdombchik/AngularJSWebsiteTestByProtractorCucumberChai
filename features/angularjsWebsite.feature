Feature: To test the AngularJS website home page.

  Background:
    Given I am on the AngularJS website home page.

  @angularJSWebsite
  Scenario: Test basic components on the AngularJS home page.
    When I confirm I am on the AngularJS website home page.
      | Field                          | Value                                    |
      | DownLoad Angular JS One Button | Download AngularJS 1\n\n(1.5.8 / 1.2.30) |
    Then I click on the Download AngularJS One button.
    And I check the properties of the Download AngularJS One page.
      | Field              | Value                     |
      | Title Label        | Download AngularJS        |
      | Branch             | 1.5.x (stable)            |
      | Build Minified     | Minified                  |
      | Build Zip          | Zip                       |
      | Build Uncompressed | Uncompressed              |
      | Cdn                | angular.min.js            |
      | Bower              | bower                     |
      | Npm                | npm                       |
      | Extras             | Browse additional modules |
      | Previous Versions  | Previous Versions         |
      | Download Button    | angular.min.js            |
      | Close Button       | ×                         |
    Then I click on the Close button of the Download AngularJS One page.

  @angularJSWebsiteTestTheBasics
  Scenario: Test The Basics.
    When I fill in the name.
      | Field | Value |
      | Name  | Greg  |
    Then I confirm the message.
      | Field        | Value       |
      | Name Message | Hello Greg! |

  @angularJSWebsiteTestAddSomeControl
  Scenario: Test Add Some Control.
    When I confirm the labels of the current todo items.
      | Field                | Value                |
      | First Todo Checkbox  | learn angular        |
      | Second Todo Checkbox | build an angular app |
    Then I confirm the todo checkboxes that are selected.
      | Field               | Value         |
      | First Todo Checkbox | learn angular |