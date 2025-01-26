import React, { useState } from "react";
import axios from "axios";
import "./PlacementRegistrationForm.css"; // Import the external CSS file

const PlacementRegistrationForm = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    password: "",
    rePassword: "",
    gender: "",
    email: "",
    dob: "",
    mobile: "",
    address: "",
    branch: "CSE",
    tenth: "",
    twelfth: "",
    ug: "",
    plang: [],
    db: [],
    linkedIn: "",
    leetCode: "",
    gfg: "",
    github: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...(prev[name] || []), value]
          : prev[name].filter((v) => v !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.rePassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      await axios.post("http://localhost:5000/register", formData);
      alert("Registration successful!");
      // Reset the form state after successful submission
      setFormData(initialFormData);
    } catch (error) {
      alert("Error in submission: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Placement Registration Form</h3>

      {/* Personal Information */}
      <fieldset>
        <legend>Personal Information</legend>
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password" name="rePassword" value={formData.rePassword} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} required /> Male
          <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange} required /> Female
        </div>
        <div className="form-group">
          <label>Email ID:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>DOB:</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Mobile:</label>
          <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required pattern="[0-9]{10}" />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea name="address" value={formData.address} rows="3" cols="30" onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
          <label>LinkedIn Profile:</label>
          <input type="url" name="linkedIn" value={formData.linkedIn} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>LeetCode ID:</label>
          <input type="text" name="leetCode" value={formData.leetCode} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>GFG ID:</label>
          <input type="text" name="gfg" value={formData.gfg} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>GitHub ID:</label>
          <input type="text" name="github" value={formData.github} onChange={handleChange} required />
        </div>
      </fieldset>

      {/* Academics */}
      <fieldset>
        <legend>Academics</legend>
        <div className="form-row">
          <label>Branch:</label>
          <select name="branch" value={formData.branch} onChange={handleChange} required>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="IT">IT</option>
            <option value="MECH">MECH</option>
            <option value="AIDS">AIDS</option>
          </select>
          <label>10th:</label>
          <input type="number" name="tenth" value={formData.tenth} onChange={handleChange} required />
          <label>12th:</label>
          <input type="number" name="twelfth" value={formData.twelfth} onChange={handleChange} required />
          <label>CGPA:</label>
          <input type="number" name="ug" value={formData.ug} step="any" onChange={handleChange} required />
        </div>
      </fieldset>

      {/* Skills */}
      <fieldset>
        <legend>Skills</legend>
        <div className="skills-grid">
          <div>
            <label>Programming Languages:</label>
            <div className="grid-row">
              <div><input type="checkbox" name="plang" value="C" checked={formData.plang.includes("C")} onChange={handleChange} /> C</div>
              <div><input type="checkbox" name="plang" value="C++" checked={formData.plang.includes("C++")} onChange={handleChange} /> C++</div>
              <div><input type="checkbox" name="plang" value="C#" checked={formData.plang.includes("C#")} onChange={handleChange} /> C#</div>
              <div><input type="checkbox" name="plang" value="Java" checked={formData.plang.includes("Java")} onChange={handleChange} /> Java</div>
              <div><input type="checkbox" name="plang" value="Python" checked={formData.plang.includes("Python")} onChange={handleChange} /> Python</div>
            </div>
          </div>
          <div>
            <label>DBMS:</label>
            <div className="grid-row">
              <div><input type="checkbox" name="db" value="Oracle" checked={formData.db.includes("Oracle")} onChange={handleChange} /> Oracle</div>
              <div><input type="checkbox" name="db" value="MySQL" checked={formData.db.includes("MySQL")} onChange={handleChange} /> MySQL</div>
              <div><input type="checkbox" name="db" value="DB2" checked={formData.db.includes("DB2")} onChange={handleChange} /> DB2</div>
              <div><input type="checkbox" name="db" value="MongoDB" checked={formData.db.includes("MongoDB")} onChange={handleChange} /> MongoDB</div>
              <div><input type="checkbox" name="db" value="Others" checked={formData.db.includes("Others")} onChange={handleChange} /> Others</div>
            </div>
          </div>
        </div>
      </fieldset>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <input type="submit" value="Register" id="register" style={{ margin: "0 auto" }} /><br />
        <input type="reset" value="Clear" style={{ marginLeft: "10px" }} />
      </div>
    </form>
  );
};

export default PlacementRegistrationForm;
