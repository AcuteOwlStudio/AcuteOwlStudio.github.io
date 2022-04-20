import React, {useState} from 'react';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import { INLINES, BLOCKS } from '@contentful/rich-text-types';

function Post(props) {
  const [date, setDate] = useState();

  var entry = props.data;
  console.log(entry);

  return (
    <div className="postBack">
      <div className="flex">
        <h2>{entry.fields.title}</h2>
        <p className="postDate">{parseDate(entry.sys.createdAt)}</p>
      </div>

      <hr/>
      <div className="postContents">
        {documentToReactComponents(entry.fields.message, options)}
      </div>
    </div>
  );

  function parseDate(dateString){
    var date = dateString.split('T');
    return(date[0]);
  }
}

const options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node) => {
      const link = node.data.uri;
      const text = node.content[0].value;
      return <a className="blogLink" href={link} target="_blank">{text}</a>
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const desc = node.data.target.fields.title;
      const url = node.data.target.fields.file.url;
      return <img className="blogImg" src={url} alt={desc}/>
    }
  }
}


export default Post;
