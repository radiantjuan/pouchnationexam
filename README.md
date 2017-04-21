# Pouch Nation Exam (clothes buffet manila)

Author: Radiant C. Juan
Purpose: PouchNation

this app is built using gulp.

Preferred to be uploaded in a apache server with virtual host instead of using browserSync and rewrite in node module

please use this configuration for the vhost:

```vhost
    <VirtualHost *:80>
		DocumentRoot "/path/to/your/app"
		ServerName $DOMAIN_NAME
		ServerAlias $DOMAIN_NAME
		ErrorLog "/var/log/apache2/$DOMAIN_NAME-error.log"
		CustomLog "/var/log/apache2/$DOMAIN_NAME-access.log" common

		SetEnv APP_ENV default
		<Directory "/path/to/your/app">
		    AllowOverride All
		    Require all granted
		</Directory>
	</VirtualHost>
```