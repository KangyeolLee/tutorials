import React, { useEffect } from 'react';
import * as S from './styles';
import Card from '@/components/Card';
import Banner from '@/components/Banner';
import {
  useGetRecommandProducts,
  useGetBestProducts,
  useGetRecentProducts,
} from '@/hooks/queries/product';
import { IProduct } from '@/types';
import { useGetBookmarkIds } from '@/hooks/queries/bookmark';
import LoadingCards from '@/components/Skeleton/LoadingCards';
import { useRecoilState } from 'recoil';
import { userState } from '@/recoil/user';
import PromotionCard from '@/components/PromotionCard';
import { BG_COLOR } from '@/components/Card/Card';

export interface IProductQuery {
  data: IProduct[] | undefined;
  isLoading: boolean;
}

const Main = () => {
  const recommandQuery = useGetRecommandProducts();
  const bestQuery = useGetBestProducts();
  const recentQuery = useGetRecentProducts();
  const [user] = useRecoilState(userState);
  const { data: bookmarkIdList, remove } = useGetBookmarkIds(!!user);

  useEffect(() => {
    if (!user) {
      remove();
    }
  }, [user, remove]);

  const renderProducts = (
    qurey: IProductQuery,
    bgColor: BG_COLOR = 'primary'
  ) => {
    const { data, isLoading } = qurey;
    if (isLoading || !data) {
      return <div></div>;
    }
    return data.map((product: IProduct) => (
      <Card
        key={product.id}
        linkId={product.id}
        discount={product.discount}
        bgColor={bgColor}
        src={product.productImage[0].url}
        price={product.price}
        title={product.title}
        bookmarkList={bookmarkIdList}
      />
    ));
  };

  return (
    <>
      <Banner />
      <S.Main className="container">
        <section>
          <h1 className="product-title">새로 나왔어요!</h1>
          <LoadingCards
            col={4}
            skeletonNum={4}
            showSkeleton={recentQuery.isLoading || recentQuery.isFetching}
            component={renderProducts(recentQuery, 'new')}
          />
        </section>
        <section>
          <h1 className="product-title">선물하기 딱 좋은 !</h1>
          <PromotionCard />
        </section>
        <section>
          <h1 className="product-title">이거는 어때요?</h1>
          <LoadingCards
            col={4}
            skeletonNum={4}
            showSkeleton={recommandQuery.isLoading || recommandQuery.isFetching}
            component={renderProducts(recommandQuery)}
          />
        </section>
        <section>
          <h1 className="product-title">제일 잘 나가요!</h1>
          <LoadingCards
            col={4}
            skeletonNum={4}
            showSkeleton={bestQuery.isLoading || bestQuery.isFetching}
            component={renderProducts(bestQuery, 'best')}
          />
        </section>
      </S.Main>
    </>
  );
};

export default Main;
