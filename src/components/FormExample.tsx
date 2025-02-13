import React, { useState } from "react";
import "./FormExample.css";

interface FormData {
    fullName: string;
    email: string;
    password: string;
    gender: string;
    hobbies: string[];
    country: string;
    birthDate: string;
    phone: string;
    address: string;
    agree: boolean;
    zipCode: string;
    comments: string;
    education: string;
    experience: string;
    skills: string[];
}

const FormExample: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        password: "",
        gender: "",
        hobbies: [],
        country: "",
        birthDate: "",
        phone: "",
        address: "",
        agree: false,
        zipCode: "",
        comments: "",
        education: "",
        experience: "",
        skills: []
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type, } = e.target;

        if (type === "checkbox") {
            if (name === "agree") {
                // setFormData({ ...formData, [name]: checked });
            } else {
                // setFormData({
                //     ...formData,
                //     hobbies: checked
                //         ? [...formData.hobbies, value]
                //         : formData.hobbies.filter((hobby) => hobby !== value),
                // });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        alert("Form Submitted! Check console for data.");
    };

    return (
        <div className="form-container">
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <label>Full Name:</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />

                <label>Phone:</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

                <label>Birth Date:</label>
                <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} required />

                <label>Gender:</label>
                <div className="radio-group">
                    <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
                    <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
                </div>

                <label>Hobbies:</label>
                <div className="checkbox-group">
                    <input type="checkbox" name="hobbies" value="Reading" onChange={handleChange} /> Reading
                    <input type="checkbox" name="hobbies" value="Traveling" onChange={handleChange} /> Traveling
                    <input type="checkbox" name="hobbies" value="Music" onChange={handleChange} /> Music
                </div>

                <label>Country:</label>
                <select name="country" value={formData.country} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                </select>

                <label>Address:</label>
                <textarea name="address" value={formData.address} onChange={handleChange} required></textarea>

                <label>Zip Code:</label>
                <input type="number" name="zipCode" value={formData.zipCode} onChange={handleChange} required />

                <label>Education:</label>
                <select name="education" value={formData.education} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="High School">High School</option>
                    <option value="Bachelor">Bachelor's</option>
                    <option value="Master">Master's</option>
                </select>

                <label>Experience (Years):</label>
                <input type="number" name="experience" value={formData.experience} onChange={handleChange} required />

                <label>Skills:</label>
                <div className="checkbox-group">
                    <input type="checkbox" name="skills" value="JavaScript" onChange={handleChange} /> JavaScript
                    <input type="checkbox" name="skills" value="React" onChange={handleChange} /> React
                    <input type="checkbox" name="skills" value="Node.js" onChange={handleChange} /> Node.js
                </div>

                <label>Comments:</label>
                <textarea name="comments" value={formData.comments} onChange={handleChange}></textarea>

                <div className="checkbox-group">
                    <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} required />
                    <span>I agree to the terms & conditions</span>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormExample;
