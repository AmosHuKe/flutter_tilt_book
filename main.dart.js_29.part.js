((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_29",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,H,F,I,E,D={I4:function I4(){},
aEY(){return new D.oW(null)},
oW:function oW(d){this.a=d}},C,K,G,L
A=c[0]
B=c[2]
H=c[41]
F=c[34]
I=c[48]
E=c[44]
D=a.updateHolder(c[11],D)
C=c[58]
K=c[37]
G=c[32]
L=c[39]
D.I4.prototype={
jx(d){return Math.pow(2,-10*d)*Math.sin((d-0.1)*6.283185307179586/0.4)+1},
k(d){return"ElasticOutCurve(0.4)"}}
D.oW.prototype={
F(d){var x,w=null,v=A.bL(30),u=y.e,t=A.b([A.cY(w,G.hq(A.b2(B.t,C.VV,B.l,B.m,w,60,w,w,60),L.ty),w,w,0,w,w,w)],u),s=A.b([A.cY(w,G.hq(A.b2(B.t,C.VP,B.l,B.m,w,60,w,w,60),C.MC),w,w,w,0,w,w)],u),r=y.c,q=A.b([A.I(153,128,208,199),A.I(153,19,84,122)],r)
q=A.cY(-10,G.hq(A.b2(B.br,C.z5,B.l,w,new A.bo(w,w,w,A.bL(20),w,new A.dr(E.dJ,E.dK,B.ad,q,w,w),B.C),160,w,C.ms,280),C.MD),w,w,w,w,w,w)
x=A.b([A.I(204,128,208,199),A.I(204,19,84,122)],r)
u=A.b([q,A.cY(-5,G.hq(A.b2(B.br,C.z5,B.l,w,new A.bo(w,w,w,A.bL(25),w,new A.dr(E.dJ,E.dK,B.ad,x,w,w),B.C),180,w,C.ms,315),C.My),w,w,w,w,w,w)],u)
x=B.c.ar(229.5)
return F.e3(F.dk(w,v,A.b2(B.t,C.W_,B.l,w,new A.bo(w,w,w,w,w,new A.dr(E.dJ,E.dK,B.ad,A.b([A.I(x,128,208,199),A.I(x,19,84,122)],r),w,w),B.C),200,w,w,350),new F.hw(t,s,u),K.by,w,w,H.ck,C.Wr,w),"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nTilt(\n  borderRadius: BorderRadius.circular(30),\n  tiltConfig: const TiltConfig(\n    angle: 20,\n    leaveDuration: Duration(seconds: 1),\n    leaveCurve: Curves.elasticOut,\n  ),\n  shadowConfig: const ShadowConfig(disable: true),\n  childLayout: ChildLayout(\n    outer: [\n      Positioned(\n        left: 0,\n        child: TiltParallax(\n          size: const Offset(40, 40),\n          child: Container(\n            width: 60,\n            height: 60,\n            alignment: Alignment.center,\n            color: Colors.black,\n            child: const Text(\n              'outer',\n              style: TextStyle(\n                fontSize: 20,\n                color: Colors.white,\n              ),\n            ),\n          ),\n        ),\n      ),\n    ],\n    inner: [\n      Positioned(\n        right: 0,\n        child: TiltParallax(\n          size: const Offset(-40, -40),\n          child: Container(\n            width: 60,\n            height: 60,\n            alignment: Alignment.center,\n            color: Colors.black,\n            child: const Text(\n              'inner',\n              style: TextStyle(\n                fontSize: 20,\n                color: Colors.white,\n              ),\n            ),\n          ),\n        ),\n      ),\n    ],\n    behind: [\n      Positioned(\n        bottom: -10,\n        child: TiltParallax(\n          size: const Offset(-50, -50),\n          child: Container(\n            width: 350 * 0.8,\n            height: 200 * 0.8,\n            alignment: Alignment.bottomCenter,\n            padding: const EdgeInsets.only(bottom: 4),\n            decoration: BoxDecoration(\n              gradient: LinearGradient(\n                begin: Alignment.topRight,\n                end: Alignment.bottomLeft,\n                colors: [\n                  const Color(0xFF80d0c7).withOpacity(0.6),\n                  const Color(0xFF13547a).withOpacity(0.6),\n                ],\n              ),\n              borderRadius: BorderRadius.circular(20),\n            ),\n            child: const Text(\n              'behind',\n              style: TextStyle(\n                fontSize: 18,\n                color: Colors.white,\n              ),\n            ),\n          ),\n        ),\n      ),\n      Positioned(\n        bottom: -5,\n        child: TiltParallax(\n          size: const Offset(-25, -25),\n          child: Container(\n            width: 350 * 0.9,\n            height: 200 * 0.9,\n            alignment: Alignment.bottomCenter,\n            padding: const EdgeInsets.only(bottom: 4),\n            decoration: BoxDecoration(\n              gradient: LinearGradient(\n                begin: Alignment.topRight,\n                end: Alignment.bottomLeft,\n                colors: [\n                  const Color(0xFF80d0c7).withOpacity(0.8),\n                  const Color(0xFF13547a).withOpacity(0.8),\n                ],\n              ),\n              borderRadius: BorderRadius.circular(25),\n            ),\n            child: const Text(\n              'behind',\n              style: TextStyle(\n                fontSize: 18,\n                color: Colors.white,\n              ),\n            ),\n          ),\n        ),\n      ),\n    ],\n  ),\n  child: Container(\n    width: 350,\n    height: 200,\n    alignment: Alignment.center,\n    decoration: BoxDecoration(\n      gradient: LinearGradient(\n        begin: Alignment.topRight,\n        end: Alignment.bottomLeft,\n        colors: [\n          const Color(0xFF80d0c7).withOpacity(0.9),\n          const Color(0xFF13547a).withOpacity(0.9),\n        ],\n      ),\n    ),\n    child: const Text(\n      'child',\n      style: TextStyle(\n        fontSize: 20,\n        color: Colors.white,\n      ),\n    ),\n  ),\n),\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",500,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/layout.dart","Layout",w)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(D.I4,A.dC)
x(D.oW,A.X)})()
A.cF(b.typeUniverse,JSON.parse('{"I4":{"dC":[]},"oW":{"X":[],"c":[]}}'))
var y={c:A.L("o<m>"),e:A.L("o<c>")};(function constants(){C.ms=new A.ak(0,0,0,4)
C.My=new A.f(-25,-25)
C.MC=new A.f(-40,-40)
C.MD=new A.f(-50,-50)
C.VP=new A.b4("inner",null,B.dw,null,null,null,null,null)
C.VV=new A.b4("outer",null,B.dw,null,null,null,null,null)
C.W_=new A.b4("child",null,B.dw,null,null,null,null,null)
C.z5=new A.b4("behind",null,I.yU,null,null,null,null,null)
C.B4=new D.I4()
C.Wr=new F.eV(!1,null,20,null,!1,null,!0,!0,!0,!0,B.c5,C.B4)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_29",e:"endPart",h:b})})($__dart_deferred_initializers__,"7S3IQ8cdzr0sreXGd+0SmE7H7Wk=");