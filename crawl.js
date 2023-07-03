const { JSDOM } = require("jsdom");

async function  crawlPage(currURL){
  console.log(`ajkdk :${currURL}`)
  const resp=await fetch(currURL)
  console.log(resp.text())
}
function getURLsFromHTML(htmlBody, baseURL) {
  const urls = [];
  const dom = new JSDOM(htmlBody);
  const linkElements = dom.window.document.querySelectorAll("a");
  for (const ele of linkElements){
    if ( ele.href.slice(0,1)==='/'){
      urls.push(`${baseURL}${ele.href}`)
    }else{

      urls.push(ele.href)
    }
  }

  return urls;
}

function normalizeURL(stringUrl) {
  const urlObj = new URL(stringUrl);

  const newStingURL = `${urlObj.hostname}${urlObj.pathname}`;
  if (newStingURL.length > 0 && newStingURL.slice(-1) === "/") {
    return newStingURL.slice(0, -1);
  }
  return newStingURL;
}

module.exports = {
  normalizeURL,
  getURLsFromHTML,
  crawlPage
};
