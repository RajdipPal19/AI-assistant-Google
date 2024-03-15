import React, { useContext, useState } from 'react'
import './sidebar.css';
import { assets } from '../../assets/assets.js';
import { Context } from '../../context/context.jsx';

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className={`sidebar ${extended ? 'extended' : ''}`}>
      <div className="top">
        <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="image not found" />
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="image not found" />
          {extended ? <p title='Start a new Discussion'>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className='recent-title'>Recent</p>
            {prevPrompts.map((item, index) => (
              <div onClick={() => loadPrompt(item)} className="recent-entry" key={index}>
                <img src={assets.message_icon} alt="image not found" />
                <p>{item.slice(0, 19)}...</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
