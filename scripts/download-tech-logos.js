const fs = require('fs');
const path = require('path');
const https = require('https');

const LOGOS_DIR = path.join(__dirname, '../public/logos/tech');

// Create the directory if it doesn't exist
if (!fs.existsSync(LOGOS_DIR)) {
  fs.mkdirSync(LOGOS_DIR, { recursive: true });
}

const techPartners = [
  {
    name: 'splunk',
    url: 'https://www.splunk.com/content/dam/splunk2/images/logos/splunk-logo.svg'
  },
  {
    name: 'saviynt',
    url: 'https://www.saviynt.com/wp-content/uploads/2023/05/saviynt-logo-white.svg'
  },
  {
    name: 'sailpoint',
    url: 'https://www.sailpoint.com/wp-content/uploads/2020/09/sailpoint_logo_primary_white.svg'
  },
  {
    name: 'cyberark',
    url: 'https://www.cyberark.com/wp-content/uploads/2023/01/cyberark-logo-white.svg'
  },
  {
    name: 'beyondtrust',
    url: 'https://www.beyondtrust.com/assets/images/logos/beyondtrust-logo-white.svg'
  },
  {
    name: 'delinea',
    url: 'https://delinea.com/hubfs/delinea-logo-registered-white.svg'
  },
  {
    name: 'imperva',
    url: 'https://www.imperva.com/wp-content/themes/imperva/assets/images/logo-white.svg'
  },
  {
    name: 'zscaler',
    url: 'https://www.zscaler.com/themes/custom/zscaler/logo.svg'
  },
  {
    name: 'paloalto',
    url: 'https://www.paloaltonetworks.com/content/dam/pan/en_US/images/logos/paloalto/pan-logo-white.svg'
  },
  {
    name: 'cato',
    url: 'https://www.catonetworks.com/wp-content/themes/cato-networks/src/images/logo-white.svg'
  }
];

function downloadLogo(url, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(path.join(LOGOS_DIR, filename));
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        reject(`Failed to download ${url}: ${response.statusCode}`);
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function downloadAllLogos() {
  for (const partner of techPartners) {
    try {
      await downloadLogo(partner.url, `${partner.name}.svg`);
      console.log(`Downloaded ${partner.name} logo`);
    } catch (error) {
      console.error(`Error downloading ${partner.name} logo:`, error);
    }
  }
}

downloadAllLogos();
