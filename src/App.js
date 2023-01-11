import { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherAction } from './redux/slices/weatherSlices';

function App() {
  
  return (
    <div className="p-10">
      <h1 className="text-5xl text-white text-center font-bold">Weather App</h1>
      <p className="text-white text-opacity-60 my-4 text-center">Never be caught off guard by the weather again with accurate hourly and daily forecasts.</p>

      <form className="w-1/2 mx-auto">
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            {/* <input class="placeholder:italic placeholder:text-white block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/> */}
            <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white bg-opacity-50 placeholder:text-black" placeholder="Search City, Area..." required />
            <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-8 py-2 dark:focus:ring-blue-800">Search</button>
        </div>
      </form>
    </div>
  );
}

export default App;
