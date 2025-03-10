import { ChatTemplate } from '@/presentation/atomic/templates/chatTemplate';
import { ScreenTemplate } from '@/presentation/atomic/templates/screenTemplate';
import React from 'react';
import { StyleSheet } from 'react-native';
const Chat = () => {
  return (
    <ScreenTemplate title="Explorar">
      <ChatTemplate />
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({});

export default Chat;
