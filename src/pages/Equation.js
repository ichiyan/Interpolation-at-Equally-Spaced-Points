import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

const Equation = ({ math }) => {
  const equationStyle = {
    display: 'inline-block',
  };

  return (
    <span style={equationStyle}>
      <InlineMath math={math} />
    </span>
  );
};

export default Equation;
