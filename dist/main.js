(()=>{"use strict";var t={},e={};function i(a){var n=e[a];if(void 0!==n)return n.exports;var r=e[a]={exports:{}};return t[a](r,r.exports,i),r.exports}i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}();var a,n=function(t,e,i,a){return new(i||(i=Promise))((function(n,r){function o(t){try{s(a.next(t))}catch(t){r(t)}}function h(t){try{s(a.throw(t))}catch(t){r(t)}}function s(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(o,h)}s((a=a.apply(t,e||[])).next())}))},r=null;function o(){try{return r?r("sharp"):i(Object(function(){var t=new Error("Cannot find module 'sharp'");throw t.code="MODULE_NOT_FOUND",t}()))}catch(t){}return null}function h(){o();try{return r?r("canvas"):i(Object(function(){var t=new Error("Cannot find module 'canvas'");throw t.code="MODULE_NOT_FOUND",t}()))}catch(t){}return null}function s(){try{return r?r("electron/common"):i(Object(function(){var t=new Error("Cannot find module 'electron/common'");throw t.code="MODULE_NOT_FOUND",t}()))}catch(t){}return null}function d(t){for(let e=0;e<t.length;e+=4){let i=t[e+2];t[e+2]=t[e+0],t[e+0]=i}}function u(t){return n(this,void 0,void 0,(function*(){var e,i;if(function(t){if(137!=(e=t)[0]||80!=e[1]||78!=e[2]||71!=e[3])throw new Error("non-png image received");for(var e,i=8;i<t.length;){var a=16777216*t[i++]+65536*t[i++]+256*t[i++]+t[i++],n=!!(t[i]>>5&1),r=String.fromCharCode(t[i],t[i+1],t[i+2],t[i+3]);if("trns"!=r.toLowerCase()&&n){t[i+0]="n".charCodeAt(0),t[i+1]="o".charCodeAt(0),t[i+2]="P".charCodeAt(0),t[i+3]="E".charCodeAt(0);for(var o=i+4+a,h=4294967295,s=function(t){for(var e=0;e<8;e++)1&t?t=3988292384^t>>>1:t>>>=1;return t},d=i;d<o;d++)d>=i+4&&(t[d]=0),h=s(255&(h^t[d]))^h>>>8;h^=4294967295,t[i+4+a+0]=h>>24&255,t[i+4+a+1]=h>>16&255,t[i+4+a+2]=h>>8&255,t[i+4+a+3]=h>>0&255}if("IEND"==r)break;i+=4,i+=a,i+=4}}(t),e=s()){let i=e.nativeImage.createFromBuffer(t),n=i.toBitmap(),r=i.getSize(),o=new Uint8ClampedArray(n.buffer,n.byteOffset,n.byteLength);return d(o),new a(o,r.width,r.height)}if(i=h())return new Promise(((e,n)=>{let r=new i.Image;r.onerror=n,r.onload=()=>{var t=i.createCanvas(r.naturalWidth,r.naturalHeight).getContext("2d");t.drawImage(r,0,0);var n=t.getImageData(0,0,r.naturalWidth,r.naturalHeight);e(new a(n.data,n.width,n.height))},r.src=Buffer.from(t.buffer,t.byteOffset,t.byteLength)}));throw new Error("couldn't find built-in canvas, module 'electron/common' or the module 'canvas'")}))}!function(){var t="undefined"!=typeof self?self:void 0!==i.g?i.g:null,e=void 0===t.ImageData||void 0===t.document,n=e;if(!e){t.ImageData;try{let e=new Uint8ClampedArray(4);e[0]=1;let i=new t.ImageData(e,1,1);n=1!=i.data[0]}catch(t){n=!0}}if(n){var r=function(){var t=0,i=arguments[t]instanceof Uint8ClampedArray?arguments[t++]:null,a=arguments[t++],r=arguments[t++];if(e)i||(i=new Uint8ClampedArray(a*r*4)),this.width=a,this.height=r,this.data=i;else if(n){var o=document.createElement("canvas");o.width=a,o.height=r;var h=o.getContext("2d").createImageData(a,r);return i&&h.data.set(i),h}};e||(r.prototype=t.ImageData.prototype),t.ImageData=r,a=r}else a=t.ImageData}(),a.prototype.toDrawableData=function(){return"undefined"==typeof document?function(t){let e=h();if(!e)throw new Error("couldn't find built-in canvas or the module 'canvas'");return new e.ImageData(t.data,t.width,t.height)}(this):this},a.prototype.putImageData=function(t,e,i){for(var a=0;a<t.width;a++)for(var n=0;n<t.height;n++){var r=4*(a+e)+4*(n+i)*this.width,o=4*a+4*n*t.width;this.data[r]=t.data[o],this.data[r+1]=t.data[o+1],this.data[r+2]=t.data[o+2],this.data[r+3]=t.data[o+3]}},a.prototype.pixelOffset=function(t,e){return 4*t+e*this.width*4},a.prototype.getPixelHash=function(t){t||(t=new l(0,0,this.width,this.height));for(var e=0,i=t.x;i<t.x+t.width;i++)for(var a=t.y;a<t.y+t.height;a++){var n=4*i+4*a*this.width;e=((e=((e=((e=(e<<5)-e+this.data[n]|0)<<5)-e+this.data[n+1]|0)<<5)-e+this.data[n+2]|0)<<5)-e+this.data[n+3]|0}return e},a.prototype.clone=function(t){return this.toImage(t).getContext("2d").getImageData(0,0,t.width,t.height)},a.prototype.show=function(t=5,e=5,i=1){if("undefined"!=typeof document){for(var n=document.getElementsByClassName("debugimage");n.length>a.prototype.show.maxImages;)n[0].remove();var r=this.toImage();return r.classList.add("debugimage"),r.style.position="absolute",r.style.zIndex="1000",r.style.left=t/i+"px",r.style.top=e/i+"px",r.style.background="purple",r.style.cursor="pointer",r.style.imageRendering="pixelated",r.style.outline="1px solid #0f0",r.style.width=(1==this.width?100:this.width)*i+"px",r.style.height=(1==this.height?100:this.height)*i+"px",r.onclick=function(){r.remove()},document.body.appendChild(r),r}console.error("need a document to show an imagedata object")},a.prototype.show.maxImages=10,a.prototype.toImage=function(t){if(t||(t=new l(0,0,this.width,this.height)),"undefined"!=typeof document){var e=document.createElement("canvas");e.width=t.width,e.height=t.height}else e=function(t,e){let i=h();if(!i)throw new Error("couldn't find built-in canvas or the module 'canvas'");return i.createCanvas(t,e)}(t.width,t.height);return e.getContext("2d").putImageData(this.toDrawableData(),-t.x,-t.y),e},a.prototype.getPixel=function(t,e){var i=4*t+4*e*this.width;return[this.data[i],this.data[i+1],this.data[i+2],this.data[i+3]]},a.prototype.getPixelValueSum=function(t,e){var i=4*t+4*e*this.width;return this.data[i]+this.data[i+1]+this.data[i+2]},a.prototype.getPixelInt=function(t,e){var i=4*t+4*e*this.width;return(this.data[i+3]<<24)+(this.data[i+0]<<16)+(this.data[i+1]<<8)+(this.data[i+2]<<0)},a.prototype.getColorDifference=function(t,e,i,a,n,r=255){var o=4*t+4*e*this.width;return Math.abs(this.data[o]-i)+Math.abs(this.data[o+1]-a)+Math.abs(this.data[o+2]-n)*r/255},a.prototype.setPixel=function(t,e,...i){var a,n,r,o,[a,n,r,o]=Array.isArray(i[0])?i[0]:i,h=4*t+4*e*this.width;this.data[h]=a,this.data[h+1]=n,this.data[h+2]=r,this.data[h+3]=null==o?255:o},a.prototype.setPixelInt=function(t,e,i){var a=4*t+4*e*this.width;this.data[a]=i>>24&255,this.data[a+1]=i>>16&255,this.data[a+2]=i>>8&255,this.data[a+3]=i>>0&255},a.prototype.toFileBytes=function(t,e){return"undefined"!=typeof HTMLCanvasElement?new Promise((i=>this.toImage().toBlob((t=>{var e=new FileReader;e.readAsArrayBuffer(t),e.onload=()=>i(new Uint8Array(e.result))}),t,e))):function(t,e,i){return n(this,void 0,void 0,(function*(){var a,n;if(a=s()){let e=a.nativeImage,i=Buffer.from(t.data.slice(t.data.byteOffset,t.data.byteLength));return d(i),e.createFromBitmap(i,{width:t.width,height:t.height}).toPNG()}if(n=o()){let a=n(Buffer.from(t.data.buffer),{raw:{width:t.width,height:t.height,channels:4}});if("image/png"==e)a.png();else{if("image/webp"!=e)throw new Error("unknown image format: "+e);var r={quality:80};"number"==typeof i&&(r.quality=100*i),a.webp(r)}return yield a.toBuffer({resolveWithObject:!1}).buffer}throw new Error("coulnd't find build-in image compression methods or the module 'electron/common' or 'sharp'")}))}(this,t,e)},a.prototype.toPngBase64=function(){if("undefined"!=typeof HTMLCanvasElement){var t=this.toImage().toDataURL("image/png");return t.slice(t.indexOf(",")+1)}throw new Error("synchronous image conversion not supported in nodejs, try using ImageData.prototype.toFileBytes")},a.prototype.pixelCompare=function(t,e=0,i=0,a){return function(t,e,i,a,n=30){if(i<0||a<0)throw new RangeError;if(i+e.width>t.width||a+e.height>t.height)throw new RangeError;-1==n&&(n=1020);for(var r=0,o=8;o>=1;o/=2)for(var h=0;h<e.width;h+=o)for(var s=0;s<e.height;s+=o){var d=4*(i+h)+(a+s)*t.width*4,u=4*h+s*e.width*4,f=0;if(f=(f=(f=f+Math.abs(t.data[d+0]-e.data[u+0])|0)+Math.abs(t.data[d+1]-e.data[u+1])|0)+Math.abs(t.data[d+2]-e.data[u+2])|0,f*=e.data[u+3]/255,1==o&&(r+=f),f>n)return 1/0}return r/e.width/e.height}(this,t,e,i,a)},a.prototype.copyTo=function(t,e,i,a,n,r,o){const h=0|t.width,s=0|this.width,d=0|a,u=4*Math.floor(a/4),f=new Int32Array(this.data.buffer,this.data.byteOffset,this.data.byteLength/4),c=new Int32Array(t.data.buffer,t.data.byteOffset,t.data.byteLength/4);for(let t=0;t<n;t++){let a=0,n=a+r+(t+o)*h,l=a+e+(t+i)*s;for(;a<u;a+=4)c[n]=f[l],c[n+1]=f[l+1],c[n+2]=f[l+2],c[n+3]=f[l+3],n+=4,l+=4;for(;a<d;a++)c[n]=f[l],n+=1,l+=1}},"undefined"!=typeof HTMLImageElement&&(HTMLImageElement.prototype.toBuffer=function(t=0,e=0,i=this.width,a=this.height){var n=document.createElement("canvas");n.width=i,n.height=a;var r=n.getContext("2d");return r.drawImage(this,-t,-e),r.getImageData(0,0,i,a)},HTMLImageElement.prototype.toCanvas=function(t=0,e=0,i=this.width,a=this.height){var n=document.createElement("canvas");return n.width=i,n.height=a,n.getContext("2d").drawImage(this,-t,-e),n}),Error,Error,"undefined"!=typeof alt1&&alt1.skinName;var f=function(t,e,i,a){return new(i||(i=Promise))((function(n,r){function o(t){try{s(a.next(t))}catch(t){r(t)}}function h(t){try{s(a.throw(t))}catch(t){r(t)}}function s(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(o,h)}s((a=a.apply(t,e||[])).next())}))};function c(t){return f(this,void 0,void 0,(function*(){if("undefined"!=typeof Image){var e=new Image;return e.crossOrigin="crossorigin",yield new Promise(((i,a)=>{e.onload=function(){i(e.toBuffer())},e.onerror=a,e.src=t}))}if(t.startsWith("data:image/png;base64,"))return function(t){return f(this,void 0,void 0,(function*(){return"undefined"!=typeof Image?c("data:image/png;base64,"+t):(e=t,u(Buffer.from(e,"base64")));var e}))}(t.slice(22));throw new Error("loading remote images in nodejs has been disabled, load the raw bytes and use imageDataFromNodeBuffer instead")}))}class l{constructor(t,e,i,a){this.x=t,this.y=e,this.width=i,this.height=a}static fromArgs(...t){if("object"==typeof t[0])return new l(t[0].x,t[0].y,t[0].width,t[0].height);if("number"==typeof t[0]&&t.length>=4)return new l(t[0],t[1],t[2],t[3]);throw new Error("invalid rect args")}union(t){var e=Math.min(this.x,t.x),i=Math.min(this.y,t.y);return this.width=Math.max(this.x+this.width,t.x+t.width)-e,this.height=Math.max(this.y+this.height,t.y+t.height)-i,this.x=e,this.y=i,this}includePoint(t,e){this.union(new l(t,e,0,0))}inflate(t,e){this.x-=t,this.y-=e,this.width+=2*t,this.height+=2*e}intersect(t){this.x<t.x&&(this.width-=t.x-this.x,this.x=t.x),this.y<t.y&&(this.height-=t.y-this.y,this.y=t.y),this.width=Math.min(this.x+this.width,t.x+t.width)-this.x,this.height=Math.min(this.y+this.height,t.y+t.height)-this.y,(this.width<=0||this.height<=0)&&(this.width=0,this.height=0)}overlaps(t){return this.x<t.x+t.width&&this.x+this.width>t.x&&this.y<t.y+t.height&&this.y+this.height>t.y}contains(t){return this.x<=t.x&&this.x+this.width>=t.x+t.width&&this.y<=t.y&&this.y+this.height>=t.y+t.height}containsPoint(t,e){return this.x<=t&&this.x+this.width>t&&this.y<=e&&this.y+this.height>e}}document.querySelector("#title"),(async()=>{const t=await c("./yo.png"),e=await pixelCompare(t,0,0,900);console.log(e)})()})();