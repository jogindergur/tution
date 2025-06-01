import './CoursesOffered.css';

const CoursesOffered = ({ teachingCourses, certificationCourses }) => {
    return (
        <section id="courses" className="courses-section">
            <h2>Our Courses</h2>
            <div className="course-category">
                <h3>Teaching Courses</h3>
                <ul>
                    {teachingCourses.map((course, index) => (
                        <li key={`teach-${index}`}>{course}</li>
                    ))}
                </ul>
            </div>
            <div className="course-category">
                <h3>Certification Courses</h3>
                <ul>
                    {certificationCourses.map((course, index) => (
                        <li key={`cert-${index}`}>{course}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default CoursesOffered;