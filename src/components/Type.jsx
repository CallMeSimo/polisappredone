const Type = ({ type, setCategoryListToggled, setCategory }) => {
  return (
    <div className="type">
      <button
        id={type}
        data-id={type}
        onClick={() => {
          setCategoryListToggled(false);
          setCategory(type);
          console.log(type);
        }}
      >
        {type}
      </button>
    </div>
  );
};

export default Type;
