const{normalizeURL , getURLsFromHTML}=require("./crawl.js")

const {test,expect}=require("@jest/globals")
test("normalizeURL",()=>{

    const input="https://blog.boot.dev/path";
    const output =normalizeURL(input);
    const expected='blog.boot.dev/path';
    expect(expected).toEqual(output)
})
test("Trimming Slash",()=>{

    const input="https://blog.boot.dev/path/";
    const output =normalizeURL(input);
    const expected='blog.boot.dev/path';
    expect(output).toEqual(expected)
})
test("Lower Casing",()=>{

    const input="https://BLOG.boot.dev/path";
    const output =normalizeURL(input);
    const expected='blog.boot.dev/path';
    expect(output).toEqual(expected)
})
test ('getURL Absolute ',()=>{
    const input= `
    <html>
        <body>
            <a href="https://blog.boot.dev">
            Boot.dev blog
            </a>
        </body>
     </html>
    `
    const inputBaseURL="https://blog.boot.dev"
    const output =getURLsFromHTML(input,inputBaseURL);
    const expected=["https://blog.boot.dev/"];
    expect(output).toEqual(expected)
})

test ('getURL relative ',()=>{
    const input= `
    <html>
        <body>
            <a href="/path/">
            Boot.dev blog
            </a>
        </body>
     </html>
    `
    const inputBaseURL="https://blog.boot.dev"
    const output =getURLsFromHTML(input,inputBaseURL);
    const expected=["https://blog.boot.dev/path/"];
    expect(output).toEqual(expected)
})