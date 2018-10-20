// React
import React, { Component } from "react";
import ReactDOM from "react-dom";
// Components
import Column from "./components/Column";
import Footer from "./components/Footer";
import Header from "./components/Header";

const styles = {
    block: {
        marginBottom: 20
    },
    companyName: {
        color: "#0077B5",
        fontSize: 16,
        marginBottom: 5,
        marginLeft: 10,
        marginTop: 10
    },
    container: {
        display: "flex",
        flexDirection: "column",
        height: "296mm",
        width: "210mm"
    },
    columnsContainer: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        marginLeft: "12mm",
        marginRight: "12mm"
    },
    date: {
        fontSize: 13,
        fontStyle: "italic",
        fontWeight: 300,
        marginBottom: 5,
        marginLeft: 10
    },
    job: {
        fontSize: 15,
        fontWeight: 300,
        marginLeft: 25,
        marginTop: 5
    },
    paragraph: {
        fontSize: 15,
        fontWeight: 300,
        marginLeft: 10,
        marginTop: 5,
        textAlign: "justify",
        maxWidth: "95%"
    },
    subTitle: {
        fontSize: 17,
        fontWeight: 600
    }
};

class App extends Component {
    render() {
        return (
            <div style={styles.container}>
                <Header />
                <div style={styles.columnsContainer}>
                    <Column>
                        {/* ABOUT ME */}
                        <div style={styles.block}>
                            <div style={styles.subTitle}>About me</div>
                            <div style={styles.paragraph}>
                                Nationality: Portuguese
                            </div>
                            <div style={styles.paragraph}>
                                Spoken languages: Portuguese and English
                            </div>
                        </div>
                        {/* EXPERIENCE */}
                        <div style={styles.block}>
                            <div style={styles.subTitle}>Experience</div>
                            {/* EVODECK - START */}
                            <div style={styles.companyName}>
                                Evodeck Software
                            </div>
                            <div style={styles.date}>04/2017 - Current</div>
                            <div style={styles.job}>Fullstack development</div>
                            <div style={styles.job}>Dev ops</div>
                            <div style={styles.job}>Team leading</div>
                            <div style={styles.job}>Project architecture</div>
                            {/* CIBERSUR - START */}
                            <div style={styles.companyName}>
                                Cibersur (curricular internship)
                            </div>
                            <div style={styles.date}>03/2014 - 06/2014</div>
                            <div style={styles.job}>Fullstack development</div>
                            {/* ALMINA - START */}
                            <div style={styles.companyName}>
                                Almina (curricular internship)
                            </div>
                            <div style={styles.date}>05/2013 - 07/2013</div>
                            <div style={styles.job}>IT Support</div>
                            {/* FC INFORMATICA - START */}
                            <div style={styles.companyName}>
                                FC Informática (curricular internship)
                            </div>
                            <div style={styles.date}>05/2012 - 07/2012</div>
                            <div style={styles.job}>IT Support</div>
                        </div>
                        {/* EDUCATION */}
                        <div style={styles.block}>
                            <div style={styles.subTitle}>Education</div>
                            {/* UALG - START */}
                            <div style={styles.companyName}>
                                Licenciatura in Computer Engineering
                            </div>
                            <div style={styles.date}>
                                Universidade do Algarve
                            </div>
                            {/* IPS - START */}
                            <div style={styles.companyName}>
                                Specialization in Technology and Information
                                Systems Programming
                            </div>
                            <div style={styles.date}>
                                Instituto Politécnico de Setúbal
                            </div>
                            {/* ESA - START */}
                            <div style={styles.companyName}>
                                Management of Information Systems and Computer
                                Programming
                            </div>
                            <div style={styles.date}>
                                Escola Secundária de Aljustrel
                            </div>
                        </div>
                        {/* EVENTS */}
                        <div style={styles.block}>
                            <div style={styles.subTitle}>Events</div>
                            <div style={styles.paragraph}>
                                "React Workshop" - Speaker at Instituto
                                Politécnico de Beja
                            </div>
                            <div style={styles.paragraph}>
                                "React-Native is AWESOME" - Speaker at Geek
                                Sessions Faro
                            </div>
                            <div style={styles.paragraph}>
                                Participant in Shift Faro hackathon
                            </div>
                            <div style={styles.paragraph}>
                                Participant in Pixels Camp (1st and 2nd
                                editions)
                            </div>
                        </div>
                    </Column>
                    <Column>
                        {/* PROJECTS */}
                        <div style={styles.block}>
                            <div style={styles.subTitle}>
                                Recent Projects and Technologies
                            </div>
                            {/* EDU - START */}
                            <div style={styles.companyName}>
                                Web application that allows preparing and
                                running employee trainings
                            </div>
                            <div style={styles.job}>Express JS</div>
                            <div style={styles.job}>React</div>
                            <div style={styles.job}>GraphQL</div>
                            <div style={styles.job}>Mongo</div>
                            <div style={styles.job}>Kubernetes</div>
                            <div style={styles.job}>Docker</div>
                            <div style={styles.job}>CI / CD with Circle CI</div>
                            {/* LTS - START */}
                            <div style={styles.companyName}>
                                Integration of a module in an enterprise system
                                that manages various exams
                            </div>
                            <div style={styles.job}>.NET Framework</div>
                            <div style={styles.job}>React</div>
                            <div style={styles.job}>SQL Server</div>
                            <div style={styles.job}>
                                CI with Visual Studio Team Services
                            </div>
                            {/* COACH - START */}
                            <div style={styles.companyName}>
                                Web and mobile application to manage workflows
                                for bot chats
                            </div>
                            <div style={styles.job}>React-Native</div>
                            <div style={styles.job}>React</div>
                            <div style={styles.job}>Firebase</div>
                            {/* PIT - START */}
                            <div style={styles.companyName}>
                                Garage management ERP system
                            </div>
                            <div style={styles.job}>React</div>
                            <div style={styles.job}>
                                Elastic-Search and Logstash
                            </div>
                            <div style={styles.job}>CI / CD with Appveyor</div>
                        </div>
                        {/* SOFT SKILLS */}
                        <div style={styles.block}>
                            <div style={styles.subTitle}>Soft skills</div>
                            <div style={styles.paragraph}>
                                I am a tech enthusiast with a craving for
                                learning who enjoys attending tech events and
                                participating in hackathons. I love to talk to
                                other people about technology and share
                                knowledge because I think this is the best way
                                of learning.
                            </div>
                            <div style={styles.paragraph}>
                                I like relaxed work environments that have a
                                great sense of humor and people can become
                                friends.
                            </div>
                            <div style={styles.paragraph}>
                                I practiced competitive swimming for about five
                                years for the FPN and still do some sports now
                                and then.
                            </div>
                            <div style={styles.paragraph}>
                                Lastly I enjoy playing videogames and the taste
                                of a cold beer.
                            </div>
                        </div>
                    </Column>
                </div>
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
