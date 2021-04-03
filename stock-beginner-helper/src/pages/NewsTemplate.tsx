import NewsItemList from 'components/organisms/NewsItemList';
import { requestAutoCompleteInfo } from 'libs/api/repository';
import useRequest from 'libs/hooks/useRequest';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const NewsTemplateWrap  = styled.div`
    width: 75%;
    min-height: 30rem;
    margin-bottom: 10rem;
    padding: 1rem;

    border: 1px solid white;
`;

type Props = {
    symbol: string;
}

function NewsTemplate({ symbol }: Props) {
    const [onRequestGetQuotes, autoInfoData, , ] = useRequest(requestAutoCompleteInfo);
    const [newsFeeds, setNewsFeeds] = useState([]);


    useEffect(() => {
        if (symbol) {

            const req = {
                q: symbol,
            };
    
            onRequestGetQuotes(req);
        }

        if (autoInfoData) {
            setNewsFeeds(autoInfoData.data.news);
        }
    }, [symbol]);



    return (
        <NewsTemplateWrap>
            <NewsItemList news={newsFeeds} />
        </NewsTemplateWrap>
    );
}

export default NewsTemplate;