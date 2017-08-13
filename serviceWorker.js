let peerList = [];
let ownerPubKey = "";
let lastTimeStamp = 0;
const timeout = 60*60

self.addEventListener('fetch', async function(event){
    var host = self.location.origin;

    // Ignore requests not for the hosted origin
    if(!event.request.url.startsWith(host)){
        return;
    }
})