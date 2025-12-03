import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

const Intro = () => {
  const navigate = useNavigate();

  const handleAmbulanceCall = () => {
    // 구급차 호출 기능 구현
    window.location.href = 'tel:119';
  };

  const handleEmergencyRoomInfo = () => {
    // 응급실 정보 페이지로 이동
    navigate('/main/map');
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      // 검색 기능 구현
      const searchTerm = e.target.value;
      console.log('검색어:', searchTerm);
    }
  };

  return (
    <S.Container>
      <S.ContentWrapper>
        <S.ButtonGroup>
          <S.EmergencyButton 
            onClick={handleAmbulanceCall}
            $variant="ambulance"
          >
            구급차 호출
          </S.EmergencyButton>
          <S.EmergencyButton 
            onClick={handleEmergencyRoomInfo}
            $variant="info"
          >
            응급실 정보
          </S.EmergencyButton>
        </S.ButtonGroup>
        
        <S.SearchContainer>
          <S.SearchInput
            type="text"
            placeholder="검색창"
            onKeyPress={handleSearch}
          />
        </S.SearchContainer>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default Intro;

