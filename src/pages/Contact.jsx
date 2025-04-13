
import { useLoaderData } from "react-router-dom";

export function loader() {

  return null;
}

function Contact() {
  useLoaderData();

  return (
    <div>Contact</div>
  );
}

export default Contact;
