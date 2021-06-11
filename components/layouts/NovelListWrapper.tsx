import React, { VFC } from "react";
import NovelList from "./NovelList";

type Novel = {
  num: number;
  title: string;
};

interface Props {
  list: Novel[];
}

const NovelListWrapper: VFC<Props> = ({ list }) => {
  return (
    <section>
      <h1 className="mt-14 mb-2 text-2xl font-bold">회차 목록</h1>
      <article className="divide-y divide-light-gray-500">
        {list.map((novel) => (
          <NovelList num={novel.num} title={novel.title} />
        ))}
      </article>
    </section>
  );
};

export default NovelListWrapper;
