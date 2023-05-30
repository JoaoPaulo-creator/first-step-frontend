'use client'

import { useState } from "react"

export default function NewContact() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    salary: ''
  });

  function handleChange(e: any) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      [e.target.age]: e.target.value,
      [e.target.salary]: e.target.value,
    });
  };

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(formData);


    // fetch('https://dummy.restapiexample.com/api/v1/create', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(formData)
    // })
    //   .then(response => response.json())
    //   .then(data => {

    //     console.log(data);
    //   })
    //   .catch(error => {

    //     console.error(error);
    //   });
  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        {/* line clamp serve para quebar a linha */}
        <input className="border rounded-sm line-clamp-2 px-1"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          maxLength={20}
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input className="border rounded-sm line-clamp-2 px-1"
          type="age"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          maxLength={3}
          minLength={1}
        />
      </div>
      <div>
        <label htmlFor="salary">Salary:</label>
        <input
          className="border rounded-sm line-clamp-2 px-1"
          type="salary"
          id="salary"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          maxLength={10}
          minLength={1}
        />
      </div>
      <button type="submit" className="rounded-lg bg-blue-500 py-2 px-4 text-gray-100 mt-4">Submit</button>
    </form>
  );

}
