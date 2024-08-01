const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Thêm các đường dẫn đến các tệp nguồn của bạn
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
