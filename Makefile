.DEFAULT_GOAL := help

.PHONY: help
help: ## display command overview
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[35m%-30s\033[0m %s\n", $$1, $$2}'

install: ## install dependencies
	composer update --no-interaction --no-progress --no-ansi
	npm install

clean: ## cleanup installed dependencies and lockfiles
	rm -rf composer.lock
	rm -rf vendor
	rm -rf package-lock.json
	rm -rf node_modules

.PHONY: cs
cs: ## enforce code style
	npx eslint --fix ./
	composer normalize
