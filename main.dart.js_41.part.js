((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_41",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,G,H,D,I,E,K,F={
aKm(){return new F.py(null)},
py:function py(d){this.a=d}},C,L,M,N
A=c[0]
B=c[2]
G=c[63]
H=c[42]
D=c[35]
I=c[38]
E=c[33]
K=c[34]
F=a.updateHolder(c[13],F)
C=c[62]
L=c[57]
M=c[64]
N=c[56]
F.py.prototype={
G(d){var x,w,v,u=null,t=A.bB(20),s=A.jh(B.l,-1,4),r=A.bB(14)
r=E.e8(A.b_(u,u,B.m,u,new A.bd(u,u,A.jh(B.l,-1,2.8),r,u,u,B.E),210,u,u,210),C.ud)
x=A.bB(16)
x=E.e8(A.b_(u,u,B.m,u,new A.bd(u,u,A.jh(B.l,-1,3.2),x,u,u,B.E),240,u,u,240),N.uc)
w=A.bB(18)
v=y.a
w=D.d3(s,t,C.z9,new D.fC(B.ae,C.Jk,A.b([r,x,E.e8(A.b_(u,u,B.m,u,new A.bd(u,u,A.jh(B.l,-1,3.6),w,u,u,B.E),270,u,u,270),C.N3)],v)),G.dr,I.a7,u,u,H.c1,C.X2,u)
x=A.bB(48)
r=A.jh(B.l,-1,4)
t=E.e8(A.b_(u,u,B.m,u,C.lG,64,u,u,64),M.hw)
s=A.jh(B.l,-1,4)
return D.e0(A.k_(B.fd,A.b([w,D.d3(r,x,C.z9,new D.fC(B.ae,A.b([t,E.e8(A.b_(u,A.fB(E.e8(A.b_(u,u,B.m,u,C.lG,32,u,u,32),C.MK),u,u),B.O,u,new A.bd(B.j,u,s,u,u,u,B.d6),64,u,u,64),L.ua)],v),B.ae),G.dr,I.a7,u,u,H.c1,C.X0,u)],v),B.fd,64,64),"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nWrap(\n  spacing: 64,\n  runSpacing: 64,\n  alignment: WrapAlignment.center,\n  runAlignment: WrapAlignment.center,\n  children: [\n    /// Example 1\n    Tilt(\n      borderRadius: BorderRadius.circular(20),\n      border: Border.all(width: 4),\n      tiltConfig: const TiltConfig(\n        leaveCurve: Curves.easeInOutCubicEmphasized,\n      ),\n      lightConfig: const LightConfig(disable: true),\n      shadowConfig: const ShadowConfig(disable: true),\n      childLayout: ChildLayout(\n        inner: const [\n          TiltParallax(\n            size: Offset(-30, -30),\n            child: Text(\n              'Flutter Tilt',\n              style: TextStyle(\n                fontSize: 14,\n                fontWeight: FontWeight.bold,\n                color: Colors.black,\n              ),\n            ),\n          ),\n        ],\n        behind: [\n          TiltParallax(\n            size: const Offset(-30, -30),\n            child: Container(\n              width: 300 * 0.7,\n              height: 300 * 0.7,\n              decoration: BoxDecoration(\n                borderRadius: BorderRadius.circular(20 * 0.7),\n                border: Border.all(width: 4 * 0.7),\n              ),\n            ),\n          ),\n          TiltParallax(\n            size: const Offset(-20, -20),\n            child: Container(\n              width: 300 * 0.8,\n              height: 300 * 0.8,\n              decoration: BoxDecoration(\n                borderRadius: BorderRadius.circular(20 * 0.8),\n                border: Border.all(width: 4 * 0.8),\n              ),\n            ),\n          ),\n          TiltParallax(\n            size: const Offset(-10, -10),\n            child: Container(\n              width: 300 * 0.9,\n              height: 300 * 0.9,\n              decoration: BoxDecoration(\n                borderRadius: BorderRadius.circular(20 * 0.9),\n                border: Border.all(width: 4 * 0.9),\n              ),\n            ),\n          ),\n        ],\n      ),\n      child: const SizedBox(width: 300, height: 300),\n    ),\n\n    /// Example 2\n    Tilt(\n      borderRadius: BorderRadius.circular(48),\n      border: Border.all(width: 4),\n      tiltConfig: const TiltConfig(\n        initial: Offset(-0.4, -0.4),\n        enableReverse: true,\n        leaveCurve: Curves.easeInOutCubicEmphasized,\n        leaveDuration: Duration(milliseconds: 600),\n      ),\n      lightConfig: const LightConfig(disable: true),\n      shadowConfig: const ShadowConfig(disable: true),\n      childLayout: ChildLayout(\n        inner: [\n          TiltParallax(\n            size: const Offset(10, 10),\n            child: Container(\n              width: 64,\n              height: 64,\n              decoration: const BoxDecoration(\n                color: Colors.black,\n                shape: BoxShape.circle,\n              ),\n            ),\n          ),\n          TiltParallax(\n            size: const Offset(20, 20),\n            child: Container(\n              width: 64,\n              height: 64,\n              decoration: BoxDecoration(\n                color: Colors.white,\n                border: Border.all(width: 4),\n                shape: BoxShape.circle,\n              ),\n              clipBehavior: Clip.hardEdge,\n              child: Center(\n                child: TiltParallax(\n                  size: const Offset(15, 15),\n                  child: Container(\n                    width: 32,\n                    height: 32,\n                    decoration: const BoxDecoration(\n                      color: Colors.black,\n                      shape: BoxShape.circle,\n                    ),\n                  ),\n                ),\n              ),\n            ),\n          ),\n        ],\n      ),\n      child: const SizedBox(width: 300, height: 300),\n    ),\n  ],\n),\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",1200,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/layout2.dart","Layout",u)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(F.py,A.W)})()
A.cC(b.typeUniverse,JSON.parse('{"py":{"W":[],"c":[]}}'))
var y={a:A.R("l<c>")};(function constants(){var x=a.makeConstList
C.lG=new A.bd(B.l,null,null,null,null,null,B.d6)
C.Tw=new A.j(!0,B.l,null,null,null,null,14,B.ak,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.WB=new A.b5("Flutter Tilt",null,C.Tw,null,null,null,null,null)
C.ud=new A.f(-30,-30)
C.Xc=new K.nA(C.WB,C.ud,null,null)
C.Jk=A.b(x([C.Xc]),y.a)
C.MK=new A.f(15,15)
C.N3=new A.f(-10,-10)
C.z9=new A.er(300,300,null,null)
C.MW=new A.f(-0.4,-0.4)
C.X0=new D.e7(!1,C.MW,10,null,!0,null,!0,!0,!0,!0,B.bU,B.i5)
C.X2=new D.e7(!1,null,10,null,!1,null,!0,!0,!0,!0,B.a1,B.i5)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_41",e:"endPart",h:b})})($__dart_deferred_initializers__,"KQpEE6NAZT/zZ3eiIb3XQE3eziU=");