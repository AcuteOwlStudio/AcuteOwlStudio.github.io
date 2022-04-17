import React, {useState} from 'react';

function Post(props) {
  const [date, setDate] = useState();

  var entry = props.data;
  // parseDate(entry.fields.publishDate);

  return (
    <div className="postBack">
      <div className="flex">
        <h2>{entry.fields.title}</h2>
        <p className="postDate">{parseDate(entry.sys.createdAt)}</p>
      </div>

      <hr/>
      <div className="postContents">
        {entry.fields.message.content.map( (paragraph) => (
          <p>{paragraph.content[0].value}</p>
        ))}
      </div>
    </div>
  );

  function parseDate(dateString){
    var date = dateString.split('T');
    return(date[0]);
  }
}

export default Post;
