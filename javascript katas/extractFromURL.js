/*
Extract the domain name from a URL:
https://www.codewars.com/kata/514a024011ea4fb54200004b/javascript

Description:
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"


This kata really isn't very practical.  It was fun using indexOf and replace, but this
just seems overall like a bad idea to use in the realworld.  I can see this as being a 
bad 'hack' job right away.  what happens when the url is something like docs.google.com
this would fail.  There are too many possible subdomains for this to work. That being
said, it was still something to do that wasnt taxing
*/

// =============== submitted code ================= \\
// function domainName(url) {
//     if (url.indexOf("http://") === 0) {
//         url = url.replace("http://", '');
//     } else {
//         url = url.replace("https://", '');
//     }
//     if (url.indexOf("www." === 0)) {
//         url = url.replace("www.", '')
//     }
//     return url.substring(0, url.indexOf('.'));
// }



//I dont need the if statements since replace will only replace the string if it sees
// what you pass into it, so the if statements are not necessary
//This works just the same and looks cleaner
// =========== Refactored ============ \\
function domainName(url) {
    url = url.replace("http://", '');
    url = url.replace("https://", '');
    url = url.replace("www.", '')
    return url.substring(0, url.indexOf('.'));
}

// I would need an index of at the end to remove everything after a '.' so I might
// as well just rewrite using indexOf and replace instead of slice.
// if(url[4] === 's') {
//     url = url.slice(8, url.length);
// } else {
//     url = url.slice(7, url.length);
// }
// let www = url.slice(0, 4);
// if (www === "www.") {
//     url = url.slice(4, url.length);
// }

console.log(domainName("http://github.com/carbonfive/raygun"), "github");
console.log(domainName("http://www.zombie-bites.com"), "zombie-bites");
console.log(domainName("https://www.cnet.com"), "cnet");
console.log(domainName("www.xakep.ru"), "xakep");
console.log(domainName("https://youtube.com"), "youtube");