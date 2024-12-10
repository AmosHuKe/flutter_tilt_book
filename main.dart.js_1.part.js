((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_1",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,D,C={
aJv(){return new C.oR(null)},
oR:function oR(d){this.a=d},
C0:function C0(d){this.a=d},
Ft:function Ft(){this.d=0
this.c=this.a=null},
apn:function apn(d){this.a=d},
zH:function zH(d){this.a=d},
RU:function RU(){this.c=this.a=null}},A,E,F,G,H
B=c[0]
D=c[2]
C=a.updateHolder(c[3],C)
A=c[55]
E=c[35]
F=c[38]
G=c[33]
H=c[56]
C.oR.prototype={
E(d){return E.e0(A.WZ,"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nclass TiltDemo extends StatefulWidget {\n  const TiltDemo({super.key});\n\n  @override\n  State<TiltDemo> createState() => _TiltDemoState();\n}\n\nclass _TiltDemoState extends State<TiltDemo> {\n  int _counter = 0;\n\n  void _incrementCounter() {\n    setState(() {\n      _counter++;\n    });\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return ThemeData(\n        useMaterial3: true,\n        colorScheme: ColorScheme.fromSwatch(primarySwatch: Colors.brown),\n        appBarTheme: const AppBarTheme(\n          backgroundColor: Colors.brown,\n          titleTextStyle: TextStyle(color: Colors.white),\n        ),\n      ),\n\n      /// Tilt here\n      child: Tilt(\n        borderRadius: BorderRadius.circular(24),\n        tiltConfig: const TiltConfig(angle: 15),\n        lightConfig: const LightConfig(\n          minIntensity: 0.1,\n        ),\n        shadowConfig: const ShadowConfig(\n          minIntensity: 0.05,\n          maxIntensity: 0.4,\n          offsetFactor: 0.08,\n          minBlurRadius: 10,\n          maxBlurRadius: 15,\n        ),\n        childLayout: ChildLayout(\n          outer: [\n            Positioned(\n              top: 200,\n              child: TiltParallax(\n                size: const Offset(-20, -20),\n                child: Text(\n                  '$_counter',\n                  style: const TextStyle(fontSize: 20),\n                ),\n              ),\n            ),\n            Positioned(\n              bottom: 10,\n              right: 10,\n              child: TiltParallax(\n                size: const Offset(25, 25),\n                child: SizedBox(\n                  width: 50,\n                  height: 50,\n                  child: FloatingActionButton(\n                    onPressed: _incrementCounter,\n                    tooltip: 'Increment',\n                    child: const Icon(Icons.add),\n                  ),\n                ),\n              ),\n            ),\n          ],\n        ),\n        // onGestureMove: (TiltDataModel tiltDataModel, GesturesType gesturesType) {\n        //   print('--- onGestureMove ---');\n        //   print(tiltDataModel.areaProgress);\n        //   print(gesturesType.name);\n        // },\n        // onGestureLeave: (TiltDataModel tiltDataModel, GesturesType gesturesType) {\n        //   print('--- onGestureLeave ---');\n        //   print(tiltDataModel.areaProgress);\n        //   print(gesturesType.name);\n        // },\n        child: const MyHomePage(title: 'Flutter Tilt Demo'),\n      ),\n    );\n  }\n}\n\nclass MyHomePage extends StatefulWidget {\n  const MyHomePage({super.key, required this.title});\n\n  final String title;\n\n  @override\n  State<MyHomePage> createState() => _MyHomePageState();\n}\n\nclass _MyHomePageState extends State<MyHomePage> {\n  @override\n  Widget build(BuildContext context) {\n    return SizedBox(\n      width: 250,\n      height: 450,\n      child: Scaffold(\n        primary: false,\n        backgroundColor: const Color(0x206D6E6F),\n        appBar: AppBar(\n          primary: false,\n          title: Text(\n            widget.title,\n            style: const TextStyle(fontSize: 18),\n          ),\n        ),\n        body: const Center(\n          child: Column(\n            mainAxisAlignment: MainAxisAlignment.center,\n            children: [\n              Text(\n                'You have pushed the button this many times',\n                style: TextStyle(fontSize: 10),\n              ),\n            ],\n          ),\n        ),\n      ),\n    );\n  }\n}\n\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",740,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/example.dart","Example",null)}}
C.C0.prototype={
a6(){return new C.Ft()}}
C.Ft.prototype={
a8I(){this.a_(new C.apn(this))},
E(d){var x=null
return new B.uX(B.qL(A.Ax,x,B.axx(x,x,D.a4,x,x,A.tL),x,!0),E.d6(x,B.bM(24),A.Ma,new E.fK(B.b([B.cY(x,G.e9(B.bx(""+this.d,x,x,x,A.TY),H.u_),x,x,x,x,200,x),B.cY(10,G.e9(B.cZ(B.aJy(A.H1,0,!1,this.ga8H(),"Increment"),48,48),A.MF),x,x,x,10,x,x)],y.a),D.ae,D.ae),A.HD,F.a6,x,x,A.Py,A.WX,x),x)}}
C.zH.prototype={
a6(){return new C.RU()}}
C.RU.prototype={
E(d){var x=null
this.a.toString
return B.cZ(B.auM(B.ax4(!1,B.bx("Flutter Tilt Demo",x,x,x,A.TZ)),A.Eo,A.CB,x,!1),450,250)}}
var z=a.updateTypes(["~()"])
C.apn.prototype={
$0(){++this.a.d},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(C.Ft.prototype,"ga8H","a8I",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.oR,B.Y)
w(B.I,[C.C0,C.zH])
w(B.X,[C.Ft,C.RU])
x(C.apn,B.eh)})()
B.cD(b.typeUniverse,JSON.parse('{"C0":{"I":[],"c":[]},"zH":{"I":[],"c":[]},"oR":{"Y":[],"c":[]},"Ft":{"X":["C0"]},"RU":{"X":["zH"]}}'))
var y={a:B.M("o<c>")};(function constants(){var x=a.makeConstList
A.E6=new B.i(4293913577)
A.DV=new B.i(4292332744)
A.DS=new B.i(4290554532)
A.DN=new B.i(4288776319)
A.DL=new B.i(4287458915)
A.DE=new B.i(4286141768)
A.DB=new B.i(4285353025)
A.Du=new B.i(4284301367)
A.Dr=new B.i(4283315246)
A.Dl=new B.i(4282263331)
A.LS=new B.cG([50,A.E6,100,A.DV,200,A.DS,300,A.DN,400,A.DL,500,A.DE,600,A.DB,700,A.Du,800,A.Dr,900,A.Dl],B.M("cG<q,i>"))
A.tL=new B.pE(A.LS,4286141768)
A.Ax=new B.or(A.tL,null,null,null,null,null,null,null,null,null,null,null,null,D.zn,null)
A.U0=new B.l(!0,null,null,null,null,null,10,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
A.WL=new B.b5("You have pushed the button this many times",null,A.U0,null,null,null,null,null)
A.JY=B.b(x([A.WL]),y.a)
A.Es=new B.rW(D.aG,D.eK,D.z,D.H,null,D.bs,null,A.JY,null)
A.CB=new B.hg(D.t,null,null,A.Es,null)
A.Eo=new B.i(544042607)
A.Gs=new B.bB(57415,"MaterialIcons",null,!1)
A.H1=new B.ek(A.Gs,null,null,null,null)
A.HD=new E.jz(!1,D.j,0.1,0.5,4,F.cc,null)
A.Ma=new C.zH(null)
A.MF=new B.f(25,25)
A.Py=new E.li(!1,0.05,0.4,0.08,15,null,null)
A.TZ=new B.l(!0,null,null,null,null,null,18,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
A.TY=new B.l(!0,null,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
A.WX=new E.e8(!1,null,15,null,!1,null,!0,!0,!0,!0,D.Z,D.G)
A.WZ=new C.C0(null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_1",e:"endPart",h:b})})($__dart_deferred_initializers__,"qHtVVjlH+LnNOqJrswilghLtxfk=");