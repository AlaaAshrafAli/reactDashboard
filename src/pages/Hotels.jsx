import React, { useState } from 'react';

function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [newHotel, setNewHotel] = useState({
    name: '',
    description: '',
    location: '',
    imageUrl: '',
  });

  const [editingIndex, setEditingIndex] = useState(-1);

  const addHotel = () => {
    if (!newHotel.name || !newHotel.description || !newHotel.location) {
      return;
    }

    setHotels([...hotels, newHotel]);
    setNewHotel({
      name: '',
      description: '',
      location: '',
      imageUrl: '',
    });
  };

  const deleteHotel = (index) => {
    const updatedHotels = [...hotels];
    updatedHotels.splice(index, 1);
    setHotels(updatedHotels);
  };

  const updateHotel = (index) => {
    setEditingIndex(index);
  };

  const saveHotel = (index) => {
    if (!hotels[index].name || !hotels[index].description || !hotels[index].location) {
      return;
    }

    setEditingIndex(-1);
  };

  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Hotels</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          value={newHotel.name}
          onChange={(e) => setNewHotel({ ...newHotel, name: e.target.value })}
          className="p-2 border rounded w-full"
        />
        <input
          type="text"
          placeholder="Description"
          value={newHotel.description}
          onChange={(e) => setNewHotel({ ...newHotel, description: e.target.value })}
          className="p-2 border rounded w-full mt-2"
        />
        <input
          type="text"
          placeholder="Location"
          value={newHotel.location}
          onChange={(e) => setNewHotel({ ...newHotel, location: e.target.value })}
          className="p-2 border rounded w-full mt-2"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newHotel.imageUrl}
          onChange={(e) => setNewHotel({ ...newHotel, imageUrl: e.target.value })}
          className="p-2 border rounded w-full mt-2"
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-2 w-full"
          onClick={addHotel}
        >
          Add New Hotel
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg">
          <thead>
            <tr>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((hotel, index) => (
              <tr key={index}>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      value={hotel.imageUrl}
                      onChange={(e) => {
                        const updatedHotels = [...hotels];
                        updatedHotels[index].imageUrl = e.target.value;
                        setHotels(updatedHotels);
                      }}
                      className="p-2 border rounded w-full"
                    />
                  ) : (
                    <img src={hotel.imageUrl} alt={hotel.name} className="h-16 w-16 object-cover" />
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      value={hotel.name}
                      onChange={(e) => {
                        const updatedHotels = [...hotels];
                        updatedHotels[index].name = e.target.value;
                        setHotels(updatedHotels);
                      }}
                      className="p-2 border rounded w-full"
                    />
                  ) : (
                    hotel.name
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      value={hotel.description}
                      onChange={(e) => {
                        const updatedHotels = [...hotels];
                        updatedHotels[index].description = e.target.value;
                        setHotels(updatedHotels);
                      }}
                      className="p-2 border rounded w-full"
                    />
                  ) : (
                    hotel.description
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      value={hotel.location}
                      onChange={(e) => {
                        const updatedHotels = [...hotels];
                        updatedHotels[index].location = e.target.value;
                        setHotels(updatedHotels);
                      }}
                      className="p-2 border rounded w-full"
                    />
                  ) : (
                    hotel.location
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
                      onClick={() => saveHotel(index)}
                    >
                      Save
                    </button>
                  ) : (
                    <div>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                        onClick={() => deleteHotel(index)}
                      >
                        Delete
                      </button>
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ml-2"
                        onClick={() => updateHotel(index)}
                      >
                        Update
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Hotels;
