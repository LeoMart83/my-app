(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{301:function(e,t,s){e.exports={profilePicture:"ProfileInfo_profilePicture__3pL4S",contact:"ProfileInfo_contact__2xh0h",formSummuryError:"ProfileInfo_formSummuryError__1o6Xj",descriptionBlock:"ProfileInfo_descriptionBlock__3yUNI",photoChange:"ProfileInfo_photoChange__3F-HC",profileInformation:"ProfileInfo_profileInformation__1FIwf",profileStatus:"ProfileInfo_profileStatus__1m272"}},304:function(e,t,s){e.exports={postsBlock:"MyPosts_postsBlock__2rRYv",posts:"MyPosts_posts__286hW"}},305:function(e,t,s){e.exports={item:"Post_item__1j058"}},306:function(e,t,s){"use strict";s.r(t);var o=s(3),r=s(28),n=s(29),i=s(31),c=s(30),a=s(0),l=s.n(a);var u=s(100);function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var s=[],o=!0,r=!1,n=void 0;try{for(var i,c=e[Symbol.iterator]();!(o=(i=c.next()).done)&&(s.push(i.value),!t||s.length!==t);o=!0);}catch(a){r=!0,n=a}finally{try{o||null==c.return||c.return()}finally{if(r)throw n}}return s}}(e,t)||Object(u.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var b=s(301),d=s.n(b),f=s(67),p=s(109),h=s(1),O=function(e){var t=j(Object(a.useState)(!1),2),s=t[0],o=t[1],r=j(Object(a.useState)(e.status),2),n=r[0],i=r[1];return Object(h.jsxs)("div",{className:d.a.profileStatus,children:[!s&&Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Status: "})," ",Object(h.jsx)("span",{onDoubleClick:function(){return o(!0)},children:e.status||"-----"})]}),s&&Object(h.jsx)("div",{children:Object(h.jsx)("input",{onChange:function(e){i(e.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(n)},value:n})})]})},m=s(41),x=s(131),v=Object(x.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,s=e.profile,o=e.error;return Object(h.jsxs)("form",{onSubmit:t,children:[Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"save"})}),o&&Object(h.jsx)("div",{className:d.a.formSummuryError,children:o}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Full name:"}),": ",Object(m.c)("Full name","fullName",[],m.a)]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Looking for a job:"}),": ",Object(m.c)("","lookingForAJob",[],m.a,{type:"checkbox"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"My professional skills:"}),":",Object(m.c)("My professional skills","lookingForAJobDescription",[],m.b)]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"About me:"}),Object(m.c)("About me","aboutMe",[],m.b)]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Contacts:"})," ",Object.keys(s.contacts).map((function(e){return Object(h.jsx)("div",{className:d.a.contact,children:Object(h.jsxs)("b",{children:[e,": ",Object(m.c)(e,"contacts."+e,[],m.a),"  "]})},e)}))]})]})})),g=function(e){var t=e.profile,s=e.isOwner,o=e.goToEditMode;return Object(h.jsxs)("div",{className:d.a.profileInformation,children:[Object(h.jsx)("p",{children:"Personal profile information:"}),s&&Object(h.jsx)("div",{}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Full name:"}),t.fullName]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"About me:"})," ",t.aboutMe]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Looking for a job:"})," ",t.lookingForAJob?"Yes!":"No."]}),t.lookingForAJob&&Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"My professional skills:"})," ",t.lookingForAJobDescription]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Contacts:"})," ",Object.keys(t.contacts).map((function(e){return t.contacts[e]?Object(h.jsx)(P,{contactTitle:e,contactValue:t.contacts[e]},e):null}))]}),Object(h.jsx)("button",{onClick:o,children:"Edit"})]})},P=function(e){var t=e.contactTitle,s=e.contactValue;return Object(h.jsxs)("div",{className:d.a.contact,children:[Object(h.jsx)("b",{children:t}),": ",Object(h.jsx)("a",{href:s,target:"_blank",children:s})," "]})},S=function(e){var t=e.profile,s=e.status,o=e.updateStatus,r=e.isOwner,n=e.savePhoto,i=e.saveProfile,c=j(Object(a.useState)(!1),2),l=c[0],u=c[1];if(!t)return Object(h.jsx)(f.a,{});return Object(h.jsxs)("div",{className:d.a.descriptionBlock,children:[Object(h.jsx)(O,{status:s,updateStatus:o}),Object(h.jsx)("img",{src:t.photos.large?t.photos.large:p.a,className:d.a.profilePicture}),r&&Object(h.jsxs)("div",{className:d.a.photoChange,children:["Change photo: ",Object(h.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&n(e.target.files[0])}})]}),Object(h.jsx)("hr",{}),l?Object(h.jsx)(v,{initialValues:t,profile:t,onSubmit:function(e){i(e).then((function(){u(!1)}))}}):Object(h.jsx)(g,{goToEditMode:function(){u(!0)},profile:t,isOwner:r})]})},y=s(304),_=s.n(y),k=s(305),I=s.n(k),w=function(e){return Object(h.jsxs)("div",{className:I.a.item,children:[Object(h.jsx)("img",{src:"https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/viacom-Avatar-Sea1-Full-Image_GalleryBackground-en-US-1552014700974._SX1080_.jpg"}),e.message,Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Likes "})," ",e.likesCount]})]})},N=s(91),A=s(68),C=l.a.memo((function(e){var t=e.addPost,s=e.profilePage.posts.map((function(e){return Object(h.jsx)(w,{message:e.message,likesCount:e.likesCount},e.id)}));return Object(h.jsxs)("div",{className:_.a.postsBlock,children:[Object(h.jsx)("h3",{children:" My Posts "}),Object(h.jsx)(M,{onSubmit:function(e){t(e.newPostText)}}),Object(h.jsx)("div",{className:_.a.posts,children:s})]})})),F=Object(A.a)(10),M=Object(x.a)({form:"profileAddNewPostForm"})((function(e){return Object(h.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(h.jsx)("div",{children:Object(h.jsx)(N.a,{component:m.b,name:"newPostText",placeholder:"Enter new post",validate:[A.b,F]})}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"Add post"})})]})})),B=C,E=s(15),T=s(98),U=Object(E.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addPost:function(t){e(Object(T.a)(t))}}}))(B),J=function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)(S,{isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),Object(h.jsx)(U,{})]})},D=s(9),L=s(97),z=s(11),V=function(e){Object(i.a)(s,e);var t=Object(c.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,s){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(h.jsx)(J,Object(o.a)(Object(o.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),s}(a.Component);t.default=Object(z.d)(Object(E.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:T.d,getStatus:T.c,updateStatus:T.g,savePhoto:T.e,saveProfile:T.f}),D.f,L.a)(V)}}]);
//# sourceMappingURL=3.a62bb317.chunk.js.map