(()=>{"use strict";var t={},e={};function i(a){var h=e[a];if(void 0!==h)return h.exports;var n=e[a]={exports:{}};return t[a](n,n.exports,i),n.exports}i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}();var a,h=null;function n(){try{return h?h("sharp"):i(Object(function(){var t=new Error("Cannot find module 'sharp'");throw t.code="MODULE_NOT_FOUND",t}()))}catch(t){}return null}function r(){n();try{return h?h("canvas"):i(Object(function(){var t=new Error("Cannot find module 'canvas'");throw t.code="MODULE_NOT_FOUND",t}()))}catch(t){}return null}!function(){var t="undefined"!=typeof self?self:void 0!==i.g?i.g:null,e=void 0===t.ImageData||void 0===t.document,h=e;if(!e){t.ImageData;try{let e=new Uint8ClampedArray(4);e[0]=1;let i=new t.ImageData(e,1,1);h=1!=i.data[0]}catch(t){h=!0}}if(h){var n=function(){var t=0,i=arguments[t]instanceof Uint8ClampedArray?arguments[t++]:null,a=arguments[t++],n=arguments[t++];if(e)i||(i=new Uint8ClampedArray(a*n*4)),this.width=a,this.height=n,this.data=i;else if(h){var r=document.createElement("canvas");r.width=a,r.height=n;var o=r.getContext("2d").createImageData(a,n);return i&&o.data.set(i),o}};e||(n.prototype=t.ImageData.prototype),t.ImageData=n,a=n}else a=t.ImageData}(),a.prototype.toDrawableData=function(){return"undefined"==typeof document?function(t){let e=r();if(!e)throw new Error("couldn't find built-in canvas or the module 'canvas'");return new e.ImageData(t.data,t.width,t.height)}(this):this},a.prototype.putImageData=function(t,e,i){for(var a=0;a<t.width;a++)for(var h=0;h<t.height;h++){var n=4*(a+e)+4*(h+i)*this.width,r=4*a+4*h*t.width;this.data[n]=t.data[r],this.data[n+1]=t.data[r+1],this.data[n+2]=t.data[r+2],this.data[n+3]=t.data[r+3]}},a.prototype.pixelOffset=function(t,e){return 4*t+e*this.width*4},a.prototype.getPixelHash=function(t){t||(t=new o(0,0,this.width,this.height));for(var e=0,i=t.x;i<t.x+t.width;i++)for(var a=t.y;a<t.y+t.height;a++){var h=4*i+4*a*this.width;e=((e=((e=((e=(e<<5)-e+this.data[h]|0)<<5)-e+this.data[h+1]|0)<<5)-e+this.data[h+2]|0)<<5)-e+this.data[h+3]|0}return e},a.prototype.clone=function(t){return this.toImage(t).getContext("2d").getImageData(0,0,t.width,t.height)},a.prototype.show=function(t=5,e=5,i=1){if("undefined"!=typeof document){for(var h=document.getElementsByClassName("debugimage");h.length>a.prototype.show.maxImages;)h[0].remove();var n=this.toImage();return n.classList.add("debugimage"),n.style.position="absolute",n.style.zIndex="1000",n.style.left=t/i+"px",n.style.top=e/i+"px",n.style.background="purple",n.style.cursor="pointer",n.style.imageRendering="pixelated",n.style.outline="1px solid #0f0",n.style.width=(1==this.width?100:this.width)*i+"px",n.style.height=(1==this.height?100:this.height)*i+"px",n.onclick=function(){n.remove()},document.body.appendChild(n),n}console.error("need a document to show an imagedata object")},a.prototype.show.maxImages=10,a.prototype.toImage=function(t){if(t||(t=new o(0,0,this.width,this.height)),"undefined"!=typeof document){var e=document.createElement("canvas");e.width=t.width,e.height=t.height}else e=function(t,e){let i=r();if(!i)throw new Error("couldn't find built-in canvas or the module 'canvas'");return i.createCanvas(t,e)}(t.width,t.height);return e.getContext("2d").putImageData(this.toDrawableData(),-t.x,-t.y),e},a.prototype.getPixel=function(t,e){var i=4*t+4*e*this.width;return[this.data[i],this.data[i+1],this.data[i+2],this.data[i+3]]},a.prototype.getPixelValueSum=function(t,e){var i=4*t+4*e*this.width;return this.data[i]+this.data[i+1]+this.data[i+2]},a.prototype.getPixelInt=function(t,e){var i=4*t+4*e*this.width;return(this.data[i+3]<<24)+(this.data[i+0]<<16)+(this.data[i+1]<<8)+(this.data[i+2]<<0)},a.prototype.getColorDifference=function(t,e,i,a,h,n=255){var r=4*t+4*e*this.width;return Math.abs(this.data[r]-i)+Math.abs(this.data[r+1]-a)+Math.abs(this.data[r+2]-h)*n/255},a.prototype.setPixel=function(t,e,...i){var a,h,n,r,[a,h,n,r]=Array.isArray(i[0])?i[0]:i,o=4*t+4*e*this.width;this.data[o]=a,this.data[o+1]=h,this.data[o+2]=n,this.data[o+3]=null==r?255:r},a.prototype.setPixelInt=function(t,e,i){var a=4*t+4*e*this.width;this.data[a]=i>>24&255,this.data[a+1]=i>>16&255,this.data[a+2]=i>>8&255,this.data[a+3]=i>>0&255},a.prototype.toFileBytes=function(t,e){return"undefined"!=typeof HTMLCanvasElement?new Promise((i=>this.toImage().toBlob((t=>{var e=new FileReader;e.readAsArrayBuffer(t),e.onload=()=>i(new Uint8Array(e.result))}),t,e))):function(t,e,a){return r=this,o=void 0,d=function*(){var r,o;if(r=function(){try{return h?h("electron/common"):i(Object(function(){var t=new Error("Cannot find module 'electron/common'");throw t.code="MODULE_NOT_FOUND",t}()))}catch(t){}return null}()){let e=r.nativeImage,i=Buffer.from(t.data.slice(t.data.byteOffset,t.data.byteLength));return function(t){for(let e=0;e<t.length;e+=4){let i=t[e+2];t[e+2]=t[e+0],t[e+0]=i}}(i),e.createFromBitmap(i,{width:t.width,height:t.height}).toPNG()}if(o=n()){let i=o(Buffer.from(t.data.buffer),{raw:{width:t.width,height:t.height,channels:4}});if("image/png"==e)i.png();else{if("image/webp"!=e)throw new Error("unknown image format: "+e);var s={quality:80};"number"==typeof a&&(s.quality=100*a),i.webp(s)}return yield i.toBuffer({resolveWithObject:!1}).buffer}throw new Error("coulnd't find build-in image compression methods or the module 'electron/common' or 'sharp'")},new((s=void 0)||(s=Promise))((function(t,e){function i(t){try{h(d.next(t))}catch(t){e(t)}}function a(t){try{h(d.throw(t))}catch(t){e(t)}}function h(e){var h;e.done?t(e.value):(h=e.value,h instanceof s?h:new s((function(t){t(h)}))).then(i,a)}h((d=d.apply(r,o||[])).next())}));var r,o,s,d}(this,t,e)},a.prototype.toPngBase64=function(){if("undefined"!=typeof HTMLCanvasElement){var t=this.toImage().toDataURL("image/png");return t.slice(t.indexOf(",")+1)}throw new Error("synchronous image conversion not supported in nodejs, try using ImageData.prototype.toFileBytes")},a.prototype.pixelCompare=function(t,e=0,i=0,a){return function(t,e,i,a,h=30){if(i<0||a<0)throw new RangeError;if(i+e.width>t.width||a+e.height>t.height)throw new RangeError;-1==h&&(h=1020);for(var n=0,r=8;r>=1;r/=2)for(var o=0;o<e.width;o+=r)for(var s=0;s<e.height;s+=r){var d=4*(i+o)+(a+s)*t.width*4,u=4*o+s*e.width*4,f=0;if(f=(f=(f=f+Math.abs(t.data[d+0]-e.data[u+0])|0)+Math.abs(t.data[d+1]-e.data[u+1])|0)+Math.abs(t.data[d+2]-e.data[u+2])|0,f*=e.data[u+3]/255,1==r&&(n+=f),f>h)return 1/0}return n/e.width/e.height}(this,t,e,i,a)},a.prototype.copyTo=function(t,e,i,a,h,n,r){const o=0|t.width,s=0|this.width,d=0|a,u=4*Math.floor(a/4),f=new Int32Array(this.data.buffer,this.data.byteOffset,this.data.byteLength/4),c=new Int32Array(t.data.buffer,t.data.byteOffset,t.data.byteLength/4);for(let t=0;t<h;t++){let a=0,h=a+n+(t+r)*o,l=a+e+(t+i)*s;for(;a<u;a+=4)c[h]=f[l],c[h+1]=f[l+1],c[h+2]=f[l+2],c[h+3]=f[l+3],h+=4,l+=4;for(;a<d;a++)c[h]=f[l],h+=1,l+=1}},"undefined"!=typeof HTMLImageElement&&(HTMLImageElement.prototype.toBuffer=function(t=0,e=0,i=this.width,a=this.height){var h=document.createElement("canvas");h.width=i,h.height=a;var n=h.getContext("2d");return n.drawImage(this,-t,-e),n.getImageData(0,0,i,a)},HTMLImageElement.prototype.toCanvas=function(t=0,e=0,i=this.width,a=this.height){var h=document.createElement("canvas");return h.width=i,h.height=a,h.getContext("2d").drawImage(this,-t,-e),h}),Error,Error,"undefined"!=typeof alt1&&alt1.skinName;class o{constructor(t,e,i,a){this.x=t,this.y=e,this.width=i,this.height=a}static fromArgs(...t){if("object"==typeof t[0])return new o(t[0].x,t[0].y,t[0].width,t[0].height);if("number"==typeof t[0]&&t.length>=4)return new o(t[0],t[1],t[2],t[3]);throw new Error("invalid rect args")}union(t){var e=Math.min(this.x,t.x),i=Math.min(this.y,t.y);return this.width=Math.max(this.x+this.width,t.x+t.width)-e,this.height=Math.max(this.y+this.height,t.y+t.height)-i,this.x=e,this.y=i,this}includePoint(t,e){this.union(new o(t,e,0,0))}inflate(t,e){this.x-=t,this.y-=e,this.width+=2*t,this.height+=2*e}intersect(t){this.x<t.x&&(this.width-=t.x-this.x,this.x=t.x),this.y<t.y&&(this.height-=t.y-this.y,this.y=t.y),this.width=Math.min(this.x+this.width,t.x+t.width)-this.x,this.height=Math.min(this.y+this.height,t.y+t.height)-this.y,(this.width<=0||this.height<=0)&&(this.width=0,this.height=0)}overlaps(t){return this.x<t.x+t.width&&this.x+this.width>t.x&&this.y<t.y+t.height&&this.y+this.height>t.y}contains(t){return this.x<=t.x&&this.x+this.width>=t.x+t.width&&this.y<=t.y&&this.y+this.height>=t.y+t.height}containsPoint(t,e){return this.x<=t&&this.x+this.width>t&&this.y<=e&&this.y+this.height>e}}document.querySelector("#title").textContent="yo"})();