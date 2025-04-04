/**
 *
 * Asynchronously loads the component for CarouselContainer
 *
 */

import loadable from '../../utils/loadable';

export default loadable(() => import('./index'));
