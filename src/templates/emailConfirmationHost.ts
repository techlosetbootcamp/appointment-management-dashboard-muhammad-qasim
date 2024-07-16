export const emailConfirmationHost = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Template</title>
    <style>
      body {
        font-family: Helvetica, Arial, sans-serif;
        background-color: #ffffff;
        margin: 0;
        padding: 0;
      }
      .email-container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #ffffff;
        text-align: center;
      }
      .email-body {
        font-size: 16px;
        margin-bottom: 20px;
        text-align: left;
      }
      .email-footer {
        font-size: 14px;
        color: #888888;
        text-align: center;
      }
      .email-footer a {
        color: #6420d3;
      }
      .email-footer a:hover {
        color: #4f0cbb;
      }
      .email-body h2 {
        font-size: 16px;
        margin-top: 10px;
        margin-bottom: 5px;
      }
      .email-body a {
        color: #6420d3;
      }
      .email-body a:hover {
        color: #4f0cbb;
      }
      .buttons {
        text-align: center;
        margin-top: 30px;
      }
      .email-body button {
        padding: 20px 40px;
        border: none;
        font-size: 14px;
        color: white;
        cursor: pointer;
        text-decoration: none;
        display: inline-block;
        margin: 0 10px;
        cursor: pointer;
      }
      .email-body button a {
        text-decoration: none;
        color: white;
        cursor: pointer;
      }
      .email-body button a:hover {
        text-decoration: none;
        color: white;
        cursor: pointer;
      }
      #btnFirst {
        background-color: #6420d3;
      }
      #btnFirst:hover {
        background-color: #4f0cbb;
      }
      #btnSecond {
        background-color: #3498db;
      }
      #btnSecond:hover {
        background-color: #1669a0;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="email-body">
        <p>Hi {{name}},</p>
        <p>A new event has been scheduled:</p>
        <div>
          <h2>Event Type:</h2>
          <p>30 Minute Meeting</p>
        </div>
        <div>
          <h2>Invite Email:</h2>
          <a href="mailto:{{email}}">{{email}}</a>
        </div>
        <div>
          <h2>Event Date/Time:</h2>
          <p>{{time}}, {{date}} ({{timeZone}})</p>
        </div>
        <div>
          <h2>Invite Timezone:</h2>
          <p>{{timeZone}}</p>
        </div>
        <p>Question:</p>
        <h2>Please share anything that will help prepare for our meeting.</h2>
        <p>{{message}}</p>
        <a href="#">View event in Calendly</a>
        <div class="buttons">
        <button id="btnFirst" >
        <a href="{{googleBtnLink}}">
            Add to Google Calendar
            </a>
          </button>
          <button id="btnSecond">
          <a href="{{SecondBtnLink}}">
            Add to iCal/Outlook
            </a>
          </button>
        </div>
      </div>
      <div class="email-footer">
        Calendly will automatically add scheduled events if you
        <a href="#">connect your calendar</a>.
      </div>
    </div>
  </body>
</html>


`;
