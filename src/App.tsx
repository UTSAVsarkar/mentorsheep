import React, {useRef, useState, useEffect} from 'react';
import MentorSheepLogo from './images/MentorSheep.svg';

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

    const renderHeader = (): JSX.Element => {
        return (
            <header
                style={{
                    position: 'sticky',
                    top: 0,
                    backgroundColor: 'white',
                    zIndex: 1000,
                    padding: '10px 20px',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >

                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img
                        src={MentorSheepLogo}
                        alt="Company Logo"
                        style={{width: 40, height: 40, marginRight: 10}}
                    />
                    <span style={{fontSize: 20, fontWeight: 'bold'}}>MentorSheep</span>
                </div>

                <ul
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        cursor: 'pointer',
                        margin: 0,
                        padding: 0,
                        listStyle: 'none',
                    }}
                >
                    <li
                        onClick={() => scrollHandler(about)}
                        style={{
                            margin: '0 15px',
                            textDecoration: activeSection === 'about' ? 'underline' : 'none',
                        }}
                    >
                        About
                    </li>
                    <li
                        onClick={() => scrollHandler(people)}
                        style={{
                            margin: '0 15px',
                            textDecoration: activeSection === 'people' ? 'underline' : 'none',
                        }}
                    >
                        People
                    </li>
                    <li
                        onClick={() => scrollHandler(testimonialsL)}
                        style={{
                            margin: '0 15px',
                            textDecoration: activeSection === 'testimonials' ? 'underline' : 'none',
                        }}
                    >
                        Testimonials
                    </li>
                    <li
                        onClick={() => scrollHandler(articles)}
                        style={{
                            margin: '0 15px',
                            textDecoration: activeSection === 'articles' ? 'underline' : 'none',
                        }}
                    >
                        Articles
                    </li>
                    <li
                        onClick={() => scrollHandler(connect)}
                        style={{
                            margin: '0 15px',
                            textDecoration: activeSection === 'connect' ? 'underline' : 'none',
                        }}
                    >
                        Connect
                    </li>
                </ul>
            </header>
        );
    };

    return (
        <div>
            {renderHeader()}

            <div
                ref={about}
                style={{
                    background: 'grey',
                    ...center,
                }}
            >
                About
            </div>
            <div
                ref={people}
                style={{
                    background: 'blue',
                    ...center,
                }}
            >
                People
            </div>
            <div
                ref={testimonialsL}
                style={{
                    background: 'wheat',
                    ...center,
                }}
            >
                Testimonials
            </div>
            <div
                ref={articles}
                style={{
                    background: 'green',
                    ...center,
                }}
            >
                Articles
            </div>
            <div
                ref={connect}
                style={{
                    background: 'orange',
                    ...center,
                }}
            >
                Connect
            </div>
        </div>
    );
}

export default App;
