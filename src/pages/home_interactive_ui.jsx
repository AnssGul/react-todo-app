


//interactive added
// const Home = () => {
//     const [isWalk, setIsWalk] = useState(true);
//     const [pending, setPending] = useState(2);
//     const [completed, setCompleted] = useState(0);
//     const [player, setPlayer] = useState({
//         firstName: 'Ranjani',
//         lastName: 'Shettar',
//         score: 10,
//         lands: 10,
//     });
//     const [formInputs, setFormInputs] = useState({
//         firstName: player.firstName,
//         lastName: player.lastName,
//         score: player.score,
//         lands: player.lands,
//     })
//     const [items, setItems] = useState([
//         { id: 1, name: "fruit", quantity: 2 },
//         { id: 2, name: "veg", quantity: 2 },
//         { id: 3, name: "meat", quantity: 2 },
//     ])

//     //    Add a new item
//     const addItem = () => {
//         const newItem = { id: Date.now(), name: "Bnanna", quantity: 1 };
//         setItems([...items, newItem]);
//     };
//     //removeid
//     const removeItem = (id) => {
//         setItems(items.filter((item) => item.id !== id));
//     };
//     // // Update an item's quantity by ID
//     const updateQuantity = (id, newQuantity) => {
//         setItems(
//             items.map((item) =>
//                 item.id == id ? { ...item, quantity: newQuantity } : item
//             )
//         );
//     };
//     //reverItems
//     const reverseArray = () => {
//         setItems([...items].reverse());
//     }
//     const insertAtIndex = (index) => {
//         const newItem = { id: Date.now(), name: "Inserted Item", quantity: 1 };
//         setItems([
//             ...items.slice(0, index),
//             newItem,
//             ...items.slice(index)
//         ])

//     }





//     function handleInputChange(e) {
//         const { name, value } = e.target;
//         setFormInputs((prevInputs) => ({
//             ...prevInputs,
//             [name]: value,
//         }));
//     }

//     function handleSubmit() {
//         setPlayer({
//             ...formInputs,
//             score: parseInt(formInputs.score, 10),
//             lands: parseInt(formInputs.lands, 10),
//         });
//         alert('Player updated successfully!');
//     }

//     async function handleCountClick() {
//         setPending((prevPending) => prevPending * 2);
//         await delay(3000);

//         setPending((prevPending) => prevPending - 1);
//         setCompleted((prevCompleted) => prevCompleted + 1);
//     }

//     const handleClick = () => {
//         const nextState = !isWalk;
//         alert(`${nextState ? 'Walk' : 'Stop'} is next`);
//         setIsWalk(nextState);
//     };

//     return (
//         <div className="home">
//             <button onClick={handleClick}>
//                 Change to {isWalk ? 'Stop' : 'Walk'}
//             </button>
//             <h1 style={{ color: isWalk ? 'darkgreen' : 'darkred' }}>
//                 {isWalk ? 'Walk' : 'Stop'}
//             </h1>
//             <h3>Pending: {pending}</h3>
//             <h3>Complete: {completed}</h3>
//             <button onClick={handleCountClick}>Buy</button>
//             <h3>
//                 Score: <b>{player.score}</b>
//             </h3>
//             <button onClick={() => setPlayer({ ...player, score: player.score + 1 })}>+1</button>

//             <div>
//                 <label>
//                     First name:
//                     <input
//                         name="firstName"
//                         value={formInputs.firstName}
//                         onChange={handleInputChange}
//                     />
//                 </label>
//             </div>

//             <div>
//                 <label>
//                     Last name:
//                     <input
//                         name="lastName"
//                         value={formInputs.lastName}
//                         onChange={handleInputChange}
//                     />
//                 </label>
//             </div>

//             <div>
//                 <label>
//                     Score:
//                     <input
//                         name="score"
//                         value={formInputs.score}
//                         onChange={handleInputChange}
//                         type="number"
//                     />
//                 </label>
//             </div>

//             <div>
//                 <label>
//                     Lands:
//                     <input
//                         name="lands"
//                         value={formInputs.lands}
//                         onChange={handleInputChange}
//                         type="number"
//                     />
//                 </label>
//             </div>

//             <button onClick={handleSubmit}>Submit</button>

//             <div>
//                 <h1 color="#ff6655"

//                 >Manage Items</h1>
//                 <button onClick={() => addItem}>Add Item</button>
//                 <button onClick={() => reverseArray()}>Reverse Array</button>
//                 <ul>
//                     {
//                         items.map((item) => (
//                             <li key={item.id}>
//                                 {item.name} (Quantity: {item.quantity}){" "}
//                                 <button onClick={() => removeItem(item.id)}>Remove</button>
//                                 <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
//                                     Increase Quantity
//                                 </button>
//                                 <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>Decrease</button>


//                             </li>

//                         ))
//                     }

//                 </ul>
//                 <button onClick={() => insertAtIndex(1)}>Insert at Index 1</button>


//             </div>
//         </div>
//     );

//     function delay(ms) {
//         return new Promise((resolve) => {
//             setTimeout(resolve, ms);
//         });
//     }
// };

// export default Home;

