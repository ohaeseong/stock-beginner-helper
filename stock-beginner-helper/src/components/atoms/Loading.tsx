import React from 'react';
import styled from 'styled-components';
import loadingImagePath from 'public/images/loading.gif';

const LoadingWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const LoadingImage = styled.img`
    width: 8rem;
    height: 8rem;
`;

function Loading() {
    return (
        <LoadingWrap>
            <LoadingImage src={loadingImagePath} alt="loading.gif" />
        </LoadingWrap>
    );
}

export default Loading;