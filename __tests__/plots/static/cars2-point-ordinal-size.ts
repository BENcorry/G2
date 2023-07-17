import { G2Spec } from '../../../src';

// @todo Fix category item align in @antv/gui.
export function cars2PointOrdinalSize(): G2Spec {
  return {
    type: 'point',
    padding: 'auto',
    data: {
      type: 'fetch',
      value: 'data/cars2.csv',
    },
    encode: {
      y: 'Miles_per_Gallon',
      x: 'Horsepower',
      color: 'Origin',
      size: 'Origin',
      shape: 'point',
    },
    scale: { x: { nice: true }, y: { nice: true } },
  };
}