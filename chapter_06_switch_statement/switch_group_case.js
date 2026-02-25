browser = "chrome";

switch (browser) {
    case "chrome":
    case "edge":
    case "brave":
    case "opera":
        console.log("Chromium based browser");
        break;
    case "firefox":
        console.log("Mozilla based browser");
        break;
    default:
        console.log("Browser not found");
}