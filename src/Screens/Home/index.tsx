import React from 'react';
import styled from 'styled-components/native';

const Contianer = styled.KeyboardAvoidingView`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  background-color: #777;
`;

interface Props {}

const ChatRoom = ({}: Props) => {
  return (
    <Contianer>
      hello world!
    </Contianer>
  );
};

export default ChatRoom;
