((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_29",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,G,F,H,I,A={
avL(d,e){var x=null
return new A.Ib(e,x,x,x,x,x,x,!1,x,!0,x,d,x)},
aOG(d){var x=B.V(d),w=x.p2.as,v=w==null?null:w.r
if(v==null)v=14
w=B.cy(d,C.cg)
w=w==null?null:w.gcU()
if(w==null)w=C.af
return F.auH(new B.ag(24,0,24,0),new B.ag(12,0,12,0),new B.ag(6,0,6,0),v*w.a/14)},
Ib:function Ib(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Pk:function Pk(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1,a2,a3){var _=this
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
ahD:function ahD(d){this.a=d},
ahF:function ahF(d){this.a=d},
ahI:function ahI(d){this.a=d},
ahE:function ahE(){},
ahG:function ahG(d){this.a=d},
ahH:function ahH(){},
aGe(){return new A.o3(null)},
o3:function o3(d){this.a=d},
Zp:function Zp(d,e){this.a=d
this.b=e},
Zo:function Zo(){},
Zn:function Zn(d){this.a=d}},D,E,K,L,M
B=c[0]
C=c[2]
G=c[42]
F=c[35]
H=c[23]
I=c[43]
A=a.updateHolder(c[6],A)
D=c[46]
E=c[38]
K=c[48]
L=c[49]
M=c[47]
A.Ib.prototype={
Dn(d){var x=null
B.V(d)
B.V(d)
return new A.Pk(d,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,C.a7,!0,C.t,x,x,x)},
FZ(d){var x
d.ab(y.u)
x=B.V(d)
return x.E.a}}
A.Pk.prototype={
gfP(){var x,w=this,v=w.fy
if(v===$){x=B.V(w.fx)
w.fy!==$&&B.af()
v=w.fy=x.ax}return v},
glm(){return new B.bc(B.V(this.fx).p2.as,y.g)},
gcd(){return new B.aA(new A.ahD(this),y.d)},
gcP(){return new B.aA(new A.ahF(this),y.d)},
gco(){return new B.aA(new A.ahI(this),y.d)},
gbI(){var x=this.gfP().x1
if(x==null)x=C.k
return new B.bc(x,y.z)},
gc5(){return C.aV},
gcE(){return new B.aA(new A.ahE(),y.x)},
gbf(){return new B.bc(A.aOG(this.fx),y.B)},
ghM(){return E.z8},
gea(){return E.z7},
ghF(){return new B.aA(new A.ahG(this),y.E)},
ghL(){return C.dz},
gcw(){return C.dA},
gdT(){return new B.aA(new A.ahH(),y.D)},
ghT(){return B.V(this.fx).Q},
ghR(){return B.V(this.fx).f},
ge0(){return B.V(this.fx).y}}
A.o3.prototype={
D(d){return F.dO(A.avL(D.Vv,new A.Zp(this,d)),"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nElevatedButton(\n  onPressed: () => _showDialog(context),\n  child: const Text('Show Dialog'),\n),\n\n...\n\nFuture<void> _showDialog(BuildContext context) async {\n  return showDialog<void>(\n    context: context,\n    builder: (BuildContext context) {\n      return BackdropFilter(\n        filter: ImageFilter.blur(sigmaX: 5, sigmaY: 5),\n        child: Align(\n          /// Tilt here\n          child: Tilt(\n            borderRadius: BorderRadius.circular(30),\n            tiltConfig: const TiltConfig(\n              enableRevert: false,\n              enableSensorRevert: false,\n            ),\n            lightConfig: const LightConfig(\n              disable: false,\n              direction: LightDirection.all,\n            ),\n            shadowConfig: const ShadowConfig(disable: true),\n            child: BackdropFilter(\n              filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),\n              child: Container(\n                width: 350,\n                height: 200,\n                padding: const EdgeInsets.all(32),\n                color: Colors.white12,\n                child: Column(\n                  crossAxisAlignment: CrossAxisAlignment.start,\n                  children: [\n                    const Text(\n                      'Flutter Tilt',\n                      style: TextStyle(\n                        fontSize: 18,\n                        color: Colors.white,\n                      ),\n                    ),\n                    Expanded(\n                      child: Align(\n                        alignment: Alignment.bottomRight,\n                        child: ElevatedButton(\n                          child: const Text('Close'),\n                          onPressed: () => Navigator.of(context).pop(),\n                        ),\n                      ),\n                    ),\n                  ],\n                ),\n              ),\n            ),\n          ),\n        ),\n      );\n    },\n  );\n}\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",300,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/dialog.dart","Dialog",null)},
BL(d){return this.a9n(d)},
a9n(d){var x=0,w=B.N(y.v),v
var $async$BL=B.O(function(e,f){if(e===1)return B.K(f,w)
while(true)switch(x){case 0:v=H.aBt(new A.Zo(),d,y.v)
x=1
break
case 1:return B.L(v,w)}})
return B.M($async$BL,w)}}
var z=a.updateTypes([])
A.ahD.prototype={
$1(d){var x,w
if(d.n(0,C.v)){x=this.a.gfP().k3
return B.ai(31,x.gm()>>>16&255,x.gm()>>>8&255,x.gm()&255)}x=this.a.gfP()
w=x.p3
return w==null?x.k2:w},
$S:8}
A.ahF.prototype={
$1(d){var x
if(d.n(0,C.v)){x=this.a.gfP().k3
return B.ai(97,x.gm()>>>16&255,x.gm()>>>8&255,x.gm()&255)}return this.a.gfP().b},
$S:8}
A.ahI.prototype={
$1(d){if(d.n(0,C.C))return this.a.gfP().b.bg(0.1)
if(d.n(0,C.I))return this.a.gfP().b.bg(0.08)
if(d.n(0,C.J))return this.a.gfP().b.bg(0.1)
return null},
$S:28}
A.ahE.prototype={
$1(d){if(d.n(0,C.v))return 0
if(d.n(0,C.C))return 1
if(d.n(0,C.I))return 3
if(d.n(0,C.J))return 1
return 1},
$S:127}
A.ahG.prototype={
$1(d){var x,w=this
if(d.n(0,C.v)){x=w.a.gfP().k3
return B.ai(97,x.gm()>>>16&255,x.gm()>>>8&255,x.gm()&255)}if(d.n(0,C.C))return w.a.gfP().b
if(d.n(0,C.I))return w.a.gfP().b
if(d.n(0,C.J))return w.a.gfP().b
return w.a.gfP().b},
$S:8}
A.ahH.prototype={
$1(d){if(d.n(0,C.v))return C.aS
return C.aL},
$S:38}
A.Zp.prototype={
$0(){return this.a.BL(this.b)},
$S:0}
A.Zo.prototype={
$1(d){var x=null,w=$.a4(),v=w.r9(5,5,C.aj),u=B.bv(30)
w=w.r9(10,10,C.aj)
return B.Xd(new B.en(C.t,x,x,F.cT(x,u,B.Xd(B.aW(x,B.de(B.b([D.VR,B.rq(new B.en(M.kS,x,x,A.avL(D.VI,new A.Zn(d)),x),1,x)],y.l),C.ac,C.G,C.E),C.l,D.Dk,x,200,x,I.mt,350),w),E.aG,D.GS,E.a4,x,x,G.bO,K.yV,x),x),v)},
$S:178}
A.Zn.prototype={
$0(){return B.yJ(this.a,!1).ee()},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.Ib,B.nL)
x(A.Pk,B.b9)
w(B.cF,[A.ahD,A.ahF,A.ahI,A.ahE,A.ahG,A.ahH,A.Zo])
x(A.o3,B.W)
w(B.e7,[A.Zp,A.Zn])})()
B.cr(b.typeUniverse,JSON.parse('{"Ib":{"H":[],"c":[]},"Pk":{"b9":[]},"o3":{"W":[],"c":[]},"aGS":{"ca":[],"aL":[],"av":[],"c":[]}}'))
var y=(function rtii(){var x=B.P
return{u:x("aGS"),l:x("n<c>"),z:x("bc<j>"),B:x("bc<cw>"),g:x("bc<i?>"),E:x("aA<j>"),x:x("aA<D>"),d:x("aA<j?>"),D:x("aA<bX?>"),v:x("~")}})();(function constants(){D.Dk=new B.j(0.23921568627450981,1,1,1,C.e)
D.GS=new F.j2(!1,C.i,0,0.5,4,E.mZ,null)
D.Vv=new B.bf("Show Dialog",null,null,null,null,null,null)
D.VI=new B.bf("Close",null,null,null,null,null,null)
D.VR=new B.bf("Flutter Tilt",null,L.yL,null,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_29",e:"endPart",h:b})})($__dart_deferred_initializers__,"/DVD3KwqiFAk+UOHWfguxzrBHnM=");