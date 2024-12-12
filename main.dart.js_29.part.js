((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_29",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,G,E,H,I,A={
ays(d,e){var x=null
return new A.Ja(e,x,x,x,x,x,x,!1,x,!0,x,d,x)},
aRa(d){var x=B.X(d),w=x.p2.as,v=w==null?null:w.r
if(v==null)v=14
w=B.cf(d,C.bO)
w=w==null?null:w.gct()
if(w==null)w=C.a5
return B.axq(new B.ag(24,0,24,0),new B.ag(12,0,12,0),new B.ag(6,0,6,0),v*w.a/14)},
Ja:function Ja(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.at=n
_.ax=o
_.a=p},
QA:function QA(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1,a2,a3){var _=this
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
ajS:function ajS(d){this.a=d},
ajU:function ajU(d){this.a=d},
ajX:function ajX(d){this.a=d},
ajT:function ajT(){},
ajV:function ajV(d){this.a=d},
ajW:function ajW(){},
aIA(){return new A.oV(null)},
oV:function oV(d){this.a=d},
a_V:function a_V(d,e){this.a=d
this.b=e},
a_U:function a_U(){},
a_T:function a_T(d){this.a=d}},D,F,K,L,M
B=c[0]
C=c[2]
G=c[42]
E=c[35]
H=c[23]
I=c[43]
A=a.updateHolder(c[10],A)
D=c[46]
F=c[38]
K=c[48]
L=c[49]
M=c[47]
A.Ja.prototype={
Fk(d){var x=null
B.X(d)
B.X(d)
return new A.QA(d,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,C.aa,!0,C.u,x,x,x)},
HM(d){var x
d.ag(y.u)
x=B.X(d)
return x.D.a}}
A.QA.prototype={
ghk(){var x,w=this,v=w.fy
if(v===$){x=B.X(w.fx)
w.fy!==$&&B.ac()
v=w.fy=x.ax}return v},
gm6(){return new B.bs(B.X(this.fx).p2.as,y.g)},
gcD(){return new B.aJ(new A.ajS(this),y.d)},
gdc(){return new B.aJ(new A.ajU(this),y.d)},
gcJ(){return new B.aJ(new A.ajX(this),y.d)},
gbW(){var x=this.ghk().x1
if(x==null)x=C.l
return new B.bs(x,y.z)},
gcu(){return C.bd},
gd1(){return new B.aJ(new A.ajT(),y.x)},
gbw(){return new B.bs(A.aRa(this.fx),y.B)},
gie(){return C.A9},
geJ(){return C.A8},
gi7(){return new B.aJ(new A.ajV(this),y.E)},
gic(){return C.dW},
gcU(){return C.dX},
gep(){return new B.aJ(new A.ajW(),y.D)},
gip(){return B.X(this.fx).Q},
gil(){return B.X(this.fx).f},
geB(){return B.X(this.fx).y}}
A.oV.prototype={
G(d){return E.e0(A.ays(D.WJ,new A.a_V(this,d)),"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nElevatedButton(\n  onPressed: () => _showDialog(context),\n  child: const Text('Show Dialog'),\n),\n\n...\n\nFuture<void> _showDialog(BuildContext context) async {\n  return showDialog<void>(\n    context: context,\n    builder: (BuildContext context) {\n      return BackdropFilter(\n        filter: ImageFilter.blur(sigmaX: 5, sigmaY: 5),\n        child: Align(\n          /// Tilt here\n          child: Tilt(\n            borderRadius: BorderRadius.circular(30),\n            tiltConfig: const TiltConfig(\n              enableRevert: false,\n              enableSensorRevert: false,\n            ),\n            lightConfig: const LightConfig(\n              disable: false,\n              direction: LightDirection.all,\n            ),\n            shadowConfig: const ShadowConfig(disable: true),\n            child: BackdropFilter(\n              filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),\n              child: Container(\n                width: 350,\n                height: 200,\n                padding: const EdgeInsets.all(32),\n                color: Colors.white12,\n                child: Column(\n                  crossAxisAlignment: CrossAxisAlignment.start,\n                  children: [\n                    const Text(\n                      'Flutter Tilt',\n                      style: TextStyle(\n                        fontSize: 18,\n                        color: Colors.white,\n                      ),\n                    ),\n                    Expanded(\n                      child: Align(\n                        alignment: Alignment.bottomRight,\n                        child: ElevatedButton(\n                          child: const Text('Close'),\n                          onPressed: () => Navigator.of(context).pop(),\n                        ),\n                      ),\n                    ),\n                  ],\n                ),\n              ),\n            ),\n          ),\n        ),\n      );\n    },\n  );\n}\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",300,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/dialog.dart","Dialog",null)},
DE(d){return this.aec(d)},
aec(d){var x=0,w=B.O(y.v),v
var $async$DE=B.P(function(e,f){if(e===1)return B.L(f,w)
while(true)switch(x){case 0:v=H.aEc(new A.a_U(),d,y.v)
x=1
break
case 1:return B.M(v,w)}})
return B.N($async$DE,w)}}
var z=a.updateTypes([])
A.ajS.prototype={
$1(d){var x,w
if(d.p(0,C.v)){x=this.a.ghk().k3
return B.ai(31,x.gm()>>>16&255,x.gm()>>>8&255,x.gm()&255)}x=this.a.ghk()
w=x.p3
return w==null?x.k2:w},
$S:8}
A.ajU.prototype={
$1(d){var x
if(d.p(0,C.v)){x=this.a.ghk().k3
return B.ai(97,x.gm()>>>16&255,x.gm()>>>8&255,x.gm()&255)}return this.a.ghk().b},
$S:8}
A.ajX.prototype={
$1(d){if(d.p(0,C.D))return this.a.ghk().b.bc(0.1)
if(d.p(0,C.I))return this.a.ghk().b.bc(0.08)
if(d.p(0,C.J))return this.a.ghk().b.bc(0.1)
return null},
$S:29}
A.ajT.prototype={
$1(d){if(d.p(0,C.v))return 0
if(d.p(0,C.D))return 1
if(d.p(0,C.I))return 3
if(d.p(0,C.J))return 1
return 1},
$S:193}
A.ajV.prototype={
$1(d){var x,w=this
if(d.p(0,C.v)){x=w.a.ghk().k3
return B.ai(97,x.gm()>>>16&255,x.gm()>>>8&255,x.gm()&255)}if(d.p(0,C.D))return w.a.ghk().b
if(d.p(0,C.I))return w.a.ghk().b
if(d.p(0,C.J))return w.a.ghk().b
return w.a.ghk().b},
$S:8}
A.ajW.prototype={
$1(d){if(d.p(0,C.v))return C.bc
return C.b0},
$S:41}
A.a_V.prototype={
$0(){return this.a.DE(this.b)},
$S:0}
A.a_U.prototype={
$1(d){var x=null,w=$.a3(),v=w.th(5,5,C.ao),u=B.bB(30)
w=w.th(10,10,C.ao)
return B.Yx(new B.ey(C.u,x,x,E.d3(x,u,B.Yx(B.b_(x,B.d5(B.b([D.Wr,B.mk(new B.ey(M.ly,x,x,A.ays(C.WP,new A.a_T(d)),x),1,x)],y.l),C.ag,C.G,C.B),C.m,D.Ek,x,200,x,I.n0,350),!0,w),F.aV,D.HI,F.a7,x,x,G.c1,K.zL,x),x),!0,v)},
$S:185}
A.a_T.prototype={
$0(){return B.A3(this.a,!1).eq()},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.Ja,B.rQ)
x(A.QA,B.bh)
w(B.d_,[A.ajS,A.ajU,A.ajX,A.ajT,A.ajV,A.ajW,A.a_U])
x(A.oV,B.W)
w(B.eh,[A.a_V,A.a_T])})()
B.cC(b.typeUniverse,JSON.parse('{"Ja":{"I":[],"c":[]},"QA":{"bh":[]},"oV":{"W":[],"c":[]},"aJf":{"cH":[],"aQ":[],"aF":[],"c":[]}}'))
var y=(function rtii(){var x=B.R
return{u:x("aJf"),l:x("m<c>"),z:x("bs<l>"),B:x("bs<cN>"),g:x("bs<j?>"),E:x("aJ<l>"),x:x("aJ<F>"),d:x("aJ<l?>"),D:x("aJ<c9?>"),v:x("~")}})();(function constants(){D.Ek=new B.l(0.23921568627450981,1,1,1,C.e)
D.HI=new E.jz(!1,C.j,0,0.5,4,F.nC,null)
D.Wr=new B.b5("Flutter Tilt",null,L.zC,null,null,null,null,null)
D.WJ=new B.b5("Show Dialog",null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_29",e:"endPart",h:b})})($__dart_deferred_initializers__,"91uygT/KAUbYzkFkjYxy//RoTxg=");