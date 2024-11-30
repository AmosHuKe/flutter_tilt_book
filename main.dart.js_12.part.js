((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_12",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,D,G,A={
aKQ(){return new A.pV(null)},
pV:function pV(d){this.a=d},
wT:function wT(d){this.a=d},
Oo:function Oo(d,e){var _=this
_.e=_.d=$
_.f=0
_.r=!1
_.dN$=d
_.bm$=e
_.c=_.a=null},
ahl:function ahl(d){this.a=d},
ahj:function ahj(d){this.a=d},
ahk:function ahk(d){this.a=d},
ahb:function ahb(d){this.a=d},
ahc:function ahc(d){this.a=d},
aha:function aha(d){this.a=d},
ah8:function ah8(d){this.a=d},
ah9:function ah9(d){this.a=d},
FZ:function FZ(){}},C,H,E,F,I,K,L
B=c[0]
D=c[2]
G=c[61]
A=a.updateHolder(c[5],A)
C=c[65]
H=c[66]
E=c[34]
F=c[37]
I=c[32]
K=c[62]
L=c[29]
A.pV.prototype={
E(d){return E.ef(C.Ar,"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nAnimationCard(),\n\n...\n\nclass AnimationCard extends StatefulWidget {\n  const AnimationCard({super.key});\n\n  @override\n  State<AnimationCard> createState() => _AnimationCardState();\n}\n\nclass _AnimationCardState extends State<AnimationCard>\n    with SingleTickerProviderStateMixin {\n  late AnimationController scaleAnimationController;\n  late Animation<double> scaleAnimation;\n  double opacity = 0;\n  bool isHover = false;\n\n  @override\n  void initState() {\n    super.initState();\n    scaleAnimationController = AnimationController(\n      vsync: this,\n      duration: const Duration(milliseconds: 2400),\n      reverseDuration: const Duration(milliseconds: 1000),\n    );\n    scaleAnimation = Tween(begin: 1.2, end: 1.26).animate(\n      CurvedAnimation(\n        parent: scaleAnimationController,\n        curve: const Cubic(0.16, 1, 0.3, 1),\n        reverseCurve: Curves.easeInCirc,\n      ),\n    );\n    scaleAnimationController.addListener(() {\n      switch (scaleAnimationController.status) {\n        case AnimationStatus.forward:\n          if (opacity == 1) return;\n          setState(() => opacity = 1);\n        case AnimationStatus.reverse:\n          if (opacity == 0) return;\n          setState(() => opacity = 0);\n        case AnimationStatus.dismissed:\n        case AnimationStatus.completed:\n      }\n    });\n  }\n\n  @override\n  void dispose() {\n    scaleAnimationController.dispose();\n    super.dispose();\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Listener(\n      onPointerDown: (_) {\n        if (isHover) return;\n        scaleAnimationController.forward();\n      },\n      onPointerUp: (_) {\n        if (isHover) return;\n        scaleAnimationController.reverse();\n      },\n      onPointerCancel: (_) {\n        if (isHover) return;\n        scaleAnimationController.reverse();\n      },\n      child: MouseRegion(\n        cursor: SystemMouseCursors.click,\n        onEnter: (_) {\n          isHover = true;\n          scaleAnimationController.forward();\n        },\n        onExit: (_) {\n          isHover = true;\n          scaleAnimationController.reverse();\n        },\n        // Tilt here\n        child: Tilt(\n          borderRadius: BorderRadius.circular(24),\n          tiltConfig: const TiltConfig(\n            angle: 6.0,\n            enableReverse: true,\n            enableOutsideAreaMove: false,\n            leaveDuration: Duration(milliseconds: 600),\n            filterQuality: FilterQuality.high,\n          ),\n          lightConfig: const LightConfig(disable: true),\n          shadowConfig: const ShadowConfig(enableReverse: true),\n          childLayout: ChildLayout(\n            inner: [\n              ScaleTransition(\n                scale: scaleAnimation,\n                alignment: Alignment.center,\n                filterQuality: FilterQuality.high,\n                child: TiltParallax(\n                  child: Image.asset(\n                    'assets/parallax_card/Artwork-MichaHuigen.jpg',\n                    filterQuality: FilterQuality.high,\n                    width: 360.0,\n                  ),\n                ),\n              ),\n              Positioned.fill(\n                child: AnimatedOpacity(\n                  opacity: opacity,\n                  duration: const Duration(milliseconds: 600),\n                  child: Container(\n                    decoration: const BoxDecoration(\n                      gradient: LinearGradient(\n                        begin: Alignment.topCenter,\n                        end: Alignment.bottomCenter,\n                        colors: [Colors.black12, Colors.black87],\n                      ),\n                    ),\n                    child: const Padding(\n                      padding: EdgeInsets.symmetric(\n                        horizontal: 28,\n                        vertical: 20,\n                      ),\n                      child: Column(\n                        crossAxisAlignment: CrossAxisAlignment.start,\n                        mainAxisAlignment: MainAxisAlignment.end,\n                        children: [\n                          Text(\n                            'Artwork',\n                            style: TextStyle(\n                              color: Colors.white,\n                              fontSize: 20.0,\n                            ),\n                          ),\n                          Text(\n                            'Micha Huigen',\n                            style: TextStyle(\n                              color: Colors.white,\n                              fontSize: 40.0,\n                              fontWeight: FontWeight.bold,\n                            ),\n                          ),\n                          SizedBox(height: 12),\n                          Align(\n                            alignment: Alignment.centerRight,\n                            child: Text(\n                              'Flutter Tilt',\n                              style: TextStyle(\n                                color: Colors.white60,\n                                fontSize: 14.0,\n                                fontWeight: FontWeight.bold,\n                              ),\n                            ),\n                          ),\n                        ],\n                      ),\n                    ),\n                  ),\n                ),\n              ),\n            ],\n          ),\n          child: const SizedBox(),\n        ),\n      ),\n    );\n  }\n}\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",1314,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/parallax_card.dart","Parallax Card",null)}}
A.wT.prototype={
a8(){return new A.Oo(null,null)}}
A.Oo.prototype={
ar(){var x,w,v=this
v.aH()
x=B.bv(null,C.Fh,0,D.c7,1,null,v)
v.d=x
w=y.g
v.e=new B.al(B.cz(C.Er,x,C.Ex),new B.ag(1.2,1.26,w),w.h("al<aj.T>"))
w=v.d
w.b1()
w=w.bv$
w.b=!0
w.a.push(new A.ahl(v))},
l(){var x=this.d
x===$&&B.a()
x.l()
this.a_I()},
E(d){var x,w=this,v=null,u=B.bM(24),t=w.e
t===$&&B.a()
t=B.act(D.t,I.f4(L.kM("assets/parallax_card/Artwork-MichaHuigen.jpg",D.aW,v,360),K.hk),D.aW,t)
x=w.f
return B.mH(D.bj,B.iO(E.de(v,u,F.kE,new E.hf(D.ai,B.b([t,B.aum(0,B.aH2(B.b2(v,C.Nj,D.k,v,C.Be,v,v,v,v),D.bR,x))],y.e),D.ai),G.eu,v,v,H.yr,C.WI,v),D.b_,v,new A.ah8(w),new A.ah9(w),v),new A.aha(w),new A.ahb(w),v,v,v,new A.ahc(w))}}
A.FZ.prototype={
l(){var x=this,w=x.bm$
if(w!=null)w.H(x.gfe())
x.bm$=null
x.au()},
bf(){this.c9()
this.bW()
this.ff()}}
var z=a.updateTypes([])
A.ahl.prototype={
$0(){var x=this.a,w=x.d
w===$&&B.a()
w=w.Q
w===$&&B.a()
switch(w.a){case 1:if(x.f===1)return
x.a0(new A.ahj(x))
break
case 2:if(x.f===0)return
x.a0(new A.ahk(x))
break
case 0:case 3:break}},
$S:0}
A.ahj.prototype={
$0(){return this.a.f=1},
$S:0}
A.ahk.prototype={
$0(){return this.a.f=0},
$S:0}
A.ahb.prototype={
$1(d){var x=this.a
if(x.r)return
x=x.d
x===$&&B.a()
x.by()},
$S:46}
A.ahc.prototype={
$1(d){var x=this.a
if(x.r)return
x=x.d
x===$&&B.a()
x.ce()},
$S:108}
A.aha.prototype={
$1(d){var x=this.a
if(x.r)return
x=x.d
x===$&&B.a()
x.ce()},
$S:82}
A.ah8.prototype={
$1(d){var x=this.a
x.r=!0
x=x.d
x===$&&B.a()
x.by()},
$S:40}
A.ah9.prototype={
$1(d){var x=this.a
x.r=!0
x=x.d
x===$&&B.a()
x.ce()},
$S:37};(function aliases(){var x=A.FZ.prototype
x.a_I=x.l})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.pV,B.Y)
w(A.wT,B.I)
w(A.FZ,B.X)
w(A.Oo,A.FZ)
v(B.eu,[A.ahl,A.ahj,A.ahk])
v(B.d6,[A.ahb,A.ahc,A.aha,A.ah8,A.ah9])
x(A.FZ,B.eG)})()
B.cI(b.typeUniverse,JSON.parse('{"wT":{"I":[],"c":[]},"pV":{"Y":[],"c":[]},"Oo":{"X":["wT"]}}'))
var y={e:B.M("o<c>"),g:B.M("ag<F>")};(function constants(){var x=a.makeConstList
C.Ar=new A.wT(null)
C.IV=B.b(x([D.mo,D.N]),B.M("o<i>"))
C.HM=new B.dy(D.bL,D.br,D.ak,C.IV,null,null)
C.Be=new B.be(null,null,null,null,null,C.HM,D.F)
C.Er=new B.d7(0.16,1,0.3,1)
C.Ex=new B.d7(0.6,0.04,0.98,0.335)
C.Fh=new B.aE(24e5)
C.FO=new B.ak(28,20,28,20)
C.Wv=new B.b5("Artwork",null,D.dJ,null,null,null,null,null)
C.SO=new B.l(!0,D.j,null,null,null,null,40,D.am,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.Wp=new B.b5("Micha Huigen",null,C.SO,null,null,null,null,null)
C.Uh=new B.l(!0,D.m1,null,null,null,null,14,D.am,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.Wo=new B.b5("Flutter Tilt",null,C.Uh,null,null,null,null,null)
C.Am=new B.e9(D.io,null,null,C.Wo,null)
C.IE=B.b(x([C.Wv,C.Wp,F.kC,C.Am]),y.e)
C.En=new B.rU(D.aE,D.tu,D.z,D.ad,null,D.bq,null,C.IE,null)
C.Nj=new B.bp(C.FO,C.En,null)
C.WI=new E.e4(!1,null,6,null,!0,D.aW,!0,!0,!0,!1,D.bR,D.G)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_12",e:"endPart",h:b})})($__dart_deferred_initializers__,"s93RJxk5ZnC+l33nUDBPqD6ix14=");