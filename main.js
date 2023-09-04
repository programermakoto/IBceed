// #topへ戻る機能

{
  ///引数実行場所
  function callback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        navbar.classList.add("scrolled");
        totop.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
        totop.classList.remove("scrolled");
      }
    });
  }


  // to_top
  const totop = document.getElementById("to_top");
  // navbar
  const navbar = document.querySelector(".navbar");
  // インスタンス
  const observer = new IntersectionObserver(callback);
  //target
  observer.observe(document.getElementById("target"));




  totop.addEventListener("click",e => {
    e.preventDefault();

    window.scrollTo({
      top:0,
      behavior:"smooth",
    });
  });
}