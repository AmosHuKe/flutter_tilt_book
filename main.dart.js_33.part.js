((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_33",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,G,D,E,F={
aF_(){return new F.oO(null)},
oO:function oO(d){this.a=d}},C,I,K,L,H
A=c[0]
B=c[2]
G=c[41]
D=c[34]
E=c[32]
F=a.updateHolder(c[12],F)
C=c[60]
I=c[56]
K=c[33]
L=c[55]
H=c[61]
F.oO.prototype={
E(d){var x,w,v,u=null,t=A.bI(20),s=A.j1(B.m,-1,4),r=A.bI(14)
r=E.eU(A.aX(u,u,B.l,u,new A.bi(u,u,A.j1(B.m,-1,2.8),r,u,u,B.C),210,u,u,210),C.tE)
x=A.bI(16)
x=E.eU(A.aX(u,u,B.l,u,new A.bi(u,u,A.j1(B.m,-1,3.2),x,u,u,B.C),240,u,u,240),L.tD)
w=A.bI(18)
v=y.a
w=D.d7(s,t,C.yz,new D.h0(B.ac,C.JC,A.b([r,x,E.eU(A.aX(u,u,B.l,u,new A.bi(u,u,A.j1(B.m,-1,3.6),w,u,u,B.C),270,u,u,270),C.MA)],v)),H.ee,u,u,G.bY,C.Wt,u)
x=A.bI(48)
r=A.j1(B.m,-1,4)
t=E.eU(A.aX(u,u,B.l,u,C.lg,64,u,u,64),B.h0)
s=A.j1(B.m,-1,4)
return D.e2(A.l5(B.hM,A.b([w,D.d7(r,x,C.yz,new D.h0(B.ac,A.b([t,E.eU(A.aX(u,A.fv(E.eU(A.aX(u,u,B.l,u,C.lg,32,u,u,32),C.Mg),u,u),B.M,u,new A.bi(B.i,u,s,u,u,u,B.cZ),64,u,u,64),I.tB)],v),B.ac),H.ee,u,u,G.bY,C.Wr,u)],v),B.hM,64,64),"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nWrap(\n  spacing: 64,\n  runSpacing: 64,\n  alignment: WrapAlignment.center,\n  runAlignment: WrapAlignment.center,\n  children: [\n    /// Example 1\n    Tilt(\n      borderRadius: BorderRadius.circular(20),\n      border: Border.all(width: 4),\n      tiltConfig: const TiltConfig(\n        leaveCurve: Curves.easeInOutCubicEmphasized,\n      ),\n      lightConfig: const LightConfig(disable: true),\n      shadowConfig: const ShadowConfig(disable: true),\n      childLayout: ChildLayout(\n        inner: const [\n          TiltParallax(\n            size: Offset(-30, -30),\n            child: Text(\n              'Flutter Tilt',\n              style: TextStyle(\n                fontSize: 14,\n                fontWeight: FontWeight.bold,\n                color: Colors.black,\n              ),\n            ),\n          ),\n        ],\n        behind: [\n          TiltParallax(\n            size: const Offset(-30, -30),\n            child: Container(\n              width: 300 * 0.7,\n              height: 300 * 0.7,\n              decoration: BoxDecoration(\n                borderRadius: BorderRadius.circular(20 * 0.7),\n                border: Border.all(width: 4 * 0.7),\n              ),\n            ),\n          ),\n          TiltParallax(\n            size: const Offset(-20, -20),\n            child: Container(\n              width: 300 * 0.8,\n              height: 300 * 0.8,\n              decoration: BoxDecoration(\n                borderRadius: BorderRadius.circular(20 * 0.8),\n                border: Border.all(width: 4 * 0.8),\n              ),\n            ),\n          ),\n          TiltParallax(\n            size: const Offset(-10, -10),\n            child: Container(\n              width: 300 * 0.9,\n              height: 300 * 0.9,\n              decoration: BoxDecoration(\n                borderRadius: BorderRadius.circular(20 * 0.9),\n                border: Border.all(width: 4 * 0.9),\n              ),\n            ),\n          ),\n        ],\n      ),\n      child: const SizedBox(width: 300, height: 300),\n    ),\n\n    /// Example 2\n    Tilt(\n      borderRadius: BorderRadius.circular(48),\n      border: Border.all(width: 4),\n      tiltConfig: const TiltConfig(\n        initial: Offset(-0.4, -0.4),\n        enableReverse: true,\n        leaveCurve: Curves.easeInOutCubicEmphasized,\n        leaveDuration: Duration(milliseconds: 600),\n      ),\n      lightConfig: const LightConfig(disable: true),\n      shadowConfig: const ShadowConfig(disable: true),\n      childLayout: ChildLayout(\n        inner: [\n          TiltParallax(\n            size: const Offset(10, 10),\n            child: Container(\n              width: 64,\n              height: 64,\n              decoration: const BoxDecoration(\n                color: Colors.black,\n                shape: BoxShape.circle,\n              ),\n            ),\n          ),\n          TiltParallax(\n            size: const Offset(20, 20),\n            child: Container(\n              width: 64,\n              height: 64,\n              decoration: BoxDecoration(\n                color: Colors.white,\n                border: Border.all(width: 4),\n                shape: BoxShape.circle,\n              ),\n              clipBehavior: Clip.hardEdge,\n              child: Center(\n                child: TiltParallax(\n                  size: const Offset(15, 15),\n                  child: Container(\n                    width: 32,\n                    height: 32,\n                    decoration: const BoxDecoration(\n                      color: Colors.black,\n                      shape: BoxShape.circle,\n                    ),\n                  ),\n                ),\n              ),\n            ),\n          ),\n        ],\n      ),\n      child: const SizedBox(width: 300, height: 300),\n    ),\n  ],\n),\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",1200,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/layout2.dart","Layout",u)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(F.oO,A.W)})()
A.cD(b.typeUniverse,JSON.parse('{"oO":{"W":[],"c":[]}}'))
var y={a:A.N("o<c>")};(function constants(){var x=a.makeConstList
C.lg=new A.bi(B.m,null,null,null,null,null,B.cZ)
C.RA=new A.j(!0,B.m,null,null,null,null,14,B.ai,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.W0=new A.b4("Flutter Tilt",null,C.RA,null,null,null,null,null)
C.tE=new A.f(-30,-30)
C.WH=new K.n2(C.W0,C.tE,null,null)
C.JC=A.b(x([C.WH]),y.a)
C.Mg=new A.f(15,15)
C.MA=new A.f(-10,-10)
C.yz=new A.e8(300,300,null,null)
C.Ms=new A.f(-0.4,-0.4)
C.Wr=new D.dX(!1,C.Ms,10,null,!0,null,!0,!0,!0,!0,B.bS,B.hF)
C.Wt=new D.dX(!1,null,10,null,!1,null,!0,!0,!0,!0,B.W,B.hF)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_33",e:"endPart",h:b})})($__dart_deferred_initializers__,"wUvJ19BEe7Y1lwzG7BASNu2t/Rw=");