import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="container">
      <div className="row" id="error-page">
        <div className="col-12">
            <h1>Oopsie!</h1>
            <p>Sorry for that, an unexpected error has occurred.</p>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
          </div>
        </div>
    </div>
  );
}