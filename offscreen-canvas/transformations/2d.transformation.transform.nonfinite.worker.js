// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.transformation.transform.nonfinite
// Description:transform() with Infinity/NaN is ignored
// Note:

importScripts("/resources/testharness.js");
importScripts("/common/canvas-tests.js");

var t = async_test("transform() with Infinity/NaN is ignored");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.translate(100, 10);
ctx.transform(Infinity, 0, 0, 0, 0, 0);
ctx.transform(-Infinity, 0, 0, 0, 0, 0);
ctx.transform(NaN, 0, 0, 0, 0, 0);
ctx.transform(0, Infinity, 0, 0, 0, 0);
ctx.transform(0, -Infinity, 0, 0, 0, 0);
ctx.transform(0, NaN, 0, 0, 0, 0);
ctx.transform(0, 0, Infinity, 0, 0, 0);
ctx.transform(0, 0, -Infinity, 0, 0, 0);
ctx.transform(0, 0, NaN, 0, 0, 0);
ctx.transform(0, 0, 0, Infinity, 0, 0);
ctx.transform(0, 0, 0, -Infinity, 0, 0);
ctx.transform(0, 0, 0, NaN, 0, 0);
ctx.transform(0, 0, 0, 0, Infinity, 0);
ctx.transform(0, 0, 0, 0, -Infinity, 0);
ctx.transform(0, 0, 0, 0, NaN, 0);
ctx.transform(0, 0, 0, 0, 0, Infinity);
ctx.transform(0, 0, 0, 0, 0, -Infinity);
ctx.transform(0, 0, 0, 0, 0, NaN);
ctx.transform(Infinity, Infinity, 0, 0, 0, 0);
ctx.transform(Infinity, Infinity, Infinity, 0, 0, 0);
ctx.transform(Infinity, Infinity, Infinity, Infinity, 0, 0);
ctx.transform(Infinity, Infinity, Infinity, Infinity, Infinity, 0);
ctx.transform(Infinity, Infinity, Infinity, Infinity, Infinity, Infinity);
ctx.transform(Infinity, Infinity, Infinity, Infinity, 0, Infinity);
ctx.transform(Infinity, Infinity, Infinity, 0, Infinity, 0);
ctx.transform(Infinity, Infinity, Infinity, 0, Infinity, Infinity);
ctx.transform(Infinity, Infinity, Infinity, 0, 0, Infinity);
ctx.transform(Infinity, Infinity, 0, Infinity, 0, 0);
ctx.transform(Infinity, Infinity, 0, Infinity, Infinity, 0);
ctx.transform(Infinity, Infinity, 0, Infinity, Infinity, Infinity);
ctx.transform(Infinity, Infinity, 0, Infinity, 0, Infinity);
ctx.transform(Infinity, Infinity, 0, 0, Infinity, 0);
ctx.transform(Infinity, Infinity, 0, 0, Infinity, Infinity);
ctx.transform(Infinity, Infinity, 0, 0, 0, Infinity);
ctx.transform(Infinity, 0, Infinity, 0, 0, 0);
ctx.transform(Infinity, 0, Infinity, Infinity, 0, 0);
ctx.transform(Infinity, 0, Infinity, Infinity, Infinity, 0);
ctx.transform(Infinity, 0, Infinity, Infinity, Infinity, Infinity);
ctx.transform(Infinity, 0, Infinity, Infinity, 0, Infinity);
ctx.transform(Infinity, 0, Infinity, 0, Infinity, 0);
ctx.transform(Infinity, 0, Infinity, 0, Infinity, Infinity);
ctx.transform(Infinity, 0, Infinity, 0, 0, Infinity);
ctx.transform(Infinity, 0, 0, Infinity, 0, 0);
ctx.transform(Infinity, 0, 0, Infinity, Infinity, 0);
ctx.transform(Infinity, 0, 0, Infinity, Infinity, Infinity);
ctx.transform(Infinity, 0, 0, Infinity, 0, Infinity);
ctx.transform(Infinity, 0, 0, 0, Infinity, 0);
ctx.transform(Infinity, 0, 0, 0, Infinity, Infinity);
ctx.transform(Infinity, 0, 0, 0, 0, Infinity);
ctx.transform(0, Infinity, Infinity, 0, 0, 0);
ctx.transform(0, Infinity, Infinity, Infinity, 0, 0);
ctx.transform(0, Infinity, Infinity, Infinity, Infinity, 0);
ctx.transform(0, Infinity, Infinity, Infinity, Infinity, Infinity);
ctx.transform(0, Infinity, Infinity, Infinity, 0, Infinity);
ctx.transform(0, Infinity, Infinity, 0, Infinity, 0);
ctx.transform(0, Infinity, Infinity, 0, Infinity, Infinity);
ctx.transform(0, Infinity, Infinity, 0, 0, Infinity);
ctx.transform(0, Infinity, 0, Infinity, 0, 0);
ctx.transform(0, Infinity, 0, Infinity, Infinity, 0);
ctx.transform(0, Infinity, 0, Infinity, Infinity, Infinity);
ctx.transform(0, Infinity, 0, Infinity, 0, Infinity);
ctx.transform(0, Infinity, 0, 0, Infinity, 0);
ctx.transform(0, Infinity, 0, 0, Infinity, Infinity);
ctx.transform(0, Infinity, 0, 0, 0, Infinity);
ctx.transform(0, 0, Infinity, Infinity, 0, 0);
ctx.transform(0, 0, Infinity, Infinity, Infinity, 0);
ctx.transform(0, 0, Infinity, Infinity, Infinity, Infinity);
ctx.transform(0, 0, Infinity, Infinity, 0, Infinity);
ctx.transform(0, 0, Infinity, 0, Infinity, 0);
ctx.transform(0, 0, Infinity, 0, Infinity, Infinity);
ctx.transform(0, 0, Infinity, 0, 0, Infinity);
ctx.transform(0, 0, 0, Infinity, Infinity, 0);
ctx.transform(0, 0, 0, Infinity, Infinity, Infinity);
ctx.transform(0, 0, 0, Infinity, 0, Infinity);
ctx.transform(0, 0, 0, 0, Infinity, Infinity);
ctx.fillStyle = '#0f0';
ctx.fillRect(-100, -10, 100, 50);
_assertPixel(offscreenCanvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");

t.done();

});
done();