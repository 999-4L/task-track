import FilterDropDown from "./FilterDropDown";

function FilterDel({ handleFilter, handleDeleteAll }) {
  return (
    <div className="filter my-5 flex flex-row gap-3 justify-between items-center">
      <FilterDropDown handleFilter={handleFilter} />
      <button
        className="bg-[#c61919] hover:bg-[#f74343] p-3 py-1 text-white rounded-md font-medium ml-1 h-[40px] max-w-[100px]"
        onClick={handleDeleteAll}
      >
        Delete All
      </button>
    </div>
  );
}

export default FilterDel;
