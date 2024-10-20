const contactKeyboardTwo = {
  parse_mode: 'html',
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Website', url: 'https://www.google.com' }],
      [{ text: 'Chart', url: 'https://www.google.com' }],
      [{ text: 'How to buy', url: 'https://www.google.com' }],
      [{ text: 'Contract', url: 'https://www.google.com' }],
      [{ text: 'Contract', url: 'https://www.google.com' }],
    ],
  }),
};
