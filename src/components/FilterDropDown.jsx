import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function FilterDropDown({ handleFilter }) {
  const handleClick = (e) => {
    handleFilter(e.target.innerHTML);
  };

  return (
    <Menu as="div" className="relative inline-block text-center">
      <div>
        <Menu.Button className="inline-flex justify-center items-center bg-[#8758ff] p-3 py-1 text-white rounded-md font-semibold hover:bg-[#714bd1] h-[40px] w-[80px] text-base">
          Filter
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-2xl bg-gray-50 dark:bg-gray-800 focus:outline-none text-base text-gray-500 dark:text-gray-400 text-left font-medium">
          <div className="p-2">
            <Menu.Item>
              {({ active }) => (
                <a
                  className={classNames(
                    active ? "bg-[#373C49] rounded-lg" : "",
                    "block px-4 py-3"
                  )}
                  onClick={(e) => handleClick(e)}
                >
                  All
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={classNames(
                    active ? "bg-[#373C49] rounded-lg" : "",
                    "block px-4 py-3"
                  )}
                  onClick={(e) => handleClick(e)}
                >
                  Pending
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={classNames(
                    active ? "bg-[#373C49] rounded-lg" : "",
                    "block px-4 py-3"
                  )}
                  onClick={(e) => handleClick(e)}
                >
                  Completed
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default FilterDropDown;
