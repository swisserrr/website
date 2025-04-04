/**
 *
 * Asynchronously loads the component for BlogsCard
 *
 */

import loadable from '../../utils/loadable';

export default loadable(() => import('./index'));
