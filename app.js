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
                <h1>blog posts</h1>
                <ul>
                    {blogs.map(blog => (
                        <li key={blog.id}>
                            <h2>{blog.title}</h2>
                            <p>{blog.content}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
