import styled from 'styled-components';
import { flexCenter, flexCenterColumn } from '../../styles/common';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #F5F5F5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const EmergencyButton = styled.button`
  flex: 1;
  min-width: 200px;
  max-width: 280px;
  height: 120px;
  background-color: ${props => 
    props.$variant === 'ambulance' 
      ? '#CD0B16' 
      : '#B80F16'};
  color: #FFFFFF;
  border: none;
  border-radius: 12px;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(205, 11, 22, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(205, 11, 22, 0.4);
    background-color: ${props => 
      props.$variant === 'ambulance' 
        ? '#B80F16' 
        : '#A00D14'};
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(205, 11, 22, 0.3);
  }

  @media (max-width: 768px) {
    min-width: 100%;
    max-width: 100%;
    height: 100px;
    font-size: 20px;
  }
`;

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 100%;
  height: 60px;
  background-color: #1A1A1A;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  padding: 0 24px;
  font-size: 18px;
  font-weight: 400;
  box-sizing: border-box;
  outline: none;
  transition: all 0.3s ease;

  &::placeholder {
    color: #999999;
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(205, 11, 22, 0.2);
    background-color: #2A2A2A;
  }

  @media (max-width: 768px) {
    height: 56px;
    font-size: 16px;
    padding: 0 20px;
  }
`;

