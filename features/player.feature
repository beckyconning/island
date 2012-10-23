Feature: A music player
  As a listener
  I want to play a specific song
  So that I can listen to it

  Scenario: Play a song
    Given the player isn't playing the specified song
    When I play the specified song
    Then the specified song should be playing