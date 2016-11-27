Feature: To test the AngularJS website home page.

  Background:
    Given I am on the AngularJS website home page.

  @angularJSWebsite
  Scenario: Test basic components on the AngularJS home page.
    When I confirm I am on the AngularJS website home page.
      | Field                          | Value                                    |
      | DownLoad Angular JS One Button | Download AngularJS 1\n\n(1.6.0-rc.2 / 1.5.9 / 1.2.32) |
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
    And I confirm the todo checkboxes that are not selected.
      | Field                | Value                |
      | Second Todo Checkbox | build an angular app |
    Then I add a new todo item.
      | Field              | Value             |
      | New Todo List Item | Go to the dentist |
    And I check the values of the todo items.
      | Field                | Value                |
      | First Todo Checkbox  | learn angular        |
      | Second Todo Checkbox | build an angular app |
      | New Todo List Item   | Go to the dentist    |
    Then I select the check box of the new todo item.
      | Field              | Value             |
      | New Todo List Item | Go to the dentist |
    And I recheck the value of the todo items.
      | Field               | Value             |
      | First Todo Checkbox | learn angular     |
      | New Todo List Item  | Go to the dentist |

  @angularJSWebsiteTestWireUpABackend
  Scenario: Test Wire Up A Backend.
    When I confirm the labels of the current JavaScript Projects.
      | Field               | Value               |
      | Angular 2			| Angular 2		      |
      | AngularJS			| AngularJS		      |
      | Backbone			| Backbone		      |
      | Cappucino			| Cappucino		      |
      | Ember			    | Ember		          |
      | GWT					| GWT			      |
      | jQuery				| jQuery			  |
      | Knockout			| Knockout			  |
      | Polymer				| Polymer		      |
      | React				| React			      |
      | Spine				| Spine				  |
      | SproutCore		    | SproutCore	      |
    Then I confirm the labels of the current JavaScript Project Descriptions.
      | Field               | Value                                             |
      | Angular 2			| One framework. Mobile and desktop.		        |
      | AngularJS			| HTML enhanced for web apps!		        		|
      | Backbone			| Models for your apps.		       					|
      | Cappucino			| Objective-J.		        						|
      | Ember			    | Ambitious web apps.		        				|
      | GWT					| JS in Java.			        					|
      | jQuery				| Write less, do more.			     				|
      | Knockout			| MVVM pattern.			   						    |
      | Polymer				| Reusable components for the modern web.		    |
      | React			    | A JavaScript library for building user interfaces.|
      | Spine				| Awesome MVC Apps.					   				|
      | SproutCore		    | A Framework for Innovative web-apps.				|
    And Search for, update, and confirm a project values.
      | Field               		    | Value               					|
      | GWT_Current_Name			 	| GWT							        |
      | GWT_Updated_Name			    | GWT_Updated			    			|
      | GWT_Updated_Website		        | http://www.gwtproject_updated.org/ 	|
      | GWT_Updated_Description         | JS in Java._Updated 				    |

  @angularJSWebsiteTestCreateComponents
  Scenario: Test Wire Create Components.
    When I confirm the locales.
      | Field 	    	 	| Value                           |
      | United States 	    | Locale: US                      |
      | Slovakia            | Locale: SK                      |
    Then I confirm the localization values for United States.
      | Field 	    	 	| Value                           |
      | US_Date 			| Date: Sunday, April 1, 2012     |
      | US_Currency			| Currency: $123,456.00           |
      | US_Number 			| Number: 98,765.432              |
    And I confirm the pluralization values for United States.
      | Field 	    	 	| Value     |
      | no beers 		    | no beers  |
      | 1 beer 				| 1 beer    |
      | 2 beers 			| 2 beers   |
      | 3 beers 			| 3 beers   |
      | 4 beers 			| 4 beers   |
      | 5 beers 			| 5 beers   |
      | 6 beers 			| 6 beers   |
    Then I confirm the localization values for Slovakia.
      | Field 	    	 	| Value                           |
      | SK_Date 			| Date: nedeľa, 1. apríla 2012    |
      | SK_Currency			| Currency: 123 456,00 €          |
      | SK_Number 			| Number: 98 765,432              |
    And I confirm the pluralization values for Slovakia.
      | Field 	    	 	| Value       |
      | žiadne pivo 		| žiadne pivo |
      | 1 pivo 				| 1 pivo      |
      | 2 pivá 				| 2 pivá      |
      | 3 pivá 				| 3 pivá      |
      | 4 pivá 				| 4 pivá      |
      | 5 pív 				| 5 pív	      |
      | 6 pív 				| 6 pív	      |