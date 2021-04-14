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
  }else {
    return false;
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data, writeToFile) {

  let license = renderLicense(data.license);
  const marky = `
   # ${data.project}

   # License : 
   ${license}
  `;
  writeToFile(data.project + '.md', marky);
}

module.exports = { generateMarkdown };
