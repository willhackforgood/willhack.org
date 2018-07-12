import React from 'react';
import styled from 'styled-components';

export const CallToAction = ({ className, onChange, onSubmit }) => (
    <form onSubmit={onSubmit} className={className}>
        <input
            onChange={onChange}
            type="email"
            placeholder="Enter your email to learn more"
            spellCheck={false}
        />
        <button type="submit">holla</button>
    </form>
);

export default styled(CallToAction)`
position: absolute;
top: 16rem;
z-index: 1;
box-shadow: 0 .25rem .5rem rgba(0,0,0,0.16);
left: 50%;
transform: translateX(-50%);
white-space: nowrap;
button {
    background-color: darkslateblue;
    color: white;
    cursor: pointer;
    font-weight: bold;
    font-size: 0.75rem;
    padding: .375rem 1rem;
    border: none;
    border-radius: 0 .25rem .25rem 0;
}
input {
    color: darkslateblue;
    border: none;
    font-size: 0.75rem;
    font-weight: bold;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem 0 0 0.25rem;
    min-width: 11rem;
    ::placeholder {
        color: deeppink;
        font-weight: 200;
    }
}
`;
