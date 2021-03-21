import styled from 'styled-components';
import { color } from 'styles/color';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
`;

export const CompanyListTemplate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 25rem;
    height: 100%;
    background-color: ${color.gray_0};
    box-shadow: 2px 6px 6px 0;
    overflow: auto;
    padding: 0px 0.5rem;
`;

export const StockInfoTemplate = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${color.gray_2};
`;

export const StockInfoTemplateHeader = styled.div`
    width: 100%;
    height: 5rem;
	box-shadow: 0px 10px 8px 0px rgba(0, 0, 0, 0.12);
    background-color: ${color.gray_1};
`;