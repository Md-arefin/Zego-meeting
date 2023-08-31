import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function App() {

	const [roomCode, setRoomCode] = useState('');
	const navigate = useNavigate();

	const handleForm = (event) => {
		event.preventDefault();
		navigate(`/room/${roomCode}`);
	}


	return (
		<div className='bg-slate-400 h-[80vh] px-5 py-72'>
			<form onSubmit={handleForm} className='text-center  rounded-md border-2 border-black py-10 w-3/4 mx-auto'>
				
				<div className='mt-6'>
					<label>
						<span className="mx-5 font-bold text-2xl">Room Code:</span>
					</label>
					<input
						type="text"
						value={roomCode}
						onChange={(e) => setRoomCode(e.target.value)}
						name='room'
						placeholder="enter your room id . . ."
						className="px-5 py-1 rounded-md border-2 border-black" />
				</div>
				<button type="submit" className="rounded-md border-2 border-black px-4 py-1 mt-14 w-1/3">
					Enter Room
				</button>
			</form>
			
		</div>
	);
}

export default App;

