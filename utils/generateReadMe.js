//returns both license and link

function renderLicenseBadge(license) {
  if(license == "Apache"){
    license = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license == "Creative Commons"){
    license = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
  } else if(license == "MIT"){
    license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license == "Mozilla"){
    license = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license == "Open"){
    license = "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)"
  } else {
    license = "";
  }

  return license
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = renderLicenseBadge(data.license);

  return `# ${data.title}

  ## Description:
  ==================

  ${data.description}

  ##### Table of Contents  
  1. [Usage](#Usage)  
  2. [Instructions](#Instructions) 
  3. [Issues](#Issues) 
  4. [License](#License) 

  ## Usage
  ==================

  ${data.use}

  ## Instructions
  ==================

  ${data.instructions}

  ## Issues
  ==================

  ${data.troubleshoot}

  ## License
  ==================

  ${data.license}

  

  ##### Made by ${data.username}

  Contact at ${data.email}
`;
}

module.exports = generateMarkdown;
