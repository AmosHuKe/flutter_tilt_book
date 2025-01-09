((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_36",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,K,G,I,H,L,E,D={Ia:function Ia(){},
aHS(){return new D.oK(null)},
oK:function oK(d){this.a=d}},C,M,F
A=c[0]
B=c[2]
K=c[42]
G=c[35]
I=c[38]
H=c[33]
L=c[49]
E=c[45]
D=a.updateHolder(c[13],D)
C=c[60]
M=c[40]
F=c[61]
D.Ia.prototype={
iw(d){return Math.pow(2,-10*d)*Math.sin((d-0.1)*6.283185307179586/0.4)+1},
k(d){return"ElasticOutCurve(0.4)"}}
D.oK.prototype={
D(d){var x,w=null,v=A.bv(30),u=y.e,t=A.b([A.db(w,H.dW(A.aW(B.t,C.VL,B.l,B.k,w,60,w,w,60),M.ty),w,w,0,w,w,w)],u),s=A.b([A.db(w,H.dW(A.aW(B.t,C.Vo,B.l,B.k,w,60,w,w,60),C.Mg),w,w,w,0,w,w)],u),r=y.c,q=A.b([F.f9.hV(0.6),F.f8.hV(0.6)],r)
q=A.db(-10,H.dW(A.aW(B.bj,C.yQ,B.l,w,new A.b8(w,w,w,A.bv(20),w,new A.dM(E.dI,E.dJ,B.aj,q,w,w),B.D),160,w,C.mo,280),C.Mh),w,w,w,w,w,w)
x=A.b([F.f9.hV(0.8),F.f8.hV(0.8)],r)
u=A.b([q,A.db(-5,H.dW(A.aW(B.bj,C.yQ,B.l,w,new A.b8(w,w,w,A.bv(25),w,new A.dM(E.dI,E.dJ,B.aj,x,w,w),B.D),180,w,C.mo,315),C.Mc),w,w,w,w,w,w)],u)
return G.dO(G.cT(w,v,A.aW(B.t,C.VE,B.l,w,new A.b8(w,w,w,w,w,new A.dM(E.dI,E.dJ,B.aj,A.b([F.f9.hV(0.9),F.f8.hV(0.9)],r),w,w),B.D),200,w,w,350),new G.fh(t,s,u),I.br,I.a4,w,w,K.bO,C.W7,w),"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nTilt(\n  borderRadius: BorderRadius.circular(30),\n  tiltConfig: const TiltConfig(\n    angle: 20,\n    leaveDuration: Duration(seconds: 1),\n    leaveCurve: Curves.elasticOut,\n  ),\n  shadowConfig: const ShadowConfig(disable: true),\n  childLayout: ChildLayout(\n    outer: [\n      Positioned(\n        left: 0,\n        child: TiltParallax(\n          size: const Offset(40, 40),\n          child: Container(\n            width: 60,\n            height: 60,\n            alignment: Alignment.center,\n            color: Colors.black,\n            child: const Text(\n              'outer',\n              style: TextStyle(\n                fontSize: 20,\n                color: Colors.white,\n              ),\n            ),\n          ),\n        ),\n      ),\n    ],\n    inner: [\n      Positioned(\n        right: 0,\n        child: TiltParallax(\n          size: const Offset(-40, -40),\n          child: Container(\n            width: 60,\n            height: 60,\n            alignment: Alignment.center,\n            color: Colors.black,\n            child: const Text(\n              'inner',\n              style: TextStyle(\n                fontSize: 20,\n                color: Colors.white,\n              ),\n            ),\n          ),\n        ),\n      ),\n    ],\n    behind: [\n      Positioned(\n        bottom: -10,\n        child: TiltParallax(\n          size: const Offset(-50, -50),\n          child: Container(\n            width: 350 * 0.8,\n            height: 200 * 0.8,\n            alignment: Alignment.bottomCenter,\n            padding: const EdgeInsets.only(bottom: 4),\n            decoration: BoxDecoration(\n              gradient: LinearGradient(\n                begin: Alignment.topRight,\n                end: Alignment.bottomLeft,\n                colors: [\n                  const Color(0xFF80d0c7).withValues(alpha: 0.6),\n                  const Color(0xFF13547a).withValues(alpha: 0.6),\n                ],\n              ),\n              borderRadius: BorderRadius.circular(20),\n            ),\n            child: const Text(\n              'behind',\n              style: TextStyle(\n                fontSize: 18,\n                color: Colors.white,\n              ),\n            ),\n          ),\n        ),\n      ),\n      Positioned(\n        bottom: -5,\n        child: TiltParallax(\n          size: const Offset(-25, -25),\n          child: Container(\n            width: 350 * 0.9,\n            height: 200 * 0.9,\n            alignment: Alignment.bottomCenter,\n            padding: const EdgeInsets.only(bottom: 4),\n            decoration: BoxDecoration(\n              gradient: LinearGradient(\n                begin: Alignment.topRight,\n                end: Alignment.bottomLeft,\n                colors: [\n                  const Color(0xFF80d0c7).withValues(alpha: 0.8),\n                  const Color(0xFF13547a).withValues(alpha: 0.8),\n                ],\n              ),\n              borderRadius: BorderRadius.circular(25),\n            ),\n            child: const Text(\n              'behind',\n              style: TextStyle(\n                fontSize: 18,\n                color: Colors.white,\n              ),\n            ),\n          ),\n        ),\n      ),\n    ],\n  ),\n  child: Container(\n    width: 350,\n    height: 200,\n    alignment: Alignment.center,\n    decoration: BoxDecoration(\n      gradient: LinearGradient(\n        begin: Alignment.topRight,\n        end: Alignment.bottomLeft,\n        colors: [\n          const Color(0xFF80d0c7).withValues(alpha: 0.9),\n          const Color(0xFF13547a).withValues(alpha: 0.9),\n        ],\n      ),\n    ),\n    child: const Text(\n      'child',\n      style: TextStyle(\n        fontSize: 20,\n        color: Colors.white,\n      ),\n    ),\n  ),\n),\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",500,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/layout.dart","Layout",w)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(D.Ia,A.df)
x(D.oK,A.W)})()
A.cr(b.typeUniverse,JSON.parse('{"Ia":{"df":[]},"oK":{"W":[],"c":[]}}'))
var y={c:A.P("n<j>"),e:A.P("n<c>")};(function constants(){C.mo=new A.ag(0,0,0,4)
C.Mc=new A.f(-25,-25)
C.Mg=new A.f(-40,-40)
C.Mh=new A.f(-50,-50)
C.Vo=new A.bf("inner",null,B.ds,null,null,null,null)
C.yQ=new A.bf("behind",null,L.yL,null,null,null,null)
C.VE=new A.bf("child",null,B.ds,null,null,null,null)
C.VL=new A.bf("outer",null,B.ds,null,null,null,null)
C.AI=new D.Ia()
C.W7=new G.dV(!1,null,20,null,!1,null,!0,!0,!0,!0,B.bW,C.AI)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_36",e:"endPart",h:b})})($__dart_deferred_initializers__,"Kp78OTOy1XSMffefFDm6axz1arg=");