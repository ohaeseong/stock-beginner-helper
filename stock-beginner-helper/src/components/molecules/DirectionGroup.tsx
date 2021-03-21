import React from 'react';
import styled from 'styled-components';

const DirectionGroupWrap = styled.div`
    width: 100%;
    border: 1px solid black;
`;

type Props = {
    data: any;
}

function DirectionGroup({ data }: Props) {
    console.log(data);


    
    return (
        <DirectionGroupWrap></DirectionGroupWrap>
    );
}

export default DirectionGroup;