const Card = (props) => {
  return (
    <div className="flex items-center justify-center  ">
      <div className="container mx-auto p-4">
        <h1 className="text-xl text-orange-500 hover:bg-yellow-500">
          {props.title}
        </h1>
        <img src={props.img} alt="mango" className="h-10" />
        <p className="text-xs">{props.desc} </p>
      </div>
    </div>
  );
};

const Abc = () => {
  return (
    <>
      <h1>Footer</h1>
    </>
  );
};
export default Card;
export { Abc };
