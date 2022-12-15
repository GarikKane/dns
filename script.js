let M = ["https://media.tenor.com/1kZ2j73pGDUAAAAd/capybara-ok-he-pull-up.gif", "https://sun9-56.userapi.com/impg/_eu6PdzAKPOa-D0VajsWqT2nh_Eoac0mXRmNLg/S8eiXKbUDLU.jpg?size=424x412&quality=96&sign=11b4f64d47eae5faf5b299e72f156ffa&type=album", "https://sun9-60.userapi.com/impg/B3OYS-sN7Awzqf_EDq26XWNc0DLYpWF1biG4IA/sYo-9gyzXj0.jpg?size=908x772&quality=96&sign=08b74c7e5a77f321f0c40a0f4cb80770&type=album", "https://sun9-37.userapi.com/impg/0EhacY4mdnEUcXz-GtHrYoF_im2Qcn4Zg6y9Dw/31GA8NPm6ks.jpg?size=960x1252&quality=96&sign=da20e6c3828ef6cb9f4532e614a75434&type=album", "https://sun9-14.userapi.com/impg/0o_NvKtcir2TqT1Q-tM8fFpRz45U5HBOYq9cxw/fnM6HSyJiY4.jpg?size=648x694&quality=96&sign=f2a9e18dbf7cf910bdc68f08f9d60876&type=album", "https://sun9-85.userapi.com/impg/6TbQO0Te-M4wmhSrhtXk0XksGTkYCh71TGXHcA/kBvRail75rY.jpg?size=882x880&quality=96&sign=1480eb41d6f43b703b1ba303cec46c8d&type=album", "https://sun9-60.userapi.com/impg/-6snw0jDh-q_nSZ6itlt7kkl98_jKG9JuEkMXA/ACnpLEXHcWI.jpg?size=900x683&quality=96&sign=ae37822f81348959c1ea500bc2e4f6ea&type=album", "https://sun9-85.userapi.com/impg/lFnjkPe2uXvqaJU0uTGLt3cAiyCqQLJhzmsQig/7RkZjEB3HVs.jpg?size=934x716&quality=96&sign=c83c2e62c9efe341cff28f72b4e27e62&type=album", "https://sun9-31.userapi.com/impg/HzAfmQLEi1KJdjsJn5X9eGu9PxKqWJNli_Q0tw/woWpfdr6XQc.jpg?size=600x602&quality=96&sign=346af11f0f6432238a79802a50238076&type=album", "https://sun9-13.userapi.com/impg/hHR9h2WrsUq8FCnO0Eu-lycFK9-EMKpKtXecyA/ZcU1z_cFY7c.jpg?size=636x624&quality=96&sign=128943f6dedebae61f4f102ae310e3e8&type=album", "https://sun9-84.userapi.com/impg/kLhcbF50D22aX75NpuHIuOXfPXAFyuo54cJcYA/KnFZawIaWH8.jpg?size=600x578&quality=96&sign=fc4589e48016cd1f56dfd2e0be09109d&type=album", "https://sun9-59.userapi.com/impg/5pOdDbWTphjHReZ1_4DPs7mhPl-iN3VNTeSLFQ/0DQLTkmvnsk.jpg?size=578x570&quality=96&sign=088f2f3fab1fcea497ec71b1274f83a1&type=album", "https://sun9-63.userapi.com/impg/fzqoXI5lHXImiO9vVHtOQ2CrmnJdKWmvddhbVw/KswSJ-B7xb4.jpg?size=814x810&quality=96&sign=12b80f5745c518922376e1a87d024829&type=album", "https://sun9-80.userapi.com/impg/c4Wb4ho2XevEmMsiFE5FKLZfgHyyrAtg8ElsHw/6aLW95MNRms.jpg?size=1200x900&quality=96&sign=1e9ff1edd9b72ba4b472182c8a579f1f&type=album", "https://sun9-88.userapi.com/impg/qhmXmGL1lOmMF5H1B0dTG_RBsSzn6n_BlRPRYw/g_Wv25zDEJU.jpg?size=678x698&quality=96&sign=c284a3a910b40343094b56acd044006b&type=album",
         "https://sun9-11.userapi.com/impg/Fkz4Gvt2TrrnnwglwD0jvS8RrTdNT_iMaGPDnw/9fmvELfnKw0.jpg?size=808x766&quality=96&sign=0781d8f15ebb545a9209c5e0d753a63d&type=album", "https://sun9-88.userapi.com/impg/xKzUtqUcUk96eP7IO2JNpWA3T8g--aq4l468XQ/6rgsc53aQH4.jpg?size=880x798&quality=96&sign=7d696d2a29baba596e103fb5ef870ec7&type=album", "https://sun9-26.userapi.com/impg/0oep1GidT4YQn--4VDJK-BWl_ArAlleKsBTixA/XausKGyz-uY.jpg?size=575x522&quality=96&sign=943aa717af5da84bbe29672bba218e9c&type=album"];
