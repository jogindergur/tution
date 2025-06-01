import ContactForm from '../components/ContactForm';
import CoursesOffered from '../components/CoursesOffered';
import FacultyInfo from '../components/FacultyInfo';
import HeroSection from '../components/HeroSection';
import NavigationBar from '../components/NavigationBar';
import './HomePage.css';

const HomePage = () => {
    const instituteDetails = {
        name: "Bhargav Institute of Education classes",
        iso: "(ISO Reg.)",
        slogan: "We Are the Top learning Platform",
        status: "Register now, Admission open.",
        teachingCourses: [
            "1 to 12th class (All Boards Studies)",
            "B.A.",
            "L.L.B.",
            "M.A."
        ],
        certificationCourses: [
            "English Speaking",
            "Computer Course",
            "Beautician Course"
        ],
        faculty: {
            name: "Mrs. Swati Tyagi",
            description: "Experienced Certified Teacher",
            experience: "5+ years teaching experience"
        }
    };

    const allCoursesForForm = [
        ...instituteDetails.teachingCourses,
        ...instituteDetails.certificationCourses
    ];

    return (
        <div>
            <NavigationBar instituteName={instituteDetails.name} />
            <div className="homepage-container">
                <div className="main-content">
                    <HeroSection
                        name={instituteDetails.name}
                        iso={instituteDetails.iso}
                        slogan={instituteDetails.slogan}
                        status={instituteDetails.status}
                    />
                    <CoursesOffered
                        teachingCourses={instituteDetails.teachingCourses}
                        certificationCourses={instituteDetails.certificationCourses}
                    />
                    <FacultyInfo faculty={instituteDetails.faculty} />
                </div>
                <aside className="sidebar-form">
                    <ContactForm courses={allCoursesForForm} />
                </aside>
            </div>
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} {instituteDetails.name}. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;