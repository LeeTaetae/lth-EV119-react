import styled from 'styled-components';

export const FloatingButtonContainer = styled.div`
  position: fixed;
  bottom: 100px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  z-index: 1000;
`;

export const MainButton = styled.button`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #CD0B16;
  color: #FFFFFF;
  border: none;
  font-size: 28px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(205, 11, 22, 0.4);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #B80F16;
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(205, 11, 22, 0.5);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const AlertButton = styled.button`
  padding: 12px 20px;
  background-color: #FFFFFF;
  color: #CD0B16;
  border: 2px solid #CD0B16;
  border-radius: 24px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(205, 11, 22, 0.2);
  transition: all 0.3s ease;
  animation: slideIn 0.3s ease;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &:hover {
    background-color: #FFF5F5;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(205, 11, 22, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

