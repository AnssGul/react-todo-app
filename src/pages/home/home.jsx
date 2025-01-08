// src/pages/home/home.jsx




import { useState, useEffect } from 'react';


import { createConnection } from '../chat/chat.js';
import { showNotification } from '../../notifications/notification.js';

const serverUrl = 'https://localhost:1234';


function ChatRoom({ roomId, theme }) {
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.on('connected', () => {
            showNotification('Connected!', theme);
        });

        connection.connect();
        return () => connection.disconnect();
    }, [roomId, theme]);

    return <h1>Welcome to the {roomId} room!</h1>
}
const Home = () => {
    const [roomId, setRoomId] = useState('general');
    const [isDark, setIsDark] = useState(false);
    return (
        <>
            <label>
                Choose chat room:{''}
                <select
                    value={roomId}
                    onChange={e => setRoomId(e.target.value)}
                >

                    <option value="general">general</option>
                    <option value="travel">travel</option>
                    <option value="music">music</option>

                </select>
            </label>

            <label>
                <input
                    type='checkbox'
                    checked={isDark}
                    onChange={e => setIsDark(e.target.checked)}
                />
                Use dark theme
            </label>

            <hr />
            <ChatRoom
                roomId={roomId}
                theme={isDark ? 'dark' : 'light'}
            />

        </>
    );
}
export default Home;


// class Home extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             pos1: { x: 0, y: 0 },
//             pos2: { x: 0, y: 0 },
//             pos3: { x: 0, y: 0 },
//             pos4: { x: 0, y: 0 },
//             pos5: { x: 0, y: 0 },
//         };
//     }

//     componentDidMount() {
//         document.addEventListener("mousemove", this.handleMouseMove);
//     }

//     componentWillUnmount() {
//         document.removeEventListener("mousemove", this.handleMouseMove);
//     }

//     handleMouseMove = (event) => {
//         const pos1 = { x: event.clientX, y: event.clientY };

//         this.setState((prevState) => ({
//             pos1,
//             pos2: this.getDelayedPosition(prevState.pos1, pos1, 100),
//             pos3: this.getDelayedPosition(prevState.pos2, pos1, 200),
//             pos4: this.getDelayedPosition(prevState.pos3, pos1, 100),
//             pos5: this.getDelayedPosition(prevState.pos4, pos1, 50),
//         }));
//     };

//     getDelayedPosition(prevPos, newPos, delay) {
//         return {
//             x: prevPos.x + (newPos.x - prevPos.x) * (delay / 1000),
//             y: prevPos.y + (newPos.y - prevPos.y) * (delay / 1000),
//         };
//     }

//     render() {
//         const { pos1, pos2, pos3, pos4, pos5 } = this.state;

//         return (
//             <>
//                 <Dot position={pos1} opacity={1} />
//                 <Dot position={pos2} opacity={0.8} />
//                 <Dot position={pos3} opacity={0.6} />
//                 <Dot position={pos4} opacity={0.4} />
//                 <Dot position={pos5} opacity={0.2} />
//             </>
//         );
//     }
// }

// class Dot extends Component {
//     render() {
//         const { position, opacity } = this.props;
//         return (
//             <div
//                 style={{
//                     position: "absolute",
//                     backgroundColor: "pink",
//                     borderRadius: "50%",
//                     opacity,
//                     transform: `translate(${position.x}px, ${position.y}px)`,
//                     pointerEvents: "none",
//                     left: -20,
//                     top: -20,
//                     width: 40,
//                     height: 40,
//                 }}
//             />
//         );
//     }
// }

// export default Home;



// import React, { useEffect, useRef, useState } from "react";

// const ChatRoom = ({ roomId }) => {
//     useEffect(() => {
//         const connection = createConnection("https://example.com", roomId);
//         connection.connect();

//         return () => {
//             connection.disconnect();
//         };
//     }, [roomId]);

//     return <div>Welcome to the {roomId} room!</div>;
// };

// function createConnection(serverUrl, roomId) {
//     // Simulates a connection to the server
//     return {
//         connect() {
//             console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
//         },
//         disconnect() {
//             console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
//         }
//     };
// }

// const Home = () => {
//     const ref = useRef(0);
//     const inputRef = useRef(null);
//     const refVideo = useRef(null);
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [roomId, setRoomId] = useState("general");

//     function handleClick() {
//         ref.current = ref.current + 1;
//         alert("You have clicked " + ref.current + " times!");
//         inputRef.current.focus();
//     }

