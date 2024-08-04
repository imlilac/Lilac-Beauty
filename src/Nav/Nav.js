import "./Nav.css";
function Nav() {
   return (
      <div className="container">
         <div>
            <ul>
               <li>
                  <a href="#">حساب کاربری</a>
               </li>
               <li>
                  <a href="#">علاقه مندی (3)</a>
               </li>
               <li>
                  <a href="#">سبد خرید (2)</a>
               </li>
            </ul>
         </div>
         <div className="logo">
            <h1>لـــایـلــاکــــــ..</h1>
         </div>
         <div>
            <ul>
               <li>
                  <a href="#">محصولات</a>
               </li>
               <li>
                  <a href="#">درباره ما</a>
               </li>
               <li>
                  <a href="#">بلاگ</a>
               </li>
            </ul>
         </div>
      </div>
   );
}

export default Nav;
