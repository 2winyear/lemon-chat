

export default function lemon() {
  return (
    <div id="error-page">
      <h1>Lemon!</h1>
      <p>Lemon</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}