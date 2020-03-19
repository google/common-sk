build: package-lock.json
	tsc
	npx webpack --mode=development

production: package-lock.json
	npx webpack --mode=production

serve: package-lock.json
	npx webpack-dev-server --content-base ./dist --watch-poll

demos: package-lock.json
	npx webpack --mode=development

test:
	npm ci
	npx karma start --single-run --browsers=ChromeHeadlessCustom

continuous: package-lock.json
	# Setup for continuous testing when ssh'd into a machine.
	# To debug tests, set up port forwarding via ssh with "-L 9876:localhost:9876".
	# Start Xvfb on port :99 so Chrome can start.
	-Xvfb :99 &
	# Continuously monitor the source files and rebuild the test files as needed.
	npx webpack --watch &
	sleep 2
	# Continuously run the tests each time they are modified.
	DISPLAY=:99 npx karma start --no-single-run &

continuous_desktop: package-lock.json
	# Setup for continuous testing when running on the desktop.
	# Continuously monitor the source files and rebuild the test files as needed.
	npx webpack --watch &
	sleep 2
	# Continuously run the tests each time they are modified.
	npx karma start &

clean:
	rm -rf node_modules
	rm -f package-lock.json
	npm install

docs:
	npx jsdoc -c jsdoc.config.js
	xdg-open out/index.html

package-lock.json: package.json
	npm install

login:
	npm login --registry https://wombat-dressing-room.appspot.com/common-sk/_ns

publish:
	npm publish --registry https://wombat-dressing-room.appspot.com/common-sk/_ns

update-major:
	npm version major
	echo "Don't forget to publish."

update-minor:
	npm version minor
	echo "Don't forget to publish."

update-patch:
	npm version patch
	echo "Don't forget to publish."

