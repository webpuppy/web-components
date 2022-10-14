const Sass = require('sass');
const {
	readFileSync,
	writeFileSync
} = require('fs');
const glob = require('glob');
function compileSass(i) {
	return Sass.compileString(i, {
		style: 'compressed',
		verbose: true
	}).css;
}

// if(!process.argv.length < 2) {
// 	console.log('error: enter a glob pattern to compile');
// 	process.exit(1);
// }

glob('src/components/**/*.scss', function(er, files) {
	files.forEach(file => {
		writeFileSync(`${file.split('.scss').shift()}.css.ts`, `import { css } from 'lit'; export default css\`${compileSass(readFileSync(file, 'utf-8'), )}\``)
	})
});