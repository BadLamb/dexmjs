(function(){
    if(navigator.serviceWorker){
        console.log("Starting serviceWorker")
        navigator.serviceWorker.register('serviceWorker.js')
        .then(r => window.location.reload())
        .catch(e => alert(e));
    }else{
        var script = document.createElement('script');
        script.async = 'true';
        script.src = 'legacy.js';
    }
})()