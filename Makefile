install: # загрузить зависимости с чистого листа
	npm	ci

brain-games: # запустить игру brain-games
	node	bin/brain-games.js

publish: # публикация пакета
	npm	publish	--dry-run


