import './FacultyInfo.css';

const FacultyInfo = ({ faculty }) => {
    return (
        <section id="faculty" className="faculty-section">
            <h2>Meet Our Faculty</h2>
            <div className="faculty-member">
                <h3>{faculty.name}</h3>
                <p>{faculty.description}</p>
                <p><strong>Experience:</strong> {faculty.experience}</p>
            </div>
        </section>
    );
};

export default FacultyInfo;