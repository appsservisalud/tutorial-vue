(function(){"use strict";var e={606:function(e,o,a){var l=a(963),n=a(252);function t(e,o){const a=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(a)}var r=a(744);const i={},s=(0,r.Z)(i,[["render",t]]);var d=s,c=a(201);a(210);const u=e=>((0,n.dD)("data-v-2478b419"),e=e(),(0,n.Cn)(),e),p={class:"login"},m=u((()=>(0,n._)("h1",{class:"title"},"Bienvenido",-1))),b=u((()=>(0,n._)("label",{class:"form-label",for:"#email"},"Email:",-1))),_=u((()=>(0,n._)("label",{class:"form-label",for:"#password"},"Password:",-1))),h={key:0,class:"error"},g=u((()=>(0,n._)("input",{class:"form-submit",type:"submit",value:"Iniciar sesión"},null,-1)));function v(e,o,a,t,r,i){return(0,n.wg)(),(0,n.iD)("div",p,[m,(0,n._)("form",{action:"",class:"form",onSubmit:o[2]||(o[2]=(0,l.iM)(((...e)=>i.login&&i.login(...e)),["prevent"]))},[b,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>r.email=e),class:"form-input",type:"email",id:"email",required:"",placeholder:"Email"},null,512),[[l.nr,r.email]]),_,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":o[1]||(o[1]=e=>r.password=e),class:"form-input",type:"password",id:"password",placeholder:"Password"},null,512),[[l.nr,r.password]]),r.error?((0,n.wg)(),(0,n.iD)("p",h,"Has introducido mal el email o la contraseña.")):(0,n.kq)("",!0),g],32)])}var y=a(669),f=a.n(y);const w="https://reqres.in/api/";var k={login(e,o){const a={email:e,password:o};return f().post(w+"login",a)}},D={data(){return{email:"",password:"",error:!1}},methods:{async login(){try{await k.login(this.email,this.password),this.$router.push("/home")}catch(e){this.error=!0}}}};const C=(0,r.Z)(D,[["render",v],["__scopeId","data-v-2478b419"]]);var U=C;const E=[{path:"/",name:"login",component:U},{path:"/home",name:"home",component:()=>Promise.resolve().then(a.bind(a,210))}],P=(0,c.p7)({history:(0,c.PO)("/tutorial-vue/"),routes:E});var V=P;(0,l.ri)(d).use(V).mount("#app")},210:function(e,o,a){a.r(o),a.d(o,{default:function(){return Lo}});var l=a(252),n=a.p+"img/check-out.6567d0ed.png";const t={id:"app",class:"container"},r={class:"row"},i={class:"col-md-12"},s={class:"nav-item"},d=(0,l._)("span",null,[(0,l._)("img",{src:n,width:"30",height:"30",alt:""}),(0,l.Uk)(" Cerrar sesión")],-1),c=(0,l._)("h1",null,"Personas",-1),u={class:"row"},p={class:"col-md-12"},m=(0,l._)("br",null,null,-1),b={key:0,class:"alert_delete"},_={key:0,class:"alert alert-success"},h={key:1,class:"update_success"},g={key:0,class:"alert alert-success"};function v(e,o,a,n,v,y){const f=(0,l.up)("router-link"),w=(0,l.up)("formulario-persona"),k=(0,l.up)("DatatableComponent");return(0,l.wg)(),(0,l.iD)("div",t,[(0,l._)("div",r,[(0,l._)("div",i,[(0,l._)("nav",null,[(0,l._)("ul",null,[(0,l._)("li",s,[(0,l.Wm)(f,{to:"/"},{default:(0,l.w5)((()=>[d])),_:1})])])]),c])]),(0,l._)("div",u,[(0,l._)("div",p,[(0,l.Wm)(w,{onAddPersona:y.agregarPersona},null,8,["onAddPersona"]),m,v.alert_delete?((0,l.wg)(),(0,l.iD)("div",b,[v.eliminar_correcto?((0,l.wg)(),(0,l.iD)("div",_," La persona ha sido eliminada correctamente! ")):(0,l.kq)("",!0)])):(0,l.kq)("",!0),e.update_success?((0,l.wg)(),(0,l.iD)("div",h,[e.actualizar_correcto?((0,l.wg)(),(0,l.iD)("div",g," La persona ha sido actualizada correctamente! ")):(0,l.kq)("",!0)])):(0,l.kq)("",!0),((0,l.wg)(),(0,l.j4)(k,{key:v.index,personas:v.personas,onDeletePersona:y.eliminarPersona,onActualizarPersona:y.actualizarPersona},null,8,["personas","onDeletePersona","onActualizarPersona"]))])])])}var y=a(963),f=a(577);const w={class:"content_datatable"},k=(0,l._)("br",null,null,-1),D={key:0},C={key:0,class:"alert alert-info",role:"alert"},U={key:1},E={key:0,class:"alert alert-info",role:"alert"},P=(0,l._)("br",null,null,-1),V={class:"table",id:"datatable"},x=(0,l.Uk)(" Actualización de usuario"),q={class:"table"},z=(0,l._)("thead",null,null,-1),A={class:"container"},M={class:"row"},T={class:"row"},O={key:0},j={class:"col-md-12"},F={class:"form-group"},I=(0,l._)("label",null,"Nombre",-1),N=["onUpdate:modelValue"],S={key:1},$={class:"col-md-12"},L={class:"form-group"},Y=(0,l._)("label",null,"Apellido",-1),Z=["onUpdate:modelValue"],H={key:2},W={class:"col-md-12"},K={class:"form-group"},G=(0,l._)("label",null,"Email",-1),R=["onUpdate:modelValue"],B={key:3},J={class:"col-md-12"},X={class:"form-group buttons"},Q=["onClick"],ee=["onClick"],oe=(0,l.Uk)(" You can put your footer here "),ae=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",null,"Nombre"),(0,l._)("th",null,"Apellido"),(0,l._)("th",null,"Email"),(0,l._)("th",null,"Acciones")])],-1),le={key:0},ne=["onUpdate:modelValue"],te={key:1},re={key:2},ie=["onUpdate:modelValue"],se={key:3},de={key:4},ce=["onUpdate:modelValue"],ue={key:5},pe={key:6},me=["onClick"],be=["onClick"],_e={key:7},he=["onClick"],ge=["onClick"];function ve(e,o,a,n,t,r){const i=(0,l.up)("Modal");return(0,l.wg)(),(0,l.iD)("div",w,[k,t.personas_correcto?((0,l.wg)(),(0,l.iD)("div",D,[a.personas.length?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",C," No se han agregado personas "))])):(0,l.kq)("",!0),t.update_success?((0,l.wg)(),(0,l.iD)("div",U,[t.actualizar_correcto?((0,l.wg)(),(0,l.iD)("div",E," La persona ha sido actualizada correctamente! ")):(0,l.kq)("",!0)])):(0,l.kq)("",!0),P,(0,l._)("table",V,[(0,l.wy)((0,l.Wm)(i,{onClose:r.close},{header:(0,l.w5)((()=>[x])),body:(0,l.w5)((()=>[(0,l._)("table",q,[z,(0,l._)("tbody",null,[(0,l._)("div",A,[(0,l._)("div",M,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.personas,(e=>((0,l.wg)(),(0,l.iD)("tr",{key:e.id},[(0,l._)("div",T,[t.editando===e.id?((0,l.wg)(),(0,l.iD)("td",O,[(0,l._)("div",j,[(0,l._)("div",F,[I,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":o=>e.nombre=o},null,8,N),[[y.nr,e.nombre]])])])])):(0,l.kq)("",!0),t.editando===e.id?((0,l.wg)(),(0,l.iD)("td",S,[(0,l._)("div",$,[(0,l._)("div",L,[Y,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":o=>e.apellido=o},null,8,Z),[[y.nr,e.apellido]])])])])):(0,l.kq)("",!0),t.editando===e.id?((0,l.wg)(),(0,l.iD)("td",H,[(0,l._)("div",W,[(0,l._)("div",K,[G,(0,l.wy)((0,l._)("input",{type:"email",class:"form-control","onUpdate:modelValue":o=>e.email=o},null,8,R),[[y.nr,e.email]])])])])):(0,l.kq)("",!0),t.editando===e.id?((0,l.wg)(),(0,l.iD)("td",B,[(0,l._)("div",J,[(0,l._)("div",X,[(0,l._)("button",{class:"btn btn-success",onClick:o=>r.guardarPersona(e)},"💾 Guardar",8,Q),(0,l._)("button",{class:"btn btn-secondary ml-2",onClick:o=>r.cancelarEdicion(e)},"❌ Cancelar",8,ee)])])])):(0,l.kq)("",!0)])])))),128))])])])])])),footer:(0,l.w5)((()=>[oe])),_:1},8,["onClose"]),[[y.F8,t.visible]]),ae,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.personas,(o=>((0,l.wg)(),(0,l.iD)("tr",{key:o.id},[t.editando===o.id?((0,l.wg)(),(0,l.iD)("td",le,[(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e=>o.nombre=e,id:"nombre"},null,8,ne),[[y.nr,o.nombre]])])):((0,l.wg)(),(0,l.iD)("td",te,(0,f.zw)(o.nombre),1)),t.editando===o.id?((0,l.wg)(),(0,l.iD)("td",re,[(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e=>o.apellido=e,id:"apellido"},null,8,ie),[[y.nr,o.apellido]])])):((0,l.wg)(),(0,l.iD)("td",se,(0,f.zw)(o.apellido),1)),t.editando===o.id?((0,l.wg)(),(0,l.iD)("td",de,[(0,l.wy)((0,l._)("input",{type:"email",class:"form-control","onUpdate:modelValue":e=>o.email=e,id:"email"},null,8,ce),[[y.nr,o.email]])])):((0,l.wg)(),(0,l.iD)("td",ue,(0,f.zw)(o.email),1)),t.editando===o.id?((0,l.wg)(),(0,l.iD)("td",pe,[(0,l._)("button",{class:"btn btn-success",onClick:e=>r.guardarPersona(o)},"💾",8,me),(0,l._)("button",{class:"btn btn-secondary ml-2",onClick:e=>r.cancelarEdicion(o)},"❌",8,be)])):((0,l.wg)(),(0,l.iD)("td",_e,[(0,l._)("button",{class:"btn btn-info",onClick:e=>r.editarPersona(o)},"✏️",8,he),(0,l._)("button",{class:"btn btn-danger ml-2",onClick:a=>e.$emit("delete-persona",o.id)},"🗑️",8,ge)]))])))),128))])])])}a(825),a(290);var ye=a(755),fe=a.n(ye);const we={class:"modal-backdrop"},ke={class:"modal",role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"},De={class:"modal-header",id:"modalTitle"},Ce=(0,l.Uk)(" Default Header "),Ue={class:"modal-body",id:"modalDescription"},Ee=(0,l.Uk)(" Default body content ");function Pe(e,o,a,n,t,r){return(0,l.wg)(),(0,l.j4)(y.uT,null,{default:(0,l.w5)((()=>[(0,l._)("div",we,[(0,l._)("div",ke,[(0,l._)("header",De,[(0,l.WI)(e.$slots,"header",{},(()=>[Ce]))]),(0,l._)("main",Ue,[(0,l.WI)(e.$slots,"body",{},(()=>[Ee]))])])])])),_:3})}var Ve={name:"Modal",methods:{close(){this.$emit("close")}}},xe=a(744);const qe=(0,xe.Z)(Ve,[["render",Pe]]);var ze=qe,Ae={name:["Modal"],props:{personas:Array},components:{Modal:ze},data(){return{visible:!1,editando:null,personas_correcto:!1,actualizar_correcto:!1,update_success:!1}},mounted(){setTimeout((()=>{fe()("#datatable").DataTable({language:{decimal:"",emptyTable:"No hay información",info:"Mostrando _START_ a _END_ de _TOTAL_ Entradas",infoEmpty:"Mostrando 0 a 0 de 0 Entradas",infoFiltered:"(Filtrado de _MAX_ total entradas)",infoPostFix:"",thousands:",",lengthMenu:"Mostrar _MENU_ Entradas",loadingRecords:"Cargando...",processing:"Procesando...",search:"Buscar:",zeroRecords:"Sin resultados encontrados",paginate:{first:"Primero",last:"Ultimo",next:"Siguiente",previous:"Anterior"}},responsive:!0,columnDefs:[{width:"100px",heiht:"100px",targets:0},{width:"600px",targets:1},{width:"400px",targets:2},{width:"400px",targets:3}],scrollV:!0,scrollY:200,bDestroy:!0,lengthMenu:[[5,10,25,50,-1],[5,10,25,50,"All"]],pageLength:5})})),this.personas_correcto=!0,setTimeout((()=>{this.personas_correcto=!1}),2e3)},methods:{openModal(){this.visible=!0},close(){this.editando=null},editarPersona(e){this.personaEditada=Object.assign({},e),this.editando=e.id,this.visible=!0},guardarPersona(e){e.nombre.length&&e.apellido.length&&e.email.length&&(this.$emit("actualizar-persona",e.id,e),this.editando=null,this.visible=!1,this.actualizar_correcto=!0,this.update_success=!0,setTimeout((()=>{this.actualizar_correcto=!1,this.update_success=!1}),1e3))},cancelarEdicion(e){Object.assign(e,this.personaEditada),this.editando=null,this.visible=!1}}};const Me=(0,xe.Z)(Ae,[["render",ve]]);var Te=Me;const Oe={id:"tabla-personas"},je=(0,l.Uk)(" Actualización de usuario"),Fe={class:"table"},Ie=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",null,"Nombre"),(0,l._)("th",null,"Apellido"),(0,l._)("th",null,"Email"),(0,l._)("th",null,"Acciones")])],-1),Ne={key:0},Se=["onUpdate:modelValue"],$e={key:1},Le=["onUpdate:modelValue"],Ye={key:2},Ze=["onUpdate:modelValue"],He={key:3},We=["onClick"],Ke=["onClick"],Ge=(0,l.Uk)(" You can put your footer here "),Re={key:0,class:"alert alert-info",role:"alert"},Be={class:"table"},Je=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",null,"Nombre"),(0,l._)("th",null,"Apellido"),(0,l._)("th",null,"Email"),(0,l._)("th",null,"Acciones")])],-1),Xe={key:0},Qe=["onUpdate:modelValue"],eo={key:1},oo={key:2},ao=["onUpdate:modelValue"],lo={key:3},no={key:4},to=["onUpdate:modelValue"],ro={key:5},io={key:6},so=["onClick"],co=["onClick"],uo={key:7},po=["onClick"],mo=["onClick"];function bo(e,o,a,n,t,r){const i=(0,l.up)("Modal");return(0,l.wg)(),(0,l.iD)("div",Oe,[(0,l.wy)((0,l.Wm)(i,{onClose:r.close},{header:(0,l.w5)((()=>[je])),body:(0,l.w5)((()=>[(0,l._)("table",Fe,[Ie,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.personas,(e=>((0,l.wg)(),(0,l.iD)("tr",{key:e.id},[t.editando===e.id?((0,l.wg)(),(0,l.iD)("td",Ne,[(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":o=>e.nombre=o},null,8,Se),[[y.nr,e.nombre]])])):(0,l.kq)("",!0),t.editando===e.id?((0,l.wg)(),(0,l.iD)("td",$e,[(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":o=>e.apellido=o},null,8,Le),[[y.nr,e.apellido]])])):(0,l.kq)("",!0),t.editando===e.id?((0,l.wg)(),(0,l.iD)("td",Ye,[(0,l.wy)((0,l._)("input",{type:"email",class:"form-control","onUpdate:modelValue":o=>e.email=o},null,8,Ze),[[y.nr,e.email]])])):(0,l.kq)("",!0),t.editando===e.id?((0,l.wg)(),(0,l.iD)("td",He,[(0,l._)("button",{class:"btn btn-success",onClick:o=>r.guardarPersona(e)},"💾 Guardar",8,We),(0,l._)("button",{class:"btn btn-secondary ml-2",onClick:o=>r.cancelarEdicion(e)},"❌ Cancelar",8,Ke)])):(0,l.kq)("",!0)])))),128))])])])),footer:(0,l.w5)((()=>[Ge])),_:1},8,["onClose"]),[[y.F8,t.visible]]),a.personas.length?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",Re," No se han agregado personas ")),(0,l._)("table",Be,[Je,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.personas,(o=>((0,l.wg)(),(0,l.iD)("tr",{key:o.id},[t.editando===o.id?((0,l.wg)(),(0,l.iD)("td",Xe,[(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e=>o.nombre=e,id:"nombre"},null,8,Qe),[[y.nr,o.nombre]])])):((0,l.wg)(),(0,l.iD)("td",eo,(0,f.zw)(o.nombre),1)),t.editando===o.id?((0,l.wg)(),(0,l.iD)("td",oo,[(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e=>o.apellido=e,id:"apellido"},null,8,ao),[[y.nr,o.apellido]])])):((0,l.wg)(),(0,l.iD)("td",lo,(0,f.zw)(o.apellido),1)),t.editando===o.id?((0,l.wg)(),(0,l.iD)("td",no,[(0,l.wy)((0,l._)("input",{type:"email",class:"form-control","onUpdate:modelValue":e=>o.email=e,id:"email"},null,8,to),[[y.nr,o.email]])])):((0,l.wg)(),(0,l.iD)("td",ro,(0,f.zw)(o.email),1)),t.editando===o.id?((0,l.wg)(),(0,l.iD)("td",io,[(0,l._)("button",{class:"btn btn-success",onClick:e=>r.guardarPersona(o)},"💾 Guardar",8,so),(0,l._)("button",{class:"btn btn-secondary ml-2",onClick:e=>r.cancelarEdicion(o)},"❌ Cancelar",8,co)])):((0,l.wg)(),(0,l.iD)("td",uo,[(0,l._)("button",{class:"btn btn-info",onClick:e=>r.editarPersona(o)},"✏️ Editar",8,po),(0,l._)("button",{class:"btn btn-danger ml-2",onClick:a=>e.$emit("delete-persona",o.id)},"🗑️ Eliminar",8,mo)]))])))),128))])])])}var _o={name:["tabla-personas","Modal"],props:{personas:Array},components:{Modal:ze},data(){return{visible:!1,editando:null}},methods:{openModal(){this.visible=!0},close(){this.visible=!1,this.editando=null},editarPersona(e){this.personaEditada=Object.assign({},e),this.editando=e.id,this.visible=!0},guardarPersona(e){e.nombre.length&&e.apellido.length&&e.email.length&&(this.$emit("actualizar-persona",e.id,e),this.editando=null,this.visible=!1)},cancelarEdicion(e){Object.assign(e,this.personaEditada),this.editando=null,this.visible=!1}}};const ho=(0,xe.Z)(_o,[["render",bo]]);var go=ho;const vo={id:"formulario-persona"},yo={class:"container"},fo={class:"row"},wo={class:"col-md-4"},ko={class:"form-group"},Do=(0,l._)("label",null,"Nombre",-1),Co={class:"col-md-4"},Uo={class:"form-group"},Eo=(0,l._)("label",null,"Apellido",-1),Po={class:"col-md-4"},Vo={class:"form-group"},xo=(0,l._)("label",null,"Email",-1),qo=(0,l._)("div",{class:"row"},[(0,l._)("div",{class:"col-md-4"},[(0,l._)("div",{class:"form-group"},[(0,l._)("button",{class:"btn btn-primary"},"Añadir persona")])])],-1),zo={class:"container"},Ao={class:"row"},Mo={class:"col-md-12"},To={key:0,class:"alert alert-danger",role:"alert"},Oo={key:1,class:"alert alert-success",role:"alert"};function jo(e,o,a,n,t,r){return(0,l.wg)(),(0,l.iD)("div",vo,[(0,l._)("form",{onSubmit:o[7]||(o[7]=(0,y.iM)(((...e)=>r.enviarFormulario&&r.enviarFormulario(...e)),["prevent"]))},[(0,l._)("div",yo,[(0,l._)("div",fo,[(0,l._)("div",wo,[(0,l._)("div",ko,[Do,(0,l.wy)((0,l._)("input",{ref:"nombre","onUpdate:modelValue":o[0]||(o[0]=e=>t.persona.nombre=e),type:"text",class:(0,f.C_)(["form-control",{"is-invalid":t.procesando&&r.nombreInvalido}]),onFocus:o[1]||(o[1]=(...e)=>r.resetEstado&&r.resetEstado(...e)),onKeypress:o[2]||(o[2]=(...e)=>r.resetEstado&&r.resetEstado(...e))},null,34),[[y.nr,t.persona.nombre]])])]),(0,l._)("div",Co,[(0,l._)("div",Uo,[Eo,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":o[3]||(o[3]=e=>t.persona.apellido=e),type:"text",class:(0,f.C_)(["form-control",{"is-invalid":t.procesando&&r.apellidoInvalido}]),onFocus:o[4]||(o[4]=(...e)=>r.resetEstado&&r.resetEstado(...e))},null,34),[[y.nr,t.persona.apellido]])])]),(0,l._)("div",Po,[(0,l._)("div",Vo,[xo,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":o[5]||(o[5]=e=>t.persona.email=e),type:"email",class:(0,f.C_)([{"is-invalid":t.procesando&&r.emailInvalido},"form-control"]),onFocus:o[6]||(o[6]=(...e)=>r.resetEstado&&r.resetEstado(...e))},null,34),[[y.nr,t.persona.email]])])])]),qo]),(0,l._)("div",zo,[(0,l._)("div",Ao,[(0,l._)("div",Mo,[t.error&&t.procesando?((0,l.wg)(),(0,l.iD)("div",To," Debes rellenar todos los campos! ")):(0,l.kq)("",!0),t.correcto?((0,l.wg)(),(0,l.iD)("div",Oo," La persona ha sido agregada correctamente! ")):(0,l.kq)("",!0)])])])],32)])}var Fo={name:"formulario-persona",data(){return{procesando:!1,correcto:!1,error:!1,persona:{nombre:"",apellido:"",email:""}}},methods:{enviarFormulario(){this.procesando=!0,this.resetEstado(),this.nombreInvalido||this.apellidoInvalido||this.emailInvalido?this.error=!0:(this.$emit("add-persona",this.persona),this.$refs.nombre.focus(),this.error=!1,this.correcto=!0,this.procesando=!1,this.persona={nombre:"",apellido:"",email:""})},resetEstado(){this.correcto=!1,this.error=!1}},computed:{nombreInvalido(){return this.persona.nombre.length<1},apellidoInvalido(){return this.persona.apellido.length<1},emailInvalido(){return this.persona.email.length<1}}};const Io=(0,xe.Z)(Fo,[["render",jo]]);var No=Io,So={name:"app",components:{DatatableComponent:Te,TablaPersonas:go,FormularioPersona:No},data(){return{personas:[{id:1,nombre:"Jon",apellido:"Nieve",email:"jon@email.com"},{id:2,nombre:"Tyrion",apellido:"Lannister",email:"tyrion@email.com"},{id:3,nombre:"Daenerys",apellido:"Targaryen",email:"daenerys@email.com"}],index:1,eliminar_correcto:!1,alert_delete:!1}},methods:{agregarPersona(e){let o=0;this.personas.length>0&&(o=this.personas[this.personas.length-1].id+1),this.personas=[...this.personas,{...e,id:o}],this.index++},eliminarPersona(e){this.personas=this.personas.filter((o=>o.id!==e)),this.eliminar_correcto=!0,this.alert_delete=!0,setTimeout((()=>{this.eliminar_correcto=!1,this.alert_delete=!1}),1e3)},actualizarPersona(e,o){this.personas=this.personas.map((a=>a.id===e?o:a))}}};const $o=(0,xe.Z)(So,[["render",v]]);var Lo=$o}},o={};function a(l){var n=o[l];if(void 0!==n)return n.exports;var t=o[l]={exports:{}};return e[l].call(t.exports,t,t.exports,a),t.exports}a.m=e,function(){var e=[];a.O=function(o,l,n,t){if(!l){var r=1/0;for(c=0;c<e.length;c++){l=e[c][0],n=e[c][1],t=e[c][2];for(var i=!0,s=0;s<l.length;s++)(!1&t||r>=t)&&Object.keys(a.O).every((function(e){return a.O[e](l[s])}))?l.splice(s--,1):(i=!1,t<r&&(r=t));if(i){e.splice(c--,1);var d=n();void 0!==d&&(o=d)}}return o}t=t||0;for(var c=e.length;c>0&&e[c-1][2]>t;c--)e[c]=e[c-1];e[c]=[l,n,t]}}(),function(){a.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(o,{a:o}),o}}(),function(){a.d=function(e,o){for(var l in o)a.o(o,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:o[l]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/tutorial-vue/"}(),function(){var e={143:0};a.O.j=function(o){return 0===e[o]};var o=function(o,l){var n,t,r=l[0],i=l[1],s=l[2],d=0;if(r.some((function(o){return 0!==e[o]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(s)var c=s(a)}for(o&&o(l);d<r.length;d++)t=r[d],a.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return a.O(c)},l=self["webpackChunktutorial_vue"]=self["webpackChunktutorial_vue"]||[];l.forEach(o.bind(null,0)),l.push=o.bind(null,l.push.bind(l))}();var l=a.O(void 0,[998],(function(){return a(606)}));l=a.O(l)})();
//# sourceMappingURL=app.e0d6eef1.js.map