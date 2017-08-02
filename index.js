#! /usr/bin/env node
'use strict';

const url = require('url');
const argv = require('minimist')(process.argv.slice(2));
const exec = require('child_process').exec;

const help = () => {
	console.log('gh-dl https://github.com/user/repo/tree/branch/path/to/a/folder');
};

if ('h' in argv) {
	help();
	process.exit(0);
}

if (argv._.length === 0) {
	help();
	throw new Error('Invalid Arguments.');
}

const u = argv._[0];
const parsedURL = url.parse(u);
const p = parsedURL.pathname;
const ary = p.split('/');
const head = ary.slice(0, 3);
const branch = ary[4] === 'master' ? 'trunk' : ary[4];
const tail = ary.slice(5);
const newAry = head.concat(branch, tail);
const svnURL = new url.URL(newAry.join('/'), 'https://github.com/').toString();

console.log(`Downloading ${svnURL}...`);
exec(`svn checkout ${svnURL}`, (err, stdout) => {
	if (err) throw err;

	console.log(stdout);
});