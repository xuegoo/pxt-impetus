"use strict";var rt,serial,pxsim,__extends=this&&this.__extends||function(){var r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}();!function(e){e.getUserData=function(e,t){return e.userData[t]},e.setUserData=function(e,t,n){e.userData[t]=n};var t=function(){function e(){this._isDisposed=!1}return e.prototype.dispose=function(){this._isDisposed||(this._onDispose(),this._isDisposed=!0)},e}(),n=function(n){function e(e){var t=n.call(this)||this;return t._reference=e,t}return __extends(e,n),Object.defineProperty(e.prototype,"reference",{get:function(){return this._reference},enumerable:!0,configurable:!0}),e}(e.DisposableObject=t);e.ProxyObject=n;var r=function(){function t(e){this._objectcache=new Map,this._creator=e,t._factories.push(this)}return t.forgetAllInstances=function(){t._factories.forEach(function(e){return e.forgetAllInstances()})},t.prototype.instantiate=function(e){return this._creator(e)},t.prototype.instantiateWithCache=function(e){var t=objectHash(e||{},{algorithm:"md5",encoding:"hex",respectType:!1}),n=this._objectcache.get(t);return n||this._objectcache.set(t,n=this.instantiate(e)),n},t.prototype.forgetAllInstances=function(){this._objectcache.clear()},t._factories=new Array,t}();e.ObjectFactory=r}(rt||(rt={})),function(t){function e(e){return function(r){function e(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=r.apply(this,e)||this;return n._rigidbody=null,n._isDisposed=!1,void 0!==n.castShadow&&(n.castShadow=!0),void 0!==n.receiveShadow&&(n.receiveShadow=!0),n}return __extends(e,r),Object.defineProperty(e.prototype,"position_",{get:function(){return this.position},set:function(e){this.position.copy(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rotation_",{get:function(){var e=this.rotation.toVector3();return new t.VectorConstructor(THREE.Math.radToDeg(e.x),THREE.Math.radToDeg(e.y),THREE.Math.radToDeg(e.z))},set:function(e){this.rotation.setFromVector3(new t.VectorConstructor(THREE.Math.degToRad(e.x),THREE.Math.degToRad(e.y),THREE.Math.degToRad(e.z)))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"quaternion_",{get:function(){return this.quaternion},set:function(e){this.quaternion.copy(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scale_",{get:function(){return this.scale},set:function(e){this.scale.copy(e)},enumerable:!0,configurable:!0}),e.prototype.setRotationFromAxisAngle=function(e,t){e&&this.setRotationFromAxisAngle(e,THREE.Math.degToRad(t))},e.prototype.setPhysicsEnabled=function(e){this._rigidbody&&(this._rigidbody.isKinematic=!e)},e.prototype.lookAtPosition=function(e){e&&this.lookAt(e)},e.prototype.animate=function(t){this._rigidbody&&this._rigidbody.syncMotionStateToObject3d(),this.children.forEach(function(e){return e.animate(t)})},e.prototype.onAdded=function(t){this._rigidbody&&this._rigidbody.addRigidBody(t.physicsWorld),this.children.forEach(function(e){return e.onAdded(t)})},e.prototype.onRemoved=function(t){this.children.forEach(function(e){return e.onRemoved(t)}),this._rigidbody&&this._rigidbody.removeRigidBody(t.physicsWorld)},e.prototype.copy=function(e,t){throw r.prototype.copy.call(this,e,t),Error()},e.prototype.dispose=function(){this._isDisposed||(this._onDispose(),this._isDisposed=!0)},e.prototype._onDispose=function(){this.children.forEach(function(e){return e.dispose()}),t.Helper.safeObjectDispose(this._rigidbody)},e}(e)}var n=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t}((t.Object3dMixin=e)(THREE.Object3D));t.Object3d=n}(pxsim||(pxsim={})),(pxsim||(pxsim={})).OrbitControlsConstructor=THREE.OrbitControls,function(o){function e(e){return function(r){function e(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=r.apply(this,e)||this;return n._controls=new o.OrbitControlsConstructor(n),n._controls.target.set(0,0,0),n._controls.update(),n}return __extends(e,r),e.prototype.setSize=function(e,t){},e}(e)}var t=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t}((o.CameraMixin=e)(o.Object3dMixin(THREE.Camera)));o.Camera=t;var n=function(o){function e(e,t,n){var r=o.call(this,e||60,1,t||.2,n||2e3)||this;return r._oldaspect=0,r}return __extends(e,o),e.prototype.setSize=function(e,t){o.prototype.setSize.call(this,e,t);var n=this.aspect=e/t;this._oldaspect!==n&&(this._oldaspect=n,this.updateProjectionMatrix())},e}(e(o.Object3dMixin(THREE.PerspectiveCamera)));o.PerspectiveCamera=n}(pxsim||(pxsim={})),function(e){(e.camera||(e.camera={})).perspectiveCamera=function(){return new e.PerspectiveCamera}}(pxsim||(pxsim={})),(pxsim||(pxsim={})).ColorConstructor=THREE.Color,function(r){var e;(e=r.color||(r.color={})).colorToString=function(e){return"("+255*e.r+", "+255*e.g+", "+255*e.b+")"},e.standardColor=function(e){return new r.ColorConstructor(e)},e.randomColor=function(){return new r.ColorConstructor(Math.random()*(1<<24))},e.colorFromRgb=function(e,t,n){return new r.ColorConstructor(e/255,t/255,n/255)},e.colorFromHsv=function(e,t,n){return(new r.ColorConstructor).setHSL(e/255,t/255,n/255)},e.colorWheel=function(e){return new r.ColorConstructor(e)},e.colorPicker=function(e){return new r.ColorConstructor(e)}}(pxsim||(pxsim={})),function(e){function n(e){var t;t=e+"\r\n",console.log(t),pxsim.runtime.board.writeSerial(t)}e.writeLine=n,e.writeValue=function(e,t){n((e?e+":":"")+t)}}(serial||(serial={})),function(e){var t;(t=e.console||(e.console={})).log=function(e){serial.writeLine(e)},t.logValue=function(e,t){serial.writeValue(e,t)}}(pxsim||(pxsim={})),function(r){var e;(e=r.input||(r.input={})).onMouseEnter=function(e){r.singletonWorldBoard().events.listen(2,1,e)},e.onMouseMove=function(e){r.singletonWorldBoard().events.listen(2,2,e)},e.onMouseLeave=function(e){r.singletonWorldBoard().events.listen(2,3,e)},e.onMouseClick=function(e,t){var n;switch(e){case 1:n=3;break;case 2:n=4;break;case 3:n=5;break;default:return}r.singletonWorldBoard().events.listen(n,4,t)}}(pxsim||(pxsim={})),function(e){function t(e){return(t=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype._configureShadow=function(){this.shadow.camera instanceof THREE.OrthographicCamera&&(this.shadow.camera.left=-n.distFrustum,this.shadow.camera.right=n.distFrustum,this.shadow.camera.top=n.distFrustum,this.shadow.camera.bottom=-n.distFrustum),this.shadow.bias=1e-4,this.shadow.mapSize.width=2048,this.shadow.mapSize.height=2048},t}(e)).distFrustum=100,t;var t}var n=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t}((e.LightMixin=t)(e.Object3dMixin(THREE.Light)));e.Light=n;var r=function(n){function e(e,t){return n.call(this,e||4210752,t||1)||this}return __extends(e,n),e}(t(e.Object3dMixin(THREE.AmbientLight)));e.AmbientLight=r;var o=function(r){function e(e,t){var n=r.call(this,e||16777215,t||1)||this;return n._configureShadow(),n}return __extends(e,r),e}(t(e.Object3dMixin(THREE.DirectionalLight)));e.DirectionalLight=o;var i=function(r){function e(e,t,n){return r.call(this,e||3310847,t||16763007,n||.6)||this}return __extends(e,r),e}(t(e.Object3dMixin(THREE.HemisphereLight)));e.HemisphereLight=i;var s=function(i){function e(e,t,n,r){var o=i.call(this,e||16777215,t||1,n||0,r||2)||this;return o._configureShadow(),o}return __extends(e,i),e}(t(e.Object3dMixin(THREE.PointLight)));e.PointLight=s;var a=function(a){function e(e,t,n,r,o,i){var s=a.call(this,e||16777215,t||1,n||0,r||Math.PI/3,o||0,i||2)||this;return s._configureShadow(),s}return __extends(e,a),e}(t(e.Object3dMixin(THREE.SpotLight)));e.SpotLight=a}(pxsim||(pxsim={})),function(r){var e;(e=r.light||(r.light={})).ambientLight=function(e,t){return new r.DirectionalLight(e,t)},e.directionalLight=function(e,t){return new r.DirectionalLight(e,t)},e.hemisphereLight=function(e,t,n){return new r.HemisphereLight(e,t,n)}}(pxsim||(pxsim={})),function(t){var e;(e=t.loops||(t.loops={})).forever=function(e){t.thread.forever(e)},e.pauseAsync=function(e){return Promise.delay(e)}}(pxsim||(pxsim={})),function(e){function t(e){return function(r){function e(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=r.apply(this,e)||this;return n._density=1,n}return __extends(e,r),Object.defineProperty(e.prototype,"density",{get:function(){return this._density},set:function(e){this._density=e},enumerable:!0,configurable:!0}),e.prototype.copy=function(e){return r.prototype.copy.call(this,e),this.density=e.density,this},e}(e)}var n=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t}((e.MaterialMixin=t)(THREE.MeshStandardMaterial)),r=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.instantiate=function(e){return t._factory.instantiate({color:(e?e.getHex():void 0)||16777215,emissive:0,metalness:0,roughness:.5})},t._factory=new rt.ObjectFactory(function(e){return new t(e)}),t}(e.Material=n);e.SolidMaterial=r}(pxsim||(pxsim={})),function(t){(t.material||(t.material={})).materialOfColor=function(e){return t.SolidMaterial.instantiate(e)}}(pxsim||(pxsim={})),function(e){e.VectorConstructor=THREE.Vector3,e.QuaternionConstructor=THREE.Quaternion,e.EulerConstructor=THREE.Euler,e.SphericalConstructor=THREE.Spherical}(pxsim||(pxsim={})),function(e){var t;(t=e.math||(e.math={})).degreesInRadians=function(e){return THREE.Math.degToRad(e)},t.radiansInDegrees=function(e){return THREE.Math.radToDeg(e)}}(pxsim||(pxsim={})),function(i){!function(e){function t(e,t,n){return new i.VectorConstructor(e,t,n)}function o(){return t(0,0,0)}function n(e,t,n,r){return new i.QuaternionConstructor(e,t,n,r)}e.vectorToString=function(e){return"("+e.x+", "+e.y+", "+e.z+")"},e.quaternionToString=function(e){return"("+e.x+", "+e.y+", "+e.z+", "+e.w+")"},e.vector=t,e.zeroVector=o,e.unitVector=function(){return t(1,1,1)},e.vectorOp=function(e,t,n){var r=o();switch(t){case 1:return r.addVectors(e,n);case 2:return r.subVectors(e,n);case 3:return r.multiplyVectors(e,n)}throw new Error},e.vectorScalarOp=function(e,t,n){var r=e;switch(t){case 1:return r.addScalar(n);case 2:return r.subScalar(n);case 3:return r.multiplyScalar(n);case 4:return r.divideScalar(n)}},e.quaternion=n,e.zeroQuaternion=function(){return n(0,0,0,0)}}(i.math3d||(i.math3d={}))}(pxsim||(pxsim={})),function(o){var e=function(r){function e(e,t){var n=r.call(this,e,t)||this;return n._rigidbody=new o.RigidBody(n,e,e.volume*t.density),n}return __extends(e,r),e}(o.Object3dMixin(THREE.Mesh));o.Mesh3d=e}(pxsim||(pxsim={})),function(n){var e;(e=n.mesh||(n.mesh={})).fromShapeAndMaterial=function(e,t){return e&&t?new n.Mesh3d(e,t):null},e.materialOf=function(e){if(!(e&&e instanceof n.Mesh3d))return null;var t=e.material;return Array.isArray(t)?0<t.length?t[0]:null:t}}(pxsim||(pxsim={})),(pxsim||(pxsim={})).RaycasterConstructor=THREE.Raycaster,function(t){var e=function(r){function e(){var e=r.call(this)||this;return e._physicsworld=new t.PhysicsWorld,e._camera=null,e._ambientlight=new t.AmbientLight,e._raycaster=new t.RaycasterConstructor,e.background=new t.ColorConstructor(8900331),e._ambientlight.color.setScalar(.5),e.addAt(e._ambientlight,t.math3d.zeroVector()),e}return __extends(e,r),Object.defineProperty(e.prototype,"physicsWorld",{get:function(){return this._physicsworld},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"camera",{get:function(){return this._camera},set:function(e){this._camera=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"backgroundColor",{get:function(){return this.background},set:function(e){this.background=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"ambientColor",{get:function(){return this._ambientlight.color},set:function(e){this._ambientlight.color=e},enumerable:!0,configurable:!0}),e.prototype.addAt=function(e,t){e&&(e.position.copy(t),this.add(e))},e.prototype.add=function(){for(var t=this,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];e&&(r.prototype.add.apply(this,e),e.forEach(function(e){return e.onAdded(t)}))},e.prototype.remove=function(e){e&&(e.onRemoved(this),r.prototype.remove.call(this,e))},e.prototype.animate=function(e){r.prototype.animate.call(this,e),this._physicsworld.animate(e),t.singletonWorldBoard().events.queue(1,0,e)},e.prototype.intersectedObjects=function(e,t){if(!this._camera)return null;this._raycaster.setFromCamera({x:e,y:t},this._camera);var n=this._raycaster.intersectObjects(this.children);return n?n.map(function(e){return e.object}):null},e.prototype.setPhysicsEnabled=function(e){},e.prototype.copy=function(e,t){throw r.prototype.copy.call(this,e,t),Error()},e.prototype._onDispose=function(){r.prototype._onDispose.call(this),this._physicsworld.dispose()},e}(t.Object3dMixin(THREE.Scene));t.Scene3d=e}(pxsim||(pxsim={})),function(o){var e;(e=o.scene||(o.scene={})).randomPositionInSphere=function(e){var t=new o.SphericalConstructor(Math.random()*e*.5,Math.random()*Math.PI*2,Math.random()*Math.PI*2);return(new o.VectorConstructor).setFromSpherical(t)},e.randomPositionInCube=function(e){return new o.VectorConstructor(Math.random()*e,Math.random()*e,Math.random()*e).addScalar(-.5*e)},e.intersectedObjectAt=function(e,t){var n=o.world.scene(),r=n?n.intersectedObjects(e,t):null;return r&&0<r.length?r[0]:null},e.onAnimate=function(e){o.singletonWorldBoard().events.listen(1,0,e)}}(pxsim||(pxsim={})),function(r){function e(e){return(t=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._volume=0,e._ctorCollisionShape=null,e}return __extends(e,t),Object.defineProperty(e.prototype,"volume",{get:function(){return this._volume},enumerable:!0,configurable:!0}),e.prototype.createCollisionShape=function(){return this._ctorCollisionShape?this._ctorCollisionShape():null},e.prototype.copy=function(e){throw t.prototype.copy.call(this,e),new Error},e.prototype._setShapeVolume=function(e){this._volume=e},e.prototype._setCtorCollisionShape=function(e){this._ctorCollisionShape=e},e.prototype._getBounds=function(e){return this.computeBoundingBox(),this.boundingBox.getSize(e)},e.prototype._createCollisionShapeFromHalfExtents=function(e){var t=r.Helper.btVector3FromThree(this._getBounds(new THREE.Vector3).divideScalar(2)),n=e(t);return n.setMargin(i._collisionMargin),r.Helper.safeAmmoObjectDestroy(t),n},e}(e))._radialSegments=32,t._collisionMargin=.05,t;var t}var i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t}((r.ShapeMixin=e)(THREE.BufferGeometry));r.Shape3d=i;var t=function(r){function e(e,t){var n=this;return e=e||100,t=t||100,(n=r.call(this,e,t)||this).rotateX(-Math.PI/2),n._setCtorCollisionShape(function(){return n._createCollisionShapeFromHalfExtents(function(e){return new Ammo.btBoxShape(e)})}),n}return __extends(e,r),e}(e(THREE.PlaneBufferGeometry));r.PlaneShape3d=t;var n=function(i){function e(e,t,n,r){var o=this;return e=e||1,t=t||1,n=n||1,(o=i.call(this,e,t,n)||this)._setShapeVolume(e*t*n),o._setCtorCollisionShape(function(){return o._createCollisionShapeFromHalfExtents(function(e){return new Ammo.btBoxShape(e)})}),o}return __extends(e,i),e}(e(THREE.BoxBufferGeometry));r.BoxShape3d=n;var o=function(o){function e(e,t,n){var r=this;return e=e||.5,t=t||1,(r=o.call(this,e,e,t,i._radialSegments,1,n||!1)||this)._setShapeVolume(Math.PI*Math.pow(e,2)*t),r._setCtorCollisionShape(function(){return r._createCollisionShapeFromHalfExtents(function(e){return new Ammo.btCylinderShape(e)})}),r}return __extends(e,o),e}(e(THREE.CylinderBufferGeometry));r.CylinderShape3d=o;var s=function(n){function e(e){var t=this;return e=e||.5,(t=n.call(this,e,i._radialSegments,i._radialSegments)||this)._setShapeVolume(4/3*Math.PI*Math.pow(e,3)),t._setCtorCollisionShape(function(){return new Ammo.btSphereShape(e)}),t}return __extends(e,n),e}(e(THREE.SphereBufferGeometry));r.SphereShape3d=s;var a=function(r){function e(e,t){var n=this;return e=e||.5,t=t||1,(n=r.call(this,e,t,i._radialSegments)||this)._setShapeVolume(Math.PI*Math.pow(e,2)*t/3),n._setCtorCollisionShape(function(){return new Ammo.btConeShape(e,t)}),n}return __extends(e,r),e}(e(THREE.ConeBufferGeometry));r.ConeShape3d=a}(pxsim||(pxsim={})),function(r){var e;(e=r.shape||(r.shape={})).planeShape=function(e,t){return new r.PlaneShape3d(e,t)},e.boxShape=function(e,t,n){return new r.BoxShape3d(e,t,n)},e.cylinderShape=function(e,t){return new r.CylinderShape3d(e,t)},e.sphereShape=function(e){return new r.SphereShape3d(e)},e.coneShape=function(e,t){return new r.ConeShape3d(e,t)}}(pxsim||(pxsim={})),function(a){var e=function(t){function e(e){var s=t.call(this)||this;return s._scene3d=new a.Scene3d,s._onElementEvent=function(e,t,n,r){a.singletonWorldBoard().events.queue(e,t,r)},s._onElementFocused=function(e,t){e.classList.toggle("blur",!t),e.classList.toggle("focus",t)},s._onElementMouseEvent=function(e,t,n){var r=s._renderer.canvas.getBoundingClientRect(),o=(n.clientX-r.left)/r.width*2-1,i=-(n.clientY-r.top)/r.height*2+1;s._onElementEvent(e,t,n,new a.EventCoordValue(o,i))},s._onElementKeyEvent=function(e,t,n){s._onElementEvent(e,t,n,new a.EventKeyValue("F1"))},s._onElementMouseEnter=function(e){return s._onElementEvent(2,1,e)},s._onElementMouseMove=function(e){return s._onElementMouseEvent(2,2,e)},s._onElementMouseDown=function(e){var t=a.sidFromMouseButtonEvent(e);t&&3===t&&s._renderer.container.focus()},s._onElementMouseLeave=function(e){return s._onElementEvent(2,3,e)},s._onElementMouseClick=function(e){var t=a.sidFromMouseButtonEvent(e);t&&s._onElementMouseEvent(t,4,e)},s._onElementKeyDown=function(e){return s._onElementKeyEvent(6,8,e)},s._onElementKeyPress=function(e){return s._onElementKeyEvent(6,7,e)},s._onElementKeyUp=function(e){return s._onElementKeyEvent(6,6,e)},s._onElementBlur=function(e){return s._onElementFocused(e.target,!1)},s._onElementFocus=function(e){return s._onElementFocused(e.target,!0)},s._renderer=new a.Renderer(e),s._renderer.scene=s._scene3d,s._renderer.container.addEventListener("blur",s._onElementBlur,!0),s._renderer.container.addEventListener("focus",s._onElementFocus,!0),s._renderer.container.addEventListener("mouseenter",s._onElementMouseEnter),s._renderer.container.addEventListener("mousemove",s._onElementMouseMove),s._renderer.container.addEventListener("mousedown",s._onElementMouseDown),s._renderer.container.addEventListener("mouseleave",s._onElementMouseLeave),s._renderer.container.addEventListener("click",s._onElementMouseClick),s._renderer.container.addEventListener("keydown",s._onElementKeyDown),s._renderer.container.addEventListener("keypress",s._onElementKeyPress),s._renderer.container.addEventListener("keyup",s._onElementKeyUp),s._onElementFocused(s._renderer.container,!1),s}return __extends(e,t),Object.defineProperty(e.prototype,"scene",{get:function(){return this._scene3d},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"renderer",{get:function(){return this._renderer},enumerable:!0,configurable:!0}),e.prototype._onDispose=function(){this._renderer.container.removeEventListener("click",this._onElementMouseClick),this._renderer.container.removeEventListener("mouseleave",this._onElementMouseLeave),this._renderer.container.removeEventListener("mousemove",this._onElementMouseMove),this._renderer.container.removeEventListener("mouseenter",this._onElementMouseEnter),this._renderer.container.removeEventListener("keyup",this._onElementKeyUp),this._renderer.container.removeEventListener("keypress",this._onElementKeyPress),this._renderer.container.removeEventListener("keydown",this._onElementKeyDown),this._renderer.container.removeEventListener("focus",this._onElementFocus,!0),this._renderer.container.removeEventListener("blur",this._onElementBlur,!0),a.Helper.safeObjectDispose(this._renderer),a.Helper.safeObjectDispose(this._scene3d)},e}(rt.DisposableObject);a.World3d=e}(pxsim||(pxsim={})),function(t){var e;(e=t.world||(t.world={})).world=function(){return t.singletonWorldBoard().world},e.scene=function(){var e=t.world.world();return e?e.scene:null}}(pxsim||(pxsim={})),function(n){var e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._world3d=null,e._events=null,e}return __extends(e,t),Object.defineProperty(e,"singleton",{get:function(){return this._board},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"world",{get:function(){return this._world3d},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"events",{get:function(){return this._events},enumerable:!0,configurable:!0}),e.prototype.initAsync=function(e){return this.init(),Promise.resolve()},e.prototype.init=function(){this.postkill(),this._world3d=new n.World3d,this._events=new n.WorldEventBus(n.runtime)},e.prototype.kill=function(){this._world3d&&(this._world3d.renderer.pause=!0)},e.prototype.postkill=function(){rt.ObjectFactory.forgetAllInstances(),n.Helper.safeObjectDispose(this._world3d),this._world3d=null},e.prototype.receiveMessage=function(e){},e.prototype.updateView=function(){},e._board=new e,e}(n.BaseBoard);function t(){return e.singleton}n.WorldBoard=e,n.initCurrentRuntime=function(e){return t().postkill(),n.runtime.board=t()},n.singletonWorldBoard=t}(pxsim||(pxsim={})),function(e){e.sidFromMouseButtonEvent=function(e){var t;return 0===e.button?t=3:1===e.button?t=4:2===e.button&&(t=5),t};var t=function(){},n=function(r){function e(e,t){var n=r.call(this)||this;return n.x=e,n.y=t,n}return __extends(e,r),e.prototype.toActionArgs=function(){return[this.x,this.y]},e}(e.EventValue=t);e.EventCoordValue=n;var r=function(n){function e(e){var t=n.call(this)||this;return t.key=e,t}return __extends(e,n),e.prototype.toActionArgs=function(){return[this.key]},e}(t);e.EventKeyValue=r;var o=function(t){function e(e){return t.call(this,e,function(e){return e?"object"==typeof e?e.toActionArgs():[e]:[]})||this}return __extends(e,t),e}(e.EventBusGeneric);e.WorldEventBus=o}(pxsim||(pxsim={})),function(e){var t=function(){function e(){}return e.btVector3FromThree=function(e){return new Ammo.btVector3(e.x,e.y,e.z)},e.btQuaternionFromThree=function(e){return new Ammo.btQuaternion(e.x,e.y,e.z,e.w)},e.applyFn=function(e,t){return Array.isArray(e)?e.map(t):t(e)},e.safeObjectDispose=function(e){e&&e.dispose()},e.safeAmmoObjectDestroy=function(e){e&&Ammo.destroy(e)},e}();e.Helper=t}(pxsim||(pxsim={})),function(r){var e=function(t){function n(){var e=t.call(this)||this;return e._btconfig=new Ammo.btDefaultCollisionConfiguration,e._btdispatcher=new Ammo.btCollisionDispatcher(e._btconfig),e._btbroadphase=new Ammo.btDbvtBroadphase,e._btconstraintsolver=new Ammo.btSequentialImpulseConstraintSolver,e._btworld=new Ammo.btDiscreteDynamicsWorld(e._btdispatcher,e._btbroadphase,e._btconstraintsolver,e._btconfig),e._btworld.getSolverInfo().m_numIterations=n._numIterationsSolver,e}return __extends(n,t),Object.defineProperty(n.prototype,"btWorld",{get:function(){return this._btworld},enumerable:!0,configurable:!0}),n.prototype.getGravity=function(){return this._btworld.getGravity().y()},n.prototype.setGravity=function(e){var t=new Ammo.btVector3(0,e,0);this._btworld.setGravity(t),r.Helper.safeAmmoObjectDestroy(t)},n.prototype.animate=function(e){this._btworld.stepSimulation(e,n._maxStepSimulation,n._fixedTimeStep)},n.prototype._onDispose=function(){r.Helper.safeAmmoObjectDestroy(this._btworld),r.Helper.safeAmmoObjectDestroy(this._btconstraintsolver),r.Helper.safeAmmoObjectDestroy(this._btbroadphase),r.Helper.safeAmmoObjectDestroy(this._btdispatcher),r.Helper.safeAmmoObjectDestroy(this._btconfig)},n._numIterationsSolver=4,n._maxStepSimulation=3,n._fixedTimeStep=1/60,n}(rt.DisposableObject);r.PhysicsWorld=e}(pxsim||(pxsim={})),(pxsim||(pxsim={})).ClockConstructor=THREE.Clock,function(o){var e=function(n){function r(e){void 0===e&&(e="maincanvas");var t=n.call(this,r._instantiateReference(e))||this;if(t._scene3d=null,t._stats=new Stats,t._clock=new o.ClockConstructor,t._paused=!1,t._callbackRequestId=0,t._onWindowResize=function(){t._container&&(t.reference.setPixelRatio(window.devicePixelRatio),t.reference.setSize(t._container.clientWidth,t._container.clientHeight,!1))},t._id=e,t._container=document.getElementById(e.toString()),!t._container)throw new Error("Canvas container element "+e+" not found.");return Detector.webgl?(t._container.innerHTML="",t._container.appendChild(t.reference.domElement),t._container.appendChild(t._stats.dom),window.addEventListener("resize",t._onWindowResize),t._onWindowResize(),t.runRenderLoop()):Detector.addGetWebGLMessage({parent:t._container}),t}return __extends(r,n),r._instantiateReference=function(e){var t=r._renderers.get(e);return t||(r._renderers.set(e,t=new THREE.WebGLRenderer({antialias:!0})),t.shadowMap.enabled=!0,t.shadowMap.type=THREE.PCFSoftShadowMap,t.setClearColor(13882323)),t},Object.defineProperty(r.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"container",{get:function(){return this._container},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"canvas",{get:function(){return this.reference.domElement},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scene",{get:function(){return this._scene3d},set:function(e){this._scene3d=e},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isPaused",{get:function(){return this._paused},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"pause",{set:function(e){this._paused=e},enumerable:!0,configurable:!0}),r.prototype.runRenderLoop=function(){var i=this;this._callbackRequestId=requestAnimationFrame(function(e){if(!i._paused){i._stats.begin();var t=!1,n=i._scene3d;if(n){n.animate(i._clock.getDelta());var r=n.camera;if(r){var o=i.reference.getSize();r.setSize(o.width,o.height),i.reference.render(n,r),t=!0}}t||i.reference.clear(),i._stats.end()}i.runRenderLoop()})},r.prototype.stopRenderLoop=function(){0!==this._callbackRequestId&&(cancelAnimationFrame(this._callbackRequestId),this._callbackRequestId=0)},r.prototype._onDispose=function(){this.stopRenderLoop(),this._container&&(window.removeEventListener("resize",this._onWindowResize),this._container.innerHTML="")},r._renderers=new Map,r}(rt.ProxyObject);o.Renderer=e}(pxsim||(pxsim={})),function(d){function t(e,t){var n,r,o=new Ammo.btTransform;return o.setOrigin(n=d.Helper.btVector3FromThree(t.position)),o.setRotation(r=d.Helper.btQuaternionFromThree(t.quaternion)),e.setWorldTransform(o),d.Helper.safeAmmoObjectDestroy(r),d.Helper.safeAmmoObjectDestroy(n),d.Helper.safeAmmoObjectDestroy(o),e}function e(e,t){var n=new Ammo.btTransform;e.getWorldTransform(n);var r=n.getOrigin(),o=n.getRotation();t.position.set(r.x(),r.y(),r.z()),t.quaternion.set(o.x(),o.y(),o.z(),o.w()),d.Helper.safeAmmoObjectDestroy(n)}d.btMotionStateFromObject3d=t,d.btMotionStateToObject3d=e;var n=function(u){function l(e,t,n){var r=u.call(this)||this;r._world=null;var o=0!==(n=Math.max(l._minMass,Math.min(l._maxMass,n))),i=new Ammo.btDefaultMotionState,s=t.createCollisionShape(),a=new Ammo.btVector3(0,0,0);o&&s.calculateLocalInertia(n,a);var c=new Ammo.btRigidBodyConstructionInfo(n,i,s,a);return d.Helper.safeAmmoObjectDestroy(a),r._btbody=new Ammo.btRigidBody(c),r._btshape=s,r._btmotionstate=i,r._btinfo=c,r._btbody.setFriction(l._defaultFriction),r.isStatic=!o,r.isKinematic=o,r._object3d=e,r}return __extends(l,u),Object.defineProperty(l.prototype,"isStatic",{get:function(){return this._btbody.isStaticObject()},set:function(e){this._toggleCollisionFlag(1,e)},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"isKinematic",{get:function(){return this._btbody.isKinematicObject()},set:function(e){this._toggleCollisionFlag(2,e),this._btbody.setActivationState(e?4:1),e||this._btbody.activate(),this._world&&this.addRigidBody(this._world)},enumerable:!0,configurable:!0}),l.prototype.addRigidBody=function(e){this.removeRigidBody(e),t(this._btmotionstate,this._object3d),this._btbody.setMotionState(this._btmotionstate),this._world=e,this._world.btWorld.addRigidBody(this._btbody)},l.prototype.removeRigidBody=function(e){this._world===e&&(this._world.btWorld.removeRigidBody(this._btbody),this._world=null)},l.prototype.syncMotionStateToObject3d=function(){this._btbody.isStaticOrKinematicObject()||e(this._btbody.getMotionState(),this._object3d)},l.prototype._toggleCollisionFlag=function(e,t){var n=this._btbody.getCollisionFlags();t?n|=e:n&=~e,this._btbody.setCollisionFlags(n)},l.prototype._onDispose=function(){d.Helper.safeAmmoObjectDestroy(this._btbody),d.Helper.safeAmmoObjectDestroy(this._btinfo),d.Helper.safeAmmoObjectDestroy(this._btmotionstate),d.Helper.safeAmmoObjectDestroy(this._btshape)},l._minMass=0,l._maxMass=100,l._defaultFriction=.75,l}(rt.DisposableObject);d.RigidBody=n}(pxsim||(pxsim={}));