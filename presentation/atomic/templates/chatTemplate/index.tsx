import { fetchOpenAi } from '@/service/OpenAiSercive';
import { useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { Button } from '../../atoms/Button';

export const ChatTemplate = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [],
  );
  const [loading, setLoading] = useState(false);

  const handleSendaMessage = async () => {
    if (!userInput.trim()) return;

    setLoading(true);
    const userMessage = { role: 'user', content: userInput };
    setMessages([...messages, userMessage]);

    const response = await fetchOpenAi(userInput);

    setMessages([
      ...messages,
      {
        role: 'assistant',
        content: response + ' Seu Treino foi adcionado nos seus exercicios',
      },
    ]);
    setUserInput('');
    setLoading(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'space-between', width: '100%' }}>
      <ScrollView style={{ height: '70%', padding: 10 }}>
        {messages.map((message, index) => (
          <View key={index}>
            <Text>{message.content}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={{ justifyContent: 'flex-end' }}>
        <TextInput
          value={userInput}
          onChangeText={setUserInput}
          placeholder="Digite sua mensagem"
        />
        <Button
          text={loading ? 'Enviando...' : 'Enviar'}
          onPress={handleSendaMessage}
          isLoading={loading}
        />
      </View>
    </View>
  );
};
