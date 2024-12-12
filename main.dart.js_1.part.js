((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_1",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,D,C={
aJr(){return new C.oX(null)},
oX:function oX(d){this.a=d},
Ce:function Ce(d){this.a=d},
FE:function FE(){this.d=0
this.c=this.a=null},
apm:function apm(d){this.a=d},
zS:function zS(d){this.a=d},
RZ:function RZ(){this.c=this.a=null}},A,E,F,G,H
B=c[0]
D=c[2]
C=a.updateHolder(c[3],C)
A=c[55]
E=c[35]
F=c[38]
G=c[33]
H=c[56]
C.oX.prototype={
G(d){return E.e0(A.Xb,"import 'package:flutter_tilt/flutter_tilt.dart';\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n\nclass TiltDemo extends StatefulWidget {\n  const TiltDemo({super.key});\n\n  @override\n  State<TiltDemo> createState() => _TiltDemoState();\n}\n\nclass _TiltDemoState extends State<TiltDemo> {\n  int _counter = 0;\n\n  void _incrementCounter() {\n    setState(() {\n      _counter++;\n    });\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return ThemeData(\n        useMaterial3: true,\n        colorScheme: ColorScheme.fromSwatch(primarySwatch: Colors.brown),\n        appBarTheme: const AppBarTheme(\n          backgroundColor: Colors.brown,\n          titleTextStyle: TextStyle(color: Colors.white),\n        ),\n      ),\n\n      /// Tilt here\n      child: Tilt(\n        borderRadius: BorderRadius.circular(24),\n        tiltConfig: const TiltConfig(angle: 15),\n        lightConfig: const LightConfig(\n          minIntensity: 0.1,\n        ),\n        shadowConfig: const ShadowConfig(\n          minIntensity: 0.05,\n          maxIntensity: 0.4,\n          offsetFactor: 0.08,\n          minBlurRadius: 10,\n          maxBlurRadius: 15,\n        ),\n        childLayout: ChildLayout(\n          outer: [\n            Positioned(\n              top: 200,\n              child: TiltParallax(\n                size: const Offset(-20, -20),\n                child: Text(\n                  '$_counter',\n                  style: const TextStyle(fontSize: 20),\n                ),\n              ),\n            ),\n            Positioned(\n              bottom: 10,\n              right: 10,\n              child: TiltParallax(\n                size: const Offset(25, 25),\n                child: SizedBox(\n                  width: 50,\n                  height: 50,\n                  child: FloatingActionButton(\n                    onPressed: _incrementCounter,\n                    tooltip: 'Increment',\n                    child: const Icon(Icons.add),\n                  ),\n                ),\n              ),\n            ),\n          ],\n        ),\n        // onGestureMove: (TiltDataModel tiltDataModel, GesturesType gesturesType) {\n        //   print('--- onGestureMove ---');\n        //   print(tiltDataModel.areaProgress);\n        //   print(gesturesType.name);\n        // },\n        // onGestureLeave: (TiltDataModel tiltDataModel, GesturesType gesturesType) {\n        //   print('--- onGestureLeave ---');\n        //   print(tiltDataModel.areaProgress);\n        //   print(gesturesType.name);\n        // },\n        child: const MyHomePage(title: 'Flutter Tilt Demo'),\n      ),\n    );\n  }\n}\n\nclass MyHomePage extends StatefulWidget {\n  const MyHomePage({super.key, required this.title});\n\n  final String title;\n\n  @override\n  State<MyHomePage> createState() => _MyHomePageState();\n}\n\nclass _MyHomePageState extends State<MyHomePage> {\n  @override\n  Widget build(BuildContext context) {\n    return SizedBox(\n      width: 250,\n      height: 450,\n      child: Scaffold(\n        primary: false,\n        backgroundColor: const Color(0x206D6E6F),\n        appBar: AppBar(\n          primary: false,\n          title: Text(\n            widget.title,\n            style: const TextStyle(fontSize: 18),\n          ),\n        ),\n        body: const Center(\n          child: Column(\n            mainAxisAlignment: MainAxisAlignment.center,\n            children: [\n              Text(\n                'You have pushed the button this many times',\n                style: TextStyle(fontSize: 10),\n              ),\n            ],\n          ),\n        ),\n      ),\n    );\n  }\n}\n\n\n\xb7\xb7\xb7\xb7\xb7\xb7\n",740,"https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/example.dart","Example",null)}}
C.Ce.prototype={
a8(){return new C.FE()}}
C.FE.prototype={
a9m(){this.a0(new C.apm(this))},
G(d){var x=null
return new B.v2(B.qS(A.AH,x,B.axB(x,x,D.a9,x,x,A.tW),x,!0),E.d3(x,B.bB(24),A.Mg,new E.fC(B.b([B.dn(x,G.e8(B.bA(""+this.d,x,x,x,A.Um),H.uc),x,x,x,x,200,x),B.dn(10,G.e8(B.d2(B.aJu(A.GX,0,!1,this.ga9l(),"Increment"),48,48),A.MN),x,x,x,10,x,x)],y.a),D.ae,D.ae),A.HJ,F.a7,x,x,A.PE,A.X9,x),x)}}
C.zS.prototype={
a8(){return new C.RZ()}}
C.RZ.prototype={
G(d){var x=null
this.a.toString
return B.d2(B.auQ(B.ax9(!1,B.bA("Flutter Tilt Demo",x,x,x,A.Un)),A.Da,A.CJ,x,!1),450,250)}}
var z=a.updateTypes(["~()"])
C.apm.prototype={
$0(){++this.a.d},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(C.FE.prototype,"ga9l","a9m",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.oX,B.W)
w(B.I,[C.Ce,C.zS])
w(B.V,[C.FE,C.RZ])
x(C.apm,B.eh)})()
B.cC(b.typeUniverse,JSON.parse('{"Ce":{"I":[],"c":[]},"zS":{"I":[],"c":[]},"oX":{"W":[],"c":[]},"FE":{"V":["Ce"]},"RZ":{"V":["zS"]}}'))
var y={a:B.R("m<c>")};(function constants(){var x=a.makeConstList
A.DJ=new B.l(1,0.9372549019607843,0.9215686274509803,0.9137254901960784,D.e)
A.E4=new B.l(1,0.8431372549019608,0.8,0.7843137254901961,D.e)
A.DL=new B.l(1,0.7372549019607844,0.6666666666666666,0.6431372549019608,D.e)
A.D6=new B.l(1,0.6313725490196078,0.5333333333333333,0.4980392156862745,D.e)
A.E8=new B.l(1,0.5529411764705883,0.43137254901960786,0.38823529411764707,D.e)
A.El=new B.l(1,0.4745098039215686,0.3333333333333333,0.2823529411764706,D.e)
A.Ed=new B.l(1,0.42745098039215684,0.2980392156862745,0.2549019607843137,D.e)
A.D4=new B.l(1,0.36470588235294116,0.25098039215686274,0.21568627450980393,D.e)
A.Dw=new B.l(1,0.3058823529411765,0.20392156862745098,0.1803921568627451,D.e)
A.E0=new B.l(1,0.24313725490196078,0.15294117647058825,0.13725490196078433,D.e)
A.LZ=new B.cG([50,A.DJ,100,A.E4,200,A.DL,300,A.D6,400,A.E8,500,A.El,600,A.Ed,700,A.D4,800,A.Dw,900,A.E0],B.R("cG<p,l>"))
A.tW=new B.pL(A.LZ,1,0.4745098039215686,0.3333333333333333,0.2823529411764706,D.e)
A.AH=new B.ox(A.tW,null,null,null,null,null,null,null,null,null,null,null,null,D.zB,null)
A.Up=new B.j(!0,null,null,null,null,null,10,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
A.WY=new B.b5("You have pushed the button this many times",null,A.Up,null,null,null,null,null)
A.K_=B.b(x([A.WY]),y.a)
A.Et=new B.t5(D.aG,D.ho,D.B,D.L,null,D.bv,null,0,A.K_,null)
A.CJ=new B.h8(D.u,null,null,A.Et,null)
A.Da=new B.l(0.12549019607843137,0.42745098039215684,0.43137254901960786,0.43529411764705883,D.e)
A.Gp=new B.bz(57415,"MaterialIcons",null,!1)
A.GX=new B.en(A.Gp,null,null,null,null)
A.HJ=new E.jz(!1,D.j,0.1,0.5,4,F.cf,null)
A.Mg=new C.zS(null)
A.MN=new B.f(25,25)
A.PE=new E.ld(!1,0.05,0.4,0.08,15,null,null)
A.Un=new B.j(!0,null,null,null,null,null,18,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
A.Um=new B.j(!0,null,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
A.X9=new E.e7(!1,null,15,null,!1,null,!0,!0,!0,!0,D.a1,D.H)
A.Xb=new C.Ce(null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_1",e:"endPart",h:b})})($__dart_deferred_initializers__,"/BkfHsQXdU/cINfVKg+o0UXA4XE=");