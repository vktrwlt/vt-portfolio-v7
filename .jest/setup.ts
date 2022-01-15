import '@testing-library/jest-dom/extend-expect';

// https://github.com/vercel/next.js/issues/9761
import { setConfig } from 'next/config';
import generateNextConfig from '../next.config';
// or
// import * as generateNextConfig from "./next.config"

// Make sure you can use "publicRuntimeConfig" within tests
setConfig({
  publicRuntimeConfig: generateNextConfig('', {}).publicRuntimeConfig,
});
