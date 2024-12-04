import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p className="font-medium mt-8">
        <span className="text-gray-500">Home / </span> 404 Error
      </p>
      <div className="flex flex-col items-center justify-center gap-9 h-[70vh]">
        <h1 className="text-8xl">404 Not Found</h1>
        <p className="font-medium">
          You visited page that doesn't exists. You may go home page.
        </p>
        <div>
          <button
            onClick={() => {
              navigate(routes.home);
            }}
            className="w-[254px] h-[56px] text-white bg-[#DB4444] rounded-md"
          >
            Back to home page
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
