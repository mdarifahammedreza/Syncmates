import { GrCatalog } from "react-icons/Gr";
import PropTypes from "prop-types";
const Button = ({ button }) => {
  return (
    <div className="mb-1 text-red-800 p-4 hover:bg-white rounded-md font-semibold">
      <button className="flex gap-4 items-center">
        <GrCatalog />
        {button.name}
      </button>
    </div>
  );
};
Button.protoType = {
  button: PropTypes.object.isRequired,
};

export default Button;
