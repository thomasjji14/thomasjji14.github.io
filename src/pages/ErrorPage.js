import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      This page has not yet been implemented, or the URL is invalid, but not both.
    </div>
  );
}

export default ErrorPage;
