import React from 'react'
import {Card, CardBody, CardText } from 'reactstrap'
import AceModalGlobal from './codemodalglobal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Posts({name, author, language, snip, avatar, note}){

    return(<Card className="my-1 py-0"style={{ width: '100%',  display:"flex", flexDirection:"column",  justifyContent:"center" }}>
 
    <CardBody>
    <FontAwesomeIcon icon={avatar} size="3x" className = "mt-2 mr-3 float-left"></FontAwesomeIcon>
      <CardText>
       {author} Created a code snippet Titled {name} click the button to visit it
      </CardText>
      <AceModalGlobal name={name} author={author} language={language} snip={snip} avatar={avatar} note={note}/>
    </CardBody>
  </Card>)
}
export default Posts