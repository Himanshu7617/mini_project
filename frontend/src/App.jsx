import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="flex">
      <div className="text-xl font-semibold ">Hello World</div>
      <button className="bg-blue-500 text-white ">
        <Link to="/dashboard">Dashboard</Link>
      </button>
    </div>
  );
}

export default App;
