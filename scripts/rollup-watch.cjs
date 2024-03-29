const loadConfigFile = require('rollup/loadConfigFile');
const path = require('path');
const rollup = require('rollup');

function watchRollup() {
	loadConfigFile(path.resolve(process.cwd(), 'scripts', 'rollup.bundle.mjs'), { format: 'es' }).then(
		async ({ options, warnings }) => {
		  console.log(`We currently have ${warnings.count} warnings`);
		  warnings.flush();
		  for (const optionsObj of options) {
				const bundle = await rollup.rollup(optionsObj);
				await Promise.all(optionsObj.output.map(bundle.write));
		  }

		  rollup.watch(options);
		}
	  );
}

watchRollup();