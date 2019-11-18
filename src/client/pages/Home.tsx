import * as React from 'react';
import { IChirp } from '../utils/Interface';
import ChirpCard from '../components/ChirpCard';

class Home extends React.Component<IHomeProps, IHomeState> {

    constructor(props: IHomeProps) {
        super(props);
        this.state = {
            chirps: []
        };
    }

    async componentDidMount() {
        try {
            let res = await fetch('/api/chirps');
            let chirps = await res.json();
            this.setState({ chirps });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return(
            <>
                <div className="bg-secondary">
                    <main className="container py-5">
                        <h1 className="text-center text-white">Chirper!</h1>
                    </main>
                </div>
                <div>
                    <main className="container py-3">
                        <section className="row">
                            {this.state.chirps.map(chirp => (
                                <ChirpCard key={`chirpcard-${chirp.id}`} chirp={chirp} />
                            ))}
                        </section>
                    </main>
                </div>
            </>
        );
    }
}

interface IHomeProps {}
interface IHomeState {
    chirps: IChirp[];
}

export default Home;