// const withMT = require('@material-tailwind/react/utils/withMT');

// module.exports = withMT({
//     content: [
//         './src/**/*.{js,jsx,ts,tsx}', // Thêm các đường dẫn đến các tệp nguồn của bạn
//     ],
//     theme: {
//         extend: {},
//     },
//     plugins: [],
// });

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            tablet: '640px',
            // => @media (min-width: 640px) { ... }

            laptop: '1024px',
            // => @media (min-width: 1024px) { ... }

            desktop: '1280px',
            // => @media (min-width: 1280px) { ... }
        },
        extend: {
            colors: {
                content: '#FF6A6A',
            },
            fontFamily: {
                maamli: ['maamli'],
            },
        },
    },
    plugins: [],
};
