# remove previous build
rm -rf assets/ && mkdir assets/

# careless_admin(.min).css
sass scss/careless-admin.scss:assets/careless-admin.css --style expanded
sass scss/careless-admin.scss:assets/careless-admin.min.css --style compressed

# typography(.min).css
sass scss/typography.scss:assets/typography.css --style expanded
sass scss/typography.scss:assets/typography.min.css --style compressed

# entypo/
cp -r entypo assets/

# javascripts
cp -r javascripts/* assets/

# careless_admin.zip
cp -r assets careless-admin 
zip -r careless-admin.zip careless-admin
mv careless-admin.zip assets/
rm -rf careless-admin
