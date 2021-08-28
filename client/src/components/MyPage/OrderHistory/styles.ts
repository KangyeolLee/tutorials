import styled, { css } from 'styled-components';

interface IOrderStatus {
  isSelected?: boolean;
}

export const Container = css`
  background-color: ${({ theme }) => theme.color['body']};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 0.8rem;
  padding: 3.6rem;
`;

export const OrerHistory = styled.div``;
export const OrderHistoryHeader = styled.header`
  ${Container}
`;

export const OrderPeriodWrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    ${({ theme }) => theme.fontSize.m};
    ${({ theme }) => theme.fontWeight.m};
    color: ${({ theme }) => theme.color['text-color']};
    margin-left: 1rem;
    &.selected {
      background-color: ${({ theme }) => theme.color.primary};
      border: 1px solid ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color['off-white']};
    }
  }
`;

export const OrderStatusContainer = styled.div`
  display: flex;
  padding: 2.5rem 0;
  border-radius: 0.8rem;
`;

export const OrderStatusWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const OrderStatusName = styled.span`
  display: block;
  ${({ theme }) => theme.fontWeight.l};
  ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color['text-color']};
  padding: 0.8rem;
`;

export const OrderStatus = styled.div<IOrderStatus>`
  width: 5rem;
  height: 5rem;
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.fontWeight.l};
  ${({ theme }) => theme.fontSize.m};
  ${(props) =>
    props.isSelected
      ? css`
          background-color: ${({ theme }) => theme.color.primary};
          color: ${({ theme }) => theme.color['off-white']};
        `
      : css`
          background-color: ${({ theme }) => theme.color.label};
          color: ${({ theme }) => theme.color['reverse-text-color']};
        `}
`;

export const OrderHistoryBody = styled.div`
  ${Container}
  margin: 2rem auto 3rem auto;
  width: 100%;
  height: 100%;
`;
