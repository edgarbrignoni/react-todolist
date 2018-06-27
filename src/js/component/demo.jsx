import React from 'react';
import PropTypes from 'prop-types';

function CreateTable() {
    let table = [];

    // Outer loop to create parent
    for (let i = 0; i < 3; i++) {
        let children = [];
        //Inner loop to create children
        for (let j = 0; j < 5; j++) {
          children.push(<td>{`Column ${j + 1}`}</td>);
        }
        //Create the parent and add the children
        table.push(<tr>{children}</tr>);
        
        
    }
    return <li>{props.text}</li>;
}

CreateTable.protoTypes = {
    table: PropTypes.string
};

export class Todolist extends React.Component{
    
    constructor(props) {
        super(props);
        
        this.state = {
            whatever: ['1','2','3'],
            textValue: ''
        };
    }
    
    render(){
        return (
            <div className="text-center mt-5">
                <h1>Hello World!</h1>
                <table>
                <ul>
                 {loop
                    <CreateTable text={} />
                 }
                </ul>
                
                </table>
            </div>
        );
    }
}
