/**
 *
 * Asynchronously loads the component for Mohtv
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
