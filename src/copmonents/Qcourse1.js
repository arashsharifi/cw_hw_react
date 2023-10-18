import "../copmonents/Qcourse1.css";
function Qcourse1() {
  return (
    <div dir="rtl" className="container-explanation">
      <h1>
        سوال : تمایز چارچوب و کتابخانه و همچنین را توضیح دهید شناسایی اینکه آیا
        React یک چارچوب در نظر گرفته می شود یا یک کتابخانه و توضیح دهد که چرا.
      </h1>
      <p>
        یک چارچوب و یک کتابخانه هر دو منابع کدی هستند که توسعه دهندگان از آنها
        برای ساخت برنامه ها استفاده می کنند، اما از نظر کنترل و ساختار با هم
        تفاوت دارند.
      </p>
      <p>
        کتابخانه مجموعه ای از کدهای از پیش نوشته شده است که قابلیت های خاصی را
        ارائه می دهد که توسعه دهندگان می توانند در پروژه های خود از آنها استفاده
        کنند. معمولاً بر حل مشکلات خاص یا ارائه ابزارهای خاص تمرکز دارد. توسعه
        دهندگان کنترل بیشتری در انتخاب بخش هایی از کتابخانه برای استفاده و نحوه
        پیاده سازی آنها در کد خود دارند. نمونه هایی از کتابخانه های محبوب
        عبارتند از jQuery و Lodash
      </p>
      <p>
        از سوی دیگر، یک چارچوب ابزار جامع تری است که راه حلی ساختاریافته برای
        ساخت برنامه های کاربردی ارائه می دهد. این شامل مجموعه ای از قوانین،
        قراردادها و ابزارهایی است که به توسعه دهندگان کمک می کند تا برنامه ها را
        سریعتر و با پیکربندی دستی کمتر بسازند. فریم ورک ها اغلب ساختار کاملی را
        برای برنامه ارائه می دهند که شامل معماری های از پیش تعریف شده، ابزارهای
        مرتبط و الگوهای کد از پیش تعریف شده می شود. توسعه دهندگان کنترل کمتری بر
        ساختار کلی برنامه دارند اما از مزایای توسعه سریعتر و شیوه های استاندارد
        شده بهره مند می شوند. نمونه هایی از فریمورک ها عبارتند از Django، Ruby
        on Rails و Angular.react
      </p>
      <p>
        حالا به سراغ React می‌رویم. React اغلب به عنوان یک کتابخانه جاوا اسکریپت
        برای ساخت رابط های کاربر نامیده می شود. این روشی را برای ایجاد موثر
        اجزای رابط کاربری قابل استفاده مجدد و مدیریت وضعیت آنها فراهم می کند.
        React را می‌توان در ترکیب با کتابخانه‌ها یا فریم‌ورک‌های دیگر برای ساخت
        برنامه‌های کاربردی کامل استفاده کرد، اما مانند یک فریم‌ورک ساختار
        برنامه‌ای کامل را ارائه نمی‌کند.
      </p>
    </div>
  );
}

export default Qcourse1;
