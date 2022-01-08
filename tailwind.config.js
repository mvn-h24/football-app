const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'apps/web-app/pages/**/*.{ts,tsx}'),
    join(__dirname, 'libs/app/ui/src/lib/**/*.{ts,tsx}'),
  ],
  plugins: [require('@tailwindcss/typography')],
};
