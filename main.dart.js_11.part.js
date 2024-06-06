((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_11",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,D,A={
aFK(){return new A.pk(null)},
pk:function pk(d){this.a=d},
wd:function wd(d){this.a=d},
Nj:function Nj(d,e,f){var _=this
_.e=_.d=$
_.f=0
_.r=!1
_.bp$=d
_.aH$=e
_.a=null
_.b=f
_.c=null},
adt:function adt(d){this.a=d},
adr:function adr(d){this.a=d},
ads:function ads(d){this.a=d},
adp:function adp(d){this.a=d},
adq:function adq(d){this.a=d},
ado:function ado(d){this.a=d},
adm:function adm(d){this.a=d},
adn:function adn(d){this.a=d},
Fg:function Fg(){}},C,G,E,F,H,I,K
B=c[0]
D=c[2]
A=a.updateHolder(c[5],A)
C=c[63]
G=c[64]
E=c[34]
F=c[37]
H=c[32]
I=c[29]
K=c[60]
A.pk.prototype={
E(d){return E.e1(C.A1,'import \'package:flutter_tilt/flutter_tilt.dart\';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nAnimationCard(),\n\n...\n\nclass AnimationCard extends StatefulWidget {\n  const AnimationCard({super.key});\n\n  @override\n  State<AnimationCard> createState() => _AnimationCardState();\n}\n\nclass _AnimationCardState extends State<AnimationCard>\n    with SingleTickerProviderStateMixin {\n  late AnimationController scaleAnimationController;\n  late Animation<double> scaleAnimation;\n  double opacity = 0;\n  bool isHover = false;\n\n  @override\n  void initState() {\n    super.initState();\n    scaleAnimationController = AnimationController(\n      vsync: this,\n      duration: const Duration(milliseconds: 2400),\n      reverseDuration: const Duration(milliseconds: 1000),\n    );\n    scaleAnimation = Tween(begin: 1.2, end: 1.26).animate(\n      CurvedAnimation(\n        parent: scaleAnimationController,\n        curve: const Cubic(0.16, 1, 0.3, 1),\n        reverseCurve: Curves.easeInCirc,\n      ),\n    );\n    scaleAnimationController.addListener(() {\n      switch (scaleAnimationController.status) {\n        case AnimationStatus.forward:\n          if (opacity == 1) return;\n          setState(() => opacity = 1);\n        case AnimationStatus.reverse:\n          if (opacity == 0) return;\n          setState(() => opacity = 0);\n        case AnimationStatus.dismissed:\n        case AnimationStatus.completed:\n      }\n    });\n  }\n\n  @override\n  void dispose() {\n    scaleAnimationController.dispose();\n    super.dispose();\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Listener(\n      onPointerDown: (_) {\n        if (isHover) return;\n        scaleAnimationController.forward();\n      },\n      onPointerUp: (_) {\n        if (isHover) return;\n        scaleAnimationController.reverse();\n      },\n      onPointerCancel: (_) {\n        if (isHover) return;\n        scaleAnimationController.reverse();\n      },\n      child: MouseRegion(\n        cursor: SystemMouseCursors.click,\n        onEnter: (_) {\n          isHover = true;\n          scaleAnimationController.forward();\n        },\n        onExit: (_) {\n          isHover = true;\n          scaleAnimationController.reverse();\n        },\n        // Tilt here\n        child: Tilt(\n          borderRadius: BorderRadius.circular(24),\n          tiltConfig: const TiltConfig(\n            angle: 6.0,\n            enableReverse: true,\n            enableOutsideAreaMove: false,\n            leaveDuration: Duration(milliseconds: 600),\n            filterQuality: FilterQuality.high,\n          ),\n          lightConfig: const LightConfig(disable: true),\n          shadowConfig: const ShadowConfig(enableReverse: true),\n          childLayout: ChildLayout(\n            inner: [\n              ScaleTransition(\n                scale: scaleAnimation,\n                alignment: Alignment.center,\n                filterQuality: FilterQuality.high,\n                child: TiltParallax(\n                  child: Image.asset(\n                    \'assets/parallax_card/Artwork-MichaHuigen.jpg\',\n                    filterQuality: FilterQuality.high,\n                    width: 360.0,\n                  ),\n                ),\n              ),\n              Positioned.fill(\n                child: AnimatedOpacity(\n                  opacity: opacity,\n                  duration: const Duration(milliseconds: 600),\n                  child: Container(\n                    decoration: const BoxDecoration(\n                      gradient: LinearGradient(\n                        begin: Alignment.topCenter,\n                        end: Alignment.bottomCenter,\n                        colors: [Colors.black12, Colors.black87],\n                      ),\n                    ),\n                    child: const Padding(\n                      padding: EdgeInsets.symmetric(\n                        horizontal: 28,\n                        vertical: 20,\n                      ),\n                      child: Column(\n                        crossAxisAlignment: CrossAxisAlignment.start,\n                        mainAxisAlignment: MainAxisAlignment.end,\n                        children: [\n                          Text(\n                            "Artwork",\n                            style: TextStyle(\n                              color: Colors.white,\n                              fontSize: 20.0,\n                            ),\n                          ),\n                          Text(\n                            "Micha Huigen",\n                            style: TextStyle(\n                              color: Colors.white,\n                              fontSize: 40.0,\n                              fontWeight: FontWeight.bold,\n                            ),\n                          ),\n                          SizedBox(height: 12),\n                          Align(\n                            alignment: Alignment.centerRight,\n                            child: Text(\n                              "Flutter Tilt",\n                              style: TextStyle(\n                                color: Colors.white60,\n                                fontSize: 14.0,\n                                fontWeight: FontWeight.bold,\n                              ),\n                            ),\n                          ),\n                        ],\n                      ),\n                    ),\n                  ),\n                ),\n              ),\n            ],\n          ),\n          child: const SizedBox(),\n        ),\n      ),\n    );\n  }\n}\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n',1314,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/parallax_card.dart","Parallax Card",null)}}
A.wd.prototype={
a8(){return new A.Nj(null,null,D.j)}}
A.Nj.prototype={
aw(){var x,w,v=this
v.aL()
x=B.bv(null,C.ET,0,D.c5,1,null,v)
v.d=x
w=y.g
v.e=new B.al(B.cs(C.E2,x,C.E8),new B.af(1.2,1.26,w),w.h("al<aj.T>"))
w=v.d
w.b1()
w=w.bq$
w.b=!0
w.a.push(new A.adt(v))},
l(){var x=this.d
x===$&&B.a()
x.l()
this.Zo()},
E(d){var x,w=this,v=null,u=B.bL(24),t=w.e
t===$&&B.a()
t=B.a8C(D.t,H.ho(I.kr("assets/parallax_card/Artwork-MichaHuigen.jpg",D.aR,v,360),D.jH),D.aR,t)
x=w.f
return B.mj(D.bg,B.iy(E.dg(v,u,F.kl,new E.hu(D.an,B.b([t,B.aqg(0,B.aC3(B.b2(v,C.MX,D.l,v,C.AM,v,v,v,v),D.cx,x))],y.e),D.an),K.fE,v,v,G.y2,C.Wo,v),D.aX,v,new A.adm(w),new A.adn(w),v),new A.ado(w),new A.adp(w),v,v,v,new A.adq(w))}}
A.Fg.prototype={
l(){var x=this,w=x.aH$
if(w!=null)w.G(x.gf3())
x.aH$=null
x.aD()},
bj(){this.c4()
this.bT()
this.f4()}}
var z=a.updateTypes([])
A.adt.prototype={
$0(){var x=this.a,w=x.d
w===$&&B.a()
w=w.Q
w===$&&B.a()
switch(w.a){case 1:if(x.f===1)return
x.a2(new A.adr(x))
break
case 2:if(x.f===0)return
x.a2(new A.ads(x))
break
case 0:case 3:break}},
$S:0}
A.adr.prototype={
$0(){return this.a.f=1},
$S:0}
A.ads.prototype={
$0(){return this.a.f=0},
$S:0}
A.adp.prototype={
$1(d){var x=this.a
if(x.r)return
x=x.d
x===$&&B.a()
x.bu()},
$S:32}
A.adq.prototype={
$1(d){var x=this.a
if(x.r)return
x=x.d
x===$&&B.a()
x.c9()},
$S:91}
A.ado.prototype={
$1(d){var x=this.a
if(x.r)return
x=x.d
x===$&&B.a()
x.c9()},
$S:89}
A.adm.prototype={
$1(d){var x=this.a
x.r=!0
x=x.d
x===$&&B.a()
x.bu()},
$S:39}
A.adn.prototype={
$1(d){var x=this.a
x.r=!0
x=x.d
x===$&&B.a()
x.c9()},
$S:36};(function aliases(){var x=A.Fg.prototype
x.Zo=x.l})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.pk,B.W)
w(A.wd,B.K)
w(A.Fg,B.Y)
w(A.Nj,A.Fg)
v(B.ef,[A.adt,A.adr,A.ads])
v(B.cZ,[A.adp,A.adq,A.ado,A.adm,A.adn])
x(A.Fg,B.ex)})()
B.cD(b.typeUniverse,JSON.parse('{"wd":{"K":[],"c":[]},"pk":{"W":[],"c":[]},"Nj":{"Y":["wd"]}}'))
var y={e:B.N("o<c>"),g:B.N("af<F>")};(function constants(){var x=a.makeConstList
C.A1=new A.wd(null)
C.Iw=B.b(x([D.m1,D.M]),B.N("o<l>"))
C.Hn=new B.dn(D.bN,D.br,D.ad,C.Iw,null,null)
C.AM=new B.bo(null,null,null,null,null,C.Hn,D.C)
C.E2=new B.d_(0.16,1,0.3,1)
C.E8=new B.d_(0.6,0.04,0.98,0.335)
C.ET=new B.aC(24e5)
C.Fo=new B.ak(28,20,28,20)
C.Wb=new B.b4("Artwork",null,D.dw,null,null,null,null,null)
C.Su=new B.j(!0,D.i,null,null,null,null,40,D.ah,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.W5=new B.b4("Micha Huigen",null,C.Su,null,null,null,null,null)
C.TY=new B.j(!0,D.lG,null,null,null,null,14,D.ah,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.W4=new B.b4("Flutter Tilt",null,C.TY,null,null,null,null,null)
C.zX=new B.dZ(D.i3,null,null,C.W4,null)
C.If=B.b(x([C.Wb,C.W5,F.kj,C.zX]),y.e)
C.DX=new B.re(D.aw,D.tb,D.z,D.as,null,D.bl,null,C.If,null)
C.MX=new B.br(C.Fo,C.DX,null)
C.Wo=new E.eT(!1,null,6,null,!0,D.aR,!0,!0,!0,!1,D.cx,D.E)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_11",e:"endPart",h:b})})($__dart_deferred_initializers__,"mYa6cdY6UFbBqZ6d455CuYt7qiI=");