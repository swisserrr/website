/**
 *
 * Asynchronously loads the component for MediaCoverage
 *
 */

import loadable from '../../utils/loadable';

export default loadable(() => import('./index'));
