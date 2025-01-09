((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_20",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,H,D,A={
aIs(){return new A.p1(null)},
p1:function p1(d){this.a=d},
nF:function nF(d,e){this.c=d
this.a=e},
NB:function NB(d,e){var _=this
_.e=_.d=$
_.dc$=d
_.aY$=e
_.c=_.a=null},
afj:function afj(d){this.a=d},
afk:function afk(d){this.a=d},
afi:function afi(d){this.a=d},
afg:function afg(d){this.a=d},
afh:function afh(d){this.a=d},
aff:function aff(d,e){this.a=d
this.b=e},
af9:function af9(d){this.a=d},
EV:function EV(){}},E,I,F,G
B=c[0]
C=c[2]
H=c[42]
D=c[35]
A=a.updateHolder(c[16],A)
E=c[68]
I=c[23]
F=c[38]
G=c[30]
A.p1.prototype={
D(d){var x=null
return D.dO(new B.by(C.e1,B.jC(C.eN,B.b([new A.nF(G.i6("assets/multiple_tilt_image/sun.png",C.aH,x,159.5),x),new A.nF(G.i6("assets/multiple_tilt_image/moon.png",C.aH,275,x),x),new A.nF(G.i6("assets/multiple_tilt_image/star.png",C.aH,x,159.5),x)],y.e),C.eN,24,24),x),"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nPadding(\n  padding: const EdgeInsets.all(8),\n  child: Wrap(\n    spacing: 24,\n    runSpacing: 24,\n    alignment: WrapAlignment.center,\n    runAlignment: WrapAlignment.center,\n    children: [\n      AnimationCard(\n        child: Image.asset(\n          'assets/multiple_tilt_image/sun.png',\n          filterQuality: FilterQuality.high,\n          width: 159.5,\n        ),\n      ),\n      AnimationCard(\n        child: Image.asset(\n          'assets/multiple_tilt_image/moon.png',\n          filterQuality: FilterQuality.high,\n          height: 275,\n        ),\n      ),\n      AnimationCard(\n        child: Image.asset(\n          'assets/multiple_tilt_image/star.png',\n          filterQuality: FilterQuality.high,\n          width: 159.5,\n        ),\n      ),\n    ],\n  ),\n),\n\n...\n\nclass AnimationCard extends StatefulWidget {\n  const AnimationCard({super.key, required this.child});\n\n  final Widget child;\n\n  @override\n  State<AnimationCard> createState() => _AnimationCardState();\n}\n\nclass _AnimationCardState extends State<AnimationCard>\n    with SingleTickerProviderStateMixin {\n  late AnimationController scaleAnimationController;\n  late Animation<double> scaleAnimation;\n\n  @override\n  void initState() {\n    super.initState();\n    scaleAnimationController = AnimationController(\n      vsync: this,\n      duration: const Duration(milliseconds: 350),\n    );\n    scaleAnimation = Tween(begin: 1.0, end: 1.05).animate(\n      CurvedAnimation(\n        parent: scaleAnimationController,\n        curve: Curves.easeOut,\n      ),\n    );\n  }\n\n  @override\n  void dispose() {\n    scaleAnimationController.dispose();\n    super.dispose();\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Listener(\n      onPointerDown: (_) => scaleAnimationController.forward(),\n      onPointerUp: (_) => scaleAnimationController.reverse(),\n      onPointerCancel: (_) => scaleAnimationController.reverse(),\n      child: MouseRegion(\n        cursor: SystemMouseCursors.click,\n        onEnter: (_) => scaleAnimationController.forward(),\n        onExit: (_) => scaleAnimationController.reverse(),\n        child: ScaleTransition(\n          scale: scaleAnimation,\n          alignment: Alignment.center,\n          filterQuality: FilterQuality.high,\n          child: GestureDetector(\n            onTap: () => _showDialog(context),\n            // Tilt here\n            child: Tilt(\n              borderRadius: BorderRadius.circular(20),\n              tiltConfig: const TiltConfig(filterQuality: FilterQuality.high),\n              lightConfig: const LightConfig(\n                minIntensity: 0.1,\n                maxIntensity: 0.4,\n              ),\n              child: widget.child,\n            ),\n          ),\n        ),\n      ),\n    );\n  }\n\n  Future<void> _showDialog(BuildContext context) async {\n    return showDialog<void>(\n      context: context,\n      builder: (BuildContext context) {\n        return BackdropFilter(\n          filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),\n          child: Align(\n            child: Transform.scale(\n              scale: 1.2,\n              filterQuality: FilterQuality.high,\n              // Tilt here\n              child: Tilt(\n                borderRadius: BorderRadius.circular(20),\n                tiltConfig: const TiltConfig(\n                  enableRevert: false,\n                  enableSensorRevert: false,\n                  filterQuality: FilterQuality.high,\n                ),\n                lightConfig: const LightConfig(\n                  minIntensity: 0.1,\n                  maxIntensity: 0.4,\n                ),\n                shadowConfig: const ShadowConfig(disable: true),\n                child: widget.child,\n              ),\n            ),\n          ),\n        );\n      },\n    );\n  }\n}\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",1314,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/multiple_tilt.dart","Multiple Tilt",x)}}
A.nF.prototype={
a3(){return new A.NB(null,null)}}
A.NB.prototype={
am(){var x,w,v=this,u=null
v.aC()
x=B.bo(u,C.iG,0,u,1,u,v)
v.d=x
w=y.g
v.e=new B.ao(B.ce(F.d_,x,u),new B.aj(1,1.05,w),w.h("ao<am.T>"))},
l(){var x=this.d
x===$&&B.a()
x.l()
this.Ys()},
D(d){var x=this,w=null,v=x.e
v===$&&B.a()
return B.m3(C.b3,B.j7(B.aac(C.t,B.eZ(w,D.cT(w,B.bv(20),x.a.c,F.aG,E.mX,F.a4,w,w,F.bw,E.W8,w),C.X,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.aff(x,d),w,w,w,w),C.aH,v),C.aL,w,new A.afg(x),new A.afh(x),w),new A.afi(x),new A.afj(x),w,w,w,new A.afk(x))},
Ba(d){return this.a9o(d)},
a9o(d){var x=0,w=B.N(y.f),v,u=this
var $async$Ba=B.O(function(e,f){if(e===1)return B.K(f,w)
while(true)switch(x){case 0:v=I.aBt(new A.af9(u),d,y.f)
x=1
break
case 1:return B.L(v,w)}})
return B.M($async$Ba,w)}}
A.EV.prototype={
l(){var x=this,w=x.aY$
if(w!=null)w.J(x.geM())
x.aY$=null
x.ap()},
b4(){this.bW()
this.bJ()
this.eN()}}
var z=a.updateTypes([])
A.afj.prototype={
$1(d){var x=this.a.d
x===$&&B.a()
return x.bo()},
$S:42}
A.afk.prototype={
$1(d){var x=this.a.d
x===$&&B.a()
return x.c2()},
$S:91}
A.afi.prototype={
$1(d){var x=this.a.d
x===$&&B.a()
return x.c2()},
$S:92}
A.afg.prototype={
$1(d){var x=this.a.d
x===$&&B.a()
return x.bo()},
$S:53}
A.afh.prototype={
$1(d){var x=this.a.d
x===$&&B.a()
return x.c2()},
$S:47}
A.aff.prototype={
$0(){return this.a.Ba(this.b)},
$S:0}
A.af9.prototype={
$1(d){var x=null,w=$.a4().r9(10,10,C.aj)
return B.Xd(new B.en(C.t,x,x,D.ayy(D.cT(x,B.bv(20),this.a.a.c,F.aG,E.mX,F.a4,x,x,H.bO,E.W9,x),C.aH,1.2),x),w)},
$S:178};(function aliases(){var x=A.EV.prototype
x.Ys=x.l})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.p1,B.W)
w(A.nF,B.H)
w(A.EV,B.U)
w(A.NB,A.EV)
v(B.cF,[A.afj,A.afk,A.afi,A.afg,A.afh,A.af9])
w(A.aff,B.e7)
x(A.EV,B.eh)})()
B.cr(b.typeUniverse,JSON.parse('{"nF":{"H":[],"c":[]},"p1":{"W":[],"c":[]},"NB":{"U":["nF"]}}'))
var y={e:B.P("n<c>"),g:B.P("aj<D>"),f:B.P("~")};(function constants(){E.mX=new D.j2(!1,C.i,0.1,0.4,4,F.c0,null)
E.W9=new D.dV(!1,null,10,null,!1,C.aH,!0,!1,!1,!0,C.a0,C.H)
E.W8=new D.dV(!1,null,10,null,!1,C.aH,!0,!0,!0,!0,C.a0,C.H)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_20",e:"endPart",h:b})})($__dart_deferred_initializers__,"icD/4AUNs6Utv7Jy/NpgcwurjOw=");