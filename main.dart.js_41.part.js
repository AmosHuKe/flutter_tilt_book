((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_41",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,H,I,D,G,E,K,F={
aHR(){return new F.oI(null)},
oI:function oI(d){this.a=d}},C,L,M,N
A=c[0]
B=c[2]
H=c[63]
I=c[42]
D=c[35]
G=c[38]
E=c[33]
K=c[34]
F=a.updateHolder(c[12],F)
C=c[62]
L=c[57]
M=c[64]
N=c[56]
F.oI.prototype={
D(d){var x,w,v,u=null,t=A.bv(20),s=D.iL(B.k,-1,4),r=A.bv(14)
r=E.dW(A.aW(u,u,B.l,u,new A.b8(u,u,D.iL(B.k,-1,2.8),r,u,u,B.D),210,u,u,210),C.tA)
x=A.bv(16)
x=E.dW(A.aW(u,u,B.l,u,new A.b8(u,u,D.iL(B.k,-1,3.2),x,u,u,B.D),240,u,u,240),N.tz)
w=A.bv(18)
v=y.a
w=D.cT(s,t,C.yo,new D.fh(B.a9,C.HK,A.b([r,x,E.dW(A.aW(u,u,B.l,u,new A.b8(u,u,D.iL(B.k,-1,3.6),w,u,u,B.D),270,u,u,270),C.M9)],v)),H.d9,G.a4,u,u,I.bO,C.W4,u)
x=A.bv(48)
r=D.iL(B.k,-1,4)
t=E.dW(A.aW(u,u,B.l,u,C.l_,64,u,u,64),M.fU)
s=D.iL(B.k,-1,4)
return D.dO(A.jC(B.eN,A.b([w,D.cT(r,x,C.yo,new D.fh(B.a9,A.b([t,E.dW(A.aW(u,A.hg(E.dW(A.aW(u,u,B.l,u,C.l_,32,u,u,32),C.LQ),u,u),B.R,u,new A.b8(B.i,u,s,u,u,u,B.cV),64,u,u,64),L.tx)],v),B.a9),H.d9,G.a4,u,u,I.bO,C.W2,u)],v),B.eN,64,64),"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nWrap(\n  spacing: 64,\n  runSpacing: 64,\n  alignment: WrapAlignment.center,\n  runAlignment: WrapAlignment.center,\n  children: [\n    /// Example 1\n    Tilt(\n      borderRadius: BorderRadius.circular(20),\n      border: Border.all(width: 4),\n      tiltConfig: const TiltConfig(\n        leaveCurve: Curves.easeInOutCubicEmphasized,\n      ),\n      lightConfig: const LightConfig(disable: true),\n      shadowConfig: const ShadowConfig(disable: true),\n      childLayout: ChildLayout(\n        inner: const [\n          TiltParallax(\n            size: Offset(-30, -30),\n            child: Text(\n              'Flutter Tilt',\n              style: TextStyle(\n                fontSize: 14,\n                fontWeight: FontWeight.bold,\n                color: Colors.black,\n              ),\n            ),\n          ),\n        ],\n        behind: [\n          TiltParallax(\n            size: const Offset(-30, -30),\n            child: Container(\n              width: 300 * 0.7,\n              height: 300 * 0.7,\n              decoration: BoxDecoration(\n                borderRadius: BorderRadius.circular(20 * 0.7),\n                border: Border.all(width: 4 * 0.7),\n              ),\n            ),\n          ),\n          TiltParallax(\n            size: const Offset(-20, -20),\n            child: Container(\n              width: 300 * 0.8,\n              height: 300 * 0.8,\n              decoration: BoxDecoration(\n                borderRadius: BorderRadius.circular(20 * 0.8),\n                border: Border.all(width: 4 * 0.8),\n              ),\n            ),\n          ),\n          TiltParallax(\n            size: const Offset(-10, -10),\n            child: Container(\n              width: 300 * 0.9,\n              height: 300 * 0.9,\n              decoration: BoxDecoration(\n                borderRadius: BorderRadius.circular(20 * 0.9),\n                border: Border.all(width: 4 * 0.9),\n              ),\n            ),\n          ),\n        ],\n      ),\n      child: const SizedBox(width: 300, height: 300),\n    ),\n\n    /// Example 2\n    Tilt(\n      borderRadius: BorderRadius.circular(48),\n      border: Border.all(width: 4),\n      tiltConfig: const TiltConfig(\n        initial: Offset(-0.4, -0.4),\n        enableReverse: true,\n        leaveCurve: Curves.easeInOutCubicEmphasized,\n        leaveDuration: Duration(milliseconds: 600),\n      ),\n      lightConfig: const LightConfig(disable: true),\n      shadowConfig: const ShadowConfig(disable: true),\n      childLayout: ChildLayout(\n        inner: [\n          TiltParallax(\n            size: const Offset(10, 10),\n            child: Container(\n              width: 64,\n              height: 64,\n              decoration: const BoxDecoration(\n                color: Colors.black,\n                shape: BoxShape.circle,\n              ),\n            ),\n          ),\n          TiltParallax(\n            size: const Offset(20, 20),\n            child: Container(\n              width: 64,\n              height: 64,\n              decoration: BoxDecoration(\n                color: Colors.white,\n                border: Border.all(width: 4),\n                shape: BoxShape.circle,\n              ),\n              clipBehavior: Clip.hardEdge,\n              child: Center(\n                child: TiltParallax(\n                  size: const Offset(15, 15),\n                  child: Container(\n                    width: 32,\n                    height: 32,\n                    decoration: const BoxDecoration(\n                      color: Colors.black,\n                      shape: BoxShape.circle,\n                    ),\n                  ),\n                ),\n              ),\n            ),\n          ),\n        ],\n      ),\n      child: const SizedBox(width: 300, height: 300),\n    ),\n  ],\n),\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",1200,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/layout2.dart","Layout",u)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(F.oI,A.W)})()
A.cr(b.typeUniverse,JSON.parse('{"oI":{"W":[],"c":[]}}'))
var y={a:A.P("n<c>")};(function constants(){var x=a.makeConstList
C.l_=new A.b8(B.k,null,null,null,null,null,B.cV)
C.SC=new A.i(!0,B.k,null,null,null,null,14,B.ag,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.VH=new A.bf("Flutter Tilt",null,C.SC,null,null,null,null)
C.tA=new A.f(-30,-30)
C.Wf=new K.mQ(C.VH,C.tA,null,null)
C.HK=A.b(x([C.Wf]),y.a)
C.LQ=new A.f(15,15)
C.M9=new A.f(-10,-10)
C.yo=new A.ex(300,300,null,null)
C.M1=new A.f(-0.4,-0.4)
C.W2=new D.dV(!1,C.M1,10,null,!0,null,!0,!0,!0,!0,B.bG,G.hv)
C.W4=new D.dV(!1,null,10,null,!1,null,!0,!0,!0,!0,B.a0,G.hv)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_41",e:"endPart",h:b})})($__dart_deferred_initializers__,"OIRqqxbmRoGRd6zFBzs6bCCfbIU=");