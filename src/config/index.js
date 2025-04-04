//import configProd from './index.prodnew';
import configProd from './index.production';
// import configProd from './index.staging';

let config = configProd;

if (process.env.NODE_ENV === 'development') {
  config = configProd;
} else {
  config = configProd;
}

export default config;
