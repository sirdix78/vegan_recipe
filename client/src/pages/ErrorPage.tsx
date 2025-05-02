import NotFound from "../assets/not-found1.png";
const ErrorPage = () => {
  return (
    <div>
      <img src={NotFound} className="not-found-img" alt="Page not found img" />
    </div>
  );
};

export default ErrorPage;
