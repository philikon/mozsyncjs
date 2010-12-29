
runtests:
	cd lib && $(MOZ_OBJDIR)/dist/bin/xpcshell \
	-f require.js \
	-f ../test/head.js \
	-f ../test/test-aes.js
