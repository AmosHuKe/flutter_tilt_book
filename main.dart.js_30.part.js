((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_30",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,H,F,I,E,K,G,D={IT:function IT(){},
aK1(){return new D.pn(null)},
pn:function pn(d){this.a=d}},C,L
A=c[0]
B=c[2]
H=c[41]
F=c[34]
I=c[48]
E=c[44]
K=c[37]
G=c[32]
D=a.updateHolder(c[11],D)
C=c[59]
L=c[39]
D.IT.prototype={
jX(d){return Math.pow(2,-10*d)*Math.sin((d-0.1)*6.283185307179586/0.4)+1},
k(d){return"ElasticOutCurve(0.4)"}}
D.pn.prototype={
E(d){var x,w=null,v=A.bM(30),u=y.e,t=A.b([A.d1(w,G.f3(A.b2(B.t,C.We,B.k,B.l,w,60,w,w,60),L.tV),w,w,0,w,w,w)],u),s=A.b([A.d1(w,G.f3(A.b2(B.t,C.W8,B.k,B.l,w,60,w,w,60),C.MZ),w,w,w,0,w,w)],u),r=y.c,q=A.b([A.J(153,128,208,199),A.J(153,19,84,122)],r)
q=A.d1(-10,G.f3(A.b2(B.br,C.zw,B.k,w,new A.be(w,w,w,A.bM(20),w,new A.dy(E.dX,E.dY,B.ak,q,w,w),B.F),160,w,C.mL,280),C.N_),w,w,w,w,w,w)
x=A.b([A.J(204,128,208,199),A.J(204,19,84,122)],r)
u=A.b([q,A.d1(-5,G.f3(A.b2(B.br,C.zw,B.k,w,new A.be(w,w,w,A.bM(25),w,new A.dy(E.dX,E.dY,B.ak,x,w,w),B.F),180,w,C.mL,315),C.MV),w,w,w,w,w,w)],u)
x=B.c.ab(229.5)
return F.ec(F.de(w,v,A.b2(B.t,C.Wj,B.k,w,new A.be(w,w,w,w,w,new A.dy(E.dX,E.dY,B.ak,A.b([A.J(x,128,208,199),A.J(x,19,84,122)],r),w,w),B.F),200,w,w,350),new F.he(t,s,u),K.bz,w,w,H.bW,C.WN,w),"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nTilt(\n  borderRadius: BorderRadius.circular(30),\n  tiltConfig: const TiltConfig(\n    angle: 20,\n    leaveDuration: Duration(seconds: 1),\n    leaveCurve: Curves.elasticOut,\n  ),\n  shadowConfig: const ShadowConfig(disable: true),\n  childLayout: ChildLayout(\n    outer: [\n      Positioned(\n        left: 0,\n        child: TiltParallax(\n          size: const Offset(40, 40),\n          child: Container(\n            width: 60,\n            height: 60,\n            alignment: Alignment.center,\n            color: Colors.black,\n            child: const Text(\n              'outer',\n              style: TextStyle(\n                fontSize: 20,\n                color: Colors.white,\n              ),\n            ),\n          ),\n        ),\n      ),\n    ],\n    inner: [\n      Positioned(\n        right: 0,\n        child: TiltParallax(\n          size: const Offset(-40, -40),\n          child: Container(\n            width: 60,\n            height: 60,\n            alignment: Alignment.center,\n            color: Colors.black,\n            child: const Text(\n              'inner',\n              style: TextStyle(\n                fontSize: 20,\n                color: Colors.white,\n              ),\n            ),\n          ),\n        ),\n      ),\n    ],\n    behind: [\n      Positioned(\n        bottom: -10,\n        child: TiltParallax(\n          size: const Offset(-50, -50),\n          child: Container(\n            width: 350 * 0.8,\n            height: 200 * 0.8,\n            alignment: Alignment.bottomCenter,\n            padding: const EdgeInsets.only(bottom: 4),\n            decoration: BoxDecoration(\n              gradient: LinearGradient(\n                begin: Alignment.topRight,\n                end: Alignment.bottomLeft,\n                colors: [\n                  const Color(0xFF80d0c7).withOpacity(0.6),\n                  const Color(0xFF13547a).withOpacity(0.6),\n                ],\n              ),\n              borderRadius: BorderRadius.circular(20),\n            ),\n            child: const Text(\n              'behind',\n              style: TextStyle(\n                fontSize: 18,\n                color: Colors.white,\n              ),\n            ),\n          ),\n        ),\n      ),\n      Positioned(\n        bottom: -5,\n        child: TiltParallax(\n          size: const Offset(-25, -25),\n          child: Container(\n            width: 350 * 0.9,\n            height: 200 * 0.9,\n            alignment: Alignment.bottomCenter,\n            padding: const EdgeInsets.only(bottom: 4),\n            decoration: BoxDecoration(\n              gradient: LinearGradient(\n                begin: Alignment.topRight,\n                end: Alignment.bottomLeft,\n                colors: [\n                  const Color(0xFF80d0c7).withOpacity(0.8),\n                  const Color(0xFF13547a).withOpacity(0.8),\n                ],\n              ),\n              borderRadius: BorderRadius.circular(25),\n            ),\n            child: const Text(\n              'behind',\n              style: TextStyle(\n                fontSize: 18,\n                color: Colors.white,\n              ),\n            ),\n          ),\n        ),\n      ),\n    ],\n  ),\n  child: Container(\n    width: 350,\n    height: 200,\n    alignment: Alignment.center,\n    decoration: BoxDecoration(\n      gradient: LinearGradient(\n        begin: Alignment.topRight,\n        end: Alignment.bottomLeft,\n        colors: [\n          const Color(0xFF80d0c7).withOpacity(0.9),\n          const Color(0xFF13547a).withOpacity(0.9),\n        ],\n      ),\n    ),\n    child: const Text(\n      'child',\n      style: TextStyle(\n        fontSize: 20,\n        color: Colors.white,\n      ),\n    ),\n  ),\n),\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",500,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/layout.dart","Layout",w)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(D.IT,A.dH)
x(D.pn,A.Y)})()
A.cJ(b.typeUniverse,JSON.parse('{"IT":{"dH":[]},"pn":{"Y":[],"c":[]}}'))
var y={c:A.M("o<i>"),e:A.M("o<c>")};(function constants(){C.mL=new A.ak(0,0,0,4)
C.MV=new A.f(-25,-25)
C.MZ=new A.f(-40,-40)
C.N_=new A.f(-50,-50)
C.W8=new A.b5("inner",null,B.dJ,null,null,null,null,null)
C.We=new A.b5("outer",null,B.dJ,null,null,null,null,null)
C.Wj=new A.b5("child",null,B.dJ,null,null,null,null,null)
C.zw=new A.b5("behind",null,I.zk,null,null,null,null,null)
C.Bx=new D.IT()
C.WN=new F.e1(!1,null,20,null,!1,null,!0,!0,!0,!0,B.c7,C.Bx)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_30",e:"endPart",h:b})})($__dart_deferred_initializers__,"6joZb1KGo5d5mjnDomgNP1tXX2M=");