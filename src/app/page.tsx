export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">      
      <h1 className="text-primary py-2 my-4 text-center text-sm-start">Welcome to Sangeetha's Browser.</h1> 
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Count Increment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <button className="btn btn-success">Click</button>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Count Decrement</h5>
                 <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <button className="btn btn-primary">Click</button>
              </div>
            </div>
          </div>
        </div>     
    </div>
  );
}
