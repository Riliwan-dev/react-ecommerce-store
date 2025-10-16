
     function ChatInput() {
      return (
        <>
          <input 
            placeholder="Send a message to Chatbot" 
            size="30"
          />
          <button>Send</button>
        </>
      );
    }


    function Chatmsg() {
        const sender = props.send;
        const message = props.msg;
        
        if{sender === 'user' && (<img src="user.png" width="20" alt="user"/>)}

        }
      return (
        <>
          <div>
            <img src="user.png" width="20" alt="user"/>
            Hello Chatbot
          </div>
          <div>
            <img src="robot.png" width="20" alt="robot"/>
            How can I help you?
          </div>
          <div>
            <img src="user.png" width="20" alt="user"/>
            Tell me a joke
          </div>
          <div>
            <img src="robot.png" width="20" alt="robot"/>
            Get out!
          </div>
        </>
      );
    }   

    function Output(){
        return(
            <div>
                <ChatInput/>
                <Chatmsg />
            </div>
        );
    }
    const display = ReactDOM.createRoot(document.getElementById('hey'));
    display.render(<Output />);
  </script>
</body>
</html>