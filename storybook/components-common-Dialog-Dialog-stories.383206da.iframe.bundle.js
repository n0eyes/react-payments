"use strict";(self.webpackChunkreact_payments=self.webpackChunkreact_payments||[]).push([[485],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:function(){return _defineProperty}})},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/components/@common/Dialog/Dialog.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ContentAsChild:function(){return ContentAsChild},DefaultOpened:function(){return DefaultOpened},DisableTrigger:function(){return DisableTrigger},Trigger:function(){return Dialog_stories_Trigger},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Dialog_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react=__webpack_require__("./node_modules/react/index.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),_common_useContextInScope=function useContextInScope(context){var value=(0,react.useContext)(context);if(!value.inScope)throw new Error("Must use in ".concat(context.displayName||"root component"));return value},slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),useBoolean=__webpack_require__("./src/hooks/@common/useBoolean.tsx");function useDialog(){var opened=arguments.length>0&&void 0!==arguments[0]&&arguments[0],_useBoolean=(0,useBoolean.Z)(opened),_useBoolean2=(0,slicedToArray.Z)(_useBoolean,3),isOpened=_useBoolean2[0],openDialog=_useBoolean2[1],closeDialog=_useBoolean2[2],closeWithEscape=(0,react.useCallback)((function(e){"Escape"===e.key&&closeDialog()}),[]);return(0,react.useEffect)((function(){return isOpened?document.addEventListener("keydown",closeWithEscape):document.removeEventListener("keydown",closeWithEscape),function(){return document.removeEventListener("keydown",closeWithEscape)}}),[isOpened]),{isOpened:isOpened,openDialog:openDialog,closeDialog:closeDialog,closeWithEscape:closeWithEscape}}try{useDialog.displayName="useDialog",useDialog.__docgenInfo={description:"",displayName:"useDialog",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/@common/useDialog.tsx#useDialog"]={docgenInfo:useDialog.__docgenInfo,name:"useDialog",path:"src/hooks/@common/useDialog.tsx#useDialog"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),DialogContext=(0,react.createContext)({isOpened:!1,inScope:!1,openHandler:function openHandler(){}});DialogContext.displayName="Dialog";var useDialogContext=function useDialogContext(){return _common_useContextInScope(DialogContext)};function DialogProvider(props){var _props$value=props.value,open=_props$value.open,defaultOpen=_props$value.defaultOpen,onOpenChange=_props$value.onOpenChange,children=props.children,_useDialog=useDialog(null!=open?open:defaultOpen),isOpened=_useDialog.isOpened,openDialog=_useDialog.openDialog,closeDialog=_useDialog.closeDialog,composedDialogState=null!=open?open:isOpened;return(0,react.useEffect)((function(){null==onOpenChange||onOpenChange(isOpened)}),[isOpened]),(0,jsx_runtime.jsx)(DialogContext.Provider,{value:{isOpened:composedDialogState,inScope:!0,openHandler:function openHandler(){isOpened?closeDialog():openDialog()}},children:children})}try{Dialog.displayName="Dialog",Dialog.__docgenInfo={description:"",displayName:"Dialog",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"DialogProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/context/DialogContext.tsx#Dialog"]={docgenInfo:Dialog.__docgenInfo,name:"Dialog",path:"src/context/DialogContext.tsx#Dialog"})}catch(__react_docgen_typescript_loader_error){}var _templateObject,_templateObject2,_templateObject3,_templateObject4,dom=__webpack_require__("./src/utils/dom.ts"),jsx=__webpack_require__("./src/utils/jsx.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),BackDrop=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  position: fixed;\n  inset: 0;\n  background-color: hsla(0, 0%, 0%, 0.439);\n  z-index: 999;\n"]))),Content=styled_components_browser_esm.ZP.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  background-color: white;\n  border-radius: 6px;\n  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 90vw;\n  min-height: 1vh;\n  max-width: 450px;\n  max-height: 85vh;\n\n  padding: 25px;\n\n  z-index: 9999;\n\n  @keyframes openContent {\n    from {\n      opacity: 0;\n      transform: translate(-50%, -48%) scale(0.96);\n    }\n    to {\n      opacity: 1;\n      transform: translate(-50%, -50%) scale(1);\n    }\n  }\n\n  animation: openContent 150ms cubic-bezier(0.16, 1, 0.3, 1);\n"]))),Close=styled_components_browser_esm.ZP.button(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  position: absolute;\n  background-color: transparent;\n  top: 15px;\n  right: 20px;\n\n  border: none;\n  outline: none;\n\n  cursor: pointer;\n"]))),Trigger=styled_components_browser_esm.ZP.button(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  padding: 0 15px;\n  font-size: 15px;\n  line-height: 1;\n  font-weight: 500;\n  height: 35px;\n  background-color: white;\n  box-shadow: 0 2px 10px hsla(0, 0%, 0%, 0.141);\n  border: none;\n  outline: none;\n  cursor: pointer;\n\n  &:hover {\n    background-color: hsl(294, 5.5%, 95.3%);\n  }\n"])));try{BackDrop.displayName="BackDrop",BackDrop.__docgenInfo={description:"",displayName:"BackDrop",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/@common/Dialog/Dialog.styles.tsx#BackDrop"]={docgenInfo:BackDrop.__docgenInfo,name:"BackDrop",path:"src/components/@common/Dialog/Dialog.styles.tsx#BackDrop"})}catch(__react_docgen_typescript_loader_error){}try{Content.displayName="Content",Content.__docgenInfo={description:"",displayName:"Content",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/@common/Dialog/Dialog.styles.tsx#Content"]={docgenInfo:Content.__docgenInfo,name:"Content",path:"src/components/@common/Dialog/Dialog.styles.tsx#Content"})}catch(__react_docgen_typescript_loader_error){}try{Close.displayName="Close",Close.__docgenInfo={description:"",displayName:"Close",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/@common/Dialog/Dialog.styles.tsx#Close"]={docgenInfo:Close.__docgenInfo,name:"Close",path:"src/components/@common/Dialog/Dialog.styles.tsx#Close"})}catch(__react_docgen_typescript_loader_error){}try{Trigger.displayName="Trigger",Trigger.__docgenInfo={description:"",displayName:"Trigger",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/@common/Dialog/Dialog.styles.tsx#Trigger"]={docgenInfo:Trigger.__docgenInfo,name:"Trigger",path:"src/components/@common/Dialog/Dialog.styles.tsx#Trigger"})}catch(__react_docgen_typescript_loader_error){}var _excluded=["children"],_excluded2=["asChild","firstChild","children","onClick"],_excluded3=["asChild","firstChild","children","onClick"],_excluded4=["asChild","firstChild","children"],_excluded5=["asChild","firstChild","children","onClick"];function Dialog_Dialog(props){var children=props.children,restProps=(0,objectWithoutProperties.Z)(props,_excluded);return(0,jsx_runtime.jsx)(DialogProvider,{value:restProps,children:children})}Dialog_Dialog.Trigger=function Dialog_Trigger(props){var _getValidProps=(0,jsx.on)(props),asChild=_getValidProps.asChild,firstChild=_getValidProps.firstChild,_getValidProps$childr=_getValidProps.children,children=void 0===_getValidProps$childr?"Trigger":_getValidProps$childr,onClickProps=_getValidProps.onClick,restProps=(0,objectWithoutProperties.Z)(_getValidProps,_excluded2),openHandler=useDialogContext().openHandler;return asChild?(0,react.cloneElement)(firstChild,(0,objectSpread2.Z)((0,objectSpread2.Z)({},restProps),{},{onClick:(0,dom.M)(onClickProps,openHandler)})):(0,jsx_runtime.jsx)(Trigger,(0,objectSpread2.Z)((0,objectSpread2.Z)({},restProps),{},{onClick:(0,dom.M)(onClickProps,openHandler),children:children}))},Dialog_Dialog.Portal=function Portal(_ref){var children=_ref.children,_ref$container=_ref.container,container=void 0===_ref$container?document.body:_ref$container;return useDialogContext().isOpened?(0,react_dom.createPortal)(children,container):null},Dialog_Dialog.BackDrop=function Dialog_BackDrop(props){var _getValidProps2=(0,jsx.on)(props),asChild=_getValidProps2.asChild,firstChild=_getValidProps2.firstChild,onClickProps=(_getValidProps2.children,_getValidProps2.onClick),restProps=(0,objectWithoutProperties.Z)(_getValidProps2,_excluded3),_useDialogContext3=useDialogContext(),isOpened=_useDialogContext3.isOpened,openHandler=_useDialogContext3.openHandler,backDrop=asChild?(0,react.cloneElement)(firstChild,(0,objectSpread2.Z)((0,objectSpread2.Z)({},restProps),{},{onClick:(0,dom.M)(onClickProps,openHandler)})):(0,jsx_runtime.jsx)(BackDrop,(0,objectSpread2.Z)((0,objectSpread2.Z)({},restProps),{},{onClick:(0,dom.M)(onClickProps,openHandler)}));return isOpened?backDrop:null},Dialog_Dialog.Content=function Dialog_Content(props){var _getValidProps3=(0,jsx.on)(props),asChild=_getValidProps3.asChild,firstChild=_getValidProps3.firstChild,children=_getValidProps3.children,restProps=(0,objectWithoutProperties.Z)(_getValidProps3,_excluded4),isOpened=useDialogContext().isOpened,content=asChild?(0,react.cloneElement)(firstChild,(0,objectSpread2.Z)({},restProps)):(0,jsx_runtime.jsx)(Content,(0,objectSpread2.Z)((0,objectSpread2.Z)({},restProps),{},{children:children}));return isOpened?content:null},Dialog_Dialog.Close=function Dialog_Close(props){var _getValidProps4=(0,jsx.on)(props),asChild=_getValidProps4.asChild,firstChild=_getValidProps4.firstChild,_getValidProps4$child=_getValidProps4.children,children=void 0===_getValidProps4$child?"X":_getValidProps4$child,onClickProps=_getValidProps4.onClick,restProps=(0,objectWithoutProperties.Z)(_getValidProps4,_excluded5),_useDialogContext5=useDialogContext(),isOpened=_useDialogContext5.isOpened,openHandler=_useDialogContext5.openHandler,close=asChild?(0,react.cloneElement)(firstChild,(0,objectSpread2.Z)((0,objectSpread2.Z)({},restProps),{},{onClick:(0,dom.M)(onClickProps,openHandler)})):(0,jsx_runtime.jsx)(Close,(0,objectSpread2.Z)((0,objectSpread2.Z)({},restProps),{},{onClick:(0,dom.M)(onClickProps,openHandler),children:children}));return isOpened?close:null};var Dialog_stories_templateObject,_DefaultOpened$parame,_DefaultOpened$parame2,_DefaultOpened$parame3,_Trigger$parameters,_Trigger$parameters2,_Trigger$parameters2$,_DisableTrigger$param,_DisableTrigger$param2,_DisableTrigger$param3,_ContentAsChild$param,_ContentAsChild$param2,_ContentAsChild$param3,_common_Dialog_Dialog=Dialog_Dialog;try{Dialog_Dialog.displayName="Dialog",Dialog_Dialog.__docgenInfo={description:"",displayName:"Dialog",props:{open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/@common/Dialog/Dialog.tsx#Dialog"]={docgenInfo:Dialog_Dialog.__docgenInfo,name:"Dialog",path:"src/components/@common/Dialog/Dialog.tsx#Dialog"})}catch(__react_docgen_typescript_loader_error){}var DefaultOpened=function DefaultOpened(){return(0,jsx_runtime.jsxs)(_common_Dialog_Dialog,{defaultOpen:!0,children:[(0,jsx_runtime.jsx)(_common_Dialog_Dialog.BackDrop,{}),(0,jsx_runtime.jsx)(_common_Dialog_Dialog.Portal,{children:(0,jsx_runtime.jsxs)(_common_Dialog_Dialog.Content,{children:[(0,jsx_runtime.jsx)("h1",{children:"title"}),(0,jsx_runtime.jsx)("div",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias nemo id doloremque ducimus magni modi rem omnis dolorum numquam soluta perferendis accusamus obcaecati maiores necessitatibus earum, sint quae aspernatur cumque?"}),(0,jsx_runtime.jsx)(_common_Dialog_Dialog.Close,{})]})})]})},Dialog_stories_Trigger=function Trigger(){return(0,jsx_runtime.jsxs)(_common_Dialog_Dialog,{children:[(0,jsx_runtime.jsx)(_common_Dialog_Dialog.Trigger,{}),(0,jsx_runtime.jsxs)(_common_Dialog_Dialog.Portal,{children:[(0,jsx_runtime.jsx)(_common_Dialog_Dialog.BackDrop,{}),(0,jsx_runtime.jsxs)(_common_Dialog_Dialog.Content,{children:[(0,jsx_runtime.jsx)("h1",{children:"title"}),(0,jsx_runtime.jsx)("div",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias nemo id doloremque ducimus magni modi rem omnis dolorum numquam soluta perferendis accusamus obcaecati maiores necessitatibus earum, sint quae aspernatur cumque?"}),(0,jsx_runtime.jsx)(_common_Dialog_Dialog.Close,{})]})]})]})},DisableTrigger=function DisableTrigger(){return(0,jsx_runtime.jsxs)(_common_Dialog_Dialog,{open:!1,children:[(0,jsx_runtime.jsx)(_common_Dialog_Dialog.Trigger,{}),(0,jsx_runtime.jsxs)(_common_Dialog_Dialog.Portal,{children:[(0,jsx_runtime.jsx)(_common_Dialog_Dialog.BackDrop,{}),(0,jsx_runtime.jsxs)(_common_Dialog_Dialog.Content,{children:[(0,jsx_runtime.jsx)("h1",{children:"title"}),(0,jsx_runtime.jsx)("div",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias nemo id doloremque ducimus magni modi rem omnis dolorum numquam soluta perferendis accusamus obcaecati maiores necessitatibus earum, sint quae aspernatur cumque?"}),(0,jsx_runtime.jsx)(_common_Dialog_Dialog.Close,{})]})]})]})},ContentAsChild=function ContentAsChild(){return(0,jsx_runtime.jsxs)(_common_Dialog_Dialog,{children:[(0,jsx_runtime.jsx)(_common_Dialog_Dialog.Trigger,{}),(0,jsx_runtime.jsxs)(_common_Dialog_Dialog.Portal,{children:[(0,jsx_runtime.jsx)(_common_Dialog_Dialog.BackDrop,{}),(0,jsx_runtime.jsx)(_common_Dialog_Dialog.Content,{asChild:!0,children:(0,jsx_runtime.jsxs)(ChildContent,{children:[(0,jsx_runtime.jsx)("h1",{children:"This is child content"}),(0,jsx_runtime.jsx)("div",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias nemo id doloremque ducimus magni modi rem omnis dolorum numquam soluta perferendis accusamus obcaecati maiores necessitatibus earum, sint quae aspernatur cumque?"}),(0,jsx_runtime.jsx)(_common_Dialog_Dialog.Close,{})]})})]})]})},Dialog_stories={title:"Components/Dialog",component:_common_Dialog_Dialog},ChildContent=styled_components_browser_esm.ZP.div(Dialog_stories_templateObject||(Dialog_stories_templateObject=(0,taggedTemplateLiteral.Z)(["\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100vw;\n\n  padding: 40px 50px;\n\n  z-index: 9999;\n\n  background-color: white;\n  border-radius: 6px;\n  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;\n\n  @keyframes showFromBottom {\n    from {\n      opacity: 0;\n      transform: translateY(100%);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n\n  animation: showFromBottom 1050ms cubic-bezier(0.16, 1, 0.3, 1);\n"])));DefaultOpened.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},DefaultOpened.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_DefaultOpened$parame=DefaultOpened.parameters)||void 0===_DefaultOpened$parame?void 0:_DefaultOpened$parame.docs),{},{source:(0,objectSpread2.Z)({originalSource:"() => <Dialog defaultOpen>\n    <Dialog.BackDrop />\n    <Dialog.Portal>\n      <Dialog.Content>\n        <h1>title</h1>\n        <div>\n          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias nemo id doloremque ducimus magni\n          modi rem omnis dolorum numquam soluta perferendis accusamus obcaecati maiores necessitatibus earum,\n          sint quae aspernatur cumque?\n        </div>\n        <Dialog.Close />\n      </Dialog.Content>\n    </Dialog.Portal>\n  </Dialog>"},null===(_DefaultOpened$parame2=DefaultOpened.parameters)||void 0===_DefaultOpened$parame2||null===(_DefaultOpened$parame3=_DefaultOpened$parame2.docs)||void 0===_DefaultOpened$parame3?void 0:_DefaultOpened$parame3.source)})}),Dialog_stories_Trigger.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Dialog_stories_Trigger.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Trigger$parameters=Dialog_stories_Trigger.parameters)||void 0===_Trigger$parameters?void 0:_Trigger$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"() => <Dialog>\n    <Dialog.Trigger />\n    <Dialog.Portal>\n      <Dialog.BackDrop />\n      <Dialog.Content>\n        <h1>title</h1>\n        <div>\n          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias nemo id doloremque ducimus magni\n          modi rem omnis dolorum numquam soluta perferendis accusamus obcaecati maiores necessitatibus earum,\n          sint quae aspernatur cumque?\n        </div>\n        <Dialog.Close />\n      </Dialog.Content>\n    </Dialog.Portal>\n  </Dialog>"},null===(_Trigger$parameters2=Dialog_stories_Trigger.parameters)||void 0===_Trigger$parameters2||null===(_Trigger$parameters2$=_Trigger$parameters2.docs)||void 0===_Trigger$parameters2$?void 0:_Trigger$parameters2$.source)})}),DisableTrigger.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},DisableTrigger.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_DisableTrigger$param=DisableTrigger.parameters)||void 0===_DisableTrigger$param?void 0:_DisableTrigger$param.docs),{},{source:(0,objectSpread2.Z)({originalSource:"() => <Dialog open={false}>\n    <Dialog.Trigger />\n    <Dialog.Portal>\n      <Dialog.BackDrop />\n      <Dialog.Content>\n        <h1>title</h1>\n        <div>\n          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias nemo id doloremque ducimus magni\n          modi rem omnis dolorum numquam soluta perferendis accusamus obcaecati maiores necessitatibus earum,\n          sint quae aspernatur cumque?\n        </div>\n        <Dialog.Close />\n      </Dialog.Content>\n    </Dialog.Portal>\n  </Dialog>"},null===(_DisableTrigger$param2=DisableTrigger.parameters)||void 0===_DisableTrigger$param2||null===(_DisableTrigger$param3=_DisableTrigger$param2.docs)||void 0===_DisableTrigger$param3?void 0:_DisableTrigger$param3.source)})}),ContentAsChild.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},ContentAsChild.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_ContentAsChild$param=ContentAsChild.parameters)||void 0===_ContentAsChild$param?void 0:_ContentAsChild$param.docs),{},{source:(0,objectSpread2.Z)({originalSource:"() => <Dialog>\n    <Dialog.Trigger />\n    <Dialog.Portal>\n      <Dialog.BackDrop />\n      <Dialog.Content asChild>\n        <ChildContent>\n          <h1>This is child content</h1>\n          <div>\n            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias nemo id doloremque ducimus magni\n            modi rem omnis dolorum numquam soluta perferendis accusamus obcaecati maiores necessitatibus\n            earum, sint quae aspernatur cumque?\n          </div>\n          <Dialog.Close />\n        </ChildContent>\n      </Dialog.Content>\n    </Dialog.Portal>\n  </Dialog>"},null===(_ContentAsChild$param2=ContentAsChild.parameters)||void 0===_ContentAsChild$param2||null===(_ContentAsChild$param3=_ContentAsChild$param2.docs)||void 0===_ContentAsChild$param3?void 0:_ContentAsChild$param3.source)})});var __namedExportsOrder=["DefaultOpened","Trigger","DisableTrigger","ContentAsChild"]},"./src/hooks/@common/useBoolean.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return useBoolean}});var _home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useBoolean(){var init=arguments.length>0&&void 0!==arguments[0]&&arguments[0],_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(init),_useState2=(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_useState,2),boolean=_useState2[0],setBoolean=_useState2[1];return[boolean,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){return setBoolean(!0)}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){return setBoolean(!1)}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){return setBoolean((function(prev){return!prev}))}),[])]}try{useBoolean.displayName="useBoolean",useBoolean.__docgenInfo={description:"",displayName:"useBoolean",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/@common/useBoolean.tsx#useBoolean"]={docgenInfo:useBoolean.__docgenInfo,name:"useBoolean",path:"src/hooks/@common/useBoolean.tsx#useBoolean"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/dom.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{M:function(){return composeEventHandlers},c:function(){return isInputElement}});var isInputElement=function isInputElement(target){return target instanceof HTMLInputElement},composeEventHandlers=function composeEventHandlers(externalEventHandler,innerEventHandler){return function(event){null==externalEventHandler||externalEventHandler(event),null==innerEventHandler||innerEventHandler(event)}}},"./src/utils/jsx.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{W$:function(){return getAllChildElement},JZ:function(){return getResolvedChildren},on:function(){return getValidProps},z1:function(){return validateAsChild}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var react=__webpack_require__("./node_modules/react/index.js"),getAllChildElement=function getAllChildElement(children,elementType){var targetChildren=null;return react.Children.toArray(children).forEach((function(child){if((0,react.isValidElement)(child)&&(child.type===elementType&&(targetChildren?targetChildren.push(child):targetChildren=[child]),child.props.children)){var _targetChildren,nestedChildren=getAllChildElement(child.props.children,elementType);if(nestedChildren)targetChildren?(_targetChildren=targetChildren).push.apply(_targetChildren,_toConsumableArray(nestedChildren)):targetChildren=nestedChildren}})),targetChildren},validateAsChild=function validateAsChild(childrenArray){if(childrenArray.length>1)throw new Error("Must use only 1 child");if(0===childrenArray.length)throw new Error("Must use at least 1 child")},getValidChildAsChild=function getValidChildAsChild(children){var child=react.Children.only(children);return(0,react.isValidElement)(child)?child:null},getResolvedChildren=function getResolvedChildren(children,props){return"function"==typeof children?children(props):children};function getValidProps(props){if(props.asChild){var firstChild=getValidChildAsChild(props.children);if(firstChild)return(0,objectSpread2.Z)((0,objectSpread2.Z)({},props),{},{asChild:props.asChild,firstChild:firstChild})}return(0,objectSpread2.Z)((0,objectSpread2.Z)({},props),{},{asChild:!1,firstChild:null})}}}]);