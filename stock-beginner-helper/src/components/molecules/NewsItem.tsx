import { useCallback } from 'react';
import styled from 'styled-components'; 
// import dayjs from 'dayjs';
import { color } from 'styles/color';
// import { requestGetNewsDetail } from 'libs/api/repository';
import { NewsItemType } from 'types';
// import useRequest from 'libs/hooks/useRequest';
// import { Router } from 'react-router';

const NewsItemTemplate = styled.div`
    display: flex;
    flex-direction: column;
    width: 20rem;
    height: 6rem;
    overflow: hidden;

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

// const Body = styled.div`
//     width: 100%;
//     margin-top: 0.5rem;
//     font-size: 0.8rem;
//     color: ${color.light_gray};

// `;

type Props = {
    newsItem: NewsItemType;
}

function NewsItem({ newsItem }: Props) {
    const { link, publisher, title } = newsItem;

    const linkToNewsPage = useCallback(() => {
        window.open(link, '_blank', 'top=500,left=200,frame=false,nodeIntegration=no');
    }, [link]);

    return (
        <NewsItemTemplate onClick={linkToNewsPage}>
            <Title>{publisher}</Title>
            <Head>{title}</Head>
            {/* {date ? date.format('YYYY-MM-DD') : <></>} */}
        </NewsItemTemplate>
    );
}

export default NewsItem;
