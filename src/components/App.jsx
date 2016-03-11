import React from 'react';


export default class App extends React.Component{
    
    constructor(){
        super();
        this.state={
            messages : [
                'Hi There, How are your',
                'Hi, I m fine, thanx. Hi There'  ,
                "Thanx much"
            ]
            
        };
    }
    
    
    render(){
        let messageNodes = this.state.messages.map((message,idx)=>{
           return <div key={idx}>{message}</div> 
        });
        
        return (
            <div>{messageNodes}</div>
        );
    }
    
}