# jekyll for demo pages
jekyll &

# careless_admin(.min).css
sass --watch scss/careless_admin.scss:assets/careless_admin.css --style expanded &
sass --watch scss/careless_admin.scss:assets/careless_admin.min.css --style compressed &

# typography(.min).css
sass --watch scss/typography.scss:assets/typography.css --style expanded &
sass --watch scss/typography.scss:assets/typography.min.css --style compressed
