import React from 'react'

const AddVenueForm = ({closeModal}) => {

    const [building, setBuilding] = useState('');
    const [room, setRoom] = useState('');
    
    

    const handleSubmit = (e) => {
        e.preventDefault();

        //Handle form submission logic here

        console.log({ building, room });
        closeModal();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Venue</h2>
            <div className='form-group'>
                <label>Building</label>
                <input
                    type='text'
                    value={building}>
                    onChange={(e) => setBuilding(e.target.value)}
                    required
                </input>

            </div>
            <div className='form-group'>
                <label>Room</label>
                <input
                    type='text'
                    value={room}>
                    onChange={(e) => setRoom(e.target.value)}
                    required
                </input>
            </div>

            
            <button type ="submit">Add Venue</button>
        </form>
    )
}

export default AddVenueForm
