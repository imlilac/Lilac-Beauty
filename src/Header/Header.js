import "./Header.css";

function Header() {
   return (
      <div id="header">
         <div className="header-right">
            <div className="header-images">
               <div>
                  <img src="img/bg-5.jpg" alt="" />
               </div>
               <div>
                  <img src="img/skin1.jpg" alt="" />
               </div>
            </div>
            <div className="header-desc">
               <h3>بهترین برند لوازم بهداشتی و آرایشی در ایران و خاورمیانه . داراری سابقه 10 ساله در این زمینه و ضمانت کیفیت. 4 سال همکاری موفق بین المللی با شرکت های آلمانی و فرانسوی.</h3>
            </div>
            <div className="header-link">
               <p>
                  <a href="#">مشاهده محصولات</a>
               </p>
            </div>
            <div className="header-title">
               <h2>
                  لــایـلــاکـــــــ.. <br /> زیبایی را به خودتان هدیه دهید.
               </h2>
            </div>
         </div>
         <div className="header-img">
            <img src="img/bg-banner-1.jpg" alt="" />
         </div>
      </div>
   );
}

export default Header;
