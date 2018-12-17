import React, { Component } from 'react';
import Header from '../../components/Global/Header';
import Body from '../../components/Global/Body';
import Footer from '../../components/Global/Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}

export default Home