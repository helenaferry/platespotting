
/* STYLEGUIDIST CONFIG */

const path = require('path');
module.exports = {
	// set your styleguidist configuration here
	title: 'Platespotting Style Guide',
	//components: 'src/components/[A-Z]*.vue',
	// defaultExample: true,
	// sections: [
	//   {
	//     name: 'First Section',
	//     components: 'src/components/**/[A-Z]*.vue'
	//   }
	// ],
	// webpackConfig: {
	//   // custom config goes here
	// },
	exampleMode: 'expand',
	require: [
		path.join(__dirname, 'node_modules/leaflet/dist/leaflet.css'),
		path.join(__dirname, 'node_modules/buefy/dist/buefy.css')
	],
}
