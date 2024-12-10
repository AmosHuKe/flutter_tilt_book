((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_34",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,I,F,H,G,K,E,D={J1:function J1(){},
aKo(){return new D.pq(null)},
pq:function pq(d){this.a=d}},C,L
A=c[0]
B=c[2]
I=c[42]
F=c[35]
H=c[38]
G=c[33]
K=c[49]
E=c[45]
D=a.updateHolder(c[12],D)
C=c[60]
L=c[40]
D.J1.prototype={
jW(d){return Math.pow(2,-10*d)*Math.sin((d-0.1)*6.283185307179586/0.4)+1},
k(d){return"ElasticOutCurve(0.4)"}}
D.pq.prototype={
E(d){var x,w=null,v=A.bM(30),u=y.e,t=A.b([A.cY(w,G.e9(A.aY(B.t,C.Wj,B.k,B.l,w,60,w,w,60),L.tZ),w,w,0,w,w,w)],u),s=A.b([A.cY(w,G.e9(A.aY(B.t,C.Wd,B.k,B.l,w,60,w,w,60),C.N2),w,w,w,0,w,w)],u),r=y.c,q=A.b([A.J(153,128,208,199),A.J(153,19,84,122)],r)
q=A.cY(-10,G.e9(A.aY(B.bt,C.zA,B.k,w,new A.b6(w,w,w,A.bM(20),w,new A.dy(E.e0,E.e1,B.am,q,w,w),B.A),160,w,C.mN,280),C.N3),w,w,w,w,w,w)
x=A.b([A.J(204,128,208,199),A.J(204,19,84,122)],r)
u=A.b([q,A.cY(-5,G.e9(A.aY(B.bt,C.zA,B.k,w,new A.b6(w,w,w,A.bM(25),w,new A.dy(E.e0,E.e1,B.am,x,w,w),B.A),180,w,C.mN,315),C.MZ),w,w,w,w,w,w)],u)
x=B.c.ab(229.5)
return F.e0(F.d6(w,v,A.aY(B.t,C.Wo,B.k,w,new A.b6(w,w,w,w,w,new A.dy(E.e0,E.e1,B.am,A.b([A.J(x,128,208,199),A.J(x,19,84,122)],r),w,w),B.A),200,w,w,350),new F.fK(t,s,u),H.bA,H.a6,w,w,I.bX,C.WT,w),"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nTilt(\n  borderRadius: BorderRadius.circular(30),\n  tiltConfig: const TiltConfig(\n    angle: 20,\n    leaveDuration: Duration(seconds: 1),\n    leaveCurve: Curves.elasticOut,\n  ),\n  shadowConfig: const ShadowConfig(disable: true),\n  childLayout: ChildLayout(\n    outer: [\n      Positioned(\n        left: 0,\n        child: TiltParallax(\n          size: const Offset(40, 40),\n          child: Container(\n            width: 60,\n            height: 60,\n            alignment: Alignment.center,\n            color: Colors.black,\n            child: const Text(\n              'outer',\n              style: TextStyle(\n                fontSize: 20,\n                color: Colors.white,\n              ),\n            ),\n          ),\n        ),\n      ),\n    ],\n    inner: [\n      Positioned(\n        right: 0,\n        child: TiltParallax(\n          size: const Offset(-40, -40),\n          child: Container(\n            width: 60,\n            height: 60,\n            alignment: Alignment.center,\n            color: Colors.black,\n            child: const Text(\n              'inner',\n              style: TextStyle(\n                fontSize: 20,\n                color: Colors.white,\n              ),\n            ),\n          ),\n        ),\n      ),\n    ],\n    behind: [\n      Positioned(\n        bottom: -10,\n        child: TiltParallax(\n          size: const Offset(-50, -50),\n          child: Container(\n            width: 350 * 0.8,\n            height: 200 * 0.8,\n            alignment: Alignment.bottomCenter,\n            padding: const EdgeInsets.only(bottom: 4),\n            decoration: BoxDecoration(\n              gradient: LinearGradient(\n                begin: Alignment.topRight,\n                end: Alignment.bottomLeft,\n                colors: [\n                  const Color(0xFF80d0c7).withOpacity(0.6),\n                  const Color(0xFF13547a).withOpacity(0.6),\n                ],\n              ),\n              borderRadius: BorderRadius.circular(20),\n            ),\n            child: const Text(\n              'behind',\n              style: TextStyle(\n                fontSize: 18,\n                color: Colors.white,\n              ),\n            ),\n          ),\n        ),\n      ),\n      Positioned(\n        bottom: -5,\n        child: TiltParallax(\n          size: const Offset(-25, -25),\n          child: Container(\n            width: 350 * 0.9,\n            height: 200 * 0.9,\n            alignment: Alignment.bottomCenter,\n            padding: const EdgeInsets.only(bottom: 4),\n            decoration: BoxDecoration(\n              gradient: LinearGradient(\n                begin: Alignment.topRight,\n                end: Alignment.bottomLeft,\n                colors: [\n                  const Color(0xFF80d0c7).withOpacity(0.8),\n                  const Color(0xFF13547a).withOpacity(0.8),\n                ],\n              ),\n              borderRadius: BorderRadius.circular(25),\n            ),\n            child: const Text(\n              'behind',\n              style: TextStyle(\n                fontSize: 18,\n                color: Colors.white,\n              ),\n            ),\n          ),\n        ),\n      ),\n    ],\n  ),\n  child: Container(\n    width: 350,\n    height: 200,\n    alignment: Alignment.center,\n    decoration: BoxDecoration(\n      gradient: LinearGradient(\n        begin: Alignment.topRight,\n        end: Alignment.bottomLeft,\n        colors: [\n          const Color(0xFF80d0c7).withOpacity(0.9),\n          const Color(0xFF13547a).withOpacity(0.9),\n        ],\n      ),\n    ),\n    child: const Text(\n      'child',\n      style: TextStyle(\n        fontSize: 20,\n        color: Colors.white,\n      ),\n    ),\n  ),\n),\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",500,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/layout.dart","Layout",w)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(D.J1,A.dH)
x(D.pq,A.Y)})()
A.cD(b.typeUniverse,JSON.parse('{"J1":{"dH":[]},"pq":{"Y":[],"c":[]}}'))
var y={c:A.M("o<i>"),e:A.M("o<c>")};(function constants(){C.mN=new A.ak(0,0,0,4)
C.MZ=new A.f(-25,-25)
C.N2=new A.f(-40,-40)
C.N3=new A.f(-50,-50)
C.Wd=new A.b5("inner",null,B.dM,null,null,null,null,null)
C.Wj=new A.b5("outer",null,B.dM,null,null,null,null,null)
C.Wo=new A.b5("child",null,B.dM,null,null,null,null,null)
C.zA=new A.b5("behind",null,K.zo,null,null,null,null,null)
C.BB=new D.J1()
C.WT=new F.e8(!1,null,20,null,!1,null,!0,!0,!0,!0,B.c8,C.BB)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_34",e:"endPart",h:b})})($__dart_deferred_initializers__,"Kc5lQmS3IIP3FyGNX+Y3bCTyDDM=");