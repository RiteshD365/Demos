import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    H: ''
  });
  const [same,setSame] = useState([])
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the new value is different from the previous value
    if (!users.length || users[users.length - 1].H !== formData.H) {
      setUsers([...users, formData]);
    }else{
      setSame([...same, formData]);
    }
    // setFormData({ H: '' });
    console.log('Form data:', formData);
    console.log('All users:', users);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <select id="cars" name="H" value={formData.H} onChange={handleChange}>
          <option value="">Select an option</option>
          <option value="H">H</option>
          <option value="S">S</option>
        </select>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
      <div>
        <h2>Submitted Users:</h2>
        <ul>
          {users.map((user, index) => (
            <li style={{ display: 'inline-block', marginRight: '10px' }} key={index}>
              selected {user.H}
            </li>
          ))}
          {same.map((same, index) => (
            <li style={{ display: 'block', marginRight: '10px' }} key={index}>
              selected {same.H}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyForm;