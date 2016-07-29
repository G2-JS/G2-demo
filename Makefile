publish:
	npm run transpiler
	npm publish

publish-sync: publish
	cnpm sync
	tnpm sync