// Display None Of 329 Result Section
$(() => {
    $(document).on("click", "#full-button", function() {
      document.getElementById('main_content_search').style.display = "none";
    });
  });
//   Script For Changing opacity
  $(() => {
    $(document).on("click", "#full-button", function() {
      document.getElementById('Image_conatiner').style.opacity = "0.2";
    });
  });
//   Script For Closing On Search Button Click
$(() => {
    $(document).on("click", "#see_result_btn", function() {
      document.getElementById('hello').style.display = "none";
      // document.getElementById('main_content_search').style.display = "flex";
      // document.getElementById('Image_conatiner').style.opacity = "1";
    });
  });
  // -----------------tablet View Transparency----------------------------//
  $(() => {
    $(document).on("click", "#tab", function() {
      document.getElementById('main_content_search').style.opacity = "0.2";
    });
  });
//   Script For Changing opacity
  $(() => {
    $(document).on("click", "#tab", function() {
      document.getElementById('Image_conatiner').style.opacity = "0.1";
    });
  });
  // Script For Closing On Search Button Click
$(() => {
    $(document).on("click", "#see_result_btn", function() {
      document.getElementById('hello').style.display = "none";
      document.getElementById('main_content_search').style.display = "flex";
      document.getElementById('Image_conatiner').style.opacity = "1";
    });
  });
  // Mobile View Goes here
  $(() => {
    $(document).on("click", "#moreflt_mob", function() {
      document.getElementById('main_content_search').style.display = "none";
    });
  });
//   Script For Changing opacity
  $(() => {
    $(document).on("click", "#moreflt_mob", function() {
      document.getElementById('Image_conatiner').style.opacity = "0";
    });
  });
  $(() => {
    $(document).on("click", "#moreflt_mob", function() {
      document.getElementById('numbers').style.opacity = "0";
    });
  });
  

//   Slider Code Here

const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});