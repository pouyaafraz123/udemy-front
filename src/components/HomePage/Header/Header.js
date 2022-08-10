import React, {Component} from "react";
import Layout from "../../../containers/Layout/Layout";
import TopBar from "./TopBar/TopBar";
import SideDraw from "../../UI/SideDraw/SideDraw";

class Header extends Component {
    state = {
        open: false
    }

    sideDrawHandler() {
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <Layout>
                <TopBar open={this.state.open} clicked={() => this.sideDrawHandler()}/>
                <SideDraw open={this.state.open}/>
            </Layout>
        );
    }
}

export default Header;