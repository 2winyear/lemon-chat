import { useRouteError } from "react-router-dom";

export default function Root() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="root-page">
      <h1>Root!</h1>
      <p>root page</p>
    </div>
  );
}