import './HeroSection.css';

const HeroSection = ({ name, iso, slogan, status }) => {
    return (
        <section id="home" className="hero-section">
            <h1>{name} <span className="iso-reg">{iso}</span></h1>
            <p className="slogan">{slogan}</p>
            <p className="status">{status}</p>
        </section>
    );
};

export default HeroSection;