import React, { useState } from 'react';
import * as S from './styles';
import MyPageAside from '@/components/MyPage/MyPageAside';
import Address from '@/components/Address';
import OrderHistory from '@/components/MyPage/OrderHistory';
import { MY_PAGE_NAVIGATIONS } from '@/contstants';
import { Redirect } from '@/lib/Router';
import { useRecoilState } from 'recoil';
import { userState } from '@/recoil/user';
import MyReviews from '@/components/MyPage/MyReviews';
import MyQuestions from '@/components/MyPage/MyQuestions';
import MyCoupon from '@/components/MyPage/MyCoupon';

const renderBody = (contentValue: string) => {
  // TODO: router Switch 사용 고민
  if (contentValue === 'orderHistroy') return <OrderHistory />;
  if (contentValue === 'coupon') return <MyCoupon />;
  if (contentValue === 'inqurey') return <MyQuestions />;
  if (contentValue === 'review') return <MyReviews />;

  return <div>404</div>;
};

const MyPage = () => {
  const [contentValue, setContentValue] = useState('orderHistroy');

  const contentName = MY_PAGE_NAVIGATIONS.find(
    (nav) => nav.value === contentValue
  )?.name;

  const [user] = useRecoilState(userState);
  if (!user) return <Redirect to="/" />;

  return (
    <>
      <S.MyPagePointBackground />
      <S.MyPageContainer className="container">
        <S.Mypage>
          <MyPageAside
            contentValue={contentValue}
            setContentValue={setContentValue}
          />
          <S.MyPageBody>
            <S.MyPageTitle level={1}>{contentName}</S.MyPageTitle>
            {renderBody(contentValue)}
          </S.MyPageBody>
        </S.Mypage>
      </S.MyPageContainer>
    </>
  );
};

export default MyPage;
