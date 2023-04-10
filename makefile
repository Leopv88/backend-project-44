install: #устанавливает модули
	npm ci

run:  #запуск программы brain-games
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .