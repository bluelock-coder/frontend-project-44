.PHONY: install gcd lint publish brain-games

install:
	npm ci

gcd:
	@node bin/brain-gcd.js

lint:
	@npx eslint .

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run
progression:
	node bin/brain-progression.js