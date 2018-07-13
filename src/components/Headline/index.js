import React from 'react';
import styled from 'styled-components';

export const Headline = ({className}) => (
    <div className={className}>
        <h2>You are superhuman.</h2>
        <div>Use your powers for GOOD.</div>
    </div>
);

export default styled(Headline)`
margin: 3rem 0;
color: deeppink;
font-weight: bold;
text-align: center;
font-size: 1rem;
h2 {
    font-size: 2rem;
    margin: 0;
}
`;
