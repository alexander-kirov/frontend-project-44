install: # загрузить зависимости с чистого листа
	npm	ci

brain-games: # запустить игру brain-games
	node	bin/brain-games.js

publish: # публикация пакета
	npm	publish	--dry-run

lint: # запуск eslint
	npx	eslint	.

brain-even: # запустить игру brain-even
	node	bin/brain-even.js

brain-calc: # запустить игру brain-calc
	node	bin/brain-calc.js

brain-gcd: # запустить игру brain-gcd
	node	bin/brain-gcd.js

brain-progression: # запустить игру brain-progression
	node	bin/brain-progression.js

brain-prime: # запустить игру brain-prime
	node	bin/brain-prime.js
