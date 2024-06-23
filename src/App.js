import React from 'react';
import LabTestList from './components/Labtestlist';
import Cart from './components/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavProvider } from './Context';

// function App() {
//   const [tests, setTests] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => setTests(data));
//   }, []);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredTests = tests.filter((test) => {
//     return test.name.toLowerCase().includes(searchTerm.toLowerCase());
//   });

//   return (
//     <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
//       <h1 className="text-3xl font-bold mb-4">Lab Tests</h1>
//       <input
//         type="search"
//         value={searchTerm}
//         onChange={handleSearch}
//         placeholder="Search for a test"
//         className="w-full p-2 pl-10 text-sm text-gray-700"
//       />
//       <ul className="list-none mb-4">
//         {filteredTests.map((test) => (
//           <li key={test.id} className="py-2 border-b border-gray-200">
//             <span className="text-lg">{test.name}</span>
//             <span className="text-sm text-gray-600">{test.website}</span>
//           </li>
//         ))}
//       </ul>
//       <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
//         Book a Test
//       </button>
//     </div>
//   );
// }

// export default App;


const App = () => {
  return (
    <div className="h-screen bg-gray-100">
      <NavProvider>
      <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<LabTestList/>} />
      <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
    </NavProvider>
    </div>
  );
};

export default App;