import { filterlist } from "../static/data";
export default function FilterBar(props) {
  const title_name = filterlist.filter((name) => name.title === props.title);

  const Filter = title_name[0].content.map((filter, index) => (
    <div key={index} className="flex mx-1">
      <input type="checkbox" onChange={props.onFilterChange} className="w-5" />
      <h1 className="mx-2 text-sm text-darkgray">{filter.name}</h1>
    </div>
  ));

  return (
    <div className="flex w-full bg-gray justify-center items-center py-6">
      <div className="w-8/12 flex items-center">
        <div className="border-l-2 h-9 mx-2"></div>
        <h1 className="text-xl w-1/5 font-bold">{title_name[0].title}</h1>
        <div className="flex">{Filter}</div>
      </div>
    </div>
  );
}
