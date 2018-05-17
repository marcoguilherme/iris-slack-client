const { RTMClient } = require('@slack/client');

function handleOnAuthenticated(rtmStartData){
    console.log(`Logged in as ${rtmStartData.self.name} of theam ${rtmStartData.team.name}, but not yet connected to the channel`)
}

function addAuthenticatedHandler(rtm, handler){
    rtm.on('authenticated', handler);
}

module.exports.init = function slackClient(token){
    // The client is initialized and then started to get an active connection to the platform
    const rtm = new RTMClient(token);
    addAuthenticatedHandler(rtm, handleOnAuthenticated)
    return rtm;
}
