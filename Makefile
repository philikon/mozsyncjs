
tests := $(wildcard test/test*.js)

$(tests:.js=): $(tests)
	cd lib && $(MOZ_OBJDIR)/dist/bin/xpcshell \
	-f require.js \
	-f ../test/head.js \
	-f ../$(@).js

.PHONY: runtests
runtests: $(tests:.js=)
