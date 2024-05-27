((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_1",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,D,C={
aE8(){return new C.on(null)},
on:function on(d){this.a=d},
Bc:function Bc(d){this.a=d},
EE:function EE(d){var _=this
_.d=0
_.a=null
_.b=d
_.c=null},
al6:function al6(d){this.a=d},
yU:function yU(d){this.a=d},
QK:function QK(d){this.a=null
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
C.on.prototype={
F(d){return E.e3(A.Wx,"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nclass TiltDemo extends StatefulWidget {\n  const TiltDemo({super.key});\n\n  @override\n  State<TiltDemo> createState() => _TiltDemoState();\n}\n\nclass _TiltDemoState extends State<TiltDemo> {\n  int _counter = 0;\n\n  void _incrementCounter() {\n    setState(() {\n      _counter++;\n    });\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return ThemeData(\n        useMaterial3: true,\n        colorScheme: ColorScheme.fromSwatch(primarySwatch: Colors.brown),\n        appBarTheme: const AppBarTheme(\n          backgroundColor: Colors.brown,\n          titleTextStyle: TextStyle(color: Colors.white),\n        ),\n      ),\n\n      /// Tilt here\n      child: Tilt(\n        borderRadius: BorderRadius.circular(24),\n        tiltConfig: const TiltConfig(angle: 15),\n        lightConfig: const LightConfig(\n          minIntensity: 0.1,\n        ),\n        shadowConfig: const ShadowConfig(\n          minIntensity: 0.05,\n          maxIntensity: 0.4,\n          offsetFactor: 0.08,\n          minBlurRadius: 10,\n          maxBlurRadius: 15,\n        ),\n        childLayout: ChildLayout(\n          outer: [\n            Positioned(\n              top: 200,\n              child: TiltParallax(\n                size: const Offset(-20, -20),\n                child: Text(\n                  '$_counter',\n                  style: const TextStyle(fontSize: 20),\n                ),\n              ),\n            ),\n            Positioned(\n              bottom: 10,\n              right: 10,\n              child: TiltParallax(\n                size: const Offset(25, 25),\n                child: SizedBox(\n                  width: 50,\n                  height: 50,\n                  child: FloatingActionButton(\n                    onPressed: _incrementCounter,\n                    tooltip: 'Increment',\n                    child: const Icon(Icons.add),\n                  ),\n                ),\n              ),\n            ),\n          ],\n        ),\n        // onGestureMove: (TiltDataModel tiltDataModel, GesturesType gesturesType) {\n        //   print('--- onGestureMove ---');\n        //   print(tiltDataModel.areaProgress);\n        //   print(gesturesType.name);\n        // },\n        // onGestureLeave: (TiltDataModel tiltDataModel, GesturesType gesturesType) {\n        //   print('--- onGestureLeave ---');\n        //   print(tiltDataModel.areaProgress);\n        //   print(gesturesType.name);\n        // },\n        child: const MyHomePage(title: 'Flutter Tilt Demo'),\n      ),\n    );\n  }\n}\n\nclass MyHomePage extends StatefulWidget {\n  const MyHomePage({super.key, required this.title});\n\n  final String title;\n\n  @override\n  State<MyHomePage> createState() => _MyHomePageState();\n}\n\nclass _MyHomePageState extends State<MyHomePage> {\n  @override\n  Widget build(BuildContext context) {\n    return SizedBox(\n      width: 250,\n      height: 450,\n      child: Scaffold(\n        primary: false,\n        backgroundColor: const Color(0x206D6E6F),\n        appBar: AppBar(\n          primary: false,\n          title: Text(\n            widget.title,\n            style: const TextStyle(fontSize: 18),\n          ),\n        ),\n        body: const Center(\n          child: Column(\n            mainAxisAlignment: MainAxisAlignment.center,\n            children: [\n              Text(\n                'You have pushed the button this many times',\n                style: TextStyle(fontSize: 10),\n              ),\n            ],\n          ),\n        ),\n      ),\n    );\n  }\n}\n\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",740,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/example.dart","Example",null)}}
C.Bc.prototype={
a8(){return new C.EE(D.j)}}
C.EE.prototype={
a6Z(){this.a2(new C.al6(this))},
F(d){var x=null
return new B.uy(B.uz(A.A2,x,B.at4(x,x,D.W,x,x,A.tm),x,!0),E.dk(x,B.bL(24),A.LL,new E.hw(B.b([B.cY(x,F.hq(B.bD(""+this.d,x,x,x,A.Tz),H.tz),x,x,x,x,200,x),B.cY(10,F.hq(B.d7(B.atW(A.Gz,0,!1,this.ga6Y(),"Increment"),48,48),A.Mf),x,x,x,10,x,x)],y.a),D.an,D.an),A.Hb,x,x,A.P7,A.Ww,x),x)}}
C.yU.prototype={
a8(){return new C.QK(D.j)}}
C.QK.prototype={
F(d){var x=null
this.a.toString
return B.d7(B.aqm(B.asC(!1,B.bD("Flutter Tilt Demo",x,x,x,A.TA)),A.DU,A.C4,x,!1),450,250)}}
var z=a.updateTypes(["~()"])
C.al6.prototype={
$0(){++this.a.d},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(C.EE.prototype,"ga6Y","a6Z",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.on,B.X)
w(B.K,[C.Bc,C.yU])
w(B.Y,[C.EE,C.QK])
x(C.al6,B.ej)})()
B.cF(b.typeUniverse,JSON.parse('{"Bc":{"K":[],"c":[]},"yU":{"K":[],"c":[]},"on":{"X":[],"c":[]},"EE":{"Y":["Bc"]},"QK":{"Y":["yU"]}}'))
var y={a:B.L("o<c>")};(function constants(){var x=a.makeConstList
A.DB=new B.m(4293913577)
A.Dp=new B.m(4292332744)
A.Dm=new B.m(4290554532)
A.Dh=new B.m(4288776319)
A.Df=new B.m(4287458915)
A.D8=new B.m(4286141768)
A.D5=new B.m(4285353025)
A.CZ=new B.m(4284301367)
A.CW=new B.m(4283315246)
A.CQ=new B.m(4282263331)
A.Lr=new B.cv([50,A.DB,100,A.Dp,200,A.Dm,300,A.Dh,400,A.Df,500,A.D8,600,A.D5,700,A.CZ,800,A.CW,900,A.CQ],B.L("cv<p,m>"))
A.tm=new B.p7(A.Lr,4286141768)
A.A2=new B.o_(A.tm,null,null,null,null,null,null,null,null,null,null,null,null,D.yT,null)
A.TC=new B.k(!0,null,null,null,null,null,10,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
A.Wl=new B.b4("You have pushed the button this many times",null,A.TC,null,null,null,null,null)
A.Jt=B.b(x([A.Wl]),y.a)
A.DY=new B.rl(D.aw,D.er,D.z,D.N,null,D.bl,null,A.Jt,null)
A.C4=new B.h_(D.t,null,null,A.DY,null)
A.DU=new B.m(544042607)
A.FY=new B.bz(57415,"MaterialIcons",null,!1)
A.Gz=new B.dS(A.FY,null,null,null,null)
A.Hb=new E.jl(!1,D.i,0.1,0.5,4,G.cb,null)
A.LL=new C.yU(null)
A.Mf=new B.f(25,25)
A.P7=new E.mV(!1,0.05,0.4,0.08,15,null,null)
A.TA=new B.k(!0,null,null,null,null,null,18,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
A.Tz=new B.k(!0,null,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
A.Ww=new E.eV(!1,null,15,null,!1,null,!0,!0,!0,!0,D.X,D.E)
A.Wx=new C.Bc(null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_1",e:"endPart",h:b})})($__dart_deferred_initializers__,"pab0N5XkuyaYSxkVEjXGPn9Wxlg=");