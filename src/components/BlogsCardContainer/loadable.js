/**
 *
 * Asynchronously loads the component for BlogsCardContainer
 *
 */

import loadable from '../../utils/loadable';

export default loadable(() => import('./index'));
