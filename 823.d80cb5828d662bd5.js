"use strict";(self.webpackChunkmy_first_app=self.webpackChunkmy_first_app||[]).push([[823],{3823:(_,a,r)=>{r.r(a),r.d(a,{ProductsModule:()=>b});var l=r(6895),p=r(5072),t=r(4650),u=r(9531);let m=(()=>{class e{constructor(){this.modals=[]}add(o){this.modals.push(o)}remove(o){this.modals=this.modals.filter(n=>n.id!==o)}open(o){this.modals.find(c=>c.id===o).open()}close(o){this.modals.find(c=>c.id===o).close()}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var d=r(433);const g=["*"];let h=(()=>{class e{constructor(o,n){this.modalService=o,this.el=n,this.element=n.nativeElement}ngOnInit(){this.id?(document.body.appendChild(this.element),this.element.addEventListener("click",o=>{"jw-modal"===o.target.className&&this.close()}),this.modalService.add(this)):console.error("modal must have an id")}ngOnDestroy(){this.modalService.remove(this.id),this.element.remove()}open(){this.element.style.display="block",document.body.classList.add("jw-modal-open")}close(){this.element.style.display="none",document.body.classList.remove("jw-modal-open")}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(m),t.Y36(t.SBq))},e.\u0275cmp=t.Xpm({type:e,selectors:[["jw-modal"]],inputs:{id:"id"},ngContentSelectors:g,decls:4,vars:0,consts:[[1,"jw-modal"],[1,"jw-modal-body"],[1,"jw-modal-background"]],template:function(o,n){1&o&&(t.F$t(),t.TgZ(0,"div",0)(1,"div",1),t.Hsn(2),t.qZA()(),t._UZ(3,"div",2))},styles:["jw-modal{display:none}jw-modal .jw-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1000;overflow:auto}jw-modal .jw-modal .jw-modal-body{height:80vh;position:relative;padding:2rem;background:#fff;margin:3rem;display:flex;flex-direction:column;align-items:center;justify-content:center}jw-modal .jw-modal .modal-image{width:20rem;height:20rem}jw-modal .jw-modal .modal-button{position:absolute;top:-10px;right:-10px;outline:none;border:none;border-radius:50%;padding:1rem;font-weight:700}jw-modal .jw-modal .modal-description{width:50%;margin:2rem auto}jw-modal .jw-modal-background{position:fixed;top:0;right:0;bottom:0;left:0;background-color:#000;opacity:.75;z-index:900}body.jw-modal-open{overflow:hidden}\n"],encapsulation:2}),e})(),f=(()=>{class e{transform(o,n){return o&&n?o.filter(c=>c.title.toLowerCase().indexOf(n.toLowerCase())>-1):o}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275pipe=t.Yjl({name:"filter",type:e,pure:!0}),e})();function v(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"div",10)(1,"div",11),t.NdJ("click",function(){const s=t.CHM(o).$implicit,M=t.oxw();return t.KtG(M.openModal("custom-modal-2",s))}),t.TgZ(2,"a",12),t._UZ(3,"img",13)(4,"span",14),t.qZA()(),t.TgZ(5,"div",15)(6,"a",16),t._uU(7),t.qZA(),t.TgZ(8,"p",17),t._uU(9),t.qZA()()()}if(2&e){const o=i.$implicit;t.xp6(3),t.s9C("src",o.image,t.LSH),t.s9C("alt",o.title),t.xp6(4),t.Oqu(o.title),t.xp6(2),t.hij("",o.price,",00 RSD")}}let y=(()=>{class e{constructor(o,n){this.productService=o,this.modalService=n}ngOnInit(){this.productService.getProducts().subscribe(o=>{this.products=o.map(n=>n.payload.doc.data())})}openModal(o,n){this.modalService.open(o),this.bodyTitle=n.title,this.bodyPrice=n.price,this.bodyImage=n.image,this.bodyDescription=n.description}closeModal(o){this.modalService.close(o)}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(u.s),t.Y36(m))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-products-list"]],decls:18,vars:10,consts:[[1,"container"],[1,"input-container"],["for","product",1,"input-containerLabel"],["type","text","name","product",1,"input-containerInput",3,"ngModel","ngModelChange"],[1,"products"],["id","custom-modal-2"],[1,"modal-image",3,"src","alt"],[1,"modal-description"],[1,"modal-button",3,"click"],["class","product",4,"ngFor","ngForOf"],[1,"product"],[1,"image-wrapper",3,"click"],[1,"image-wrapper-link"],[1,"product-image",3,"src","alt"],[1,"product-overlay"],[1,"product-container"],[1,"product-name"],[1,"product-price"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Search Product:"),t.qZA(),t.TgZ(4,"input",3),t.NdJ("ngModelChange",function(s){return n.search=s}),t.qZA()(),t.TgZ(5,"div",4)(6,"jw-modal",5)(7,"h1"),t._uU(8),t.qZA(),t.TgZ(9,"h3"),t._uU(10),t.qZA(),t._UZ(11,"img",6),t.TgZ(12,"p",7),t._uU(13),t.qZA(),t.TgZ(14,"button",8),t.NdJ("click",function(){return n.closeModal("custom-modal-2")}),t._uU(15,"X"),t.qZA()(),t.YNc(16,v,10,4,"div",9),t.ALo(17,"filter"),t.qZA()()),2&o&&(t.xp6(4),t.Q6J("ngModel",n.search),t.xp6(4),t.Oqu(n.bodyTitle),t.xp6(2),t.Oqu(n.bodyPrice),t.xp6(1),t.s9C("src",n.bodyImage,t.LSH),t.s9C("alt",n.bodyTitle),t.xp6(2),t.Oqu(n.bodyDescription),t.xp6(3),t.Q6J("ngForOf",t.xi3(17,7,n.products,n.search)))},dependencies:[l.sg,d.Fj,d.JJ,d.On,h,f],styles:[".input-container[_ngcontent-%COMP%]{background-color:#f5f5f5;border-bottom:1px solid black;padding:1rem 4.5rem}.input-containerLabel[_ngcontent-%COMP%]{font-weight:700}.input-containerInput[_ngcontent-%COMP%]{margin-left:1rem;border:1px solid black;border-radius:5px;cursor:pointer;outline:none}.products[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-wrap:wrap}.product[_ngcontent-%COMP%]{width:20rem;height:27rem;margin:2rem 2rem 0rem 0rem}.product[_ngcontent-%COMP%]:hover   .product-overlay[_ngcontent-%COMP%]{opacity:1}.product[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]{position:relative;max-height:100%}.product[_ngcontent-%COMP%]   .image-wrapper-link[_ngcontent-%COMP%]{position:relative;display:block;width:100%;min-height:100%}.product-image[_ngcontent-%COMP%]{width:20rem;height:20rem}.product-overlay[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;top:0;left:0;opacity:0;background:rgba(0,0,0,.33);z-index:1;transition:all .7s}.product-container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-between}.product-name[_ngcontent-%COMP%]{font-size:1.25rem;color:#000;cursor:pointer;margin:1rem 0rem 2rem;text-align:center}.product-price[_ngcontent-%COMP%]{color:#000;font-weight:700;text-align:center}"]}),e})();const C=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-products"]],decls:2,vars:0,consts:[[1,"container"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"app-products-list"),t.qZA())},dependencies:[y],styles:[".container[_ngcontent-%COMP%]{min-height:calc(100vh - 117px)}"]}),e})()}];let w=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.Bz.forChild(C),p.Bz]}),e})();var P=r(529);let b=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,w,d.u5,P.JF,d.UX]}),e})()}}]);