((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_24",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,G,H,I,E,B={
ay5(d,e){var x=null
return new B.IU(e,x,x,x,x,x,x,!1,x,!0,d,x)},
aQQ(d){var x=A.Z(d),w=x.p2.as,v=w==null?null:w.r
if(v==null)v=14
w=A.cb(d,C.bJ)
w=w==null?null:w.gcp()
if(w==null)w=C.a1
return A.ax2(new A.ak(24,0,24,0),new A.ak(12,0,12,0),new A.ak(6,0,6,0),v*w.a/14)},
IU:function IU(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
Qf:function Qf(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1,a2,a3){var _=this
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
ajE:function ajE(d){this.a=d},
ajG:function ajG(d){this.a=d},
ajI:function ajI(d){this.a=d},
ajF:function ajF(){},
ajH:function ajH(){},
aIh(){return new B.oM(null)},
oM:function oM(d){this.a=d},
a_X:function a_X(d,e){this.a=d
this.b=e},
a_W:function a_W(){},
a_V:function a_V(d){this.a=d}},D,K,L,M,F
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
B.IU.prototype={
EQ(d){var x=null
A.Z(d)
A.Z(d)
return new B.Qf(d,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,C.a8,!0,C.t,x,x,x)},
Hd(d){var x
d.ag(y.u)
x=A.Z(d)
return x.D.a}}
B.Qf.prototype={
gl6(){var x,w=this,v=w.fy
if(v===$){x=A.Z(w.fx)
w.fy!==$&&A.ac()
v=w.fy=x.ax}return v},
ghx(){return new A.bx(A.Z(this.fx).p2.as,y.g)},
gcB(){return new A.aN(new B.ajE(this),y.d)},
gd9(){return new A.aN(new B.ajG(this),y.d)},
gcJ(){return new A.aN(new B.ajI(this),y.d)},
gbU(){var x=this.gl6().x1
if(x==null)x=C.l
return new A.bx(x,y.z)},
gcr(){return C.ba},
gd2(){return new A.aN(new B.ajF(),y.x)},
gbL(){return new A.bx(B.aQQ(this.fx),y.B)},
gi0(){return C.zY},
gi_(){return C.dR},
gcQ(){return C.dQ},
ged(){return new A.aN(new B.ajH(),y.D)},
gia(){return A.Z(this.fx).Q},
gi7(){return A.Z(this.fx).f},
geo(){return A.Z(this.fx).y}}
B.oM.prototype={
E(d){return E.ec(B.ay5(D.Ws,new B.a_X(this,d)),"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nElevatedButton(\n  onPressed: () => _showDialog(context),\n  child: const Text('Show Dialog'),\n),\n\n...\n\nFuture<void> _showDialog(BuildContext context) async {\n  return showDialog<void>(\n    context: context,\n    builder: (BuildContext context) {\n      return BackdropFilter(\n        filter: ImageFilter.blur(sigmaX: 5, sigmaY: 5),\n        child: Align(\n          /// Tilt here\n          child: Tilt(\n            borderRadius: BorderRadius.circular(30),\n            tiltConfig: const TiltConfig(\n              enableRevert: false,\n              enableSensorRevert: false,\n            ),\n            lightConfig: const LightConfig(\n              disable: false,\n              direction: LightDirection.all,\n            ),\n            shadowConfig: const ShadowConfig(disable: true),\n            child: BackdropFilter(\n              filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),\n              child: Container(\n                width: 350,\n                height: 200,\n                padding: const EdgeInsets.all(32),\n                color: Colors.white12,\n                child: Column(\n                  crossAxisAlignment: CrossAxisAlignment.start,\n                  children: [\n                    const Text(\n                      'Flutter Tilt',\n                      style: TextStyle(\n                        fontSize: 18,\n                        color: Colors.white,\n                      ),\n                    ),\n                    Expanded(\n                      child: Align(\n                        alignment: Alignment.bottomRight,\n                        child: ElevatedButton(\n                          child: const Text('Close'),\n                          onPressed: () => Navigator.of(context).pop(),\n                        ),\n                      ),\n                    ),\n                  ],\n                ),\n              ),\n            ),\n          ),\n        ),\n      );\n    },\n  );\n}\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",300,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/dialog.dart","Dialog",null)},
De(d){return this.adj(d)},
adj(d){var x=0,w=A.T(y.v),v
var $async$De=A.U(function(e,f){if(e===1)return A.Q(f,w)
while(true)switch(x){case 0:v=H.aDR(new B.a_W(),d,y.v)
x=1
break
case 1:return A.R(v,w)}})
return A.S($async$De,w)}}
var z=a.updateTypes([])
B.ajE.prototype={
$1(d){var x,w
if(d.p(0,C.w)){x=this.a.gl6().k3.a
return A.J(31,x>>>16&255,x>>>8&255,x&255)}x=this.a.gl6()
w=x.p3
return w==null?x.k2:w},
$S:9}
B.ajG.prototype={
$1(d){var x
if(d.p(0,C.w)){x=this.a.gl6().k3.a
return A.J(97,x>>>16&255,x>>>8&255,x&255)}return this.a.gl6().b},
$S:9}
B.ajI.prototype={
$1(d){var x
if(d.p(0,C.E)){x=this.a.gl6().b
return A.J(C.c.ab(25.5),x.gm()>>>16&255,x.gm()>>>8&255,x.gm()&255)}if(d.p(0,C.J)){x=this.a.gl6().b
return A.J(20,x.gm()>>>16&255,x.gm()>>>8&255,x.gm()&255)}if(d.p(0,C.K)){x=this.a.gl6().b
return A.J(C.c.ab(25.5),x.gm()>>>16&255,x.gm()>>>8&255,x.gm()&255)}return null},
$S:29}
B.ajF.prototype={
$1(d){if(d.p(0,C.w))return 0
if(d.p(0,C.E))return 1
if(d.p(0,C.J))return 3
if(d.p(0,C.K))return 1
return 1},
$S:134}
B.ajH.prototype={
$1(d){if(d.p(0,C.w))return C.b5
return C.b_},
$S:44}
B.a_X.prototype={
$0(){return this.a.De(this.b)},
$S:0}
B.a_W.prototype={
$1(d){var x=null,w=$.a4(),v=w.rN(5,5,C.ak),u=A.bM(30)
w=w.rN(10,10,C.ak)
return A.Hh(new A.e6(C.t,x,x,E.de(x,u,A.Hh(A.b2(x,A.d_(A.b([D.Wd,A.mh(new A.e6(M.lq,x,x,B.ay5(C.Ww,new B.a_V(d)),x),1,x)],y.l),C.ad,C.C,C.z),C.k,D.CK,x,200,x,I.mP,350),w),F.aU,D.Hz,x,x,G.bW,K.zz,x),x),v)},
$S:200}
B.a_V.prototype={
$0(){return A.tU(this.a,!1).eA()},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.IU,A.rE)
x(B.Qf,A.bf)
w(A.d6,[B.ajE,B.ajG,B.ajI,B.ajF,B.ajH,B.a_W])
x(B.oM,A.Y)
w(A.es,[B.a_X,B.a_V])})()
A.cI(b.typeUniverse,JSON.parse('{"IU":{"I":[],"c":[]},"Qf":{"bf":[]},"oM":{"Y":[],"c":[]},"aIZ":{"cV":[],"aR":[],"aG":[],"c":[]}}'))
var y={u:A.M("aIZ"),l:A.M("o<c>"),z:A.M("bx<i>"),B:A.M("bx<cM>"),g:A.M("bx<l?>"),x:A.M("aN<F>"),d:A.M("aN<i?>"),D:A.M("aN<c3?>"),v:A.M("~")};(function constants(){D.CK=new A.i(1040187391)
D.Hz=new E.jx(!1,C.j,0,0.5,4,F.nm,null)
D.Wd=new A.b5("Flutter Tilt",null,L.zk,null,null,null,null,null)
D.Ws=new A.b5("Show Dialog",null,null,null,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_24",e:"endPart",h:b})})($__dart_deferred_initializers__,"hNI+Lq0Djin0wl3iiR5iHUgPPP0=");