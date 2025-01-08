// const Home = () => {
//     const [answer, setAnswer] = useState('');
//     const [status, setStatus] = useState('typing');


//     const correctAnswer = "correct answer";

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setStatus('submitting');


//         setTimeout(() => {
//             if (answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {

//                 setStatus('success');
//             } else {
//                 setStatus('typing');
//             }
//         }, 1000);
//     };

//     if (status === 'success') {
//         return <h1>That's right!</h1>;
//     }

//     return (
//         <div className="home">
//             <form onSubmit={handleSubmit}>
//                 <p>What's the correct answer?</p>
//                 <input
//                     value={answer}
//                     onChange={(e) => setAnswer(e.target.value)}
//                     placeholder="Type your answer here"
//                 />
//                 <button type="submit" disabled={status === 'submitting'}>
//                     {status === 'submitting' ? 'Submitting...' : 'Submit'}
//                 </button>
//             </form>
//             {status === 'typing' && answer && (
//                 <p style={{ color: 'red' }}>Try again!</p>
//             )}
//         </div>
//     );
// };

// export default Home;
