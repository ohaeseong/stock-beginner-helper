import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components'; 
import dayjs from 'dayjs';
import { color } from 'styles/color';
import { requestGetNewsDetail } from 'libs/api/repository';
import { NewsItemType } from 'types';
import useRequest from 'libs/hooks/useRequest';

const NewsItemTemplate = styled.div`
    display: flex;
    flex-direction: column;
    width: 20rem;
    height: 6rem;
    overflow: hidden;

    /* border: 1px solid white; */

    cursor: pointer;
`;

const Title = styled.div`
    width: 100%;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
    color: ${color.light_gray};
`;

const Head = styled.div`
    width: 100%;
    font-size: 0.8rem;
    font-weight: 800;
    color: white;
`;

const Body = styled.div`
    width: 100%;
    margin-top: 0.5rem;
    font-size: 0.8rem;
    color: ${color.light_gray};

`;

type Props = {
    newsItem: NewsItemType;
}

function NewsItem({ newsItem }: Props) {
    const { link, publisher, title, providerPublishTime, uuid } = newsItem;
    const [contents, setContents] = useState('');
    const [onRequestGetNews, newsData, , ] = useRequest(requestGetNewsDetail);
    const [date, setDate] = useState() as any;

    // const linkToNewsPage = useCallback(() => {

    // }, []);
    
    useEffect(() => {
        if (newsItem) {
            console.log(providerPublishTime);
            const date = new Date(providerPublishTime);
            console.log(date);
        }
    }, [newsItem]);

    return (
        <NewsItemTemplate>
            <Title>{publisher}</Title>
            <Head>{title}</Head>
            {/* {date ? date.format('YYYY-MM-DD') : <></>} */}
        </NewsItemTemplate>
    );
}

export default NewsItem;
