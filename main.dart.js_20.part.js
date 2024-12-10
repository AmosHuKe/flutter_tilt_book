((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_20",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,H,E,A={
aKW(){return new A.pO(null)},
pO:function pO(d){this.a=d},
oo:function oo(d,e){this.c=d
this.a=e},
OA:function OA(d,e){var _=this
_.e=_.d=$
_.dN$=d
_.bm$=e
_.c=_.a=null},
ahw:function ahw(d){this.a=d},
ahx:function ahx(d){this.a=d},
ahv:function ahv(d){this.a=d},
aht:function aht(d){this.a=d},
ahu:function ahu(d){this.a=d},
ahs:function ahs(d,e){this.a=d
this.b=e},
ahm:function ahm(d){this.a=d},
G5:function G5(){}},D,I,F,G
B=c[0]
C=c[2]
H=c[42]
E=c[35]
A=a.updateHolder(c[7],A)
D=c[67]
I=c[23]
F=c[38]
G=c[30]
A.pO.prototype={
E(d){var x=null
return E.e0(new B.bp(C.df,B.k2(C.fa,B.b([new A.oo(G.iI("assets/multiple_tilt_image/sun.png",C.aX,x,159.5),x),new A.oo(G.iI("assets/multiple_tilt_image/moon.png",C.aX,275,x),x),new A.oo(G.iI("assets/multiple_tilt_image/star.png",C.aX,x,159.5),x)],y.e),C.fa,24,24),x),"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nPadding(\n  padding: const EdgeInsets.all(8),\n  child: Wrap(\n    spacing: 24,\n    runSpacing: 24,\n    alignment: WrapAlignment.center,\n    runAlignment: WrapAlignment.center,\n    children: [\n      AnimationCard(\n        child: Image.asset(\n          'assets/multiple_tilt_image/sun.png',\n          filterQuality: FilterQuality.high,\n          width: 159.5,\n        ),\n      ),\n      AnimationCard(\n        child: Image.asset(\n          'assets/multiple_tilt_image/moon.png',\n          filterQuality: FilterQuality.high,\n          height: 275,\n        ),\n      ),\n      AnimationCard(\n        child: Image.asset(\n          'assets/multiple_tilt_image/star.png',\n          filterQuality: FilterQuality.high,\n          width: 159.5,\n        ),\n      ),\n    ],\n  ),\n),\n\n...\n\nclass AnimationCard extends StatefulWidget {\n  const AnimationCard({super.key, required this.child});\n\n  final Widget child;\n\n  @override\n  State<AnimationCard> createState() => _AnimationCardState();\n}\n\nclass _AnimationCardState extends State<AnimationCard>\n    with SingleTickerProviderStateMixin {\n  late AnimationController scaleAnimationController;\n  late Animation<double> scaleAnimation;\n\n  @override\n  void initState() {\n    super.initState();\n    scaleAnimationController = AnimationController(\n      vsync: this,\n      duration: const Duration(milliseconds: 350),\n    );\n    scaleAnimation = Tween(begin: 1.0, end: 1.05).animate(\n      CurvedAnimation(\n        parent: scaleAnimationController,\n        curve: Curves.easeOut,\n      ),\n    );\n  }\n\n  @override\n  void dispose() {\n    scaleAnimationController.dispose();\n    super.dispose();\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Listener(\n      onPointerDown: (_) => scaleAnimationController.forward(),\n      onPointerUp: (_) => scaleAnimationController.reverse(),\n      onPointerCancel: (_) => scaleAnimationController.reverse(),\n      child: MouseRegion(\n        cursor: SystemMouseCursors.click,\n        onEnter: (_) => scaleAnimationController.forward(),\n        onExit: (_) => scaleAnimationController.reverse(),\n        child: ScaleTransition(\n          scale: scaleAnimation,\n          alignment: Alignment.center,\n          filterQuality: FilterQuality.high,\n          child: GestureDetector(\n            onTap: () => _showDialog(context),\n            // Tilt here\n            child: Tilt(\n              borderRadius: BorderRadius.circular(20),\n              tiltConfig: const TiltConfig(filterQuality: FilterQuality.high),\n              lightConfig: const LightConfig(\n                minIntensity: 0.1,\n                maxIntensity: 0.4,\n              ),\n              child: widget.child,\n            ),\n          ),\n        ),\n      ),\n    );\n  }\n\n  Future<void> _showDialog(BuildContext context) async {\n    return showDialog<void>(\n      context: context,\n      builder: (BuildContext context) {\n        return BackdropFilter(\n          filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),\n          child: Align(\n            child: Transform.scale(\n              scale: 1.2,\n              filterQuality: FilterQuality.high,\n              // Tilt here\n              child: Tilt(\n                borderRadius: BorderRadius.circular(20),\n                tiltConfig: const TiltConfig(\n                  enableRevert: false,\n                  enableSensorRevert: false,\n                  filterQuality: FilterQuality.high,\n                ),\n                lightConfig: const LightConfig(\n                  minIntensity: 0.1,\n                  maxIntensity: 0.4,\n                ),\n                shadowConfig: const ShadowConfig(disable: true),\n                child: widget.child,\n              ),\n            ),\n          ),\n        );\n      },\n    );\n  }\n}\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",1314,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/multiple_tilt.dart","Multiple Tilt",x)}}
A.oo.prototype={
a6(){return new A.OA(null,null)}}
A.OA.prototype={
ar(){var x,w,v=this,u=null
v.aH()
x=B.bv(u,D.Fo,0,u,1,u,v)
v.d=x
w=y.g
v.e=new B.al(B.cz(C.cz,x,u),new B.ah(1,1.05,w),w.h("al<aj.T>"))},
l(){var x=this.d
x===$&&B.a()
x.l()
this.a_O()},
E(d){var x=this,w=null,v=x.e
v===$&&B.a()
return B.mL(C.bl,B.iR(B.acJ(C.t,B.eC(w,E.d6(w,B.bM(20),x.a.c,F.aV,D.nn,F.a6,w,w,F.bG,D.WU,w),C.W,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.ahs(x,d),w,w,w,w),C.aX,v),C.b0,w,new A.aht(x),new A.ahu(x),w),new A.ahv(x),new A.ahw(x),w,w,w,new A.ahx(x))},
CA(d){return this.adt(d)},
adt(d){var x=0,w=B.T(y.f),v,u=this
var $async$CA=B.U(function(e,f){if(e===1)return B.Q(f,w)
while(true)switch(x){case 0:v=I.aEb(new A.ahm(u),d,y.f)
x=1
break
case 1:return B.R(v,w)}})
return B.S($async$CA,w)}}
A.G5.prototype={
l(){var x=this,w=x.bm$
if(w!=null)w.H(x.gff())
x.bm$=null
x.av()},
bf(){this.ca()
this.bW()
this.fg()}}
var z=a.updateTypes([])
A.ahw.prototype={
$1(d){var x=this.a.d
x===$&&B.a()
return x.by()},
$S:42}
A.ahx.prototype={
$1(d){var x=this.a.d
x===$&&B.a()
return x.ce()},
$S:82}
A.ahv.prototype={
$1(d){var x=this.a.d
x===$&&B.a()
return x.ce()},
$S:80}
A.aht.prototype={
$1(d){var x=this.a.d
x===$&&B.a()
return x.by()},
$S:40}
A.ahu.prototype={
$1(d){var x=this.a.d
x===$&&B.a()
return x.ce()},
$S:34}
A.ahs.prototype={
$0(){return this.a.CA(this.b)},
$S:0}
A.ahm.prototype={
$1(d){var x=null,w=$.a5().p5(10,10,C.am)
return B.Hq(new B.eg(C.t,x,x,E.aBi(E.d6(x,B.bM(20),this.a.a.c,F.aV,D.nn,F.a6,x,x,H.bX,D.WV,x),C.aX,1.2),x),w)},
$S:121};(function aliases(){var x=A.G5.prototype
x.a_O=x.l})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.pO,B.Y)
w(A.oo,B.I)
w(A.G5,B.X)
w(A.OA,A.G5)
v(B.d2,[A.ahw,A.ahx,A.ahv,A.aht,A.ahu,A.ahm])
w(A.ahs,B.eh)
x(A.G5,B.eH)})()
B.cD(b.typeUniverse,JSON.parse('{"oo":{"I":[],"c":[]},"pO":{"Y":[],"c":[]},"OA":{"X":["oo"]}}'))
var y={e:B.M("o<c>"),g:B.M("ah<F>"),f:B.M("~")};(function constants(){D.Fo=new B.aE(35e4)
D.nn=new E.jz(!1,C.j,0.1,0.4,4,F.cc,null)
D.WV=new E.e8(!1,null,10,null,!1,C.aX,!0,!1,!1,!0,C.Z,C.G)
D.WU=new E.e8(!1,null,10,null,!1,C.aX,!0,!0,!0,!0,C.Z,C.G)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_20",e:"endPart",h:b})})($__dart_deferred_initializers__,"K3yItpH9vgam1DRQwJT820CT874=");