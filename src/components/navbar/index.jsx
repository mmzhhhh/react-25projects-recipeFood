import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar() {
    const {searchParam, setSearchParam,handleSubmit}=useContext(GlobalContext);
    console.log(searchParam);
    
  return (
    <nav className="flex justify-between items-center py-8 container flex-col lg:flex-row gap-5 mx-auto">
      <h2 className=" text-2xl font-semibold">
        <Link to={"/"}>FoodRecipe</Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Enter Items..."
          value={searchParam}
          onChange={(event)=>setSearchParam(event.target.value)}
          className="bg-white/75 p-3 px-8 rounded-full outline-none  shadow-lg w-40 shadow-red-200 focus:shadow-red-500 focus:w-96 transition-all duration-500"
        />
      </form>
      <ul className=" flex gap-5">
        <li>
          <Link
            to={"/"}
            className=" hover:underline hover:text-black transition-all duration-700"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/favorites"}
            className=" hover:underline hover:text-black transition-all duration-700"
          >
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
}
