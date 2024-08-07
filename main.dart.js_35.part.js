((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_35",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,G,H,D,E,F={
aK3(){return new F.pl(null)},
pl:function pl(d){this.a=d}},C,I,K,L,M
A=c[0]
B=c[2]
G=c[61]
H=c[41]
D=c[34]
E=c[32]
F=a.updateHolder(c[12],F)
C=c[60]
I=c[56]
K=c[33]
L=c[62]
M=c[55]
F.pl.prototype={
E(d){var x,w,v,u=null,t=A.bM(20),s=A.jg(B.l,-1,4),r=A.bM(14)
r=E.f3(A.b3(u,u,B.k,u,new A.bj(u,u,A.jg(B.l,-1,2.8),r,u,u,B.F),210,u,u,210),C.tW)
x=A.bM(16)
x=E.f3(A.b3(u,u,B.k,u,new A.bj(u,u,A.jg(B.l,-1,3.2),x,u,u,B.F),240,u,u,240),M.tV)
w=A.bM(18)
v=y.a
w=D.de(s,t,C.yS,new D.hd(B.ai,C.JZ,A.b([r,x,E.f3(A.b3(u,u,B.k,u,new A.bj(u,u,A.jg(B.l,-1,3.6),w,u,u,B.F),270,u,u,270),C.MS)],v)),G.eu,u,u,H.bW,C.WJ,u)
x=A.bM(48)
r=A.jg(B.l,-1,4)
t=E.f3(A.b3(u,u,B.k,u,C.ly,64,u,u,64),L.hl)
s=A.jg(B.l,-1,4)
return D.ed(A.lo(B.f9,A.b([w,D.de(r,x,C.yS,new D.hd(B.ai,A.b([t,E.f3(A.b3(u,A.fF(E.f3(A.b3(u,u,B.k,u,C.ly,32,u,u,32),C.My),u,u),B.M,u,new A.bj(B.j,u,s,u,u,u,B.d1),64,u,u,64),I.tT)],v),B.ai),G.eu,u,u,H.bW,C.WH,u)],v),B.f9,64,64),"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nWrap(\n  spacing: 64,\n  runSpacing: 64,\n  alignment: WrapAlignment.center,\n  runAlignment: WrapAlignment.center,\n  children: [\n    /// Example 1\n    Tilt(\n      borderRadius: BorderRadius.circular(20),\n      border: Border.all(width: 4),\n      tiltConfig: const TiltConfig(\n        leaveCurve: Curves.easeInOutCubicEmphasized,\n      ),\n      lightConfig: const LightConfig(disable: true),\n      shadowConfig: const ShadowConfig(disable: true),\n      childLayout: ChildLayout(\n        inner: const [\n          TiltParallax(\n            size: Offset(-30, -30),\n            child: Text(\n              'Flutter Tilt',\n              style: TextStyle(\n                fontSize: 14,\n                fontWeight: FontWeight.bold,\n                color: Colors.black,\n              ),\n            ),\n          ),\n        ],\n        behind: [\n          TiltParallax(\n            size: const Offset(-30, -30),\n            child: Container(\n              width: 300 * 0.7,\n              height: 300 * 0.7,\n              decoration: BoxDecoration(\n                borderRadius: BorderRadius.circular(20 * 0.7),\n                border: Border.all(width: 4 * 0.7),\n              ),\n            ),\n          ),\n          TiltParallax(\n            size: const Offset(-20, -20),\n            child: Container(\n              width: 300 * 0.8,\n              height: 300 * 0.8,\n              decoration: BoxDecoration(\n                borderRadius: BorderRadius.circular(20 * 0.8),\n                border: Border.all(width: 4 * 0.8),\n              ),\n            ),\n          ),\n          TiltParallax(\n            size: const Offset(-10, -10),\n            child: Container(\n              width: 300 * 0.9,\n              height: 300 * 0.9,\n              decoration: BoxDecoration(\n                borderRadius: BorderRadius.circular(20 * 0.9),\n                border: Border.all(width: 4 * 0.9),\n              ),\n            ),\n          ),\n        ],\n      ),\n      child: const SizedBox(width: 300, height: 300),\n    ),\n\n    /// Example 2\n    Tilt(\n      borderRadius: BorderRadius.circular(48),\n      border: Border.all(width: 4),\n      tiltConfig: const TiltConfig(\n        initial: Offset(-0.4, -0.4),\n        enableReverse: true,\n        leaveCurve: Curves.easeInOutCubicEmphasized,\n        leaveDuration: Duration(milliseconds: 600),\n      ),\n      lightConfig: const LightConfig(disable: true),\n      shadowConfig: const ShadowConfig(disable: true),\n      childLayout: ChildLayout(\n        inner: [\n          TiltParallax(\n            size: const Offset(10, 10),\n            child: Container(\n              width: 64,\n              height: 64,\n              decoration: const BoxDecoration(\n                color: Colors.black,\n                shape: BoxShape.circle,\n              ),\n            ),\n          ),\n          TiltParallax(\n            size: const Offset(20, 20),\n            child: Container(\n              width: 64,\n              height: 64,\n              decoration: BoxDecoration(\n                color: Colors.white,\n                border: Border.all(width: 4),\n                shape: BoxShape.circle,\n              ),\n              clipBehavior: Clip.hardEdge,\n              child: Center(\n                child: TiltParallax(\n                  size: const Offset(15, 15),\n                  child: Container(\n                    width: 32,\n                    height: 32,\n                    decoration: const BoxDecoration(\n                      color: Colors.black,\n                      shape: BoxShape.circle,\n                    ),\n                  ),\n                ),\n              ),\n            ),\n          ),\n        ],\n      ),\n      child: const SizedBox(width: 300, height: 300),\n    ),\n  ],\n),\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",1200,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/layout2.dart","Layout",u)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(F.pl,A.Y)})()
A.cJ(b.typeUniverse,JSON.parse('{"pl":{"Y":[],"c":[]}}'))
var y={a:A.M("o<c>")};(function constants(){var x=a.makeConstList
C.ly=new A.bj(B.l,null,null,null,null,null,B.d1)
C.RQ=new A.l(!0,B.l,null,null,null,null,14,B.am,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.Wg=new A.b5("Flutter Tilt",null,C.RQ,null,null,null,null,null)
C.tW=new A.f(-30,-30)
C.WX=new K.nt(C.Wg,C.tW,null,null)
C.JZ=A.b(x([C.WX]),y.a)
C.My=new A.f(15,15)
C.MS=new A.f(-10,-10)
C.yS=new A.ej(300,300,null,null)
C.MK=new A.f(-0.4,-0.4)
C.WH=new D.e2(!1,C.MK,10,null,!0,null,!0,!0,!0,!0,B.bR,B.hV)
C.WJ=new D.e2(!1,null,10,null,!1,null,!0,!0,!0,!0,B.Z,B.hV)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_35",e:"endPart",h:b})})($__dart_deferred_initializers__,"6UjBhqEFZwx4nAZQv908qMPu/LM=");