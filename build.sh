# remove previous build
rm -rf assets/ && mkdir assets/

# careless_admin(.min).css
sass scss/careless_admin.scss:assets/careless_admin.css --style expanded
sass scss/careless_admin.scss:assets/careless_admin.min.css --style compressed

# typography(.min).css
sass scss/typography.scss:assets/typography.css --style expanded
sass scss/typography.scss:assets/typography.min.css --style compressed

# entypo/
cp -r entypo assets/

# javascripts
cp -r javascripts/* assets/

# careless_admin.zip
cp -r assets careless_admin 
zip -r careless_admin.zip careless_admin
mv careless_admin.zip assets/
rm -rf careless_admin
