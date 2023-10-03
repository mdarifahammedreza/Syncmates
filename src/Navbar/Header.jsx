const Header = () => {
  return (
    <div className="navbar bg-gray-200 shadow-sm shadow-green-100 mb-1">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">SyncMates</a>
      </div>
      <div className="flex-none gap-10">
        <div className="dropdown dropdown-end">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://i.ibb.co/h2W1W5V/Education.png" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge bg-green-300">Varified</span>
              </a>
              <hr />
            </li>
            <li>
              <a>
                Chat Status <span className="badge bg-orange-200">On</span>
              </a>
              <hr />
            </li>
            <li>
              <a>
                Message <span className="badge text-red-400">20+</span>
              </a>
              <hr />
            </li>
            <li>
              <a>Settings</a>
              <hr />
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
