// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let color;

  switch (license) {
      case 'MIT':
          color = 'yellow';
          break;
      case 'Apache_2.0':
          color = 'blue';
          break;
      case 'Boost_1.0':
          color = 'lightblue';
          break;
      case 'BSD_3--Clause':
          color = 'orange';
          break;
      default:
          color = 'lightgrey';
  }
  if (license !== 'None') {
    return `![License](https://img.shields.io/badge/License-${license}-${color}.svg)`;}
return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `* [License](#license)`;
}
return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.`;
}
return '';

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
${renderLicenseLink(data.license)}
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

${renderLicenseSection(data.license)}

## Questions

For any questions, please contact me at [${data.email}](mailto:${data.email}).

GitHub: [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
