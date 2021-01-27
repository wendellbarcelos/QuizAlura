import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
  width: 100%;
  max-width: 350px;
  height: 40px;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  font-size: 15px;
  padding:5px;
  margin-bottom: 35px;
  color: #fff;
  transition: 300ms;


  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`;

export default function Input({ onChange, placeholder, ...props }) {
    return (
        <div>
            <InputBase
                placeholder={placeholder}
                onChange={onChange}
                {...props} 
            />
        </div>
    )
}

Input.defaultProps = {
    value: '',
};

Input.protoTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};