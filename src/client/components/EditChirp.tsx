import * as React from 'react';
import * as moment from 'moment';
import { IChirp } from '../utils/Interface';
// import { Link } from 'react-router-dom';

const EditCard: React.FC<IEditCardProps> = props => {
    return (
            <div className="col-md-6 offset-md-3">
                <article className="card my-2 shadow-sm border border-primary">
                    <div className="card-body text-center py-5">
                        <input type="text" className="form-control mb-3" defaultValue={props.chirp.username}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ username: e.target.value})}
                        />

                        <input type="text" className="form-control" defaultValue={props.chirp.message}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ message: e.target.value})}
                        />
                    <button className="btn btn-primary text-white my-2">Edit Chirp!</button>
                    </div>
                </article>
            </div>
    );
}

interface IEditCardProps {
    chirp: IChirp
}

export default EditCard;