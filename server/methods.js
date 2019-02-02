import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import { HTTP } from 'meteor/http'

Meteor.methods({
    portRequest: async (ipString) => {
        try {
            let result = await HTTP.call('GET', ipString);
            console.log(result);
            //Meteor.users.upsert({$set:JSON.parse(result.content)});
        }catch (e){
            console.log(e.message);
        }
    },
});