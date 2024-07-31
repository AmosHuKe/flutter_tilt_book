((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_1",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,D,C={
aEd(){return new C.og(null)},
og:function og(d){this.a=d},
Bb:function Bb(d){this.a=d},
EE:function EE(d){var _=this
_.d=0
_.a=null
_.b=d
_.c=null},
al8:function al8(d){this.a=d},
yS:function yS(d){this.a=d},
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
C.og.prototype={
E(d){return E.e3(A.WM,"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nclass TiltDemo extends StatefulWidget {\n  const TiltDemo({super.key});\n\n  @override\n  State<TiltDemo> createState() => _TiltDemoState();\n}\n\nclass _TiltDemoState extends State<TiltDemo> {\n  int _counter = 0;\n\n  void _incrementCounter() {\n    setState(() {\n      _counter++;\n    });\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return ThemeData(\n        useMaterial3: true,\n        colorScheme: ColorScheme.fromSwatch(primarySwatch: Colors.brown),\n        appBarTheme: const AppBarTheme(\n          backgroundColor: Colors.brown,\n          titleTextStyle: TextStyle(color: Colors.white),\n        ),\n      ),\n\n      /// Tilt here\n      child: Tilt(\n        borderRadius: BorderRadius.circular(24),\n        tiltConfig: const TiltConfig(angle: 15),\n        lightConfig: const LightConfig(\n          minIntensity: 0.1,\n        ),\n        shadowConfig: const ShadowConfig(\n          minIntensity: 0.05,\n          maxIntensity: 0.4,\n          offsetFactor: 0.08,\n          minBlurRadius: 10,\n          maxBlurRadius: 15,\n        ),\n        childLayout: ChildLayout(\n          outer: [\n            Positioned(\n              top: 200,\n              child: TiltParallax(\n                size: const Offset(-20, -20),\n                child: Text(\n                  '$_counter',\n                  style: const TextStyle(fontSize: 20),\n                ),\n              ),\n            ),\n            Positioned(\n              bottom: 10,\n              right: 10,\n              child: TiltParallax(\n                size: const Offset(25, 25),\n                child: SizedBox(\n                  width: 50,\n                  height: 50,\n                  child: FloatingActionButton(\n                    onPressed: _incrementCounter,\n                    tooltip: 'Increment',\n                    child: const Icon(Icons.add),\n                  ),\n                ),\n              ),\n            ),\n          ],\n        ),\n        // onGestureMove: (TiltDataModel tiltDataModel, GesturesType gesturesType) {\n        //   print('--- onGestureMove ---');\n        //   print(tiltDataModel.areaProgress);\n        //   print(gesturesType.name);\n        // },\n        // onGestureLeave: (TiltDataModel tiltDataModel, GesturesType gesturesType) {\n        //   print('--- onGestureLeave ---');\n        //   print(tiltDataModel.areaProgress);\n        //   print(gesturesType.name);\n        // },\n        child: const MyHomePage(title: 'Flutter Tilt Demo'),\n      ),\n    );\n  }\n}\n\nclass MyHomePage extends StatefulWidget {\n  const MyHomePage({super.key, required this.title});\n\n  final String title;\n\n  @override\n  State<MyHomePage> createState() => _MyHomePageState();\n}\n\nclass _MyHomePageState extends State<MyHomePage> {\n  @override\n  Widget build(BuildContext context) {\n    return SizedBox(\n      width: 250,\n      height: 450,\n      child: Scaffold(\n        primary: false,\n        backgroundColor: const Color(0x206D6E6F),\n        appBar: AppBar(\n          primary: false,\n          title: Text(\n            widget.title,\n            style: const TextStyle(fontSize: 18),\n          ),\n        ),\n        body: const Center(\n          child: Column(\n            mainAxisAlignment: MainAxisAlignment.center,\n            children: [\n              Text(\n                'You have pushed the button this many times',\n                style: TextStyle(fontSize: 10),\n              ),\n            ],\n          ),\n        ),\n      ),\n    );\n  }\n}\n\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",740,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/example.dart","Example",null)}}
C.Bb.prototype={
a8(){return new C.EE(D.j)}}
C.EE.prototype={
a6Z(){this.a2(new C.al8(this))},
E(d){var x=null
return new B.um(B.un(A.Af,x,B.ata(x,x,D.X,x,x,A.tz),x,!0),E.d8(x,B.bI(24),A.LX,new E.h0(B.b([B.cW(x,F.eV(B.bC(""+this.d,x,x,x,A.TM),H.tN),x,x,x,x,200,x),B.cW(10,F.eV(B.d6(B.au2(A.GM,0,!1,this.ga6Y(),"Increment"),48,48),A.Mr),x,x,x,10,x,x)],y.a),D.ac,D.ac),A.Ho,x,x,A.Pk,A.WL,x),x)}}
C.yS.prototype={
a8(){return new C.QF(D.j)}}
C.QF.prototype={
E(d){var x=null
this.a.toString
return B.d6(B.aqq(B.asI(!1,B.bC("Flutter Tilt Demo",x,x,x,A.TN)),A.E6,A.Ch,x,!1),450,250)}}
var z=a.updateTypes(["~()"])
C.al8.prototype={
$0(){++this.a.d},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(C.EE.prototype,"ga6Y","a6Z",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.og,B.W)
w(B.J,[C.Bb,C.yS])
w(B.Y,[C.EE,C.QF])
x(C.al8,B.ei)})()
B.cD(b.typeUniverse,JSON.parse('{"Bb":{"J":[],"c":[]},"yS":{"J":[],"c":[]},"og":{"W":[],"c":[]},"EE":{"Y":["Bb"]},"QF":{"Y":["yS"]}}'))
var y={a:B.N("o<c>")};(function constants(){var x=a.makeConstList
A.DO=new B.l(4293913577)
A.DC=new B.l(4292332744)
A.Dz=new B.l(4290554532)
A.Du=new B.l(4288776319)
A.Ds=new B.l(4287458915)
A.Dl=new B.l(4286141768)
A.Di=new B.l(4285353025)
A.Db=new B.l(4284301367)
A.D8=new B.l(4283315246)
A.D2=new B.l(4282263331)
A.LD=new B.ck([50,A.DO,100,A.DC,200,A.Dz,300,A.Du,400,A.Ds,500,A.Dl,600,A.Di,700,A.Db,800,A.D8,900,A.D2],B.N("ck<q,l>"))
A.tz=new B.p1(A.LD,4286141768)
A.Af=new B.nV(A.tz,null,null,null,null,null,null,null,null,null,null,null,null,D.z6,null)
A.TP=new B.j(!0,null,null,null,null,null,10,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
A.Wy=new B.b4("You have pushed the button this many times",null,A.TP,null,null,null,null,null)
A.JG=B.b(x([A.Wy]),y.a)
A.Ea=new B.rf(D.aw,D.es,D.A,D.O,null,D.bl,null,A.JG,null)
A.Ch=new B.h_(D.u,null,null,A.Ea,null)
A.E6=new B.l(544042607)
A.Ga=new B.by(57415,"MaterialIcons",null,!1)
A.GM=new B.dS(A.Ga,null,null,null,null)
A.Ho=new E.jj(!1,D.i,0.1,0.5,4,G.cd,null)
A.LX=new C.yS(null)
A.Mr=new B.f(25,25)
A.Pk=new E.mP(!1,0.05,0.4,0.08,15,null,null)
A.TN=new B.j(!0,null,null,null,null,null,18,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
A.TM=new B.j(!0,null,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
A.WL=new E.dY(!1,null,15,null,!1,null,!0,!0,!0,!0,D.W,D.E)
A.WM=new C.Bb(null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_1",e:"endPart",h:b})})($__dart_deferred_initializers__,"4Yj9CsNdrD4AFINBv+4KWaumWIk=");