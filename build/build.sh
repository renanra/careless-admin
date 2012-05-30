rm -rf ./tmp
mkdir ./tmp
cd ./tmp
cp ../../stylesheets/normalize.css ./
cp ../../stylesheets/base.less ./
cp ../../stylesheets/colors.less ./
cat normalize.css > careless_admin.css
less base.less >> careless_admin.css
less colors.less >> careless_admin.css
sass careless_admin.css:../careless_admin.min.css --scss --style compressed