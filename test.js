// Opens web browser Google Chrome
describe ("Step 1", function() {
    browser.ignoreSynchronization = true;
    console.log("\n" + "Go to the Home page for my website" + "\n");
    // Opens my personal website
    it ("step 2", function() {
        browser.get("https://tchv.github.io/Taras_Chornyi/");
        console.log("\n" + "Home page open successfully" + "\n");
    });
    // Clicked button and open CV
    it ("Step 3", function(){
        element(by.css(".main > .about > .about-box > .about-link")).click();
        browser.sleep(5000);
        console.log("CV page open successfully" + "\n");
        browser.navigate().back();
        console.log("Browser stop running" + "\n" + "Bye!");
   });
});
