import axios from 'axios';

export const fetchOpenAi = async (message: string) => {
  const OPENAI_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
  const OPENAI_API_KEY =
    'sk-JZI42c6pxA7gnUrQTebktcrD6cA33m3ZAVZyC6KWwgT3BlbkFJhjVYZXztDfEP4HoTLK44i5EyR6dNr_GqL0xgnSX5oA';

  try {
    const response = await axios.post(
      OPENAI_ENDPOINT,
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: 'Um treino personalizado para mim',
          },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      },
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Não foi possivel utilizar a api da openAI', error);
  }
};
