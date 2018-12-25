<?php
/**
 * Plugin Name: Card Block
 * Plugin URI: https://github.com/nsaicharan/card-block/
 * Description: A gutenberg block for creating card elements.
 * Author: Sai Charan
 * Version: 1.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
