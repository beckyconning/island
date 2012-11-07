Feature: A tool to create and edit in-game objects
         
  As an object designer
  I want to create or edit an object
  So that it can be included in the game

  Scenario: Create an object
    When I open the editor
    And supply an image
    And supply a polygon which defines the object's edge
    Then I should see the properties I have defined in the appropriate formats