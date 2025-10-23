const axios = require('axios');
const { cmd } = require('../command');

cmd({
    pattern: "weather",
    desc: "🌤 Get weather information for a location",
    react: "🌤",
    category: "utility",
    use: '.weather <city>',
    filename: __filename
},
async (conn, mek, m, { from, reply, args }) => {
    try {
        if (!args[0]) return reply("❌ Please provide a city name\nExample: .weather London");

        const city = args.join(' ');
        const apiUrl = `https://apis.davidcyriltech.my.id/weather?city=${encodeURIComponent(city)}`;

        const { data } = await axios.get(apiUrl);

        if (!data.success) return reply("❌ Couldn't fetch weather data for that location");

        // Optional: Get time dynamically
        const time = new Date().toLocaleString("en-GB", { timeZone: "Africa/Kampala" });

        const weatherInfo = `
╭─────❏ *🌤 𝙉𝙀𝘽𝙐𝙇𝘼 𝙈𝘿* ❏─────╮
│─❏ 🕒 *Time*: ${time}
│ ─❏📍 *Location*: ${data.data.location}, ${data.data.country}
│─❏
│─❏ 🌡 *Temperature*: ${data.data.temperature}
│─❏ 💭 *Feels Like*: ${data.data.feels_like}
│─❏ ☁ *Weather*: ${data.data.weather} (${data.data.description})
│─❏
│─❏ 💧 *Humidity*: ${data.data.humidity}
│─❏ 💨 *Wind Speed*: ${data.data.wind_speed}
│─❏ 📊 *Pressure*: ${data.data.pressure}
│─❏
│─❏ 🌍 *Coordinates*: ${data.data.coordinates.latitude}, ${data.data.coordinates.longitude}
│─❏ 
╰───❏
_ᴘᴏᴡᴇʀᴇᴅ ʙʏ Rɪᴅᴢ Cᴏᴅᴇʀ_
        `.trim();

        await reply(weatherInfo);

    } catch (error) {
        console.error('Weather Error:', error);
        reply("❌ Failed to fetch weather data. Please try again later.");
    }
});