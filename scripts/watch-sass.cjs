const Sass = require('sass');
const {
	readFileSync,
	writeFileSync
} = require('fs');
const { join } = require('path');
const chokidar = require('chokidar');
function compileSass(i) {
	return Sass.compileString(i, {
		style: 'compressed',
		verbose: true
	}).css;
}

chokidar.watch('src/components/**/*.scss').on('change', (path) => {
	writeFileSync(`${path.split('.scss').shift()}.css.ts`, `import { css } from 'lit'; export default css\`${compileSass(readFileSync(join(process.cwd(), path), 'utf-8'), )}\``)
});

