/**
 *
 * Asynchronously loads the component for UserStoryCard
 *
 */

import loadable from '../../utils/loadable';

export default loadable(() => import('./index'));
