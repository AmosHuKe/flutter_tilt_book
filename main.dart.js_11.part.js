((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_11",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,D,A={
aFL(){return new A.pk(null)},
pk:function pk(d){this.a=d},
we:function we(d){this.a=d},
Nj:function Nj(d,e,f){var _=this
_.e=_.d=$
_.f=0
_.r=!1
_.bp$=d
_.aH$=e
_.a=null
_.b=f
_.c=null},
adu:function adu(d){this.a=d},
ads:function ads(d){this.a=d},
adt:function adt(d){this.a=d},
adq:function adq(d){this.a=d},
adr:function adr(d){this.a=d},
adp:function adp(d){this.a=d},
adn:function adn(d){this.a=d},
ado:function ado(d){this.a=d},
Fh:function Fh(){}},C,G,E,F,H,I,K
B=c[0]
D=c[2]
A=a.updateHolder(c[5],A)
C=c[64]
G=c[65]
E=c[34]
F=c[37]
H=c[32]
I=c[29]
K=c[61]
A.pk.prototype={
E(d){return E.e2(C.A5,"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nAnimationCard(),\n\n...\n\nclass AnimationCard extends StatefulWidget {\n  const AnimationCard({super.key});\n\n  @override\n  State<AnimationCard> createState() => _AnimationCardState();\n}\n\nclass _AnimationCardState extends State<AnimationCard>\n    with SingleTickerProviderStateMixin {\n  late AnimationController scaleAnimationController;\n  late Animation<double> scaleAnimation;\n  double opacity = 0;\n  bool isHover = false;\n\n  @override\n  void initState() {\n    super.initState();\n    scaleAnimationController = AnimationController(\n      vsync: this,\n      duration: const Duration(milliseconds: 2400),\n      reverseDuration: const Duration(milliseconds: 1000),\n    );\n    scaleAnimation = Tween(begin: 1.2, end: 1.26).animate(\n      CurvedAnimation(\n        parent: scaleAnimationController,\n        curve: const Cubic(0.16, 1, 0.3, 1),\n        reverseCurve: Curves.easeInCirc,\n      ),\n    );\n    scaleAnimationController.addListener(() {\n      switch (scaleAnimationController.status) {\n        case AnimationStatus.forward:\n          if (opacity == 1) return;\n          setState(() => opacity = 1);\n        case AnimationStatus.reverse:\n          if (opacity == 0) return;\n          setState(() => opacity = 0);\n        case AnimationStatus.dismissed:\n        case AnimationStatus.completed:\n      }\n    });\n  }\n\n  @override\n  void dispose() {\n    scaleAnimationController.dispose();\n    super.dispose();\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Listener(\n      onPointerDown: (_) {\n        if (isHover) return;\n        scaleAnimationController.forward();\n      },\n      onPointerUp: (_) {\n        if (isHover) return;\n        scaleAnimationController.reverse();\n      },\n      onPointerCancel: (_) {\n        if (isHover) return;\n        scaleAnimationController.reverse();\n      },\n      child: MouseRegion(\n        cursor: SystemMouseCursors.click,\n        onEnter: (_) {\n          isHover = true;\n          scaleAnimationController.forward();\n        },\n        onExit: (_) {\n          isHover = true;\n          scaleAnimationController.reverse();\n        },\n        // Tilt here\n        child: Tilt(\n          borderRadius: BorderRadius.circular(24),\n          tiltConfig: const TiltConfig(\n            angle: 6.0,\n            enableReverse: true,\n            enableOutsideAreaMove: false,\n            leaveDuration: Duration(milliseconds: 600),\n            filterQuality: FilterQuality.high,\n          ),\n          lightConfig: const LightConfig(disable: true),\n          shadowConfig: const ShadowConfig(enableReverse: true),\n          childLayout: ChildLayout(\n            inner: [\n              ScaleTransition(\n                scale: scaleAnimation,\n                alignment: Alignment.center,\n                filterQuality: FilterQuality.high,\n                child: TiltParallax(\n                  child: Image.asset(\n                    'assets/parallax_card/Artwork-MichaHuigen.jpg',\n                    filterQuality: FilterQuality.high,\n                    width: 360.0,\n                  ),\n                ),\n              ),\n              Positioned.fill(\n                child: AnimatedOpacity(\n                  opacity: opacity,\n                  duration: const Duration(milliseconds: 600),\n                  child: Container(\n                    decoration: const BoxDecoration(\n                      gradient: LinearGradient(\n                        begin: Alignment.topCenter,\n                        end: Alignment.bottomCenter,\n                        colors: [Colors.black12, Colors.black87],\n                      ),\n                    ),\n                    child: const Padding(\n                      padding: EdgeInsets.symmetric(\n                        horizontal: 28,\n                        vertical: 20,\n                      ),\n                      child: Column(\n                        crossAxisAlignment: CrossAxisAlignment.start,\n                        mainAxisAlignment: MainAxisAlignment.end,\n                        children: [\n                          Text(\n                            'Artwork',\n                            style: TextStyle(\n                              color: Colors.white,\n                              fontSize: 20.0,\n                            ),\n                          ),\n                          Text(\n                            'Micha Huigen',\n                            style: TextStyle(\n                              color: Colors.white,\n                              fontSize: 40.0,\n                              fontWeight: FontWeight.bold,\n                            ),\n                          ),\n                          SizedBox(height: 12),\n                          Align(\n                            alignment: Alignment.centerRight,\n                            child: Text(\n                              'Flutter Tilt',\n                              style: TextStyle(\n                                color: Colors.white60,\n                                fontSize: 14.0,\n                                fontWeight: FontWeight.bold,\n                              ),\n                            ),\n                          ),\n                        ],\n                      ),\n                    ),\n                  ),\n                ),\n              ),\n            ],\n          ),\n          child: const SizedBox(),\n        ),\n      ),\n    );\n  }\n}\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",1314,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/parallax_card.dart","Parallax Card",null)}}
A.we.prototype={
a8(){return new A.Nj(null,null,D.j)}}
A.Nj.prototype={
aw(){var x,w,v=this
v.aL()
x=B.bv(null,C.EX,0,D.c7,1,null,v)
v.d=x
w=y.g
v.e=new B.al(B.cs(C.E6,x,C.Ec),new B.af(1.2,1.26,w),w.h("al<aj.T>"))
w=v.d
w.b1()
w=w.bq$
w.b=!0
w.a.push(new A.adu(v))},
l(){var x=this.d
x===$&&B.a()
x.l()
this.Zo()},
E(d){var x,w=this,v=null,u=B.bI(24),t=w.e
t===$&&B.a()
t=B.a8D(D.t,H.eU(I.ks("assets/parallax_card/Artwork-MichaHuigen.jpg",D.aR,v,360),D.h0),D.aR,t)
x=w.f
return B.mj(D.bg,B.iy(E.d7(v,u,F.kn,new E.h0(D.ac,B.b([t,B.aqg(0,B.aC4(B.aX(v,C.N1,D.l,v,C.AQ,v,v,v,v),D.bS,x))],y.e),D.ac),K.ee,v,v,G.y6,C.Ws,v),D.aX,v,new A.adn(w),new A.ado(w),v),new A.adp(w),new A.adq(w),v,v,v,new A.adr(w))}}
A.Fh.prototype={
l(){var x=this,w=x.aH$
if(w!=null)w.G(x.gf5())
x.aH$=null
x.aD()},
bj(){this.c4()
this.bT()
this.f6()}}
var z=a.updateTypes([])
A.adu.prototype={
$0(){var x=this.a,w=x.d
w===$&&B.a()
w=w.Q
w===$&&B.a()
switch(w.a){case 1:if(x.f===1)return
x.a2(new A.ads(x))
break
case 2:if(x.f===0)return
x.a2(new A.adt(x))
break
case 0:case 3:break}},
$S:0}
A.ads.prototype={
$0(){return this.a.f=1},
$S:0}
A.adt.prototype={
$0(){return this.a.f=0},
$S:0}
A.adq.prototype={
$1(d){var x=this.a
if(x.r)return
x=x.d
x===$&&B.a()
x.bu()},
$S:32}
A.adr.prototype={
$1(d){var x=this.a
if(x.r)return
x=x.d
x===$&&B.a()
x.c9()},
$S:91}
A.adp.prototype={
$1(d){var x=this.a
if(x.r)return
x=x.d
x===$&&B.a()
x.c9()},
$S:89}
A.adn.prototype={
$1(d){var x=this.a
x.r=!0
x=x.d
x===$&&B.a()
x.bu()},
$S:39}
A.ado.prototype={
$1(d){var x=this.a
x.r=!0
x=x.d
x===$&&B.a()
x.c9()},
$S:36};(function aliases(){var x=A.Fh.prototype
x.Zo=x.l})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.pk,B.W)
w(A.we,B.J)
w(A.Fh,B.Y)
w(A.Nj,A.Fh)
v(B.eg,[A.adu,A.ads,A.adt])
v(B.cZ,[A.adq,A.adr,A.adp,A.adn,A.ado])
x(A.Fh,B.ey)})()
B.cD(b.typeUniverse,JSON.parse('{"we":{"J":[],"c":[]},"pk":{"W":[],"c":[]},"Nj":{"Y":["we"]}}'))
var y={e:B.N("o<c>"),g:B.N("af<F>")};(function constants(){var x=a.makeConstList
C.A5=new A.we(null)
C.IA=B.b(x([D.m4,D.N]),B.N("o<l>"))
C.Hr=new B.dn(D.bN,D.br,D.ae,C.IA,null,null)
C.AQ=new B.bi(null,null,null,null,null,C.Hr,D.C)
C.E6=new B.d_(0.16,1,0.3,1)
C.Ec=new B.d_(0.6,0.04,0.98,0.335)
C.EX=new B.aC(24e5)
C.Fs=new B.ak(28,20,28,20)
C.Wf=new B.b4("Artwork",null,D.dw,null,null,null,null,null)
C.Sy=new B.j(!0,D.i,null,null,null,null,40,D.ai,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.W9=new B.b4("Micha Huigen",null,C.Sy,null,null,null,null,null)
C.U1=new B.j(!0,D.lJ,null,null,null,null,14,D.ai,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.W8=new B.b4("Flutter Tilt",null,C.U1,null,null,null,null,null)
C.A0=new B.e_(D.i6,null,null,C.W8,null)
C.Ij=B.b(x([C.Wf,C.W9,F.kl,C.A0]),y.e)
C.E0=new B.rf(D.aw,D.te,D.z,D.as,null,D.bl,null,C.Ij,null)
C.N1=new B.br(C.Fs,C.E0,null)
C.Ws=new E.dX(!1,null,6,null,!0,D.aR,!0,!0,!0,!1,D.bS,D.E)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_11",e:"endPart",h:b})})($__dart_deferred_initializers__,"fyyLJMe7oWqM0DZpYlH2EuDeYhs=");