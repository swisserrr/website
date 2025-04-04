/**
 *
 * Asynchronously loads the component for PlanCard
 *
 */

import loadable from '../../utils/loadable';

export default loadable(() => import('./index'));
