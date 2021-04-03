import NewsItem from 'components/molecules/NewsItem';
import React from 'react';
import styled from 'styled-components';

const NewItemListTemplate = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;

    & > * {
        margin-bottom: 1.8rem;
    }
`;

type Props = {
    news: Array<any>;
}

function NewsItemList({ news }: Props) {
    return (
        <NewItemListTemplate>
            {
                news.map((item) => {
                    return <NewsItem key={item.uuid} newsItem={item} />
                })
            }
        </NewItemListTemplate>
    );
}

export default NewsItemList;
