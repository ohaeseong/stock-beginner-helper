import NewsItemList from 'components/organisms/NewsItemList';
import { requestAutoCompleteInfo } from 'libs/api/repository';
import useRequest from 'libs/hooks/useRequest';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const NewsTemplateWrap  = styled.div`
    width: 75%;
    min-height: 30rem;
    /* margin-bottom: 5rem; */
    padding: 1rem;
`;

type Props = {
    symbol: string;
}

function NewsTemplate({ symbol }: Props) {
    const [onRequestGetQuotes, autoInfoData, , ] = useRequest(requestAutoCompleteInfo);
    const [newsFeeds, setNewsFeeds] = useState([]);


    useEffect(() => {
        if (symbol) {
            console.log(symbol);
            
            const req = {
                q: symbol,
            };
    
            onRequestGetQuotes(req);
        }
    }, [symbol]);

    useEffect(() => {
        if (autoInfoData) {
            setNewsFeeds(autoInfoData.data.news);
        }
    }, [autoInfoData]);



    return (
        <NewsTemplateWrap>
            <NewsItemList news={newsFeeds} />
        </NewsTemplateWrap>
    );
}

export default NewsTemplate;