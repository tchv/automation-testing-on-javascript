describe ("Go to the my website ", function() {
    browser.ignoreSynchronization = true;
    console.log("\n" + "Go to the Home page for my website" + "\n");
    
    it ("Go to the Home page ", function() {
        browser.get("https://tchv.github.io/Taras_Chornyi/");
        console.log("\n" + "Home page open successfully" + "\n");
    });
    
    it ("Go to CV ", function(){
        let pendants = element(by.css(".main > .about > .about-box > .about-link"));
        pendants.click();
        browser.sleep(5000);
        console.log("CV page open successfully" + "\n");
        browser.navigate().back();
        console.log("Browser stop running" + "\n" + "Bye!");
   });
});
