#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run vbuild

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:appsservisalud/tutorial-vue.git master:gh-pages

cd -