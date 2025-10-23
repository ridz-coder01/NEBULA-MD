const axios = require("axios");
const { cmd } = require("../command");

// Facebook Downloader v1 (basic)
cmd({
  pattern: "fb2",
  alias: ["facebook", "fbdl"],
  react: '📥',
  desc: "Download videos from Facebook (Basic API)",
  category: "download",
  use: ".fb <Facebook video URL>",
  filename: __filename
}, async (conn, mek, m, { from, reply, args }) => {
  try {
    const fbUrl = args[0];
    if (!fbUrl || !fbUrl.includes("facebook.com")) {
      return reply('Please provide a valid Facebook video URL. Example: `.fb https://facebook.com/...`');
    }

    await conn.sendMessage(from, { react: { text: '⏳', key: m.key } });

    const apiUrl = `https://apis.davidcyriltech.my.id/facebook?url=${encodeURIComponent(fbUrl)}`;
    const response = await axios.get(apiUrl);

    if (!response.data || !response.data.status || !response.data.result || !response.data.result.downloads) {
      return reply('❌ Unable to fetch the video. Please check the URL and try again.');
    }

    const { title, downloads } = response.data.result;
    const downloadLink = downloads.hd?.url || downloads.sd.url;
    const quality = downloads.hd ? "HD" : "SD";

    await reply('Downloading video... Please wait.📥');

    await conn.sendMessage(from, {
      video: { url: downloadLink },
      caption: `> Powered By JawadTechX 💜`
    }, { quoted: mek });

    await conn.sendMessage(from, { react: { text: '✅', key: m.key } });
  } catch (error) {
    console.error('Error:', error);
    reply('❌ Unable to download the video. Please try again later.');
    await conn.sendMessage(from, { react: { text: '❌', key: m.key } });
  }
});

cmd({
  pattern: "fb",
  alias: ["facebook2", "fbdl2"],
  react: '📥',
  desc: "Download videos from Facebook (API v4)",
  category: "download",
  use: ".fb4 <Facebook video URL>",
  filename: __filename
}, async (conn, mek, m, { from, reply, args }) => {
  try {
    const fbUrl = args[0];
    if (!fbUrl || !fbUrl.includes("facebook.com")) {
      return reply('❌ Please provide a valid Facebook video URL.\n\nExample:\n.fb4 https://facebook.com/...');
    }

    await conn.sendMessage(from, { react: { text: '⏳', key: m.key } });

    const apiUrl = `https://jawad-tech.vercel.app/downloader?url=${encodeURIComponent(fbUrl)}`;
    const response = await axios.get(apiUrl);

    const data = response.data;

    if (!data.status || !data.result || !Array.isArray(data.result)) {
      return reply('❌ Unable to fetch the video. Please check the URL and try again.');
    }

    // Prefer HD, fallback to SD
    const hd = data.result.find(v => v.quality === "HD");
    const sd = data.result.find(v => v.quality === "SD");
    const video = hd || sd;

    if (!video) return reply("❌ Video not found in the response.");

    await reply(`Downloading video Please wait`);

    await conn.sendMessage(from, {
      video: { url: video.url },
      caption: `🎥 *Facebook Video Downloader*\n\n> Quality: ${video.quality}\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ Rɪᴅᴢ Cᴏᴅᴇʀ 💜`
    }, { quoted: mek });

    await conn.sendMessage(from, { react: { text: '✅', key: m.key } });
  } catch (error) {
    console.error('FB4 Error:', error);
    reply('❌ Failed to download the video. Please try again later.');
    await conn.sendMessage(from, { react: { text: '❌', key: m.key } });
  }
});
