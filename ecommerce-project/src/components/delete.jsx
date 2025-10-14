<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chatbot Example</title>
</head>
<body>
  
  <div id="hey"></div>

  <!-- ✅ Official React 18 -->
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

  <!-- ✅ Babel (needed to compile JSX) -->
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

  <script type="text/babel">
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
    //   return (
    //     <>
    //       <div>
    //         <img src="user.png" width="20" alt="user"/>
    //         Hello Chatbot
    //       </div>
    //       <div>
    //         <img src="robot.png" width="20" alt="robot"/>
    //         How can I help you?
    //       </div>
    //       <div>
    //         <img src="user.png" width="20" alt="user"/>
    //         Tell me a joke
    //       </div>
    //       <div>
    //         <img src="robot.png" width="20" alt="robot"/>
    //         Get out!
    //       </div>
    //     </>
    //   );
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
