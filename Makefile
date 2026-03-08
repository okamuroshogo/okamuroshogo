.PHONY: dev build tar.gz clean

PROJECT_NAME := okamu-ro
VERSION      := $(shell date +%Y%m%d-%H%M%S)
ARCHIVE      := $(PROJECT_NAME)-$(VERSION).tar.gz

# Dev
dev:
	pnpm run dev

# Build
build:
	pnpm run build

# Archive — .git, node_modules, .next, out, docs, .DS_Store etc. を除外
tar.gz:
	@echo "Creating $(ARCHIVE) ..."
	@tar czf ../$(ARCHIVE) \
		--exclude='.git' \
		--exclude='node_modules' \
		--exclude='.next' \
		--exclude='out' \
		--exclude='docs' \
		--exclude='.DS_Store' \
		--exclude='*.tsbuildinfo' \
		--exclude='.env' \
		--exclude='.env.*' \
		--exclude='old_site' \
		-C .. $(notdir $(CURDIR))
	@echo "Created ../$(ARCHIVE)"
	@ls -lh ../$(ARCHIVE)

# Clean
clean:
	rm -rf .next out
	@echo "Cleaned .next/ and out/"
