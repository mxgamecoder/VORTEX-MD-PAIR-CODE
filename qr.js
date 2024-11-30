const { exec } = require("child_process");
const { upload } = require('./mega');
const express = require('express');
let router = express.Router()
const pino = require("pino");

let { toBuffer } = require("qrcode");

const path = require('path');

const fs = require("fs-extra");

const { Boom } = require("@hapi/boom");

const MESSAGE = process.env.MESSAGE ||  `
*SESSION GENERATED SUCCESSFULY* ✅

*Gɪᴠᴇ ᴀ ꜱᴛᴀʀ ᴛᴏ ʀᴇᴘᴏ ꜰᴏʀ ᴄᴏᴜʀᴀɢᴇ* 🌟
https://github.com/mxgamecoder/VORTEX-MD

*Sᴜᴘᴘᴏʀᴛ Gʀᴏᴜᴘ ꜰᴏʀ ϙᴜᴇʀʏ* 💭
https://t.me/mxgamecoder
https://whatsapp.com/channel/0029Vavz0e6E50Ugp30Z6z0W


*Yᴏᴜ-ᴛᴜʙᴇ ᴛᴜᴛᴏʀɪᴀʟꜱ* 🪄 
https://youtube.com/mxgamecoder

*VORTEX-MD--WHATTSAPP-BOT* 🥀
`