$(function(){
    const listItems = $(".works-list-wrapper ul li");
    const btns = listItems.find("button");

    btns.on("click", function(){
        $(this).toggleClass("active").siblings(".links-container").slideToggle();
    })


    // Category-page
    const allCategoryItems = $(".recent-items-container ul li, .all-items-container ul li,  .category-list li");

    allCategoryItems.on("click", function(){
        window.location.href = `${window.location.origin}/details.html`;
    })

})