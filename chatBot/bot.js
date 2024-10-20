const TelagramBot = require('node-telegram-bot-api');
const com = require('./utils/commands');
const contact = require('./utils/contactKeyboard');
const commands = com.commands;
const firstContact = contact.contactKeyboardTwo;

const API_KEY_BOT = '7338798290:AAEkU8bmMkKqL26f6_yRsLELg_FZLEWdbd8';

const bot = new TelagramBot(API_KEY_BOT, {
  polling: true,
});

bot.setMyCommands(commands);

bot.on('polling_error', (err) => console.log(err.data.error.message));
bot.on('text', async (msg) => {
  try {
    // /start
    if (msg.text.startsWith('/start')) {
      await bot.sendMessage(msg.chat.id, `Вы запустили бота! 👋🏻`);

      if (msg.text.length > 6) {
        const refID = msg.text.slice(7);

        await bot.sendMessage(
          msg.chat.id,
          `Вы зашли по ссылке пользователя с ID ${refID}`
        );
      }
    }
    // /ref
    else if (msg.text == '/ref') {
      await bot.sendMessage(
        msg.chat.id,
        `${process.env.URL_TO_BOT}?start=${msg.from.id}`
      );
    }
    // /help
    else if (msg.text == '/help') {
      await bot.sendMessage(
        msg.chat.id,
        `Раздел помощи HTML\n\n<b>Жирный Текст</b>\n<i>Текст Курсивом</i>\n<code>Текст с Копированием</code>\n<s>Перечеркнутый текст</s>\n<u>Подчеркнутый текст</u>\n<pre language='c++'>код на c++</pre>\n<a href='t.me'>Гиперссылка</a>`,
        {
          parse_mode: 'HTML',
        }
      );

      await bot.sendMessage(
        msg.chat.id,
        'Раздел помощи Markdown\n\n*Жирный Текст*\n_Текст Курсивом_\n`Текст с Копированием`\n~Перечеркнутый текст~\n``` код ```\n||скрытый текст||\n[Гиперссылка](t.me)',
        {
          parse_mode: 'MarkdownV2',
        }
      );
    } else if (msg.text == '/link') {
      await bot.sendMessage(msg.chat.id, 'https://habr.com/');
    } else if (msg.text == '/menu') {
      await bot.sendMessage(msg.chat.id, `Меню бота`, {
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
      });
    } else {
      await bot.sendMessage(msg.chat.id, msg.text);
    }
  } catch (err) {
    console.log(err);
  }
});
