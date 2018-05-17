import React from 'react';

const colors = ['#00d4ff', '#0af', '#007fff', '#05f', '#50f', '#7f00ff', '#a0f', '#d400ff'];

const letters = [
  {
    paths: ['M70 0 V 140 A 40 40 0 0 1 30 180 H 0'],
    width: 90,
    height: 200,
    overlap: 0,
    stroke: '#00d4ff',
  },
  {
    paths: ['M70 80 A 50 50 0 1 1 70 180 A 50 50 0 1 1 70 80'],
    width: 140,
    height: 200,
    overlap: 12,
    stroke: '#0af',
  },
  {
    paths: ['M20 200 V130 c 1 -33.14 26.86 -50 50 -50 a 50 50 0 0 1 50 50 v 200', 'M20 200 V60'],
    width: 140,
    height: 200,
    overlap: 28,
    stroke: '#007fff',
  },
  {
    paths: ['M80 180 H70 a50 50 0 1 1 0 -100 c33.14 0 50 26.86 50 50 V 200'],
    width: 140,
    height: 200,
    overlap: 28,
    stroke: '#05f',
  },
  {
    paths: ['M60 0 V 141 A 40 40 0 0 1 20 181 H 0', 'M60 70 H 0'],
    width: 80,
    height: 200,
    overlap: 18,
    stroke: '#002bff',
  },
  {
    paths: ['M20 200 V 120 a 40 40 0 0 1 80 0 V 200', 'M20 200 V 0'],
    width: 120,
    height: 200,
    overlap: 15,
    stroke: '#00f',
  },
  {
    paths: ['M80 180 H70 a50 50 0 1 1 0 -100 c33.14 0 50 26.86 50 50 V 200'],
    width: 140,
    height: 200,
    overlap: 25,
    stroke: '#2a00ff',
  },
  {
    paths: ['M20 200 V130 c 1 -33.14 26.86 -50 50 -50 a 50 50 0 0 1 50 50 v 200', 'M20 200 V60'],
    width: 140,
    height: 200,
    overlap: 30,
    stroke: '#50f',
  },
];

const letterComponents = [];

letters.forEach((l, i) => {
  const style = {
    width: l.width,
    height: l.height,
    marginLeft: -1 * l.overlap,
  };

  const paths = [];
  l.paths.forEach((p, j) => {
    const key = `path-${i}-${j}`;
    paths.push(<path className="fill in" strokeWidth="38" d={p} key={key} />);
  });

  const viewbox = `0 0 ${l.width} ${l.height}`;
  letterComponents.push(
    <div style={style} className="letter" key={l.stroke}>
      <svg viewBox={viewbox}>
        <g fill="none" fillRule="evenodd" stroke={colors[i]}>
          {paths}
        </g>
      </svg>
    </div>,
  );
});

export default letterComponents;
export { colors };
