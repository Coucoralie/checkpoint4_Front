import React from 'react';
import './Message.css';
const Message = ({ title, description, buttonAction = false }) => {
  return (
    <div className='container-modal'>
      <h2 className='title-modal'>{title}</h2>
      <p className='des-modal'>{description}</p>
      {buttonAction && (
        <>
          <button type="submit" onClick={() => buttonAction(true)} className='btn-modal'>
            Valider
          </button>
          <button type="submit" onClick={() => buttonAction(false)} className='btn-modal'>
            Annuler
          </button>
        </>
      )}
    </div>
  );
};
export default Message;
