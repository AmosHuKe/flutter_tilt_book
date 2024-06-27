((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_1",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,D,C={
aEb(){return new C.oh(null)},
oh:function oh(d){this.a=d},
Ba:function Ba(d){this.a=d},
ED:function ED(d){var _=this
_.d=0
_.a=null
_.b=d
_.c=null},
al9:function al9(d){this.a=d},
yR:function yR(d){this.a=d},
QF:function QF(d){this.a=null
this.b=d
this.c=null}},A,E,G,F,H
B=c[0]
D=c[2]
C=a.updateHolder(c[3],C)
A=c[54]
E=c[34]
G=c[37]
F=c[32]
H=c[55]
C.oh.prototype={
E(d){return E.e2(A.WD,"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nclass TiltDemo extends StatefulWidget {\n  const TiltDemo({super.key});\n\n  @override\n  State<TiltDemo> createState() => _TiltDemoState();\n}\n\nclass _TiltDemoState extends State<TiltDemo> {\n  int _counter = 0;\n\n  void _incrementCounter() {\n    setState(() {\n      _counter++;\n    });\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return ThemeData(\n        useMaterial3: true,\n        colorScheme: ColorScheme.fromSwatch(primarySwatch: Colors.brown),\n        appBarTheme: const AppBarTheme(\n          backgroundColor: Colors.brown,\n          titleTextStyle: TextStyle(color: Colors.white),\n        ),\n      ),\n\n      /// Tilt here\n      child: Tilt(\n        borderRadius: BorderRadius.circular(24),\n        tiltConfig: const TiltConfig(angle: 15),\n        lightConfig: const LightConfig(\n          minIntensity: 0.1,\n        ),\n        shadowConfig: const ShadowConfig(\n          minIntensity: 0.05,\n          maxIntensity: 0.4,\n          offsetFactor: 0.08,\n          minBlurRadius: 10,\n          maxBlurRadius: 15,\n        ),\n        childLayout: ChildLayout(\n          outer: [\n            Positioned(\n              top: 200,\n              child: TiltParallax(\n                size: const Offset(-20, -20),\n                child: Text(\n                  '$_counter',\n                  style: const TextStyle(fontSize: 20),\n                ),\n              ),\n            ),\n            Positioned(\n              bottom: 10,\n              right: 10,\n              child: TiltParallax(\n                size: const Offset(25, 25),\n                child: SizedBox(\n                  width: 50,\n                  height: 50,\n                  child: FloatingActionButton(\n                    onPressed: _incrementCounter,\n                    tooltip: 'Increment',\n                    child: const Icon(Icons.add),\n                  ),\n                ),\n              ),\n            ),\n          ],\n        ),\n        // onGestureMove: (TiltDataModel tiltDataModel, GesturesType gesturesType) {\n        //   print('--- onGestureMove ---');\n        //   print(tiltDataModel.areaProgress);\n        //   print(gesturesType.name);\n        // },\n        // onGestureLeave: (TiltDataModel tiltDataModel, GesturesType gesturesType) {\n        //   print('--- onGestureLeave ---');\n        //   print(tiltDataModel.areaProgress);\n        //   print(gesturesType.name);\n        // },\n        child: const MyHomePage(title: 'Flutter Tilt Demo'),\n      ),\n    );\n  }\n}\n\nclass MyHomePage extends StatefulWidget {\n  const MyHomePage({super.key, required this.title});\n\n  final String title;\n\n  @override\n  State<MyHomePage> createState() => _MyHomePageState();\n}\n\nclass _MyHomePageState extends State<MyHomePage> {\n  @override\n  Widget build(BuildContext context) {\n    return SizedBox(\n      width: 250,\n      height: 450,\n      child: Scaffold(\n        primary: false,\n        backgroundColor: const Color(0x206D6E6F),\n        appBar: AppBar(\n          primary: false,\n          title: Text(\n            widget.title,\n            style: const TextStyle(fontSize: 18),\n          ),\n        ),\n        body: const Center(\n          child: Column(\n            mainAxisAlignment: MainAxisAlignment.center,\n            children: [\n              Text(\n                'You have pushed the button this many times',\n                style: TextStyle(fontSize: 10),\n              ),\n            ],\n          ),\n        ),\n      ),\n    );\n  }\n}\n\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",740,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/example.dart","Example",null)}}
C.Ba.prototype={
a8(){return new C.ED(D.j)}}
C.ED.prototype={
a6Z(){this.a2(new C.al9(this))},
E(d){var x=null
return new B.um(B.un(A.A6,x,B.at6(x,x,D.X,x,x,A.tp),x,!0),E.d7(x,B.bI(24),A.LP,new E.h0(B.b([B.cW(x,F.eU(B.bC(""+this.d,x,x,x,A.TD),H.tD),x,x,x,x,200,x),B.cW(10,F.eU(B.d5(B.atY(A.GD,0,!1,this.ga6Y(),"Increment"),48,48),A.Mj),x,x,x,10,x,x)],y.a),D.ac,D.ac),A.Hf,x,x,A.Pc,A.WC,x),x)}}
C.yR.prototype={
a8(){return new C.QF(D.j)}}
C.QF.prototype={
E(d){var x=null
this.a.toString
return B.d5(B.aqo(B.asE(!1,B.bC("Flutter Tilt Demo",x,x,x,A.TE)),A.DY,A.C8,x,!1),450,250)}}
var z=a.updateTypes(["~()"])
C.al9.prototype={
$0(){++this.a.d},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(C.ED.prototype,"ga6Y","a6Z",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.oh,B.W)
w(B.J,[C.Ba,C.yR])
w(B.Y,[C.ED,C.QF])
x(C.al9,B.eg)})()
B.cD(b.typeUniverse,JSON.parse('{"Ba":{"J":[],"c":[]},"yR":{"J":[],"c":[]},"oh":{"W":[],"c":[]},"ED":{"Y":["Ba"]},"QF":{"Y":["yR"]}}'))
var y={a:B.N("o<c>")};(function constants(){var x=a.makeConstList
A.DF=new B.l(4293913577)
A.Dt=new B.l(4292332744)
A.Dq=new B.l(4290554532)
A.Dl=new B.l(4288776319)
A.Dj=new B.l(4287458915)
A.Dc=new B.l(4286141768)
A.D9=new B.l(4285353025)
A.D2=new B.l(4284301367)
A.D_=new B.l(4283315246)
A.CU=new B.l(4282263331)
A.Lv=new B.cu([50,A.DF,100,A.Dt,200,A.Dq,300,A.Dl,400,A.Dj,500,A.Dc,600,A.D9,700,A.D2,800,A.D_,900,A.CU],B.N("cu<q,l>"))
A.tp=new B.p2(A.Lv,4286141768)
A.A6=new B.nW(A.tp,null,null,null,null,null,null,null,null,null,null,null,null,D.yY,null)
A.TG=new B.j(!0,null,null,null,null,null,10,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
A.Wp=new B.b4("You have pushed the button this many times",null,A.TG,null,null,null,null,null)
A.Jx=B.b(x([A.Wp]),y.a)
A.E1=new B.rf(D.aw,D.es,D.z,D.O,null,D.bl,null,A.Jx,null)
A.C8=new B.h_(D.t,null,null,A.E1,null)
A.DY=new B.l(544042607)
A.G1=new B.by(57415,"MaterialIcons",null,!1)
A.GD=new B.dQ(A.G1,null,null,null,null)
A.Hf=new E.jh(!1,D.i,0.1,0.5,4,G.cd,null)
A.LP=new C.yR(null)
A.Mj=new B.f(25,25)
A.Pc=new E.mQ(!1,0.05,0.4,0.08,15,null,null)
A.TE=new B.j(!0,null,null,null,null,null,18,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
A.TD=new B.j(!0,null,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
A.WC=new E.dX(!1,null,15,null,!1,null,!0,!0,!0,!0,D.W,D.E)
A.WD=new C.Ba(null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_1",e:"endPart",h:b})})($__dart_deferred_initializers__,"c4mIVtQbPTi9gNcJrRObtC35bE4=");