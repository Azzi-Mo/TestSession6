import { Link } from "react-router-dom";

function SideBar() {
  return (
    <>
      <section className="SideBar_sec col-3">
        
          <div>
            <ul>
              <Link to='Products'>All products</Link>
            </ul>
          </div>
        
      </section>
    </>
  );
}
export default SideBar;
