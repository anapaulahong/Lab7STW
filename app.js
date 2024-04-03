import React, { Component } from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [],
            loading: true,
            error: null
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch('/blogs');
            if (!response.ok) {
                throw new Error('hubo un error en la red :(');
            }
            const blogs = await response.json();
            this.setState({ blogs, loading: false });
        } catch (error) {
            console.error('hubo un problema al hacer fetch de los blogs:', error);
            this.setState({ error: error.message, loading: false });
        }
    }

    render() { //ver
        const { blogs, loading, error } = this.state;

        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        return (
            <div>
                <h1>Trends 2024</h1>
                <img src="./adidastrainers.jpg" alt="tenis" />
                <p>Este es un sitio web simple construido con React y Babel.</p>
            </div>
        );
    }
}
