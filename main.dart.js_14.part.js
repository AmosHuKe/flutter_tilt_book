((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_14",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,H,A={
aFv(){return new A.pb(null)},
pb:function pb(d){this.a=d},
nT:function nT(d,e){this.c=d
this.a=e},
Ni:function Ni(d,e,f){var _=this
_.e=_.d=$
_.bp$=d
_.aH$=e
_.a=null
_.b=f
_.c=null},
adl:function adl(d){this.a=d},
adm:function adm(d){this.a=d},
adk:function adk(d){this.a=d},
adi:function adi(d){this.a=d},
adj:function adj(d){this.a=d},
adh:function adh(d,e){this.a=d
this.b=e},
adg:function adg(d){this.a=d},
Fg:function Fg(){}},D,I,E,F,G
B=c[0]
C=c[2]
H=c[41]
A=a.updateHolder(c[6],A)
D=c[62]
I=c[22]
E=c[34]
F=c[37]
G=c[29]
A.pb.prototype={
E(d){var x=null
return E.e1(new B.br(C.d6,B.ne(C.zy,B.b([new A.nT(G.kr("assets/multiple_tilt_image/sun.png",C.aR,x,159.5),x),new A.nT(G.kr("assets/multiple_tilt_image/moon.png",C.aR,275,x),x),new A.nT(G.kr("assets/multiple_tilt_image/star.png",C.aR,x,159.5),x)],y.e),C.zy,24,24),x),"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nPadding(\n  padding: const EdgeInsets.all(8),\n  child: Wrap(\n    spacing: 24,\n    runSpacing: 24,\n    alignment: WrapAlignment.center,\n    runAlignment: WrapAlignment.center,\n    children: [\n      AnimationCard(\n        child: Image.asset(\n          'assets/multiple_tilt_image/sun.png',\n          filterQuality: FilterQuality.high,\n          width: 159.5,\n        ),\n      ),\n      AnimationCard(\n        child: Image.asset(\n          'assets/multiple_tilt_image/moon.png',\n          filterQuality: FilterQuality.high,\n          height: 275,\n        ),\n      ),\n      AnimationCard(\n        child: Image.asset(\n          'assets/multiple_tilt_image/star.png',\n          filterQuality: FilterQuality.high,\n          width: 159.5,\n        ),\n      ),\n    ],\n  ),\n),\n\n...\n\nclass AnimationCard extends StatefulWidget {\n  const AnimationCard({super.key, required this.child});\n\n  final Widget child;\n\n  @override\n  State<AnimationCard> createState() => _AnimationCardState();\n}\n\nclass _AnimationCardState extends State<AnimationCard>\n    with SingleTickerProviderStateMixin {\n  late AnimationController scaleAnimationController;\n  late Animation<double> scaleAnimation;\n\n  @override\n  void initState() {\n    super.initState();\n    scaleAnimationController = AnimationController(\n      vsync: this,\n      duration: const Duration(milliseconds: 350),\n    );\n    scaleAnimation = Tween(begin: 1.0, end: 1.05).animate(\n      CurvedAnimation(\n        parent: scaleAnimationController,\n        curve: Curves.easeOut,\n      ),\n    );\n  }\n\n  @override\n  void dispose() {\n    scaleAnimationController.dispose();\n    super.dispose();\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Listener(\n      onPointerDown: (_) => scaleAnimationController.forward(),\n      onPointerUp: (_) => scaleAnimationController.reverse(),\n      onPointerCancel: (_) => scaleAnimationController.reverse(),\n      child: MouseRegion(\n        cursor: SystemMouseCursors.click,\n        onEnter: (_) => scaleAnimationController.forward(),\n        onExit: (_) => scaleAnimationController.reverse(),\n        child: ScaleTransition(\n          scale: scaleAnimation,\n          alignment: Alignment.center,\n          filterQuality: FilterQuality.high,\n          child: GestureDetector(\n            onTap: () => _showDialog(context),\n            // Tilt here\n            child: Tilt(\n              borderRadius: BorderRadius.circular(20),\n              tiltConfig: const TiltConfig(filterQuality: FilterQuality.high),\n              lightConfig: const LightConfig(\n                minIntensity: 0.1,\n                maxIntensity: 0.4,\n              ),\n              child: widget.child,\n            ),\n          ),\n        ),\n      ),\n    );\n  }\n\n  Future<void> _showDialog(BuildContext context) async {\n    return showDialog<void>(\n      context: context,\n      builder: (BuildContext context) {\n        return BackdropFilter(\n          filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),\n          child: Align(\n            child: Transform.scale(\n              scale: 1.2,\n              filterQuality: FilterQuality.high,\n              // Tilt here\n              child: Tilt(\n                borderRadius: BorderRadius.circular(20),\n                tiltConfig: const TiltConfig(\n                  enableRevert: false,\n                  enableSensorRevert: false,\n                  filterQuality: FilterQuality.high,\n                ),\n                lightConfig: const LightConfig(\n                  minIntensity: 0.1,\n                  maxIntensity: 0.4,\n                ),\n                shadowConfig: const ShadowConfig(disable: true),\n                child: widget.child,\n              ),\n            ),\n          ),\n        );\n      },\n    );\n  }\n}\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",1314,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/multiple_tilt.dart","Multiple Tilt",x)}}
A.nT.prototype={
a8(){return new A.Ni(null,null,C.j)}}
A.Ni.prototype={
aw(){var x,w,v=this,u=null
v.aL()
x=B.bv(u,D.EW,0,u,1,u,v)
v.d=x
w=y.g
v.e=new B.al(B.cs(C.cv,x,u),new B.af(1,1.05,w),w.h("al<aj.T>"))},
l(){var x=this.d
x===$&&B.a()
x.l()
this.Zp()},
E(d){var x=this,w=null,v=x.e
v===$&&B.a()
return B.mi(C.bg,B.iy(B.a8D(C.t,B.em(w,E.dg(w,B.bL(20),x.a.c,F.aP,D.n2,w,w,F.bE,D.Ws,w),C.V,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.adh(x,d),w,w,w,w),C.aR,v),C.aX,w,new A.adi(x),new A.adj(x),w),new A.adk(x),new A.adl(x),w,w,w,new A.adm(x))},
Cd(d){return this.abH(d)},
abH(d){var x=0,w=B.U(y.f),v,u=this
var $async$Cd=B.V(function(e,f){if(e===1)return B.R(f,w)
while(true)switch(x){case 0:v=I.azi(new A.adg(u),d,y.f)
x=1
break
case 1:return B.S(v,w)}})
return B.T($async$Cd,w)}}
A.Fg.prototype={
l(){var x=this,w=x.aH$
if(w!=null)w.G(x.gf5())
x.aH$=null
x.aD()},
bj(){this.c4()
this.bT()
this.f6()}}
var z=a.updateTypes([])
A.adl.prototype={
$1(d){var x=this.a.d
x===$&&B.a()
return x.bu()},
$S:32}
A.adm.prototype={
$1(d){var x=this.a.d
x===$&&B.a()
return x.c9()},
$S:91}
A.adk.prototype={
$1(d){var x=this.a.d
x===$&&B.a()
return x.c9()},
$S:89}
A.adi.prototype={
$1(d){var x=this.a.d
x===$&&B.a()
return x.bu()},
$S:39}
A.adj.prototype={
$1(d){var x=this.a.d
x===$&&B.a()
return x.c9()},
$S:36}
A.adh.prototype={
$0(){return this.a.Cd(this.b)},
$S:0}
A.adg.prototype={
$1(d){var x=null,w=$.a8().rn(10,10,C.ad),v=E.dg(x,B.bL(20),this.a.a.c,F.aP,D.n2,x,x,H.ck,D.Wt,x),u=1.2
return B.Gp(new B.dZ(C.t,x,x,new B.l_(B.p4(u,1.2,1),C.t,!0,C.aR,v,x),x),w)},
$S:186};(function aliases(){var x=A.Fg.prototype
x.Zp=x.l})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.pb,B.W)
w(A.nT,B.J)
w(A.Fg,B.Y)
w(A.Ni,A.Fg)
v(B.cZ,[A.adl,A.adm,A.adk,A.adi,A.adj,A.adg])
w(A.adh,B.ef)
x(A.Fg,B.ex)})()
B.cD(b.typeUniverse,JSON.parse('{"nT":{"J":[],"c":[]},"pb":{"W":[],"c":[]},"Ni":{"Y":["nT"]}}'))
var y={e:B.N("o<c>"),g:B.N("af<F>"),f:B.N("~")};(function constants(){D.EW=new B.aC(35e4)
D.n2=new E.jg(!1,C.i,0.1,0.4,4,F.cb,null)
D.Wt=new E.eT(!1,null,10,null,!1,C.aR,!0,!1,!1,!0,C.X,C.E)
D.Ws=new E.eT(!1,null,10,null,!1,C.aR,!0,!0,!0,!0,C.X,C.E)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_14",e:"endPart",h:b})})($__dart_deferred_initializers__,"U0rtqTTCFgCHB3dFq/rT1axrkkA=");