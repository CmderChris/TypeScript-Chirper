import * as React from 'react';
import { RouteComponentProps } from "react-router";
import EditChirp from '../components/EditChirp';


class Edit extends React.Component<IEditProps, IEditState> {
    constructor(props: IEditProps) {
        super(props);
        this.state = {
            username: "",
            message: ""
        };
    }

    async componentDidMount() {
        try {
            let res = await fetch(`/api/chirps/${this.props.match.params.id}`);
            let chirps = await res.json();
            this.setState({ username: chirps.username, message: chirps.message });
        } catch (error) {
            console.log(error);
        }
    }

    async handleEdit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        let editedChirp = {
            username: this.state.username,
            message: this.state.message
        };
        try {
            let r = await fetch(`/api/chirps/${this.props.match.params.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editedChirp)
            });
            if (r.ok) {
                this.props.history.push("/");
            }
        } catch (error) {
            console.log(error);
        }
    }

    async handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
        let id = this.props.match.params.id;
        try {
            await fetch(`/api/chirps/${this.props.match.params.id}`, {
                method: 'DELETE'
            });
            this.props.history.push("/");
        } catch (err) {
            console.log(err)
        }
    }


    render() {
        return (
            <>
                <div className="bg-secondary">
                    <main className="container py-5">
                        <h1 className="text-center text-white">Edit a Chirp!</h1>
                    </main>
                </div>
                <div>
                    <div className="col-md-6 offset-md-3">
                        <article className="card my-2 shadow-sm border border-primary">
                            <div className="card-body text-center py-4">
                                <input type="text" className="form-control mb-3" defaultValue={this.state.username}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ username: e.target.value })}
                                />

                                <input type="text" className="form-control" defaultValue={this.state.message}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ message: e.target.value })}
                                />
                            </div>
                            <div className="container text-center">
                            <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleEdit(e)}  
                                className="btn btn-outline-primary btn-lg mb-3">Edit Chirp!</button>
                            </div>
                            <div className="container text-center">
                            <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleDelete(e)}  
                                className="btn btn-outline-info btn-sm mb-4">Delete Chirp!</button>
                            </div>
                        </article>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </>
        );
    }
}

export interface IEditProps extends RouteComponentProps<{ id: string}> { }
export interface IEditState {
    username: string;
    message: string;
}

export default Edit;