import { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ courses }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        age: '',
        course: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
        if (!formData.age.trim()) {
            newErrors.age = 'Age is required.';
        } else if (isNaN(formData.age) || Number(formData.age) <= 0) {
            newErrors.age = 'Please enter a valid age.';
        }
        if (!formData.course) newErrors.course = 'Please select a course.';
        if (!formData.message.trim()) newErrors.message = 'Message is required.';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(false);
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            // Form is valid, proceed with submission (e.g., API call)
            console.log('Form Data Submitted:', formData);
            alert('Inquiry submitted successfully!');
            setIsSubmitted(true);
            // Reset form
            setFormData({ fullName: '', age: '', course: '', message: '' });
            setErrors({});
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <section id="contact" className="contact-form-section">
            <h3>Inquire Now</h3>
            <p>Admission open. Register now!</p>
            {isSubmitted && <p className="success-message">Thank you for your inquiry! We will get back to you soon.</p>}
            <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={errors.fullName ? 'error-input' : ''}
                    />
                    {errors.fullName && <p className="error-message">{errors.fullName}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="age">Age *</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className={errors.age ? 'error-input' : ''}
                    />
                    {errors.age && <p className="error-message">{errors.age}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="course">Course Interested In *</label>
                    <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className={errors.course ? 'error-input' : ''}
                    >
                        <option value="">-- Select a Course --</option>
                        {courses.map((courseName, index) => (
                            <option key={index} value={courseName}>{courseName}</option>
                        ))}
                    </select>
                    {errors.course && <p className="error-message">{errors.course}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? 'error-input' : ''}
                    ></textarea>
                    {errors.message && <p className="error-message">{errors.message}</p>}
                </div>

                <button type="submit" className="submit-button">Submit Inquiry</button>
            </form>
        </section>
    );
};

export default ContactForm;