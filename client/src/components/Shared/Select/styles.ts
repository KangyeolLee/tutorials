import styled from 'styled-components';

export const Select = styled.div`
  position: relative;
  select {
    outline: none;
    padding: 1.2rem 1.2rem;
    width: 100%;
    appearance: none;
    border: 1px solid ${({ theme }) => theme.color['border-gray']};
    border-radius: 0.8rem;
  }
  &:after {
    content: '▼';
    font-size: 1rem;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    position: absolute;
    background-color: 'red';
  }
`;
