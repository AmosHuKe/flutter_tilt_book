((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_20",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,H,D,A={
aKW(){return new A.pV(null)},
pV:function pV(d){this.a=d},
ov:function ov(d,e){this.c=d
this.a=e},
OO:function OO(d,e){var _=this
_.e=_.d=$
_.dU$=d
_.bq$=e
_.c=_.a=null},
ahy:function ahy(d){this.a=d},
ahz:function ahz(d){this.a=d},
ahx:function ahx(d){this.a=d},
ahv:function ahv(d){this.a=d},
ahw:function ahw(d){this.a=d},
ahu:function ahu(d,e){this.a=d
this.b=e},
aho:function aho(d){this.a=d},
Gh:function Gh(){}},E,I,F,G
B=c[0]
C=c[2]
H=c[42]
D=c[35]
A=a.updateHolder(c[7],A)
E=c[68]
I=c[23]
F=c[38]
G=c[30]
A.pV.prototype={
G(d){var x=null
return D.e0(new B.bG(C.dh,B.k_(C.fd,B.b([new A.ov(G.iD("assets/multiple_tilt_image/sun.png",C.aW,x,159.5),x),new A.ov(G.iD("assets/multiple_tilt_image/moon.png",C.aW,275,x),x),new A.ov(G.iD("assets/multiple_tilt_image/star.png",C.aW,x,159.5),x)],y.e),C.fd,24,24),x),"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nPadding(\n  padding: const EdgeInsets.all(8),\n  child: Wrap(\n    spacing: 24,\n    runSpacing: 24,\n    alignment: WrapAlignment.center,\n    runAlignment: WrapAlignment.center,\n    children: [\n      AnimationCard(\n        child: Image.asset(\n          'assets/multiple_tilt_image/sun.png',\n          filterQuality: FilterQuality.high,\n          width: 159.5,\n        ),\n      ),\n      AnimationCard(\n        child: Image.asset(\n          'assets/multiple_tilt_image/moon.png',\n          filterQuality: FilterQuality.high,\n          height: 275,\n        ),\n      ),\n      AnimationCard(\n        child: Image.asset(\n          'assets/multiple_tilt_image/star.png',\n          filterQuality: FilterQuality.high,\n          width: 159.5,\n        ),\n      ),\n    ],\n  ),\n),\n\n...\n\nclass AnimationCard extends StatefulWidget {\n  const AnimationCard({super.key, required this.child});\n\n  final Widget child;\n\n  @override\n  State<AnimationCard> createState() => _AnimationCardState();\n}\n\nclass _AnimationCardState extends State<AnimationCard>\n    with SingleTickerProviderStateMixin {\n  late AnimationController scaleAnimationController;\n  late Animation<double> scaleAnimation;\n\n  @override\n  void initState() {\n    super.initState();\n    scaleAnimationController = AnimationController(\n      vsync: this,\n      duration: const Duration(milliseconds: 350),\n    );\n    scaleAnimation = Tween(begin: 1.0, end: 1.05).animate(\n      CurvedAnimation(\n        parent: scaleAnimationController,\n        curve: Curves.easeOut,\n      ),\n    );\n  }\n\n  @override\n  void dispose() {\n    scaleAnimationController.dispose();\n    super.dispose();\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Listener(\n      onPointerDown: (_) => scaleAnimationController.forward(),\n      onPointerUp: (_) => scaleAnimationController.reverse(),\n      onPointerCancel: (_) => scaleAnimationController.reverse(),\n      child: MouseRegion(\n        cursor: SystemMouseCursors.click,\n        onEnter: (_) => scaleAnimationController.forward(),\n        onExit: (_) => scaleAnimationController.reverse(),\n        child: ScaleTransition(\n          scale: scaleAnimation,\n          alignment: Alignment.center,\n          filterQuality: FilterQuality.high,\n          child: GestureDetector(\n            onTap: () => _showDialog(context),\n            // Tilt here\n            child: Tilt(\n              borderRadius: BorderRadius.circular(20),\n              tiltConfig: const TiltConfig(filterQuality: FilterQuality.high),\n              lightConfig: const LightConfig(\n                minIntensity: 0.1,\n                maxIntensity: 0.4,\n              ),\n              child: widget.child,\n            ),\n          ),\n        ),\n      ),\n    );\n  }\n\n  Future<void> _showDialog(BuildContext context) async {\n    return showDialog<void>(\n      context: context,\n      builder: (BuildContext context) {\n        return BackdropFilter(\n          filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),\n          child: Align(\n            child: Transform.scale(\n              scale: 1.2,\n              filterQuality: FilterQuality.high,\n              // Tilt here\n              child: Tilt(\n                borderRadius: BorderRadius.circular(20),\n                tiltConfig: const TiltConfig(\n                  enableRevert: false,\n                  enableSensorRevert: false,\n                  filterQuality: FilterQuality.high,\n                ),\n                lightConfig: const LightConfig(\n                  minIntensity: 0.1,\n                  maxIntensity: 0.4,\n                ),\n                shadowConfig: const ShadowConfig(disable: true),\n                child: widget.child,\n              ),\n            ),\n          ),\n        );\n      },\n    );\n  }\n}\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",1314,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/multiple_tilt.dart","Multiple Tilt",x)}}
A.ov.prototype={
a8(){return new A.OO(null,null)}}
A.OO.prototype={
aq(){var x,w,v=this,u=null
v.aJ()
x=B.bt(u,C.jp,0,u,1,u,v)
v.d=x
w=y.g
v.e=new B.ay(B.co(C.dc,x,u),new B.ao(1,1.05,w),w.h("ay<au.T>"))},
l(){var x=this.d
x===$&&B.a()
x.l()
this.a0n()},
G(d){var x=this,w=null,v=x.e
v===$&&B.a()
return B.mM(C.bn,B.iN(B.act(C.u,B.eU(w,D.d3(w,B.bB(20),x.a.c,F.aV,E.nA,F.a7,w,w,F.bK,E.X6,w),C.a_,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.ahu(x,d),w,w,w,w),C.aW,v),C.b0,w,new A.ahv(x),new A.ahw(x),w),new A.ahx(x),new A.ahy(x),w,w,w,new A.ahz(x))},
CZ(d){return this.aei(d)},
aei(d){var x=0,w=B.P(y.f),v,u=this
var $async$CZ=B.Q(function(e,f){if(e===1)return B.M(f,w)
while(true)switch(x){case 0:v=I.aEf(new A.aho(u),d,y.f)
x=1
break
case 1:return B.N(v,w)}})
return B.O($async$CZ,w)}}
A.Gh.prototype={
l(){var x=this,w=x.bq$
if(w!=null)w.H(x.gfq())
x.bq$=null
x.av()},
bk(){this.ce()
this.bX()
this.fs()}}
var z=a.updateTypes([])
A.ahy.prototype={
$1(d){var x=this.a.d
x===$&&B.a()
return x.bC()},
$S:45}
A.ahz.prototype={
$1(d){var x=this.a.d
x===$&&B.a()
return x.cj()},
$S:103}
A.ahx.prototype={
$1(d){var x=this.a.d
x===$&&B.a()
return x.cj()},
$S:101}
A.ahv.prototype={
$1(d){var x=this.a.d
x===$&&B.a()
return x.bC()},
$S:46}
A.ahw.prototype={
$1(d){var x=this.a.d
x===$&&B.a()
return x.cj()},
$S:37}
A.ahu.prototype={
$0(){return this.a.CZ(this.b)},
$S:0}
A.aho.prototype={
$1(d){var x=null,w=$.a3().ti(10,10,C.ao)
return B.YA(new B.ey(C.u,x,x,D.aBm(D.d3(x,B.bB(20),this.a.a.c,F.aV,E.nA,F.a7,x,x,H.c1,E.X7,x),C.aW,1.2),x),!0,w)},
$S:111};(function aliases(){var x=A.Gh.prototype
x.a0n=x.l})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.pV,B.W)
w(A.ov,B.I)
w(A.Gh,B.V)
w(A.OO,A.Gh)
v(B.d_,[A.ahy,A.ahz,A.ahx,A.ahv,A.ahw,A.aho])
w(A.ahu,B.eh)
x(A.Gh,B.eI)})()
B.cC(b.typeUniverse,JSON.parse('{"ov":{"I":[],"c":[]},"pV":{"W":[],"c":[]},"OO":{"V":["ov"]}}'))
var y={e:B.R("l<c>"),g:B.R("ao<F>"),f:B.R("~")};(function constants(){E.nA=new D.jz(!1,C.j,0.1,0.4,4,F.cf,null)
E.X7=new D.e7(!1,null,10,null,!1,C.aW,!0,!1,!1,!0,C.a1,C.H)
E.X6=new D.e7(!1,null,10,null,!1,C.aW,!0,!0,!0,!0,C.a1,C.H)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_20",e:"endPart",h:b})})($__dart_deferred_initializers__,"TDcUUzBww1uo5B2MYx+Y17OtAzw=");