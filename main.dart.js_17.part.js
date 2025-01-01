((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_17",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,D,G,A={
aLh(){return new A.q5(null)},
q5:function q5(d){this.a=d},
x4:function x4(d){this.a=d},
ON:function ON(d,e){var _=this
_.e=_.d=$
_.f=0
_.r=!1
_.dU$=d
_.bq$=e
_.c=_.a=null},
ahC:function ahC(d){this.a=d},
ahA:function ahA(d){this.a=d},
ahB:function ahB(d){this.a=d},
ahs:function ahs(d){this.a=d},
aht:function aht(d){this.a=d},
ahr:function ahr(d){this.a=d},
ahp:function ahp(d){this.a=d},
ahq:function ahq(d){this.a=d},
Gi:function Gi(){}},C,H,E,F,I,K,L
B=c[0]
D=c[2]
G=c[63]
A=a.updateHolder(c[6],A)
C=c[69]
H=c[70]
E=c[35]
F=c[38]
I=c[33]
K=c[64]
L=c[30]
A.q5.prototype={
G(d){return E.e0(C.AG,"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nAnimationCard(),\n\n...\n\nclass AnimationCard extends StatefulWidget {\n  const AnimationCard({super.key});\n\n  @override\n  State<AnimationCard> createState() => _AnimationCardState();\n}\n\nclass _AnimationCardState extends State<AnimationCard>\n    with SingleTickerProviderStateMixin {\n  late AnimationController scaleAnimationController;\n  late Animation<double> scaleAnimation;\n  double opacity = 0;\n  bool isHover = false;\n\n  @override\n  void initState() {\n    super.initState();\n    scaleAnimationController = AnimationController(\n      vsync: this,\n      duration: const Duration(milliseconds: 2400),\n      reverseDuration: const Duration(milliseconds: 1000),\n    );\n    scaleAnimation = Tween(begin: 1.2, end: 1.26).animate(\n      CurvedAnimation(\n        parent: scaleAnimationController,\n        curve: const Cubic(0.16, 1, 0.3, 1),\n        reverseCurve: Curves.easeInCirc,\n      ),\n    );\n    scaleAnimationController.addListener(() {\n      switch (scaleAnimationController.status) {\n        case AnimationStatus.forward:\n          if (opacity == 1) return;\n          setState(() => opacity = 1);\n        case AnimationStatus.reverse:\n          if (opacity == 0) return;\n          setState(() => opacity = 0);\n        case AnimationStatus.dismissed:\n        case AnimationStatus.completed:\n      }\n    });\n  }\n\n  @override\n  void dispose() {\n    scaleAnimationController.dispose();\n    super.dispose();\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Listener(\n      onPointerDown: (_) {\n        if (isHover) return;\n        scaleAnimationController.forward();\n      },\n      onPointerUp: (_) {\n        if (isHover) return;\n        scaleAnimationController.reverse();\n      },\n      onPointerCancel: (_) {\n        if (isHover) return;\n        scaleAnimationController.reverse();\n      },\n      child: MouseRegion(\n        cursor: SystemMouseCursors.click,\n        onEnter: (_) {\n          isHover = true;\n          scaleAnimationController.forward();\n        },\n        onExit: (_) {\n          isHover = true;\n          scaleAnimationController.reverse();\n        },\n        // Tilt here\n        child: Tilt(\n          borderRadius: BorderRadius.circular(24),\n          tiltConfig: const TiltConfig(\n            angle: 6.0,\n            enableReverse: true,\n            enableOutsideAreaMove: false,\n            leaveDuration: Duration(milliseconds: 600),\n            filterQuality: FilterQuality.high,\n          ),\n          lightConfig: const LightConfig(disable: true),\n          shadowConfig: const ShadowConfig(enableReverse: true),\n          childLayout: ChildLayout(\n            inner: [\n              ScaleTransition(\n                scale: scaleAnimation,\n                alignment: Alignment.center,\n                filterQuality: FilterQuality.high,\n                child: TiltParallax(\n                  child: Image.asset(\n                    'assets/parallax_card/Artwork-MichaHuigen.jpg',\n                    filterQuality: FilterQuality.high,\n                    width: 360.0,\n                  ),\n                ),\n              ),\n              Positioned.fill(\n                child: AnimatedOpacity(\n                  opacity: opacity,\n                  duration: const Duration(milliseconds: 600),\n                  child: Container(\n                    decoration: const BoxDecoration(\n                      gradient: LinearGradient(\n                        begin: Alignment.topCenter,\n                        end: Alignment.bottomCenter,\n                        colors: [Colors.black12, Colors.black87],\n                      ),\n                    ),\n                    child: const Padding(\n                      padding: EdgeInsets.symmetric(\n                        horizontal: 28,\n                        vertical: 20,\n                      ),\n                      child: Column(\n                        crossAxisAlignment: CrossAxisAlignment.start,\n                        mainAxisAlignment: MainAxisAlignment.end,\n                        children: [\n                          Text(\n                            'Artwork',\n                            style: TextStyle(\n                              color: Colors.white,\n                              fontSize: 20.0,\n                            ),\n                          ),\n                          Text(\n                            'Micha Huigen',\n                            style: TextStyle(\n                              color: Colors.white,\n                              fontSize: 40.0,\n                              fontWeight: FontWeight.bold,\n                            ),\n                          ),\n                          SizedBox(height: 12),\n                          Align(\n                            alignment: Alignment.centerRight,\n                            child: Text(\n                              'Flutter Tilt',\n                              style: TextStyle(\n                                color: Colors.white60,\n                                fontSize: 14.0,\n                                fontWeight: FontWeight.bold,\n                              ),\n                            ),\n                          ),\n                        ],\n                      ),\n                    ),\n                  ),\n                ),\n              ),\n            ],\n          ),\n          child: const SizedBox(),\n        ),\n      ),\n    );\n  }\n}\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",1314,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/parallax_card.dart","Parallax Card",null)}}
A.x4.prototype={
a8(){return new A.ON(null,null)}}
A.ON.prototype={
aq(){var x,w,v=this
v.aJ()
x=B.bt(null,C.Fp,0,D.cb,1,null,v)
v.d=x
w=y.g
v.e=new B.ay(B.co(C.Ex,x,C.EC),new B.ao(1.2,1.26,w),w.h("ay<au.T>"))
w=v.d
w.ba()
w=w.bx$
w.b=!0
w.a.push(new A.ahC(v))},
l(){var x=this.d
x===$&&B.a()
x.l()
this.a0o()},
G(d){var x,w=this,v=null,u=B.bB(24),t=w.e
t===$&&B.a()
t=B.act(D.u,I.e8(L.iD("assets/parallax_card/Artwork-MichaHuigen.jpg",D.aW,v,360),K.hw),D.aW,t)
x=w.f
return B.mM(D.bn,B.iN(E.d3(v,u,F.i1,new E.fC(D.ae,B.b([t,B.auK(0,B.aHk(B.b_(v,C.Nt,D.m,v,C.Bn,v,v,v,v),D.bU,x))],y.e),D.ae),G.dr,F.a7,v,v,H.yI,C.X1,v),D.b0,v,new A.ahp(w),new A.ahq(w),v),new A.ahr(w),new A.ahs(w),v,v,v,new A.aht(w))}}
A.Gi.prototype={
l(){var x=this,w=x.bq$
if(w!=null)w.H(x.gfq())
x.bq$=null
x.av()},
bk(){this.ce()
this.bX()
this.fs()}}
var z=a.updateTypes([])
A.ahC.prototype={
$0(){var x=this.a,w=x.d
w===$&&B.a()
w=w.Q
w===$&&B.a()
switch(w.a){case 1:if(x.f===1)return
x.a0(new A.ahA(x))
break
case 2:if(x.f===0)return
x.a0(new A.ahB(x))
break
case 0:case 3:break}},
$S:0}
A.ahA.prototype={
$0(){return this.a.f=1},
$S:0}
A.ahB.prototype={
$0(){return this.a.f=0},
$S:0}
A.ahs.prototype={
$1(d){var x=this.a
if(x.r)return
x=x.d
x===$&&B.a()
x.bC()},
$S:45}
A.aht.prototype={
$1(d){var x=this.a
if(x.r)return
x=x.d
x===$&&B.a()
x.cj()},
$S:103}
A.ahr.prototype={
$1(d){var x=this.a
if(x.r)return
x=x.d
x===$&&B.a()
x.cj()},
$S:101}
A.ahp.prototype={
$1(d){var x=this.a
x.r=!0
x=x.d
x===$&&B.a()
x.bC()},
$S:46}
A.ahq.prototype={
$1(d){var x=this.a
x.r=!0
x=x.d
x===$&&B.a()
x.cj()},
$S:37};(function aliases(){var x=A.Gi.prototype
x.a0o=x.l})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.q5,B.W)
w(A.x4,B.I)
w(A.Gi,B.V)
w(A.ON,A.Gi)
v(B.eh,[A.ahC,A.ahA,A.ahB])
v(B.d_,[A.ahs,A.aht,A.ahr,A.ahp,A.ahq])
x(A.Gi,B.eI)})()
B.cC(b.typeUniverse,JSON.parse('{"x4":{"I":[],"c":[]},"q5":{"W":[],"c":[]},"ON":{"V":["x4"]}}'))
var y={e:B.R("l<c>"),g:B.R("ao<F>")};(function constants(){var x=a.makeConstList
C.AG=new A.x4(null)
C.Jq=B.b(x([D.mt,D.P]),B.R("l<m>"))
C.HV=new B.dY(D.bP,D.bw,D.ao,C.Jq,null,null)
C.Bn=new B.bd(null,null,null,null,null,C.HV,D.E)
C.Ex=new B.dg(0.16,1,0.3,1)
C.EC=new B.dg(0.6,0.04,0.98,0.335)
C.Fp=new B.aH(24e5)
C.FR=new B.ah(28,20,28,20)
C.WF=new B.b5("Artwork",null,D.dP,null,null,null,null,null)
C.Tu=new B.j(!0,D.j,null,null,null,null,40,D.ak,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.Wu=new B.b5("Micha Huigen",null,C.Tu,null,null,null,null,null)
C.Tv=new B.j(!0,D.m3,null,null,null,null,14,D.ak,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.WA=new B.b5("Flutter Tilt",null,C.Tv,null,null,null,null,null)
C.AB=new B.ey(D.iB,null,null,C.WA,null)
C.J3=B.b(x([C.WF,C.Wu,F.i0,C.AB]),y.e)
C.Eu=new B.t6(D.aG,D.tL,D.B,D.ag,null,D.bv,null,0,C.J3,null)
C.Nt=new B.bG(C.FR,C.Eu,null)
C.X1=new E.e7(!1,null,6,null,!0,D.aW,!0,!0,!0,!1,D.bU,D.H)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_17",e:"endPart",h:b})})($__dart_deferred_initializers__,"FhIY6f1XPKeEkJdQ7BW3uMFUU4E=");