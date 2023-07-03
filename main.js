const {crawlPage}=require("./crawl")
function main(){
    let args= process.argv
    if(process.argv.length<3){
        console.log("no website provide")
        process.exit
        
    }
    for(const arg of process.argv){
        console.log(">>>"+arg);
    }
    crawlPage(args[2])
    console.log("starting  "+args[2])
}
main();