import styles from "./page.module.css";
// Components
import Header from "./components/Header";


export default function Home() {
    return (
        <main className={styles.container}>
            <Header />
            <div className={styles.columnsContainer}>
                <section className={styles.block} aria-labelledby="about-me-heading">
                    <h2 id="about-me-heading" className={styles.subTitle}>Professional summary</h2>
                    <article className={styles.jobEntry} style={{ marginTop: 6 }}>
                        <p className={styles.paragraph}>
                            Engineering Lead and Fullstack Developer with 8+ years of experience designing, building, and scaling web and mobile applications in high-growth product environments. Proven track record in leading engineering teams, defining system architecture, and delivering high-performance products. Strong background in fintech, distributed systems, and cloud-native architectures.
                        </p>
                    </article>
                </section>
                {/* EXPERIENCE */}
                <section className={styles.block} aria-labelledby="about-me-heading">
                    <h2 id="about-me-heading" className={styles.subTitle}>Technical skills</h2>
                    <article className={styles.jobEntry}>
                        <ul className={styles.jobList}>
                            <li className={styles.job}>Languages: TypeScript, JavaScript, C#</li>
                            <li className={styles.job}>Frameworks: Node.js, NestJS, React, React Native, GraphQL</li>
                            <li className={styles.job}>Databases: PostgreSQL, Redis, Elasticsearch, Firebase</li>
                            <li className={styles.job}>Cloud & Infrastructure: Google Cloud Platform</li>
                            <li className={styles.job}>Other: Real-time systems, web scraping, mobile app architecture</li>
                        </ul>
                    </article>
                </section>
                <section className={styles.block} aria-labelledby="experience-heading">
                    <h2 id="experience-heading" className={styles.subTitle}>Experience</h2>
                    {/* NAVIT - START */}
                    <article className={styles.jobEntry} style={{ marginTop: 6 }}>
                        <h3 className={styles.companyName}>NAVIT - Engineering Lead</h3>
                        <time className={styles.date} dateTime="2022-08">08/2022 - Current</time>
                        <ul className={styles.jobList}>
                            <li className={styles.job}>Led the engineering team and defined the overall system architecture for a fast-growing mobility and fintech platform.</li>
                            <li className={styles.job}>Took features end-to-end from concept through design, implementation, and production deployment.</li>
                            <li className={styles.job}>Architected and implemented a scalable backend using NestJS, PostgreSQL, Redis, and Google Cloud Platform.</li>
                            <li className={styles.job}>Designed and delivered the initial React Native mobile application, establishing the foundation for future development.</li>
                            <li className={styles.job}>Integrated the platform with banking systems and multiple third-party mobility service providers.</li>
                            <li className={styles.job}>Optimized backend services to handle increasing load and usage as the company scaled.</li>
                            <li className={styles.job}>Improved team performance, delivery predictability, and engineering best practices.</li>
                        </ul>
                    </article>
                    {/* COQUET CONSULTING - START */}
                    <article className={styles.jobEntry}>
                        <h3 className={styles.companyName}>Coquet Consulting - Fullstack Engineer</h3>
                        <time className={styles.date} dateTime="2019-02/2022-08">02/2019 - 08/2022</time>
                        <ul className={styles.jobList}>
                            <li className={styles.job}>Worked across multiple client projects as a fullstack engineer.</li>
                            <li className={styles.job}>Developed an event and incident management system using Node.js and PostgreSQL, including real-time information sharing.</li>
                            <li className={styles.job}>Built an aggregator e-commerce platform for mechanical parts with a GraphQL API and automated web scrapers.</li>
                            <li className={styles.job}>Collaborated closely with stakeholders to translate business requirements into technical solutions.</li>
                        </ul>
                    </article>
                    {/* EVODECK - START */}
                    <article className={styles.jobEntry}>
                        <h3 className={styles.companyName}>Evodeck Software - Fullstack Engineer</h3>
                        <time className={styles.date} dateTime="2017-04/2019-01">04/2017 - 01/2019</time>
                        <ul className={styles.jobList}>
                            <li className={styles.job}>Contributed to several software products across web and mobile platforms.</li>
                            <li className={styles.job}>Developed a React Native mobile application.</li>
                            <li className={styles.job}>Built a garage management system using React and C#.</li>
                            <li className={styles.job}>Developed an exam scheduling system in C#.</li>
                            <li className={styles.job}>Worked on a chatbot creation platform using React, Firebase, and Node.js.</li>
                        </ul>
                    </article>
                </section>
                {/* SOFT SKILLS */}
                <section className={styles.block} aria-labelledby="soft-skills-heading">
                    <h2 id="soft-skills-heading" className={styles.subTitle}>Soft skills and Leadership</h2>
                    <ul className={styles.jobList}>
                        <li className={styles.job}>Engineering leadership, mentoring and cross-team collaboration</li>
                        <li className={styles.job}>Passion for continuous learning and knowledge sharing</li>
                        <li className={styles.job}>Experience working in trust-based, high-autonomy environments</li>
                        <li className={styles.job}>Adaptability when working in fast-growing environments</li>
                    </ul>
                </section>
                {/* ABOUT ME */}
                <section className={styles.block} aria-labelledby="about-me-heading">
                    <h2 id="about-me-heading" className={styles.subTitle}>Languages</h2>
                    <ul className={styles.jobList}>
                        <li className={styles.job}>Portuguese (Native)</li>
                        <li className={styles.job}>English (Fluent)</li>
                        <li className={styles.job}>Italian (Basic)</li>
                    </ul>
                </section>

            </div>
        </main>
    );
}
