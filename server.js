require('dotenv').config({ path: 'variables.env' });
    
    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const { Wit } = require('node-wit');

    const Pusher = require('pusher');
    const responses=require('./responsefile').responses;
    const recommendations=require('./responsefile').recommendations;
    const symptoms=require('./responsefile').symptoms;
    const causes=require('./responsefile').causes;
    const drugs=require('./responsefile').drugs;
    const allIntents=require('./responsefile').allIntents.intss;
    
    const pusher = new Pusher({
      appId: process.env.PUSHER_APP_ID,
      key: process.env.PUSHER_APP_KEY,
      secret: process.env.PUSHER_APP_SECRET,
      cluster: process.env.PUSHER_APP_CLUSTER,
      encrypted: true,
    });
    
    const client = new Wit({
      accessToken: process.env.WIT_ACCESS_TOKEN,
    });
    
    const app = express();
    
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.post('/chat', (req, res) => {
      const { message } = req.body;
      
      const firstEntityValue = (intents, entity) => {
        const val =
        intents &&
        intents.length > 0 &&
        intents[0].name===entity
        if (!val) {
       
          return null;
        }
       
        return val;
      };
      
      let replies=(entity,percentage)=>{
       
        if(entity.includes("get")){
          pusher.trigger('bot', 'bot-response', {
            message:``+
              responses[entity][
                Math.floor(Math.random() * responses[entity].length)
              ],
          });
        setTimeout(() => {
          pusher.trigger('bot', 'bot-response', {
            message:
              recommendations[entity][
                Math.floor(Math.random() * recommendations[entity].length)
              ],
          });
       setTimeout(() => {
        pusher.trigger('bot', 'bot-response', {
          message:
            symptoms[entity][
              Math.floor(Math.random() * symptoms[entity].length)
            ],
        });
        setTimeout(() => {
          pusher.trigger('bot', 'bot-response', {
            message:
              causes[entity][
                Math.floor(Math.random() * causes[entity].length)
              ],
          });
        setTimeout(() => {
          pusher.trigger('bot', 'bot-response', {
            message:
              drugs[entity][
                Math.floor(Math.random() * drugs[entity].length)
              ],
          });
       }, 2000);
        }, 2000);
        }, 2000);
        }, 2000);
        }else{
          pusher.trigger('bot', 'bot-response', {
            message:
              responses[entity][
                Math.floor(Math.random() * responses[entity].length)
              ],
          });
        }
      }
  
      const handleMessage = ({ intents }) => {
        let selectedOption=false;
        // const greetings = firstEntityValue(intents, 'greetings');
        // const jokes = firstEntityValue(intents, 'jokes');
        // const headache = firstEntityValue(intents, 'get_headache');
        // const malaria = firstEntityValue(intents, 'get_malaria');
     
       let percent=0;
         if (intents[0]) {
           percent = (intents[0].confidence * 100).toFixed(0)
        } 
        for (let index = 0; index < allIntents.length; index++) {
          const intent = allIntents[index];
          let isIntent=firstEntityValue(intents, intent)
          if (isIntent) {      
            replies(intent,percent);
             selectedOption=true;
            
            break;
          }
        }
        if (!selectedOption) {
          replies('noresponse')
        }

      };

      client
        .message(message)
        .then(data => {
          console.log(JSON.stringify(data))
          handleMessage(data);
          res.json({message:"successful"})
        })
        .catch((error) =>{
          res.json({})
          pusher.trigger('bot', 'bot-response', {
            message:"I am currently offline. Please try again later"
          });
          console.log(error)});
    });
    
    app.set('port', process.env.PORT || 7777);
    const server = app.listen(app.get('port'), () => {
      console.log(`Express running → PORT ${server.address().port}`);
    });