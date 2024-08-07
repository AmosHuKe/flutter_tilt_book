((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_1",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,D,C={
aJc(){return new C.oO(null)},
oO:function oO(d){this.a=d},
BV:function BV(d){this.a=d},
Fm:function Fm(){this.d=0
this.c=this.a=null},
ap5:function ap5(d){this.a=d},
zB:function zB(d){this.a=d},
RH:function RH(){this.c=this.a=null}},A,E,G,F,H
B=c[0]
D=c[2]
C=a.updateHolder(c[3],C)
A=c[54]
E=c[34]
G=c[37]
F=c[32]
H=c[55]
C.oO.prototype={
E(d){return E.ed(A.WT,"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nclass TiltDemo extends StatefulWidget {\n  const TiltDemo({super.key});\n\n  @override\n  State<TiltDemo> createState() => _TiltDemoState();\n}\n\nclass _TiltDemoState extends State<TiltDemo> {\n  int _counter = 0;\n\n  void _incrementCounter() {\n    setState(() {\n      _counter++;\n    });\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return ThemeData(\n        useMaterial3: true,\n        colorScheme: ColorScheme.fromSwatch(primarySwatch: Colors.brown),\n        appBarTheme: const AppBarTheme(\n          backgroundColor: Colors.brown,\n          titleTextStyle: TextStyle(color: Colors.white),\n        ),\n      ),\n\n      /// Tilt here\n      child: Tilt(\n        borderRadius: BorderRadius.circular(24),\n        tiltConfig: const TiltConfig(angle: 15),\n        lightConfig: const LightConfig(\n          minIntensity: 0.1,\n        ),\n        shadowConfig: const ShadowConfig(\n          minIntensity: 0.05,\n          maxIntensity: 0.4,\n          offsetFactor: 0.08,\n          minBlurRadius: 10,\n          maxBlurRadius: 15,\n        ),\n        childLayout: ChildLayout(\n          outer: [\n            Positioned(\n              top: 200,\n              child: TiltParallax(\n                size: const Offset(-20, -20),\n                child: Text(\n                  '$_counter',\n                  style: const TextStyle(fontSize: 20),\n                ),\n              ),\n            ),\n            Positioned(\n              bottom: 10,\n              right: 10,\n              child: TiltParallax(\n                size: const Offset(25, 25),\n                child: SizedBox(\n                  width: 50,\n                  height: 50,\n                  child: FloatingActionButton(\n                    onPressed: _incrementCounter,\n                    tooltip: 'Increment',\n                    child: const Icon(Icons.add),\n                  ),\n                ),\n              ),\n            ),\n          ],\n        ),\n        // onGestureMove: (TiltDataModel tiltDataModel, GesturesType gesturesType) {\n        //   print('--- onGestureMove ---');\n        //   print(tiltDataModel.areaProgress);\n        //   print(gesturesType.name);\n        // },\n        // onGestureLeave: (TiltDataModel tiltDataModel, GesturesType gesturesType) {\n        //   print('--- onGestureLeave ---');\n        //   print(tiltDataModel.areaProgress);\n        //   print(gesturesType.name);\n        // },\n        child: const MyHomePage(title: 'Flutter Tilt Demo'),\n      ),\n    );\n  }\n}\n\nclass MyHomePage extends StatefulWidget {\n  const MyHomePage({super.key, required this.title});\n\n  final String title;\n\n  @override\n  State<MyHomePage> createState() => _MyHomePageState();\n}\n\nclass _MyHomePageState extends State<MyHomePage> {\n  @override\n  Widget build(BuildContext context) {\n    return SizedBox(\n      width: 250,\n      height: 450,\n      child: Scaffold(\n        primary: false,\n        backgroundColor: const Color(0x206D6E6F),\n        appBar: AppBar(\n          primary: false,\n          title: Text(\n            widget.title,\n            style: const TextStyle(fontSize: 18),\n          ),\n        ),\n        body: const Center(\n          child: Column(\n            mainAxisAlignment: MainAxisAlignment.center,\n            children: [\n              Text(\n                'You have pushed the button this many times',\n                style: TextStyle(fontSize: 10),\n              ),\n            ],\n          ),\n        ),\n      ),\n    );\n  }\n}\n\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",740,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/example.dart","Example",null)}}
C.BV.prototype={
a8(){return new C.Fm()}}
C.Fm.prototype={
a8w(){this.a0(new C.ap5(this))},
E(d){var x=null
return new B.uV(B.qI(A.Ar,x,B.axi(x,x,D.a4,x,x,A.tG),x,!0),E.de(x,B.bM(24),A.M6,new E.hd(B.b([B.d1(x,F.f3(B.bB(""+this.d,x,x,x,A.TT),H.tV),x,x,x,x,200,x),B.d1(10,F.f3(B.d4(B.aJf(A.GZ,0,!1,this.ga8v(),"Increment"),48,48),A.MB),x,x,x,10,x,x)],y.a),D.ai,D.ai),A.HA,x,x,A.Pt,A.WR,x),x)}}
C.zB.prototype={
a8(){return new C.RH()}}
C.RH.prototype={
E(d){var x=null
this.a.toString
return B.d4(B.aux(B.awP(!1,B.bB("Flutter Tilt Demo",x,x,x,A.TU)),A.Ek,A.Cw,x,!1),450,250)}}
var z=a.updateTypes(["~()"])
C.ap5.prototype={
$0(){++this.a.d},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(C.Fm.prototype,"ga8v","a8w",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.oO,B.Y)
w(B.I,[C.BV,C.zB])
w(B.X,[C.Fm,C.RH])
x(C.ap5,B.es)})()
B.cJ(b.typeUniverse,JSON.parse('{"BV":{"I":[],"c":[]},"zB":{"I":[],"c":[]},"oO":{"Y":[],"c":[]},"Fm":{"X":["BV"]},"RH":{"X":["zB"]}}'))
var y={a:B.M("o<c>")};(function constants(){var x=a.makeConstList
A.E1=new B.i(4293913577)
A.DQ=new B.i(4292332744)
A.DN=new B.i(4290554532)
A.DI=new B.i(4288776319)
A.DG=new B.i(4287458915)
A.Dz=new B.i(4286141768)
A.Dw=new B.i(4285353025)
A.Dp=new B.i(4284301367)
A.Dm=new B.i(4283315246)
A.Dg=new B.i(4282263331)
A.LO=new B.cF([50,A.E1,100,A.DQ,200,A.DN,300,A.DI,400,A.DG,500,A.Dz,600,A.Dw,700,A.Dp,800,A.Dm,900,A.Dg],B.M("cF<q,i>"))
A.tG=new B.pB(A.LO,4286141768)
A.Ar=new B.oo(A.tG,null,null,null,null,null,null,null,null,null,null,null,null,D.zi,null)
A.TW=new B.l(!0,null,null,null,null,null,10,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
A.WF=new B.b5("You have pushed the button this many times",null,A.TW,null,null,null,null,null)
A.JU=B.b(x([A.WF]),y.a)
A.Eo=new B.rU(D.aE,D.eI,D.z,D.H,null,D.bq,null,A.JU,null)
A.Cw=new B.hc(D.t,null,null,A.Eo,null)
A.Ek=new B.i(544042607)
A.Go=new B.bA(57415,"MaterialIcons",null,!1)
A.GZ=new B.ea(A.Go,null,null,null,null)
A.HA=new E.jx(!1,D.j,0.1,0.5,4,G.cb,null)
A.M6=new C.zB(null)
A.MB=new B.f(25,25)
A.Pt=new E.nf(!1,0.05,0.4,0.08,15,null,null)
A.TU=new B.l(!0,null,null,null,null,null,18,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
A.TT=new B.l(!0,null,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
A.WR=new E.e2(!1,null,15,null,!1,null,!0,!0,!0,!0,D.Z,D.G)
A.WT=new C.BV(null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_1",e:"endPart",h:b})})($__dart_deferred_initializers__,"UmL10uTr/jTH02DWiHj7SWHXNDQ=");