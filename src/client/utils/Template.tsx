import * as React from 'react';

class Template extends React.Component<ITemplateProps, ITemplateState> {
    render() {
        return(
            <main className="container">
                <section className="row my-2">
                    <div className="col-md-6">
                        <h1 className="text-center text-warning">Template Page</h1>
                    </div>
                </section>
            </main>
        );
    }
}

interface ITemplateProps {}
interface ITemplateState {}

export default Template;