# twitterhistogramapp

Author: Radiant C. Juan
Purpose: PouchNation

this app is built using gulp.

Preferred to be uploaded in a apache server with virtual host instead of using browserSync and rewrite in node module

please use this configuration for the vhost:

    Markup :  `code()`

```vhost
    <VirtualHost *:80>
		ServerAdmin admin@tomatocake.com
		DocumentRoot "/var/www/html/clothesbuffetmanila/app"
		ServerName clothesbuffetmanila.dev
		ServerAlias clothesbuffetmanila.dev
		ErrorLog "/var/log/apache2/clothesbuffetmanila.dev-error.log"
		CustomLog "/var/log/apache2/clothesbuffetmanila.dev-access.log" common

		SetEnv APP_ENV default
		<Directory "/var/www/html/clothesbuffetmanila/app">
		    AllowOverride All
		    Require all granted
		</Directory>
	</VirtualHost>
```

    Markup : ```vhost