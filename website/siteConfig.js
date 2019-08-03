
// List of projects/orgs using your project for the users page.
const users = [
];  
const siteConfig = {
  title: 'Exploit Guide', // Title for your website.
  tagline: 'Security Blog',
  url: 'https://securityheaven.ml', // Your website URL
  baseUrl: '/', // Base URL for your project */
  

  // Used for publishing and more
  projectName: 'securityblog',
  organizationName: 'Siddhant',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'intro', label: 'Web Application Security'},
    {doc: 'networksecurity/socialengg', label: 'Network Security'},
    {doc: 'Cheatsheet/authentication', label: 'Cheat Sheets'},
    {doc: 'read', label: 'Reading Material'},
    {doc: 'aboutme', label: 'About Me'}
    


  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/favicon.ico',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: 'black',
    secondaryColor: '#051522',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Siddhanth`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],


  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

    editUrl: 'https://github.com/siddhanthdwivedi/exploitGuide/tree/master/docs/',
  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
    repoUrl: 'https://github.com/siddhanthdwivedi/exploitGuide/tree/master',
 
};

module.exports = siteConfig;
