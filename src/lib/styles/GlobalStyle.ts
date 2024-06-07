import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
  /* Color */
  --color-gray-50: #f9fafb;
  --color-gray-100: #f5f6f7;
  --color-gray-200: #e9ebed;
  --color-gray-300: #dbdee2;
  --color-gray-400: #ced7da;
  --color-gray-500: #aab1bc;
  --color-gray-600: #8e94a0;
  --color-gray-700: #6f7785;
  --color-gray-800: #404a5c;
  --color-gray-900: #171e36;
  --color-white: #f5f5f5;
  --color-black: #111111;
  --color-red: #f21724;
  /* Font Size */
  --font-base: 10px;
  --font-2xs: 1rem;
  --font-xs: 1.2rem;
  --font-sm: 1.4rem;
  --font-md: 1.6rem;
  --font-lg: 1.8rem;
  --font-xl: 2rem;
  --font-2xl: 2.4rem;
  /* Font Weight */
  --weight-light: 300;
  --weight-regular: 400;
  --weight-medium: 500;
  --weight-bold: 700;
  /* Line Height */
  --leading-none: 1;
  --leading-normal: 1.5;
  --leading-loose: 1.6;
  --leading-looser: 1.8;
  /* Letter Spacing */
  --tracking-tighter: -0.25px;
  --tracking-tight: -0.15px;
  --tracking-normal: 0;
  /* Space */
  --space-none: 0;
  --space-4xs: 2px;
  --space-3xs: 4px;
  --space-2xs: 8px;
  --space-xs: 12px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 30px;
  --space-xl: 40px;
  --space-2xl: 64px;
  --space-3xl: 80px;
  --space-4xl: 100px;
  /* Border Radius */
  --radius-none: 0;
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-md: 16px;
  --radius-xl: 20px;
  --radius-full: 50%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: var(--font-base);
}

body {
  font-size: var(--font-sm);
  font-weight: var(--weight-regular);
  line-height: var(--leading-normal);
  letter-spacing: var(--tracking-tighter);
  color: var(--color-black);
  background-color: var(--color-white);
  max-width: 100vw;
  overflow-x: hidden;
}

input,
label {
  font-size: var(--font-sm);
  font-weight: var(--weight-regular);
}

button {
  font-size: var(--font-md);
  font-weight: var(--weight-medium);
}

h1,
h2,
h3,
h4,
h5 {
  font-weight: var(--weight-regular);
  line-height: var(--leading-tightest);
}

h1 {
  font-size: var(--font-xl);
}

h2 {
  font-size: var(--font-lg);
}

h3 {
  font-size: var(--font-md);
}
`;

export default GlobalStyle;
