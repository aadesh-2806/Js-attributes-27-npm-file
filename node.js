/*
node
>
>
>
for exit ctrl + c again Ctrl+C or Ctrl+D or .exit
node repel -------->comes in script

.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the REPL
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file

Press Ctrl+C to abort current expression, Ctrl+D to exit the REPL

node node.js --------> open file
node -v ------>version
process.version----->version
process.release----->{
  name: 'node',
  lts: 'Fermium',
  sourceUrl: 'https://nodejs.org/download/release/v14.15.4/node-v1
4.15.4.tar.gz',
  headersUrl: 'https://nodejs.org/download/release/v14.15.4/node-v
14.15.4-headers.tar.gz',
  libUrl: 'https://nodejs.org/download/release/v14.15.4/win-x86/no
de.lib'
}

process.cwd()----->'D:\\aadesh imp files\\web development\\JavaScript\\node js'

process.argv----->[ 'C:\\Program Files (x86)\\nodejs\\node.exe' ]
*/
/*
console.log('hello')
console.log(process.argv)
const args = process.argv.slice(2)
/*
[
  'C:\\Program Files (x86)\\nodejs\\node.exe',
  'D:\\aadesh imp files\\web development\\JavaScript\\nodejs\\node.js'
]
print this 2nd same but 1 add

for(arg of args){
    console.log(`hi ${arg}`)            //print in form of array
}

/*

//node node.js hello hi how
hi hello
hi hi
hi how

*/

//////////////////////////////////////////////////////make within file(file system)//////////////////////////////////////////////////////

const fs = require('fs');
// console.log(fs);

/*
fs.mkdir('dogs',{ recursive: true } , (err) => {
    console.log('zhfggdfyg')        //print after execution
    if (err) throw err;
})
*/

// console.log('zhfggdfyg')        //print before above  execution
//create dogs along with it in parent folder
//fs.mkdirSync('cats')//makes also cats

const folder = process.argv[2] || 'Project'
// try{
    fs.mkdirSync(folder);
    fs.writeFileSync(`D:\aadesh imp files\web development\JavaScript\nodejs/${folder}/index.html`);
    fs.writeFileSync(`D:\aadesh imp files\web development\JavaScript\nodejs/${folder}/style.css`);
    fs.writeFileSync(`D:\aadesh imp files\web development\JavaScript\nodejs/${folder}/app.js`);
/*}
catch(e) {
    console.log('som went wrong')
}*/