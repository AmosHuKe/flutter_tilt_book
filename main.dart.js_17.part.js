((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_17",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,D,G,A={
aLb(){return new A.pY(null)},
pY:function pY(d){this.a=d},
wV:function wV(d){this.a=d},
Oz:function Oz(d,e){var _=this
_.e=_.d=$
_.f=0
_.r=!1
_.dN$=d
_.bm$=e
_.c=_.a=null},
ahA:function ahA(d){this.a=d},
ahy:function ahy(d){this.a=d},
ahz:function ahz(d){this.a=d},
ahq:function ahq(d){this.a=d},
ahr:function ahr(d){this.a=d},
ahp:function ahp(d){this.a=d},
ahn:function ahn(d){this.a=d},
aho:function aho(d){this.a=d},
G6:function G6(){}},C,H,E,F,I,K,L
B=c[0]
D=c[2]
G=c[62]
A=a.updateHolder(c[6],A)
C=c[68]
H=c[69]
E=c[35]
F=c[38]
I=c[33]
K=c[63]
L=c[30]
A.pY.prototype={
E(d){return E.e0(C.Aw,"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nAnimationCard(),\n\n...\n\nclass AnimationCard extends StatefulWidget {\n  const AnimationCard({super.key});\n\n  @override\n  State<AnimationCard> createState() => _AnimationCardState();\n}\n\nclass _AnimationCardState extends State<AnimationCard>\n    with SingleTickerProviderStateMixin {\n  late AnimationController scaleAnimationController;\n  late Animation<double> scaleAnimation;\n  double opacity = 0;\n  bool isHover = false;\n\n  @override\n  void initState() {\n    super.initState();\n    scaleAnimationController = AnimationController(\n      vsync: this,\n      duration: const Duration(milliseconds: 2400),\n      reverseDuration: const Duration(milliseconds: 1000),\n    );\n    scaleAnimation = Tween(begin: 1.2, end: 1.26).animate(\n      CurvedAnimation(\n        parent: scaleAnimationController,\n        curve: const Cubic(0.16, 1, 0.3, 1),\n        reverseCurve: Curves.easeInCirc,\n      ),\n    );\n    scaleAnimationController.addListener(() {\n      switch (scaleAnimationController.status) {\n        case AnimationStatus.forward:\n          if (opacity == 1) return;\n          setState(() => opacity = 1);\n        case AnimationStatus.reverse:\n          if (opacity == 0) return;\n          setState(() => opacity = 0);\n        case AnimationStatus.dismissed:\n        case AnimationStatus.completed:\n      }\n    });\n  }\n\n  @override\n  void dispose() {\n    scaleAnimationController.dispose();\n    super.dispose();\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Listener(\n      onPointerDown: (_) {\n        if (isHover) return;\n        scaleAnimationController.forward();\n      },\n      onPointerUp: (_) {\n        if (isHover) return;\n        scaleAnimationController.reverse();\n      },\n      onPointerCancel: (_) {\n        if (isHover) return;\n        scaleAnimationController.reverse();\n      },\n      child: MouseRegion(\n        cursor: SystemMouseCursors.click,\n        onEnter: (_) {\n          isHover = true;\n          scaleAnimationController.forward();\n        },\n        onExit: (_) {\n          isHover = true;\n          scaleAnimationController.reverse();\n        },\n        // Tilt here\n        child: Tilt(\n          borderRadius: BorderRadius.circular(24),\n          tiltConfig: const TiltConfig(\n            angle: 6.0,\n            enableReverse: true,\n            enableOutsideAreaMove: false,\n            leaveDuration: Duration(milliseconds: 600),\n            filterQuality: FilterQuality.high,\n          ),\n          lightConfig: const LightConfig(disable: true),\n          shadowConfig: const ShadowConfig(enableReverse: true),\n          childLayout: ChildLayout(\n            inner: [\n              ScaleTransition(\n                scale: scaleAnimation,\n                alignment: Alignment.center,\n                filterQuality: FilterQuality.high,\n                child: TiltParallax(\n                  child: Image.asset(\n                    'assets/parallax_card/Artwork-MichaHuigen.jpg',\n                    filterQuality: FilterQuality.high,\n                    width: 360.0,\n                  ),\n                ),\n              ),\n              Positioned.fill(\n                child: AnimatedOpacity(\n                  opacity: opacity,\n                  duration: const Duration(milliseconds: 600),\n                  child: Container(\n                    decoration: const BoxDecoration(\n                      gradient: LinearGradient(\n                        begin: Alignment.topCenter,\n                        end: Alignment.bottomCenter,\n                        colors: [Colors.black12, Colors.black87],\n                      ),\n                    ),\n                    child: const Padding(\n                      padding: EdgeInsets.symmetric(\n                        horizontal: 28,\n                        vertical: 20,\n                      ),\n                      child: Column(\n                        crossAxisAlignment: CrossAxisAlignment.start,\n                        mainAxisAlignment: MainAxisAlignment.end,\n                        children: [\n                          Text(\n                            'Artwork',\n                            style: TextStyle(\n                              color: Colors.white,\n                              fontSize: 20.0,\n                            ),\n                          ),\n                          Text(\n                            'Micha Huigen',\n                            style: TextStyle(\n                              color: Colors.white,\n                              fontSize: 40.0,\n                              fontWeight: FontWeight.bold,\n                            ),\n                          ),\n                          SizedBox(height: 12),\n                          Align(\n                            alignment: Alignment.centerRight,\n                            child: Text(\n                              'Flutter Tilt',\n                              style: TextStyle(\n                                color: Colors.white60,\n                                fontSize: 14.0,\n                                fontWeight: FontWeight.bold,\n                              ),\n                            ),\n                          ),\n                        ],\n                      ),\n                    ),\n                  ),\n                ),\n              ),\n            ],\n          ),\n          child: const SizedBox(),\n        ),\n      ),\n    );\n  }\n}\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",1314,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/parallax_card.dart","Parallax Card",null)}}
A.wV.prototype={
a6(){return new A.Oz(null,null)}}
A.Oz.prototype={
ar(){var x,w,v=this
v.aH()
x=B.bv(null,C.Fl,0,D.c8,1,null,v)
v.d=x
w=y.g
v.e=new B.al(B.cz(C.Ev,x,C.EB),new B.ah(1.2,1.26,w),w.h("al<aj.T>"))
w=v.d
w.b1()
w=w.bv$
w.b=!0
w.a.push(new A.ahA(v))},
l(){var x=this.d
x===$&&B.a()
x.l()
this.a_P()},
E(d){var x,w=this,v=null,u=B.bM(24),t=w.e
t===$&&B.a()
t=B.acJ(D.t,I.e9(L.iI("assets/parallax_card/Artwork-MichaHuigen.jpg",D.aX,v,360),K.hl),D.aX,t)
x=w.f
return B.mL(D.bl,B.iR(E.d6(v,u,F.hT,new E.fK(D.ae,B.b([t,B.auE(0,B.aHn(B.aY(v,C.Nn,D.k,v,C.Bi,v,v,v,v),D.bS,x))],y.e),D.ae),G.dn,F.a6,v,v,H.yv,C.WP,v),D.b0,v,new A.ahn(w),new A.aho(w),v),new A.ahp(w),new A.ahq(w),v,v,v,new A.ahr(w))}}
A.G6.prototype={
l(){var x=this,w=x.bm$
if(w!=null)w.H(x.gff())
x.bm$=null
x.av()},
bf(){this.ca()
this.bW()
this.fg()}}
var z=a.updateTypes([])
A.ahA.prototype={
$0(){var x=this.a,w=x.d
w===$&&B.a()
w=w.Q
w===$&&B.a()
switch(w.a){case 1:if(x.f===1)return
x.a_(new A.ahy(x))
break
case 2:if(x.f===0)return
x.a_(new A.ahz(x))
break
case 0:case 3:break}},
$S:0}
A.ahy.prototype={
$0(){return this.a.f=1},
$S:0}
A.ahz.prototype={
$0(){return this.a.f=0},
$S:0}
A.ahq.prototype={
$1(d){var x=this.a
if(x.r)return
x=x.d
x===$&&B.a()
x.by()},
$S:42}
A.ahr.prototype={
$1(d){var x=this.a
if(x.r)return
x=x.d
x===$&&B.a()
x.ce()},
$S:82}
A.ahp.prototype={
$1(d){var x=this.a
if(x.r)return
x=x.d
x===$&&B.a()
x.ce()},
$S:80}
A.ahn.prototype={
$1(d){var x=this.a
x.r=!0
x=x.d
x===$&&B.a()
x.by()},
$S:40}
A.aho.prototype={
$1(d){var x=this.a
x.r=!0
x=x.d
x===$&&B.a()
x.ce()},
$S:34};(function aliases(){var x=A.G6.prototype
x.a_P=x.l})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.pY,B.Y)
w(A.wV,B.I)
w(A.G6,B.X)
w(A.Oz,A.G6)
v(B.eh,[A.ahA,A.ahy,A.ahz])
v(B.d2,[A.ahq,A.ahr,A.ahp,A.ahn,A.aho])
x(A.G6,B.eH)})()
B.cD(b.typeUniverse,JSON.parse('{"wV":{"I":[],"c":[]},"pY":{"Y":[],"c":[]},"Oz":{"X":["wV"]}}'))
var y={e:B.M("o<c>"),g:B.M("ah<F>")};(function constants(){var x=a.makeConstList
C.Aw=new A.wV(null)
C.IY=B.b(x([D.mq,D.N]),B.M("o<i>"))
C.HP=new B.dy(D.bM,D.bt,D.am,C.IY,null,null)
C.Bi=new B.b6(null,null,null,null,null,C.HP,D.A)
C.Ev=new B.d8(0.16,1,0.3,1)
C.EB=new B.d8(0.6,0.04,0.98,0.335)
C.Fl=new B.aE(24e5)
C.FS=new B.ak(28,20,28,20)
C.WB=new B.b5("Artwork",null,D.dM,null,null,null,null,null)
C.ST=new B.l(!0,D.j,null,null,null,null,40,D.aj,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.Wv=new B.b5("Micha Huigen",null,C.ST,null,null,null,null,null)
C.Um=new B.l(!0,D.m3,null,null,null,null,14,D.aj,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.Wu=new B.b5("Flutter Tilt",null,C.Um,null,null,null,null,null)
C.Ar=new B.eg(D.ir,null,null,C.Wu,null)
C.IH=B.b(x([C.WB,C.Wv,F.hS,C.Ar]),y.e)
C.Er=new B.rW(D.aG,D.ty,D.z,D.af,null,D.bs,null,C.IH,null)
C.Nn=new B.bp(C.FS,C.Er,null)
C.WP=new E.e8(!1,null,6,null,!0,D.aX,!0,!0,!0,!1,D.bS,D.G)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_17",e:"endPart",h:b})})($__dart_deferred_initializers__,"9ratZTWTQ9DKLHX4UvDTbWemNfg=");