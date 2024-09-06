((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_15",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,H,A={
aKz(){return new A.pL(null)},
pL:function pL(d){this.a=d},
ol:function ol(d,e){this.c=d
this.a=e},
Oo:function Oo(d,e){var _=this
_.e=_.d=$
_.dN$=d
_.bm$=e
_.c=_.a=null},
ahg:function ahg(d){this.a=d},
ahh:function ahh(d){this.a=d},
ahf:function ahf(d){this.a=d},
ahd:function ahd(d){this.a=d},
ahe:function ahe(d){this.a=d},
ahc:function ahc(d,e){this.a=d
this.b=e},
ah6:function ah6(d){this.a=d},
FY:function FY(){}},D,I,E,F,G
B=c[0]
C=c[2]
H=c[41]
A=a.updateHolder(c[6],A)
D=c[64]
I=c[22]
E=c[34]
F=c[37]
G=c[29]
A.pL.prototype={
E(d){var x=null
return E.ec(new B.bp(C.dd,B.lo(C.f8,B.b([new A.ol(G.kL("assets/multiple_tilt_image/sun.png",C.aW,x,159.5),x),new A.ol(G.kL("assets/multiple_tilt_image/moon.png",C.aW,275,x),x),new A.ol(G.kL("assets/multiple_tilt_image/star.png",C.aW,x,159.5),x)],y.e),C.f8,24,24),x),"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nPadding(\n  padding: const EdgeInsets.all(8),\n  child: Wrap(\n    spacing: 24,\n    runSpacing: 24,\n    alignment: WrapAlignment.center,\n    runAlignment: WrapAlignment.center,\n    children: [\n      AnimationCard(\n        child: Image.asset(\n          'assets/multiple_tilt_image/sun.png',\n          filterQuality: FilterQuality.high,\n          width: 159.5,\n        ),\n      ),\n      AnimationCard(\n        child: Image.asset(\n          'assets/multiple_tilt_image/moon.png',\n          filterQuality: FilterQuality.high,\n          height: 275,\n        ),\n      ),\n      AnimationCard(\n        child: Image.asset(\n          'assets/multiple_tilt_image/star.png',\n          filterQuality: FilterQuality.high,\n          width: 159.5,\n        ),\n      ),\n    ],\n  ),\n),\n\n...\n\nclass AnimationCard extends StatefulWidget {\n  const AnimationCard({super.key, required this.child});\n\n  final Widget child;\n\n  @override\n  State<AnimationCard> createState() => _AnimationCardState();\n}\n\nclass _AnimationCardState extends State<AnimationCard>\n    with SingleTickerProviderStateMixin {\n  late AnimationController scaleAnimationController;\n  late Animation<double> scaleAnimation;\n\n  @override\n  void initState() {\n    super.initState();\n    scaleAnimationController = AnimationController(\n      vsync: this,\n      duration: const Duration(milliseconds: 350),\n    );\n    scaleAnimation = Tween(begin: 1.0, end: 1.05).animate(\n      CurvedAnimation(\n        parent: scaleAnimationController,\n        curve: Curves.easeOut,\n      ),\n    );\n  }\n\n  @override\n  void dispose() {\n    scaleAnimationController.dispose();\n    super.dispose();\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Listener(\n      onPointerDown: (_) => scaleAnimationController.forward(),\n      onPointerUp: (_) => scaleAnimationController.reverse(),\n      onPointerCancel: (_) => scaleAnimationController.reverse(),\n      child: MouseRegion(\n        cursor: SystemMouseCursors.click,\n        onEnter: (_) => scaleAnimationController.forward(),\n        onExit: (_) => scaleAnimationController.reverse(),\n        child: ScaleTransition(\n          scale: scaleAnimation,\n          alignment: Alignment.center,\n          filterQuality: FilterQuality.high,\n          child: GestureDetector(\n            onTap: () => _showDialog(context),\n            // Tilt here\n            child: Tilt(\n              borderRadius: BorderRadius.circular(20),\n              tiltConfig: const TiltConfig(filterQuality: FilterQuality.high),\n              lightConfig: const LightConfig(\n                minIntensity: 0.1,\n                maxIntensity: 0.4,\n              ),\n              child: widget.child,\n            ),\n          ),\n        ),\n      ),\n    );\n  }\n\n  Future<void> _showDialog(BuildContext context) async {\n    return showDialog<void>(\n      context: context,\n      builder: (BuildContext context) {\n        return BackdropFilter(\n          filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),\n          child: Align(\n            child: Transform.scale(\n              scale: 1.2,\n              filterQuality: FilterQuality.high,\n              // Tilt here\n              child: Tilt(\n                borderRadius: BorderRadius.circular(20),\n                tiltConfig: const TiltConfig(\n                  enableRevert: false,\n                  enableSensorRevert: false,\n                  filterQuality: FilterQuality.high,\n                ),\n                lightConfig: const LightConfig(\n                  minIntensity: 0.1,\n                  maxIntensity: 0.4,\n                ),\n                shadowConfig: const ShadowConfig(disable: true),\n                child: widget.child,\n              ),\n            ),\n          ),\n        );\n      },\n    );\n  }\n}\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",1314,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/multiple_tilt.dart","Multiple Tilt",x)}}
A.ol.prototype={
a8(){return new A.Oo(null,null)}}
A.Oo.prototype={
ar(){var x,w,v=this,u=null
v.aH()
x=B.bv(u,D.Fk,0,u,1,u,v)
v.d=x
w=y.g
v.e=new B.al(B.cz(C.cx,x,u),new B.ag(1,1.05,w),w.h("al<aj.T>"))},
l(){var x=this.d
x===$&&B.a()
x.l()
this.a_F()},
E(d){var x=this,w=null,v=x.e
v===$&&B.a()
return B.mH(C.bj,B.iO(B.acs(C.t,B.ey(w,E.de(w,B.bM(20),x.a.c,F.aU,D.nk,w,w,F.bF,D.WO,w),C.W,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.ahc(x,d),w,w,w,w),C.aW,v),C.b_,w,new A.ahd(x),new A.ahe(x),w),new A.ahf(x),new A.ahg(x),w,w,w,new A.ahh(x))},
Cx(d){return this.adj(d)},
adj(d){var x=0,w=B.T(y.f),v,u=this
var $async$Cx=B.U(function(e,f){if(e===1)return B.Q(f,w)
while(true)switch(x){case 0:v=I.aDQ(new A.ah6(u),d,y.f)
x=1
break
case 1:return B.R(v,w)}})
return B.S($async$Cx,w)}}
A.FY.prototype={
l(){var x=this,w=x.bm$
if(w!=null)w.H(x.gfe())
x.bm$=null
x.au()},
bf(){this.c9()
this.bW()
this.ff()}}
var z=a.updateTypes([])
A.ahg.prototype={
$1(d){var x=this.a.d
x===$&&B.a()
return x.by()},
$S:38}
A.ahh.prototype={
$1(d){var x=this.a.d
x===$&&B.a()
return x.ce()},
$S:108}
A.ahf.prototype={
$1(d){var x=this.a.d
x===$&&B.a()
return x.ce()},
$S:82}
A.ahd.prototype={
$1(d){var x=this.a.d
x===$&&B.a()
return x.by()},
$S:39}
A.ahe.prototype={
$1(d){var x=this.a.d
x===$&&B.a()
return x.ce()},
$S:36}
A.ahc.prototype={
$0(){return this.a.Cx(this.b)},
$S:0}
A.ah6.prototype={
$1(d){var x=null,w=$.a4().rN(10,10,C.ak),v=E.de(x,B.bM(20),this.a.a.c,F.aU,D.nk,x,x,H.bW,D.WP,x),u=1.2
return B.Hh(new B.e6(C.t,x,x,new B.lj(B.tR(u,1.2,1),C.t,!0,C.aW,v,x),x),w)},
$S:200};(function aliases(){var x=A.FY.prototype
x.a_F=x.l})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.pL,B.Y)
w(A.ol,B.I)
w(A.FY,B.X)
w(A.Oo,A.FY)
v(B.d6,[A.ahg,A.ahh,A.ahf,A.ahd,A.ahe,A.ah6])
w(A.ahc,B.es)
x(A.FY,B.eG)})()
B.cJ(b.typeUniverse,JSON.parse('{"ol":{"I":[],"c":[]},"pL":{"Y":[],"c":[]},"Oo":{"X":["ol"]}}'))
var y={e:B.M("o<c>"),g:B.M("ag<F>"),f:B.M("~")};(function constants(){D.Fk=new B.aD(35e4)
D.nk=new E.jx(!1,C.j,0.1,0.4,4,F.cb,null)
D.WP=new E.e1(!1,null,10,null,!1,C.aW,!0,!1,!1,!0,C.Z,C.G)
D.WO=new E.e1(!1,null,10,null,!1,C.aW,!0,!0,!0,!0,C.Z,C.G)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_15",e:"endPart",h:b})})($__dart_deferred_initializers__,"LN372jsqn9Bz92tM9UvZInrvMWM=");