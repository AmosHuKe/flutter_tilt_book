((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_17",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,D,G,A={vI:function vI(d,e,f,g,h,i){var _=this
_.r=d
_.w=e
_.c=f
_.d=g
_.e=h
_.a=i},Nt:function Nt(d,e){var _=this
_.z=null
_.e=_.d=_.Q=$
_.dc$=d
_.aY$=e
_.c=_.a=null},aeT:function aeT(){},
aIM(){return new A.pb(null)},
pb:function pb(d){this.a=d},
vO:function vO(d){this.a=d},
NA:function NA(d,e){var _=this
_.e=_.d=$
_.f=0
_.r=!1
_.dc$=d
_.aY$=e
_.c=_.a=null},
afn:function afn(d){this.a=d},
afl:function afl(d){this.a=d},
afm:function afm(d){this.a=d},
afd:function afd(d){this.a=d},
afe:function afe(d){this.a=d},
afc:function afc(d){this.a=d},
afa:function afa(d){this.a=d},
afb:function afb(d){this.a=d},
EU:function EU(){}},C,H,E,F,I,K,L
B=c[0]
D=c[2]
G=c[63]
A=a.updateHolder(c[17],A)
C=c[69]
H=c[70]
E=c[35]
F=c[38]
I=c[33]
K=c[64]
L=c[30]
A.vI.prototype={
a3(){return new A.Nt(null,null)}}
A.Nt.prototype={
l4(d){this.z=y.h.a(d.$3(this.z,this.a.w,new A.aeT()))},
DB(){var x=this.gdv(),w=this.z
w.toString
this.Q=new B.ao(y.f.a(x),w,B.l(w).h("ao<am.T>"))},
D(d){var x=this.Q
x===$&&B.a()
return new B.dK(x,!1,this.a.r,null)}}
A.pb.prototype={
D(d){return E.dO(C.zB,"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nAnimationCard(),\n\n...\n\nclass AnimationCard extends StatefulWidget {\n  const AnimationCard({super.key});\n\n  @override\n  State<AnimationCard> createState() => _AnimationCardState();\n}\n\nclass _AnimationCardState extends State<AnimationCard>\n    with SingleTickerProviderStateMixin {\n  late AnimationController scaleAnimationController;\n  late Animation<double> scaleAnimation;\n  double opacity = 0;\n  bool isHover = false;\n\n  @override\n  void initState() {\n    super.initState();\n    scaleAnimationController = AnimationController(\n      vsync: this,\n      duration: const Duration(milliseconds: 2400),\n      reverseDuration: const Duration(milliseconds: 1000),\n    );\n    scaleAnimation = Tween(begin: 1.2, end: 1.26).animate(\n      CurvedAnimation(\n        parent: scaleAnimationController,\n        curve: const Cubic(0.16, 1, 0.3, 1),\n        reverseCurve: Curves.easeInCirc,\n      ),\n    );\n    scaleAnimationController.addListener(() {\n      switch (scaleAnimationController.status) {\n        case AnimationStatus.forward:\n          if (opacity == 1) return;\n          setState(() => opacity = 1);\n        case AnimationStatus.reverse:\n          if (opacity == 0) return;\n          setState(() => opacity = 0);\n        case AnimationStatus.dismissed:\n        case AnimationStatus.completed:\n      }\n    });\n  }\n\n  @override\n  void dispose() {\n    scaleAnimationController.dispose();\n    super.dispose();\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Listener(\n      onPointerDown: (_) {\n        if (isHover) return;\n        scaleAnimationController.forward();\n      },\n      onPointerUp: (_) {\n        if (isHover) return;\n        scaleAnimationController.reverse();\n      },\n      onPointerCancel: (_) {\n        if (isHover) return;\n        scaleAnimationController.reverse();\n      },\n      child: MouseRegion(\n        cursor: SystemMouseCursors.click,\n        onEnter: (_) {\n          isHover = true;\n          scaleAnimationController.forward();\n        },\n        onExit: (_) {\n          isHover = true;\n          scaleAnimationController.reverse();\n        },\n        // Tilt here\n        child: Tilt(\n          borderRadius: BorderRadius.circular(24),\n          tiltConfig: const TiltConfig(\n            angle: 6.0,\n            enableReverse: true,\n            enableOutsideAreaMove: false,\n            leaveDuration: Duration(milliseconds: 600),\n            filterQuality: FilterQuality.high,\n          ),\n          lightConfig: const LightConfig(disable: true),\n          shadowConfig: const ShadowConfig(enableReverse: true),\n          childLayout: ChildLayout(\n            inner: [\n              ScaleTransition(\n                scale: scaleAnimation,\n                alignment: Alignment.center,\n                filterQuality: FilterQuality.high,\n                child: TiltParallax(\n                  child: Image.asset(\n                    'assets/parallax_card/Artwork-MichaHuigen.jpg',\n                    filterQuality: FilterQuality.high,\n                    width: 360.0,\n                  ),\n                ),\n              ),\n              Positioned.fill(\n                child: AnimatedOpacity(\n                  opacity: opacity,\n                  duration: const Duration(milliseconds: 600),\n                  child: Container(\n                    decoration: const BoxDecoration(\n                      gradient: LinearGradient(\n                        begin: Alignment.topCenter,\n                        end: Alignment.bottomCenter,\n                        colors: [Colors.black12, Colors.black87],\n                      ),\n                    ),\n                    child: const Padding(\n                      padding: EdgeInsets.symmetric(\n                        horizontal: 28,\n                        vertical: 20,\n                      ),\n                      child: Column(\n                        crossAxisAlignment: CrossAxisAlignment.start,\n                        mainAxisAlignment: MainAxisAlignment.end,\n                        children: [\n                          Text(\n                            'Artwork',\n                            style: TextStyle(\n                              color: Colors.white,\n                              fontSize: 20.0,\n                            ),\n                          ),\n                          Text(\n                            'Micha Huigen',\n                            style: TextStyle(\n                              color: Colors.white,\n                              fontSize: 40.0,\n                              fontWeight: FontWeight.bold,\n                            ),\n                          ),\n                          SizedBox(height: 12),\n                          Align(\n                            alignment: Alignment.centerRight,\n                            child: Text(\n                              'Flutter Tilt',\n                              style: TextStyle(\n                                color: Colors.white60,\n                                fontSize: 14.0,\n                                fontWeight: FontWeight.bold,\n                              ),\n                            ),\n                          ),\n                        ],\n                      ),\n                    ),\n                  ),\n                ),\n              ),\n            ],\n          ),\n          child: const SizedBox(),\n        ),\n      ),\n    );\n  }\n}\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",1314,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/parallax_card.dart","Parallax Card",null)}}
A.vO.prototype={
a3(){return new A.NA(null,null)}}
A.NA.prototype={
am(){var x,w,v=this
v.aC()
x=B.bo(null,C.Er,0,D.bW,1,null,v)
v.d=x
w=y.g
v.e=new B.ao(B.ce(C.Dx,x,C.DB),new B.aj(1.2,1.26,w),w.h("ao<am.T>"))
w=v.d
w.b0()
w=w.bT$
w.b=!0
w.a.push(new A.afn(v))},
l(){var x=this.d
x===$&&B.a()
x.l()
this.Yt()},
D(d){var x,w=this,v=null,u=B.bv(24),t=w.e
t===$&&B.a()
t=B.aac(D.t,I.dW(L.i6("assets/parallax_card/Artwork-MichaHuigen.jpg",D.aH,v,360),K.fU),D.aH,t)
x=w.f
return B.m3(D.b3,B.j7(E.cT(v,u,F.hp,new E.fh(D.a9,B.b([t,B.as3(0,new A.vI(B.aW(v,C.Mz,D.l,v,C.Ak,v,v,v,v),x,D.H,D.bG,v,v))],y.e),D.a9),G.d9,F.a4,v,v,H.xX,C.W3,v),D.aL,v,new A.afa(w),new A.afb(w),v),new A.afc(w),new A.afd(w),v,v,v,new A.afe(w))}}
A.EU.prototype={
l(){var x=this,w=x.aY$
if(w!=null)w.J(x.geM())
x.aY$=null
x.ap()},
b4(){this.bW()
this.bJ()
this.eN()}}
var z=a.updateTypes([])
A.aeT.prototype={
$1(d){return new B.aj(B.bC(d),null,y.g)},
$S:33}
A.afn.prototype={
$0(){var x=this.a,w=x.d
w===$&&B.a()
w=w.Q
w===$&&B.a()
switch(w.a){case 1:if(x.f===1)return
x.V(new A.afl(x))
break
case 2:if(x.f===0)return
x.V(new A.afm(x))
break
case 0:case 3:break}},
$S:0}
A.afl.prototype={
$0(){return this.a.f=1},
$S:0}
A.afm.prototype={
$0(){return this.a.f=0},
$S:0}
A.afd.prototype={
$1(d){var x=this.a
if(x.r)return
x=x.d
x===$&&B.a()
x.bo()},
$S:42}
A.afe.prototype={
$1(d){var x=this.a
if(x.r)return
x=x.d
x===$&&B.a()
x.c2()},
$S:91}
A.afc.prototype={
$1(d){var x=this.a
if(x.r)return
x=x.d
x===$&&B.a()
x.c2()},
$S:92}
A.afa.prototype={
$1(d){var x=this.a
x.r=!0
x=x.d
x===$&&B.a()
x.bo()},
$S:53}
A.afb.prototype={
$1(d){var x=this.a
x.r=!0
x=x.d
x===$&&B.a()
x.c2()},
$S:47};(function aliases(){var x=A.EU.prototype
x.Yt=x.l})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.vI,B.rD)
w(A.Nt,B.oy)
v(B.cF,[A.aeT,A.afd,A.afe,A.afc,A.afa,A.afb])
w(A.pb,B.W)
w(A.vO,B.H)
w(A.EU,B.U)
w(A.NA,A.EU)
v(B.e7,[A.afn,A.afl,A.afm])
x(A.EU,B.eh)})()
B.cr(b.typeUniverse,JSON.parse('{"vI":{"H":[],"c":[]},"Nt":{"U":["vI"]},"vO":{"H":[],"c":[]},"pb":{"W":[],"c":[]},"NA":{"U":["vO"]}}'))
var y={f:B.P("b1<D>"),e:B.P("n<c>"),g:B.P("aj<D>"),h:B.P("aj<D>?")};(function constants(){var x=a.makeConstList
C.zB=new A.vO(null)
C.ID=B.b(x([D.lK,D.M]),B.P("n<j>"))
C.H4=new B.dM(D.bz,D.bj,D.aj,C.ID,null,null)
C.Ak=new B.b8(null,null,null,null,null,C.H4,D.D)
C.Dx=new B.d6(0.16,1,0.3,1)
C.DB=new B.d6(0.6,0.04,0.98,0.335)
C.Er=new B.ay(24e5)
C.ET=new B.ag(28,20,28,20)
C.Vx=new B.bf("Artwork",null,D.ds,null,null,null,null)
C.SA=new B.i(!0,D.i,null,null,null,null,40,D.ag,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.VJ=new B.bf("Micha Huigen",null,C.SA,null,null,null,null)
C.SB=new B.i(!0,D.lj,null,null,null,null,14,D.ag,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.VG=new B.bf("Flutter Tilt",null,C.SB,null,null,null,null)
C.zw=new B.en(D.hU,null,null,C.VG,null)
C.J2=B.b(x([C.Vx,C.VJ,F.ho,C.zw]),y.e)
C.Du=new B.r1(D.aO,D.t6,D.E,D.ac,null,D.bi,null,0,C.J2,null)
C.Mz=new B.by(C.ET,C.Du,null)
C.W3=new E.dV(!1,null,6,null,!0,D.aH,!0,!0,!0,!1,D.bG,D.H)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_17",e:"endPart",h:b})})($__dart_deferred_initializers__,"IW0bKgCLy5eHK0b3KiojpoTBHTE=");