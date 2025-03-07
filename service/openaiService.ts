import { OPEN_AI_KEY } from '@env'; // Importando do .env
import axios from 'axios';

const OPENAI_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

export const fetchOpenAIResponse = async (message: string) => {
  try {
    const response = await axios.post(
      OPENAI_ENDPOINT,
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPEN_AI_KEY}`,
        },
      },
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Erro ao chamar OpenAI:', error);
    return 'Erro ao obter resposta da OpenAI.';
  }
};
