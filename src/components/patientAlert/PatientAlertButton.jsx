import React, { useState } from 'react';
import { useModal } from '../modal/useModal';
import * as S from './style';

const PatientAlertButton = () => {
  const { openModal } = useModal();
  const [isOpen, setIsOpen] = useState(false);

  const handleAlert = () => {
    openModal({
      title: '환자 발생 알림 전송',
      message: '주변 의료진에게 환자 발생 알림을 전송하시겠습니까?',
      onConfirm: () => {
        // 실제 알림 전송 로직
        console.log('환자 발생 알림 전송');
        alert('주변 의료진에게 환자 발생 알림이 전송되었습니다.');
      },
      onCancel: () => {
        console.log('알림 전송 취소');
      }
    });
  };

  return (
    <S.FloatingButtonContainer>
      {isOpen && (
        <S.AlertButton onClick={handleAlert}>
          🚨 환자 발생 알림
        </S.AlertButton>
      )}
      <S.MainButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '🚨'}
      </S.MainButton>
    </S.FloatingButtonContainer>
  );
};

export default PatientAlertButton;

