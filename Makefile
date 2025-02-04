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


