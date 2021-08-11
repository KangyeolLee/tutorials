import React from 'react';
import { useHistory } from '@/core/Router';
import * as S from './styles';
import Card from '@/components/Card';
import CardWrapper from '@/components/CardWrapper';

const Main = () => {
  const history = useHistory();
  console.log(history);

  return (
    <S.Main>
      <h1 className="product-title">히트상품 (Props: Grid Column 4)</h1>
      <CardWrapper col={4}>
        <Card bgColor="primary" />
        <Card bgColor="primary" />
        <Card bgColor="primary" />
        <Card bgColor="primary" />
        <Card bgColor="primary" />
      </CardWrapper>

      <h1 className="product-title">베스트상품 (Props: Grid Column 3)</h1>
      <CardWrapper col={3}>
        <Card bgColor="error" />
        <Card bgColor="error" />
        <Card bgColor="error" />
        <Card bgColor="error" />
        <Card bgColor="error" />
      </CardWrapper>
    </S.Main>
  );
};

export default Main;
