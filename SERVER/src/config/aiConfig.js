/**
 * AI configuration
 * OpenAI and other AI service configurations
 */

// TODO: Implement OpenAI configuration
// This is a placeholder

const openaiConfig = {
  apiKey: process.env.OPENAI_API_KEY || '',
  model: process.env.OPENAI_MODEL || 'gpt-3.5-turbo',
  maxTokens: parseInt(process.env.OPENAI_MAX_TOKENS || '500'),
  temperature: parseFloat(process.env.OPENAI_TEMPERATURE || '0.7')
};

module.exports = openaiConfig;

