.PHONY: install lint calc gcd prime progression even brain-games publish

install:
	@npm ci

lint:
	@npx eslint .

calc:
	@node bin/brain-calc.js

gcd:
	@node bin/brain-gcd.js

prime:
	@node bin/brain-prime.js

progression:
	@node bin/brain-progression.js

even:
	@node bin/brain-even.js

brain-games:
	@echo "Use specific commands: make calc, make even, make gcd, make prime, make progression"

publish:
	@npm publish --dry-run
