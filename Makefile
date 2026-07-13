.PHONY: install lint calc gcd prime progression even publish

install:
	npm ci

calc:
	@node bin/brain-calc.js

prime:
	@node bin/brain-prime.js

even:
	@node bin/brain-even.js

gcd:
	@node bin/brain-gcd.js

progression:
	@node bin/brain-progression.js
