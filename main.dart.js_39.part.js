((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_39",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,G,H,D,I,E,F={
aKn(){return new F.po(null)},
po:function po(d){this.a=d}},C,K,L,M,N
A=c[0]
B=c[2]
G=c[62]
H=c[42]
D=c[35]
I=c[38]
E=c[33]
F=a.updateHolder(c[13],F)
C=c[61]
K=c[34]
L=c[57]
M=c[63]
N=c[56]
F.po.prototype={
E(d){var x,w,v,u=null,t=A.bM(20),s=A.jj(B.l,-1,4),r=A.bM(14)
r=E.e9(A.aY(u,u,B.k,u,new A.b6(u,u,A.jj(B.l,-1,2.8),r,u,u,B.A),210,u,u,210),C.u0)
x=A.bM(16)
x=E.e9(A.aY(u,u,B.k,u,new A.b6(u,u,A.jj(B.l,-1,3.2),x,u,u,B.A),240,u,u,240),N.u_)
w=A.bM(18)
v=y.a
w=D.d6(s,t,C.yX,new D.fK(B.ae,C.K2,A.b([r,x,E.e9(A.aY(u,u,B.k,u,new A.b6(u,u,A.jj(B.l,-1,3.6),w,u,u,B.A),270,u,u,270),C.MW)],v)),G.dn,I.a6,u,u,H.bX,C.WQ,u)
x=A.bM(48)
r=A.jj(B.l,-1,4)
t=E.e9(A.aY(u,u,B.k,u,C.lB,64,u,u,64),M.hl)
s=A.jj(B.l,-1,4)
return D.e0(A.k2(B.fa,A.b([w,D.d6(r,x,C.yX,new D.fK(B.ae,A.b([t,E.e9(A.aY(u,A.fJ(E.e9(A.aY(u,u,B.k,u,C.lB,32,u,u,32),C.MC),u,u),B.M,u,new A.b6(B.j,u,s,u,u,u,B.d2),64,u,u,64),L.tY)],v),B.ae),G.dn,I.a6,u,u,H.bX,C.WO,u)],v),B.fa,64,64),"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nWrap(\n  spacing: 64,\n  runSpacing: 64,\n  alignment: WrapAlignment.center,\n  runAlignment: WrapAlignment.center,\n  children: [\n    /// Example 1\n    Tilt(\n      borderRadius: BorderRadius.circular(20),\n      border: Border.all(width: 4),\n      tiltConfig: const TiltConfig(\n        leaveCurve: Curves.easeInOutCubicEmphasized,\n      ),\n      lightConfig: const LightConfig(disable: true),\n      shadowConfig: const ShadowConfig(disable: true),\n      childLayout: ChildLayout(\n        inner: const [\n          TiltParallax(\n            size: Offset(-30, -30),\n            child: Text(\n              'Flutter Tilt',\n              style: TextStyle(\n                fontSize: 14,\n                fontWeight: FontWeight.bold,\n                color: Colors.black,\n              ),\n            ),\n          ),\n        ],\n        behind: [\n          TiltParallax(\n            size: const Offset(-30, -30),\n            child: Container(\n              width: 300 * 0.7,\n              height: 300 * 0.7,\n              decoration: BoxDecoration(\n                borderRadius: BorderRadius.circular(20 * 0.7),\n                border: Border.all(width: 4 * 0.7),\n              ),\n            ),\n          ),\n          TiltParallax(\n            size: const Offset(-20, -20),\n            child: Container(\n              width: 300 * 0.8,\n              height: 300 * 0.8,\n              decoration: BoxDecoration(\n                borderRadius: BorderRadius.circular(20 * 0.8),\n                border: Border.all(width: 4 * 0.8),\n              ),\n            ),\n          ),\n          TiltParallax(\n            size: const Offset(-10, -10),\n            child: Container(\n              width: 300 * 0.9,\n              height: 300 * 0.9,\n              decoration: BoxDecoration(\n                borderRadius: BorderRadius.circular(20 * 0.9),\n                border: Border.all(width: 4 * 0.9),\n              ),\n            ),\n          ),\n        ],\n      ),\n      child: const SizedBox(width: 300, height: 300),\n    ),\n\n    /// Example 2\n    Tilt(\n      borderRadius: BorderRadius.circular(48),\n      border: Border.all(width: 4),\n      tiltConfig: const TiltConfig(\n        initial: Offset(-0.4, -0.4),\n        enableReverse: true,\n        leaveCurve: Curves.easeInOutCubicEmphasized,\n        leaveDuration: Duration(milliseconds: 600),\n      ),\n      lightConfig: const LightConfig(disable: true),\n      shadowConfig: const ShadowConfig(disable: true),\n      childLayout: ChildLayout(\n        inner: [\n          TiltParallax(\n            size: const Offset(10, 10),\n            child: Container(\n              width: 64,\n              height: 64,\n              decoration: const BoxDecoration(\n                color: Colors.black,\n                shape: BoxShape.circle,\n              ),\n            ),\n          ),\n          TiltParallax(\n            size: const Offset(20, 20),\n            child: Container(\n              width: 64,\n              height: 64,\n              decoration: BoxDecoration(\n                color: Colors.white,\n                border: Border.all(width: 4),\n                shape: BoxShape.circle,\n              ),\n              clipBehavior: Clip.hardEdge,\n              child: Center(\n                child: TiltParallax(\n                  size: const Offset(15, 15),\n                  child: Container(\n                    width: 32,\n                    height: 32,\n                    decoration: const BoxDecoration(\n                      color: Colors.black,\n                      shape: BoxShape.circle,\n                    ),\n                  ),\n                ),\n              ),\n            ),\n          ),\n        ],\n      ),\n      child: const SizedBox(width: 300, height: 300),\n    ),\n  ],\n),\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",1200,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/layout2.dart","Layout",u)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(F.po,A.Y)})()
A.cD(b.typeUniverse,JSON.parse('{"po":{"Y":[],"c":[]}}'))
var y={a:A.M("o<c>")};(function constants(){var x=a.makeConstList
C.lB=new A.b6(B.l,null,null,null,null,null,B.d2)
C.RV=new A.l(!0,B.l,null,null,null,null,14,B.aj,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.Wl=new A.b5("Flutter Tilt",null,C.RV,null,null,null,null,null)
C.u0=new A.f(-30,-30)
C.X2=new K.nw(C.Wl,C.u0,null,null)
C.K2=A.b(x([C.X2]),y.a)
C.MC=new A.f(15,15)
C.MW=new A.f(-10,-10)
C.yX=new A.er(300,300,null,null)
C.MO=new A.f(-0.4,-0.4)
C.WO=new D.e8(!1,C.MO,10,null,!0,null,!0,!0,!0,!0,B.bS,B.hY)
C.WQ=new D.e8(!1,null,10,null,!1,null,!0,!0,!0,!0,B.Z,B.hY)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_39",e:"endPart",h:b})})($__dart_deferred_initializers__,"a+QdSOIcTpfLaiTPFUsEeTnIEBc=");