const withPlugins = require('next-compose-plugins');
const { withGoogleFonts } = require('nextjs-google-fonts');

const today = new Date();
const year = today.getFullYear();
module.exports = withPlugins(
  [
    [
      withGoogleFonts,
      {
        googleFonts: {
          fonts: [
            'https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap',
          ],
        },
      },
    ],
  ],
  {
    target: 'serverless',
    images: {
      disableStaticImages: true,
    },
    env: {
      year: year,
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  }
);
