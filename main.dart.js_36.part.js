((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_36",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,K,G,I,H,L,E,D={J9:function J9(){},
aKj(){return new D.pz(null)},
pz:function pz(d){this.a=d}},C,M,F
A=c[0]
B=c[2]
K=c[42]
G=c[35]
I=c[38]
H=c[33]
L=c[49]
E=c[45]
D=a.updateHolder(c[12],D)
C=c[60]
M=c[40]
F=c[61]
D.J9.prototype={
k_(d){return Math.pow(2,-10*d)*Math.sin((d-0.1)*6.283185307179586/0.4)+1},
k(d){return"ElasticOutCurve(0.4)"}}
D.pz.prototype={
G(d){var x,w=null,v=A.bB(30),u=y.e,t=A.b([A.dn(w,H.e8(A.b_(B.u,C.Wo,B.m,B.l,w,60,w,w,60),M.ub),w,w,0,w,w,w)],u),s=A.b([A.dn(w,H.e8(A.b_(B.u,C.WI,B.m,B.l,w,60,w,w,60),C.Na),w,w,w,0,w,w)],u),r=y.c,q=A.b([F.fA.ir(0.6),F.fz.ir(0.6)],r)
q=A.dn(-10,H.e8(A.b_(B.bw,C.zJ,B.m,w,new A.bd(w,w,w,A.bB(20),w,new A.dY(E.e3,E.e4,B.ao,q,w,w),B.E),160,w,C.mX,280),C.Nb),w,w,w,w,w,w)
x=A.b([F.fA.ir(0.8),F.fz.ir(0.8)],r)
u=A.b([q,A.dn(-5,H.e8(A.b_(B.bw,C.zJ,B.m,w,new A.bd(w,w,w,A.bB(25),w,new A.dY(E.e3,E.e4,B.ao,x,w,w),B.E),180,w,C.mX,315),C.N6),w,w,w,w,w,w)],u)
return G.e0(G.d3(w,v,A.b_(B.u,C.Ws,B.m,w,new A.bd(w,w,w,w,w,new A.dY(E.e3,E.e4,B.ao,A.b([F.fA.ir(0.9),F.fz.ir(0.9)],r),w,w),B.E),200,w,w,350),new G.fC(t,s,u),I.bF,I.a7,w,w,K.c1,C.X5,w),"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nTilt(\n  borderRadius: BorderRadius.circular(30),\n  tiltConfig: const TiltConfig(\n    angle: 20,\n    leaveDuration: Duration(seconds: 1),\n    leaveCurve: Curves.elasticOut,\n  ),\n  shadowConfig: const ShadowConfig(disable: true),\n  childLayout: ChildLayout(\n    outer: [\n      Positioned(\n        left: 0,\n        child: TiltParallax(\n          size: const Offset(40, 40),\n          child: Container(\n            width: 60,\n            height: 60,\n            alignment: Alignment.center,\n            color: Colors.black,\n            child: const Text(\n              'outer',\n              style: TextStyle(\n                fontSize: 20,\n                color: Colors.white,\n              ),\n            ),\n          ),\n        ),\n      ),\n    ],\n    inner: [\n      Positioned(\n        right: 0,\n        child: TiltParallax(\n          size: const Offset(-40, -40),\n          child: Container(\n            width: 60,\n            height: 60,\n            alignment: Alignment.center,\n            color: Colors.black,\n            child: const Text(\n              'inner',\n              style: TextStyle(\n                fontSize: 20,\n                color: Colors.white,\n              ),\n            ),\n          ),\n        ),\n      ),\n    ],\n    behind: [\n      Positioned(\n        bottom: -10,\n        child: TiltParallax(\n          size: const Offset(-50, -50),\n          child: Container(\n            width: 350 * 0.8,\n            height: 200 * 0.8,\n            alignment: Alignment.bottomCenter,\n            padding: const EdgeInsets.only(bottom: 4),\n            decoration: BoxDecoration(\n              gradient: LinearGradient(\n                begin: Alignment.topRight,\n                end: Alignment.bottomLeft,\n                colors: [\n                  const Color(0xFF80d0c7).withValues(alpha: 0.6),\n                  const Color(0xFF13547a).withValues(alpha: 0.6),\n                ],\n              ),\n              borderRadius: BorderRadius.circular(20),\n            ),\n            child: const Text(\n              'behind',\n              style: TextStyle(\n                fontSize: 18,\n                color: Colors.white,\n              ),\n            ),\n          ),\n        ),\n      ),\n      Positioned(\n        bottom: -5,\n        child: TiltParallax(\n          size: const Offset(-25, -25),\n          child: Container(\n            width: 350 * 0.9,\n            height: 200 * 0.9,\n            alignment: Alignment.bottomCenter,\n            padding: const EdgeInsets.only(bottom: 4),\n            decoration: BoxDecoration(\n              gradient: LinearGradient(\n                begin: Alignment.topRight,\n                end: Alignment.bottomLeft,\n                colors: [\n                  const Color(0xFF80d0c7).withValues(alpha: 0.8),\n                  const Color(0xFF13547a).withValues(alpha: 0.8),\n                ],\n              ),\n              borderRadius: BorderRadius.circular(25),\n            ),\n            child: const Text(\n              'behind',\n              style: TextStyle(\n                fontSize: 18,\n                color: Colors.white,\n              ),\n            ),\n          ),\n        ),\n      ),\n    ],\n  ),\n  child: Container(\n    width: 350,\n    height: 200,\n    alignment: Alignment.center,\n    decoration: BoxDecoration(\n      gradient: LinearGradient(\n        begin: Alignment.topRight,\n        end: Alignment.bottomLeft,\n        colors: [\n          const Color(0xFF80d0c7).withValues(alpha: 0.9),\n          const Color(0xFF13547a).withValues(alpha: 0.9),\n        ],\n      ),\n    ),\n    child: const Text(\n      'child',\n      style: TextStyle(\n        fontSize: 20,\n        color: Colors.white,\n      ),\n    ),\n  ),\n),\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",500,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/layout.dart","Layout",w)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(D.J9,A.dE)
x(D.pz,A.W)})()
A.cC(b.typeUniverse,JSON.parse('{"J9":{"dE":[]},"pz":{"W":[],"c":[]}}'))
var y={c:A.R("m<l>"),e:A.R("m<c>")};(function constants(){C.mX=new A.ag(0,0,0,4)
C.N6=new A.f(-25,-25)
C.Na=new A.f(-40,-40)
C.Nb=new A.f(-50,-50)
C.Wo=new A.b5("outer",null,B.dP,null,null,null,null,null)
C.Ws=new A.b5("child",null,B.dP,null,null,null,null,null)
C.WI=new A.b5("inner",null,B.dP,null,null,null,null,null)
C.zJ=new A.b5("behind",null,L.zC,null,null,null,null,null)
C.BK=new D.J9()
C.X5=new G.e7(!1,null,20,null,!1,null,!0,!0,!0,!0,B.cb,C.BK)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_36",e:"endPart",h:b})})($__dart_deferred_initializers__,"PzhScjMmB3pH/OHYeB8PX/eQZdU=");