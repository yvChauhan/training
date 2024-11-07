#! /usr/bin/env node

import open from 'open';
import fetch from 'node-fetch';
import yargs from 'yargs';

const { argv } = yargs(process.argv.slice(2));

const response = await fetch('https://www.reddit.com/.json');
const data = await response.json();
const { children } = data.data;

const randomPost = children[Math.floor(Math.random() * children.length)].data;

if (argv.print) {
    console.log(randomPost.title);
    console.log(randomPost.url);
} else {
    open('https://www.reddit.com' + randomPost.permalink);
}