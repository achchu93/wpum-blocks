!function(e){var l={};function t(o){if(l[o])return l[o].exports;var r=l[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=l,t.d=function(e,l,o){t.o(e,l)||Object.defineProperty(e,l,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,l){if(1&l&&(e=t(e)),8&l)return e;if(4&l&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&l&&"string"!=typeof e)for(var r in e)t.d(o,r,function(l){return e[l]}.bind(null,r));return o},t.n=function(e){var l=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(l,"a",l),l},t.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},t.p="",t(t.s=2)}([function(e,l){!function(){e.exports=this.wp.element}()},function(e,l,t){e.exports=t.p+"style.css"},function(e,l,t){"use strict";t.r(l);var o=t(0),r=(wp.i18n.__,wp.serverSideRender),s=wp.element.createElement;wp.i18n.__;(0,wp.blocks.registerBlockType)("wpum/account-page",{title:wpum_blocks.blocks["account-page"].labels.title,description:wpum_blocks.blocks["account-page"].labels.description,icon:wpum_blocks.blocks["account-page"].labels.icon,category:"wpum",keywords:wpum_blocks.blocks["account-page"].labels.keywords,attributes:wpum_blocks.blocks["account-page"].attributes,edit:function(e){return[s(r,{block:"wpum/account-page",attributes:e.attributes})]},save:function(){return null}});wp.i18n.__;var n=wp.components,i=n.PanelBody,c=n.ToggleControl,b=wp.blockEditor.InspectorControls,a=wp.serverSideRender,u=wp.element.createElement;wp.i18n.__;(0,wp.blocks.registerBlockType)("wpum/login-form",{title:wpum_blocks.blocks["login-form"].labels.title,description:wpum_blocks.blocks["login-form"].labels.description,icon:wpum_blocks.blocks["login-form"].labels.icon,category:"wpum",keywords:wpum_blocks.blocks["login-form"].labels.keywords,attributes:wpum_blocks.blocks["login-form"].attributes,edit:function(e){var l=e.attributes,t=e.setAttributes,o=l.psw_link,r=l.register_link;return[u(b,null,u(i,{title:wpum_blocks.blocks["login-form"].labels.panel_settings},u(c,{label:wpum_blocks.blocks["login-form"].attributes.psw_link.label,checked:o,onChange:function(){t({psw_link:!o})}}),u(c,{label:wpum_blocks.blocks["login-form"].attributes.register_link.label,checked:r,onChange:function(){t({register_link:!r})}}))),u(a,{block:"wpum/login-form",attributes:e.attributes})]},save:function(){return null}});wp.i18n.__;var p=wp.components,k=p.PanelBody,w=p.TextControl,m=wp.blockEditor.InspectorControls,_=wp.serverSideRender,d=wp.element.createElement;wp.i18n.__;(0,wp.blocks.registerBlockType)("wpum/login-link",{title:wpum_blocks.blocks["login-link"].labels.title,description:wpum_blocks.blocks["login-link"].labels.description,icon:wpum_blocks.blocks["login-link"].labels.icon,category:"wpum",keywords:wpum_blocks.blocks["login-link"].labels.keywords,attributes:wpum_blocks.blocks["login-link"].attributes,edit:function(e){var l=e.attributes,t=e.setAttributes,o=l.redirect,r=l.label;return[d(m,null,d(k,{title:wpum_blocks.blocks["login-link"].labels.panel_settings},d(w,{label:wpum_blocks.blocks["login-link"].attributes.redirect.label,value:wpum_blocks.blocks["login-link"].attributes.redirect.default,onChange:function(){t({redirect:!o})}}),d(w,{label:wpum_blocks.blocks["login-link"].attributes.label.label,value:wpum_blocks.blocks["login-link"].attributes.label.default,onChange:function(){t({label:!r})}}))),d(_,{block:"wpum/login-link",attributes:e.attributes})]},save:function(){return null}});wp.i18n.__;var g=wp.components,f=g.PanelBody,y=g.TextControl,v=wp.blockEditor.InspectorControls,h=wp.serverSideRender,C=wp.element.createElement;wp.i18n.__;(0,wp.blocks.registerBlockType)("wpum/logout-link",{title:wpum_blocks.blocks["logout-link"].labels.title,description:wpum_blocks.blocks["logout-link"].labels.description,icon:wpum_blocks.blocks["logout-link"].labels.icon,category:"wpum",keywords:wpum_blocks.blocks["logout-link"].labels.keywords,attributes:wpum_blocks.blocks["logout-link"].attributes,edit:function(e){var l=e.attributes,t=e.setAttributes,o=l.redirect,r=l.label;return[C(v,null,C(f,{title:wpum_blocks.blocks["logout-link"].labels.panel_settings},C(y,{label:wpum_blocks.blocks["logout-link"].attributes.redirect.label,value:wpum_blocks.blocks["logout-link"].attributes.redirect.default,onChange:function(){t({redirect:!o})}}),C(y,{label:wpum_blocks.blocks["logout-link"].attributes.label.label,value:wpum_blocks.blocks["logout-link"].attributes.label.default,onChange:function(){t({label:!r})}}))),C(h,{block:"wpum/logout-link",attributes:e.attributes})]},save:function(){return null}});wp.i18n.__;var T=wp.components,E=T.PanelBody,B=T.ToggleControl,S=wp.blockEditor.InspectorControls,P=wp.serverSideRender,x=wp.element.createElement;wp.i18n.__;(0,wp.blocks.registerBlockType)("wpum/registration-form",{title:wpum_blocks.blocks["registration-form"].labels.title,description:wpum_blocks.blocks["registration-form"].labels.description,icon:wpum_blocks.blocks["registration-form"].labels.icon,category:"wpum",keywords:wpum_blocks.blocks["registration-form"].labels.keywords,attributes:wpum_blocks.blocks["registration-form"].attributes,edit:function(e){var l=e.attributes,t=e.setAttributes,o=l.psw_link,r=l.register_link;return[x(S,null,x(E,{title:wpum_blocks.blocks["registration-form"].labels.panel_settings},x(B,{label:wpum_blocks.blocks["registration-form"].attributes.psw_link.label,checked:o,onChange:function(){t({psw_link:!o})}}),x(B,{label:wpum_blocks.blocks["registration-form"].attributes.register_link.label,checked:r,onChange:function(){t({register_link:!r})}}))),x(P,{block:"wpum/registration-form",attributes:e.attributes})]},save:function(){return null}});wp.i18n.__;var j=wp.components,O=j.PanelBody,R=j.ToggleControl,A=wp.blockEditor.InspectorControls,I=wp.serverSideRender,M=wp.element.createElement;wp.i18n.__;(0,wp.blocks.registerBlockType)("wpum/profile-card",{title:wpum_blocks.blocks["profile-card"].labels.title,description:wpum_blocks.blocks["profile-card"].labels.description,icon:wpum_blocks.blocks["profile-card"].labels.icon,category:"wpum",keywords:wpum_blocks.blocks["profile-card"].labels.keywords,attributes:wpum_blocks.blocks["profile-card"].attributes,edit:function(e){var l=e.attributes,t=e.setAttributes,o=(l.user_id,l.link_to_profile),r=l.display_buttons,s=l.display_cover;return[M(A,null,M(O,{title:wpum_blocks.blocks["profile-card"].labels.panel_settings},M(R,{label:wpum_blocks.blocks["profile-card"].attributes.link_to_profile.label,checked:o,onChange:function(){t({link_to_profile:!o})}}),M(R,{label:wpum_blocks.blocks["profile-card"].attributes.display_buttons.label,checked:r,onChange:function(){t({display_buttons:!r})}}),M(R,{label:wpum_blocks.blocks["profile-card"].attributes.display_cover.label,checked:s,onChange:function(){t({display_cover:!s})}}))),M(I,{block:"wpum/profile-card",attributes:e.attributes})]},save:function(){return null}});wp.i18n.__;var U=wp.serverSideRender,W=wp.element.createElement;wp.i18n.__;(0,wp.blocks.registerBlockType)("wpum/profile-page",{title:wpum_blocks.blocks["profile-page"].labels.title,description:wpum_blocks.blocks["profile-page"].labels.description,icon:wpum_blocks.blocks["profile-page"].labels.icon,category:"wpum",keywords:wpum_blocks.blocks["profile-page"].labels.keywords,attributes:wpum_blocks.blocks["profile-page"].attributes,edit:function(e){return[W(U,{block:"wpum/profile-page",attributes:e.attributes})]},save:function(){return null}});wp.i18n.__;var q=wp.components,z=q.PanelBody,D=q.ToggleControl,F=wp.blockEditor.InspectorControls,G=wp.serverSideRender,H=wp.element.createElement;wp.i18n.__;(0,wp.blocks.registerBlockType)("wpum/password-recovery-form",{title:wpum_blocks.blocks["password-recovery-form"].labels.title,description:wpum_blocks.blocks["password-recovery-form"].labels.description,icon:wpum_blocks.blocks["password-recovery-form"].labels.icon,category:"wpum",keywords:wpum_blocks.blocks["password-recovery-form"].labels.keywords,attributes:wpum_blocks.blocks["password-recovery-form"].attributes,edit:function(e){var l=e.attributes,t=e.setAttributes,o=l.psw_link,r=l.register_link;return[H(F,null,H(z,{title:wpum_blocks.blocks["password-recovery-form"].labels.panel_settings},H(D,{label:wpum_blocks.blocks["password-recovery-form"].attributes.psw_link.label,checked:o,onChange:function(){t({psw_link:!o})}}),H(D,{label:wpum_blocks.blocks["password-recovery-form"].attributes.register_link.label,checked:r,onChange:function(){t({register_link:!r})}}))),H(G,{block:"wpum/password-recovery-form",attributes:e.attributes})]},save:function(){return null}});t(1);var J=wp.i18n.__;wp.blocks.updateCategory("wpum",{icon:Object(o.createElement)("img",{style:{height:"20px","margin-top":"-2px"},src:wpum_blocks.wpum_svg_logo,alt:J("WP User Manager")})})}]);