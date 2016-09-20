<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'danielfr_wp');

/** MySQL database username */
define('DB_USER', 'danielfr_admin');

/** MySQL database password */
define('DB_PASSWORD', 'D1n8-1288');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'MM}I{?+!d+l6O0V;9u@GT-jAa^`yg#~dZYSfzy/Caf/GBalvHny3f,UPPKN9GFmc');
define('SECURE_AUTH_KEY',  '495rJ%I62Y/_jgP6-#?v0bam[If[-#9*9XY7;`,l+- N~gGCT#@~!4LIWMwB4U,D');
define('LOGGED_IN_KEY',    '*xiuIW[[dcTZmct}J1to)z;/#yRvby#-6_U^|6~w|}V};1|6&1|l~Q,.U&vdI~1a');
define('NONCE_KEY',        'W2&uXAs>jBkJb#{V,2iI&Zdanj>]P`:R4[$,6h[FtWSSi_uP|B.Ph{sL.p&m9Sqo');
define('AUTH_SALT',        '|H<QAkOm~9w{>;fy;j>|1L;!gD~aPe@U}ntNKiRrgBxOFW3>]TXN4+?7L-[, _.M');
define('SECURE_AUTH_SALT', 'bO*|V`KLqeO vzwX?Ho[^H}75jO|-f+8?}=/JDgMP8]520#RrQ[-EaTJSiLm$>$p');
define('LOGGED_IN_SALT',   'WyX~sX$u-HPp% M;?{U;=mh{+Q@u<n%<l@(f^E@`E#WA|jIj8BC-e+G}|.i.J#OY');
define('NONCE_SALT',       '[/+K-||1da:7#VICE!})OJ+5>a&[HEHeU9`8)yP2cJG~wE:txPK~hLI4Mn/sic&B');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
