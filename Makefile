cucumber:
		WORLD_TYPE=direct_access ./node_modules/.bin/cucumber.js  features \
				-r features/step_definitions -f progress

.PHONY: cucumber