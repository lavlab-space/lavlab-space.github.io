(this.webpackJsonplavlab=this.webpackJsonplavlab||[]).push([[0],[,,,,,,,,,function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAQACAMAAADvODj6AAAA2FBMVEVULnF2g6mEqcCEqcCoxLqzy7m4zLnd2LhsS31dRH5ZPXpCJVcREREQEBAQEBCqwbCMipxpZKJqZqNpZaKDp7+DqL8RERERERFifI2Cpb6jtLSnubChsKy6zrllRHlsVYJcO3eAZYZbN3Q4IUoQEBAQEBDa1bXF0Liyy7h4ZouAg6lxbKSEgKh4cqY0My4REREiFynSyrLP07iyyriUobBULnKBeJJVL3Ggi5izy7hNVVAXGRrIzbrS07qDqcFujaAQEBARERE/T1ixyrmFgJUSEhIQEBBZcYDT+y0EAAAASHRSTlP/wP/0wf/o/8TeyNX/zs/Vyd7/xejC9MDA9MHoxN7I1c7P1cnexejC9MDA9MHoxMjVzs/Vyd7F6ML0wPTB6MTe1dXJ3sXowsC2Z2uKAAABQ0lEQVR42u3aP0sDQRQE8LvLk0RzjRqS+Ac0RLEQlAQNEhWx8Pt/GgUbY5d3hUo6f4Hbasphdnbm3d4WBbXKcg0jYVX8E2xw6AB0mswqVajAhCotg+8mrCyhepZQ/S1wVKysJPiyhOrkbu4AdPoFusp9NsxXlqMqKj3jkA3zQcIP6ujFOyUUBqO2DD5K+KlOK0S3DNluObWEGiedruWokbVvZ9S+NYU6sYSasI7ChJomrC2hxhSzOGKFOqa8HudsRk2t1rtgxwNs3y6T2YGVBN1WqI2qThPqyuoWq+p+icy6jcw/InNmlfA1G+Y3VgnfUpH589EjDL5gHTW3hHpgW29uHb17tfW0+1/rorwZmdgPjqVVwgtWqCeKWTy38+9mdO5Yodr3D1vZenBGvVrTygv76flmOWrJZtReQuH9w6N69L4B/tAapOvnj04AAAAASUVORK5CYII="},function(t,e,n){t.exports=n(17)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(1),i=n.n(o),r=n(8),a=n.n(r),s=(n(15),n(16),n(2)),c=n(3),l=n(5),d=n(4),g=n(0),f=n(9),v=n.n(f),u=function(){function t(e){Object(s.a)(this,t),this.scene=e}return Object(c.a)(t,[{key:"setup",value:function(){var t=new g.g(100,400,400,400),e={time:{type:"f",value:0},distortCenter:{type:"f",value:.1},roadWidth:{type:"f",value:.5},pallete:{type:"t",value:null},speed:{type:"f",value:.2},maxHeight:{type:"f",value:5},color:new g.b(1,1,1)};this.material=new g.j({uniforms:g.l.merge([g.i.basic.uniforms,e]),vertexShader:"\n            vec3 mod289(vec3 x)\n\t\t\t{\n\t\t\t\treturn x - floor(x * (1.0 / 289.0)) * 289.0;\n\t\t\t}\n\t\t\tvec4 mod289(vec4 x)\n\t\t\t{\n\t\t\t\treturn x - floor(x * (1.0 / 289.0)) * 289.0;\n\t\t\t}\n\t\t\tvec4 permute(vec4 x)\n\t\t\t{\n\t\t\t\treturn mod289(((x*34.0)+1.0)*x);\n\t\t\t}\n\t\t\t\t\n\t\t\tvec4 taylorInvSqrt(vec4 r)\n\t\t\t{\n\t\t\t\treturn 1.79284291400159 - 0.85373472095314 * r;\n\t\t\t}\n\t\t\t\t\n            vec3 fade(vec3 t) \n            {\n\t\t\t\treturn t*t*t*(t*(t*6.0-15.0)+10.0);\n\t\t\t}\n\t\t\t\t\n\t\t\tfloat cnoise(vec3 P)\n\t\t\t{\n\t\t\t\tvec3 Pi0 = floor(P); // Integer part for indexing\n\t\t\t\tvec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n\t\t\t\tPi0 = mod289(Pi0);\n\t\t\t\tPi1 = mod289(Pi1);\n\t\t\t\tvec3 Pf0 = fract(P); // Fractional part for interpolation\n\t\t\t\tvec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n\t\t\t\tvec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n\t\t\t\tvec4 iy = vec4(Pi0.yy, Pi1.yy);\n\t\t\t\tvec4 iz0 = Pi0.zzzz;\n\t\t\t\tvec4 iz1 = Pi1.zzzz;\n\t\t\t\t\n\t\t\t\tvec4 ixy = permute(permute(ix) + iy);\n\t\t\t\tvec4 ixy0 = permute(ixy + iz0);\n\t\t\t\tvec4 ixy1 = permute(ixy + iz1);\n\t\t\t\t\n\t\t\t\tvec4 gx0 = ixy0 * (1.0 / 7.0);\n\t\t\t\tvec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n\t\t\t\tgx0 = fract(gx0);\n\t\t\t\tvec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n\t\t\t\tvec4 sz0 = step(gz0, vec4(0.0));\n\t\t\t\tgx0 -= sz0 * (step(0.0, gx0) - 0.5);\n\t\t\t\tgy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\t\t\t\t\n\t\t\t\tvec4 gx1 = ixy1 * (1.0 / 7.0);\n\t\t\t\tvec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n\t\t\t\tgx1 = fract(gx1);\n\t\t\t\tvec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n\t\t\t\tvec4 sz1 = step(gz1, vec4(0.0));\n\t\t\t\tgx1 -= sz1 * (step(0.0, gx1) - 0.5);\n\t\t\t\tgy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\t\t\t\t\n\t\t\t\tvec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n\t\t\t\tvec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n\t\t\t\tvec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n\t\t\t\tvec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n\t\t\t\tvec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n\t\t\t\tvec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n\t\t\t\tvec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n\t\t\t\tvec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\t\t\t\t\n\t\t\t\tvec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n\t\t\t\tg000 *= norm0.x;\n\t\t\t\tg010 *= norm0.y;\n\t\t\t\tg100 *= norm0.z;\n\t\t\t\tg110 *= norm0.w;\n\t\t\t\tvec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n\t\t\t\tg001 *= norm1.x;\n\t\t\t\tg011 *= norm1.y;\n\t\t\t\tg101 *= norm1.z;\n\t\t\t\tg111 *= norm1.w;\n\t\t\t\t\n\t\t\t\tfloat n000 = dot(g000, Pf0);\n\t\t\t\tfloat n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n\t\t\t\tfloat n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n\t\t\t\tfloat n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n\t\t\t\tfloat n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n\t\t\t\tfloat n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n\t\t\t\tfloat n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n\t\t\t\tfloat n111 = dot(g111, Pf1);\n\t\t\t\t\n\t\t\t\tvec3 fade_xyz = fade(Pf0);\n\t\t\t\tvec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n\t\t\t\tvec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n\t\t\t\tfloat n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n\t\t\t\treturn 2.2 * n_xyz;\n\t\t\t}\n\t\t\t\t\n\t\t\t#define PI 3.1415926535897932384626433832795\n\t\t\t\t\t\n\t\t\tuniform float time;\n\t\t\tuniform float maxHeight;\n\t\t\tuniform float speed;\n\t\t\tuniform float distortCenter;\n            uniform float roadWidth;\n            \n\t\t\tvarying float vDisplace;\n\t\t\tvarying float fogDepth;\n\n            void main()\n            {\n\t\t\t\tfloat t = time * speed;\n\t\t\t\tfloat wRoad = distortCenter;\n\t\t\t\tfloat wRoad2 = wRoad * 0.5;\n\t\t\t\t\t\t\n\t\t\t\tfloat angleCenter = uv.y * PI*4.0;\n\t\t\t\tangleCenter += t * 0.9;\n\t\t\t\t\t\t\n\t\t\t\tfloat centerOff = (\n\t\t\t\t\tsin(angleCenter) + \n\t\t\t\t\tsin(angleCenter*0.5) \n\t\t\t\t\t) * wRoad;\n\t\t\t\t\t\t\n\t\t\t\tvec3 noiseIn = vec3(uv, 1.0)*10.0;\n\t\t\t\tfloat noise = cnoise(vec3(noiseIn.x, noiseIn.y + t, noiseIn.z));\n\t\t\t\tnoise += 1.0;\n\t\t\t\tfloat h = noise;\n\t\t\t\tfloat angle = (uv.x - centerOff) * PI;\n\t\t\t\tfloat f = abs(cos(angle));\n\t\t\t\th *= pow(f, 1.5 + roadWidth);\n\t\t\t\t\t\t\n\t\t\t\tvDisplace = h;\n\t\t\t\th*=maxHeight;\n\t\t\t\tvec3 transformed = vec3( position.x, position.y, position.z + h );\n\n\t\t\t\tvec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n\t\t\t\tgl_Position = projectionMatrix * mvPosition;\t\n\t\t\t\tfogDepth = -mvPosition.z;\n\t\t\t}",fragmentShader:"\n            uniform float time;\n\t\t    uniform vec3 color;\n\t\t\tuniform sampler2D pallete;\n\t\t\tvarying float vDisplace;\n\n\t\t\tuniform vec3 fogColor;\n\t\t\tuniform float fogNear;\n\t\t\tuniform float fogFar;\n\t\t\tvarying float fogDepth;\n\n            void main()\n            {\n\t\t\t    vec2 stripPos = vec2( 0.0, vDisplace );\n\t\t\t\tvec4 stripColor = texture2D(pallete, stripPos);\n\t\t\t\tstripColor *= pow(1.0-vDisplace, 0.5);\n\n\t\t\t\tgl_FragColor = stripColor;\n\n\t\t\t\t#ifdef USE_FOG\n\t\t\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t\t\t\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n\t\t\t\t#endif\n\t\t\t}",wireframe:!1,fog:!0});var n=new g.e(t,this.material);n.position.z=-180,n.rotation.x=-Math.PI/2,this.scene.add(n)}},{key:"setupTextures",value:function(){var t=this;(new g.k).load(v.a,(function(e){t.material.uniforms.pallete.value=e,t.material.needsUpdate=!0}))}},{key:"update",value:function(t){this.material.uniforms.time.value+=t}}]),t}(),h=function(){function t(){Object(s.a)(this,t),this.scene=new g.h,this.renderer=new g.n({antialias:!0}),this.clock=new g.a}return Object(c.a)(t,[{key:"setup",value:function(){this.colourArr="https://coolors.co/2d3047-93b7be-8d7d16-a799b7-048a81".split("/").pop().split("-").map((function(t){return new g.b("#"+t)})),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),document.body.appendChild(this.renderer.domElement),this.disposed=!1,this.scene.background=this.colourArr[3],this.scene.fog=new g.c(this.colourArr[1],5,200),this.delta=this.clock.getDelta(),this.setupCamera(),this.setupTerrain()}},{key:"setupCamera",value:function(){var t=window.innerWidth/window.innerHeight;this.camera=new g.f(50,t,1,1e3),this.camera.position.set(0,3,20),this.camera.lookAt(new g.m(0,0,0))}},{key:"setupLight",value:function(){var t=new g.d(this.colourArr[1],this.colourArr[2],1);this.scene.add(t)}},{key:"setupTerrain",value:function(){this.terrain=new u(this.scene),this.terrain.setup(),this.terrain.setupTextures()}},{key:"update",value:function(){this.disposed||((isNaN(this.delta)||this.delta>1e3||0===this.delta)&&(this.delta=1e3/60),this.terrain.update(.001*this.delta),this.renderer.render(this.scene,this.camera))}},{key:"onWindowResize",value:function(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}},{key:"dispose",value:function(){this.disposed=!0,this.scene.children.forEach((function(t){t.isMesh&&(t.material.dispose(),t.geometry.dispose())})),this.scene.dispose(),this.renderer.dispose(),document.body.removeChild(this.renderer.domElement)}}]),t}();var m=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).onWindowResize=function(){t.sceneController&&(t.sceneController.onWindowResize(),t.sceneController.update())},t.update=function(){requestAnimationFrame(t.update),t.sceneController&&t.sceneController.update()},t.sceneController=new h,t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.addEventListeners(),this.sceneController.setup(),this.update()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onWindowResize),this.sceneController&&this.sceneController.dispose()}},{key:"addEventListeners",value:function(){window.addEventListener("resize",this.onWindowResize,!1)}},{key:"render",value:function(){var t=this;return i.a.createElement("div",null,i.a.createElement("div",{ref:function(e){return t.threeRootElement=e}}))}}]),n}(i.a.Component),p=function(){return i.a.createElement("div",null,i.a.createElement(m,null),i.a.createElement("h3",null,"We're moving forward",i.a.createElement("br",null),"Stay tuned."))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.12e54c59.chunk.js.map