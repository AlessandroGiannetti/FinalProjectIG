import {
    BufferGeometry,
    Geometry
} from '../../../src/Three';

import {LineSegmentsGeometry} from './LineSegmentsGeometry';

export class WireframeGeometry2 extends LineSegmentsGeometry {
    isWireframeGeometry2: boolean;

    constructor(geometry: Geometry | BufferGeometry);
}