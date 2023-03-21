function Spinner() {
  return (

    <main className="form-signin w-100 m-auto">
    <div className="loadingSpinnerContainer">
      <div className="spinner-grow text-primary" role="status">
      </div>
      <div className="spinner-grow text-secondary" role="status">
      </div>
      <div className="spinner-grow text-success" role="status">
      </div>
      <div className="spinner-grow text-danger" role="status">
      </div>
      <div className="spinner-grow text-warning" role="status">
      </div>
    </div>
    </main>
  );
}

export default Spinner
