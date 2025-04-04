/**
 *
 * Asynchronously loads the component for HomePageImage
 *
 */

import loadable from '../../utils/loadable';

export default loadable(() => import('./index'));
