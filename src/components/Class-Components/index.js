import { Component } from "react";
import VegCard from "../../pages/Market/vegCard";
import axios from "axios";

class MyComponent extends Component {
    state = {
        vegData: [],

    }
    componentDidMount() {
        axios.get("http://localhost:8000/market/vegetables")
            .then((res) => {
                // this.setState((prevState) => {
                //     // return prevState.vegData = res.data   
                // })
            }).catch((err) => {
                return console.log(err)
            });


    }
    click() {
        window.location.replace('/login') 
    }
    render() {
        const { vegData } = this.state
        return (
            <>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", marginTop: "10px" }}>{vegData.map((item) => {
                    return <VegCard key={item._id} vegdata={item} />
                })}</div>
                <button onClick={this.click}>clickme</button>

            </>
        )
    }
}

export default MyComponent