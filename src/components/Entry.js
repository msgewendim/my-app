import React from 'react';


const createEmoji = (props)=>{
  return (
    <Entry
      id = {props.id} 
      key = {props.id}
      emoji ={ props.emoji}
      name= {props.name}
      meaning = {props.meaning}
    />
  )
}
const Entry = (props) => {
  return (
    <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emoji}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>
            {props.meaning}
          </dd>
        </div>
  );
};

export default Entry;
export {createEmoji};