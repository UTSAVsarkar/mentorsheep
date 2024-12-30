import React, {useRef, useState, useEffect} from 'react';
import MentorSheepLogo from './images/MentorSheep.svg';
import {About} from "./components/About/About.tsx";
import {Articles} from "./components/Articles/Articles.tsx";
import {People} from "./components/People/People.tsx";
import {Testimonials} from "./components/Testimonials/Testimonials.tsx";
import {Connect} from "./components/Connect/Connect.tsx";
import './App.css'

const center: React.CSSProperties = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
    fontSize: 40,
};

function App() {
    const about = useRef<HTMLDivElement>(null);
    const people = useRef<HTMLDivElement>(null);
    const testimonialsL = useRef<HTMLDivElement>(null);
    const articles = useRef<HTMLDivElement>(null);
    const connect = useRef<HTMLDivElement>(null);

    const [activeSection, setActiveSection] = useState<string>('about');

    const scrollHandler = (eleRef: React.RefObject<HTMLDivElement>) => {
        if (eleRef.current) {
            eleRef.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    useEffect(() => {
        const sections = [
            {ref: about, name: 'about'},
            {ref: people, name: 'people'},
            {ref: testimonialsL, name: 'testimonials'},
            {ref: articles, name: 'articles'},
            {ref: connect, name: 'connect'},
        ];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const section = sections.find((sec) => sec.ref.current === entry.target);
                        if (section) {
                            setActiveSection(section.name);
                        }
                    }
                });
            },
            {threshold: 0.6}
        );

        sections.forEach((section) => {
            if (section.ref.current) {
                observer.observe(section.ref.current);
            }
        });

        return () => {
            sections.forEach((section) => {
                if (section.ref.current) {
                    observer.unobserve(section.ref.current);
                }
            });
        };
    }, []);


    const renderHeader = () => {
        return (
            <>
                <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <label className="logo" onClick={()=>scrollHandler(about)}>
                        <img
                            src={MentorSheepLogo}
                            alt="Company Logo"
                        />
                        <span>MentorSheep</span>
                    </label>
                    <input type="checkbox" id="check"/>
                    <label htmlFor="check" className="checkbtn">
                        <i className="fas fa-bars"></i>
                    </label>
                    <ul>
                        <li onClick={() => scrollHandler(about)}>
                            <a className={activeSection === 'about' ? 'active' : ''}>
                                About
                            </a>
                        </li>
                        <li onClick={() => scrollHandler(people)}>
                            <a className={activeSection === 'people' ? 'active' : ''}>
                                People
                            </a>
                        </li>
                        <li onClick={() => scrollHandler(testimonialsL)}>
                            <a className={activeSection === 'testimonials' ? 'active' : ''}>
                                Testimonials
                            </a>
                        </li>
                        <li onClick={() => scrollHandler(articles)}>
                            <a className={activeSection === 'articles' ? 'active' : ''}>
                                Articles
                            </a>
                        </li>
                        <li onClick={() => scrollHandler(connect)}>
                            <a className={activeSection === 'connect' ? 'active' : ''}>
                                Connect
                            </a>
                        </li>
                    </ul>
                </nav>
                <section></section>
            </>
        )
    }

    return (
        <div>
            {renderHeader()}

            <div
                ref={about}
                style={{
                    ...center,
                }}
            >
                <About scrollHandler={scrollHandler} connect={connect}/>
            </div>
            <div
                ref={people}
                style={{
                    background: 'blue',
                    ...center,
                }}
            >
                <People/>
            </div>
            <div
                ref={testimonialsL}
                style={{
                    background: 'wheat',
                    ...center,
                }}
            >
                <Testimonials/>
            </div>
            <div
                ref={articles}
                style={{
                    background: 'green',
                    ...center,
                }}
            >
                <Articles/>
            </div>
            <div
                ref={connect}
                style={{
                    background: 'orange',
                    ...center,
                }}
            >
                <Connect/>
            </div>
        </div>
    );
}

export default App;
