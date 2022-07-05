const Type = ({ type }) => {
  return (
    <div className="type">
      <input id={type} data-id={type} type="button"></input>
      <span>{type}</span>
    </div>
  );
};

export default Type;
