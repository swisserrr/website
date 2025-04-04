/**
 *
 * Asynchronously loads the component for BlogListing
 *
 */

import loadable from '../../../utils/loadable';

export default loadable(() => import('./index'));
