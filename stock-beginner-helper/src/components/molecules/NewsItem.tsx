import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components'; 
import dayjs from 'dayjs';
import { color } from 'styles/color';
import { NewsItemType } from 'types';

const NewsItemTemplate = styled.div`
    display: flex;
    flex-direction: column;
    width: 20rem;
    min-height: 6rem;

    border: 1px solid white;

    cursor: pointer;
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
    const { link, publisher, title, providerPublishTime } = newsItem;
    const [date, setDate] = useState() as any;

    const linkToNewsPage = useCallback(() => {

    }, []);
    
    useEffect(() => {
        if (newsItem) {
            console.log(providerPublishTime);
            
            setDate(dayjs(1609771742));
        }
    }, [newsItem, providerPublishTime]);
    return (
        <NewsItemTemplate>
            <Head>[News] {title}</Head>
            <Body>{publisher}</Body>
            {date ? date.format('YYYY-MM-DD') : <></>}
        </NewsItemTemplate>
    );
}

export default NewsItem;
