#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build:demo

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m ':rocket: deploy page'

# deploy https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:colgin/vue-scrollbar-container.git master:gh-pages

cd -
