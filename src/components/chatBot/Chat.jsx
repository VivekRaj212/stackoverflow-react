import React, {useEffect} from 'react'

const Chat = () => {

    useEffect(()=> {      
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"2f63b1071738a8776960ba5e709d0d3a8","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});

    })
  return (
    <div>
    </div>
  )
}

export default Chat
