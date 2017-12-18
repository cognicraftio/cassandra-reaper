webpackJsonp([4],{0:function(e,t,n){e.exports=n(807)},69:function(e,t,n){"use strict";var o=n(1),i=n(196);if("undefined"==typeof o)throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");var r=(new o.Component).updater;e.exports=i(o.Component,o.isValidElement,r)},82:function(e,t){/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function o(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var o=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==o.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(e){i[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}var i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=o()?Object.assign:function(e,t){for(var o,a,l=n(e),c=1;c<arguments.length;c++){o=Object(arguments[c]);for(var p in o)r.call(o,p)&&(l[p]=o[p]);if(i){a=i(o);for(var u=0;u<a.length;u++)s.call(o,a[u])&&(l[a[u]]=o[a[u]])}}return l}},95:function(e,t){var n={positions:{tl:"tl",tr:"tr",tc:"tc",bl:"bl",br:"br",bc:"bc"},levels:{success:"success",error:"error",warning:"warning",info:"info"},notification:{title:null,message:null,level:null,position:"tr",autoDismiss:5,dismissible:!0,action:null}};e.exports=n},196:function(e,t,n){(function(t){"use strict";function o(e){return e}function i(e,n,i){function u(e,n,o){for(var i in n)n.hasOwnProperty(i)&&"production"!==t.env.NODE_ENV&&l("function"==typeof n[i],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",e.displayName||"ReactClass",c[o],i)}function d(e,t){var n=_.hasOwnProperty(t)?_[t]:null;D.hasOwnProperty(t)&&a("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&a("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function m(e,o){if(o){a("function"!=typeof o,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),a(!n(o),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var i=e.prototype,r=i.__reactAutoBindPairs;o.hasOwnProperty(p)&&x.mixins(e,o.mixins);for(var s in o)if(o.hasOwnProperty(s)&&s!==p){var c=o[s],u=i.hasOwnProperty(s);if(d(u,s),x.hasOwnProperty(s))x[s](e,c);else{var m=_.hasOwnProperty(s),f="function"==typeof c,h=f&&!m&&!u&&o.autobind!==!1;if(h)r.push(s,c),i[s]=c;else if(u){var v=_[s];a(m&&("DEFINE_MANY_MERGED"===v||"DEFINE_MANY"===v),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",v,s),"DEFINE_MANY_MERGED"===v?i[s]=g(i[s],c):"DEFINE_MANY"===v&&(i[s]=y(i[s],c))}else i[s]=c,"production"!==t.env.NODE_ENV&&"function"==typeof c&&o.displayName&&(i[s].displayName=o.displayName+"_"+s)}}}else if("production"!==t.env.NODE_ENV){var b=typeof o,E="object"===b&&null!==o;"production"!==t.env.NODE_ENV&&l(E,"%s: You're attempting to include a mixin that is either null or not an object. Check the mixins included by the component, as well as any mixins they include themselves. Expected object but got %s.",e.displayName||"ReactClass",null===o?null:b)}}function f(e,t){if(t)for(var n in t){var o=t[n];if(t.hasOwnProperty(n)){var i=n in x;a(!i,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var r=n in e;a(!r,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),e[n]=o}}}function h(e,t){a(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(a(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function g(e,t){return function(){var n=e.apply(this,arguments),o=t.apply(this,arguments);if(null==n)return o;if(null==o)return n;var i={};return h(i,n),h(i,o),i}}function y(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function v(e,n){var o=n.bind(e);if("production"!==t.env.NODE_ENV){o.__reactBoundContext=e,o.__reactBoundMethod=n,o.__reactBoundArguments=null;var i=e.constructor.displayName,r=o.bind;o.bind=function(s){for(var a=arguments.length,c=Array(a>1?a-1:0),p=1;p<a;p++)c[p-1]=arguments[p];if(s!==e&&null!==s)"production"!==t.env.NODE_ENV&&l(!1,"bind(): React component methods may only be bound to the component instance. See %s",i);else if(!c.length)return"production"!==t.env.NODE_ENV&&l(!1,"bind(): You are binding a component method to the component. React does this for you automatically in a high-performance way, so you can safely remove this call. See %s",i),o;var u=r.apply(o,arguments);return u.__reactBoundContext=e,u.__reactBoundMethod=n,u.__reactBoundArguments=c,u}}return o}function b(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var o=t[n],i=t[n+1];e[o]=v(e,i)}}function E(e){var n=o(function(e,o,r){"production"!==t.env.NODE_ENV&&l(this instanceof n,"Something is calling a React component directly. Use a factory or JSX instead. See: https://fb.me/react-legacyfactory"),this.__reactAutoBindPairs.length&&b(this),this.props=e,this.context=o,this.refs=s,this.updater=r||i,this.state=null;var c=this.getInitialState?this.getInitialState():null;"production"!==t.env.NODE_ENV&&void 0===c&&this.getInitialState._isMockFunction&&(c=null),a("object"==typeof c&&!Array.isArray(c),"%s.getInitialState(): must return an object or null",n.displayName||"ReactCompositeComponent"),this.state=c});n.prototype=new C,n.prototype.constructor=n,n.prototype.__reactAutoBindPairs=[],N.forEach(m.bind(null,n)),m(n,S),m(n,e),m(n,w),n.getDefaultProps&&(n.defaultProps=n.getDefaultProps()),"production"!==t.env.NODE_ENV&&(n.getDefaultProps&&(n.getDefaultProps.isReactClassApproved={}),n.prototype.getInitialState&&(n.prototype.getInitialState.isReactClassApproved={})),a(n.prototype.render,"createClass(...): Class specification must implement a `render` method."),"production"!==t.env.NODE_ENV&&(l(!n.prototype.componentShouldUpdate,"%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",e.displayName||"A component"),l(!n.prototype.componentWillRecieveProps,"%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",e.displayName||"A component"));for(var r in _)n.prototype[r]||(n.prototype[r]=null);return n}var N=[],_={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},x={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)m(e,t[n])},childContextTypes:function(e,n){"production"!==t.env.NODE_ENV&&u(e,n,"childContext"),e.childContextTypes=r({},e.childContextTypes,n)},contextTypes:function(e,n){"production"!==t.env.NODE_ENV&&u(e,n,"context"),e.contextTypes=r({},e.contextTypes,n)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=g(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,n){"production"!==t.env.NODE_ENV&&u(e,n,"prop"),e.propTypes=r({},e.propTypes,n)},statics:function(e,t){f(e,t)},autobind:function(){}},S={componentDidMount:function(){this.__isMounted=!0}},w={componentWillUnmount:function(){this.__isMounted=!1}},D={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return"production"!==t.env.NODE_ENV&&(l(this.__didWarnIsMounted,"%s: isMounted is deprecated. Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.",this.constructor&&this.constructor.displayName||this.name||"Component"),this.__didWarnIsMounted=!0),!!this.__isMounted}},C=function(){};return r(C.prototype,e.prototype,D),E}var r=n(82),s=n(198),a=n(199);if("production"!==t.env.NODE_ENV)var l=n(200);var c,p="mixins";c="production"!==t.env.NODE_ENV?{prop:"prop",context:"context",childContext:"child context"}:{},e.exports=i}).call(t,n(2))},197:function(e,t){"use strict";function n(e){return function(){return e}}var o=function(){};o.thatReturns=n,o.thatReturnsFalse=n(!1),o.thatReturnsTrue=n(!0),o.thatReturnsNull=n(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},198:function(e,t,n){(function(t){"use strict";var n={};"production"!==t.env.NODE_ENV&&Object.freeze(n),e.exports=n}).call(t,n(2))},199:function(e,t,n){(function(t){"use strict";function n(e,t,n,i,r,s,a,l){if(o(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var p=[n,i,r,s,a,l],u=0;c=new Error(t.replace(/%s/g,function(){return p[u++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var o=function(e){};"production"!==t.env.NODE_ENV&&(o=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=n}).call(t,n(2))},200:function(e,t,n){(function(t){"use strict";var o=n(197),i=o;if("production"!==t.env.NODE_ENV){var r=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=0,r="Warning: "+e.replace(/%s/g,function(){return n[i++]});"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}};i=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var n=arguments.length,o=Array(n>2?n-2:0),i=2;i<n;i++)o[i-2]=arguments[i];r.apply(void 0,[t].concat(o))}}}e.exports=i}).call(t,n(2))},401:function(e,t,n){var o,i;(function(e){!function(){var t=n(13),o=n(14),i=n(5),r=n(1);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return o.getRootInstances(i)},r)}();try{(function(){o=[t,e,n(1),n(12),n(3),n(67),n(84),n(85),n(11)],i=function(e,t,o,i,r,s,a,l,c){"use strict";var p=i.default,u=p(o),d=p(r),m=(s.CFsListRender,p(a)),f=(p(l),p(c)),h=n(404),g=u.createClass({displayName:"SegmentList",_notificationSystem:null,propTypes:{repairRunId:u.PropTypes.string.isRequired},getInitialState:function(){var e=window!=window.top,t=e?"http://127.0.0.1:8080":"";return{segments:[],repairRunId:this.props.repairRunId,scheduler:{},urlPrefix:t,runningCollapsed:!1,doneCollapsed:!1,notStartedCollapsed:!1}},componentWillMount:function(){this._refreshSegments(),this.setState({scheduler:setInterval(this._refreshSegments,3e4)})},componentWillUnmount:function(){clearInterval(this.state.scheduler)},componentDidMount:function(){this._notificationSystem=this.refs.notificationSystem},_refreshSegments:function(){f.ajax({url:this.state.urlPrefix+"/repair_run/"+encodeURIComponent(this.state.repairRunId)+"/segments",method:"GET",component:this,complete:function(e){this.component.setState({segments:f.parseJSON(e.responseText)})}})},_toggleRunningDisplay:function(){1==this.state.runningCollapsed?this.setState({runningCollapsed:!1}):this.setState({runningCollapsed:!0})},_toggleDoneDisplay:function(){1==this.state.doneCollapsed?this.setState({doneCollapsed:!1}):this.setState({doneCollapsed:!0})},_toggleNotStartedDisplay:function(){1==this.state.notStartedCollapsed?this.setState({notStartedCollapsed:!1}):this.setState({notStartedCollapsed:!0})},_toast:function(e,t,n){event.preventDefault(),this._notificationSystem.addNotification({message:e,level:t,autoDismiss:3})},render:function(){function e(e,t){var n=0;return e.startTime>t.startTime?n=1:e.startTime<t.startTime&&(n=-1),n*-1}function t(e,t){var n=0;return e.endTime>t.endTime?n=1:e.endTime<t.endTime&&(n=-1),n*-1}function n(e,t){var n=0;return e.tokenRange.start>t.tokenRange.start?n=1:e.tokenRange.start<t.tokenRange.start&&(n=-1),n}var o=this,i=this.state.segments.filter(function(e){return"RUNNING"==e.state});i.sort(e);var r=i.map(function(e){return u.createElement("tbody",{key:e.id+"-rows"},u.createElement(y,{segment:e,key:e.id+"-head",urlPrefix:o.state.urlPrefix,refreshSegments:o._refreshSegments,notify:o._toast}))}),s=this.state.segments.filter(function(e){return"NOT_STARTED"==e.state}).sort(n).map(function(e){return u.createElement("tbody",{key:e.id+"-rows"},u.createElement(y,{segment:e,key:e.id+"-head"}))}),a=this.state.segments.filter(function(e){return"DONE"==e.state}),l=a.sort(t).map(function(e){return u.createElement("tbody",{key:e.id+"-rows"},u.createElement(y,{segment:e,key:e.id+"-head",urlPrefix:o.state.urlPrefix,refreshSegments:o._refreshSegments,notify:o._toast}))}),c=null;c=0==r.length?u.createElement("div",{className:"alert alert-info",role:"alert"},"No running segments found"):u.createElement("div",{className:"row"},u.createElement("div",{className:"col-sm-12"},u.createElement("div",{className:"table-responsive"},u.createElement("table",{className:"table table-bordered table-hover table-striped"},u.createElement("thead",null,u.createElement("tr",null,u.createElement("th",null,"ID"),u.createElement("th",null,"Start token"),u.createElement("th",null,"End token"),u.createElement("th",null,"Fail count"),u.createElement("th",null,"State"),u.createElement("th",null,"Host"),u.createElement("th",null,"Started"),u.createElement("th",null))),r))));var p=null;p=0==l.length?u.createElement("div",{className:"alert alert-info",role:"alert"},"No segment done yet"):u.createElement("div",{className:"row"},u.createElement("div",{className:"col-sm-12"},u.createElement("div",{className:"table-responsive"},u.createElement("table",{className:"table table-bordered table-hover table-striped"},u.createElement("thead",null,u.createElement("tr",null,u.createElement("th",null,"ID"),u.createElement("th",null,"Start token"),u.createElement("th",null,"End token"),u.createElement("th",null,"Fail count"),u.createElement("th",null,"State"),u.createElement("th",null,"Host"),u.createElement("th",null,"Started"),u.createElement("th",null,"Ended"),u.createElement("th",null,"Duration"),u.createElement("th",null))),l))));var d=null;d=0==s.length?u.createElement("div",{className:"alert alert-info",role:"alert"},"No more segment to process"):u.createElement("div",{className:"row"},u.createElement("div",{className:"col-sm-12"},u.createElement("div",{className:"table-responsive"},u.createElement("table",{className:"table table-bordered table-hover table-striped"},u.createElement("thead",null,u.createElement("tr",null,u.createElement("th",null,"ID"),u.createElement("th",null,"Start token"),u.createElement("th",null,"End token"),u.createElement("th",null,"Fail count"),u.createElement("th",null,"State"))),s))));var m={display:"none"},f={display:"inline-block"};1==this.state.runningCollapsed&&(m={display:"inline-block"},f={display:"none"});var g={display:"inline-block"},v={display:"none"};1==this.state.doneCollapsed&&(g={display:"none"},v={display:"inline-block"});var b={display:"none"},E={display:"inline-block"};1==this.state.notStartedCollapsed&&(b={display:"inline-block"},E={display:"none"});var N=u.createElement("div",{className:"panel-title"},u.createElement("a",{href:"#segments-running","data-toggle":"collapse",onClick:this._toggleRunningDisplay},"Running (",this.state.segments.filter(function(e){return"RUNNING"==e.state}).length,")"),"  ",u.createElement("span",{className:"glyphicon glyphicon-menu-down","aria-hidden":"true",style:m}),u.createElement("span",{className:"glyphicon glyphicon-menu-up","aria-hidden":"true",style:f})),_=u.createElement("div",{className:"panel-title"},u.createElement("a",{href:"#segments-done","data-toggle":"collapse",onClick:this._toggleDoneDisplay},"Done (",this.state.segments.filter(function(e){return"DONE"==e.state}).length,")"),"  ",u.createElement("span",{className:"glyphicon glyphicon-menu-down","aria-hidden":"true",style:g}),u.createElement("span",{className:"glyphicon glyphicon-menu-up","aria-hidden":"true",style:v})),x=u.createElement("div",{className:"panel-title"},u.createElement("a",{href:"#segments-notstarted","data-toggle":"collapse",onClick:this._toggleNotStartedDisplay},"Not started (",this.state.segments.filter(function(e){return"NOT_STARTED"==e.state}).length,")"),"  ",u.createElement("span",{className:"glyphicon glyphicon-menu-down","aria-hidden":"true",style:b}),u.createElement("span",{className:"glyphicon glyphicon-menu-up","aria-hidden":"true",style:E}));return u.createElement("div",null,u.createElement(h,{ref:"notificationSystem"}),u.createElement("div",{className:"panel panel-primary"},u.createElement("div",{className:"panel-heading"},N),u.createElement("div",{className:"panel-body collapse in",id:"segments-running"},c)),u.createElement("div",{className:"panel panel-success"},u.createElement("div",{className:"panel-heading"},_),u.createElement("div",{className:"panel-body collapse in",id:"segments-done"},p)),u.createElement("div",{className:"panel panel-info"},u.createElement("div",{className:"panel-heading"},x),u.createElement("div",{className:"panel-body collapse in",id:"segments-notstarted"},d)))}}),y=u.createClass({displayName:"Segment",propTypes:{segment:u.PropTypes.object.isRequired,refreshSegments:u.PropTypes.func,notify:u.PropTypes.func},getInitialState:function(){return{segment:{}}},_abortSegment:function(){console.log("Aborting segment "+this.props.segment.id),this.props.notify("Aborting segment "+this.props.segment.id,"warning",this.props.segment.id),f.ajax({url:this.props.urlPrefix+"/repair_run/"+encodeURIComponent(this.props.segment.runId)+"/segments/abort/"+encodeURIComponent(this.props.segment.id),method:"GET",component:this,success:function(e){this.component.props.notify("Successfully aborted segment "+this.component.props.segment.id,"success",this.component.props.segment.id)},complete:function(e){this.component.props.refreshSegments()},error:function(e){this.component.props.notify("Failed aborting segment "+this.component.props.segment.id+" : "+e.responseText,"error",this.component.props.segment.id)}})},render:function(){var e=this;return"NOT_STARTED"==this.props.segment.state?u.createElement("tr",null,u.createElement("td",null,this.props.segment.id),u.createElement("td",null,this.props.segment.tokenRange.start),u.createElement("td",null,this.props.segment.tokenRange.end),u.createElement("td",null,this.props.segment.failCount),u.createElement("td",null,u.createElement(m,{bsStyle:"primary"},this.props.segment.state))):"RUNNING"==this.props.segment.state?u.createElement("tr",null,u.createElement("td",null,this.props.segment.id),u.createElement("td",null,this.props.segment.tokenRange.start),u.createElement("td",null,this.props.segment.tokenRange.end),u.createElement("td",null,this.props.segment.failCount),u.createElement("td",null,u.createElement(m,{bsStyle:"warning"},this.props.segment.state)),u.createElement("td",null,this.props.segment.coordinatorHost),u.createElement("td",null,d(this.props.segment.startTime).format("LLL")),u.createElement("td",null,u.createElement(m,{bsStyle:"danger",onClick:function(){return e._abortSegment()}},"Abort"))):u.createElement("tr",null,u.createElement("td",null,this.props.segment.id),u.createElement("td",null,this.props.segment.tokenRange.start),u.createElement("td",null,this.props.segment.tokenRange.end),u.createElement("td",null,this.props.segment.failCount),u.createElement("td",null,u.createElement(m,{bsStyle:"success"},this.props.segment.state)),u.createElement("td",null,this.props.segment.coordinatorHost),u.createElement("td",null,d(this.props.segment.startTime).format("LLL")),u.createElement("td",null,d(this.props.segment.endTime).format("LLL")),u.createElement("td",null,d.duration(d(this.props.segment.endTime).diff(d(this.props.segment.startTime))).humanize()),u.createElement("td",null,u.createElement(m,{bsStyle:"danger",onClick:function(){return e._abortSegment()}},"Replay")))}});t.exports=g}.apply(t,o),!(void 0!==i&&(e.exports=i))}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var o=n(15);o(e,n(1))&&(t=!0);var i=t;i&&e.hot.accept(function(e){e&&console.error("Cannot apply hot update to segment-list.jsx: "+e.message)})}e.hot.dispose(function(n){n.makeHot=e.makeHot,n.foundReactClasses=t})}()}}).call(t,n(7)(e))},402:function(e,t,n){var o=n(1),i=n(69),r=n(4),s=n(403),a=n(95),l=i({propTypes:{position:r.string.isRequired,notifications:r.array.isRequired,getStyles:r.object},_style:{},componentWillMount:function(){this._style=this.props.getStyles.container(this.props.position),!this.props.getStyles.overrideWidth||this.props.position!==a.positions.tc&&this.props.position!==a.positions.bc||(this._style.marginLeft=-(this.props.getStyles.overrideWidth/2))},render:function(){var e,t=this;return[a.positions.bl,a.positions.br,a.positions.bc].indexOf(this.props.position)>-1&&this.props.notifications.reverse(),e=this.props.notifications.map(function(e){return o.createElement(s,{ref:"notification-"+e.uid,key:e.uid,notification:e,getStyles:t.props.getStyles,onRemove:t.props.onRemove,noAnimation:t.props.noAnimation,allowHTML:t.props.allowHTML,children:t.props.children})}),o.createElement("div",{className:"notifications-"+this.props.position,style:this._style},e)}});e.exports=l},403:function(e,t,n){var o=n(1),i=n(69),r=n(4),s=n(21),a=n(95),l=n(405),c=n(82),p=function(){var e,t=document.createElement("fakeelement"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};return Object.keys(n).forEach(function(o){void 0!==t.style[o]&&(e=n[o])}),e},u=i({propTypes:{notification:r.object,getStyles:r.object,onRemove:r.func,allowHTML:r.bool,noAnimation:r.bool,children:r.oneOfType([r.string,r.element])},getDefaultProps:function(){return{noAnimation:!1,onRemove:function(){},allowHTML:!1}},getInitialState:function(){return{visible:void 0,removed:!1}},componentWillMount:function(){var e=this.props.getStyles,t=this.props.notification.level;this._noAnimation=this.props.noAnimation,this._styles={notification:e.byElement("notification")(t),title:e.byElement("title")(t),dismiss:e.byElement("dismiss")(t),messageWrapper:e.byElement("messageWrapper")(t),actionWrapper:e.byElement("actionWrapper")(t),action:e.byElement("action")(t)},this.props.notification.dismissible||(this._styles.notification.cursor="default")},_styles:{},_notificationTimer:null,_height:0,_noAnimation:null,_isMounted:!1,_removeCount:0,_getCssPropertyByPosition:function(){var e=this.props.notification.position,t={};switch(e){case a.positions.tl:case a.positions.bl:t={property:"left",value:-200};break;case a.positions.tr:case a.positions.br:t={property:"right",value:-200};break;case a.positions.tc:t={property:"top",value:-100};break;case a.positions.bc:t={property:"bottom",value:-100}}return t},_defaultAction:function(e){var t=this.props.notification;e.preventDefault(),this._hideNotification(),"function"==typeof t.action.callback&&t.action.callback()},_hideNotification:function(){this._notificationTimer&&this._notificationTimer.clear(),this._isMounted&&this.setState({visible:!1,removed:!0}),this._noAnimation&&this._removeNotification()},_removeNotification:function(){this.props.onRemove(this.props.notification.uid)},_dismiss:function(){this.props.notification.dismissible&&this._hideNotification()},_showNotification:function(){var e=this;setTimeout(function(){e._isMounted&&e.setState({visible:!0})},50)},_onTransitionEnd:function(){this._removeCount>0||this.state.removed&&(this._removeCount+=1,this._removeNotification())},componentDidMount:function(){var e=this,t=p(),n=this.props.notification,o=s.findDOMNode(this);this._height=o.offsetHeight,this._isMounted=!0,this._noAnimation||(t?o.addEventListener(t,this._onTransitionEnd):this._noAnimation=!0),n.autoDismiss&&(this._notificationTimer=new l.Timer(function(){e._hideNotification()},1e3*n.autoDismiss)),this._showNotification()},_handleMouseEnter:function(){var e=this.props.notification;e.autoDismiss&&this._notificationTimer.pause()},_handleMouseLeave:function(){var e=this.props.notification;e.autoDismiss&&this._notificationTimer.resume()},componentWillUnmount:function(){var e=s.findDOMNode(this),t=p();e.removeEventListener(t,this._onTransitionEnd),this._isMounted=!1},_allowHTML:function(e){return{__html:e}},render:function(){var e=this.props.notification,t="notification notification-"+e.level,n=c({},this._styles.notification),i=this._getCssPropertyByPosition(),r=null,s=null,a=null,l=null;return this.state.visible?t+=" notification-visible":this.state.visible===!1&&(t+=" notification-hidden"),e.dismissible||(t+=" notification-not-dismissible"),this.props.getStyles.overrideStyle&&(this.state.visible||this.state.removed||(n[i.property]=i.value),this.state.visible&&!this.state.removed&&(n.height=this._height,n[i.property]=0),this.state.removed&&(n.overlay="hidden",n.height=0,n.marginTop=0,n.paddingTop=0,n.paddingBottom=0),n.opacity=this.state.visible?this._styles.notification.isVisible.opacity:this._styles.notification.isHidden.opacity),e.title&&(a=o.createElement("h4",{className:"notification-title",style:this._styles.title},e.title)),e.message&&(l=this.props.allowHTML?o.createElement("div",{className:"notification-message",style:this._styles.messageWrapper,dangerouslySetInnerHTML:this._allowHTML(e.message)}):o.createElement("div",{className:"notification-message",style:this._styles.messageWrapper},e.message)),e.dismissible&&(r=o.createElement("span",{className:"notification-dismiss",style:this._styles.dismiss},"×")),e.action&&(s=o.createElement("div",{className:"notification-action-wrapper",style:this._styles.actionWrapper},o.createElement("button",{className:"notification-action-button",onClick:this._defaultAction,style:this._styles.action},e.action.label))),e.children&&(s=e.children),o.createElement("div",{className:t,onClick:this._dismiss,onMouseEnter:this._handleMouseEnter,onMouseLeave:this._handleMouseLeave,style:n},a,l,r,s)}});e.exports=u},404:function(e,t,n){var o=n(1),i=n(69),r=n(4),s=n(82),a=n(402),l=n(95),c=n(406),p=i({uid:3400,_isMounted:!1,_getStyles:{overrideStyle:{},overrideWidth:null,setOverrideStyle:function(e){this.overrideStyle=e},wrapper:function(){return this.overrideStyle?s({},c.Wrapper,this.overrideStyle.Wrapper):{}},container:function(e){var t=this.overrideStyle.Containers||{};return this.overrideStyle?(this.overrideWidth=c.Containers.DefaultStyle.width,t.DefaultStyle&&t.DefaultStyle.width&&(this.overrideWidth=t.DefaultStyle.width),t[e]&&t[e].width&&(this.overrideWidth=t[e].width),s({},c.Containers.DefaultStyle,c.Containers[e],t.DefaultStyle,t[e])):{}},elements:{notification:"NotificationItem",title:"Title",messageWrapper:"MessageWrapper",dismiss:"Dismiss",action:"Action",actionWrapper:"ActionWrapper"},byElement:function(e){var t=this;return function(n){var o=t.elements[e],i=t.overrideStyle[o]||{};return t.overrideStyle?s({},c[o].DefaultStyle,c[o][n],i.DefaultStyle,i[n]):{}}}},_didNotificationRemoved:function(e){var t,n=this.state.notifications.filter(function(n){return n.uid!==e||(t=n,!1)});this._isMounted&&this.setState({notifications:n}),t&&t.onRemove&&t.onRemove(t)},getInitialState:function(){return{notifications:[]}},propTypes:{style:r.oneOfType([r.bool,r.object]),noAnimation:r.bool,allowHTML:r.bool},getDefaultProps:function(){return{style:{},noAnimation:!1,allowHTML:!1}},addNotification:function(e){var t,n=s({},l.notification,e),o=this.state.notifications;if(!n.level)throw new Error("notification level is required.");if(Object.keys(l.levels).indexOf(n.level)===-1)throw new Error("'"+n.level+"' is not a valid level.");if(isNaN(n.autoDismiss))throw new Error("'autoDismiss' must be a number.");if(Object.keys(l.positions).indexOf(n.position)===-1)throw new Error("'"+n.position+"' is not a valid position.");for(n.position=n.position.toLowerCase(),n.level=n.level.toLowerCase(),n.autoDismiss=parseInt(n.autoDismiss,10),n.uid=n.uid||this.uid,n.ref="notification-"+n.uid,this.uid+=1,t=0;t<o.length;t+=1)if(o[t].uid===n.uid)return!1;return o.push(n),"function"==typeof n.onAdd&&e.onAdd(n),this.setState({notifications:o}),n},getNotificationRef:function(e){var t=this,n=null;return Object.keys(this.refs).forEach(function(o){o.indexOf("container")>-1&&Object.keys(t.refs[o].refs).forEach(function(i){var r=e.uid?e.uid:e;i==="notification-"+r&&(n=t.refs[o].refs[i])})}),n},removeNotification:function(e){var t=this.getNotificationRef(e);return t&&t._hideNotification()},editNotification:function(e,t){var n=null,o=e.uid?e.uid:e,i=this.state.notifications.filter(function(e){return o!==e.uid||(n=e,!1)});n&&(i.push(s({},n,t)),this.setState({notifications:i}))},clearNotifications:function(){var e=this;Object.keys(this.refs).forEach(function(t){t.indexOf("container")>-1&&Object.keys(e.refs[t].refs).forEach(function(n){e.refs[t].refs[n]._hideNotification()})})},componentDidMount:function(){this._getStyles.setOverrideStyle(this.props.style),this._isMounted=!0},componentWillUnmount:function(){this._isMounted=!1},render:function(){var e=this,t=null,n=this.state.notifications;return n.length&&(t=Object.keys(l.positions).map(function(t){var i=n.filter(function(e){return t===e.position});return i.length?o.createElement(a,{ref:"container-"+t,key:t,position:t,notifications:i,getStyles:e._getStyles,onRemove:e._didNotificationRemoved,noAnimation:e.props.noAnimation,allowHTML:e.props.allowHTML}):null})),o.createElement("div",{className:"notifications-wrapper",style:this._getStyles.wrapper()},t)}});e.exports=p},405:function(e,t){var n={Timer:function(e,t){var n,o,i=t;this.pause=function(){clearTimeout(n),i-=new Date-o},this.resume=function(){o=new Date,clearTimeout(n),n=setTimeout(e,i)},this.clear=function(){clearTimeout(n)},this.resume()}};e.exports=n},406:function(e,t){var n=320,o={success:{rgb:"94, 164, 0",hex:"#5ea400"},error:{rgb:"236, 61, 61",hex:"#ec3d3d"},warning:{rgb:"235, 173, 23",hex:"#ebad1a"},info:{rgb:"54, 156, 199",hex:"#369cc7"}},i="0.9",r={Wrapper:{},Containers:{DefaultStyle:{fontFamily:"inherit",position:"fixed",width:n,padding:"0 10px 10px 10px",zIndex:9998,WebkitBoxSizing:"border-box",MozBoxSizing:"border-box",boxSizing:"border-box",height:"auto"},tl:{top:"0px",bottom:"auto",left:"0px",right:"auto"},tr:{top:"0px",bottom:"auto",left:"auto",right:"0px"},tc:{top:"0px",bottom:"auto",margin:"0 auto",left:"50%",marginLeft:-(n/2)},bl:{top:"auto",bottom:"0px",left:"0px",right:"auto"},br:{top:"auto",bottom:"0px",left:"auto",right:"0px"},bc:{top:"auto",bottom:"0px",margin:"0 auto",left:"50%",marginLeft:-(n/2)}},NotificationItem:{DefaultStyle:{position:"relative",width:"100%",cursor:"pointer",borderRadius:"2px",fontSize:"13px",margin:"10px 0 0",padding:"10px",display:"block",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box",boxSizing:"border-box",opacity:0,transition:"0.3s ease-in-out",WebkitTransform:"translate3d(0, 0, 0)",transform:"translate3d(0, 0, 0)",willChange:"transform, opacity",isHidden:{opacity:0},isVisible:{opacity:1}},success:{borderTop:"2px solid "+o.success.hex,backgroundColor:"#f0f5ea",color:"#4b583a",WebkitBoxShadow:"0 0 1px rgba("+o.success.rgb+","+i+")",MozBoxShadow:"0 0 1px rgba("+o.success.rgb+","+i+")",boxShadow:"0 0 1px rgba("+o.success.rgb+","+i+")"},error:{borderTop:"2px solid "+o.error.hex,backgroundColor:"#f4e9e9",color:"#412f2f",WebkitBoxShadow:"0 0 1px rgba("+o.error.rgb+","+i+")",
MozBoxShadow:"0 0 1px rgba("+o.error.rgb+","+i+")",boxShadow:"0 0 1px rgba("+o.error.rgb+","+i+")"},warning:{borderTop:"2px solid "+o.warning.hex,backgroundColor:"#f9f6f0",color:"#5a5343",WebkitBoxShadow:"0 0 1px rgba("+o.warning.rgb+","+i+")",MozBoxShadow:"0 0 1px rgba("+o.warning.rgb+","+i+")",boxShadow:"0 0 1px rgba("+o.warning.rgb+","+i+")"},info:{borderTop:"2px solid "+o.info.hex,backgroundColor:"#e8f0f4",color:"#41555d",WebkitBoxShadow:"0 0 1px rgba("+o.info.rgb+","+i+")",MozBoxShadow:"0 0 1px rgba("+o.info.rgb+","+i+")",boxShadow:"0 0 1px rgba("+o.info.rgb+","+i+")"}},Title:{DefaultStyle:{fontSize:"14px",margin:"0 0 5px 0",padding:0,fontWeight:"bold"},success:{color:o.success.hex},error:{color:o.error.hex},warning:{color:o.warning.hex},info:{color:o.info.hex}},MessageWrapper:{DefaultStyle:{margin:0,padding:0}},Dismiss:{DefaultStyle:{fontFamily:"Arial",fontSize:"17px",position:"absolute",top:"4px",right:"5px",lineHeight:"15px",backgroundColor:"#dededf",color:"#ffffff",borderRadius:"50%",width:"14px",height:"14px",fontWeight:"bold",textAlign:"center"},success:{color:"#f0f5ea",backgroundColor:"#b0ca92"},error:{color:"#f4e9e9",backgroundColor:"#e4bebe"},warning:{color:"#f9f6f0",backgroundColor:"#e1cfac"},info:{color:"#e8f0f4",backgroundColor:"#a4becb"}},Action:{DefaultStyle:{background:"#ffffff",borderRadius:"2px",padding:"6px 20px",fontWeight:"bold",margin:"10px 0 0 0",border:0},success:{backgroundColor:o.success.hex,color:"#ffffff"},error:{backgroundColor:o.error.hex,color:"#ffffff"},warning:{backgroundColor:o.warning.hex,color:"#ffffff"},info:{backgroundColor:o.info.hex,color:"#ffffff"}},ActionWrapper:{DefaultStyle:{margin:0,padding:0}}};e.exports=r},807:function(e,t,n){var o,i;(function(e){!function(){var t=n(13),o=n(14),i=n(5),r=n(1);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return o.getRootInstances(i)},r)}();try{(function(){o=[t,n(11),n(12),n(21),n(1),n(93),n(401),n(185)],i=function(e,t,n,o,i,r,s,a){"use strict";var l=n.default,c=l(t),p=l(o),u=l(i),d=(l(r),l(s));a.statusObservableTimer,a.addClusterSubject,a.addClusterResult,a.deleteClusterSubject,a.deleteClusterResult,a.clusterNames;c(document).ready(function(e){e.urlParam=function(e){var t=new RegExp("[?&]"+e+"=([^&#]*)").exec(window.location.href);return null!=t?t[1]||0:null};var t=e.urlParam("repairRunId");t||(t="0"),p.render(u.createElement(d,{repairRunId:t}),document.getElementById("wrapper"))})}.apply(t,o),!(void 0!==i&&(e.exports=i))}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var o=n(15);o(e,n(1))&&(t=!0);var i=t;i&&e.hot.accept(function(e){e&&console.error("Cannot apply hot update to segments.js: "+e.message)})}e.hot.dispose(function(n){n.makeHot=e.makeHot,n.foundReactClasses=t})}()}}).call(t,n(7)(e))}});