import{d,k as i,x as p,y as l,z as t,A as a,B as u,C as m}from"./bb5wy1fZ.js";const _=["href"],h={class:"card h-100 shadow-sm animate__animated animate__fadeInUp"},f=["src","alt"],g={class:"card-body d-flex flex-column"},b={class:"card-title"},w={class:"card-text"},y={class:"mt-auto d-flex justify-content-between align-items-center"},k={class:"card-price"},C=d({__name:"ProductCard",props:{product:{}},setup(n){const s=n,c=i(()=>s.product.image.startsWith("./assets/")?"/"+s.product.image.replace("./assets/",""):s.product.image);function r(){const e=`مرحباً، أرغب في طلب المنتج التالي:

*${s.product.name}*

السعر: ${s.product.price} جنيه

الوصف: ${s.product.description}`,o=`https://wa.me/20123456789?text=${encodeURIComponent(e)}`;window.open(o,"_blank")}return(e,o)=>(l(),p("a",{href:`/product/${e.product.id}`,class:"text-decoration-none"},[t("div",h,[t("img",{src:c.value,class:"card-img-top",alt:e.product.name,loading:"lazy"},null,8,f),t("div",g,[t("h3",b,a(e.product.name),1),t("p",w,a(e.product.description),1),t("div",y,[t("span",k,"EGP "+a(e.product.price.toLocaleString()),1),t("button",{class:"btn btn-add whatsapp-order",type:"button",onClick:u(r,["stop"])},o[0]||(o[0]=[t("i",{class:"bi bi-whatsapp"},null,-1),m(" اطلب الآن ")]))])])])],8,_))}});export{C as _};
