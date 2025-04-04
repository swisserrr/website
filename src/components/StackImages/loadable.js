/**
 *
 * Asynchronously loads the component for StackImages
 *
 */

import loadable from '../../utils/loadable';

export default loadable(() => import('./index'));
