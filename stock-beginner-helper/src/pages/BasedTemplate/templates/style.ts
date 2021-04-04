import styled from 'styled-components';
import { color } from 'styles/color';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 100vh;

    &::-webkit-scrollbar { 
        background-color: ${color.gray_2};
    }
`;

export const CompanyListTemplate = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 15rem;
    height: 100%;
    background-color: ${color.gray_0};
    box-shadow: 2px 6px 6px 0;
    overflow: auto;
    padding: 0px 0.5rem;
    background-color: rgba(0 ,0, 0, 0.8);
    &::-webkit-scrollbar { 
        background-color: ${color.gray_0};
    }

    &::-webkit-scrollbar-thumb { 
        background-color: ${color.gray_1};
        border-radius: 7px;
    } 
`;

export const SearchBarTemplate = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 10rem 0 1rem 0;

    & > * {
        /* margin-right: 0.5rem; */
    }
`;

export const StockInfoTemplate = styled.div`
    margin-left: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100%;
    background-color: ${color.gray_2};

    &::-webkit-scrollbar { 
        background-color: ${color.gray_2};
        opacity: 0.8;
    }
`;

export const StockInfoTemplateHeader = styled.div`
    width: 100%;
    height: 5rem;
    margin-top: 1.8rem;
	box-shadow: 0px 10px 8px 0px rgba(0, 0, 0, 0.12);
    background-color: ${color.gray_1};
`;