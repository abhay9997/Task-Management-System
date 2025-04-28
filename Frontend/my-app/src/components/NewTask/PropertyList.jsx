import React, { useState } from "react";
import PropertyItem from "./PropertyItem";
import axios from 'axios';
import TitleField from "./TitleField";
import { useNavigate } from "react-router-dom";

function PropertyList() {
  const properties = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/077a58c3f191943c135dc8a82cf2b3a2d733daf6fee7e12fa03f0eeb6ad39b22?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833", label: "Status" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1c1324f8bfc037b87c8cd2fe5a79f26184c9d81068d6532ed813b3fc2a12ed6?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833", label: "Priority" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c912e8119ced91a7cfd5a7ed6dba7fe228ee1f19520fb8bf6eea9c779c7a6cb8?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833", label: "Deadline" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d16f093d7eb39c5deec8049b1a2d0754e0068d277b531d5e23dbb2f2fdfec627?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833", label: "Description" }
  ];

  const [selectedProperties, setSelectedProperties] = useState({
    title: '',
    status: 'Open Todo',
    priority: 'Low',
    deadline: '',
    description: ''
  });

  const handlePropertyChange = (label, value) => {
    setSelectedProperties((prev) => ({
      ...prev,
      [label.toLowerCase()]: value
    }));
  };

  const handleTitleChange = (e) => {
    setSelectedProperties((prev) => ({
      ...prev,
      title: e.target.value
    }));
  };

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('authToken'); // Get the token from local storage
      const userId = localStorage.getItem('user_id'); // Get the user ID from local storage
      console.log(userId);

      const response = await axios.post(
        'http://localhost:5500/api/properties',
        { ...selectedProperties, userId }, // Include userId in the request body
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      console.log('Data sent to backend:', response.data);

      navigate('/UserPage');

    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} required>
        <TitleField
          type="text"
          placeholder="Title"
          onChange={handleTitleChange}
        />
        <section className="mt-8 max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full ">
              <div className="flex flex-col grow text-base whitespace-nowrap text-stone-500 max-md:mt-10 ">
                {properties.map((prop, index) => (
                  <div key={index} className="flex gap-5 items-center mt-8 first:mt-0">
                    <PropertyItem icon={prop.icon} label={prop.label} />
                    {prop.label === 'Status' && (
                      <select required
                        value={selectedProperties.status}
                        onChange={(e) => handlePropertyChange('status', e.target.value)}
                      >
                        <option value="Open Todo">Open Todo</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Under Review">Under Review</option>
                        <option value="Complete">Complete</option>
                      </select>
                    )}
                    {prop.label === 'Priority' && (
                      <select required
                        value={selectedProperties.priority}
                        onChange={(e) => handlePropertyChange('priority', e.target.value)}
                      >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="Urgent">Urgent</option>
                      </select>
                    )}
                    {prop.label === 'Deadline' && (
                      <input
                        type="date" required
                        value={selectedProperties.deadline}
                        onChange={(e) => handlePropertyChange('deadline', e.target.value)}
                      />
                    )}
                    {prop.label === 'Description' && (
                      <textarea required
                        value={selectedProperties.description}
                        onChange={(e) => handlePropertyChange('description', e.target.value)}
                        placeholder="Description"
                        className="text-black ml-3 mt-6 w-auto"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button type="submit" className="mt-5 p-2 bg-blue-500 text-white rounded">Submit</button>
        </section>
      </form>
    </>
  );
}

export default PropertyList;
