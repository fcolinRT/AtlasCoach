const ai = require('../core/ai');

async function getRecommendation(req, res) {
  const prompt = req.body;
  const { transcript_segments = [] } = prompt;
  console.log('Prompt', prompt);

  const userConversation = transcript_segments.map((segment) => ({
    role: ai.Roles.USER,
    content: segment.text,
  }));

const result = await ai.chat([
    {
      role: ai.Roles.SYSTEM,
      content:
        'Give me the best recommendations so I can make the best decision based on conversion',
    },
    ...userConversation,
  ]);

  console.log('Result', result);

  res.status(200).send(result.message.content);
}

function ping(_req, res) {
  res.status(200).send({
    message: 'pong',
  });
}

module.exports = {
  getRecommendation,
  ping,
};
