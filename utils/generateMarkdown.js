// Function to return a license badge
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// Function to return a license link
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  return `[License](https://opensource.org/licenses/${license})`;
}

// Function to return the license section
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License
This project is licensed under the ${license} license.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, you can reach me at:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})
  `;
}

export default generateMarkdown;
