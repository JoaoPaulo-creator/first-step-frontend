'use client'

import { useState } from "react"

export default function NewContact() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    salary: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to the backend using Fetch API
    fetch('https://dummy.restapiexample.com/api/v1/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the backend
        console.log(data);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="age"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="salary">Salary:</label>
        <input
          type="salary"
          id="salary"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="rounded-lg bg-blue-500 py-2 px-4 text-gray-100">Submit</button>
    </form>
  );


}
