((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_29",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,H,F,I,E,D={I2:function I2(){},
aF4(){return new D.oP(null)},
oP:function oP(d){this.a=d}},C,K,G,L
A=c[0]
B=c[2]
H=c[41]
F=c[34]
I=c[48]
E=c[44]
D=a.updateHolder(c[11],D)
C=c[59]
K=c[37]
G=c[32]
L=c[39]
D.I2.prototype={
jx(d){return Math.pow(2,-10*d)*Math.sin((d-0.1)*6.283185307179586/0.4)+1},
k(d){return"ElasticOutCurve(0.4)"}}
D.oP.prototype={
E(d){var x,w=null,v=A.bI(30),u=y.e,t=A.b([A.cW(w,G.eV(A.aX(B.u,C.W7,B.l,B.m,w,60,w,w,60),L.tM),w,w,0,w,w,w)],u),s=A.b([A.cW(w,G.eV(A.aX(B.u,C.W1,B.l,B.m,w,60,w,w,60),C.MP),w,w,w,0,w,w)],u),r=y.c,q=A.b([A.I(153,128,208,199),A.I(153,19,84,122)],r)
q=A.cW(-10,G.eV(A.aX(B.br,C.zj,B.l,w,new A.bi(w,w,w,A.bI(20),w,new A.dn(E.dJ,E.dK,B.ae,q,w,w),B.D),160,w,C.mD,280),C.MQ),w,w,w,w,w,w)
x=A.b([A.I(204,128,208,199),A.I(204,19,84,122)],r)
u=A.b([q,A.cW(-5,G.eV(A.aX(B.br,C.zj,B.l,w,new A.bi(w,w,w,A.bI(25),w,new A.dn(E.dJ,E.dK,B.ae,x,w,w),B.D),180,w,C.mD,315),C.ML),w,w,w,w,w,w)],u)
x=B.c.ar(229.5)
return F.e3(F.d8(w,v,A.aX(B.u,C.Wc,B.l,w,new A.bi(w,w,w,w,w,new A.dn(E.dJ,E.dK,B.ae,A.b([A.I(x,128,208,199),A.I(x,19,84,122)],r),w,w),B.D),200,w,w,350),new F.h0(t,s,u),K.by,w,w,H.bY,C.WG,w),"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nTilt(\n  borderRadius: BorderRadius.circular(30),\n  tiltConfig: const TiltConfig(\n    angle: 20,\n    leaveDuration: Duration(seconds: 1),\n    leaveCurve: Curves.elasticOut,\n  ),\n  shadowConfig: const ShadowConfig(disable: true),\n  childLayout: ChildLayout(\n    outer: [\n      Positioned(\n        left: 0,\n        child: TiltParallax(\n          size: const Offset(40, 40),\n          child: Container(\n            width: 60,\n            height: 60,\n            alignment: Alignment.center,\n            color: Colors.black,\n            child: const Text(\n              'outer',\n              style: TextStyle(\n                fontSize: 20,\n                color: Colors.white,\n              ),\n            ),\n          ),\n        ),\n      ),\n    ],\n    inner: [\n      Positioned(\n        right: 0,\n        child: TiltParallax(\n          size: const Offset(-40, -40),\n          child: Container(\n            width: 60,\n            height: 60,\n            alignment: Alignment.center,\n            color: Colors.black,\n            child: const Text(\n              'inner',\n              style: TextStyle(\n                fontSize: 20,\n                color: Colors.white,\n              ),\n            ),\n          ),\n        ),\n      ),\n    ],\n    behind: [\n      Positioned(\n        bottom: -10,\n        child: TiltParallax(\n          size: const Offset(-50, -50),\n          child: Container(\n            width: 350 * 0.8,\n            height: 200 * 0.8,\n            alignment: Alignment.bottomCenter,\n            padding: const EdgeInsets.only(bottom: 4),\n            decoration: BoxDecoration(\n              gradient: LinearGradient(\n                begin: Alignment.topRight,\n                end: Alignment.bottomLeft,\n                colors: [\n                  const Color(0xFF80d0c7).withOpacity(0.6),\n                  const Color(0xFF13547a).withOpacity(0.6),\n                ],\n              ),\n              borderRadius: BorderRadius.circular(20),\n            ),\n            child: const Text(\n              'behind',\n              style: TextStyle(\n                fontSize: 18,\n                color: Colors.white,\n              ),\n            ),\n          ),\n        ),\n      ),\n      Positioned(\n        bottom: -5,\n        child: TiltParallax(\n          size: const Offset(-25, -25),\n          child: Container(\n            width: 350 * 0.9,\n            height: 200 * 0.9,\n            alignment: Alignment.bottomCenter,\n            padding: const EdgeInsets.only(bottom: 4),\n            decoration: BoxDecoration(\n              gradient: LinearGradient(\n                begin: Alignment.topRight,\n                end: Alignment.bottomLeft,\n                colors: [\n                  const Color(0xFF80d0c7).withOpacity(0.8),\n                  const Color(0xFF13547a).withOpacity(0.8),\n                ],\n              ),\n              borderRadius: BorderRadius.circular(25),\n            ),\n            child: const Text(\n              'behind',\n              style: TextStyle(\n                fontSize: 18,\n                color: Colors.white,\n              ),\n            ),\n          ),\n        ),\n      ),\n    ],\n  ),\n  child: Container(\n    width: 350,\n    height: 200,\n    alignment: Alignment.center,\n    decoration: BoxDecoration(\n      gradient: LinearGradient(\n        begin: Alignment.topRight,\n        end: Alignment.bottomLeft,\n        colors: [\n          const Color(0xFF80d0c7).withOpacity(0.9),\n          const Color(0xFF13547a).withOpacity(0.9),\n        ],\n      ),\n    ),\n    child: const Text(\n      'child',\n      style: TextStyle(\n        fontSize: 20,\n        color: Colors.white,\n      ),\n    ),\n  ),\n),\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",500,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/layout.dart","Layout",w)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(D.I2,A.dA)
x(D.oP,A.W)})()
A.cD(b.typeUniverse,JSON.parse('{"I2":{"dA":[]},"oP":{"W":[],"c":[]}}'))
var y={c:A.N("o<l>"),e:A.N("o<c>")};(function constants(){C.mD=new A.ak(0,0,0,4)
C.ML=new A.f(-25,-25)
C.MP=new A.f(-40,-40)
C.MQ=new A.f(-50,-50)
C.W1=new A.b4("inner",null,B.dw,null,null,null,null,null)
C.W7=new A.b4("outer",null,B.dw,null,null,null,null,null)
C.Wc=new A.b4("child",null,B.dw,null,null,null,null,null)
C.zj=new A.b4("behind",null,I.z7,null,null,null,null,null)
C.Bh=new D.I2()
C.WG=new F.dY(!1,null,20,null,!1,null,!0,!0,!0,!0,B.c7,C.Bh)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_29",e:"endPart",h:b})})($__dart_deferred_initializers__,"C9imrtyBI9a7C1ovogCavcAWPTY=");