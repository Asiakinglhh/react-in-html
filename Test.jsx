class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <h1>JSX快速引入</h1>
                <button>你好</button>
            </div>
        );
    }
}

ReactDOM.render(<Test/>, document.getElementById('sibiling'));