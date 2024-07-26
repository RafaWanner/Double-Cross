//import data from './char.json' with { type: 'json' };

// "with" only works with newest versions of node
// use assert instead 

import data from '../char.json' assert { type: 'json' };
// Firefox apparently does not support "assert"

function test(){return data}

export default test;