//     useEffect(() => {
//         if (isPlaying) {
//             refVideo.current.play();
//         } else {
//             refVideo.current.pause();
//         }
//     }, [isPlaying]);

//     return (
//         <>
//             <input ref={inputRef} />

//             <button onClick={handleClick}>Click me!</button>

//             <button onClick={() => setIsPlaying(!isPlaying)}>
//                 {isPlaying ? "Pause" : "Play"}
//             </button>

//             <video
//                 ref={refVideo}
//                 src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//                 loop
//                 playsInline
//                 style={{ width: "400px", marginTop: "10px" }}
//             />

//             <label>
//                 Choose the chat room:{" "}
//                 <select
//                     value={roomId}
//                     onChange={(e) => setRoomId(e.target.value)}
//                 >
//                     <option value="general">general</option>
//                     <option value="travel">travel</option>
//                     <option value="music">music</option>
//                 </select>
//             </label>

//             <hr />

//             <ChatRoom roomId={roomId} />
//         </>
//     );
// };

// export default Home;


// const Home = () => {
//     // const [answer, setAnswer] = useState('');
//     const [status, setStatus] = useState('typing');
//     const [text, setText] = useState('');
//     const [isSending, setIsSending] = useState(false);
//     const [isSent, setIsSent] = useState(false);
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');

//     const fullName = firstName + ' ' + lastName;

//     function handleFirstNameChange(e) {
//         setFirstName(e.target.value);
//     }

//     function handleLastNameChange(e) {
//         setLastName(e.target.value);
//     }
//     async function handleSubmit(e) {
//         e.preventDefault();
//         setIsSending(true);
//         await sendMessage(text);
//         setIsSending(false);
//         setIsSent(true);
//     }

//     if (isSent) {
//         return <h1>Thanks for feedback!</h1>
//     }


//     return (
//         <div className="home">
//             <form onSubmit={handleSubmit}>
//                 <p>How was your stay at The Prancing Pony?</p>
//                 <textarea
//                     disabled={isSending}
//                     value={text}
//                     onChange={e => setText(e.target.value)}
//                 />
//                 <br />
//                 <button
//                     disabled={isSending}
//                     type="submit"
//                 >

//                     Send
//                 </button>
//                 {isSending && <p>Sending...</p>}
//             </form>


//             <h2>Let’s check you in</h2>
//             <label>
//                 First name:{' '}
//                 <input
//                     value={firstName}
//                     onChange={handleFirstNameChange}
//                 />
//             </label>
//             <label>
//                 Last name:{' '}
//                 <input
//                     value={lastName}
//                     onChange={handleLastNameChange}
//                 />
//             </label>
//             <p>
//                 Your ticket will be issued to: <b>{fullName}</b>
//             </p>
//         </div>
//     );
//     function sendMessage(text) {
//         return new Promise(resolve => {
//             setTimeout(resolve, 2000);
//         });
//     }
// };

// export default Home;




// const getFullName = (userInfo) => {
//     const {
//         name: { first, last }
//     } = userInfo;
//     return `${first} ${last}`;
// };


// const Home = () => {
//     const [nextPage, setNextPage] = useState(1);
//     const [userInfos, setUserInfos] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const fetchUsers = async () => {
//         setLoading(true);
//         setError(null);
//         const data = await fetchUserData(nextPage);

//         if (data) {
//             setUserInfos((prevUsers) => [...prevUsers, ...data.results]);
//             setNextPage(data.info.page + 1); // Update to the next page
//         } else {
//             setError("Failed to fetch user data.");
//         }
//         setLoading(false);
//     };


//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     return (
//         <div className="home">
//             <h1>User Profiles</h1>

//             {error && <p style={{ color: "red" }}>{error}</p>}

//             <button onClick={fetchUsers} disabled={loading}>
//                 {loading ? "Loading..." : "Load More Profiles"}
//             </button>

//             <div style={{ marginTop: "20px" }}>
//                 {userInfos.map((userInfo, idx) => (
//                     <div
//                         key={idx}
//                         style={{
//                             border: "1px solid #ccc",
//                             padding: "10px",
//                             marginBottom: "10px",
//                             borderRadius: "8px"
//                         }}
//                     >
//                         <p>
//                             <strong>Name:</strong> {getFullName(userInfo)}
//                         </p>
//                         <img
//                             src={userInfo.picture.large}
//                             alt={getFullName(userInfo)}
//                             style={{ width: "100px", borderRadius: "50%" }}
//                         />
//                     </div>
//                 ))}
//             </div>
//             <>TrafficLight</>
//         </div>
//     );
// };

// export default Home;





