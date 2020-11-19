import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className="bg-blue shadow-lg py-2">
                <main className="container d-lg-flex justify-content-lg-between flex-row nav-content">
                    <section className="small txt-white">2020 Zwallet. All right reserved.</section>
                    <section className="d-lg-flex justify-content-lg-center">
                        <span className="small txt-white">+62 5637 8882 9901</span>
                        <span className="small txt-white ml-5">contact@zwallet.com</span>
                    </section>
                </main>
            </footer>
        )
    }
}

export default Footer;