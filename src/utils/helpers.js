import config from '../config';
import { APIS } from '../constants';

export default class Helpers {
  static getUrl(apiPath) {
    return `${config.API_URL}${APIS.VERSION_URL}${apiPath}`;
  }
}
