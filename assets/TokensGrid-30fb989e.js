import{j as e}from"./jsx-runtime-5fc188ad.js";function d({tokens:r,hasRemValue:s=!1}){return e.jsxs("table",{className:"tokens-grid",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Value"}),s&&e.jsx("th",{children:"Pixels"})]})}),e.jsx("tbody",{children:Object.entries(r).map(([t,n])=>e.jsxs("tr",{children:[e.jsx("td",{children:t}),e.jsx("td",{children:n}),s&&e.jsxs("td",{children:[Number(n.replace("rem",""))*16,"px"]})]},t))})]})}try{d.displayName="TokensGrid",d.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:{value:"false"},description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}}}}}catch{}export{d as T};
//# sourceMappingURL=TokensGrid-30fb989e.js.map
