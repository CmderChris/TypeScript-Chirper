import * as React from 'react';
import { RouteComponentProps } from "react-router";
// import { IChirp } from '../utils/Interface';

class Compose extends React.Component<IComposeProps, IComposeState> {
    constructor(props: IComposeProps) {
        super(props);
        this.state = {
            username: "",
            message: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    async handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        let newChirp = {
            username: this.state.username,
            message: this.state.message
        }
        e.preventDefault();
        
            try {
                await fetch('/api/chirps/', {
                    method: 'POST',
                    body: JSON.stringify(newChirp),
                    headers: {
                        "Content-type": "application/json"
                    },
                });
                this.props.history.push('/')
            } catch (err) {
                console.log(err)
            }
}



    render() {
        return (
            <>
                <div className="bg-secondary">
                    <main className="container py-5">
                        <h1 className="text-center text-white">Add a Chirp!</h1>
                    </main>
                </div>

                <div className="col-md-6 offset-md-3 py-3">
                    <article className="card my-2 shadow-sm border border-primary">
                        <div className="card-body text-center">
                            <input
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ username: e.target.value })}
                            type="text" placeholder="Type your name here..." className="form-control mb-3" value={this.state.username} />
                            
                            <input
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ message: e.target.value })}
                            type="text" placeholder="Type your chirp here..." className="form-control" value={this.state.message} />
                        </div>
                        <div className="container text-center">
                            <button className="btn btn-outline-primary btn-md mb-3" onClick={this.handleSubmit}>Chirp away!</button>
                        </div>
                    </article>
                </div>
            </>
        );

    }
}

interface IComposeProps extends RouteComponentProps<{ id: string}> { }
interface IComposeState {
    username: string;
    message: string;
}

export default Compose;