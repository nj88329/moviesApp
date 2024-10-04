const { google } = require('googleapis');
require("dotenv").config();

exports.oauth2client = new google.auth.OAuth2(
    process.env.Client_ID,
    process.env.Client_Secret,
    'postmessage'
)