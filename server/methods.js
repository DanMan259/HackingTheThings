import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import { HTTP } from 'meteor/http'

Meteor.methods({
    portRequest: async (ipString, portString) => {
        try {
            let result = await HTTP.call('GET', 'http://localhost:80/gottahackem?ip='+ipString+'&p='+portString);
        }catch (e){
            console.log(e.message);
        }
    },
    secureRequest: async () => {
        try {
            let result = await HTTP.call('GET', '172.20.10.4');
        }catch (e){
            console.log(e.message);
        }
    },
    insertUser: (info) => {
        Accounts.createUser(info);
    },
});