((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_23",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,G,H,I,E,B={
atW(d,e){var x=null
return new B.I3(e,x,x,x,x,x,x,!1,x,!0,d,x)},
aLH(d){var x=A.a_(d),w=x.p2.as,v=w==null?null:w.r
if(v==null)v=14
w=A.c6(d,C.bM)
w=w==null?null:w.gck()
if(w==null)w=C.a_
return A.asZ(new A.ak(24,0,24,0),new A.ak(12,0,12,0),new A.ak(6,0,6,0),v*w.a/14)},
I3:function I3(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.as=n
_.a=o},
P8:function P8(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1,a2,a3){var _=this
_.fx=d
_.fy=$
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.r=k
_.w=l
_.x=m
_.y=n
_.z=o
_.Q=p
_.as=q
_.at=r
_.ax=s
_.ay=t
_.ch=u
_.CW=v
_.cx=w
_.cy=x
_.db=a0
_.dx=a1
_.dy=a2
_.fr=a3},
afK:function afK(d){this.a=d},
afM:function afM(d){this.a=d},
afO:function afO(d){this.a=d},
afL:function afL(){},
afN:function afN(){},
aDh(){return new B.oe(null)},
oe:function oe(d){this.a=d},
Zz:function Zz(d,e){this.a=d
this.b=e},
Zy:function Zy(){},
Zx:function Zx(d){this.a=d}},D,K,L,M,F
A=c[0]
C=c[2]
G=c[41]
H=c[22]
I=c[42]
E=c[34]
B=a.updateHolder(c[9],B)
D=c[45]
K=c[47]
L=c[48]
M=c[46]
F=c[37]
B.I3.prototype={
Ej(d){var x=null
A.a_(d)
A.a_(d)
return new B.P8(d,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,C.a3,!0,C.u,x,x,x)},
GA(d){var x
d.ak(y.u)
x=A.a_(d)
return x.F.a}}
B.P8.prototype={
gkQ(){var x,w=this,v=w.fy
if(v===$){x=A.a_(w.fx)
w.fy!==$&&A.ad()
v=w.fy=x.ax}return v},
ghi(){return new A.bx(A.a_(this.fx).p2.as,y.g)},
gcv(){return new A.aP(new B.afK(this),y.d)},
gcY(){return new A.aP(new B.afM(this),y.d)},
gcB(){return new A.aP(new B.afO(this),y.d)},
gbS(){var x=this.gkQ().x1
if(x==null)x=C.m
return new A.bx(x,y.z)},
gcm(){return C.bb},
gcU(){return new A.aP(new B.afL(),y.x)},
gbO(){return new A.bx(B.aLH(this.fx),y.B)},
ghP(){return C.zK},
ghO(){return C.dD},
gcs(){return C.dC},
ge_(){return new A.aP(new B.afN(),y.D)},
gi_(){return A.a_(this.fx).Q},
ghX(){return A.a_(this.fx).f},
ge7(){return A.a_(this.fx).y}}
B.oe.prototype={
E(d){return E.e3(B.atW(D.Wl,new B.Zz(this,d)),"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nElevatedButton(\n  onPressed: () => _showDialog(context),\n  child: const Text('Show Dialog'),\n),\n\n...\n\nFuture<void> _showDialog(BuildContext context) async {\n  return showDialog<void>(\n    context: context,\n    builder: (BuildContext context) {\n      return BackdropFilter(\n        filter: ImageFilter.blur(sigmaX: 5, sigmaY: 5),\n        child: Align(\n          /// Tilt here\n          child: Tilt(\n            borderRadius: BorderRadius.circular(30),\n            tiltConfig: const TiltConfig(\n              enableRevert: false,\n              enableSensorRevert: false,\n            ),\n            lightConfig: const LightConfig(\n              disable: false,\n              direction: LightDirection.all,\n            ),\n            shadowConfig: const ShadowConfig(disable: true),\n            child: BackdropFilter(\n              filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),\n              child: Container(\n                width: 350,\n                height: 200,\n                padding: const EdgeInsets.all(32),\n                color: Colors.white12,\n                child: Column(\n                  crossAxisAlignment: CrossAxisAlignment.start,\n                  children: [\n                    const Text(\n                      'Flutter Tilt',\n                      style: TextStyle(\n                        fontSize: 18,\n                        color: Colors.white,\n                      ),\n                    ),\n                    Expanded(\n                      child: Align(\n                        alignment: Alignment.bottomRight,\n                        child: ElevatedButton(\n                          child: const Text('Close'),\n                          onPressed: () => Navigator.of(context).pop(),\n                        ),\n                      ),\n                    ),\n                  ],\n                ),\n              ),\n            ),\n          ),\n        ),\n      );\n    },\n  );\n}\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",300,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/dialog.dart","Dialog",null)},
CR(d){return this.abG(d)},
abG(d){var x=0,w=A.U(y.v),v
var $async$CR=A.V(function(e,f){if(e===1)return A.R(f,w)
while(true)switch(x){case 0:v=H.azm(new B.Zy(),d,y.v)
x=1
break
case 1:return A.S(v,w)}})
return A.T($async$CR,w)}}
var z=a.updateTypes([])
B.afK.prototype={
$1(d){var x,w
if(d.p(0,C.x)){x=this.a.gkQ().k3.a
return A.I(31,x>>>16&255,x>>>8&255,x&255)}x=this.a.gkQ()
w=x.p3
return w==null?x.k2:w},
$S:6}
B.afM.prototype={
$1(d){var x
if(d.p(0,C.x)){x=this.a.gkQ().k3.a
return A.I(97,x>>>16&255,x>>>8&255,x&255)}return this.a.gkQ().b},
$S:6}
B.afO.prototype={
$1(d){var x
if(d.p(0,C.C)){x=this.a.gkQ().b
return A.I(C.c.ar(25.5),x.gm()>>>16&255,x.gm()>>>8&255,x.gm()&255)}if(d.p(0,C.G)){x=this.a.gkQ().b
return A.I(20,x.gm()>>>16&255,x.gm()>>>8&255,x.gm()&255)}if(d.p(0,C.H)){x=this.a.gkQ().b
return A.I(C.c.ar(25.5),x.gm()>>>16&255,x.gm()>>>8&255,x.gm()&255)}return null},
$S:25}
B.afL.prototype={
$1(d){if(d.p(0,C.x))return 0
if(d.p(0,C.C))return 1
if(d.p(0,C.G))return 3
if(d.p(0,C.H))return 1
return 1},
$S:119}
B.afN.prototype={
$1(d){if(d.p(0,C.x))return C.bk
return C.aZ},
$S:31}
B.Zz.prototype={
$0(){return this.a.CR(this.b)},
$S:0}
B.Zy.prototype={
$1(d){var x=null,w=$.a9(),v=w.rn(5,5,C.ae),u=A.bI(30)
w=w.rn(10,10,C.ae)
return A.Gq(new A.e0(C.u,x,x,E.d8(x,u,A.Gq(A.aX(x,A.cT(A.b([D.W6,A.lV(new A.e0(M.lh,x,x,B.atW(C.Wp,new B.Zx(d)),x),1,x)],y.l),C.as,C.F,C.A),C.l,D.Cu,x,200,x,I.mH,350),w),F.aR,D.Hn,x,x,G.bY,K.zm,x),x),v)},
$S:186}
B.Zx.prototype={
$0(){return A.tj(this.a,!1).el()},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.I3,A.r0)
x(B.P8,A.be)
w(A.d_,[B.afK,B.afM,B.afO,B.afL,B.afN,B.Zy])
x(B.oe,A.W)
w(A.ei,[B.Zz,B.Zx])})()
A.cD(b.typeUniverse,JSON.parse('{"I3":{"J":[],"c":[]},"P8":{"be":[]},"oe":{"W":[],"c":[]},"aE1":{"cP":[],"aR":[],"aD":[],"c":[]}}'))
var y={u:A.N("aE1"),l:A.N("o<c>"),z:A.N("bx<l>"),B:A.N("bx<cU>"),g:A.N("bx<j?>"),x:A.N("aP<F>"),d:A.N("aP<l?>"),D:A.N("aP<c0?>"),v:A.N("~")};(function constants(){D.Cu=new A.l(1040187391)
D.Hn=new E.jj(!1,C.i,0,0.5,4,F.nf,null)
D.W6=new A.b4("Flutter Tilt",null,L.z7,null,null,null,null,null)
D.Wl=new A.b4("Show Dialog",null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_23",e:"endPart",h:b})})($__dart_deferred_initializers__,"PbbqgkYxEKkiXnGCQQHMwUbJ/WQ=");