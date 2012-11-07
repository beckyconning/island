# Island

## What is Island?

Island is a point and click adventure game for the web.

## Development Plan

Use BDD and agile iterations to develop theses features in order:

*Non-playable rendering demo (Spikes: CSS Transitions, WebGL/Three.js)
*Playable text adventure
*Playable 'first person' point and click adventure (no visual player character)
*Playable 'third person' point and click adventure (with visual player character)

### Example scenario
'''gherkin
Scenario: go to forest successfully 
    Given I start a new game
    When I talk to Ms Rabbit
    And say "Whatever are you doing*"
    And then say "I suppose*"
    And then say "Thank you."
    And use my map
    And walk to the forest
    Then I should be in the forest
'''