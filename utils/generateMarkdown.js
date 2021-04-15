function renderLicense(license) {
  
  // const licensesList = ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'];
  if(license == "MIT"){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }else if(license == "APACHE 2.0"){
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }else if(license == "GPL 3.0"){
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }else if(license == "BSD 3"){
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  }else if(license == "None"){
    return false;
  }
}

function renderLicenseLink(license) {
  if(license == "MIT"){
    return 'https://opensource.org/licenses/MIT';
  }else if(license == "APACHE 2.0"){
    return 'https://opensource.org/licenses/Apache-2.0';
  }else if(license == "GPL 3.0"){
    return 'https://www.gnu.org/licenses/gpl-3.0';
  }else if(license == "BSD 3"){
    return 'https://opensource.org/licenses/BSD-3-Clause';
  }else if(license == "None"){
    return false;
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let license = renderLicense(data.license);
  let licenseLink = renderLicenseLink(data.license);

let md = `
# ${data.project}

${license}

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Testing](#testing)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [Author](#author)
7. [License](#license)

<a name="description"></a>
## Description of the project:
${data.description}

<a name="installation"></a>
## Installation instructions
${data.install}

<a name="testing"></a>
## Testing
${data.test}

<a name="usage"></a>
## How to use it
${data.usage}

<a name="contributing"></a>
## How to contribute
${data.contribute}

<a name="author"></a>
## Author's Links
<${data.email}>

[GitHub](https://github.com/${data.gitHuB})

`;
if(licenseLink){
licenseTxt = `
<a name="license"></a>
## License :
${licenseLink}
`;
}
  return md.concat(licenseTxt);
  
}

module.exports = { generateMarkdown };
