import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";


const Chat = () => {
    const[open, setOpen] = useState(false);
    const [text, setText] = useState("");

    const handleEmoji = (e) => {
        setText((prev) => prev + e.emoji);
        setOpen(false);
    }

    console.log(text);

    return (
        <div className="chat">
        <div className="top">
          <div className="user">
             <img src="./avatar.png" alt="" />
             <div className="texts">
                <span>Jane Doe</span>
                <p>Lorem ipsum dolor, sit amef</p>
             </div>
          </div>
          <div className="icons">
            <img src="./phone.png"  alt=""/>
            <img src="./video.png"  alt=""/>
            <img src="./info.png"  alt=""/>
          </div>
        </div>
        <div className="center"></div>
        <div className="bottom">
            <div className="icons">
                <img src="./img.png" alt="" />
                <img src="./camera.png" alt="" />
                <img src="./mic.png" alt="" />  
            </div>
            <input type="text" placeholder="Type a message..."  
             value={text}
            onChange={(e)=>setText(e.target.value)}/>
            <div className="emoji">
                <img src="./emoji.png" alt="" onClick={(prev)=>setOpen((prev)=>!prev)}/>
                
                <div className="picker">
                <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                </div>
            </div>
            <button className="sendButton">Send</button>
        </div>
        </div>
    );
};

export default Chat;