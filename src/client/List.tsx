import React from 'react';
import { Link } from 'react-router-dom';

export default class List extends React.Component<IListProps, IListState> {

    constructor(props: IListProps) {
        super(props);

        this.state ={
            names: ['Emily', 'Luke', 'Audrey']
        }
    }

    render() {
        return <ul className="list-group">
            {this.state.names.map(name => {
                return <li key={name} className="list-group-item">
                    <Link to={`/${name}`}>{name}</Link>
                </li>
                    
            })}
        </ul>
    }

}

interface IListProps {

}

interface IListState {
    names: Array<string>;
}