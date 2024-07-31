((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_14",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,H,A={
aFz(){return new A.pb(null)},
pb:function pb(d){this.a=d},
nS:function nS(d,e){this.c=d
this.a=e},
Ni:function Ni(d,e,f){var _=this
_.e=_.d=$
_.bp$=d
_.aH$=e
_.a=null
_.b=f
_.c=null},
adk:function adk(d){this.a=d},
adl:function adl(d){this.a=d},
adj:function adj(d){this.a=d},
adh:function adh(d){this.a=d},
adi:function adi(d){this.a=d},
adg:function adg(d,e){this.a=d
this.b=e},
adf:function adf(d){this.a=d},
Fh:function Fh(){}},D,I,E,F,G
B=c[0]
C=c[2]
H=c[41]
A=a.updateHolder(c[6],A)
D=c[63]
I=c[22]
E=c[34]
F=c[37]
G=c[29]
A.pb.prototype={
E(d){var x=null
return E.e3(new B.br(C.d6,B.l5(C.hQ,B.b([new A.nS(G.kt("assets/multiple_tilt_image/sun.png",C.aT,x,159.5),x),new A.nS(G.kt("assets/multiple_tilt_image/moon.png",C.aT,275,x),x),new A.nS(G.kt("assets/multiple_tilt_image/star.png",C.aT,x,159.5),x)],y.e),C.hQ,24,24),x),"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nPadding(\n  padding: const EdgeInsets.all(8),\n  child: Wrap(\n    spacing: 24,\n    runSpacing: 24,\n    alignment: WrapAlignment.center,\n    runAlignment: WrapAlignment.center,\n    children: [\n      AnimationCard(\n        child: Image.asset(\n          'assets/multiple_tilt_image/sun.png',\n          filterQuality: FilterQuality.high,\n          width: 159.5,\n        ),\n      ),\n      AnimationCard(\n        child: Image.asset(\n          'assets/multiple_tilt_image/moon.png',\n          filterQuality: FilterQuality.high,\n          height: 275,\n        ),\n      ),\n      AnimationCard(\n        child: Image.asset(\n          'assets/multiple_tilt_image/star.png',\n          filterQuality: FilterQuality.high,\n          width: 159.5,\n        ),\n      ),\n    ],\n  ),\n),\n\n...\n\nclass AnimationCard extends StatefulWidget {\n  const AnimationCard({super.key, required this.child});\n\n  final Widget child;\n\n  @override\n  State<AnimationCard> createState() => _AnimationCardState();\n}\n\nclass _AnimationCardState extends State<AnimationCard>\n    with SingleTickerProviderStateMixin {\n  late AnimationController scaleAnimationController;\n  late Animation<double> scaleAnimation;\n\n  @override\n  void initState() {\n    super.initState();\n    scaleAnimationController = AnimationController(\n      vsync: this,\n      duration: const Duration(milliseconds: 350),\n    );\n    scaleAnimation = Tween(begin: 1.0, end: 1.05).animate(\n      CurvedAnimation(\n        parent: scaleAnimationController,\n        curve: Curves.easeOut,\n      ),\n    );\n  }\n\n  @override\n  void dispose() {\n    scaleAnimationController.dispose();\n    super.dispose();\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Listener(\n      onPointerDown: (_) => scaleAnimationController.forward(),\n      onPointerUp: (_) => scaleAnimationController.reverse(),\n      onPointerCancel: (_) => scaleAnimationController.reverse(),\n      child: MouseRegion(\n        cursor: SystemMouseCursors.click,\n        onEnter: (_) => scaleAnimationController.forward(),\n        onExit: (_) => scaleAnimationController.reverse(),\n        child: ScaleTransition(\n          scale: scaleAnimation,\n          alignment: Alignment.center,\n          filterQuality: FilterQuality.high,\n          child: GestureDetector(\n            onTap: () => _showDialog(context),\n            // Tilt here\n            child: Tilt(\n              borderRadius: BorderRadius.circular(20),\n              tiltConfig: const TiltConfig(filterQuality: FilterQuality.high),\n              lightConfig: const LightConfig(\n                minIntensity: 0.1,\n                maxIntensity: 0.4,\n              ),\n              child: widget.child,\n            ),\n          ),\n        ),\n      ),\n    );\n  }\n\n  Future<void> _showDialog(BuildContext context) async {\n    return showDialog<void>(\n      context: context,\n      builder: (BuildContext context) {\n        return BackdropFilter(\n          filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),\n          child: Align(\n            child: Transform.scale(\n              scale: 1.2,\n              filterQuality: FilterQuality.high,\n              // Tilt here\n              child: Tilt(\n                borderRadius: BorderRadius.circular(20),\n                tiltConfig: const TiltConfig(\n                  enableRevert: false,\n                  enableSensorRevert: false,\n                  filterQuality: FilterQuality.high,\n                ),\n                lightConfig: const LightConfig(\n                  minIntensity: 0.1,\n                  maxIntensity: 0.4,\n                ),\n                shadowConfig: const ShadowConfig(disable: true),\n                child: widget.child,\n              ),\n            ),\n          ),\n        );\n      },\n    );\n  }\n}\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",1314,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/multiple_tilt.dart","Multiple Tilt",x)}}
A.nS.prototype={
a8(){return new A.Ni(null,null,C.j)}}
A.Ni.prototype={
aw(){var x,w,v=this,u=null
v.aL()
x=B.bv(u,D.F8,0,u,1,u,v)
v.d=x
w=y.g
v.e=new B.al(B.ct(C.cw,x,u),new B.af(1,1.05,w),w.h("al<aj.T>"))},
l(){var x=this.d
x===$&&B.a()
x.l()
this.Zp()},
E(d){var x=this,w=null,v=x.e
v===$&&B.a()
return B.mj(C.bh,B.iA(B.a8C(C.u,B.ep(w,E.d8(w,B.bI(20),x.a.c,F.aR,D.nd,w,w,F.bE,D.WH,w),C.V,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.adg(x,d),w,w,w,w),C.aT,v),C.aZ,w,new A.adh(x),new A.adi(x),w),new A.adj(x),new A.adk(x),w,w,w,new A.adl(x))},
Cd(d){return this.abH(d)},
abH(d){var x=0,w=B.U(y.f),v,u=this
var $async$Cd=B.V(function(e,f){if(e===1)return B.R(f,w)
while(true)switch(x){case 0:v=I.azm(new A.adf(u),d,y.f)
x=1
break
case 1:return B.S(v,w)}})
return B.T($async$Cd,w)}}
A.Fh.prototype={
l(){var x=this,w=x.aH$
if(w!=null)w.G(x.gf5())
x.aH$=null
x.aD()},
bj(){this.c4()
this.bT()
this.f6()}}
var z=a.updateTypes([])
A.adk.prototype={
$1(d){var x=this.a.d
x===$&&B.a()
return x.bu()},
$S:32}
A.adl.prototype={
$1(d){var x=this.a.d
x===$&&B.a()
return x.c9()},
$S:91}
A.adj.prototype={
$1(d){var x=this.a.d
x===$&&B.a()
return x.c9()},
$S:89}
A.adh.prototype={
$1(d){var x=this.a.d
x===$&&B.a()
return x.bu()},
$S:39}
A.adi.prototype={
$1(d){var x=this.a.d
x===$&&B.a()
return x.c9()},
$S:36}
A.adg.prototype={
$0(){return this.a.Cd(this.b)},
$S:0}
A.adf.prototype={
$1(d){var x=null,w=$.a9().rn(10,10,C.ae),v=E.d8(x,B.bI(20),this.a.a.c,F.aR,D.nd,x,x,H.bY,D.WI,x),u=1.2
return B.Gq(new B.e0(C.u,x,x,new B.l0(B.p3(u,1.2,1),C.u,!0,C.aT,v,x),x),w)},
$S:186};(function aliases(){var x=A.Fh.prototype
x.Zp=x.l})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.pb,B.W)
w(A.nS,B.J)
w(A.Fh,B.Y)
w(A.Ni,A.Fh)
v(B.d_,[A.adk,A.adl,A.adj,A.adh,A.adi,A.adf])
w(A.adg,B.ei)
x(A.Fh,B.eA)})()
B.cD(b.typeUniverse,JSON.parse('{"nS":{"J":[],"c":[]},"pb":{"W":[],"c":[]},"Ni":{"Y":["nS"]}}'))
var y={e:B.N("o<c>"),g:B.N("af<F>"),f:B.N("~")};(function constants(){D.F8=new B.aC(35e4)
D.nd=new E.jj(!1,C.i,0.1,0.4,4,F.cd,null)
D.WI=new E.dY(!1,null,10,null,!1,C.aT,!0,!1,!1,!0,C.W,C.E)
D.WH=new E.dY(!1,null,10,null,!1,C.aT,!0,!0,!0,!0,C.W,C.E)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_14",e:"endPart",h:b})})($__dart_deferred_initializers__,"F5a5cSFaxbGAH/Tc7Zh3VcFNWiI=");