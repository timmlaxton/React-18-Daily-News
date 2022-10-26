import { Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = (props) => {
  return <Container className="mt-5 mb-5">{props.children}</Container>;
};
export default MainLayout;
