function requestDeviceMotionEventPermission() {
  console.log("requestDeviceMotionEventPermission - called.");

  if (typeof DeviceMotionEvent !== "undefined") {
    // feature detect
    if (typeof DeviceMotionEvent.requestPermission === "function") {
      return DeviceMotionEvent.requestPermission()
        .then((permissionState) => {
          console.log(
            "requestDeviceMotionEventPermission – permissionState: ",
            permissionState
          );
          return permissionState;
        })
        .catch((err) =>
          console.warn("requestDeviceMotionEventPermission – Error: ", err)
        );
    } else {
      // handle regular non iOS 13+ devices
      console.warn(
        "requestDeviceMotionEventPermission – DeviceMotionEvent.requestPermission is not defined."
      );
    }
  } else {
    alert("You're device does not support motion :(");
  }
}