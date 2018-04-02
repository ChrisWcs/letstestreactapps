import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({numbers}) => (
    <h1 data-testid="total">{numbers.reduce( (acc, x) => acc + x )}</h1>
);

Sum.propTypes = {
    numbers: PropTypes.array
}

export default Sum;