import styled from 'styled-components';

export const EventCardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  .content {
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    h3 {
      font-size: 18px;
      color: #284eee;
      margin: 0;
    }

    p {
      font-size: 14px;
      color: #555;
      margin: 0;
    }

    .buttons {
      display: flex;
      gap: 10px;
      margin-top: 10px;

      button {
        padding: 8px 12px;
        font-size: 14px;
        font-weight: bold;
        border-radius: 8px;
        border: none;
        background-color: #284eee;
        color: #ffffff;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
          background-color: #1e3eb5;
        }

        &:nth-child(3) {
          background-color: #ff4d4f;
          &:hover {
            background-color: #e03030;
          }
        }
      }
    }
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 8px;
  border: ${(props) => (props.secondary ? '2px solid #284eee' : 'none')};
  background-color: ${(props) => (props.secondary ? '#ffffff' : '#284eee')};
  color: ${(props) => (props.secondary ? '#284eee' : '#ffffff')};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.secondary ? '#e0e7ff' : '#1e3eb5')};
  }
`;

