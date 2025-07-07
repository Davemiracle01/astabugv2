const settings = require("../settings");
async function aliveCommand(sock, chatId, message) {
    try {
        const message1 = `*⚙️ CyberWeebs is Online!*\n\n` +
                       `*Version:* ${settings.version}\n` +
                       `*Status:* Operational\n` +
                       `*Mode:* Public\n\n` +
                       `*🧩 Core Features:*\n` +
                       `• Group Management\n` +
                       `• Antilink Protection\n` +
                       `• Fun + AI Commands\n` +
                       `• And more...\n\n` +
                       `Type *.menu* to explore the full command list`;

        await sock.sendMessage(chatId, {
            text: message1,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363363333127547@newsletter',
                    newsletterName: 'CyberWeebs',
                    serverMessageId: -1
                }
            }
        }, { quoted: message });
    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'CyberWeebs is alive and running!' }, { quoted: message });
    }
}

module.exports = aliveCommand;
