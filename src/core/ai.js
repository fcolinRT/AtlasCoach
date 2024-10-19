const OpenAI = require('openai');

const openai = new OpenAI();

const ChatConfigDefault = {
  model: 'gpt-4o',
};

const chat = async (messages, config = ChatConfigDefault) => {
  const completions = await openai.chat.completions.create({
    model: config.model,
    messages,
  });

  return {
    message: completions.choices[0].message,
    moreChoices: completions.choices,
  };
};

const Roles = {
  USER: 'user',
  ASSISTANT: 'assistant',
  SYSTEM: 'system',
};

module.exports = {
  chat,
  Roles,
};