var arr = document.getElementsByClassName("catalog-product__image-link");
for (var i = 0; i < arr.length; i++) {
arr[i].innerHTML = `<picture data-gtm-vis-recent-on-screen-32166084_1461="586" data-gtm-vis-first-on-screen-32166084_1461="586" data-gtm-vis-total-visible-time-32166084_1461="100" data-gtm-vis-has-fired-32166084_1461="1"><source type="image/webp" media="(min-width: 768px)" data-srcset=${M[i]} data-gtm-vis-has-fired-32166084_1461="1" srcset=${M[i]}><source type="image/webp" media="(max-width: 767px)" data-srcset=${M[i]} data-gtm-vis-has-fired-32166084_1461="1" srcset=${M[i]}><img alt="Фен Goodhelper HD-F082 черный/красный" data-src=${M[i]} data-gtm-vis-has-fired-32166084_1461="1" class="loaded" src=${M[i]} data-was-processed="true"></picture>`;
}
let N = ["OK I PULL UP", "Капибаржа с мандаринками", " Добрая Капибаржа", "Подарочная Капибаржа", " Комплект Капибаржа+Котик", "3 Капибаржи по цене 1", "Модная Капибаржа", "Голодная Капибаржа", "Пчелобаржа", "Покебаржа", "Капибаржа баллерина", "Капибаржа аристократ", "Капибаржа на отдыхе", "Американская Капибаржа", "Кролебаржа", "Злая капибаржа", "Капибаржа моряк", "Мексиканская Капибаржа"];
var arr = document.getElementsByClassName("catalog-product__name ui-link ui-link_black");
for (var i = 0; i < arr.length; i++) {
arr[i].innerHTML = `<span data-gtm-vis-has-fired-32166084_1461="1">${N[i]}</span>`;
}
const X = ["бесценно", "6 ящиков мандаринок", "7 ящиков мандаринок","8 ящиков мандаринок","9 ящиков мандаринок","10 ящиков мандаринок","11 ящиков мандаринок","12 ящиков мандаринок","13 ящиков мандаринок","14 ящиков мандаринок","15 ящиков мандаринок","16 ящиков мандаринок","17 ящиков мандаринок","18 ящиков мандаринок","19 ящиков мандаринок","20 ящиков мандаринок","21 ящик мандаринок","22 ящика мандаринок",];
var arr = document.getElementsByClassName("product-buy__price");
for (var i = 0; i < arr.length; i++) {
arr[i].innerHTML = `${X[i]}`;
}
var arr = document.getElementsByClassName("title");
for (var i = 0; i < arr.length; i++) {
arr[i].innerHTML = `Капибаржи`;
}
$(".catalog-product__stat").remove()
$(".available").remove()
$(".compare-checkbox").remove()
$(".catalog-product__rating").remove()
$(".catalog-product__service-rating").remove()
$(".catalog-product__comment-icon").remove()
$(".order-avail-wrap").remove()
$(".product-buy__hint").remove()
$(".product-buy__sub").remove()
$(".catalog-product__discount-vobler").remove()
const catalogProducts = document.querySelectorAll(".catalog-products")
catalogProducts.forEach((e) => e.style.gridTemplateColumns = "1fr 1fr 1fr")
catalogProducts.style.gridTemplateColumns = "1fr 1fr 1fr"