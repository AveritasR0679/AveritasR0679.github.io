(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"smartObject copy_HTML5 Canvas_presentation_atlas_", frames: [[2969,2614,163,98],[2643,2567,164,112],[2809,2567,158,105],[3800,1057,185,234],[3800,715,256,340],[3962,0,122,81],[930,2244,800,600],[1502,1315,1552,927],[2271,2244,370,385],[2643,2468,255,97],[3424,1253,359,46],[930,2002,421,153],[1732,2244,537,700],[3424,715,374,536],[2643,2244,276,127],[3424,0,536,713],[2643,2373,280,93],[3056,1315,922,695],[0,2002,928,669],[0,0,1500,2000],[3056,2012,1000,600],[1502,0,1920,1313]]}
];


// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["smartObject copy_HTML5 Canvas_presentation_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["smartObject copy_HTML5 Canvas_presentation_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["smartObject copy_HTML5 Canvas_presentation_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["smartObject copy_HTML5 Canvas_presentation_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["smartObject copy_HTML5 Canvas_presentation_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["smartObject copy_HTML5 Canvas_presentation_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.flashmo_018_bg = function() {
	this.spriteSheet = ss["smartObject copy_HTML5 Canvas_presentation_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.ScreenShot20190501at103533PM = function() {
	this.spriteSheet = ss["smartObject copy_HTML5 Canvas_presentation_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.ScreenShot20190501at104408PM = function() {
	this.spriteSheet = ss["smartObject copy_HTML5 Canvas_presentation_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.ScreenShot20190501at94216PM = function() {
	this.spriteSheet = ss["smartObject copy_HTML5 Canvas_presentation_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.ScreenShot20190502at102406AM = function() {
	this.spriteSheet = ss["smartObject copy_HTML5 Canvas_presentation_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.ScreenShot20190502at122224PM = function() {
	this.spriteSheet = ss["smartObject copy_HTML5 Canvas_presentation_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.ScreenShot20190502at75243PM = function() {
	this.spriteSheet = ss["smartObject copy_HTML5 Canvas_presentation_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.ScreenShot20190502at81327PM = function() {
	this.spriteSheet = ss["smartObject copy_HTML5 Canvas_presentation_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.ScreenShot20190502at84330PM = function() {
	this.spriteSheet = ss["smartObject copy_HTML5 Canvas_presentation_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.ScreenShot20190502at84743PM = function() {
	this.spriteSheet = ss["smartObject copy_HTML5 Canvas_presentation_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.ScreenShot20190502at85238PM = function() {
	this.spriteSheet = ss["smartObject copy_HTML5 Canvas_presentation_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.ScreenShot20190502at85932PM = function() {
	this.spriteSheet = ss["smartObject copy_HTML5 Canvas_presentation_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.ScreenShot20190502at92034PM = function() {
	this.spriteSheet = ss["smartObject copy_HTML5 Canvas_presentation_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.smartObject_SY = function() {
	this.spriteSheet = ss["smartObject copy_HTML5 Canvas_presentation_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.texture2 = function() {
	this.spriteSheet = ss["smartObject copy_HTML5 Canvas_presentation_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.texture3 = function() {
	this.spriteSheet = ss["smartObject copy_HTML5 Canvas_presentation_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ContentSlides = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* //navigate through slides with transitions
		
		import fl.transitions.*;
		import flash.display.MovieClip;*/
		
		this.stop();
		
		/*MovieClip(root).m2.addEventListener(MouseEvent.CLICK, buttonClickNext);
		 
		function buttonClickNext(evt:MouseEvent):void {
			if(this.currentFrame == this.totalFrames) gotoAndStop(1);
		     else nextFrame();
			TransitionManager.start(MovieClip(root).contents, {type: Wipe, duration: 1})
		}
		
		MovieClip(root).m1.addEventListener(MouseEvent.CLICK, buttonClickBack);
		 
		function buttonClickBack(evt:MouseEvent):void {
		     if(this.currentFrame != 1) prevFrame();
			 else stop();
			 TransitionManager.start(MovieClip(root).contents, {type: Wipe, duration: 1})
		}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15));

	// Title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAqIAGgRQAOAKAJgBQAOABAAgNQAAgKgOgGQgLgFgEgDIgHgGQgDgDgBgEQgCgEAAgEQAAgMAJgGQAIgHANAAQAKAAAQAHIgFAPQgKgIgKAAQgFAAgEADQgEADAAAEQAAAJAKAFIALAGQALAEAFAGQAFAGAAAKQAAAMgJAIQgJAHgPAAQgOAAgOgHg");
	this.shape.setTransform(-154.9,-222.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcAkQgOgMgBgXQAAgXAPgOQAMgMARAAQAUAAAMALQAKAMABARQgBAGgBADIhDAAQAAARAJAJQAJAHALAAQAOABAKgJIAHANQgEAEgIACQgKAEgNAAQgQAAgMgNgAAbgKQAAgKgHgHQgGgHgNAAQgKAAgHAHQgIAHgBAKIA0AAIAAAAg");
	this.shape_1.setTransform(-163.4,-222.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVBBQgKgDgGgEIAJgOQAPAKAMgBQALAAAGgDQAHgEAAgGQAAgLgRAAIgJABIgLABQgVAAABgPQAAgFAEgDQAFgEAHgBQgUgJAAgXQAAgOAKgLQAKgJAPgBQANABAJAFIAIgJIALAJIgKAIQAGAJAAANQAAAOgJAKQgJAJgOABIgNABIgGADQgFABAAACQAAAEAJAAIAMgBIALgCQAOABAHAGQAIAHAAAMQAAANgLAHQgMAJgRgBQgJAAgLgDgAgPgsQgGAGAAAJQAAAKAGAGQAFAHAJAAQAIAAAFgHQAFgGAAgKQAAgJgFgGQgGgGgHAAQgJAAgFAGg");
	this.shape_2.setTransform(-172.7,-221.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfApQgIgJAAgLQAAgOAMgJQANgLASABQAGgBAGADQAAgXgTAAQgQAAgIAIIgHgNQAEgEAJgDQAIgDAIAAQATAAAKAKQAJAJAAAUIAAAhQAAAMAHAFIAAAIQgKAAgFgDQgFgDgCgHQgKANgUAAQgLAAgIgIgAgPAGQgIAGAAAJQAAAOASAAQALABAKgMIAAgXIgLgBQgMAAgIAGg");
	this.shape_3.setTransform(-182,-222.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAuAwIAAg6QAAgXgTAAQgGAAgFAEQgGAEgCAFIAABEIgPAAIAAhCQAAgHgGgEQgFgEgIAAQgFAAgGAEQgGAEgCAFIAABEIgRAAIAAhdIALAAIAGALQAJgNAPAAQAUAAAHAMQADgEAHgFQAIgDAIAAQAPAAAIAJQAIAJAAAPIAAA+g");
	this.shape_4.setTransform(-194.2,-223);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIBAIAAh/IARAAIAAB/g");
	this.shape_5.setTransform(-204.1,-224.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLA1QgHgJAAgNIAAg0IgLAAIAAgNIALAAIAAgUIAQgGIAAAaIAZAAIAAANIgZAAIAAAuQAAALAEAGQAEAEAIAAQAHAAAHgCIACAOQgKADgNAAQgKAAgIgIg");
	this.shape_6.setTransform(-215.4,-224.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcAwIAAhdIARAAIAAAPQAKgRAQAAIAOABIgHARQgGgEgFAAQgJAAgGAIQgGAJgBALIAAA1g");
	this.shape_7.setTransform(-221.9,-223);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeAjQgMgNAAgWQAAgVAMgOQAMgNASAAQAUAAALANQAMANAAAWQAAAWgMANQgLAOgUAAQgTAAgLgOgAgRgZQgHAKAAAPQAAAjAYAAQAMAAAGgKQAHgJAAgQQAAgigZgBQgKAAgHAKg");
	this.shape_8.setTransform(-230.9,-222.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgoBCIAAiBIAQAAIAAAHQAKgKAOAAQASAAALANQAMAMAAAZQAAAUgMAOQgKAOgVgBQgGABgHgDQgGgCgDgDIAAAqgAgQgxQgEADgEADIAAA2QACACAFACQAGACAEAAQAfAAgBgiQABgSgIgIQgHgIgQAAQgEgBgFADg");
	this.shape_9.setTransform(-240.4,-221.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAuAwIAAg6QAAgXgTAAQgGAAgFAEQgGAEgCAFIAABEIgPAAIAAhCQAAgHgGgEQgFgEgIAAQgFAAgGAEQgGAEgCAFIAABEIgRAAIAAhdIALAAIAGALQAJgNAPAAQAUAAAHAMQADgEAHgFQAIgDAIAAQAPAAAIAJQAIAJAAAPIAAA+g");
	this.shape_10.setTransform(-253.2,-223);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIBAIAAh/IARAAIAAB/g");
	this.shape_11.setTransform(-263.1,-224.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAtQgEgEAAgGQAAgFAEgEQADgEAFABQAFgBAEAEQAEAEAAAFQAAAGgEAEQgEAEgFAAQgFAAgDgEgAgIgaQgEgDAAgGQAAgFAEgEQADgEAFAAQAFAAAEAEQAEAEAAAFQAAAGgEADQgEAFgFAAQgFAAgDgFg");
	this.shape_12.setTransform(-274.5,-222.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAEBBIAAhiIgZAQIAAgQQAKgFALgJQAKgJAHgIIAFAAIAACBg");
	this.shape_13.setTransform(-283.1,-224.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoBCIAAiBIAQAAIAAAHQAKgKAOAAQASAAALANQAMAMAAAZQAAAUgMAOQgKAOgVgBQgGABgHgDQgGgCgDgDIAAAqgAgQgxQgEADgEADIAAA2QACACAFACQAGACAEAAQAfAAgBgiQABgSgIgIQgHgIgQAAQgEgBgFADg");
	this.shape_14.setTransform(-297.1,-221.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgdAkQgNgMAAgXQAAgXAOgOQANgMAQAAQAUAAALALQALAMAAARQAAAGgBADIhCAAQAAARAJAJQAIAHALAAQAOABAKgJIAHANQgEAEgIACQgKAEgMAAQgRAAgNgNgAAbgKQAAgKgGgHQgIgHgLAAQgKAAgIAHQgHAHgBAKIAzAAIAAAAg");
	this.shape_15.setTransform(-307.3,-222.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgLA1QgHgJAAgNIAAg0IgLAAIAAgNIALAAIAAgUIAQgGIAAAaIAaAAIAAANIgaAAIAAAuQAAALADAGQAFAEAJAAQAGAAAGgCIADAOQgKADgNAAQgKAAgIgIg");
	this.shape_16.setTransform(-315.6,-224.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgjA6IAHgPQAEADAIACQAHADAGAAQAJAAAGgFQAHgHAAgIQAAgHgEgFQgDgGgNgGIgLgFQgNgFgFgJQgFgIAAgMQAAgOAKgKQAKgKAPAAQAWABAIAGIgFAQQgEgDgHgCQgHgCgGgBQgIAAgFAGQgGAFAAAHQAAAFACAEIAFAIIANAHIAKAFQAOAFAFAJQAFAJAAANQAAAOgLAKQgMALgTgBQgRABgMgJg");
	this.shape_17.setTransform(-323.7,-224.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgcAkQgOgMgBgXQAAgXAPgOQAMgMARAAQAUAAALALQAMAMAAARQAAAGgCADIhDAAQAAARAJAJQAJAHALAAQAOABAKgJIAHANQgEAEgIACQgKAEgMAAQgRAAgMgNgAAbgKQAAgKgHgHQgGgHgNAAQgKAAgHAHQgHAHgCAKIA0AAIAAAAg");
	this.shape_18.setTransform(3.5,-222.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgdA3QgLgNAAgVQAAgVANgPQANgPAQAAQAPABAHAGIAAgrIARAAIAACDIgRAAIAAgHQgIAJgQAAQgSAAgLgMgAgOgGQgIAKAAAPQAAAiAeAAQAEAAAFgDQAGgCABgCIAAg0QgGgJgLAAQgMgBgJAKg");
	this.shape_19.setTransform(-6.7,-224.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgBBBIgdhTIgPBRIgRAAIAZh/IAIAAIAdBcIAchcIAIAAIAaB/IgRAAIgPhRIgcBTg");
	this.shape_20.setTransform(-27.4,-224.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgVBBQgKgDgGgEIAJgOQAPAKAMgBQALAAAGgDQAHgEAAgGQAAgLgRAAIgJABIgLABQgVAAABgPQAAgFAEgDQAFgEAHgBQgUgJAAgXQAAgOAKgLQALgJAOgBQANABAJAFIAIgJIALAJIgKAIQAGAJAAANQAAAOgJAKQgJAJgOABIgNABIgHADQgEABAAACQABAEAIAAIAMgBIALgCQANABAIAGQAIAHAAAMQAAANgLAHQgMAJgRgBQgJAAgLgDgAgPgsQgGAGAAAJQAAAKAGAGQAFAHAJAAQAHAAAGgHQAFgGAAgKQAAgJgFgGQgGgGgHAAQgJAAgFAGg");
	this.shape_21.setTransform(-43.6,-221.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAVAwIAAg2QAAgPgFgGQgFgGgKAAQgFAAgGAEQgGADgEAFIAABFIgQAAIAAhdIALAAIAFAMQAJgOARAAQAfAAAAAlIAAA6g");
	this.shape_22.setTransform(-53.1,-223);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgCBBIAAhPIgNAAIAAgOIAcAAIAABdgAAAguQgDgDAAgFQAAgEADgDQACgDAEAAQAEAAADADQADADAAAEQAAAFgDADQgDADgEAAQgEAAgCgDg");
	this.shape_23.setTransform(-60.8,-224.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgdA3QgLgNAAgVQAAgVANgPQANgPAQAAQAPABAHAGIAAgrIARAAIAACDIgRAAIAAgHQgIAJgQAAQgSAAgLgMgAgOgGQgIAKAAAPQAAAiAeAAQAEAAAFgDQAGgCABgCIAAg0QgGgJgLAAQgMgBgJAKg");
	this.shape_24.setTransform(-68.4,-224.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAVAwIAAg2QAAgPgFgGQgFgGgKAAQgFAAgGAEQgGADgEAFIAABFIgQAAIAAhdIALAAIAFAMQAJgOARAAQAfAAAAAlIAAA6g");
	this.shape_25.setTransform(-78,-223);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgdAkQgNgMAAgXQAAgXAOgOQANgMAQAAQAUAAALALQAMAMgBARQABAGgCADIhCAAQAAARAJAJQAHAHAMAAQAOABAKgJIAHANQgEAEgIACQgKAEgNAAQgQAAgNgNgAAbgKQAAgKgGgHQgIgHgLAAQgKAAgIAHQgIAHAAAKIAzAAIAAAAg");
	this.shape_26.setTransform(-87.8,-222.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgPAnIAAhpIAQAAIAABmQAAAHAEAFQAEAEAHAAIAAAPQgfAAAAgcg");
	this.shape_27.setTransform(-95.1,-224.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgoBBIAAiAIAigBQASAAALAIQAKAJAAAPQAAAJgHAHQgGAHgIACQAPAEAHAIQAHAIAAAPQAAARgNAKQgMAKgTAAgAgWABIAAAxIANABQAQAAAIgGQAIgHAAgNQAAgNgIgGQgHgFgQgBgAgWgwIAAAlIANAAQAYAAAAgUQAAgTgWABg");
	this.shape_28.setTransform(-102.8,-224.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgdA3QgLgNAAgVQAAgVANgPQANgPAQAAQAPABAHAGIAAgrIARAAIAACDIgRAAIAAgHQgIAJgQAAQgSAAgLgMgAgOgGQgIAKAAAPQAAAiAeAAQAEAAAFgDQAGgCABgCIAAg0QgGgJgLAAQgMgBgJAKg");
	this.shape_29.setTransform(-118.9,-224.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAVAwIAAg2QAAgPgFgGQgFgGgKAAQgFAAgGAEQgGADgEAFIAABFIgQAAIAAhdIALAAIAFAMQAJgOARAAQAfAAAAAlIAAA6g");
	this.shape_30.setTransform(-128.5,-223);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAhBBIgJgbIgvAAIgJAbIgUAAIA0iBIAEAAIAxCBgAATAZIgSg4IgTA4IAlAAg");
	this.shape_31.setTransform(-138.7,-224.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AggAyQAKAAAIgEQAHgFAAgHQAAgIgDgHIgHgTIgZhAIARAAIAbBHIAYhHIARAAIgnBtQgEAIgJAGQgLAHgMgBg");
	this.shape_32.setTransform(-152.8,-221.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgLA1QgHgJAAgNIAAg0IgLAAIAAgNIALAAIAAgUIAQgGIAAAaIAZAAIAAANIgZAAIAAAuQAAALAEAGQADAEAJAAQAHAAAHgCIACAOQgKADgNAAQgKAAgIgIg");
	this.shape_33.setTransform(-160.6,-224.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgCBBIAAhPIgNAAIAAgOIAcAAIAABdgAAAguQgDgDAAgFQAAgEADgDQACgDAEAAQAEAAADADQADADAAAEQAAAFgDADQgDADgEAAQgEAAgCgDg");
	this.shape_34.setTransform(-167.1,-224.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgZAkQgNgNAAgWQAAgWANgOQANgNAWAAQAHAAAJADQAIAEAFADIgJALQgCgCgHgCQgGgDgHAAQgMAAgIAKQgIAJAAAQQAAAQAIAJQAIAIANAAQAMAAAMgIIAGAOQgOAJgTAAQgTAAgMgNg");
	this.shape_35.setTransform(-173.9,-222.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgoBCIAAiBIARAAIAAAHQAJgKANAAQAUAAALANQALAMAAAZQAAAUgLAOQgMAOgUgBQgGABgGgDQgIgCgBgDIAAAqgAgPgxQgGADgCADIAAA2QABACAFACQAGACAEAAQAfAAgBgiQAAgSgHgIQgIgIgOAAQgFgBgEADg");
	this.shape_36.setTransform(-192.5,-221.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgnAvQgOgTAAgcQAAgcAOgSQAOgUAYAAQAaABAOARQAPARAAAfQAAAfgPASQgOARgaAAQgYABgOgUgAgagkQgIANAAAXQAAAVAJAPQAIAPAQAAQARAAAKgOQAJgNAAgYQAAgxgkgBQgQABgJANg");
	this.shape_37.setTransform(-203.8,-224.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgLA1QgHgJAAgNIAAg0IgLAAIAAgNIALAAIAAgUIAQgGIAAAaIAZAAIAAANIgZAAIAAAuQAAALAEAGQADAEAJAAQAHAAAHgCIACAOQgKADgNAAQgKAAgIgIg");
	this.shape_38.setTransform(-218.7,-224.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgdAnQgIgJAAgQIAAg9IAQAAIAAA7QAAAWATgBQAIAAAGgEQAHgFADgGIAAhBIAQAAIAABdIgQAAIAAgNQgDAFgJAFQgIAFgHAAQgQAAgIgJg");
	this.shape_39.setTransform(-234.5,-222.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgWBEQARAAAFgFQAGgFAAgMIAAhPIgRAAIAAgOIAiAAIAABcQAAAUgLAJQgLAJgXAAgAAFhBQgCgDAAgEQAAgEACgDQADgDAFAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgFAAgDgDg");
	this.shape_40.setTransform(-243.5,-222.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgdA3QgLgNAAgVQAAgVANgPQANgPAQAAQAPABAHAGIAAgrIARAAIAACDIgRAAIAAgHQgIAJgQAAQgSAAgLgMgAgOgGQgIAKAAAPQAAAiAeAAQAEAAAFgDQAGgCABgCIAAg0QgGgJgLAAQgMgBgJAKg");
	this.shape_41.setTransform(-251.3,-224.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAhBBIgJgbIgvAAIgJAbIgUAAIA0iBIAEAAIAxCBgAATAZIgSg4IgTA4IAlAAg");
	this.shape_42.setTransform(-261.3,-224.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgmBBIAAgDIAng+QANgSAAgOQAAgSgTAAQgHABgGADQgHAEgCAGIgMgJQADgKAJgFQAJgEAMgBQARAAALAJQALAIAAAQQAAAPgPAVIgbAtIAxAAIAAAQg");
	this.shape_43.setTransform(-282.5,-224.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgdAkQgNgMAAgXQAAgXAOgOQANgMAQAAQAUAAAMALQALAMgBARQABAGgCADIhCAAQAAARAJAJQAHAHAMAAQAOABAKgJIAHANQgEAEgIACQgKAEgNAAQgQAAgNgNgAAbgKQAAgKgGgHQgIgHgLAAQgKAAgIAHQgIAHAAAKIAzAAIAAAAg");
	this.shape_44.setTransform(23.8,-222.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgBBBIgdhTIgPBRIgQAAIAXh/IAIAAIAeBcIAdhcIAHAAIAbB/IgRAAIgQhRIgcBTg");
	this.shape_45.setTransform(-7.1,-224.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAVBCIAAg7QAAgJgGgHQgFgGgJAAQgFAAgGAEQgGAEgEAEIAABFIgQAAIAAiDIAQAAIAAAwQAEgFAHgDQAIgEAGAAQAPAAAJAKQAIAKAAAQIAAA7g");
	this.shape_46.setTransform(-33.6,-224.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgLA1QgHgJAAgNIAAg0IgLAAIAAgNIALAAIAAgUIAQgGIAAAaIAZAAIAAANIgZAAIAAAuQAAALAEAGQADAEAJAAQAHAAAGgCIADAOQgKADgNAAQgKAAgIgIg");
	this.shape_47.setTransform(-41.9,-224.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgQBCIAAhPIgOAAIAAgOIAOAAQAAgSAJgKQAHgKAQAAQAGAAAJACIgEAMIgKgBQgIAAgFAGQgEAFAAAJIAAAFIATAAIAAAOIgTAAIAABPg");
	this.shape_48.setTransform(-54,-224.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgeAjQgMgNAAgWQAAgVAMgOQAMgNASAAQAUAAALANQAMANAAAWQAAAWgMANQgLAOgUAAQgTAAgLgOgAgRgZQgHAKAAAPQAAAjAYAAQAMAAAGgKQAHgJAAgQQAAgigZgBQgKAAgHAKg");
	this.shape_49.setTransform(-62.5,-222.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgeAjQgMgNAAgWQAAgVAMgOQAMgNASAAQAUAAALANQAMANAAAWQAAAWgMANQgLAOgUAAQgTAAgLgOgAgRgZQgHAKAAAPQAAAjAYAAQAMAAAGgKQAHgJAAgQQAAgigZgBQgKAAgHAKg");
	this.shape_50.setTransform(-107.2,-222.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgbAwIAAhdIARAAIAAAPQAIgRASAAIAMABIgHARQgFgEgGAAQgJAAgFAIQgHAJABALIAAA1g");
	this.shape_51.setTransform(-114.8,-223);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgUBBQgLgDgFgEIAJgOQAOAKANgBQAJAAAIgDQAGgEAAgGQAAgLgQAAIgKABIgMABQgTAAgBgPQAAgFAGgDQAEgEAHgBQgUgJAAgXQAAgOALgLQAJgJAQgBQAMABAIAFIAJgJIAKAJIgKAIQAHAJAAANQAAAOgJAKQgIAJgPABIgNABIgGADQgEABgBACQAAAEAJAAIAMgBIAKgCQAPABAHAGQAIAHAAAMQAAANgMAHQgLAJgRgBQgJAAgKgDgAgQgsQgFAGAAAJQAAAKAFAGQAGAHAJAAQAIAAAEgHQAGgGAAgKQAAgJgGgGQgFgGgHAAQgJAAgGAGg");
	this.shape_52.setTransform(-123.3,-221.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAVBCIgcgvIgPAPIAAAgIgRAAIAAiDIARAAIAABRIAjgrIATAAIgdAjIAlA6g");
	this.shape_53.setTransform(-131.8,-224.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgZAkQgNgNAAgWQAAgWANgOQAOgNAVAAQAIAAAIADQAJAEADADIgIALQgDgCgGgCQgHgDgFAAQgNAAgIAKQgIAJAAAQQAAAQAIAJQAIAIAOAAQALAAALgIIAHAOQgNAJgVAAQgSAAgMgNg");
	this.shape_54.setTransform(-141.4,-222.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgoBBIAAiAIAigBQASAAAKAIQALAJAAAPQAAAJgGAHQgIAHgHACQAPAEAHAIQAHAIAAAPQAAARgMAKQgNAKgTAAgAgWABIAAAxIAOABQAPAAAIgGQAHgHAAgNQAAgNgHgGQgHgFgQgBgAgWgwIAAAlIAOAAQAXAAAAgUQAAgTgVABg");
	this.shape_55.setTransform(-160.1,-224.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgcAkQgPgMAAgXQAAgXAPgOQAMgMARAAQAUAAAMALQALAMgBARQAAAGgBADIhDAAQABARAIAJQAJAHALAAQAOABAKgJIAHANQgEAEgIACQgKAEgNAAQgQAAgMgNgAAbgKQAAgKgHgHQgGgHgNAAQgJAAgIAHQgIAHgBAKIA0AAIAAAAg");
	this.shape_56.setTransform(-175.8,-222.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAVBCIAAg7QAAgJgGgHQgFgGgJAAQgFAAgGAEQgGAEgEAEIAABFIgQAAIAAiDIAQAAIAAAwQAEgFAHgDQAIgEAGAAQAPAAAJAKQAIAKAAAQIAAA7g");
	this.shape_57.setTransform(-185.6,-224.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgKA1QgIgJAAgNIAAg0IgLAAIAAgNIALAAIAAgUIARgGIAAAaIAZAAIAAANIgZAAIAAAuQAAALACAGQAFAEAJAAQAGAAAGgCIADAOQgKADgMAAQgLAAgHgIg");
	this.shape_58.setTransform(-193.9,-224.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgdAkQgNgMAAgXQAAgXAOgOQANgMAQAAQAUAAALALQALAMAAARQAAAGgBADIhCAAQAAARAJAJQAIAHALAAQAOABAKgJIAHANQgEAEgIACQgKAEgMAAQgRAAgNgNgAAbgKQAAgKgGgHQgIgHgLAAQgKAAgIAHQgHAHgBAKIAzAAIAAAAg");
	this.shape_59.setTransform(-207.9,-222.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgBAwIgphfIASAAIAYBBIAZhBIASAAIgpBfg");
	this.shape_60.setTransform(-217.2,-222.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgeAjQgMgNAAgWQAAgVAMgOQAMgNASAAQAUAAALANQAMANAAAWQAAAWgMANQgLAOgUAAQgTAAgLgOgAgRgZQgHAKAAAPQAAAjAYAAQAMAAAGgKQAHgJAAgQQAAgigZgBQgKAAgHAKg");
	this.shape_61.setTransform(-226.4,-222.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgcAkQgOgMgBgXQAAgXAPgOQAMgMARAAQAUAAAMALQAKAMABARQgBAGgBADIhDAAQABARAIAJQAJAHALAAQAOABAKgJIAHANQgEAEgIACQgKAEgNAAQgQAAgMgNgAAbgKQAAgKgHgHQgGgHgNAAQgKAAgHAHQgIAHgBAKIA0AAIAAAAg");
	this.shape_62.setTransform(-251,-222.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAZBBIghg4IgTAAIAAA4IgRAAIAAiAIANgBIASAAQAuAAAAAlQAAAMgHAKQgIAIgKADIAlA7gAgbgvIAAAqIAMABQAPAAAIgGQAGgEABgOQAAgLgIgEQgHgFgRAAg");
	this.shape_63.setTransform(-259.7,-224.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgWA/QgJgDgFgFIAJgNQAIAKAOAAQAXAAAAgYQAAgMgHgGQgHgHgLAAIgBAAIAAgNIAAAAQAWgBAAgTQAAgVgUAAQgLABgIAHIgHgMQAIgLAUAAQAPABALAIQALAKAAANQAAAMgHAHQgFAJgIACQAKAEAHAIQAGAJAAAMQAAARgLAKQgLALgUgBQgIABgIgEg");
	this.shape_64.setTransform(-282.4,-224.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgdAkQgNgMAAgXQAAgXAOgOQANgMAQAAQAUAAALALQALAMAAARQAAAGgBADIhCAAQAAARAJAJQAIAHALAAQAOABAKgJIAHANQgEAEgIACQgKAEgMAAQgRAAgNgNgAAbgKQAAgKgGgHQgIgHgLAAQgKAAgIAHQgHAHgBAKIAzAAIAAAAg");
	this.shape_65.setTransform(-307.3,-222.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgSBLQASgVAAg4QAAgwgSgZIAAgIQAPAIAKAZQAMAYAAAYQAAAbgKAXQgJAXgSANg");
	this.shape_66.setTransform(58.9,-222.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgIAwQgKgXAAgbQAAgYALgYQALgZAPgIIAAAIQgSAZAAAwQAAA4ASAVIAAAJQgSgNgJgXg");
	this.shape_67.setTransform(42.9,-222.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgMA/QgDgFgBgFQABgFADgEQAEgEAGAAQAEAAAEAEQADAEAAAFQAAAFgDAFQgEADgEAAQgGAAgEgDgAgKAbQgEgIAAgEQAAgGADgHQACgGAJgJIAJgOQADgFAAgEQABgQgTAAQgIAAgHAHIgGgNQAIgIASAAQAMAAAJAIQAIAHAAANQAAAGgBAGQgDAGgFAFIgMAOQgHAIAAAMIAAAIg");
	this.shape_68.setTransform(-100.8,-224.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgMA/QgEgFABgFQgBgFAEgEQAEgEAFAAQAFAAAEAEQAEAEAAAFQAAAFgEAFQgEADgFAAQgFAAgEgDgAgLAbQgDgIAAgEQABgGACgHQACgGAIgJIALgOQACgFAAgEQAAgQgRAAQgKAAgGAHIgHgNQAKgIARAAQAMAAAJAIQAJAHAAANQAAAGgCAGQgDAGgEAFIgOAOQgGAIAAAMIAAAIg");
	this.shape_69.setTransform(-107.4,-224.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgMA/QgEgFAAgFQAAgFAEgEQAEgEAGAAQAEAAAEAEQAEAEgBAFQABAFgEAFQgEADgEAAQgGAAgEgDgAgLAbQgCgIAAgEQAAgGACgHQACgGAIgJIAKgOQAEgFAAgEQAAgQgSAAQgJAAgHAHIgHgNQAJgIASAAQAMAAAJAIQAJAHgBANQAAAGgCAGQgCAGgFAFIgNAOQgGAIAAAMIAAAIg");
	this.shape_70.setTransform(-114,-224.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgXBEQASAAAFgFQAHgFAAgMIAAhPIgSAAIAAgOIAjAAIAABcQAAAUgMAJQgMAJgXAAgAAGhBQgEgDAAgEQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAEgDADQgDADgFAAQgDAAgDgDg");
	this.shape_71.setTransform(-154.4,-222.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgQBBQgGgDgEgEIgGAJIgIAAIAAiFIARAAIAAAtQACgDAHgDQAGgDAHAAQASAAAMAOQAMANAAATQAAAYgMAOQgMANgUAAQgGAAgHgCgAgQgNQgGADgBACIAAA1QAAACAGADQAGADAEAAQAQAAAHgIQAHgIAAgUQAAgQgIgIQgJgJgNAAQgEAAgFADg");
	this.shape_72.setTransform(-161.6,-224.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgeAqIAGgRQAOAKAJgBQAOABAAgNQAAgKgOgGQgLgFgEgDIgHgGQgDgDgBgEQgCgEAAgEQAAgMAJgGQAIgHANAAQAKAAAQAHIgFAPQgKgIgKAAQgFAAgEADQgEADAAAEQAAAJAKAFIALAGQALAEAFAGQAFAGAAAKQAAAMgJAIQgJAHgPAAQgOAAgOgHg");
	this.shape_73.setTransform(-224,-222.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgcAwIAAhdIARAAIAAAPQAKgRAQAAIAOABIgIARQgFgEgFAAQgKAAgFAIQgHAJAAALIAAA1g");
	this.shape_74.setTransform(-245.6,-223);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgfApQgIgJAAgLQAAgOAMgJQANgLASABQAGgBAGADQAAgXgTAAQgQAAgIAIIgHgNQAEgEAJgDQAIgDAIAAQATAAAKAKQAJAJAAAUIAAAhQAAAMAHAFIAAAIQgKAAgFgDQgFgDgCgHQgKANgUAAQgLAAgIgIgAgPAGQgIAGAAAJQAAAOASAAQALABAKgMIAAgXIgLgBQgMAAgIAGg");
	this.shape_75.setTransform(-254.5,-222.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgLA1QgHgJAAgNIAAg0IgLAAIAAgNIALAAIAAgUIAQgGIAAAaIAZAAIAAANIgZAAIAAAuQABALADAGQAEAEAIAAQAHAAAHgCIACAOQgKADgMAAQgLAAgIgIg");
	this.shape_76.setTransform(-268,-224.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgfApQgIgJAAgLQAAgOAMgJQANgLASABQAGgBAGADQAAgXgTAAQgQAAgIAIIgHgNQAEgEAJgDQAIgDAIAAQATAAAKAKQAJAJAAAUIAAAhQAAAMAHAFIAAAIQgKAAgFgDQgFgDgCgHQgKANgUAAQgLAAgIgIgAgPAGQgIAGAAAJQAAAOASAAQALABAKgMIAAgXIgLgBQgMAAgIAGg");
	this.shape_77.setTransform(-276.4,-222.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAcAwIgcg/IgaA/IgFAAIghhfIARAAIAVA9IAZg9IACAAIAbA9IAVg9IAQAAIghBfg");
	this.shape_78.setTransform(-297.6,-222.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgMA/QgDgFgBgFQABgFADgEQAEgEAGAAQAEAAAEAEQADAEABAFQgBAFgDAFQgEADgEAAQgGAAgEgDgAgKAbQgEgIAAgEQAAgGADgHQACgGAJgJIAKgOQACgFAAgEQABgQgTAAQgIAAgHAHIgGgNQAIgIASAAQAMAAAJAIQAIAHAAANQAAAGgBAGQgDAGgFAFIgMAOQgHAIAAAMIAAAIg");
	this.shape_79.setTransform(0.4,-224.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgZAkQgNgNAAgWQAAgWAOgOQAMgNAWAAQAIAAAIADQAIAEAFADIgJALQgCgCgHgCQgGgDgHAAQgMAAgIAKQgIAJAAAQQAAAQAIAJQAIAIAOAAQALAAALgIIAHAOQgNAJgVAAQgRAAgNgNg");
	this.shape_80.setTransform(-21.6,-222.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgdAkQgOgMABgXQAAgXAOgOQANgMAQAAQAUAAALALQALAMAAARQAAAGgBADIhCAAQgBARAKAJQAHAHAMAAQAOABAKgJIAHANQgEAEgIACQgKAEgMAAQgRAAgNgNgAAbgKQAAgKgGgHQgIgHgLAAQgKAAgIAHQgHAHgBAKIAzAAIAAAAg");
	this.shape_81.setTransform(-30.9,-222.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgXBEQASAAAFgFQAHgFgBgMIAAhPIgRAAIAAgOIAiAAIAABcQAAAUgLAJQgLAJgYAAgAAFhBQgCgDAAgEQAAgEACgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_82.setTransform(-39.9,-222.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgcAwIAAhdIARAAIAAAPQAKgRAQAAIANABIgGARQgGgEgGAAQgIAAgGAIQgGAJgBALIAAA1g");
	this.shape_83.setTransform(-79.8,-223);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgJBAIAAhwIgpAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_84.setTransform(-135,-224.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AglBAIAAh/IASAAIAABvIA5AAIAAAQg");
	this.shape_85.setTransform(-191.6,-224.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgKA1QgIgJAAgNIAAg0IgLAAIAAgNIALAAIAAgUIARgGIAAAaIAZAAIAAANIgZAAIAAAuQAAALACAGQAFAEAJAAQAGAAAGgCIADAOQgKADgNAAQgKAAgHgIg");
	this.shape_86.setTransform(-205.5,-224.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgBAwIgphfIASAAIAYBBIAahBIARAAIgpBfg");
	this.shape_87.setTransform(-230.3,-222.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgfAwQgPgRAAgeQAAgcAQgTQAPgUAYAAQAVABAMAGIgGAQQgJgHgSAAQgQAAgKAPQgKAOAAAWQAAAXAKANQALAOAPAAQASAAAKgNIAKAOQgPAPgYgBQgZABgOgTg");
	this.shape_88.setTransform(-259.6,-224.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgJBAIAAhwIgpAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_89.setTransform(-283,-224.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAbAwIgbg/IgbA/IgEAAIgihfIASAAIAUA9IAZg9IADAAIAaA9IAWg9IARAAIgiBfg");
	this.shape_90.setTransform(-299.9,-222.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AAcBAIAAg+Ig3AAIAAA+IgSAAIAAh/IASAAIAAAzIA3AAIAAgzIASAAIAAB/g");
	this.shape_91.setTransform(-322.1,-224.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgZAkQgNgNAAgWQAAgWANgOQANgNAWAAQAHAAAJADQAJAEADADIgIALQgDgCgGgCQgHgDgGAAQgMAAgIAKQgIAJAAAQQAAAQAIAJQAIAIANAAQAMAAAMgIIAGAOQgOAJgTAAQgTAAgMgNg");
	this.shape_92.setTransform(-178.6,-222.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAeBBIgehYIgcBYIgGAAIgpiBIATAAIAaBZIAchZIAFAAIAcBZIAahZIASAAIgnCBg");
	this.shape_93.setTransform(-223,-224.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAPBBIAAgjIg6AAIAAgKIBEhUIAGAAIAABQIANAAIAAAOIgNAAIAAAjgAgWAQIAlAAIAAgsg");
	this.shape_94.setTransform(-282.4,-224.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgUBBQgLgDgFgEIAJgOQAOAKANgBQAKAAAHgDQAGgEAAgGQAAgLgQAAIgKABIgMABQgTAAgBgPQAAgFAGgDQAEgEAHgBQgUgJAAgXQAAgOALgLQAJgJAQgBQAMABAIAFIAJgJIAKAJIgKAIQAHAJAAANQAAAOgJAKQgIAJgPABIgNABIgGADQgEABgBACQAAAEAJAAIAMgBIAKgCQAPABAHAGQAIAHAAAMQAAANgMAHQgLAJgRgBQgJAAgKgDgAgQgsQgFAGAAAJQAAAKAFAGQAGAHAJAAQAIAAAEgHQAGgGAAgKQAAgJgGgGQgFgGgHAAQgJAAgGAGg");
	this.shape_95.setTransform(164.7,-221.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgcAkQgOgMAAgXQAAgXAOgOQAMgMARAAQAUAAALALQAMAMAAARQAAAGgCADIhDAAQAAARAJAJQAJAHALAAQAOABAKgJIAHANQgEAEgIACQgKAEgMAAQgRAAgMgNgAAbgKQAAgKgHgHQgGgHgMAAQgLAAgHAHQgHAHgCAKIA0AAIAAAAg");
	this.shape_96.setTransform(112.4,-222.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgcAkQgPgMAAgXQAAgXAPgOQAMgMARAAQAUAAAMALQALAMAAARQgBAGgBADIhDAAQABARAIAJQAJAHALAAQAOABAKgJIAHANQgEAEgIACQgKAEgNAAQgQAAgMgNgAAbgKQAAgKgHgHQgGgHgNAAQgJAAgIAHQgIAHgBAKIA0AAIAAAAg");
	this.shape_97.setTransform(45.6,-222.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgVBBQgJgDgGgEIAJgOQAOAKANgBQAJAAAIgDQAGgEAAgGQAAgLgQAAIgKABIgMABQgTAAAAgPQAAgFAEgDQAFgEAHgBQgUgJAAgXQAAgOALgLQAJgJAPgBQANABAJAFIAIgJIAKAJIgJAIQAGAJAAANQAAAOgJAKQgJAJgOABIgNABIgGADQgFABAAACQAAAEAJAAIAMgBIALgCQAOABAHAGQAIAHAAAMQAAANgLAHQgMAJgRgBQgJAAgLgDgAgQgsQgFAGAAAJQAAAKAFAGQAGAHAJAAQAIAAAEgHQAGgGAAgKQAAgJgGgGQgFgGgHAAQgJAAgGAGg");
	this.shape_98.setTransform(36.3,-221.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgKA1QgIgJAAgNIAAg0IgLAAIAAgNIALAAIAAgUIARgGIAAAaIAZAAIAAANIgZAAIAAAuQAAALACAGQAEAEAKAAQAGAAAGgCIADAOQgKADgMAAQgLAAgHgIg");
	this.shape_99.setTransform(-26.1,-224.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgQBBQgGgDgEgEIgGAJIgIAAIAAiFIARAAIAAAtQACgDAHgDQAGgDAHAAQASAAAMAOQAMANAAATQAAAYgMAOQgMANgUAAQgGAAgHgCgAgQgNQgGADgBACIAAA1QAAACAGADQAGADAEAAQAQAAAHgIQAHgIAAgUQAAgQgIgIQgJgJgNAAQgEAAgFADg");
	this.shape_100.setTransform(-74.9,-224.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgKA1QgIgJAAgNIAAg0IgLAAIAAgNIALAAIAAgUIARgGIAAAaIAZAAIAAANIgZAAIAAAuQAAALACAGQAEAEAKAAQAGAAAGgCIADAOQgKADgMAAQgLAAgHgIg");
	this.shape_101.setTransform(-98.6,-224.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AAVBCIAAg7QAAgJgGgHQgFgGgJAAQgFAAgGAEQgGAEgEAEIAABFIgQAAIAAiDIAQAAIAAAwQAEgFAHgDQAIgEAGAAQAPAAAJAKQAIAKAAAQIAAA7g");
	this.shape_102.setTransform(-129.6,-224.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgdAnQgIgJAAgQIAAg9IAQAAIAAA7QAAAWATgBQAIAAAGgEQAHgFADgGIAAhBIAQAAIAABdIgQAAIAAgNQgDAFgJAFQgIAFgHAAQgQAAgIgJg");
	this.shape_103.setTransform(-146.7,-222.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgbAwIAAhdIARAAIAAAPQAIgRASAAIAMABIgHARQgFgEgGAAQgJAAgFAIQgHAJABALIAAA1g");
	this.shape_104.setTransform(-154.4,-223);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgQBBQgGgDgEgEIgGAJIgIAAIAAiFIARAAIAAAtQACgDAHgDQAGgDAHAAQASAAAMAOQAMANAAATQAAAYgMAOQgMANgUAAQgGAAgHgCgAgQgNQgGADgBACIAAA1QAAACAGADQAGADAEAAQAQAAAHgIQAHgIAAgUQAAgQgIgIQgJgJgNAAQgEAAgFADg");
	this.shape_105.setTransform(-163.3,-224.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgeAqIAGgRQAOAKAJgBQAOABAAgNQAAgKgOgGQgLgFgEgDIgHgGQgDgDgBgEQgCgEAAgEQAAgMAJgGQAIgHANAAQAKAAAQAHIgFAPQgKgIgKAAQgFAAgEADQgEADAAAEQAAAJAKAFIALAGQALAEAFAGQAFAGAAAKQAAAMgJAIQgJAHgPAAQgOAAgOgHg");
	this.shape_106.setTransform(-209.2,-222.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgdAnQgIgJAAgQIAAg9IAQAAIAAA7QAAAWATgBQAIAAAGgEQAHgFADgGIAAhBIAQAAIAABdIgQAAIAAgNQgDAFgJAFQgIAFgHAAQgQAAgIgJg");
	this.shape_107.setTransform(-217.7,-222.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgZAkQgNgNAAgWQAAgWANgOQANgNAWAAQAHAAAJADQAIAEAEADIgIALQgDgCgGgCQgGgDgHAAQgMAAgIAKQgIAJAAAQQAAAQAIAJQAIAIANAAQAMAAAMgIIAGAOQgOAJgTAAQgTAAgMgNg");
	this.shape_108.setTransform(-227.1,-222.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgdAkQgOgMAAgXQAAgXAPgOQAMgMARAAQAUAAAMALQALAMgBARQABAGgCADIhDAAQABARAIAJQAIAHAMAAQAOABAKgJIAHANQgEAEgIACQgKAEgNAAQgQAAgNgNgAAbgKQAAgKgGgHQgIgHgMAAQgJAAgIAHQgHAHgCAKIA0AAIAAAAg");
	this.shape_109.setTransform(-241.8,-222.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgeAqIAGgRQAOAKAJgBQAOABAAgNQAAgKgOgGQgLgFgEgDIgHgGQgDgDgBgEQgCgEAAgEQAAgMAJgGQAIgHANAAQAKAAAQAHIgFAPQgKgIgKAAQgFAAgEADQgEADAAAEQAAAJAKAFIALAGQALAEAFAGQAFAGAAAKQAAAMgJAIQgJAHgPAAQgOAAgOgHg");
	this.shape_110.setTransform(-250.4,-222.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AggA3QgMgKAAgVIAAhYIASAAIAABXQAAALAHAJQAHAHAMAAQANAAAHgHQAIgIAAgNIAAhWIARAAIAABZQAAATgMALQgMAKgVAAQgVAAgLgKg");
	this.shape_111.setTransform(-259.8,-224.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgkA3IAHgOQAMAKALAAQAYAAAAgfQAAgcgXAAQgMAAgKAJIgFgDIAAg/IA/AAIAAAPIgvAAIAAAgQAHgFAJAAQASAAAJALQAKAKgBATQAAAxgpAAQgTAAgMgLg");
	this.shape_112.setTransform(-282.2,-224.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgWBEQARAAAFgFQAGgFAAgMIAAhPIgRAAIAAgOIAjAAIAABcQAAAUgMAJQgMAJgWAAgAAGhBQgDgDAAgEQAAgEADgDQACgDAFAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgFAAgCgDg");
	this.shape_113.setTransform(-47.4,-222.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgcAwIAAhdIASAAIAAAPQAJgRARAAIAMABIgGARQgGgEgGAAQgIAAgGAIQgGAJAAALIAAA1g");
	this.shape_114.setTransform(-84.9,-223);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgKA1QgIgJAAgNIAAg0IgLAAIAAgNIALAAIAAgUIARgGIAAAaIAYAAIAAANIgYAAIAAAuQAAALACAGQAFAEAIAAQAHAAAHgCIACAOQgKADgMAAQgLAAgHgIg");
	this.shape_115.setTransform(-150.4,-224.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgKA1QgIgJAAgNIAAg0IgLAAIAAgNIALAAIAAgUIARgGIAAAaIAYAAIAAANIgYAAIAAAuQAAALACAGQAFAEAIAAQAHAAAHgCIACAOQgKADgMAAQgLAAgHgIg");
	this.shape_116.setTransform(-207.1,-224.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgnBAIAAh/IBPAAIAAAPIg9AAIAAAkIAsAAIAAAOIgsAAIAAA+g");
	this.shape_117.setTransform(-225.4,-224.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgnAKQAAgWARgYQAQgZASgFIAIAKQgHADgOASQgPASgBAJQAHgHAMAAQARAAAKALQALAKAAATQAAATgLALQgLALgQAAQgpAAAAg4gAgUAYQAAAcAVAAQAKAAAFgHQAGgIAAgLQAAgMgGgIQgGgGgJAAQgVAAAAAYg");
	this.shape_118.setTransform(-282.3,-224.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgjA6IAHgPQAEADAIACQAHADAGAAQAJAAAGgFQAHgHAAgIQAAgHgEgFQgDgGgNgGIgLgFQgNgFgFgJQgFgIAAgMQAAgOAKgKQAKgKAPAAQAWABAIAGIgFAQQgEgDgHgCQgHgCgGgBQgIAAgFAGQgGAFAAAHQAAAFACAEIAFAIIANAHIAKAFQAOAFAFAJQAFAJAAANQAAAOgLAKQgMALgTgBQgRABgMgJg");
	this.shape_119.setTransform(-323.7,-224.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgeBBQAGgVAQgiQAOghANgYIg8AAIAAgRIBTAAIAAAHIgMAXIgMAZIgMAaIgJAaIgIAWg");
	this.shape_120.setTransform(-282.1,-224.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgbAwIAAhdIAQAAIAAAPQAKgRAQAAIAOABIgIARQgFgEgFAAQgKAAgFAIQgHAJAAALIAAA1g");
	this.shape_121.setTransform(85.3,-223);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgPAnIAAhpIAQAAIAABmQAAAHAEAFQAEAEAHAAIAAAPQgfAAAAgcg");
	this.shape_122.setTransform(16.1,-224.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgbAwIAAhdIARAAIAAAPQAIgRASAAIAMABIgHARQgFgEgGAAQgIAAgGAIQgGAJAAALIAAA1g");
	this.shape_123.setTransform(-136.3,-223);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgDBBIgwiBIAUAAIAgBdIAghdIATAAIgvCBg");
	this.shape_124.setTransform(-225.4,-224.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgnAdQAAgLAHgKQAGgKAKgEQgIgFgFgHQgFgIAAgIQAAgPAJgIQALgJAOAAQARAAAJAJQAIAIABAPQAAAIgGAJQgGAJgGADQAWAMAAAWQAAARgKAKQgLALgSgBQgnAAAAglgAgVAdQAAAJAGAHQAGAHAJAAQAJAAAHgHQAGgHAAgJQAAgIgEgFQgFgHgPgIQgTAKAAASgAgQgiQgBALAWALQAMgLAAgMQAAgHgFgEQgEgFgIAAQgQABAAAQg");
	this.shape_125.setTransform(-282.3,-224.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgLA1QgHgJAAgNIAAg0IgLAAIAAgNIALAAIAAgUIAQgGIAAAaIAaAAIAAANIgaAAIAAAuQAAALADAGQAFAEAJAAQAGAAAGgCIADAOQgKADgNAAQgKAAgIgIg");
	this.shape_126.setTransform(-315.6,-224.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgoBCIAAiBIAQAAIAAAHQAKgKAOAAQASAAALANQAMAMAAAZQAAAUgMAOQgKAOgVgBQgGABgHgDQgGgCgDgDIAAAqgAgQgxQgEADgEADIAAA2QACACAFACQAGACAEAAQAfAAgBgiQABgSgIgIQgHgIgQAAQgEgBgFADg");
	this.shape_127.setTransform(-297.1,-221.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgKA1QgIgJAAgNIAAg0IgLAAIAAgNIALAAIAAgUIARgGIAAAaIAYAAIAAANIgYAAIAAAuQAAALADAGQAEAEAIAAQAHAAAHgCIACAOQgKADgMAAQgLAAgHgIg");
	this.shape_128.setTransform(123.6,-224.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgnBBIAAiAIAYgBQA3AAAAAmQAAAqgwAAIgNgBIAAAygAgVgvIAAAvIALAAQAgAAAAgZQAAgXgiAAg");
	this.shape_129.setTransform(96.6,-224.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgbAwIAAhdIARAAIAAAPQAIgRASAAIAMABIgHARQgFgEgFAAQgKAAgFAIQgHAJABALIAAA1g");
	this.shape_130.setTransform(83.1,-223);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgIBAIAAg5IgphGIASAAIAfA4IAgg4IASAAIgpBGIAAA5g");
	this.shape_131.setTransform(56.4,-224.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgZAkQgNgNAAgWQAAgWAOgOQANgNAVAAQAHAAAJADQAJAEAEADIgJALQgDgCgGgCQgHgDgFAAQgNAAgIAKQgIAJAAAQQAAAQAIAJQAIAIAOAAQALAAALgIIAHAOQgNAJgVAAQgRAAgNgNg");
	this.shape_132.setTransform(-1.1,-222.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgsBBIAAiAIAggBQAaAAAPARQAQAQAAAbQAABFg/AAgAgagvIAABfIAOABQASAAAKgOQALgOAAgXQAAgugoAAg");
	this.shape_133.setTransform(-20.6,-224.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgeAjQgMgNAAgWQAAgVAMgOQAMgNASAAQAUAAALANQAMANAAAWQAAAWgMANQgLAOgUAAQgTAAgLgOgAgRgZQgHAKAAAPQAAAjAYAAQAMAAAGgKQAHgJAAgQQAAgigZgBQgKAAgHAKg");
	this.shape_134.setTransform(-36.6,-222.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgdAkQgOgMABgXQAAgXAOgOQANgMAQAAQAUAAALALQAMAMAAARQAAAGgCADIhCAAQgBARAKAJQAHAHAMAAQAOABAKgJIAHANQgEAEgIACQgKAEgMAAQgRAAgNgNgAAbgKQAAgKgHgHQgHgHgLAAQgKAAgIAHQgHAHgBAKIAzAAIAAAAg");
	this.shape_135.setTransform(-66.8,-222.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgoBCIAAiBIAQAAIAAAHQAKgKAOAAQATAAAKANQAMAMAAAZQAAAUgMAOQgKAOgVgBQgGABgHgDQgHgCgCgDIAAAqgAgQgxQgEADgEADIAAA2QACACAFACQAFACAFAAQAfAAAAgiQAAgSgIgIQgIgIgPAAQgDgBgGADg");
	this.shape_136.setTransform(-76.4,-221.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgeAjQgMgNAAgWQAAgVAMgOQAMgNASAAQAUAAALANQAMANAAAWQAAAWgMANQgLAOgUAAQgTAAgLgOgAgRgZQgHAKAAAPQAAAjAYAAQAMAAAGgKQAHgJAAgQQAAgigZgBQgKAAgHAKg");
	this.shape_137.setTransform(-126.8,-222.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgZAkQgNgNAAgWQAAgWAOgOQAMgNAWAAQAIAAAIADQAIAEAFADIgJALQgCgCgHgCQgGgDgHAAQgMAAgIAKQgIAJAAAQQAAAQAIAJQAIAIANAAQAMAAALgIIAHAOQgOAJgUAAQgRAAgNgNg");
	this.shape_138.setTransform(-143.2,-222.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgeAjQgMgNAAgWQAAgVAMgOQAMgNASAAQAUAAALANQAMANAAAWQAAAWgMANQgLAOgUAAQgTAAgLgOgAgRgZQgHAKAAAPQAAAjAYAAQAMAAAGgKQAHgJAAgQQAAgigZgBQgKAAgHAKg");
	this.shape_139.setTransform(-221,-222.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgoBCIAAiBIAQAAIAAAHQAKgKAOAAQASAAALANQAMAMAAAZQAAAUgMAOQgLAOgUgBQgGABgHgDQgGgCgDgDIAAAqgAgQgxQgFADgDADIAAA2QACACAFACQAFACAFAAQAfAAAAgiQAAgSgIgIQgHgIgQAAQgEgBgFADg");
	this.shape_140.setTransform(-235.8,-221.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AglBAIAAh/IBLAAIAAAPIg5AAIAAAkIApAAIAAAOIgpAAIAAAuIA4AAIAAAQg");
	this.shape_141.setTransform(-260.5,-224.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgTA5QAHgDAOgRQAPgSABgJQgHAGgMAAQgRAAgKgLQgLgJAAgUQAAgSALgMQAKgMAQAAQAqABAAA4QAAAWgRAYQgQAZgSAEgAgPgrQgGAGAAAMQAAAMAGAIQAGAGAJAAQAVABAAgZQAAgbgVgBQgKAAgFAIg");
	this.shape_142.setTransform(-282.4,-224.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AAVBCIgcgvIgPAPIAAAgIgRAAIAAiDIARAAIAABRIAjgrIATAAIgeAjIAlA6g");
	this.shape_143.setTransform(-146.4,-224.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AAcAwIgcg/IgbA/IgEAAIgihfIASAAIAUA9IAZg9IAEAAIAaA9IAVg9IARAAIgiBfg");
	this.shape_144.setTransform(-228.1,-222.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgeA0QgLgPAAgoQAAgcAMgRQALgRATgBQAUAAALAPQAKAPAAAkQAAAfgLARQgKATgVgBQgTAAgLgOgAgXgBQAAA1AXAAQAMAAAGgNQAGgMAAgcQAAgVgCgJQgDgKgFgEQgFgGgIAAQgYAAAAAyg");
	this.shape_145.setTransform(-272.9,-224.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgIA/QgEgFAAgFQAAgFAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAFQAAAFgEAFQgEADgFAAQgEAAgEgDgAgDAfQgGgsAAgRIAAgkIASAAIAAAkQAAARgGAsg");
	this.shape_146.setTransform(-133.1,-224.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgZAkQgNgNAAgWQAAgWANgOQANgNAWAAQAIAAAIADQAJAEADADIgIALQgDgCgGgCQgHgDgFAAQgNAAgIAKQgIAJAAAQQAAAQAIAJQAIAIANAAQAMAAAMgIIAGAOQgOAJgTAAQgTAAgMgNg");
	this.shape_147.setTransform(-174.6,-222.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AAVBCIgdgvIgOAPIAAAgIgQAAIAAiDIAQAAIAABRIAjgrIAUAAIgfAjIAmA6g");
	this.shape_148.setTransform(-283.3,-224.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17,p:{x:-323.7}},{t:this.shape_16,p:{x:-315.6}},{t:this.shape_15,p:{x:-307.3}},{t:this.shape_14,p:{x:-297.1}},{t:this.shape_13},{t:this.shape_12,p:{x:-274.5}},{t:this.shape_11},{t:this.shape_10,p:{x:-253.2}},{t:this.shape_9,p:{x:-240.4}},{t:this.shape_8,p:{x:-230.9}},{t:this.shape_7,p:{x:-221.9}},{t:this.shape_6,p:{x:-215.4}},{t:this.shape_5,p:{x:-204.1}},{t:this.shape_4,p:{x:-194.2}},{t:this.shape_3,p:{x:-182}},{t:this.shape_2},{t:this.shape_1,p:{x:-163.4}},{t:this.shape,p:{x:-154.9}}]}).to({state:[{t:this.shape_17,p:{x:-323.7}},{t:this.shape_16,p:{x:-315.6}},{t:this.shape_15,p:{x:-307.3}},{t:this.shape_9,p:{x:-297.1}},{t:this.shape_43,p:{x:-282.5}},{t:this.shape_12,p:{x:-274.5}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40,p:{x:-243.5}},{t:this.shape_39,p:{x:-234.5}},{t:this.shape,p:{x:-226}},{t:this.shape_38},{t:this.shape_37,p:{x:-203.8}},{t:this.shape_36,p:{x:-192.5}},{t:this.shape_3,p:{x:-183.1}},{t:this.shape_35,p:{x:-173.9}},{t:this.shape_34},{t:this.shape_33,p:{x:-160.6}},{t:this.shape_32,p:{x:-152.8}},{t:this.shape_31,p:{x:-138.7}},{t:this.shape_30,p:{x:-128.5}},{t:this.shape_29,p:{x:-118.9}},{t:this.shape_28},{t:this.shape_27,p:{x:-95.1}},{t:this.shape_26,p:{x:-87.8}},{t:this.shape_25,p:{x:-78}},{t:this.shape_24,p:{x:-68.4}},{t:this.shape_23,p:{x:-60.8}},{t:this.shape_22,p:{x:-53.1}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_8,p:{x:-16.3}},{t:this.shape_19,p:{x:-6.7}},{t:this.shape_18,p:{x:3.5}}]},1).to({state:[{t:this.shape_17,p:{x:-323.7}},{t:this.shape_16,p:{x:-315.6}},{t:this.shape_65},{t:this.shape_9,p:{x:-297.1}},{t:this.shape_64},{t:this.shape_12,p:{x:-274.5}},{t:this.shape_63},{t:this.shape_62,p:{x:-251}},{t:this.shape_4,p:{x:-238.7}},{t:this.shape_61,p:{x:-226.4}},{t:this.shape_60},{t:this.shape_59,p:{x:-207.9}},{t:this.shape_58,p:{x:-193.9}},{t:this.shape_57,p:{x:-185.6}},{t:this.shape_56,p:{x:-175.8}},{t:this.shape_55},{t:this.shape_3,p:{x:-150.6}},{t:this.shape_54,p:{x:-141.4}},{t:this.shape_53,p:{x:-131.8}},{t:this.shape_52,p:{x:-123.3}},{t:this.shape_51,p:{x:-114.8}},{t:this.shape_50,p:{x:-107.2}},{t:this.shape_39,p:{x:-97.4}},{t:this.shape_22,p:{x:-87.6}},{t:this.shape_24,p:{x:-78}},{t:this.shape_49,p:{x:-62.5}},{t:this.shape_48},{t:this.shape_47,p:{x:-41.9}},{t:this.shape_46,p:{x:-33.6}},{t:this.shape_15,p:{x:-23.8}},{t:this.shape_45},{t:this.shape_8,p:{x:4}},{t:this.shape_19,p:{x:13.6}},{t:this.shape_44},{t:this.shape_27,p:{x:31.6}}]},1).to({state:[{t:this.shape_17,p:{x:-323.7}},{t:this.shape_16,p:{x:-315.6}},{t:this.shape_65},{t:this.shape_9,p:{x:-297.1}},{t:this.shape_64},{t:this.shape_12,p:{x:-274.5}},{t:this.shape_63},{t:this.shape_62,p:{x:-251}},{t:this.shape_4,p:{x:-238.7}},{t:this.shape_61,p:{x:-226.4}},{t:this.shape_60},{t:this.shape_59,p:{x:-207.9}},{t:this.shape_58,p:{x:-193.9}},{t:this.shape_57,p:{x:-185.6}},{t:this.shape_56,p:{x:-175.8}},{t:this.shape_55},{t:this.shape_3,p:{x:-150.6}},{t:this.shape_54,p:{x:-141.4}},{t:this.shape_53,p:{x:-131.8}},{t:this.shape_52,p:{x:-123.3}},{t:this.shape_51,p:{x:-114.8}},{t:this.shape_50,p:{x:-107.2}},{t:this.shape_39,p:{x:-97.4}},{t:this.shape_22,p:{x:-87.6}},{t:this.shape_24,p:{x:-78}},{t:this.shape_49,p:{x:-62.5}},{t:this.shape_48},{t:this.shape_47,p:{x:-41.9}},{t:this.shape_46,p:{x:-33.6}},{t:this.shape_15,p:{x:-23.8}},{t:this.shape_45},{t:this.shape_8,p:{x:4}},{t:this.shape_19,p:{x:13.6}},{t:this.shape_44},{t:this.shape_27,p:{x:31.6}},{t:this.shape_67,p:{x:42.9}},{t:this.shape_43,p:{x:50.5}},{t:this.shape_66,p:{x:58.9}}]},1).to({state:[{t:this.shape_17,p:{x:-323.7}},{t:this.shape_49,p:{x:-314.5}},{t:this.shape_78},{t:this.shape_46,p:{x:-286}},{t:this.shape_77,p:{x:-276.4}},{t:this.shape_76,p:{x:-268}},{t:this.shape_75,p:{x:-254.5}},{t:this.shape_74,p:{x:-245.6}},{t:this.shape_56,p:{x:-237.9}},{t:this.shape_73,p:{x:-224}},{t:this.shape_4,p:{x:-212.9}},{t:this.shape_3,p:{x:-200.7}},{t:this.shape_51,p:{x:-191.8}},{t:this.shape_58,p:{x:-185.3}},{t:this.shape_8,p:{x:-171.7}},{t:this.shape_72,p:{x:-161.6}},{t:this.shape_71},{t:this.shape_1,p:{x:-145.4}},{t:this.shape_54,p:{x:-136}},{t:this.shape_47,p:{x:-127.9}},{t:this.shape,p:{x:-120.9}},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_91,p:{x:-322.1}},{t:this.shape_61,p:{x:-311.4}},{t:this.shape_90},{t:this.shape_89,p:{x:-283}},{t:this.shape_50,p:{x:-275.2}},{t:this.shape_88},{t:this.shape_49,p:{x:-249.4}},{t:this.shape_22,p:{x:-239.6}},{t:this.shape_87,p:{x:-230.3}},{t:this.shape_26,p:{x:-221}},{t:this.shape_51,p:{x:-212}},{t:this.shape_86,p:{x:-205.5}},{t:this.shape_85},{t:this.shape_75,p:{x:-182.9}},{t:this.shape_32,p:{x:-173.7}},{t:this.shape_18,p:{x:-164.4}},{t:this.shape_7,p:{x:-155.3}},{t:this.shape_73,p:{x:-148.9}},{t:this.shape_84,p:{x:-135}},{t:this.shape_8,p:{x:-127.2}},{t:this.shape_17,p:{x:-112.7}},{t:this.shape_4,p:{x:-100.9}},{t:this.shape_3,p:{x:-88.7}},{t:this.shape_83},{t:this.shape_33,p:{x:-73.3}},{t:this.shape_37,p:{x:-58.5}},{t:this.shape_72,p:{x:-47.2}},{t:this.shape_82},{t:this.shape_81,p:{x:-30.9}},{t:this.shape_80,p:{x:-21.6}},{t:this.shape_58,p:{x:-13.4}},{t:this.shape,p:{x:-6.4}},{t:this.shape_79}]},1).to({state:[{t:this.shape_17,p:{x:-323.7}},{t:this.shape_16,p:{x:-315.6}},{t:this.shape_15,p:{x:-307.3}},{t:this.shape_9,p:{x:-297.1}},{t:this.shape_94},{t:this.shape_12,p:{x:-274.5}},{t:this.shape_31,p:{x:-261.3}},{t:this.shape_24,p:{x:-251.3}},{t:this.shape_19,p:{x:-241.3}},{t:this.shape_93,p:{x:-223}},{t:this.shape_3,p:{x:-211.6}},{t:this.shape_76,p:{x:-203.2}},{t:this.shape_1,p:{x:-194.9}},{t:this.shape_7,p:{x:-185.8}},{t:this.shape_92},{t:this.shape_49,p:{x:-169.3}},{t:this.shape_27,p:{x:-161.6}},{t:this.shape_8,p:{x:-154.4}},{t:this.shape_51,p:{x:-145.4}}]},1).to({state:[{t:this.shape_17,p:{x:-323.7}},{t:this.shape_16,p:{x:-315.6}},{t:this.shape_15,p:{x:-307.3}},{t:this.shape_9,p:{x:-297.1}},{t:this.shape_112},{t:this.shape_12,p:{x:-274.5}},{t:this.shape_111,p:{x:-259.8}},{t:this.shape_110},{t:this.shape_109,p:{x:-241.8}},{t:this.shape_108,p:{x:-227.1}},{t:this.shape_107},{t:this.shape_106},{t:this.shape_86,p:{x:-201.9}},{t:this.shape_50,p:{x:-193.7}},{t:this.shape_10,p:{x:-181.4}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_73,p:{x:-138.2}},{t:this.shape_102,p:{x:-129.6}},{t:this.shape_18,p:{x:-119.8}},{t:this.shape,p:{x:-111.3}},{t:this.shape_101},{t:this.shape_49,p:{x:-90.4}},{t:this.shape_100,p:{x:-74.9}},{t:this.shape_27,p:{x:-67.2}},{t:this.shape_26,p:{x:-59.9}},{t:this.shape_30,p:{x:-50.1}},{t:this.shape_29,p:{x:-40.5}},{t:this.shape_99,p:{x:-26.1}},{t:this.shape_57,p:{x:-17.8}},{t:this.shape_62,p:{x:-8}},{t:this.shape_23,p:{x:4.6}},{t:this.shape_4,p:{x:14.8}},{t:this.shape_77,p:{x:27}},{t:this.shape_98},{t:this.shape_97,p:{x:45.6}},{t:this.shape_75,p:{x:60.6}},{t:this.shape_25,p:{x:70.3}},{t:this.shape_24,p:{x:79.9}},{t:this.shape_76,p:{x:94.3}},{t:this.shape_46,p:{x:102.6}},{t:this.shape_96},{t:this.shape_72,p:{x:127.9}},{t:this.shape_3,p:{x:137.4}},{t:this.shape_54,p:{x:146.6}},{t:this.shape_53,p:{x:156.2}},{t:this.shape_95},{t:this.shape_51,p:{x:173.2}},{t:this.shape_8,p:{x:180.8}},{t:this.shape_39,p:{x:190.6}},{t:this.shape_22,p:{x:200.4}},{t:this.shape_19,p:{x:210}}]},1).to({state:[{t:this.shape_119},{t:this.shape_16,p:{x:-315.6}},{t:this.shape_15,p:{x:-307.3}},{t:this.shape_9,p:{x:-297.1}},{t:this.shape_118},{t:this.shape_12,p:{x:-274.5}},{t:this.shape_31,p:{x:-261.3}},{t:this.shape_24,p:{x:-251.3}},{t:this.shape_19,p:{x:-241.3}},{t:this.shape_117,p:{x:-225.4}},{t:this.shape_23,p:{x:-218.9}},{t:this.shape_27,p:{x:-213.2}},{t:this.shape_116},{t:this.shape_62,p:{x:-198.8}},{t:this.shape_74,p:{x:-189.8}},{t:this.shape,p:{x:-183.4}},{t:this.shape_5,p:{x:-171.8}},{t:this.shape_22,p:{x:-164.4}},{t:this.shape_115,p:{x:-150.4}},{t:this.shape_46,p:{x:-142.1}},{t:this.shape_1,p:{x:-132.3}},{t:this.shape_17,p:{x:-117.7}},{t:this.shape_4,p:{x:-105.9}},{t:this.shape_3,p:{x:-93.8}},{t:this.shape_114,p:{x:-84.9}},{t:this.shape_47,p:{x:-78.4}},{t:this.shape_8,p:{x:-64.8}},{t:this.shape_72,p:{x:-54.7}},{t:this.shape_113,p:{x:-47.4}},{t:this.shape_109,p:{x:-38.4}},{t:this.shape_108,p:{x:-29.1}},{t:this.shape_76,p:{x:-20.9}}]},1).to({state:[{t:this.shape_119},{t:this.shape_16,p:{x:-315.6}},{t:this.shape_15,p:{x:-307.3}},{t:this.shape_9,p:{x:-297.1}},{t:this.shape_120},{t:this.shape_12,p:{x:-274.5}},{t:this.shape_17,p:{x:-261.3}},{t:this.shape_75,p:{x:-252.3}},{t:this.shape_87,p:{x:-243.1}},{t:this.shape_56,p:{x:-233.8}},{t:this.shape_31,p:{x:-219.2}},{t:this.shape_22,p:{x:-209}},{t:this.shape_24,p:{x:-199.4}},{t:this.shape_111,p:{x:-182.9}},{t:this.shape_36,p:{x:-171.8}},{t:this.shape_19,p:{x:-162.4}},{t:this.shape_3,p:{x:-152.4}},{t:this.shape_58,p:{x:-143.9}},{t:this.shape_109,p:{x:-135.6}}]},1).to({state:[{t:this.shape_119},{t:this.shape_126},{t:this.shape_15,p:{x:-307.3}},{t:this.shape_9,p:{x:-297.1}},{t:this.shape_125},{t:this.shape_12,p:{x:-274.5}},{t:this.shape_42},{t:this.shape_29,p:{x:-251.3}},{t:this.shape_24,p:{x:-241.3}},{t:this.shape_124,p:{x:-225.4}},{t:this.shape_81,p:{x:-216.3}},{t:this.shape_80,p:{x:-207}},{t:this.shape_58,p:{x:-198.8}},{t:this.shape_50,p:{x:-190.6}},{t:this.shape_114,p:{x:-181.6}},{t:this.shape_17,p:{x:-169.1}},{t:this.shape_4,p:{x:-157.3}},{t:this.shape_75,p:{x:-145.2}},{t:this.shape_123,p:{x:-136.3}},{t:this.shape_16,p:{x:-129.8}},{t:this.shape_37,p:{x:-114.9}},{t:this.shape_100,p:{x:-103.6}},{t:this.shape_40,p:{x:-96.4}},{t:this.shape_26,p:{x:-87.4}},{t:this.shape_35,p:{x:-78}},{t:this.shape_115,p:{x:-69.9}},{t:this.shape_73,p:{x:-62.9}},{t:this.shape_67,p:{x:-50.3}},{t:this.shape_31,p:{x:-41.9}},{t:this.shape_19,p:{x:-31.9}},{t:this.shape_49,p:{x:-21.8}},{t:this.shape_72,p:{x:-11.7}},{t:this.shape_97,p:{x:-2.1}},{t:this.shape_5,p:{x:10.7}},{t:this.shape_122},{t:this.shape_27,p:{x:21.4}},{t:this.shape_39,p:{x:28.7}},{t:this.shape,p:{x:37.2}},{t:this.shape_33,p:{x:44.6}},{t:this.shape_7,p:{x:52.1}},{t:this.shape_3,p:{x:59.6}},{t:this.shape_6,p:{x:68.1}},{t:this.shape_8,p:{x:76.3}},{t:this.shape_121},{t:this.shape_66,p:{x:91.6}}]},1).to({state:[{t:this.shape_119},{t:this.shape_16,p:{x:-315.6}},{t:this.shape_59,p:{x:-307.3}},{t:this.shape_127},{t:this.shape_125},{t:this.shape_12,p:{x:-274.5}},{t:this.shape_5,p:{x:-263.1}},{t:this.shape_4,p:{x:-253.2}},{t:this.shape_14,p:{x:-240.4}},{t:this.shape_49,p:{x:-230.9}},{t:this.shape_7,p:{x:-221.9}},{t:this.shape_6,p:{x:-215.4}},{t:this.shape_84,p:{x:-201.8}},{t:this.shape_57,p:{x:-191.6}},{t:this.shape_1,p:{x:-181.8}},{t:this.shape_124,p:{x:-166.3}},{t:this.shape_109,p:{x:-157.2}},{t:this.shape_108,p:{x:-147.9}},{t:this.shape_76,p:{x:-139.7}},{t:this.shape_8,p:{x:-131.5}},{t:this.shape_51,p:{x:-122.5}},{t:this.shape_17,p:{x:-110}},{t:this.shape_46,p:{x:-100.8}},{t:this.shape_3,p:{x:-91.2}},{t:this.shape_9,p:{x:-81.1}},{t:this.shape_15,p:{x:-71.5}}]},1).to({state:[{t:this.shape_119},{t:this.shape_16,p:{x:-315.6}},{t:this.shape_59,p:{x:-307.3}},{t:this.shape_9,p:{x:-297.1}},{t:this.shape_142},{t:this.shape_12,p:{x:-274.5}},{t:this.shape_141},{t:this.shape_4,p:{x:-248.6}},{t:this.shape_140},{t:this.shape_27,p:{x:-228.2}},{t:this.shape_139},{t:this.shape_32,p:{x:-211.8}},{t:this.shape_89,p:{x:-197.1}},{t:this.shape_102,p:{x:-186.9}},{t:this.shape_56,p:{x:-177.1}},{t:this.shape_124,p:{x:-161.6}},{t:this.shape_15,p:{x:-152.5}},{t:this.shape_138},{t:this.shape_99,p:{x:-135}},{t:this.shape_137},{t:this.shape_123,p:{x:-117.8}},{t:this.shape_17,p:{x:-105.3}},{t:this.shape_57,p:{x:-96.1}},{t:this.shape_75,p:{x:-86.5}},{t:this.shape_136},{t:this.shape_135},{t:this.shape,p:{x:-58.3}},{t:this.shape_84,p:{x:-44.4}},{t:this.shape_134},{t:this.shape_133},{t:this.shape_18,p:{x:-10.5}},{t:this.shape_132},{t:this.shape_61,p:{x:8.1}},{t:this.shape_7,p:{x:17.1}},{t:this.shape_3,p:{x:24.6}},{t:this.shape_76,p:{x:33.1}},{t:this.shape_1,p:{x:41.4}},{t:this.shape_131,p:{x:56.4}},{t:this.shape_50,p:{x:64.3}},{t:this.shape_39,p:{x:74.1}},{t:this.shape_130},{t:this.shape_129},{t:this.shape_46,p:{x:105.4}},{t:this.shape_49,p:{x:115.1}},{t:this.shape_128},{t:this.shape_8,p:{x:131.8}}]},1).to({state:[{t:this.shape_119},{t:this.shape_16,p:{x:-315.6}},{t:this.shape_15,p:{x:-307.3}},{t:this.shape_9,p:{x:-297.1}},{t:this.shape_13},{t:this.shape_145},{t:this.shape_12,p:{x:-265.1}},{t:this.shape_91,p:{x:-250.4}},{t:this.shape_49,p:{x:-239.7}},{t:this.shape_144},{t:this.shape_84,p:{x:-211.2}},{t:this.shape_8,p:{x:-203.4}},{t:this.shape_111,p:{x:-187.4}},{t:this.shape_25,p:{x:-176.6}},{t:this.shape_27,p:{x:-168.8}},{t:this.shape_23,p:{x:-164.1}},{t:this.shape_22,p:{x:-156.4}},{t:this.shape_143},{t:this.shape_17,p:{x:-132.8}},{t:this.shape_4,p:{x:-121}},{t:this.shape_3,p:{x:-108.8}},{t:this.shape_51,p:{x:-99.9}},{t:this.shape_86,p:{x:-93.4}},{t:this.shape_37,p:{x:-78.6}},{t:this.shape_72,p:{x:-67.3}},{t:this.shape_113,p:{x:-60}},{t:this.shape_109,p:{x:-51}},{t:this.shape_108,p:{x:-41.7}},{t:this.shape_76,p:{x:-33.5}},{t:this.shape,p:{x:-26.5}}]},1).to({state:[{t:this.shape_84,p:{x:-322.8}},{t:this.shape_57,p:{x:-312.6}},{t:this.shape_75,p:{x:-303}},{t:this.shape_25,p:{x:-293.4}},{t:this.shape_148},{t:this.shape_131,p:{x:-269.3}},{t:this.shape_49,p:{x:-261.4}},{t:this.shape_39,p:{x:-251.6}},{t:this.shape_117,p:{x:-236.1}},{t:this.shape_8,p:{x:-227.1}},{t:this.shape_74,p:{x:-218.1}},{t:this.shape_93,p:{x:-202.3}},{t:this.shape_3,p:{x:-190.9}},{t:this.shape_76,p:{x:-182.5}},{t:this.shape_147},{t:this.shape_46,p:{x:-165.3}},{t:this.shape_23,p:{x:-158.1}},{t:this.shape_22,p:{x:-150.4}},{t:this.shape_52,p:{x:-140.9}},{t:this.shape_146}]},1).wait(1));

	// Paragraph
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(-33,-168);

	this.instance_1 = new lib.Bitmap4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2,-116);

	this.instance_2 = new lib.Bitmap3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-265,81);

	this.instance_3 = new lib.Bitmap2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-265,-53);

	this.instance_4 = new lib.Bitmap1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-265,-175);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#CCCCCC").s().p("AhABfIAOgiQAXARAVgBQAhABAAgYQAAgLgIgKQgHgKgYgMQgZgMgIgIQgJgHgFgMQgEgKAAgOQAAgZASgQQASgRAbAAQAmAAARAOIgLAhQgUgOgXAAQgMgBgHAIQgHAGgBAMQABASAoAUQAVAKAJAJQAKAJAFALQAFAMAAAOQAAAbgUARQgVAQghAAQgeAAgZgQg");
	this.shape_149.setTransform(-69.8,90.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#CCCCCC").s().p("AhCBrIAAjVIAmAAIAACzIBgAAIAAAig");
	this.shape_150.setTransform(-69.1,53.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#CCCCCC").s().p("AhDBrIAAjVICHAAIAAAhIhiAAIAAAzIBGAAIAAAfIhGAAIAABAIBhAAIAAAig");
	this.shape_151.setTransform(-69.3,16.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#CCCCCC").s().p("AhOBsIAAjWIA4gBQAuAAAcAbQAbAcAAAtQABBzhvAAgAgohIIAACRIATABQAcAAAQgVQARgVAAgkQAAhFg/AAg");
	this.shape_152.setTransform(-69.3,-20);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#CCCCCC").s().p("AhFBRQgYgeAAgzQAAgvAagfQAZggAqAAQAtAAAZAdQAYAcAAA1QAAAygaAfQgZAeguAAQgrAAgXgegAgng3QgOAUAAAjQAAAkANAUQANAWAYAAQAbgBAPgUQAPgUAAglQAAhMg2AAQgaAAgNAVg");
	this.shape_153.setTransform(-69.8,-56.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#CCCCCC").s().p("AgFBtIgsh2IgXBzIglAAIArjWIAVAAIAuCQIAtiQIAUAAIAsDWIglAAIgXhzIgrB2g");
	this.shape_154.setTransform(-69.7,-93.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#CCCCCC").s().p("AhABgIAPgjQAWAQAWABQAgAAAAgYQAAgLgHgKQgJgKgXgNQgZgLgJgIQgIgHgEgMQgFgLgBgNQABgZASgQQASgRAcAAQAlAAASAOIgMAhQgVgOgVAAQgNAAgHAGQgIAIABAKQAAATAnAUQAWAKAKAJQAJAIAFAMQAFAMAAAOQAAAbgVARQgUAQgiAAQgdAAgZgPg");
	this.shape_155.setTransform(-305.5,119.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#CCCCCC").s().p("AhEBrIAAjVICJAAIAAAhIhiAAIAAAzIBGAAIAAAfIhGAAIAABAIBgAAIAAAig");
	this.shape_156.setTransform(-305,82.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#CCCCCC").s().p("AAmBsIg4hYIgYgBIAABZIgnAAIAAjVIAYgBIAjgCQBQAAAABAQAAATgLAPQgLAPgRAHIA/BggAgqhIIAAA8IAQAAQAYAAAKgGQALgHAAgUQAAgQgLgFQgLgHgaAAg");
	this.shape_157.setTransform(-304.2,45.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#CCCCCC").s().p("Ag6BbQgVgSAAgjIAAiSIAmAAIAACRQAAAQALAMQAKALATgBQAUAAALgKQAMgLAAgSIAAiQIAmAAIAACSQAAAhgXAUQgWASgkAAQglAAgUgSg");
	this.shape_158.setTransform(-305.5,8.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#CCCCCC").s().p("AgUBrIAAi0IhEAAIAAghICxAAIAAAhIhHAAIAAC0g");
	this.shape_159.setTransform(-305.6,-28.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#CCCCCC").s().p("AAwBrIgyhNIgvBNIgnAAIBAhuIg7hnIAnAAIArBIIAvhIIAoAAIhEBoIBHBtg");
	this.shape_160.setTransform(-305.5,-64.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#CCCCCC").s().p("AhEBrIAAjVICJAAIAAAhIhiAAIAAAzIBGAAIAAAfIhGAAIAABAIBgAAIAAAig");
	this.shape_161.setTransform(-305,-101.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#CCCCCC").s().p("AgUBrIAAi0IhEAAIAAghICxAAIAAAhIhHAAIAAC0g");
	this.shape_162.setTransform(-305.6,-138.5);

	this.instance_5 = new lib.Bitmap6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-289,-159);

	this.instance_6 = new lib.texture3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-289,66,0.064,0.064);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AAAAbQAAgKAFgGQAFgGAJAAQAJAAAEAGQAGAGgBALQABALgGAGQgFAHgIAAQgTAAAAgZgAALAQQgDAEAAAIQAAAIADAEQADAFAEAAQALAAAAgRQAAgQgKAAQgFAAgDAEgAgiA0IA7hnIAJAAIg7BngAgkgcQgBgKAGgGQAFgHAKAAQAHAAAGAGQADAHABALQAAALgFAGQgFAGgIAAQgUAAABgYgAgZgnQgCAEAAAIQAAAHACAFQADAEAEAAQALAAAAgQQAAgRgKAAQgFAAgDAFg");
	this.shape_163.setTransform(70.1,124.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgbArIAFgLQAJAHAJAAQASAAAAgYQAAgVgSAAQgJAAgHAGIgFgBIAAgxIAxAAIAAAMIgkAAIAAAYQAFgEAHAAQAOAAAHAIQAHAJAAAOQAAAmggAAQgOAAgJgIg");
	this.shape_164.setTransform(62.3,124.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AAMAyIAAgbIgtAAIAAgIIA1hAIAEAAIAAA9IAKAAIAAALIgKAAIAAAbgAgRAMIAdAAIAAgig");
	this.shape_165.setTransform(54.9,124.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_166.setTransform(44.4,128.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AATAlIgTgbIgSAbIgPAAIAaglIgYgjIAOAAIARAYIARgYIAPAAIgbAjIAdAlg");
	this.shape_167.setTransform(38.5,125.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgIAKgQAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAFgIQAGgHAAgNQAAgagUAAQgIgBgFAIg");
	this.shape_168.setTransform(31.3,125.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgDgDgFAAQgHAAgEAGQgFAGgBAJIAAApg");
	this.shape_169.setTransform(25.4,125.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgHALAAQAOAAAJAJQAJAKAAASQAAAQgJALQgJAKgPAAQgFAAgFgCQgGgBgBgCIAAAggAgMgmQgDACgDADIAAApIAGAEIAHABQAYABAAgbQgBgOgFgGQgGgGgMgBIgHACg");
	this.shape_170.setTransform(18.5,127);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgHALAAQAOAAAKAJQAIAKAAASQAAAQgIALQgKAKgPAAQgFAAgFgCQgGgBgBgCIAAAggAgMgmQgDACgDADIAAApIAGAEIAHABQAXABAAgbQAAgOgFgGQgGgGgMgBIgHACg");
	this.shape_171.setTransform(10.7,127);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AAUAkQgEgDgCgFQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOgBQAEABAGACQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_172.setTransform(2.9,125.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgGAjQgDgDAAgEQAAgFADgCQADgDADAAQAEAAADADQADACAAAFQAAAEgDADQgDADgEAAQgDAAgDgDgAgGgUQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDAEgEAAQgDAAgDgEg");
	this.shape_173.setTransform(-7.6,125.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAFgEABgGQAAgGgCgGIgGgOIgTgyIAMAAIAVA4IAUg4IAMAAIgeBVQgDAHgHAEQgIAFgKAAg");
	this.shape_174.setTransform(-13.5,127.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_175.setTransform(-19.6,124.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCgBgEQABgDACgCQABgDADAAQAEAAADADQABACAAADQAAAEgBACQgDACgEAAQgDAAgBgCg");
	this.shape_176.setTransform(-24.6,124.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgKQAKgLARAAQAFAAAHADQAHABADADIgHAJIgHgDIgKgCQgJAAgGAHQgHAIAAAMQAAANAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_177.setTransform(-29.9,125.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AAUAkQgEgDgCgFQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOgBQAEABAGACQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_178.setTransform(-37,125.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgHAKAAQAPAAAIAJQAJAKAAASQAAAQgJALQgIAKgQAAQgFAAgFgCQgGgBgBgCIAAAggAgMgmQgEACgCADIAAApIAFAEIAIABQAXABABgbQAAgOgHgGQgFgGgMgBIgHACg");
	this.shape_179.setTransform(-44.3,127);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgeAlQgLgPAAgWQAAgVALgPQALgPATAAQATAAAMAOQALANAAAYQAAAYgMAOQgLAOgTAAQgTAAgLgPgAgUgcQgGAKAAASQAAARAGALQAHAMANAAQANAAAHgLQAHgLAAgSQAAgmgbAAQgNAAgHAKg");
	this.shape_180.setTransform(-53.1,124.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgOAGIAAgLIAcAAIAAALg");
	this.shape_181.setTransform(-64.6,125.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAjQAAAKACAEQADADAHAAQAFAAAGgCIABALQgIACgJABQgIAAgGgHg");
	this.shape_182.setTransform(104.2,106.5);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgHgEgGQgEgEgHAAQgEAAgFACQgFADgCAEIAAA2IgNAAIAAhnIANAAIAAAnQADgFAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_183.setTransform(97.6,105.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_184.setTransform(90.3,108.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCgBgDQABgDACgDQACgCACAAQAEAAADACQACADAAADQAAADgCACQgDACgEAAQgCAAgCgCg");
	this.shape_185.setTransform(84.6,106);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgcAyIAAhjIANAAIAABWIAsAAIAAANg");
	this.shape_186.setTransform(79.7,106.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_187.setTransform(67.5,106);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgEgDgEAAQgHAAgEAGQgGAGAAAJIAAApg");
	this.shape_188.setTransform(61.7,107.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgIAOAAQAEAAAGACQAAgSgPAAQgMAAgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_189.setTransform(54.7,107.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AAWAyIAAgxIgrAAIAAAxIgOAAIAAhjIAOAAIAAAoIArAAIAAgoIANAAIAABjg");
	this.shape_190.setTransform(46.5,106.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgGAjQgDgDAAgEQAAgEADgEQADgCADAAQAEAAADACQADAEAAAEQAAAEgDADQgDADgEAAQgDAAgDgDgAgGgTQgDgDAAgFQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_191.setTransform(35,107.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgRQAAgSALgKQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_192.setTransform(28.8,107.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_193.setTransform(20.9,106);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgIAKgQAAQgPAAgIgKgAgNgTQgGAHAAAMQABAcASAAQAJgBAFgHQAFgHABgNQgBgagTAAQgIAAgFAHg");
	this.shape_194.setTransform(13.5,107.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgBAzIgWhBIgMA/IgNAAIAThjIAHAAIAWBIIAWhIIAHAAIAUBjIgOAAIgLg/IgWBBg");
	this.shape_195.setTransform(4.9,106.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_196.setTransform(-7.8,108.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_197.setTransform(-15.1,107.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgCgCAAgDQAAgDACgDQACgCADAAQADAAACACQACADAAADQAAADgCACQgCACgDAAQgDAAgCgCg");
	this.shape_198.setTransform(-21.1,106);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_199.setTransform(-27,106);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_200.setTransform(-34.4,107.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgRQAAgSALgKQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_201.setTransform(-42,107.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGADADQAEADAFAAIAAAMQgXAAAAgWg");
	this.shape_202.setTransform(-47.6,106);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgfAzIAAhjIAagBQAOgBAIAHQAIAGAAAMQAAAHgFAGQgFAGgGABQAMADAFAGQAGAGAAAMQAAANgKAIQgKAIgOAAgAgRAnIAKABQAMAAAGgFQAGgFAAgLQAAgJgFgFQgGgFgMAAIgLAAgAgRglIAAAcIAKAAQATABAAgRQAAgNgRAAg");
	this.shape_203.setTransform(-53.6,106);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgOAGIAAgLIAcAAIAAALg");
	this.shape_204.setTransform(-64.6,107);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgEgDgEAAQgHAAgEAGQgGAGAAAJIAAApg");
	this.shape_205.setTransform(126.4,89.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_206.setTransform(119.3,89.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAFgEABgGQAAgGgCgGIgGgOIgTgyIAMAAIAVA4IAUg4IAMAAIgeBVQgDAHgHAEQgIAFgKAAg");
	this.shape_207.setTransform(112.1,90.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAFAAAHQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_208.setTransform(104.9,89.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGAEADQADADAGAAIAAAMQgZAAAAgWg");
	this.shape_209.setTransform(99.5,87.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_210.setTransform(88.9,87.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgDgDgFAAQgHAAgEAGQgFAGgBAJIAAApg");
	this.shape_211.setTransform(83.1,89.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgkQgDgCABgDQgBgDADgDQACgDADABQADgBACADQADADAAADQAAADgDACQgCADgDAAQgDAAgCgDg");
	this.shape_212.setTransform(77.7,87.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgHgEgEQgEgFgHAAQgEAAgFACQgFAEgCADIAAA1IgNAAIAAhlIANAAIAAAmQADgEAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_213.setTransform(72.1,87.7);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHABQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_214.setTransform(65.6,88.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_215.setTransform(54.7,89.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgHgEgEQgEgFgHAAQgEAAgFACQgFAEgCADIAAA1IgNAAIAAhlIANAAIAAAmQADgEAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_216.setTransform(47.1,87.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHABQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_217.setTransform(40.6,88.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_218.setTransform(29.8,89.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgHgEgEQgEgFgHAAQgEAAgFACQgFAEgCADIAAA1IgNAAIAAhlIANAAIAAAmQADgEAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_219.setTransform(22.2,87.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHABQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_220.setTransform(15.7,88.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgFQgJgEgDgCIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAFQAIADAEAFQAEAFAAAHQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_221.setTransform(5.8,89.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAFAAAHQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_222.setTransform(-0.7,89.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgFQgJgEgDgCIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAFQAIADAEAFQAEAFAAAHQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_223.setTransform(-11.4,89.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgJAAIAAgLIAVAAIAABIgAAAgkQgDgCABgDQgBgDADgDQACgDADABQADgBACADQADADAAADQAAADgDACQgCADgDAAQgDAAgCgDg");
	this.shape_224.setTransform(-16.4,87.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgHgEgEQgEgFgHAAQgEAAgFACQgFAEgCADIAAA1IgNAAIAAhlIANAAIAAAmQADgEAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_225.setTransform(-22,87.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHABQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_226.setTransform(-28.5,88.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_227.setTransform(-39.3,89.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgFQgJgEgDgCIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAFQAIADAEAFQAEAFAAAHQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_228.setTransform(-46,89.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgZArQgJgJAAgPIAAhFIAOAAIAABEQAAAJAFAGQAGAGAJAAQAKAAAFgGQAGgGABgKIAAhDIANAAIAABFQAAAPgKAIQgJAJgQAAQgQAAgJgIg");
	this.shape_229.setTransform(-53.3,87.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AgOAGIAAgLIAcAAIAAALg");
	this.shape_230.setTransform(-64.6,88.8);

	this.instance_7 = new lib.texture2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-289,-40,0.122,0.122);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AAAAbQAAgKAFgGQAFgGAJAAQAJAAAEAGQAGAGgBALQABALgGAGQgFAHgIAAQgTAAAAgZgAALAQQgDAEAAAIQAAAIADAEQADAFAEAAQALAAAAgRQAAgQgKAAQgFAAgDAEgAgiA0IA7hnIAJAAIg7BngAgkgcQgBgKAGgGQAFgHAKAAQAHAAAGAGQADAHABALQAAALgFAGQgFAGgIAAQgUAAABgYgAgZgnQgCAEAAAIQAAAHACAFQADAEAEAAQALAAAAgQQAAgRgKAAQgFAAgDAFg");
	this.shape_231.setTransform(70.1,10.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AgbArIAFgMQAJAIAJAAQASAAAAgYQAAgVgSAAQgJAAgHAHIgFgDIAAgwIAxAAIAAALIgkAAIAAAZQAFgEAHAAQAOAAAHAJQAHAIAAAOQAAAmggAAQgOAAgJgIg");
	this.shape_232.setTransform(62.3,11);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AgeAIQAAgRANgTQANgTANgEIAHAIQgGACgKAOQgMAOgBAHQAFgFAKAAQANAAAIAIQAIAIAAAOQAAAPgIAJQgJAJgMAAQggAAAAgsgAgQATQAAAVARAAQAHAAAFgFQAEgGAAgJQAAgJgFgGQgEgFgHAAQgRAAAAATg");
	this.shape_233.setTransform(55,10.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_234.setTransform(44.4,15.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AATAkIgTgaIgSAaIgPAAIAagkIgYgkIAOAAIARAaIARgaIAPAAIgbAkIAdAkg");
	this.shape_235.setTransform(38.5,12.3);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgIALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJAAAFgHQAGgIAAgMQAAgbgUAAQgIABgFAHg");
	this.shape_236.setTransform(31.3,12.3);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgDgDgFAAQgHAAgEAGQgFAGgBAJIAAApg");
	this.shape_237.setTransform(25.4,12.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAHgIALAAQAOAAAJAKQAJAKAAATQAAAPgJALQgJALgPAAQgFAAgFgCQgGgCgBgCIAAAhgAgMglQgDABgDACIAAAqIAGAEIAHACQAYAAAAgbQgBgOgFgGQgGgHgMABIgHACg");
	this.shape_238.setTransform(18.5,13.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAHgIALAAQAOAAAKAKQAIAKAAATQAAAPgIALQgKALgPAAQgFAAgFgCQgGgCgBgCIAAAhgAgMglQgDABgDACIAAAqIAGAEIAHACQAXAAAAgbQAAgOgFgGQgGgHgMABIgHACg");
	this.shape_239.setTransform(10.7,13.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOAAQAEAAAGACQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_240.setTransform(2.9,12.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AgGAjQgDgDAAgFQAAgDADgEQADgDADAAQAEAAADADQADAEAAADQAAAFgDADQgDADgEAAQgDAAgDgDgAgGgTQgDgDAAgFQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_241.setTransform(-7.6,12.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAFgEABgGQAAgGgCgGIgGgOIgTgyIAMAAIAVA4IAUg4IAMAAIgeBVQgDAHgHAEQgIAFgKAAg");
	this.shape_242.setTransform(-13.5,13.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAFAHAAQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_243.setTransform(-19.6,11.4);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgCgDgBgDQABgDACgDQABgCADgBQAEABADACQABADAAADQAAADgBADQgDACgEAAQgDAAgBgCg");
	this.shape_244.setTransform(-24.6,10.9);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHACADADIgHAKIgHgFIgKgBQgJAAgGAHQgHAIAAALQAAANAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_245.setTransform(-29.9,12.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOAAQAEAAAGACQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_246.setTransform(-37,12.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAIgIAKAAQAPAAAIAKQAJAKAAATQAAAPgJALQgIALgQAAQgFAAgFgCQgGgCgBgCIAAAhgAgMglQgEABgCACIAAAqIAFAEIAIACQAXAAABgbQAAgOgHgGQgFgHgMABIgHACg");
	this.shape_247.setTransform(-44.3,13.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AgeAlQgLgPAAgWQAAgVALgPQALgPATAAQATAAAMAOQALANAAAYQAAAYgMAOQgLAOgTAAQgTAAgLgPgAgUgcQgGAKAAASQAAARAGALQAHAMANAAQANAAAHgLQAHgLAAgSQAAgmgbAAQgNAAgHAKg");
	this.shape_248.setTransform(-53.1,10.9);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgOAGIAAgLIAcAAIAAALg");
	this.shape_249.setTransform(-64.6,11.9);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAFgEABgGQAAgGgCgGIgGgOIgTgyIAMAAIAVA4IAUg4IAMAAIgeBVQgDAHgHAEQgIAFgKAAg");
	this.shape_250.setTransform(86.1,-4.5);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAAMANgBQAJABAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_251.setTransform(78.9,-5.9);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAAAgWg");
	this.shape_252.setTransform(73.5,-7.4);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgFANQgEgDgFAAQgHAAgEAGQgFAGgBAJIAAApg");
	this.shape_253.setTransform(69,-6);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAHIAoAAIAAAAg");
	this.shape_254.setTransform(62,-5.9);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgBAlIgfhJIAOAAIASAyIAUgyIANAAIggBJg");
	this.shape_255.setTransform(54.7,-5.9);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AgeAlQgLgPAAgWQAAgVALgPQALgPATAAQATAAAMAOQALANAAAYQAAAYgMAOQgLAOgTAAQgTAAgLgPgAgUgcQgGAKAAASQAAARAGALQAHAMANAAQANAAAHgLQAHgLAAgSQAAgmgbAAQgNAAgHAKg");
	this.shape_256.setTransform(46.6,-7.3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgGAjQgDgDAAgFQAAgEADgCQADgEADAAQAEAAADAEQADACAAAEQAAAFgDADQgDADgEAAQgDAAgDgDgAgGgUQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_257.setTransform(35,-5.9);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAHIAoAAIAAAAg");
	this.shape_258.setTransform(28.8,-5.9);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_259.setTransform(20.9,-7.4);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgIALgQAAQgPAAgIgLgAgNgTQgGAHAAAMQABAbASAAQAJABAFgIQAFgHABgNQgBgbgTAAQgIAAgFAIg");
	this.shape_260.setTransform(13.5,-5.9);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AgBAzIgWhBIgMA/IgNAAIAThjIAHAAIAWBIIAWhIIAHAAIAUBjIgOAAIgLg/IgWBBg");
	this.shape_261.setTransform(4.9,-7.2);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_262.setTransform(-7.8,-4.8);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_263.setTransform(-15.1,-6);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgjQgCgDAAgEQAAgDACgCQACgCADgBQADABACACQACACAAADQAAAEgCADQgCABgDAAQgDAAgCgBg");
	this.shape_264.setTransform(-21.1,-7.3);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_265.setTransform(-27,-7.4);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_266.setTransform(-34.4,-6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAHIAoAAIAAAAg");
	this.shape_267.setTransform(-42,-5.9);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGADADQAEADAFAAIAAAMQgXAAAAgWg");
	this.shape_268.setTransform(-47.6,-7.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AgfAyIAAhjIAagBQAOABAIAGQAIAGAAAMQAAAHgFAGQgFAFgGACQAMADAFAFQAGAHAAALQAAAOgKAIQgKAHgOAAgAgRAnIAKAAQAMABAGgFQAGgFAAgLQAAgKgFgEQgGgEgMAAIgLAAgAgRglIAAAcIAKABQATgBAAgQQAAgNgRAAg");
	this.shape_269.setTransform(-53.6,-7.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AgOAGIAAgLIAcAAIAAALg");
	this.shape_270.setTransform(-64.6,-6.3);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgFANQgEgDgFAAQgHAAgEAGQgFAGgBAJIAAApg");
	this.shape_271.setTransform(139.1,-24.3);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_272.setTransform(132.1,-24.2);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAGgEgBgGQAAgGgCgGIgFgOIgUgyIAOAAIAUA4IATg4IAOAAIggBVQgCAHgHAEQgIAFgKAAg");
	this.shape_273.setTransform(124.8,-22.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AAUAkQgEgDgCgFQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOgBQAEABAGACQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_274.setTransform(117.7,-24.2);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGAEADQADADAGAAIAAAMQgYAAAAgWg");
	this.shape_275.setTransform(112.2,-25.6);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_276.setTransform(101.6,-25.6);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_277.setTransform(94.2,-24.3);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgIAKgQAAQgOAAgJgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAFgIQAGgHAAgNQAAgagUAAQgIgBgFAIg");
	this.shape_278.setTransform(86.6,-24.2);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgKQAKgLARAAQAFAAAHADQAHABADADIgHAJIgHgDIgKgCQgJAAgGAHQgHAIAAAMQAAANAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_279.setTransform(79.4,-24.2);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_280.setTransform(72.2,-24.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgFQgJgDgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAEQAIAEAEAEQAEAFAAAIQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_281.setTransform(65.5,-24.2);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_282.setTransform(54.7,-24.2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgIgEgFQgEgEgHAAQgEAAgFADQgFADgCADIAAA2IgNAAIAAhnIANAAIAAAmQADgEAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_283.setTransform(47.1,-25.7);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_284.setTransform(40.6,-25.1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_285.setTransform(29.8,-24.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgIgEgFQgEgEgHAAQgEAAgFADQgFADgCADIAAA2IgNAAIAAhnIANAAIAAAmQADgEAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_286.setTransform(22.2,-25.7);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_287.setTransform(15.7,-25.1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgFQgJgDgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAEQAIAEAEAEQAEAFAAAIQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_288.setTransform(5.8,-24.2);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AAUAkQgEgDgCgFQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOgBQAEABAGACQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_289.setTransform(-0.7,-24.2);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgFQgJgDgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAEQAIAEAEAEQAEAFAAAIQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_290.setTransform(-11.4,-24.2);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgJAAIAAgKIAVAAIAABIgAAAgkQgDgCABgEQgBgDADgCQACgDADAAQADAAACADQADACAAADQAAAEgDACQgCACgDAAQgDAAgCgCg");
	this.shape_291.setTransform(-16.4,-25.6);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgIgEgFQgEgEgHAAQgEAAgFADQgFADgCADIAAA2IgNAAIAAhnIANAAIAAAmQADgEAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_292.setTransform(-22,-25.7);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_293.setTransform(-28.5,-25.1);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_294.setTransform(-39.3,-24.2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgFQgJgDgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAEQAIAEAEAEQAEAFAAAIQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_295.setTransform(-46,-24.2);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("AgZArQgJgJAAgPIAAhFIAOAAIAABEQAAAJAFAGQAGAGAJAAQAKAAAFgGQAGgGABgKIAAhDIANAAIAABFQAAAPgKAIQgJAJgQAAQgQAAgJgIg");
	this.shape_296.setTransform(-53.3,-25.5);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AgOAGIAAgLIAcAAIAAALg");
	this.shape_297.setTransform(-64.6,-24.6);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFFFF").s().p("AAAAbQAAgKAFgGQAFgGAJAAQAJAAAEAGQAGAGAAALQAAALgGAGQgFAHgIAAQgTAAAAgZgAALAQQgDAEAAAIQAAAIADAEQADAFAEAAQALAAAAgRQAAgQgKAAQgFAAgDAEgAgiA0IA7hnIAJAAIg7BngAgkgcQgBgKAGgGQAFgHAKAAQAHAAAGAGQADAHABALQAAALgFAGQgFAGgIAAQgUAAABgYgAgZgnQgCAEAAAIQAAAHACAFQADAEAEAAQALAAAAgQQAAgRgKAAQgFAAgDAFg");
	this.shape_298.setTransform(102.9,-99);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("AgbArIAFgMQAJAIAJAAQASAAAAgYQAAgVgSAAQgJAAgHAHIgFgDIAAgwIAxAAIAAALIgkAAIAAAZQAFgEAHAAQAOAAAHAIQAHAJAAAOQAAAmggAAQgOAAgJgIg");
	this.shape_299.setTransform(95.2,-98.9);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("AgeAzIAAgDIAfgwQAKgOAAgLQAAgNgOAAQgGAAgFADQgFADgCAEIgJgHQADgHAGgEQAHgEAKAAQANAAAIAHQAIAGAAAMQABAMgMAQIgVAjIAmAAIAAANg");
	this.shape_300.setTransform(87.7,-99);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgKALgPAAQgOAAgKgLgAgNgTQgFAHgBAMQAAAbATAAQAJAAAGgHQAEgIAAgMQAAgbgTAAQgIABgFAHg");
	this.shape_301.setTransform(76.2,-97.6);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHABQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_302.setTransform(69.8,-98.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAFgEAAgGQAAgGgBgGIgGgOIgUgyIAOAAIAUA4IATg4IAOAAIggBVQgCAHgHAEQgIAFgKAAg");
	this.shape_303.setTransform(59.3,-96.2);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHABQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_304.setTransform(53.1,-98.5);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgkQgCgCAAgDQAAgDACgDQACgDACABQAEgBACADQACADAAADQAAADgCACQgCADgEAAQgCAAgCgDg");
	this.shape_305.setTransform(48.1,-99);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHACADADIgHAKQgCgCgFgDIgKgBQgJAAgGAIQgHAGAAAMQAAANAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_306.setTransform(42.9,-97.6);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAFAAAHQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_307.setTransform(35.7,-97.6);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAIgIAKAAQAPAAAJAKQAIAKAAATQAAAPgIALQgJALgQAAQgEAAgGgCQgFgCgCgCIAAAhgAgLglQgEABgDACIAAAqIAGAEIAHACQAYAAgBgbQABgOgHgGQgFgHgMABIgGACg");
	this.shape_308.setTransform(28.4,-96.2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgKALgPAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJAAAFgHQAGgIgBgMQABgbgUAAQgIABgFAHg");
	this.shape_309.setTransform(20.6,-97.6);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_310.setTransform(8.8,-97.6);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgHgEgEQgEgFgHAAQgEAAgFACQgFAEgCADIAAA1IgNAAIAAhlIANAAIAAAmQADgEAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_311.setTransform(1.2,-99.1);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHABQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_312.setTransform(-5.3,-98.5);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_313.setTransform(-16.1,-97.6);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_314.setTransform(-23.4,-96.4);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_315.setTransform(-30.7,-97.7);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAFAAAHQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_316.setTransform(-38.2,-97.6);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgHgEgEQgEgFgHAAQgEAAgFACQgFAEgCADIAAA1IgNAAIAAhlIANAAIAAAmQADgEAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_317.setTransform(-45.7,-99.1);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("AgYAmQgMgOAAgYQAAgVANgPQAMgPARAAQARAAAJAGIgFALQgGgEgOAAQgMAAgIALQgIALAAARQAAARAIALQAIALAMAAQAOAAAIgKIAHAKQgLAMgUAAQgSAAgLgOg");
	this.shape_318.setTransform(-53.6,-99);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("AgOAGIAAgLIAcAAIAAALg");
	this.shape_319.setTransform(-64.6,-98);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGAEADQADADAGAAIAAAMQgYAAgBgWg");
	this.shape_320.setTransform(85,-117.3);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgIAOAAQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_321.setTransform(79,-115.8);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgFAAgEADQgEACgCAEIAAA1IgMAAIAAgzQAAgFgDgDQgFgDgGAAQgEAAgFADQgEADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAHgKAMAAQAPAAAGAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_322.setTransform(69.5,-115.9);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgEgDgEAAQgHAAgEAGQgGAGAAAJIAAApg");
	this.shape_323.setTransform(61.6,-115.9);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgIALgQAAQgOAAgJgLgAgNgTQgGAHAAAMQABAbASAAQAJABAFgIQAGgIAAgMQAAgbgUAAQgIAAgFAIg");
	this.shape_324.setTransform(54.6,-115.8);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AAeAzIgzhJIAABHIgMAAIAAhjIAFAAIAxBEIAAhEIANAAIAABlg");
	this.shape_325.setTransform(46.4,-117.1);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFFFF").s().p("AgGAjQgDgDAAgFQAAgDADgDQADgEADAAQAEAAADAEQADADAAADQAAAFgDADQgDADgEAAQgDAAgDgDgAgGgUQgDgCAAgFQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAFgDACQgDADgEAAQgDAAgDgDg");
	this.shape_326.setTransform(35,-115.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_327.setTransform(28.8,-115.8);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_328.setTransform(20.9,-117.3);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgIALgQAAQgPAAgIgLgAgNgTQgGAHAAAMQABAbASAAQAJABAFgIQAFgIABgMQgBgbgTAAQgIAAgFAIg");
	this.shape_329.setTransform(13.5,-115.8);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFFFF").s().p("AgBAzIgWhBIgMA/IgNAAIAThjIAHAAIAWBIIAWhIIAHAAIAUBjIgOAAIgLg/IgWBBg");
	this.shape_330.setTransform(4.9,-117.1);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_331.setTransform(-7.8,-114.7);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_332.setTransform(-15.1,-115.9);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgjQgCgDAAgEQAAgCACgDQACgCADgBQADABACACQACADAAACQAAAEgCADQgCACgDAAQgDAAgCgCg");
	this.shape_333.setTransform(-21.1,-117.2);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_334.setTransform(-27,-117.3);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_335.setTransform(-34.4,-115.9);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_336.setTransform(-42,-115.8);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGADADQAEADAFAAIAAAMQgXAAAAgWg");
	this.shape_337.setTransform(-47.6,-117.3);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFFFF").s().p("AgfAyIAAhjIAagBQAOABAIAGQAIAGAAAMQAAAHgFAGQgFAFgGACQAMADAFAFQAGAHAAALQAAAOgKAHQgKAIgOAAgAgRAnIAKAAQAMAAAGgEQAGgFAAgKQAAgLgFgEQgGgFgMABIgLAAgAgRgmIAAAdIAKABQATAAAAgQQAAgOgRAAg");
	this.shape_338.setTransform(-53.6,-117.2);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFFFF").s().p("AgOAGIAAgLIAcAAIAAALg");
	this.shape_339.setTransform(-64.6,-116.2);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgEgDgFAAQgHAAgEAGQgFAGAAAJIAAApg");
	this.shape_340.setTransform(116.6,-134.2);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_341.setTransform(109.6,-134.1);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAGgEgBgGQAAgGgCgGIgFgOIgUgyIAOAAIAUA4IATg4IAOAAIggBVQgCAHgHAEQgIAFgKAAg");
	this.shape_342.setTransform(102.3,-132.7);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFFFFF").s().p("AAUAjQgEgBgCgGQgIAKgPAAQgJAAgGgHQgGgGAAgJQAAgLAJgHQAKgHAOgBQAEAAAGADQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgDgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_343.setTransform(95.2,-134.1);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGAEADQADADAGAAIAAAMQgYAAAAgWg");
	this.shape_344.setTransform(89.7,-135.5);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgEAAgFADQgEACgCAEIAAA1IgLAAIAAgzQAAgFgFgDQgEgDgGAAQgEAAgFADQgEADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAIgKALAAQAPAAAGAJQACgEAGgDQAGgCAGAAQALAAAHAGQAGAHAAAMIAAAwg");
	this.shape_345.setTransform(77.4,-134.2);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAKQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJAAAFgIQAFgHABgNQgBgbgTAAQgIAAgFAIg");
	this.shape_346.setTransform(67.9,-134.1);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFAAAGgCIABALQgIACgJAAQgIAAgGgGg");
	this.shape_347.setTransform(61.4,-135);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFAAAGgCIABALQgIACgJAAQgIAAgGgGg");
	this.shape_348.setTransform(55.9,-135);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAKQgIAKgQAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAFgIQAGgHAAgNQAAgbgUAAQgIAAgFAIg");
	this.shape_349.setTransform(49.3,-134.1);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgDgDIgEAHIgHAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAJALQAKAKAAAPQAAASgKALQgJAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACADAAQALAAAHgGQAFgHAAgPQAAgMgGgGQgHgHgKAAIgHACg");
	this.shape_350.setTransform(41.9,-135.5);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_351.setTransform(29.8,-134.1);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FFFFFF").s().p("AAQA0IAAgvQAAgHgEgFQgEgEgHAAQgEAAgFADQgFADgCADIAAA2IgNAAIAAhnIANAAIAAAmQADgDAFgDQAGgDAFAAQAMAAAHAHQAGAIAAAMIAAAvg");
	this.shape_352.setTransform(22.2,-135.6);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFAAAGgCIABALQgIACgJAAQgIAAgGgGg");
	this.shape_353.setTransform(15.7,-135);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgFQgJgDgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAEQAIAEAEAEQAEAFAAAIQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_354.setTransform(5.8,-134.1);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FFFFFF").s().p("AAUAjQgEgBgCgGQgIAKgPAAQgJAAgGgHQgGgGAAgJQAAgLAJgHQAKgHAOgBQAEAAAGADQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgDgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_355.setTransform(-0.7,-134.1);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgFQgJgDgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAEQAIAEAEAEQAEAFAAAIQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_356.setTransform(-11.4,-134.1);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgJAAIAAgLIAVAAIAABJgAAAgjQgDgDABgEQgBgDADgCQACgDADAAQADAAACADQADACAAADQAAAEgDADQgCABgDAAQgDAAgCgBg");
	this.shape_357.setTransform(-16.4,-135.5);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FFFFFF").s().p("AAQA0IAAgvQAAgHgEgFQgEgEgHAAQgEAAgFADQgFADgCADIAAA2IgNAAIAAhnIANAAIAAAmQADgDAFgDQAGgDAFAAQAMAAAHAHQAGAIAAAMIAAAvg");
	this.shape_358.setTransform(-22,-135.6);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFAAAGgCIABALQgIACgJAAQgIAAgGgGg");
	this.shape_359.setTransform(-28.5,-135);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_360.setTransform(-39.3,-134.1);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgFQgJgDgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAEQAIAEAEAEQAEAFAAAIQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_361.setTransform(-46,-134.1);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FFFFFF").s().p("AgZArQgJgJAAgPIAAhFIAOAAIAABEQAAAJAFAGQAGAGAJAAQAKAAAFgGQAGgGABgKIAAhDIANAAIAABFQAAAPgKAIQgJAJgQAAQgQAAgJgIg");
	this.shape_362.setTransform(-53.3,-135.4);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FFFFFF").s().p("AgOAGIAAgLIAcAAIAAALg");
	this.shape_363.setTransform(-64.6,-134.5);

	this.instance_8 = new lib.ScreenShot20190502at122224PM();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-226,18,0.829,0.829);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FFFFFF").s().p("AgGAjQgDgDAAgEQAAgFADgDQADgCADAAQAEAAADACQADADAAAFQAAAEgDADQgDADgEAAQgDAAgDgDgAgGgUQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDAEgEAAQgDAAgDgEg");
	this.shape_364.setTransform(153.8,-12.8);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgGQgJgEgDgBIgGgFIgDgGIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAEQAIAEAEAEQAEAGAAAHQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_365.setTransform(148.6,-12.8);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgCgCAAgEQAAgCACgDQACgCADAAQADAAACACQACADAAACQAAAEgCACQgCACgDAAQgDAAgCgCg");
	this.shape_366.setTransform(143.6,-14.2);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgKQAKgKANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_367.setTransform(120.7,-12.8);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FFFFFF").s().p("AARA0IgWglIgMALIAAAaIgNAAIAAhnIANAAIAAA/IAbggIAQAAIgYAaIAdAug");
	this.shape_368.setTransform(113.8,-14.3);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCgBgEQABgCACgDQABgCADAAQAEAAADACQABADABACQgBAEgBACQgDACgEAAQgDAAgBgCg");
	this.shape_369.setTransform(107.7,-14.2);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGAEADQADADAFAAIAAAMQgYAAAAgWg");
	this.shape_370.setTransform(104.1,-14.3);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgKQAKgKANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_371.setTransform(70.1,-12.8);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOAAQAEAAAGACQAAgTgPABQgMAAgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_372.setTransform(50.8,-12.8);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgKQAKgKANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_373.setTransform(33.6,-12.8);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCgBgEQABgCACgDQABgCADAAQAEAAADACQACADgBACQABAEgCACQgDACgEAAQgDAAgBgCg");
	this.shape_374.setTransform(8.2,-14.2);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FFFFFF").s().p("AAVAlIgVgwIgVAwIgDAAIgahKIAOAAIAPAvIAUgvIADAAIATAvIARgvIANAAIgaBKg");
	this.shape_375.setTransform(1.2,-12.8);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_376.setTransform(-12,-12.8);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJAAAGgIQAEgHAAgNQAAgagTAAQgIgBgFAIg");
	this.shape_377.setTransform(-19.5,-12.8);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAGgEAAgGQgBgGgCgGIgFgOIgTgyIAMAAIAVA4IAUg4IAMAAIgeBVQgDAHgHAEQgIAFgKAAg");
	this.shape_378.setTransform(-26.7,-11.4);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FFFFFF").s().p("AgLARQALgKAAgGQAAgDgBgDQgGgDAAgFQAAgDADgDQADgCADAAQAEAAADAEQACADAAAEQAAAJgDAGQgEAIgLAJg");
	this.shape_379.setTransform(-37.1,-8.9);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgKQAKgLARAAQAFAAAHADQAHACADACIgHAJIgHgDIgKgCQgJAAgGAIQgHAGAAANQAAANAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_380.setTransform(-63.7,-12.8);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgKQAKgKANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_381.setTransform(-70.9,-12.8);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgFANQgEgDgFAAQgHAAgEAGQgFAGgBAJIAAApg");
	this.shape_382.setTransform(-76.9,-12.9);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgCgCAAgEQAAgCACgDQACgCADAAQADAAACACQACADAAACQAAAEgCACQgCACgDAAQgDAAgCgCg");
	this.shape_383.setTransform(-82.3,-14.2);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgKQAKgLARAAQAFAAAHADQAHACADACIgHAJIgHgDIgKgCQgJAAgGAIQgHAGAAANQAAANAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_384.setTransform(-105,-12.8);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgKQAKgKANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_385.setTransform(-112.3,-12.8);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FFFFFF").s().p("AgRA1QANAAAEgEQAFgEAAgJIAAg9IgNAAIAAgLIAaAAIAABIQAAAPgJAHQgIAHgSAAgAAEgyQgCgCAAgEQAAgDACgCQADgDADAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgDAAgDgCg");
	this.shape_386.setTransform(-119.3,-12.8);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgDgDIgFAHIgGAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAKALQAJAKAAAPQAAASgJALQgKAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACADAAQALAAAHgGQAFgHAAgPQAAgMgGgGQgHgHgKAAIgHACg");
	this.shape_387.setTransform(-124.8,-14.3);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgPAAgJgKgAgNgTQgFAHAAAMQgBAcATAAQAJAAAGgIQAEgHAAgNQAAgagTAAQgIgBgFAIg");
	this.shape_388.setTransform(-132.7,-12.8);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_389.setTransform(-143.3,-13.8);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOAAQAEAAAGACQAAgTgPABQgMAAgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_390.setTransform(-155.3,-12.8);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgFAAgEADQgEACgBAEIAAA1IgNAAIAAgzQAAgFgDgDQgFgDgGAAQgEAAgEADQgFADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAIgKALAAQAQAAAFAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_391.setTransform(-164.7,-12.9);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgGQgJgEgDgBIgGgFIgDgGIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAEQAIAEAEAEQAEAGAAAHQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_392.setTransform(-173.4,-12.8);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgKQAKgKANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_393.setTransform(-184.2,-12.8);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgHgEgGQgEgEgHAAQgEAAgFACQgFADgCAEIAAA2IgNAAIAAhnIANAAIAAAnQADgFAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_394.setTransform(-191.8,-14.3);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_395.setTransform(-198.3,-13.8);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_396.setTransform(-208,-13.8);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgJAAIAAgKIAVAAIAABIgAAAgkQgDgCABgEQgBgCADgDQACgCADAAQADAAACACQADADAAACQAAAEgDACQgCACgDAAQgDAAgCgCg");
	this.shape_397.setTransform(-213,-14.2);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgKQAKgKANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_398.setTransform(-226.4,-12.8);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJAAAFgIQAFgHABgNQgBgagTAAQgIgBgFAIg");
	this.shape_399.setTransform(-238.1,-12.8);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_400.setTransform(-244.6,-13.8);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgEgDgFAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_401.setTransform(-260.7,-12.9);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_402.setTransform(-266.6,-13.8);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_403.setTransform(-277.5,-12.8);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJAAAGgIQAEgHAAgNQAAgagTAAQgIgBgFAIg");
	this.shape_404.setTransform(-285,-12.8);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAGgEAAgGQgBgGgCgGIgFgOIgTgyIAMAAIAVA4IAUg4IAMAAIgeBVQgDAHgHAEQgIAFgKAAg");
	this.shape_405.setTransform(-292.2,-11.4);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#FFFFFF").s().p("AgNA0IAAg+IgKAAIAAgKIAKAAQAAgOAHgJQAHgHALgBQAFAAAHADIgEAJIgHgCQgGAAgEAFQgDAFAAAGIAAAFIAOAAIAAAKIgOAAIAAA+g");
	this.shape_406.setTransform(-302.2,-14.3);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgDgCABgEQgBgCADgDQABgCAEAAQADAAACACQACADABACQgBAEgCACQgCACgDAAQgEAAgBgCg");
	this.shape_407.setTransform(-307.2,-14.2);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FFFFFF").s().p("AgNAGIAAgLIAcAAIAAALg");
	this.shape_408.setTransform(-315.7,-13.2);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#FFFFFF").s().p("AgOA6QAOgQAAgrQAAgmgOgTIAAgGQAMAGAIATQAJATgBATQABAUgIASQgHASgOAKg");
	this.shape_409.setTransform(167.2,-123.8);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FFFFFF").s().p("AAWAmIgWgyIgUAyIgEAAIgahLIAOAAIAQAwIATgwIADAAIAUAwIARgwIAMAAIgaBLg");
	this.shape_410.setTransform(159.2,-123.8);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgJAKgQAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJgBAGgHQAEgHAAgNQABgagUAAQgIAAgFAHg");
	this.shape_411.setTransform(150.3,-123.9);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgDgDIgEAHIgHAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAJALQAKAKAAAPQAAASgKALQgJAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACACAAQANAAAFgGQAGgHAAgPQAAgMgGgGQgHgHgLAAIgGACg");
	this.shape_412.setTransform(131.2,-125.3);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgFANQgEgDgFAAQgHAAgEAGQgFAGgBAJIAAApg");
	this.shape_413.setTransform(113.1,-124);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_414.setTransform(106.1,-123.8);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgCgCAAgDQAAgDACgDQACgCACAAQAEAAACACQACADAAADQAAADgCACQgCACgEAAQgCAAgCgCg");
	this.shape_415.setTransform(93.1,-125.3);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#FFFFFF").s().p("AgMA0IAAg+IgLAAIAAgKIALAAQgBgOAIgJQAFgHAMgBQAGABAGACIgDAJIgIgBQgGgBgEAFQgDAFAAAGIAAAFIAOAAIAAAKIgOAAIAAA+g");
	this.shape_416.setTransform(89,-125.4);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgRQAAgSALgKQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_417.setTransform(78.2,-123.9);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgHgEgGQgEgEgHAAQgEAAgFACQgFADgCAEIAAA2IgNAAIAAhnIANAAIAAAnQADgFAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_418.setTransform(70.6,-125.4);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAjQAAAKACAEQADADAHAAQAFAAAGgCIABALQgIACgJABQgIAAgGgHg");
	this.shape_419.setTransform(64.1,-124.8);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCgBgDQABgDACgDQACgCADAAQADAAADACQACADAAADQAAADgCACQgDACgDAAQgDAAgCgCg");
	this.shape_420.setTransform(47.3,-125.3);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FFFFFF").s().p("AAWAmIgWgyIgVAyIgDAAIgahLIAOAAIAPAwIAUgwIADAAIAUAwIARgwIAMAAIgaBLg");
	this.shape_421.setTransform(28.5,-123.8);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgOAAgKgKgAgNgTQgFAHgBAMQAAAcATAAQAJgBAGgHQAEgHAAgNQAAgagTAAQgIAAgFAHg");
	this.shape_422.setTransform(19.5,-123.9);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgHgEgGQgEgEgHAAQgEAAgFACQgFADgCAEIAAA2IgNAAIAAhnIANAAIAAAnQADgFAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_423.setTransform(12,-125.4);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgGQgJgEgDgBIgGgFIgDgGIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAEQAIAEAEAEQAEAGAAAHQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_424.setTransform(5.3,-123.9);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FFFFFF").s().p("AgYARIAmgRIgmgRIAAgKIAxAYIAAAHIgxAYg");
	this.shape_425.setTransform(-5.4,-124.6);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#FFFFFF").s().p("AgNAGIAAgLIAcAAIAAALg");
	this.shape_426.setTransform(-11.5,-124.3);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGAEADQADADAGAAIAAAMQgYAAAAgWg");
	this.shape_427.setTransform(-20.1,-125.3);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgDgCAAgDQAAgDADgDQABgCADAAQAEAAADACQABADAAADQAAADgBACQgDACgEAAQgDAAgBgCg");
	this.shape_428.setTransform(-24.5,-125.3);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgCgDIgGAHIgGAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAKALQAJAKAAAPQAAASgJALQgKAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACACAAQAMAAAGgGQAGgHAAgPQAAgMgHgGQgGgHgLAAIgGACg");
	this.shape_429.setTransform(-44.9,-125.3);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgEAAgFADQgEACgBAEIAAA1IgNAAIAAgzQAAgFgDgDQgEgDgHAAQgEAAgEADQgFADgCADIAAA1IgNAAIAAhIIAJAAIAEAJQAHgKAMAAQAQAAAFAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_430.setTransform(-54.8,-124);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_431.setTransform(-64.4,-123.8);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgHgEgGQgEgEgHAAQgEAAgFACQgFADgCAEIAAA2IgNAAIAAhnIANAAIAAAnQADgFAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_432.setTransform(-72,-125.4);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAjQAAAKACAEQADADAHAAQAFAAAGgCIABALQgIACgJABQgIAAgGgHg");
	this.shape_433.setTransform(-78.5,-124.8);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgRQAAgSALgKQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_434.setTransform(-94.8,-123.9);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgIAOAAQAEAAAGACQAAgSgPAAQgMAAgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_435.setTransform(-109.2,-123.9);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_436.setTransform(-130.3,-123.8);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJgBAGgHQAEgHAAgNQAAgagTAAQgIAAgFAHg");
	this.shape_437.setTransform(-137.9,-123.9);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAGgEAAgGQgBgGgCgGIgFgOIgTgyIAMAAIAVA4IAUg4IAMAAIgeBVQgDAHgHAEQgIAFgKAAg");
	this.shape_438.setTransform(-145.1,-122.5);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FFFFFF").s().p("AgNA0IAAg+IgKAAIAAgKIAKAAQAAgOAHgJQAHgHALgBQAFABAHACIgEAJIgHgBQgGgBgEAFQgDAFAAAGIAAAFIAOAAIAAAKIgOAAIAAA+g");
	this.shape_439.setTransform(-155,-125.4);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJgBAFgHQAFgHABgNQgBgagTAAQgIAAgFAHg");
	this.shape_440.setTransform(-161.6,-123.9);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgRQAAgSALgKQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_441.setTransform(-178.8,-123.9);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgKQAKgLARAAQAFAAAHADQAHACADACIgHAJIgHgEIgKgBQgJAAgGAIQgHAGAAANQAAAMAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_442.setTransform(-206.5,-123.9);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAjQAAAKACAEQADADAHAAQAFAAAGgCIABALQgIACgJABQgIAAgGgHg");
	this.shape_443.setTransform(-216.9,-124.8);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgHgEgGQgEgEgHAAQgEAAgFACQgFADgCAEIAAA2IgNAAIAAhnIANAAIAAAnQADgFAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_444.setTransform(-223.5,-125.4);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgDgCAAgDQAAgDADgDQABgCADAAQAEAAADACQABADAAADQAAADgBACQgDACgEAAQgDAAgBgCg");
	this.shape_445.setTransform(-236.5,-125.3);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgEgDgFAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_446.setTransform(-240.4,-124);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgIAKgQAAQgPAAgIgKgAgNgTQgGAHAAAMQABAcASAAQAJgBAFgHQAFgHABgNQgBgagTAAQgIAAgFAHg");
	this.shape_447.setTransform(-263.2,-123.9);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAjQAAAKACAEQADADAHAAQAFAAAGgCIABALQgIACgJABQgIAAgGgHg");
	this.shape_448.setTransform(-269.7,-124.8);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAjQAAAKACAEQADADAHAAQAFAAAGgCIABALQgIACgJABQgIAAgGgHg");
	this.shape_449.setTransform(-275.2,-124.8);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJgBAFgHQAGgHgBgNQABgagUAAQgIAAgFAHg");
	this.shape_450.setTransform(-281.8,-123.9);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgDgDIgEAHIgHAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAJALQAKAKAAAPQAAASgKALQgJAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACADAAQAMAAAFgGQAGgHAAgPQAAgMgGgGQgHgHgKAAIgHACg");
	this.shape_451.setTransform(-289.2,-125.3);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgRQAAgSALgKQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_452.setTransform(-301.3,-123.9);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgHgEgGQgEgEgHAAQgEAAgFACQgFADgCAEIAAA2IgNAAIAAhnIANAAIAAAnQADgFAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_453.setTransform(-308.9,-125.4);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAjQAAAKACAEQADADAHAAQAFAAAGgCIABALQgIACgJABQgIAAgGgHg");
	this.shape_454.setTransform(-315.4,-124.8);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHACADADIgHAKIgHgFIgKgBQgJAAgGAIQgHAGAAAMQAAANAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_455.setTransform(187.4,-142.1);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#FFFFFF").s().p("AAHANIgCgZIAMAAIgBAZgAgPANIgCgZIANAAIgCAZg");
	this.shape_456.setTransform(173,-147.2);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgFAAgEADQgEACgBAEIAAA1IgNAAIAAgzQAAgFgEgDQgDgDgHAAQgEAAgEADQgFADgCADIAAA1IgNAAIAAhIIAJAAIAEAJQAHgKAMAAQAQAAAFAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_457.setTransform(144.2,-142.2);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_458.setTransform(134.6,-142.1);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHACADADIgHAKIgHgFIgKgBQgJAAgGAIQgHAGAAAMQAAANAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_459.setTransform(127.3,-142.1);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgJALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJAAAGgHQAEgIAAgMQABgbgUAAQgIABgFAHg");
	this.shape_460.setTransform(120.1,-142.1);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#FFFFFF").s().p("AAHANIgCgZIAMAAIgBAZgAgPANIgCgZIANAAIgCAZg");
	this.shape_461.setTransform(106.4,-147.2);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAABgWg");
	this.shape_462.setTransform(90,-143.6);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgkQgDgCABgDQgBgDADgDQABgDAEABQADgBACADQACADABADQgBADgCACQgCADgDAAQgEAAgBgDg");
	this.shape_463.setTransform(74.4,-143.5);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGAEADQADADAGAAIAAAMQgYAAAAgWg");
	this.shape_464.setTransform(70.8,-143.6);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#FFFFFF").s().p("AAWAmIgWgyIgVAyIgDAAIgahLIAOAAIAPAwIAUgwIADAAIAUAwIARgwIAMAAIgaBLg");
	this.shape_465.setTransform(27.9,-142.1);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgKALgPAAQgPAAgJgLgAgNgTQgFAHAAAMQgBAbATAAQAJAAAGgHQAEgIAAgMQAAgbgTAAQgIABgFAHg");
	this.shape_466.setTransform(19,-142.1);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgCgDIgGAHIgGAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAKALQAJAKAAAPQAAASgJALQgKAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACACAAQAMAAAHgGQAFgHAAgPQAAgMgHgGQgGgHgLAAIgGACg");
	this.shape_467.setTransform(-13.3,-143.6);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHACADADIgHAKIgHgFIgKgBQgJAAgGAIQgHAGAAAMQAAANAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_468.setTransform(-31.2,-142.1);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#FFFFFF").s().p("AgRA1QANAAAEgEQAFgEAAgJIAAg9IgNAAIAAgLIAaAAIAABIQAAAPgJAHQgIAHgSAAgAAEgyQgCgCAAgEQAAgDACgCQADgDADAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgDAAgDgCg");
	this.shape_469.setTransform(-45.4,-142.1);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgCgDIgGAHIgGAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAJALQAKAKAAAPQAAASgKALQgJAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACACAAQANAAAFgGQAGgHAAgPQAAgMgHgGQgGgHgLAAIgGACg");
	this.shape_470.setTransform(-51,-143.6);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgIALgQAAQgOAAgJgLgAgNgTQgGAHAAAMQABAbASAAQAJAAAFgHQAGgIAAgMQAAgbgUAAQgIABgFAHg");
	this.shape_471.setTransform(-58.8,-142.1);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgGANQgEgDgEAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_472.setTransform(-75,-142.2);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgEAAgFADQgEACgCAEIAAA1IgLAAIAAgzQAAgFgFgDQgEgDgGAAQgEAAgFADQgEADgCADIAAA1IgNAAIAAhIIAJAAIAEAJQAHgKAMAAQAQAAAFAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_473.setTransform(-91.4,-142.2);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgFAAgEADQgEACgCAEIAAA1IgLAAIAAgzQgBgFgEgDQgDgDgHAAQgEAAgFADQgEADgCADIAAA1IgNAAIAAhIIAJAAIAEAJQAHgKAMAAQAQAAAFAJQACgEAGgDQAGgCAGAAQALAAAHAGQAGAHAAAMIAAAwg");
	this.shape_474.setTransform(-138.8,-142.2);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgKALgPAAQgOAAgKgLgAgNgTQgFAHgBAMQAAAbATAAQAJAAAGgHQAEgIAAgMQAAgbgTAAQgIABgFAHg");
	this.shape_475.setTransform(-148.3,-142.1);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHACADADIgHAKIgHgFIgKgBQgJAAgGAIQgHAGAAAMQAAANAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_476.setTransform(-155.5,-142.1);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgCgDIgGAHIgGAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAJALQAKAKAAAPQAAASgKALQgJAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACACAAQANAAAFgGQAGgHAAgPQAAgMgHgGQgGgHgLAAIgGACg");
	this.shape_477.setTransform(-170.2,-143.6);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgGANQgEgDgEAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_478.setTransform(-181.2,-142.2);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAFgEAAgGQAAgGgBgGIgGgOIgUgyIANAAIAVA4IATg4IANAAIgfBVQgCAHgHAEQgIAFgKAAg");
	this.shape_479.setTransform(-195.5,-140.7);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAFAAAHQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_480.setTransform(-202.7,-142.1);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAAAgWg");
	this.shape_481.setTransform(-208.1,-143.6);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#FFFFFF").s().p("AAaAzIgHgVIgkAAIgIAVIgPAAIAohlIADAAIAmBlgAAPAUIgOgsIgPAsIAdAAg");
	this.shape_482.setTransform(-218.5,-143.6);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#FFFFFF").s().p("AgFAlQgJgSABgUQgBgTAKgTQAHgTALgGIAAAGQgNATAAAmQAAArANAQIAAAHQgNgKgGgSg");
	this.shape_483.setTransform(-225,-142.1);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_484.setTransform(-253.8,-142.1);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FFFFFF").s().p("AgRA1QANAAAEgEQAFgEAAgJIAAg9IgNAAIAAgLIAaAAIAABIQAAAPgJAHQgIAHgSAAgAAEgyQgCgCAAgEQAAgDACgCQADgDADAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgDAAgDgCg");
	this.shape_485.setTransform(-260.8,-142.1);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgJALgPAAQgPAAgIgLgAgNgTQgFAHgBAMQAAAbATAAQAJAAAGgHQAEgIAAgMQAAgbgTAAQgIABgFAHg");
	this.shape_486.setTransform(-274.2,-142.1);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHABQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_487.setTransform(-285.4,-143.1);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgDgDgFAAQgHAAgEAGQgFAGgBAJIAAApg");
	this.shape_488.setTransform(-290.4,-142.2);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAFAAAHQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_489.setTransform(-297.4,-142.1);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgEAAgFADQgEACgBAEIAAA1IgNAAIAAgzQAAgFgDgDQgEgDgHAAQgEAAgEADQgFADgCADIAAA1IgNAAIAAhIIAJAAIAEAJQAHgKAMAAQAQAAAFAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_490.setTransform(-306.8,-142.2);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgFQgJgEgDgCIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAFQAIADAEAFQAEAFAAAHQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_491.setTransform(-315.5,-142.1);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgKALgPAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJABAFgIQAGgIgBgMQABgbgUAAQgIAAgFAIg");
	this.shape_492.setTransform(205.5,-160.4);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgQIANgFIAAAVIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_493.setTransform(199.1,-161.3);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_494.setTransform(192.4,-160.5);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgjQgDgDABgEQgBgCADgDQABgCAEgBQADABACACQACADABACQgBAEgCADQgCACgDAAQgEAAgBgCg");
	this.shape_495.setTransform(186.5,-161.8);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgQIANgFIAAAVIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_496.setTransform(174.8,-161.3);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgCgDgBgEQABgCACgDQABgCADgBQAEABADACQABADABACQgBAEgBADQgDACgEAAQgDAAgBgCg");
	this.shape_497.setTransform(169.8,-161.8);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgQIANgFIAAAVIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_498.setTransform(158.1,-161.3);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgFANQgEgDgFAAQgHAAgEAGQgFAGgBAJIAAApg");
	this.shape_499.setTransform(153.1,-160.5);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_500.setTransform(131.6,-160.5);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgJALgPAAQgPAAgIgLgAgNgTQgFAHgBAMQAAAbATAAQAJABAGgIQAEgIAAgMQAAgbgTAAQgIAAgFAIg");
	this.shape_501.setTransform(124,-160.4);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHACADADIgHAKIgHgFIgKgBQgJAAgGAHQgHAIAAALQAAAOAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_502.setTransform(116.8,-160.4);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGAEADQADADAGAAIAAAMQgYAAAAgWg");
	this.shape_503.setTransform(97.5,-161.8);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAAAgWg");
	this.shape_504.setTransform(93.4,-161.8);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgIAOAAQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_505.setTransform(87.4,-160.4);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHACADADIgHAKIgHgFIgKgBQgJAAgGAHQgHAIAAALQAAAOAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_506.setTransform(80.3,-160.4);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgjQgCgDAAgEQAAgCACgDQACgCACgBQAEABACACQACADAAACQAAAEgCADQgCACgEAAQgCAAgCgCg");
	this.shape_507.setTransform(74.7,-161.8);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgQIANgFIAAAVIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_508.setTransform(70.2,-161.3);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgIAOAAQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_509.setTransform(63.6,-160.4);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgFAAgEADQgEACgBAEIAAA1IgNAAIAAgzQAAgFgEgDQgDgDgHAAQgEAAgEADQgFADgCADIAAA1IgNAAIAAhIIAJAAIAEAJQAHgKAMAAQAQAAAFAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_510.setTransform(54.2,-160.5);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgKALgPAAQgPAAgJgLgAgNgTQgFAHAAAMQgBAbATAAQAJABAGgIQAEgIAAgMQAAgbgTAAQgIAAgFAIg");
	this.shape_511.setTransform(44.6,-160.4);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgQIANgFIAAAVIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_512.setTransform(38.2,-161.3);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_513.setTransform(31.5,-160.3);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgIAOAAQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_514.setTransform(24,-160.4);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGAEADQADADAGAAIAAAMQgZAAAAgWg");
	this.shape_515.setTransform(3.6,-161.8);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_516.setTransform(-2.5,-160.3);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgKALgPAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJABAFgIQAGgIgBgMQABgbgUAAQgIAAgFAIg");
	this.shape_517.setTransform(-10,-160.4);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhlIANAAIAAAlQADgDAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_518.setTransform(-17.6,-161.9);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgFgDgBIgGgEIgDgGIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_519.setTransform(-24.2,-160.4);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgIALABQAOgBAJAKQAJAKAAATQAAAPgJALQgJAKgPAAQgFAAgFgBQgGgCgBgCIAAAggAgMgmQgDACgDACIAAAqIAGAEIAHACQAXgBAAgaQAAgOgFgGQgGgGgMAAIgHABg");
	this.shape_520.setTransform(-37.9,-159);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgKALgPAAQgOAAgKgLgAgNgTQgFAHgBAMQAAAbATAAQAJABAGgIQAEgIAAgMQAAgbgTAAQgIAAgFAIg");
	this.shape_521.setTransform(-45.7,-160.4);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhlIANAAIAAAlQADgDAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_522.setTransform(-53.3,-161.9);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgFgDgBIgGgEIgDgGIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_523.setTransform(-59.9,-160.4);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgQIANgFIAAAVIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_524.setTransform(-72.9,-161.3);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgIALgQAAQgOAAgJgLgAgNgTQgGAHAAAMQABAbASAAQAJABAFgIQAGgIAAgMQAAgbgUAAQgIAAgFAIg");
	this.shape_525.setTransform(-79.5,-160.4);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhlIANAAIAAAlQADgDAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_526.setTransform(-87.1,-161.9);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#FFFFFF").s().p("AgeAyIAAhjIATgBQAqABAAAdQAAAggmAAIgKAAIAAAmgAgRgkIAAAkIAJABQAZgBAAgSQAAgTgaAAg");
	this.shape_527.setTransform(-93.9,-161.8);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#FFFFFF").s().p("AgLARQALgJAAgIQAAgBgBgDQgGgEAAgEQAAgEADgDQADgCADAAQAEAAADADQACADABAFQgBAJgDAHQgEAGgLAKg");
	this.shape_528.setTransform(-115.2,-156.4);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgQIANgFIAAAVIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_529.setTransform(-135.6,-161.3);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgDgDgFAAQgHAAgEAGQgFAGgBAJIAAApg");
	this.shape_530.setTransform(-140.6,-160.5);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgIALABQAOgBAKAKQAIAKAAATQAAAPgIALQgKAKgPAAQgFAAgFgBQgFgCgCgCIAAAggAgLgmQgEACgDACIAAAqIAGAEIAHACQAXgBAAgaQAAgOgFgGQgGgGgMAAIgGABg");
	this.shape_531.setTransform(-155,-159);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgFAAgEADQgEACgCAEIAAA1IgLAAIAAgzQgBgFgEgDQgDgDgHAAQgEAAgFADQgEADgCADIAAA1IgNAAIAAhIIAJAAIAEAJQAHgKAMAAQAQAAAFAJQACgEAGgDQAGgCAGAAQALAAAHAGQAGAHAAAMIAAAwg");
	this.shape_532.setTransform(-164.9,-160.5);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgjQgCgDAAgEQAAgCACgDQACgCACgBQAEABACACQACADAAACQAAAEgCADQgCACgEAAQgCAAgCgCg");
	this.shape_533.setTransform(-172.8,-161.8);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgFgDgBIgGgEIgDgGIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_534.setTransform(-184.7,-160.4);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgJAAIAAgLIAVAAIAABIgAAAgjQgDgDABgEQgBgCADgDQACgCADgBQADABACACQADADAAACQAAAEgDADQgCACgDAAQgDAAgCgCg");
	this.shape_535.setTransform(-189.6,-161.8);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_536.setTransform(-202.4,-160.4);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgIAOAAQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_537.setTransform(-216.9,-160.4);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgFAAgEADQgEACgBAEIAAA1IgNAAIAAgzQAAgFgDgDQgFgDgGAAQgEAAgEADQgFADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAIgKALAAQAQAAAFAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_538.setTransform(-226.4,-160.5);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgCgDgBgEQABgCACgDQABgCADgBQAEABADACQABADAAACQAAAEgBADQgDACgEAAQgDAAgBgCg");
	this.shape_539.setTransform(-234.3,-161.8);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_540.setTransform(-247.1,-160.4);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhlIANAAIAAAlQADgDAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_541.setTransform(-254.7,-161.9);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgQIANgFIAAAVIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_542.setTransform(-261.2,-161.3);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_543.setTransform(-275.1,-160.5);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_544.setTransform(-282.7,-160.4);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhlIANAAIAAAlQADgDAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_545.setTransform(-290.3,-161.9);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#FFFFFF").s().p("AAXAzIgXhEIgWBEIgEAAIgghlIAOAAIAUBFIAWhFIAEAAIAWBFIAUhFIAPAAIggBlg");
	this.shape_546.setTransform(-300,-161.7);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#FFFFFF").s().p("AgNAGIAAgLIAcAAIAAALg");
	this.shape_547.setTransform(-315.7,-160.8);

	this.instance_9 = new lib.ScreenShot20190502at102406AM();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-278,-98,1.218,1.218);

	this.instance_10 = new lib.ScreenShot20190501at94216PM();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-248,44);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgKQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_548.setTransform(-305.8,12.9);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAGgEAAgGQgBgGgCgGIgFgOIgTgyIAMAAIAVA4IAUg4IANAAIgfBVQgDAHgHAEQgIAFgKAAg");
	this.shape_549.setTransform(207.7,-3.9);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#FFFFFF").s().p("AgNAzIAAg9IgKAAIAAgLIAKAAQABgOAGgHQAHgIALAAQAGAAAGACIgEAJIgHgBQgGgBgEAFQgDAEAAAIIAAADIAOAAIAAALIgOAAIAAA9g");
	this.shape_550.setTransform(139.4,-6.8);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgJALgPAAQgPAAgIgLgAgNgTQgFAHgBAMQAAAbATAAQAJAAAFgHQAFgIABgMQgBgbgTAAQgIABgFAHg");
	this.shape_551.setTransform(120.5,-5.3);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAGgEAAgGQAAgGgDgGIgFgOIgTgyIAMAAIAVA4IAUg4IAMAAIgeBVQgDAHgHAEQgIAFgKAAg");
	this.shape_552.setTransform(113.3,-3.9);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#FFFFFF").s().p("AARAzIgWgkIgMALIAAAZIgNAAIAAhlIANAAIAAA/IAbgiIAQAAIgYAbIAdAtg");
	this.shape_553.setTransform(63.6,-6.8);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgFAAgEADQgEACgBAEIAAA1IgNAAIAAgzQAAgFgDgDQgEgDgHAAQgEAAgEADQgFADgCADIAAA1IgNAAIAAhIIAJAAIAEAJQAHgKAMAAQAQAAAFAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_554.setTransform(46.5,-5.4);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#FFFFFF").s().p("AgLARQALgJAAgIQAAgBgBgEQgGgCAAgGQAAgDADgCQADgDADAAQAEAAADAEQACADABAEQgBAJgDAHQgEAGgLAKg");
	this.shape_555.setTransform(33.3,-1.4);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgDgDIgEAHIgHAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAKALQAJAKAAAPQAAASgJALQgKAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACADAAQALAAAHgGQAFgHAAgPQAAgMgGgGQgHgHgKAAIgHACg");
	this.shape_556.setTransform(2.2,-6.8);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgkQgCgCgBgDQABgDACgDQACgDACABQAEgBADADQACADAAADQAAADgCACQgDADgEAAQgCAAgCgDg");
	this.shape_557.setTransform(-97.2,-6.7);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgkQgCgCgBgDQABgDACgDQACgDADABQADgBADADQACADAAADQAAADgCACQgDADgDAAQgDAAgCgDg");
	this.shape_558.setTransform(-114.4,-6.7);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#FFFFFF").s().p("AgBAmIgfhLIAOAAIASAzIAUgzIANAAIggBLg");
	this.shape_559.setTransform(-131.9,-5.3);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgIALgQAAQgPAAgIgLgAgNgTQgGAHAAAMQABAbASAAQAJAAAFgHQAFgIABgMQgBgbgTAAQgIABgFAHg");
	this.shape_560.setTransform(-139,-5.3);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAHgIALAAQAPAAAIAKQAJAKAAATQAAAPgJALQgIALgQAAQgFAAgFgCQgFgCgCgCIAAAhgAgMglQgEABgCACIAAAqIAFAEIAIACQAXAAABgbQAAgOgHgGQgFgHgMABIgHACg");
	this.shape_561.setTransform(-166.2,-4);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_562.setTransform(-174.1,-5.3);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_563.setTransform(-197.5,-5.3);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgkQgCgCgBgDQABgDACgDQACgDADABQADgBADADQACADAAADQAAADgCACQgDADgDAAQgDAAgCgDg");
	this.shape_564.setTransform(-235.9,-6.7);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_565.setTransform(-261.4,-5.3);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgFgDgEAAQgHAAgEAGQgFAGAAAJIAAApg");
	this.shape_566.setTransform(-267.3,-5.4);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgJALgPAAQgPAAgIgLgAgNgTQgFAHgBAMQAAAbATAAQAJAAAFgHQAFgIABgMQgBgbgTAAQgIABgFAHg");
	this.shape_567.setTransform(-293.9,-5.3);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAGgEAAgGQAAgGgDgGIgFgOIgTgyIAMAAIAVA4IAUg4IAMAAIgeBVQgDAHgHAEQgIAFgKAAg");
	this.shape_568.setTransform(-301.1,-3.9);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#FFFFFF").s().p("AgNAzIAAg9IgKAAIAAgLIAKAAQABgOAGgHQAHgIALAAQAGAAAGACIgEAJIgHgBQgGgBgEAFQgDAEAAAIIAAADIAOAAIAAALIgOAAIAAA9g");
	this.shape_569.setTransform(-311.5,-6.8);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#FFFFFF").s().p("AgGAyIAAhjIANAAIAABjg");
	this.shape_570.setTransform(-316.3,-6.7);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#FFFFFF").s().p("AAGAQIgFgKIgGAKIgDAFIgJgHIADgFIALgFIgMgCIgGgCIAFgKIAHADIAJAGIgFgNIAAgGIALAAIAAAFIgEAOIAKgHIAGgCIADAKIgFADIgMAAIALAHIADAEIgIAHg");
	this.shape_571.setTransform(-325.5,-9.6);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgLQAKgKARAAQAFAAAHADQAHABADADIgHAJIgHgDIgKgCQgJAAgGAHQgHAIAAAMQAAANAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_572.setTransform(-302.2,-41.8);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgLIAVAAIAABJgAAAgjQgDgDABgEQgBgDADgCQABgDAEAAQADAAACADQADACAAADQAAAEgDADQgCABgDAAQgEAAgBgBg");
	this.shape_573.setTransform(-319.3,-43.2);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgFgDgEAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_574.setTransform(229.7,-60.2);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#FFFFFF").s().p("AgYASIAmgSIgmgRIAAgKIAxAXIAAAIIgxAYg");
	this.shape_575.setTransform(191.1,-60.8);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#FFFFFF").s().p("AgNAGIAAgLIAbAAIAAALg");
	this.shape_576.setTransform(185,-60.5);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgFgDgEAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_577.setTransform(161.3,-60.2);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#FFFFFF").s().p("AgBAlIgfhKIAOAAIASAzIAUgzIANAAIggBKg");
	this.shape_578.setTransform(147,-60);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgDgCAAgEQAAgCADgDQABgCADAAQAEAAADACQABADAAACQAAAEgBACQgDACgEAAQgDAAgBgCg");
	this.shape_579.setTransform(133.9,-61.5);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGADADQAEADAGAAIAAAMQgZAAAAgWg");
	this.shape_580.setTransform(104.5,-61.5);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#FFFFFF").s().p("AgbAuIAFgNIAKAFQAFACAFAAQAHAAAFgFQAEgEAAgHQAAgFgCgEQgDgFgKgFIgIgDQgKgEgEgHQgEgGAAgKQAAgLAIgHQAIgIALAAQARAAAGAGIgEAMIgIgEIgLgCQgGAAgEAEQgEAEAAAGIACAHIAEAFQACADAHADIAJAEQAKAEAEAHQAEAHAAAKQAAALgJAIQgJAIgOAAQgOAAgJgGg");
	this.shape_581.setTransform(91.3,-61.5);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#FFFFFF").s().p("AgYASIAmgSIgmgRIAAgKIAxAXIAAAIIgxAYg");
	this.shape_582.setTransform(78.5,-60.8);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#FFFFFF").s().p("AgNAGIAAgLIAbAAIAAALg");
	this.shape_583.setTransform(72.4,-60.5);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#FFFFFF").s().p("AgbAuIAFgNIAKAFQAFACAFAAQAHAAAFgFQAEgEAAgHQAAgFgCgEQgDgFgKgFIgIgDQgKgEgEgHQgEgGAAgKQAAgLAIgHQAIgIALAAQARAAAGAGIgEAMIgIgEIgLgCQgGAAgEAEQgEAEAAAGIACAHIAEAFQACADAHADIAJAEQAKAEAEAHQAEAHAAAKQAAALgJAIQgJAIgOAAQgOAAgJgGg");
	this.shape_584.setTransform(20.3,-61.5);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgKQAKgLARAAQAFAAAHADQAHACADACIgHAJIgHgDIgKgCQgJAAgGAIQgHAGAAANQAAANAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_585.setTransform(2.2,-60.1);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgKQAKgKANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_586.setTransform(-16.7,-60.1);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#FFFFFF").s().p("AgbAuIAFgNIAKAFQAFACAFAAQAHAAAFgFQAEgEAAgHQAAgFgCgEQgDgFgKgFIgIgDQgKgEgEgHQgEgGAAgKQAAgLAIgHQAIgIALAAQARAAAGAGIgEAMIgIgEIgLgCQgGAAgEAEQgEAEAAAGIACAHIAEAFQACADAHADIAJAEQAKAEAEAHQAEAHAAAKQAAALgJAIQgJAIgOAAQgOAAgJgGg");
	this.shape_587.setTransform(-23.9,-61.5);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#FFFFFF").s().p("AgYASIAmgSIgmgRIAAgKIAxAXIAAAIIgxAYg");
	this.shape_588.setTransform(-36.7,-60.8);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#FFFFFF").s().p("AgOAGIAAgLIAdAAIAAALg");
	this.shape_589.setTransform(-42.8,-60.5);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#FFFFFF").s().p("AgGAyIAAhXIghAAIAAgMIBPAAIAAAMIgiAAIAABXg");
	this.shape_590.setTransform(-72.4,-61.4);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAFgIQAGgHgBgNQABgagUAAQgIgBgFAIg");
	this.shape_591.setTransform(-93.3,-60.1);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgKQAKgLARAAQAFAAAHADQAHACADACIgHAJIgHgDIgKgCQgJAAgGAIQgHAGAAANQAAANAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_592.setTransform(-110,-60.1);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgKQAKgKANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_593.setTransform(-117.2,-60.1);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgKQAKgKANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_594.setTransform(-128.9,-60.1);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#FFFFFF").s().p("AgbAuIAFgNIAKAFQAFACAFAAQAHAAAFgFQAEgEAAgHQAAgFgCgEQgDgFgKgFIgIgDQgKgEgEgHQgEgGAAgKQAAgLAIgHQAIgIALAAQARAAAGAGIgEAMIgIgEIgLgCQgGAAgEAEQgEAEAAAGIACAHIAEAFQACADAHADIAJAEQAKAEAEAHQAEAHAAAKQAAALgJAIQgJAIgOAAQgOAAgJgGg");
	this.shape_595.setTransform(-136.1,-61.5);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgKQAKgLARAAQAFAAAHADQAHACADACIgHAJIgHgDIgKgCQgJAAgGAIQgHAGAAANQAAANAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_596.setTransform(-155.6,-60.1);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgLAAIAAgKIAWAAIAABIgAAAgkQgDgCAAgEQAAgCADgDQABgCADAAQAEAAACACQACADAAACQAAAEgCACQgCACgEAAQgDAAgBgCg");
	this.shape_597.setTransform(-161.2,-61.5);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#FFFFFF").s().p("AAAAqIgIAAQgTAAgLgOQgKgPAAgWQAAgWALgOQAKgPATAAQAUAAALANQALAOAAAYQAAAhgVANQAIALARAAIALAAIgCANQgkAAgLgTgAgbglQgHAKAAASQAAAQAHAMQAHALAMAAQANAAAHgLQAIgKAAgSQAAgngcAAQgNAAgGALg");
	this.shape_598.setTransform(-174.6,-60.5);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgIAKgQAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAFgIQAGgHAAgNQAAgagUAAQgIgBgFAIg");
	this.shape_599.setTransform(-217.6,-60.1);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#FFFFFF").s().p("AARA0IgWglIgMALIAAAaIgNAAIAAhnIANAAIAAA/IAbggIAQAAIgYAaIAdAug");
	this.shape_600.setTransform(-236.8,-61.6);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgKQAKgLARAAQAFAAAHADQAHACADACIgHAJIgHgDIgKgCQgJAAgGAIQgHAGAAANQAAANAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_601.setTransform(-244.2,-60.1);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgKQAKgKANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_602.setTransform(-272.3,-60.1);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#FFFFFF").s().p("AgBAlIgfhKIAOAAIASAzIAUgzIANAAIggBKg");
	this.shape_603.setTransform(-279.5,-60);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgJAKgQAAQgPAAgJgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAGgIQAEgHAAgNQABgagUAAQgIgBgFAIg");
	this.shape_604.setTransform(-286.7,-60.1);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgFAAgEADQgEACgBAEIAAA1IgNAAIAAgzQAAgFgDgDQgEgDgHAAQgEAAgEADQgFADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAIgKALAAQAQAAAFAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_605.setTransform(-296.2,-60.2);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgKQAKgKANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_606.setTransform(-305.8,-60.1);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#FFFFFF").s().p("AAUAzIgagsIgPAAIAAAsIgNAAIAAhjIAKgBIAPAAQAjAAAAAcQAAAKgGAHQgGAHgIACIAdAugAgVglIAAAhIAKABQALAAAGgEQAFgEAAgKQAAgIgGgFQgFgDgNAAg");
	this.shape_607.setTransform(-312.6,-61.5);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#FFFFFF").s().p("AgNAGIAAgLIAbAAIAAALg");
	this.shape_608.setTransform(-325.4,-60.5);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHACADADIgHAKQgCgDgFgCIgKgBQgJAAgGAHQgHAIAAALQAAANAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_609.setTransform(-50.8,-96.6);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_610.setTransform(-58.1,-96.6);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgJALgPAAQgPAAgIgLgAgNgTQgFAHgBAMQAAAbATAAQAJAAAGgHQAEgIAAgMQAAgbgTAAQgIABgFAHg");
	this.shape_611.setTransform(-78.5,-96.6);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAFAHAAQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_612.setTransform(-89.1,-97.5);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAHAIAEIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_613.setTransform(-119.2,-96.6);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_614.setTransform(-130,-96.6);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFACQgFADgCAEIAAA1IgNAAIAAhlIANAAIAAAlQADgEAFgDQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_615.setTransform(-137.6,-98.1);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAFAHAAQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_616.setTransform(-144.1,-97.5);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgDgDAAgDQAAgDADgDQABgCADgBQAEABADACQABADAAADQAAADgBADQgDACgEAAQgDAAgBgCg");
	this.shape_617.setTransform(-160.9,-98);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_618.setTransform(-178.4,-96.6);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_619.setTransform(-201.5,-96.6);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgDgDIgFAHIgGAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAKALQAJAKAAAPQAAASgJALQgKAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACADAAQALAAAHgGQAFgHAAgPQAAgMgGgGQgHgHgKAAIgHACg");
	this.shape_620.setTransform(-209,-98);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_621.setTransform(-228.5,-96.6);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_622.setTransform(-240.3,-96.6);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgjQgCgDAAgDQAAgDACgDQACgCADgBQADABACACQACADAAADQAAADgCADQgCACgDAAQgDAAgCgCg");
	this.shape_623.setTransform(-272.2,-98);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_624.setTransform(-282,-96.6);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFACQgFADgCAEIAAA1IgNAAIAAhlIANAAIAAAlQADgEAFgDQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_625.setTransform(-289.6,-98.1);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAFAHAAQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_626.setTransform(-296.1,-97.5);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAFAHAAQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_627.setTransform(-305.8,-97.5);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_628.setTransform(-324.2,-96.6);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAABgWg");
	this.shape_629.setTransform(223.2,-116.3);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAKACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_630.setTransform(218.2,-115.8);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHADADACIgHAJIgHgDQgFgCgFAAQgJAAgGAHQgHAHAAAMQAAAOAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_631.setTransform(211.9,-114.8);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgFgDgEAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_632.setTransform(198.7,-114.9);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgDgDAAgEQAAgDADgCQABgCADgBQAEABADACQABACAAADQAAAEgBADQgDABgEAAQgDAAgBgBg");
	this.shape_633.setTransform(193.3,-116.2);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#FFFFFF").s().p("AAGANIgBgZIAMAAIgCAZgAgPANIgBgZIAMAAIgCAZg");
	this.shape_634.setTransform(148.1,-119.9);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgDgDAAgEQAAgDADgCQABgCADgBQAEABADACQABACAAADQAAAEgBADQgDABgEAAQgDAAgBgBg");
	this.shape_635.setTransform(123.1,-116.2);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAAMANgBQAJABAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_636.setTransform(117.6,-114.8);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAKACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_637.setTransform(111.2,-115.8);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgJALgPAAQgPAAgIgLgAgNgTQgFAHgBAMQAAAbATAAQAJABAGgIQAEgHAAgNQAAgbgTAAQgIAAgFAIg");
	this.shape_638.setTransform(97,-114.8);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHADADACIgHAJIgHgDQgFgCgFAAQgJAAgGAHQgHAHAAAMQAAAOAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_639.setTransform(89.8,-114.8);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#FFFFFF").s().p("AAHANIgCgZIANAAIgCAZgAgPANIgCgZIANAAIgCAZg");
	this.shape_640.setTransform(84.1,-119.9);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAKACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_641.setTransform(73.8,-115.8);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHADADACIgHAJIgHgDQgFgCgFAAQgJAAgGAHQgHAHAAAMQAAAOAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_642.setTransform(67.5,-114.8);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#FFFFFF").s().p("AgRA1QANAAAEgEQAFgEAAgJIAAg9IgNAAIAAgLIAaAAIAABIQAAAPgJAHQgIAHgSAAgAAEgyQgCgCAAgEQAAgDACgCQADgDADAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgDAAgDgCg");
	this.shape_643.setTransform(53.3,-114.8);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgDgDIgEAHIgHAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAKALQAJAKAAAPQAAASgJALQgKAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACADAAQALAAAHgGQAFgHAAgPQAAgMgGgGQgHgHgKAAIgHACg");
	this.shape_644.setTransform(47.7,-116.3);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgJALgPAAQgPAAgIgLgAgNgTQgFAHgBAMQAAAbATAAQAJABAGgIQAEgHAAgNQAAgbgTAAQgIAAgFAIg");
	this.shape_645.setTransform(39.9,-114.8);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAKACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_646.setTransform(28.1,-115.8);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAAMANgBQAJABAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_647.setTransform(16.1,-114.8);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgEAAgFADQgEACgCAEIAAA1IgLAAIAAgzQAAgFgFgDQgEgDgGAAQgEAAgFADQgEADgCADIAAA1IgNAAIAAhIIAJAAIAEAJQAHgKAMAAQAQAAAFAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_648.setTransform(6.7,-114.9);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAGQgHAGgLAAQgMAAgKgGg");
	this.shape_649.setTransform(-2,-114.8);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAHIAoAAIAAAAg");
	this.shape_650.setTransform(-13.9,-114.8);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhmIANAAIAAAmQADgDAFgEQAGgCAFAAQAMAAAHAHQAGAIAAAMIAAAug");
	this.shape_651.setTransform(-21.5,-116.3);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAKACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_652.setTransform(-28,-115.8);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAHIAoAAIAAAAg");
	this.shape_653.setTransform(-45.4,-114.8);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAKACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_654.setTransform(-51.9,-115.8);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAHIAoAAIAAAAg");
	this.shape_655.setTransform(-66.2,-114.8);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgIALgQAAQgOAAgJgLgAgNgTQgGAHAAAMQABAbASAAQAJABAFgIQAGgHAAgNQAAgbgUAAQgIAAgFAIg");
	this.shape_656.setTransform(-79.1,-114.8);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAKACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_657.setTransform(-85.5,-115.8);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#FFFFFF").s().p("AARAzIgWgkIgMAMIAAAYIgNAAIAAhmIANAAIAAA/IAbghIAQAAIgYAbIAdAtg");
	this.shape_658.setTransform(-96.8,-116.3);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHADADACIgHAJIgHgDQgFgCgFAAQgJAAgGAHQgHAHAAAMQAAAOAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_659.setTransform(-104.2,-114.8);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgjQgCgDAAgEQAAgDACgCQACgCACgBQAEABACACQACACAAADQAAAEgCADQgCABgEAAQgCAAgCgBg");
	this.shape_660.setTransform(-109.8,-116.2);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAABgWg");
	this.shape_661.setTransform(-113.4,-116.3);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHADADACIgHAJIgHgDQgFgCgFAAQgJAAgGAHQgHAHAAAMQAAAOAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_662.setTransform(-119.2,-114.8);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAHIAoAAIAAAAg");
	this.shape_663.setTransform(-131.8,-114.8);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAAAgWg");
	this.shape_664.setTransform(-137.4,-116.3);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgDgDIgEAHIgHAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAJALQAKAKAAAPQAAASgKALQgJAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACACAAQANAAAFgGQAGgHAAgPQAAgMgHgGQgGgHgLAAIgGACg");
	this.shape_665.setTransform(-143.3,-116.3);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_666.setTransform(-151.2,-114.8);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgKALgPAAQgPAAgJgLgAgNgTQgFAHAAAMQgBAbATAAQAJABAGgIQAEgHAAgNQAAgbgTAAQgIAAgFAIg");
	this.shape_667.setTransform(-158.8,-114.8);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_668.setTransform(-166.6,-116.3);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAAMANgBQAJABAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_669.setTransform(-186.2,-114.8);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_670.setTransform(-210.6,-114.8);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgKALgPAAQgPAAgJgLgAgNgTQgFAHAAAMQgBAbATAAQAJABAGgIQAEgHAAgNQAAgbgTAAQgIAAgFAIg");
	this.shape_671.setTransform(-218.2,-114.8);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#FFFFFF").s().p("AgLARQALgJAAgIQAAgCgBgCQgGgEAAgEQAAgEADgDQADgCADAAQAEAAADADQACADAAAFQAAAJgDAHQgEAHgLAJg");
	this.shape_672.setTransform(-236.9,-110.9);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAHIAoAAIAAAAg");
	this.shape_673.setTransform(-252.3,-114.8);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#FFFFFF").s().p("AgBAlIgfhJIAOAAIASAyIAUgyIANAAIggBJg");
	this.shape_674.setTransform(-259.6,-114.8);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgCgDgBgEQABgDACgCQACgCADgBQADABADACQACACAAADQAAAEgCADQgDABgDAAQgDAAgCgBg");
	this.shape_675.setTransform(-265.1,-116.2);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAKACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_676.setTransform(-269.6,-115.8);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAAMANgBQAJABAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_677.setTransform(-276.2,-114.8);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_678.setTransform(-283.6,-114.9);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgFgDgEAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_679.setTransform(-289.6,-114.9);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAHIAoAAIAAAAg");
	this.shape_680.setTransform(-296.6,-114.8);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAKACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_681.setTransform(-303.1,-115.8);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGAEADQADADAGAAIAAAMQgZAAAAgWg");
	this.shape_682.setTransform(-307.8,-116.3);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#FFFFFF").s().p("AAZAzIgHgVIgkAAIgHAVIgPAAIAohlIADAAIAmBlgAAPAUIgPgsIgOAsIAdAAg");
	this.shape_683.setTransform(-314.2,-116.3);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#FFFFFF").s().p("AgNAGIAAgLIAbAAIAAALg");
	this.shape_684.setTransform(-325.4,-115.2);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_685.setTransform(106.3,-148.6);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#FFFFFF").s().p("AgRA1QANAAAEgEQAFgEAAgJIAAg9IgNAAIAAgLIAaAAIAABIQAAAPgJAHQgIAHgSAAgAAEgyQgCgCAAgEQAAgDACgCQADgDADAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgDAAgDgCg");
	this.shape_686.setTransform(80.7,-151.3);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgIAKgQAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJgBAFgHQAGgHAAgNQAAgagUAAQgIAAgFAHg");
	this.shape_687.setTransform(67.3,-151.3);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_688.setTransform(-19,-152.8);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgPAAgJgKgAgNgTQgFAHAAAMQgBAcATAAQAJgBAGgHQAEgHAAgNQAAgagTAAQgIAAgFAHg");
	this.shape_689.setTransform(-38.2,-151.3);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#FFFFFF").s().p("AgHAyIAAhXIgfAAIAAgMIBOAAIAAAMIgiAAIAABXg");
	this.shape_690.setTransform(-77.6,-152.7);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_691.setTransform(-89.4,-151.4);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgKQAKgLARAAQAFAAAHADQAHACADACIgHAJIgHgEIgKgBQgJAAgGAIQgHAGAAANQAAAMAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_692.setTransform(-113.6,-151.3);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAABgWg");
	this.shape_693.setTransform(-126.5,-152.8);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#FFFFFF").s().p("AgbAuIAFgNIAKAFQAFACAFAAQAHAAAFgFQAEgEAAgHQAAgFgCgEQgDgFgKgFIgIgDQgKgEgEgHQgEgGAAgKQAAgLAIgHQAIgIALAAQARAAAGAGIgEAMIgIgEIgLgCQgGAAgEAEQgEAEAAAGIACAHIAEAFQACADAHADIAJAEQAKAEAEAHQAEAHAAAKQAAALgJAIQgJAIgOAAQgOAAgJgGg");
	this.shape_694.setTransform(-139.7,-152.7);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#FFFFFF").s().p("AARA0IgWglIgMALIAAAaIgNAAIAAhnIANAAIAABAIAbghIAQAAIgYAaIAdAug");
	this.shape_695.setTransform(-150.4,-152.8);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgKQAKgLARAAQAFAAAHADQAHACADACIgHAJIgHgEIgKgBQgJAAgGAIQgHAGAAANQAAAMAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_696.setTransform(-157.8,-151.3);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgCgCAAgDQAAgDACgDQACgCACAAQAEAAACACQACADAAADQAAADgCACQgCACgEAAQgCAAgCgCg");
	this.shape_697.setTransform(-163.4,-152.7);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_698.setTransform(-169,-151.3);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#FFFFFF").s().p("AAAAqIgIAAQgTAAgLgOQgKgPAAgWQAAgWALgOQAKgPATAAQAUAAALANQALAOAAAYQAAAhgVANQAIALARAAIALAAIgCANQgkAAgLgTgAgbglQgHAKAAASQAAAQAHAMQAHALAMAAQANAAAHgLQAIgKAAgSQAAgngcAAQgNAAgGALg");
	this.shape_699.setTransform(-176.8,-151.8);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#FFFFFF").s().p("AAGANIgBgZIAMAAIgCAZgAgPANIgBgZIAMAAIgCAZg");
	this.shape_700.setTransform(-184.5,-156.4);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgGQgJgEgDgBIgGgFIgDgGIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAEQAIAEAEAEQAEAGAAAHQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_701.setTransform(-201.4,-151.3);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_702.setTransform(-208,-151.3);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_703.setTransform(-219.8,-151.4);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgIAOAAQAEAAAGACQAAgSgPAAQgMAAgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_704.setTransform(-227.3,-151.3);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgKQAKgLARAAQAFAAAHADQAHACADACIgHAJIgHgEIgKgBQgJAAgGAIQgHAGAAANQAAAMAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_705.setTransform(-234.4,-151.3);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_706.setTransform(-245.8,-151.3);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#FFFFFF").s().p("AgLARQALgKAAgGQAAgCgBgEQgGgCAAgGQAAgDADgCQADgDADAAQAEAAADAEQADADAAAEQAAAJgEAGQgEAIgLAJg");
	this.shape_707.setTransform(-271,-147.4);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_708.setTransform(-277.4,-152.8);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgIAOAAQAEAAAGACQAAgSgPAAQgMAAgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_709.setTransform(-284.8,-151.3);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgRQAAgSALgKQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_710.setTransform(-292.2,-151.3);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAjQAAAKACAEQADADAHAAQAFAAAGgCIABALQgIACgJABQgIAAgGgHg");
	this.shape_711.setTransform(-298.7,-152.3);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgGQgJgEgDgBIgGgFIgDgGIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAEQAIAEAEAEQAEAGAAAHQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_712.setTransform(-304.4,-151.3);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_713.setTransform(-311,-151.4);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#FFFFFF").s().p("AgGAyIAAhjIANAAIAABjg");
	this.shape_714.setTransform(-316.7,-152.7);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#FFFFFF").s().p("AgNAGIAAgLIAbAAIAAALg");
	this.shape_715.setTransform(-325.4,-151.7);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOABQAEgBAGACQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_716.setTransform(-51,62.3);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOABQAEgBAGACQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_717.setTransform(-100.6,62.3);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOABQAEgBAGACQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_718.setTransform(-120.3,62.3);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgCgDgBgDQABgDACgDQACgCADgBQADABADACQACADAAADQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_719.setTransform(-133.7,60.9);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgJAAIAAgLIAVAAIAABIgAAAgjQgDgDABgDQgBgDADgDQACgCADgBQADABACACQADADAAADQAAADgDADQgCACgDAAQgDAAgCgCg");
	this.shape_720.setTransform(-204.9,60.9);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHACADADIgHAKIgHgFIgKgBQgJAAgGAHQgHAIAAALQAAANAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_721.setTransform(-214.4,62.3);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAHAIAEIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_722.setTransform(-235.2,62.3);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAGgEgBgGQAAgGgCgGIgFgOIgUgyIAOAAIAUA4IATg4IAOAAIggBVQgCAHgHAEQgIAFgKAAg");
	this.shape_723.setTransform(-245.6,63.7);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOABQAEgBAGACQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_724.setTransform(-261,62.3);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgCgDgBgDQABgDACgDQACgCADgBQADABADACQACADAAADQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_725.setTransform(-273.7,60.9);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOABQAEgBAGACQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_726.setTransform(-284.7,62.3);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOABQAEgBAGACQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_727.setTransform(-324.3,62.3);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgLAAIAAgLIAWAAIAABIgAAAgjQgDgDAAgEQAAgDADgCQABgCADgBQAEABACACQACACAAADQAAAEgCADQgCABgEAAQgDAAgBgBg");
	this.shape_728.setTransform(207.3,42.6);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#FFFFFF").s().p("AAVAlIgVgwIgUAwIgEAAIgahJIAOAAIAQAuIATguIACAAIAUAuIARguIANAAIgaBJg");
	this.shape_729.setTransform(200.3,44.1);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#FFFFFF").s().p("AgEANIgBgZIALAAIgCAZg");
	this.shape_730.setTransform(124.1,38.9);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_731.setTransform(87.5,44);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhmIANAAIAAAmQADgDAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_732.setTransform(51.4,42.5);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhmIANAAIAAAmQADgDAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_733.setTransform(18.7,42.5);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_734.setTransform(12.2,43.1);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#FFFFFF").s().p("AgLARQALgJAAgIQAAgCgBgCQgGgEAAgEQAAgEADgDQADgCADAAQAEAAADADQACADABAFQgBAJgDAHQgEAHgLAJg");
	this.shape_735.setTransform(-4,48);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#FFFFFF").s().p("AgNA6QANgQAAgrQAAgmgNgTIAAgGQAMAGAHATQAJATAAATQgBAUgHASQgHASgNAKg");
	this.shape_736.setTransform(-8.7,44.1);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgEgDgFAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_737.setTransform(-13.6,43.9);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_738.setTransform(-27.2,43.1);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_739.setTransform(-32.9,44);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhmIANAAIAAAmQADgDAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_740.setTransform(-70.4,42.5);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_741.setTransform(-76.9,43.1);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#FFFFFF").s().p("AgGAlQgIgSAAgUQAAgTAJgTQAIgTALgGIAAAGQgNATAAAmQAAArANAQIAAAHQgNgKgHgSg");
	this.shape_742.setTransform(-82.1,44.1);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgFAAgEADQgEACgBAEIAAA1IgNAAIAAgzQAAgFgDgDQgFgDgGAAQgEAAgEADQgFADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAIgKALAAQAQAAAFAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_743.setTransform(-112.6,43.9);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgCgDgBgEQABgDACgCQACgCACgBQAEABADACQACACAAADQAAAEgCADQgDABgEAAQgCAAgCgBg");
	this.shape_744.setTransform(-120.6,42.6);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhmIANAAIAAAmQADgDAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_745.setTransform(-144.4,42.5);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_746.setTransform(-150.9,43.1);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_747.setTransform(-167.2,44);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhmIANAAIAAAmQADgDAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_748.setTransform(-181.1,42.5);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_749.setTransform(-198.2,43.1);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAAMANgBQAJABAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_750.setTransform(-204.8,44);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhmIANAAIAAAmQADgDAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_751.setTransform(-212.2,42.5);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_752.setTransform(-218.7,43.1);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgCgDgBgEQABgDACgCQABgCADgBQAEABADACQABACAAADQAAAEgBADQgDABgEAAQgDAAgBgBg");
	this.shape_753.setTransform(-246,42.6);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#FFFFFF").s().p("AgMAzIAAg9IgLAAIAAgLIALAAQAAgOAGgHQAHgJALAAQAFAAAHACIgEAKIgHgCQgGABgEAEQgDAEAAAIIAAADIAPAAIAAALIgPAAIAAA9g");
	this.shape_754.setTransform(-250.1,42.5);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgIAKABQAPAAAJAJQAIAKAAATQAAAPgIALQgJAKgQAAQgEAAgGgBQgFgCgCgCIAAAggAgLgmQgFACgCADIAAApIAGAEIAHACQAYgBgBgaQABgOgHgGQgFgGgMAAIgGABg");
	this.shape_755.setTransform(-267.2,45.4);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgKALgPAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJABAFgIQAGgHgBgNQABgbgUAAQgIAAgFAIg");
	this.shape_756.setTransform(-275.1,44);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhmIANAAIAAAmQADgDAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_757.setTransform(-282.6,42.5);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_758.setTransform(-289.3,44);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_759.setTransform(-302.3,43.1);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhmIANAAIAAAmQADgDAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_760.setTransform(-316.4,42.5);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgIAKABQAPAAAIAJQAJAKAAATQAAAPgJALQgIAKgQAAQgEAAgGgBQgGgCgBgCIAAAggAgMgmQgEACgCADIAAApIAFAEIAIACQAYgBAAgaQgBgOgGgGQgFgGgMAAIgHABg");
	this.shape_761.setTransform(-323.9,45.4);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgDgCABgEQgBgDADgCQABgDAEAAQADAAACADQACACABADQgBAEgCACQgCACgDAAQgEAAgBgCg");
	this.shape_762.setTransform(172.5,24.4);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#FFFFFF").s().p("AgNA0IAAg+IgKAAIAAgKIAKAAQABgOAGgJQAHgHALgBQAGAAAGACIgEAKIgHgCQgGAAgEAFQgDAFAAAGIAAAFIAPAAIAAAKIgPAAIAAA+g");
	this.shape_763.setTransform(122.4,24.3);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAGgEgBgGQAAgGgCgGIgFgOIgUgyIAOAAIAUA4IATg4IAOAAIggBVQgCAHgHAEQgIAFgKAAg");
	this.shape_764.setTransform(90,27.2);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCAAgEQAAgDACgCQACgDADAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_765.setTransform(54.8,24.4);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgFAAgEADQgEACgBAEIAAA1IgNAAIAAgzQAAgFgDgDQgFgDgGAAQgEAAgEADQgFADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAIgKALAAQAQAAAFAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_766.setTransform(9.9,25.7);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCgBgEQABgDACgCQACgDACAAQAEAAADADQACACAAADQAAAEgCACQgDACgEAAQgCAAgCgCg");
	this.shape_767.setTransform(-43.6,24.4);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgEgDgFAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_768.setTransform(-133.3,25.7);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgJAKgQAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAGgIQAEgHAAgNQABgagUAAQgIgBgFAIg");
	this.shape_769.setTransform(-162.9,25.8);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAGgEgBgGQAAgGgCgGIgFgOIgUgyIAOAAIAUA4IATg4IAOAAIggBVQgCAHgHAEQgIAFgKAAg");
	this.shape_770.setTransform(-170.1,27.2);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_771.setTransform(-192.6,25.8);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#FFFFFF").s().p("AAUAkQgEgDgCgFQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOgBQAEABAGACQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_772.setTransform(-236.3,25.8);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#FFFFFF").s().p("AgKARQAKgKAAgGQAAgDgBgCQgGgEAAgEQAAgEADgDQADgCADAAQAEAAADADQADADgBAFQAAAJgDAGQgEAIgLAJg");
	this.shape_773.setTransform(-250.3,29.7);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_774.setTransform(-256.5,25.8);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgLAAIAAgKIAWAAIAABIgAAAgkQgDgCAAgEQAAgDADgCQABgDADAAQAEAAACADQACACAAADQAAAEgCACQgCACgEAAQgDAAgBgCg");
	this.shape_775.setTransform(-266.5,24.4);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#FFFFFF").s().p("AgMA0IAAg+IgLAAIAAgKIALAAQgBgOAIgJQAFgHAMgBQAGAAAGACIgDAKIgIgCQgGAAgEAFQgDAFAAAGIAAAFIAPAAIAAAKIgPAAIAAA+g");
	this.shape_776.setTransform(-270.6,24.3);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#FFFFFF").s().p("AAUAkQgEgDgCgFQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOgBQAEABAGACQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_777.setTransform(-288.9,25.8);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgCgCAAgEQAAgDACgCQACgDADAAQADAAACADQACACAAADQAAAEgCACQgCACgDAAQgDAAgCgCg");
	this.shape_778.setTransform(-302.3,24.4);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_779.setTransform(-307.6,26.9);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCgBgEQABgDACgCQACgDADAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_780.setTransform(-313.3,24.4);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAGgEgBgGQAAgGgCgGIgFgOIgUgyIAOAAIAUA4IATg4IAOAAIggBVQgCAHgHAEQgIAFgKAAg");
	this.shape_781.setTransform(193.6,8.9);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgFAAgEADQgEACgBAEIAAA1IgNAAIAAgzQAAgFgDgDQgFgDgGAAQgEAAgEADQgFADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAIgKALAAQAQAAAFAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_782.setTransform(50.8,7.4);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAIgHAKgBQAPAAAIAKQAJAKAAASQAAAQgJALQgIALgQAAQgEgBgGgCQgGgBgBgCIAAAhgAgMglQgEABgCADIAAApIAFAEIAIABQAYAAAAgaQgBgOgFgGQgGgHgMAAIgHADg");
	this.shape_783.setTransform(6.4,8.9);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJgBAGgHQAEgHABgNQgBgagTAAQgIAAgFAHg");
	this.shape_784.setTransform(-1.4,7.5);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJgBAFgHQAGgHgBgNQABgagUAAQgIAAgFAHg");
	this.shape_785.setTransform(-35.2,7.5);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAHgHALgBQAOAAAKAKQAIAKAAASQAAAQgIALQgJALgQAAQgEgBgGgCQgFgBgCgCIAAAhgAgLglQgFABgCADIAAApIAGAEIAHABQAYAAgBgaQAAgOgFgGQgGgHgMAAIgGADg");
	this.shape_786.setTransform(-50.2,8.9);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAHgHALgBQAPAAAIAKQAJAKAAASQAAAQgJALQgIALgQAAQgFgBgFgCQgFgBgCgCIAAAhgAgMglQgEABgCADIAAApIAFAEIAIABQAXAAABgaQAAgOgHgGQgFgHgMAAIgHADg");
	this.shape_787.setTransform(-96.4,8.9);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_788.setTransform(-135,8.7);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAHgHALgBQAOAAAKAKQAIAKAAASQAAAQgIALQgKALgPAAQgFgBgFgCQgFgBgCgCIAAAhgAgLglQgEABgDADIAAApIAGAEIAHABQAXAAAAgaQAAgOgFgGQgGgHgMAAIgGADg");
	this.shape_789.setTransform(-168.9,8.9);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgPAAgJgKgAgNgTQgFAHAAAMQgBAcATAAQAJgBAGgHQAEgHAAgNQAAgagTAAQgIAAgFAHg");
	this.shape_790.setTransform(-176.8,7.5);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgIAOAAQAEAAAGACQAAgSgPAAQgMAAgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_791.setTransform(-204.5,7.5);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgJAAIAAgKIAVAAIAABIgAAAgkQgDgCABgDQgBgDADgDQACgCADAAQADAAACACQADADAAADQAAADgDACQgCACgDAAQgDAAgCgCg");
	this.shape_792.setTransform(-210.3,6.1);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgRQAAgSALgKQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_793.setTransform(-260.8,7.5);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgIAOAAQAEAAAGACQAAgSgPAAQgMAAgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_794.setTransform(-273.7,7.5);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgJAKgQAAQgOAAgKgKgAgNgTQgFAHAAAMQAAAcASAAQAJgBAGgHQAEgHAAgNQABgagUAAQgIAAgFAHg");
	this.shape_795.setTransform(-293.9,7.5);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAGgEgBgGQAAgGgCgGIgFgOIgUgyIAOAAIAUA4IATg4IAOAAIggBVQgCAHgHAEQgIAFgKAAg");
	this.shape_796.setTransform(-301.1,8.9);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgGQgJgEgDgBIgGgFIgDgGIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAEQAIAEAEAEQAEAGAAAHQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_797.setTransform(-325.2,7.5);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_798.setTransform(214.6,-9.6);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgkQgCgCgBgDQABgDACgDQABgDADABQAEgBADADQABADABADQgBADgBACQgDADgEAAQgDAAgBgDg");
	this.shape_799.setTransform(201.3,-12.1);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgJALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJAAAGgHQAEgIAAgMQABgbgUAAQgIABgFAHg");
	this.shape_800.setTransform(195.7,-10.7);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#FFFFFF").s().p("AgfAyIAAhjIAaAAQAOAAAIAGQAIAGAAAMQAAAHgFAGQgFAFgGACQAMADAFAGQAGAGAAAMQAAANgKAHQgKAJgOgBgAgRAnIAKABQAMgBAGgEQAGgFAAgKQAAgLgFgEQgGgFgMABIgLAAgAgRgmIAAAdIAKAAQATAAAAgPQAAgOgRAAg");
	this.shape_801.setTransform(168.6,-12.1);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#FFFFFF").s().p("AAHANIgCgZIANAAIgCAZgAgPANIgBgZIAMAAIgCAZg");
	this.shape_802.setTransform(152.1,-15.8);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_803.setTransform(146.4,-9.6);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#FFFFFF").s().p("AAGANIgBgZIAMAAIgCAZgAgPANIgCgZIANAAIgCAZg");
	this.shape_804.setTransform(125.5,-15.8);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_805.setTransform(34.4,-9.6);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgIALgQAAQgPAAgIgLgAgNgTQgGAHAAAMQABAbASAAQAJAAAFgHQAFgIABgMQgBgbgTAAQgIABgFAHg");
	this.shape_806.setTransform(22.1,-10.7);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAAAgWg");
	this.shape_807.setTransform(-21.3,-12.2);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgIALgQAAQgPAAgIgLgAgNgTQgGAHAAAMQABAbASAAQAJAAAFgHQAFgIABgMQgBgbgTAAQgIABgFAHg");
	this.shape_808.setTransform(-65.2,-10.7);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgEAAgFADQgEACgCAEIAAA1IgLAAIAAgzQAAgFgFgDQgEgDgGAAQgEAAgFADQgEADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAIgKALAAQAPAAAGAJQACgEAGgDQAGgCAGAAQALAAAHAGQAGAHAAAMIAAAwg");
	this.shape_809.setTransform(-98.1,-10.8);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#FFFFFF").s().p("AgMAzIAAg9IgLAAIAAgLIALAAQAAgOAGgHQAHgIALAAQAFAAAHACIgEAJIgHgBQgGgBgEAFQgDAEAAAIIAAADIAPAAIAAALIgPAAIAAA9g");
	this.shape_810.setTransform(-142.6,-12.2);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgkQgCgCAAgDQAAgDACgDQACgDADABQADgBACADQACADAAADQAAADgCACQgCADgDAAQgDAAgCgDg");
	this.shape_811.setTransform(-164.2,-12.1);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_812.setTransform(-177.1,-10.8);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgLAAIAAgLIAWAAIAABIgAAAgkQgDgCAAgDQAAgDADgDQABgDADABQAEgBACADQACADAAADQAAADgCACQgCADgEAAQgDAAgBgDg");
	this.shape_813.setTransform(-267.9,-12.1);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAAAgWg");
	this.shape_814.setTransform(-271.5,-12.2);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAAAgWg");
	this.shape_815.setTransform(-295.1,-12.2);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#FFFFFF").s().p("AAWAlIgWgxIgUAxIgEAAIgahJIAOAAIAQAuIATguIACAAIAVAuIARguIAMAAIgaBJg");
	this.shape_816.setTransform(180.3,-28.9);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_817.setTransform(159.5,-29.1);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgDgDAAgEQAAgCADgDQABgCADgBQAEABADACQABADAAACQAAAEgBADQgDACgEAAQgDAAgBgCg");
	this.shape_818.setTransform(146,-30.4);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgIALABQAOgBAJAKQAJAKAAATQAAAPgJALQgJAKgPAAQgFAAgFgBQgGgCgBgCIAAAggAgMgmQgDACgDACIAAAqIAFAEIAIACQAYgBAAgaQgBgOgFgGQgGgGgMAAIgHABg");
	this.shape_819.setTransform(135,-27.6);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgJALgPAAQgPAAgIgLgAgNgTQgFAHgBAMQAAAbATAAQAJABAGgIQAEgIAAgMQAAgbgTAAQgIAAgFAIg");
	this.shape_820.setTransform(127.2,-29);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#FFFFFF").s().p("AgNAzIAAg9IgKAAIAAgLIAKAAQABgOAGgHQAHgJALABQAGAAAGABIgEAKIgHgCQgGABgEAEQgDAEAAAIIAAADIAOAAIAAALIgOAAIAAA9g");
	this.shape_821.setTransform(88.1,-30.5);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_822.setTransform(60.2,-29.1);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_823.setTransform(38.1,-26.2);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#FFFFFF").s().p("AAWAlIgWgxIgUAxIgEAAIgahJIAOAAIAQAuIATguIACAAIAVAuIARguIAMAAIgaBJg");
	this.shape_824.setTransform(-42.9,-28.9);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_825.setTransform(-65.8,-29.1);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgIALgQAAQgPAAgIgLgAgNgTQgGAHAAAMQABAbASAAQAJABAFgIQAFgIABgMQgBgbgTAAQgIAAgFAIg");
	this.shape_826.setTransform(-81,-29);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgFgDgEAAQgHAAgEAGQgFAGAAAJIAAApg");
	this.shape_827.setTransform(-86.9,-29.1);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_828.setTransform(-93.6,-27.8);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#FFFFFF").s().p("AARAzIgWgkIgMAMIAAAYIgNAAIAAhlIANAAIAAA+IAbghIAQAAIgYAbIAdAtg");
	this.shape_829.setTransform(-100.2,-30.5);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#FFFFFF").s().p("AAVAlIgVgxIgVAxIgDAAIgahJIAOAAIAPAuIAUguIACAAIAUAuIARguIANAAIgaBJg");
	this.shape_830.setTransform(-190.5,-28.9);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_831.setTransform(-205.6,-29.1);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgCgDgBgEQABgCACgDQACgCADgBQADABADACQACADAAACQAAAEgCADQgDACgDAAQgDAAgCgCg");
	this.shape_832.setTransform(-211.6,-30.4);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgIALABQAOgBAJAKQAJAKAAATQAAAPgJALQgJAKgPAAQgFAAgFgBQgGgCgBgCIAAAggAgMgmQgDACgDACIAAAqIAFAEIAIACQAYgBAAgaQgBgOgFgGQgGgGgMAAIgHABg");
	this.shape_833.setTransform(-223.2,-27.6);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_834.setTransform(-231.1,-29);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgFgDgBIgGgEIgDgGIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_835.setTransform(-243.3,-29);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_836.setTransform(-256,-29);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAAAgWg");
	this.shape_837.setTransform(-280.9,-30.4);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHACADADIgHAKIgHgFIgKgBQgJAAgGAHQgHAIAAALQAAAOAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_838.setTransform(-298.1,-29);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_839.setTransform(-305.4,-29);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#FFFFFF").s().p("AAUAyIgagqIgPgBIAAArIgNAAIAAhjIAKAAIAPgBQAjABAAAcQAAAJgGAIQgGAGgIACIAdAugAgVgkIAAAgIAKABQALAAAGgEQAFgEAAgKQAAgJgGgDQgFgEgNAAg");
	this.shape_840.setTransform(-312.1,-30.4);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_841.setTransform(-86.4,-62.7);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgEAAgFADQgEACgCAEIAAA1IgLAAIAAgzQAAgFgFgDQgEgDgGAAQgEAAgFADQgEADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAIgKALAAQAPAAAGAJQACgEAGgDQAGgCAGAAQALAAAHAGQAGAHAAAMIAAAwg");
	this.shape_842.setTransform(-117.3,-65.6);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#FFFFFF").s().p("AgEANIgBgZIALAAIgCAZg");
	this.shape_843.setTransform(-142.9,-70.6);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgGQgJgEgDgBIgGgFIgDgGIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAEQAIAEAEAEQAEAGAAAHQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_844.setTransform(-173,-65.5);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_845.setTransform(-185.2,-65.6);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgEAAgFADQgEACgCAEIAAA1IgLAAIAAgzQAAgFgFgDQgEgDgGAAQgEAAgFADQgEADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAIgKALAAQAPAAAGAJQACgEAGgDQAGgCAGAAQALAAAHAGQAGAHAAAMIAAAwg");
	this.shape_846.setTransform(-202.4,-65.6);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgGQgJgEgDgBIgGgFIgDgGIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAEQAIAEAEAEQAEAGAAAHQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_847.setTransform(-216.6,-65.5);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_848.setTransform(-236.2,-66.9);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_849.setTransform(-255.5,-66.9);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_850.setTransform(-262.9,-65.6);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOAAQAEAAAGACQAAgTgPABQgMAAgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_851.setTransform(-270.4,-65.5);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgGQgJgEgDgBIgGgFIgDgGIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAEQAIAEAEAEQAEAGAAAHQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_852.setTransform(-281.1,-65.5);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_853.setTransform(-295,-64.3);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_854.setTransform(-302.3,-65.6);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOAAQAEAAAGACQAAgTgPABQgMAAgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_855.setTransform(-309.8,-65.5);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#FFFFFF").s().p("AAQAzIAAgtQAAgIgEgFQgEgEgHAAQgEAAgFACQgFADgCAEIAAA1IgNAAIAAhlIANAAIAAAmQADgFAFgDQAGgCAFAAQAMAAAHAIQAGAHAAANIAAAtg");
	this.shape_856.setTransform(206.3,-85.2);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHAAQAFAAAGgCIABALQgIADgJAAQgIAAgGgHg");
	this.shape_857.setTransform(199.8,-84.7);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHAAQAFAAAGgCIABALQgIADgJAAQgIAAgGgHg");
	this.shape_858.setTransform(179.5,-84.7);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAZQAAAKAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_859.setTransform(172.9,-83.7);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgKIAVAAIAABHgAAAgkQgCgCAAgDQAAgEACgCQACgDADABQADgBACADQACACAAAEQAAADgCACQgCACgDABQgDgBgCgCg");
	this.shape_860.setTransform(160.3,-85.1);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHAAQAFAAAGgCIABALQgIADgJAAQgIAAgGgHg");
	this.shape_861.setTransform(155.8,-84.7);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgKQAKgLARAAQAFAAAHACQAHADADACIgHAKQgCgDgFgCIgKgBQgJAAgGAIQgHAGAAAMQAAANAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_862.setTransform(149.5,-83.7);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAZQAAAKAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_863.setTransform(142.3,-83.7);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_864.setTransform(134.9,-83.7);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_865.setTransform(127,-85.2);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_866.setTransform(112.1,-85.2);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_867.setTransform(104.6,-83.8);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAZQAAAKAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_868.setTransform(97.1,-83.7);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_869.setTransform(82.5,-83.7);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHAAQAFAAAGgCIABALQgIADgJAAQgIAAgGgHg");
	this.shape_870.setTransform(76,-84.7);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAZQAAAKAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_871.setTransform(69.5,-83.7);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#FFFFFF").s().p("AgBAmIgfhLIAOAAIASAzIAUgzIANAAIggBLg");
	this.shape_872.setTransform(62.4,-83.7);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgKIAXAAIAABHgAAAgkQgCgCgBgDQABgEACgCQABgDADABQAEgBADADQABACAAAEQAAADgBACQgDACgEABQgDgBgBgCg");
	this.shape_873.setTransform(56.8,-85.1);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHAAQAFAAAGgCIABALQgIADgJAAQgIAAgGgHg");
	this.shape_874.setTransform(52.3,-84.7);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgKQAKgLARAAQAFAAAHACQAHADADACIgHAKQgCgDgFgCIgKgBQgJAAgGAIQgHAGAAAMQAAANAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_875.setTransform(46,-83.7);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAZQAAAKAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_876.setTransform(38.9,-83.7);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgIALgQAAQgPAAgIgLgAgNgTQgGAHAAAMQABAbASAAQAJAAAFgHQAFgIABgMQgBgagTAAQgIAAgFAHg");
	this.shape_877.setTransform(24.3,-83.7);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHAAQAFAAAGgCIABALQgIADgJAAQgIAAgGgHg");
	this.shape_878.setTransform(17.9,-84.7);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_879.setTransform(4.1,-83.7);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGAEADQADADAGAAIAAAMQgYAAAAgWg");
	this.shape_880.setTransform(-1.5,-85.2);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgCgDIgGAHIgGAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAKALQAJAKAAAPQAAASgJALQgKAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACACAAQAMAAAHgGQAFgHAAgPQAAgMgHgGQgGgHgLAAIgGACg");
	this.shape_881.setTransform(-7.5,-85.2);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAZQAAAKAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_882.setTransform(-15.3,-83.7);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_883.setTransform(-29.9,-83.7);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAZQAAAKAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_884.setTransform(-42.8,-83.7);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgKALgPAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJAAAFgHQAGgIgBgMQABgagUAAQgIAAgFAHg");
	this.shape_885.setTransform(-64.9,-83.7);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAFgEAAgGQAAgGgBgGIgGgOIgUgyIAOAAIAUA4IATg4IAOAAIggBVQgCAHgHAEQgIAFgKAAg");
	this.shape_886.setTransform(-72.1,-82.3);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#FFFFFF").s().p("AgLARQALgJAAgHQAAgDgBgDQgGgCAAgGQAAgDADgCQADgDADAAQAEAAADAEQACADABAEQgBAJgDAGQgEAIgLAJg");
	this.shape_887.setTransform(-85.5,-79.8);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgGQgJgEgDgBIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAEQAIAEAEAEQAEAGAAAHQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_888.setTransform(-90.7,-83.7);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_889.setTransform(-97.6,-85.2);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgKALgPAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJAAAFgHQAGgIgBgMQABgagUAAQgIAAgFAHg");
	this.shape_890.setTransform(-110.4,-83.7);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_891.setTransform(-140.9,-83.7);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#FFFFFF").s().p("AAQAzIAAgtQAAgIgEgFQgEgEgHAAQgEAAgFACQgFADgCAEIAAA1IgNAAIAAhlIANAAIAAAmQADgFAFgDQAGgCAFAAQAMAAAHAIQAGAHAAANIAAAtg");
	this.shape_892.setTransform(-148.5,-85.2);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHAAQAFAAAGgCIABALQgIADgJAAQgIAAgGgHg");
	this.shape_893.setTransform(-155,-84.7);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgJALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJAAAGgHQAEgIAAgMQABgagUAAQgIAAgFAHg");
	this.shape_894.setTransform(-161.6,-83.7);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_895.setTransform(-176.3,-83.8);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_896.setTransform(-193.8,-81);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_897.setTransform(-200.3,-85.2);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_898.setTransform(-207.7,-83.7);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_899.setTransform(-215,-82.6);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_900.setTransform(-222.3,-83.8);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAZQAAAKAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_901.setTransform(-229.8,-83.7);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#FFFFFF").s().p("AAQAzIAAgtQAAgIgEgFQgEgEgHAAQgEAAgFACQgFADgCAEIAAA1IgNAAIAAhlIANAAIAAAmQADgFAFgDQAGgCAFAAQAMAAAHAIQAGAHAAANIAAAtg");
	this.shape_902.setTransform(-237.3,-85.2);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgKQAKgLARAAQAFAAAHACQAHADADACIgHAKQgCgDgFgCIgKgBQgJAAgGAIQgHAGAAAMQAAANAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_903.setTransform(-244.5,-83.7);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_904.setTransform(-258.9,-83.7);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgDgDIgEAHIgHAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAJALQAKAKAAAPQAAASgKALQgJAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACADAAQALAAAHgGQAFgHAAgPQAAgMgGgGQgHgHgKAAIgHACg");
	this.shape_905.setTransform(-266.4,-85.2);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHAAQAFAAAGgCIABALQgIADgJAAQgIAAgGgHg");
	this.shape_906.setTransform(-280.3,-84.7);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgKALgPAAQgOAAgKgLgAgNgTQgFAHgBAMQAAAbATAAQAJAAAGgHQAEgIAAgMQAAgagTAAQgIAAgFAHg");
	this.shape_907.setTransform(-286.9,-83.7);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_908.setTransform(-294.5,-83.8);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAAAgWg");
	this.shape_909.setTransform(-307.2,-85.2);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgKIAXAAIAABHgAAAgkQgDgCAAgDQAAgEADgCQABgDADABQAEgBADADQABACAAAEQAAADgBACQgDACgEABQgDgBgBgCg");
	this.shape_910.setTransform(-315.8,-85.1);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#FFFFFF").s().p("AAVAmIgVgyIgVAyIgDAAIgahLIAOAAIAPAwIAUgwIACAAIAUAwIARgwIANAAIgaBLg");
	this.shape_911.setTransform(-322.8,-83.7);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgCgDgBgDQABgDACgDQACgCACgBQAEABADACQACADAAADQAAADgCADQgDACgEAAQgCAAgCgCg");
	this.shape_912.setTransform(209.7,-103.4);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_913.setTransform(191.4,-103.4);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgjQgDgDABgDQgBgDADgDQABgCAEgBQADABACACQACADABADQgBADgCADQgCACgDAAQgEAAgBgCg");
	this.shape_914.setTransform(185.6,-103.4);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAHAIAEIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_915.setTransform(180.9,-102);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_916.setTransform(174.3,-102.1);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#FFFFFF").s().p("AgNAzIAAg9IgKAAIAAgLIAKAAQAAgOAIgHQAGgJALABQAFAAAHABIgDAKIgIgBQgGAAgEAEQgDAEAAAIIAAADIAOAAIAAALIgOAAIAAA9g");
	this.shape_917.setTransform(159.4,-103.5);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#FFFFFF").s().p("AgMAzIAAg9IgLAAIAAgLIALAAQgBgOAIgHQAFgJAMABQAGAAAGABIgDAKIgIgBQgGAAgEAEQgDAEAAAIIAAADIAOAAIAAALIgOAAIAAA9g");
	this.shape_918.setTransform(154.3,-103.5);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_919.setTransform(147.6,-101.9);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAFAHAAQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_920.setTransform(141.1,-102.9);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAHAIAEIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_921.setTransform(135.4,-102);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAFAHAAQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_922.setTransform(109.9,-102.9);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#FFFFFF").s().p("AgKARQAKgJAAgIQAAgBgBgEQgGgDAAgEQAAgEADgCQADgDADAAQAEAAADADQADADgBAFQABAJgEAHQgEAGgLAKg");
	this.shape_923.setTransform(99.4,-98);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#FFFFFF").s().p("AAHANIgCgZIANAAIgCAZgAgPANIgBgZIAMAAIgCAZg");
	this.shape_924.setTransform(94.8,-107.1);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_925.setTransform(89.1,-100.8);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgCgDIgFAHIgHAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAJALQAKAKAAAPQAAASgKALQgJAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACACAAQANAAAFgGQAGgHAAgPQAAgMgHgGQgGgHgLAAIgGACg");
	this.shape_926.setTransform(74.6,-103.4);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#FFFFFF").s().p("AAGANIgBgZIAMAAIgCAZgAgPANIgCgZIANAAIgCAZg");
	this.shape_927.setTransform(68.2,-107.1);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAFAHAAQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_928.setTransform(43.2,-102.9);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAFAHAAQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_929.setTransform(19.8,-102.9);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAAAgWg");
	this.shape_930.setTransform(15.2,-103.4);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_931.setTransform(-3.1,-101.9);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgIALgQAAQgOAAgJgLgAgNgTQgGAHAAAMQABAbASAAQAJAAAFgHQAGgIAAgMQAAgbgUAAQgIABgFAHg");
	this.shape_932.setTransform(-10.7,-102);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#FFFFFF").s().p("AAVAmIgVgyIgVAyIgDAAIgahKIAOAAIAPAvIAUgvIADAAIATAvIASgvIAMAAIgaBKg");
	this.shape_933.setTransform(-31.4,-101.9);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFACQgFADgCAEIAAA1IgNAAIAAhlIANAAIAAAlQADgEAFgDQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_934.setTransform(-47.9,-103.5);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgDgDgFAAQgHAAgEAGQgFAGgBAJIAAApg");
	this.shape_935.setTransform(-58.7,-102.1);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAFAHAAQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_936.setTransform(-72.2,-102.9);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAFAHAAQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_937.setTransform(-77.8,-102.9);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOAAQAEAAAGACQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_938.setTransform(-84.3,-102);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_939.setTransform(-128.4,-99.2);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_940.setTransform(-138.7,-100.8);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOAAQAEAAAGACQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_941.setTransform(-146,-102);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgCgDIgGAHIgGAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAKALQAJAKAAAPQAAASgJALQgKAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACACAAQAMAAAHgGQAFgHAAgPQAAgMgHgGQgGgHgLAAIgGACg");
	this.shape_942.setTransform(-153.3,-103.4);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#FFFFFF").s().p("AAGANIgBgZIANAAIgDAZgAgPANIgBgZIAMAAIgCAZg");
	this.shape_943.setTransform(-159.6,-107.1);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOAAQAEAAAGACQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_944.setTransform(-170.4,-102);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgIALgQAAQgPAAgIgLgAgNgTQgGAHAAAMQABAbASAAQAJAAAFgHQAFgIABgMQgBgbgTAAQgIABgFAHg");
	this.shape_945.setTransform(-182.7,-102);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAFAHAAQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_946.setTransform(-189.1,-102.9);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_947.setTransform(-195.8,-102.1);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgLAAIAAgLIAWAAIAABIgAAAgjQgDgDAAgDQAAgDADgDQABgCADgBQAEABACACQACADAAADQAAADgCADQgCACgEAAQgDAAgBgCg");
	this.shape_948.setTransform(-201.7,-103.4);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_949.setTransform(-219.4,-100.8);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOAAQAEAAAGACQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_950.setTransform(-226.7,-102);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgEAAgFADQgEACgCAEIAAA1IgLAAIAAgzQAAgFgFgDQgEgDgGAAQgEAAgFADQgEADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAIgKALAAQAPAAAGAJQACgEAGgDQAGgCAGAAQALAAAHAGQAGAHAAAMIAAAwg");
	this.shape_951.setTransform(-236.1,-102.1);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgJAAIAAgLIAVAAIAABIgAAAgjQgDgDABgDQgBgDADgDQACgCADgBQADABACACQADADAAADQAAADgDADQgCACgDAAQgDAAgCgCg");
	this.shape_952.setTransform(-244.1,-103.4);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_953.setTransform(-259.9,-101.9);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_954.setTransform(-286.4,-100.8);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_955.setTransform(-293.8,-102.1);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgjQgCgDAAgDQAAgDACgDQACgCACgBQAEABACACQACADAAADQAAADgCADQgCACgEAAQgCAAgCgCg");
	this.shape_956.setTransform(-299.7,-103.4);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAFAHAAQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_957.setTransform(-304.2,-102.9);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAFAHAAQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_958.setTransform(-309.8,-102.9);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_959.setTransform(-316.4,-101.9);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAIgIAKAAQAPAAAIAKQAJAKAAATQAAAPgJALQgIALgQAAQgEAAgGgCQgGgCgBgCIAAAhgAgMglQgEABgCACIAAAqIAFAEIAIACQAYAAAAgbQgBgOgGgGQgFgHgMABIgHACg");
	this.shape_960.setTransform(-323.9,-100.6);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAFgEAAgGQAAgGgBgGIgGgOIgUgyIAOAAIAUA4IATg4IAOAAIggBVQgCAHgHAEQgIAFgKAAg");
	this.shape_961.setTransform(214.1,-118.8);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGAEADQADADAGAAIAAAMQgZAAAAgWg");
	this.shape_962.setTransform(208.8,-121.7);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAAMANgBQAJABAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_963.setTransform(198.7,-120.2);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgjQgDgDABgEQgBgDADgCQABgCAEgBQADABACACQACACABADQgBAEgCADQgCABgDAAQgEAAgBgBg");
	this.shape_964.setTransform(186,-121.6);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAAMANgBQAJABAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_965.setTransform(174.9,-120.2);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgCgDIgGAHIgGAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAKALQAJAKAAAPQAAASgJALQgKAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACACAAQAMAAAHgGQAFgHAAgPQAAgMgHgGQgGgHgLAAIgGACg");
	this.shape_966.setTransform(167.6,-121.7);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAHIAoAAIAAAAg");
	this.shape_967.setTransform(153,-120.2);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgEgDgEAAQgHAAgEAGQgGAGAAAJIAAApg");
	this.shape_968.setTransform(147.1,-120.3);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAAMANgBQAJABAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_969.setTransform(140.1,-120.2);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_970.setTransform(126,-120.2);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#FFFFFF").s().p("AgKARQAKgJAAgIQAAgCgBgCQgGgEAAgEQAAgEADgDQADgCADAAQAEAAADADQADADgBAFQAAAJgDAHQgEAHgLAJg");
	this.shape_971.setTransform(98.4,-116.3);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAHIAoAAIAAAAg");
	this.shape_972.setTransform(79.8,-120.2);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgIALgQAAQgPAAgIgLgAgNgTQgGAHAAAMQABAbASAAQAJABAFgIQAFgHABgNQgBgbgTAAQgIAAgFAIg");
	this.shape_973.setTransform(59.4,-120.2);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgEgDgEAAQgHAAgEAGQgGAGAAAJIAAApg");
	this.shape_974.setTransform(41.3,-120.3);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAAMANgBQAJABAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_975.setTransform(34.4,-120.2);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAGQgHAGgLAAQgMAAgKgGg");
	this.shape_976.setTransform(16.3,-120.2);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAAMANgBQAJABAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_977.setTransform(3.1,-120.2);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgKALgPAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJABAFgIQAGgHgBgNQABgbgUAAQgIAAgFAIg");
	this.shape_978.setTransform(-10.9,-120.2);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_979.setTransform(-24,-120.3);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgjQgDgDABgEQgBgDADgCQABgCAEgBQADABACACQACACABADQgBAEgCADQgCABgDAAQgEAAgBgBg");
	this.shape_980.setTransform(-30,-121.6);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgEgDgEAAQgHAAgEAGQgGAGAAAJIAAApg");
	this.shape_981.setTransform(-40.6,-120.3);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAHIAoAAIAAAAg");
	this.shape_982.setTransform(-47.6,-120.2);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAGQgHAGgLAAQgMAAgKgGg");
	this.shape_983.setTransform(-59.8,-120.2);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAAMANgBQAJABAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_984.setTransform(-66.3,-120.2);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgEgDgFAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_985.setTransform(-72.1,-120.3);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAAMANgBQAJABAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_986.setTransform(-85.7,-120.2);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAHIAoAAIAAAAg");
	this.shape_987.setTransform(-110.8,-120.2);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#FFFFFF").s().p("AgBAlIgfhJIAOAAIASAyIAUgyIANAAIggBJg");
	this.shape_988.setTransform(-118,-120.2);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_989.setTransform(-125.2,-120.3);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgJALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJABAGgIQAEgHAAgNQABgbgUAAQgIAAgFAIg");
	this.shape_990.setTransform(-132.8,-120.2);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_991.setTransform(-153.9,-120.2);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgIALgQAAQgOAAgJgLgAgNgTQgGAHAAAMQABAbASAAQAJABAFgIQAGgHAAgNQAAgbgUAAQgIAAgFAIg");
	this.shape_992.setTransform(-161.4,-120.2);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAFgEABgGQAAgGgCgGIgGgOIgTgyIAMAAIAVA4IAUg4IAMAAIgeBVQgDAHgHAEQgIAFgKAAg");
	this.shape_993.setTransform(-168.6,-118.8);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_994.setTransform(-182.5,-120.3);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAHIAoAAIAAAAg");
	this.shape_995.setTransform(-190.1,-120.2);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_996.setTransform(-222.8,-117.5);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_997.setTransform(-228.6,-119.1);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAAMANgBQAJABAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_998.setTransform(-235.9,-120.2);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAAMANgBQAJABAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_999.setTransform(-257.6,-120.2);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAGQgHAGgLAAQgMAAgKgGg");
	this.shape_1000.setTransform(-270.8,-120.2);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAAMANgBQAJABAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_1001.setTransform(-277.3,-120.2);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAHIAoAAIAAAAg");
	this.shape_1002.setTransform(-303.8,-120.2);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgCgDIgGAHIgGAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAJALQAKAKAAAPQAAASgKALQgJAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACACAAQANAAAFgGQAGgHAAgPQAAgMgHgGQgGgHgLAAIgGACg");
	this.shape_1003.setTransform(-316.4,-121.7);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgIALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJABAFgIQAGgHAAgNQAAgbgUAAQgIAAgFAIg");
	this.shape_1004.setTransform(-324.2,-120.2);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_1005.setTransform(214.9,-139.4);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgFgDgEAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_1006.setTransform(209.9,-138.6);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#FFFFFF").s().p("AAUAkQgEgDgCgFQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOgBQAEABAGACQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_1007.setTransform(203,-138.5);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgEAAgFADQgEACgCAEIAAA1IgLAAIAAgzQAAgFgFgDQgEgDgGAAQgEAAgFADQgEADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAIgKALAAQAPAAAGAJQACgEAGgDQAGgCAGAAQALAAAHAGQAGAHAAAMIAAAwg");
	this.shape_1008.setTransform(193.5,-138.6);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#FFFFFF").s().p("AAUAkQgEgDgCgFQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOgBQAEABAGACQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_1009.setTransform(172.3,-138.5);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#FFFFFF").s().p("AgNA0IAAg+IgKAAIAAgKIAKAAQAAgOAIgJQAGgHALgBQAFAAAHACIgDAKIgIgCQgGAAgEAFQgDAFAAAGIAAAFIAOAAIAAAKIgOAAIAAA+g");
	this.shape_1010.setTransform(160.3,-140);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#FFFFFF").s().p("AARA0IgWglIgMAMIAAAZIgNAAIAAhnIANAAIAAA/IAbggIAQAAIgYAaIAdAug");
	this.shape_1011.setTransform(140.8,-140);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_1012.setTransform(133.1,-138.6);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgDgCAAgEQAAgDADgCQABgDADAAQAEAAADADQABACAAADQAAAEgBACQgDACgEAAQgDAAgBgCg");
	this.shape_1013.setTransform(127.1,-139.9);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgIgEgFQgEgEgHAAQgEAAgFADQgFADgCADIAAA2IgNAAIAAhnIANAAIAAAmQADgEAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_1014.setTransform(121.5,-140);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_1015.setTransform(115,-139.4);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_1016.setTransform(102.3,-138.6);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#FFFFFF").s().p("AAUAkQgEgDgCgFQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOgBQAEABAGACQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_1017.setTransform(94.8,-138.5);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_1018.setTransform(74.4,-138.4);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJAAAGgIQAEgHAAgNQAAgagTAAQgIgBgFAIg");
	this.shape_1019.setTransform(66.9,-138.5);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#FFFFFF").s().p("AgKARQAKgKAAgGQAAgDgBgCQgGgEAAgFQAAgDADgDQADgCADAAQAEAAADADQACADAAAFQAAAJgDAGQgEAIgLAJg");
	this.shape_1020.setTransform(47.4,-134.5);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAGgEgBgGQAAgGgCgGIgFgOIgUgyIAOAAIAUA4IATg4IAOAAIggBVQgCAHgHAEQgIAFgKAAg");
	this.shape_1021.setTransform(43.4,-137.1);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAAAgWg");
	this.shape_1022.setTransform(38.1,-139.9);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgFAAgEADQgEACgCAEIAAA1IgLAAIAAgzQgBgFgDgDQgFgDgGAAQgEAAgFADQgEADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAHgKAMAAQAPAAAGAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_1023.setTransform(22.3,-138.6);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgJAAIAAgKIAWAAIAABIgAAAgkQgCgCgBgEQABgDACgCQACgDADAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_1024.setTransform(14.3,-139.9);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_1025.setTransform(-1.9,-139.4);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgLAAIAAgKIAWAAIAABIgAAAgkQgDgCAAgEQAAgDADgCQABgDADAAQAEAAACADQACACAAADQAAAEgCACQgCACgEAAQgDAAgBgCg");
	this.shape_1026.setTransform(-6.9,-139.9);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_1027.setTransform(-17.4,-139.4);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_1028.setTransform(-24.1,-138.4);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgHAKAAQAOAAAKAJQAIAKAAASQAAAQgIALQgKAKgPAAQgEAAgGgCQgGgBgBgCIAAAggAgLgmQgEACgDADIAAApIAFAEIAIABQAYABgBgbQABgOgHgGQgFgGgMgBIgGACg");
	this.shape_1029.setTransform(-31.5,-137.1);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgIAKgQAAQgPAAgIgKgAgNgTQgGAHAAAMQABAcASAAQAJAAAFgIQAFgHABgNQgBgagTAAQgIgBgFAIg");
	this.shape_1030.setTransform(-45.4,-138.5);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_1031.setTransform(-64,-135.7);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_1032.setTransform(-74.3,-139.4);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCgBgEQABgDACgCQACgDADAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_1033.setTransform(-79.3,-139.9);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGAEADQADADAGAAIAAAMQgZAAAAgWg");
	this.shape_1034.setTransform(-82.9,-139.9);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgCgCAAgEQAAgDACgCQACgDACAAQAEAAACADQACACAAADQAAAEgCACQgCACgEAAQgCAAgCgCg");
	this.shape_1035.setTransform(-87.3,-139.9);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgDgDIgEAHIgHAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAKALQAJAKAAAPQAAASgJALQgKAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACADAAQALAAAHgGQAFgHAAgPQAAgMgGgGQgHgHgKAAIgHACg");
	this.shape_1036.setTransform(-92.8,-139.9);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgCgCAAgEQAAgDACgCQACgDACAAQAEAAACADQACACAAADQAAAEgCACQgCACgEAAQgCAAgCgCg");
	this.shape_1037.setTransform(-99,-139.9);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_1038.setTransform(-111.6,-138.5);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAAAgWg");
	this.shape_1039.setTransform(-117.2,-139.9);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("#FFFFFF").s().p("AgNA0IAAg+IgKAAIAAgKIAKAAQAAgOAIgJQAGgHALgBQAFAAAHACIgDAKIgIgCQgGAAgEAFQgDAFAAAGIAAAFIAOAAIAAAKIgOAAIAAA+g");
	this.shape_1040.setTransform(-121.8,-140);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#FFFFFF").s().p("AgMA0IAAg+IgLAAIAAgKIALAAQAAgOAGgJQAHgHALgBQAFAAAHACIgEAKIgHgCQgGAAgEAFQgDAFAAAGIAAAFIAPAAIAAAKIgPAAIAAA+g");
	this.shape_1041.setTransform(-133,-140);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_1042.setTransform(-152.1,-139.4);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_1043.setTransform(-158.8,-138.6);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_1044.setTransform(-166.4,-138.4);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgEAAgFADQgEACgCAEIAAA1IgLAAIAAgzQAAgFgFgDQgEgDgGAAQgEAAgFADQgEADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAIgKALAAQAPAAAGAJQACgEAGgDQAGgCAGAAQALAAAHAGQAGAHAAAMIAAAwg");
	this.shape_1045.setTransform(-183.5,-138.6);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("#FFFFFF").s().p("AAUAkQgEgDgCgFQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOgBQAEABAGACQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_1046.setTransform(-193,-138.5);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_1047.setTransform(-206.1,-137.3);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_1048.setTransform(-213.5,-138.6);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgDgCABgEQgBgDADgCQABgDAEAAQADAAACADQACACABADQgBAEgCACQgCACgDAAQgEAAgBgCg");
	this.shape_1049.setTransform(-219.4,-139.9);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f("#FFFFFF").s().p("AgeAlIAAgEIAqg5IgpAAIAAgLIA8AAIAAADIgoA5IAoAAIAAAMg");
	this.shape_1050.setTransform(-224.5,-138.5);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#FFFFFF").s().p("AAUAkQgEgDgCgFQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOgBQAEABAGACQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_1051.setTransform(-231.5,-138.5);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgFAAgEADQgEACgCAEIAAA1IgMAAIAAgzQAAgFgDgDQgFgDgGAAQgEAAgFADQgEADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAHgKAMAAQAPAAAGAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_1052.setTransform(-241,-138.6);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#FFFFFF").s().p("AAUAkQgEgDgCgFQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOgBQAEABAGACQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_1053.setTransform(-250.5,-138.5);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_1054.setTransform(-264,-138.6);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#FFFFFF").s().p("AAUAkQgEgDgCgFQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOgBQAEABAGACQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_1055.setTransform(-271.5,-138.5);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_1056.setTransform(-285,-138.5);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_1057.setTransform(-292.9,-139.9);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgDgCAAgEQAAgDADgCQABgDADAAQAEAAADADQABACAAADQAAAEgBACQgDACgEAAQgDAAgBgCg");
	this.shape_1058.setTransform(-298.7,-139.9);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#FFFFFF").s().p("AgBAlIgfhKIAOAAIASAzIAUgzIANAAIggBKg");
	this.shape_1059.setTransform(-303.9,-138.4);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAFgIQAGgHgBgNQABgagUAAQgIgBgFAIg");
	this.shape_1060.setTransform(-311.1,-138.5);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgDgDgFAAQgHAAgEAGQgGAGAAAJIAAApg");
	this.shape_1061.setTransform(-317,-138.6);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgHAKAAQAPAAAIAJQAJAKAAASQAAAQgJALQgIAKgQAAQgEAAgGgCQgGgBgBgCIAAAggAgMgmQgEACgCADIAAApIAFAEIAIABQAYABAAgbQgBgOgGgGQgFgGgMgBIgHACg");
	this.shape_1062.setTransform(-323.9,-137.1);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_1063.setTransform(213.8,-158.2);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_1064.setTransform(206.3,-156.8);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgIAOAAQAEAAAGACQAAgSgPAAQgMAAgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_1065.setTransform(198.8,-156.7);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAFgEAAgGQAAgGgBgGIgGgOIgUgyIAOAAIAUA4IATg4IAOAAIggBVQgCAHgHAEQgIAFgKAAg");
	this.shape_1066.setTransform(184.4,-155.3);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAjQAAAKACAEQADADAHAAQAFAAAGgCIABALQgIACgJABQgIAAgGgHg");
	this.shape_1067.setTransform(178.2,-157.7);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgCgCAAgDQAAgDACgDQACgCACAAQAEAAACACQACADAAADQAAADgCACQgCACgEAAQgCAAgCgCg");
	this.shape_1068.setTransform(173.2,-158.1);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAABgWg");
	this.shape_1069.setTransform(169.6,-158.2);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgIAOAAQAEAAAGACQAAgSgPAAQgMAAgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_1070.setTransform(163.6,-156.7);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_1071.setTransform(156.2,-156.7);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f("#FFFFFF").s().p("AATA0IAAghQgGAFgNABQgOAAgIgLQgJgJAAgSQAAgRAKgLQAKgKAOAAQAJAAAJAIIADgGIAIAAIAABlgAgLggQgGAHAAAMQAAANAGAHQAGAGAKAAQAJAAAFgEIAAgrQgGgGgIAAQgKAAgGAIg");
	this.shape_1072.setTransform(148.3,-155.4);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_1073.setTransform(133.8,-155.6);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_1074.setTransform(126.5,-156.8);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCAAgDQAAgDACgDQACgCADAAQADAAADACQACADAAADQAAADgCACQgDACgDAAQgDAAgCgCg");
	this.shape_1075.setTransform(120.5,-158.1);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgGQgJgEgDgBIgGgFIgDgGIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAEQAIAEAEAEQAEAGAAAHQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_1076.setTransform(115.9,-156.7);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGAEADQADADAGAAIAAAMQgYAAAAgWg");
	this.shape_1077.setTransform(103.8,-158.2);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAjQAAAKACAEQADADAHAAQAFAAAGgCIABALQgIACgJABQgIAAgGgHg");
	this.shape_1078.setTransform(91.4,-157.7);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_1079.setTransform(84.8,-156.7);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJgBAGgHQAEgHAAgNQAAgagTAAQgIAAgFAHg");
	this.shape_1080.setTransform(77.2,-156.7);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAjQAAAKACAEQADADAHAAQAFAAAGgCIABALQgIACgJABQgIAAgGgHg");
	this.shape_1081.setTransform(63.2,-157.7);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCgBgDQABgDACgDQABgCADAAQAEAAADACQABADAAADQAAADgBACQgDACgEAAQgDAAgBgCg");
	this.shape_1082.setTransform(58.2,-158.1);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#FFFFFF").s().p("AAVAmIgVgyIgVAyIgDAAIgahLIAOAAIAPAwIAUgwIACAAIAUAwIARgwIANAAIgaBLg");
	this.shape_1083.setTransform(51.2,-156.7);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgGQgJgEgDgBIgGgFIgDgGIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAEQAIAEAEAEQAEAGAAAHQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_1084.setTransform(35.8,-156.7);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgRQAAgSALgKQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_1085.setTransform(29.2,-156.7);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_1086.setTransform(21.9,-155.6);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_1087.setTransform(14.6,-156.8);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgIAOAAQAEAAAGACQAAgSgPAAQgMAAgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_1088.setTransform(7.1,-156.7);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_1089.setTransform(-22.5,-158.2);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgRQAAgSALgKQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_1090.setTransform(-30,-156.7);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAjQAAAKACAEQADADAHAAQAFAAAGgCIABALQgIACgJABQgIAAgGgHg");
	this.shape_1091.setTransform(-36.5,-157.7);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgFAAgEADQgEACgBAEIAAA1IgNAAIAAgzQAAgFgDgDQgFgDgGAAQgEAAgEADQgFADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAIgKALAAQAQAAAFAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_1092.setTransform(-49.1,-156.8);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCgBgDQABgDACgDQABgCADAAQAEAAADACQABADAAADQAAADgBACQgDACgEAAQgDAAgBgCg");
	this.shape_1093.setTransform(-57,-158.1);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAAAgWg");
	this.shape_1094.setTransform(-60.6,-158.2);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_1095.setTransform(-66.7,-156.8);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_1096.setTransform(-74.3,-156.7);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgRQAAgSALgKQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_1097.setTransform(-89.3,-156.7);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f("#FFFFFF").s().p("AARA0IgWglIgMALIAAAaIgNAAIAAhnIANAAIAABAIAbghIAQAAIgYAaIAdAug");
	this.shape_1098.setTransform(-96.2,-158.2);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgIAOAAQAEAAAGACQAAgSgPAAQgMAAgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_1099.setTransform(-103.8,-156.7);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgEAAgFADQgEACgCAEIAAA1IgLAAIAAgzQAAgFgFgDQgEgDgGAAQgEAAgFADQgEADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAIgKALAAQAPAAAGAJQACgEAGgDQAGgCAGAAQALAAAHAGQAGAHAAAMIAAAwg");
	this.shape_1100.setTransform(-113.3,-156.8);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJgBAFgHQAGgHgBgNQABgagUAAQgIAAgFAHg");
	this.shape_1101.setTransform(-130.2,-156.7);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAjQAAAKACAEQADADAHAAQAFAAAGgCIABALQgIACgJABQgIAAgGgHg");
	this.shape_1102.setTransform(-136.6,-157.7);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_1103.setTransform(-150.6,-156.7);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgIAKgQAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJgBAFgHQAGgHAAgNQAAgagUAAQgIAAgFAHg");
	this.shape_1104.setTransform(-158.2,-156.7);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgRQAAgSALgKQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_1105.setTransform(-180,-156.7);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGAEADQADADAGAAIAAAMQgYAAAAgWg");
	this.shape_1106.setTransform(-185.6,-158.2);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgCgDIgGAHIgGAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAKALQAJAKAAAPQAAASgJALQgKAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACACAAQAMAAAHgGQAFgHAAgPQAAgMgHgGQgGgHgLAAIgGACg");
	this.shape_1107.setTransform(-191.5,-158.2);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgIAOAAQAEAAAGACQAAgSgPAAQgMAAgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_1108.setTransform(-199.3,-156.7);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_1109.setTransform(-206.8,-156.8);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgRQAAgSALgKQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_1110.setTransform(-214.4,-156.7);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgGQgJgEgDgBIgGgFIgDgGIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAEQAIAEAEAEQAEAGAAAHQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_1111.setTransform(-228.4,-156.7);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAjQAAAKACAEQADADAHAAQAFAAAGgCIABALQgIACgJABQgIAAgGgHg");
	this.shape_1112.setTransform(-233.9,-157.7);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgRQAAgSALgKQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_1113.setTransform(-247.4,-156.7);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f("#FFFFFF").s().p("AgRA1QANAAAEgEQAFgEAAgJIAAg9IgNAAIAAgLIAaAAIAABIQAAAPgJAHQgIAHgSAAgAAEgyQgCgCAAgEQAAgDACgCQADgDADAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgDAAgDgCg");
	this.shape_1114.setTransform(-254.4,-156.7);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAjQAAAKACAEQADADAHAAQAFAAAGgCIABALQgIACgJABQgIAAgGgHg");
	this.shape_1115.setTransform(-281.6,-157.7);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgEgDgEAAQgHAAgEAGQgGAGAAAJIAAApg");
	this.shape_1116.setTransform(-286.6,-156.8);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgIAOAAQAEAAAGACQAAgSgPAAQgMAAgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_1117.setTransform(-293.6,-156.7);

	this.instance_11 = new lib.ScreenShot20190501at104408PM();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-84,-163,0.808,0.808);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f("#FFFFFF").s().p("AgZAmQgLgOABgYQgBgVAMgPQAMgPATAAQAQAAAJAGIgFALQgGgEgOAAQgMAAgIALQgIALAAARQAAARAIALQAIALAMAAQAOAAAIgKIAHAKQgMAMgSAAQgTAAgMgOg");
	this.shape_1118.setTransform(-267.3,-121.6);

	this.instance_12 = new lib.ScreenShot20190502at75243PM();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-8,-99,0.385,0.385);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgJALgPAAQgPAAgIgLgAgNgTQgFAHgBAMQAAAbATAAQAJABAFgIQAFgHABgNQgBgbgTAAQgIAAgFAIg");
	this.shape_1119.setTransform(-120.2,-120.2);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgJALgPAAQgPAAgIgLgAgNgTQgFAHgBAMQAAAbATAAQAJABAFgIQAFgHABgNQgBgbgTAAQgIAAgFAIg");
	this.shape_1120.setTransform(-163,-120.2);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhmIANAAIAAAmQADgDAFgEQAGgCAFAAQAMAAAHAHQAGAIAAAMIAAAug");
	this.shape_1121.setTransform(-170.5,-121.7);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgKALgPAAQgOAAgKgLgAgNgTQgFAHgBAMQAAAbATAAQAJABAGgIQAEgHAAgNQAAgbgTAAQgIAAgFAIg");
	this.shape_1122.setTransform(-210.9,-120.2);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#FFFFFF").s().p("AARAzIgWgkIgMAMIAAAYIgNAAIAAhmIANAAIAAA/IAbghIAQAAIgYAbIAdAtg");
	this.shape_1123.setTransform(-230.1,-121.7);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgKALgPAAQgOAAgKgLgAgNgTQgFAHgBAMQAAAbATAAQAJABAGgIQAEgHAAgNQAAgbgTAAQgIAAgFAIg");
	this.shape_1124.setTransform(-277,-120.2);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#FFFFFF").s().p("AAWAlIgWgwIgVAwIgDAAIgahJIAOAAIAPAuIAUguIADAAIAUAuIARguIAMAAIgaBJg");
	this.shape_1125.setTransform(-297.1,-120.2);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgJALgQAAQgPAAgJgLgAgNgTQgGAHABAMQAAAbASAAQAJABAGgIQAEgHAAgNQABgbgUAAQgIAAgFAIg");
	this.shape_1126.setTransform(-306,-120.2);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgHALAAQAOAAAJAJQAJAKAAASQAAAQgJALQgJAKgPAAQgFAAgFgCQgGgBgBgCIAAAggAgMgmQgDACgDADIAAApIAFAEIAIABQAYABAAgbQgBgOgFgGQgGgGgMgBIgHACg");
	this.shape_1127.setTransform(-116.5,-137.1);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f("#FFFFFF").s().p("AAAAzIgXhBIgMA/IgMAAIAShjIAGAAIAXBIIAWhIIAGAAIAUBjIgMAAIgMg/IgWBBg");
	this.shape_1128.setTransform(-146.7,-139.8);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAGgEgBgGQAAgGgBgGIgGgOIgUgyIAOAAIAUA4IATg4IAOAAIggBVQgCAHgHAEQgIAFgKAAg");
	this.shape_1129.setTransform(35.1,-155.3);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgIAKgQAAQgOAAgJgKgAgNgTQgGAHAAAMQABAcASAAQAJgBAFgHQAGgHAAgNQAAgagUAAQgIAAgFAHg");
	this.shape_1130.setTransform(-138.9,-156.7);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgJAKgQAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJgBAGgHQAEgHAAgNQABgagUAAQgIAAgFAHg");
	this.shape_1131.setTransform(-219.6,-156.7);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f("#FFFFFF").s().p("AAVAmIgVgyIgUAyIgEAAIgahLIAOAAIAQAwIATgwIACAAIAUAwIARgwIANAAIgaBLg");
	this.shape_1132.setTransform(-261.4,-156.7);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#FFFFFF").s().p("AAZAzIgGgVIgkAAIgIAVIgPAAIAohlIADAAIAmBlgAAPAUIgOgsIgPAsIAdAAg");
	this.shape_1133.setTransform(-315.3,-158.2);

	this.instance_13 = new lib.ScreenShot20190502at81327PM();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-25,-92,0.553,0.553);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f("#FFFFFF").s().p("AgNAzIAAg9IgKAAIAAgLIAKAAQAAgOAHgHQAHgIALAAQAFAAAHACIgEAJIgHgBQgGgBgEAFQgDAEAAAIIAAADIAOAAIAAALIgOAAIAAA9g");
	this.shape_1134.setTransform(-87.1,-124.7);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgKALgPAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJAAAFgHQAGgIgBgMQABgbgUAAQgIABgFAHg");
	this.shape_1135.setTransform(-219.7,-123.2);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f("#FFFFFF").s().p("AgZArQgJgJAAgPIAAhFIAOAAIAABEQgBAJAGAGQAGAGAJAAQAJAAAHgGQAFgGAAgKIAAhDIAOAAIAABFQAAAPgJAIQgKAJgQAAQgQAAgJgIg");
	this.shape_1136.setTransform(-314.1,-124.5);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgJALgQAAQgPAAgJgLgAgNgTQgGAHABAMQAAAbASAAQAJABAGgIQAEgIAAgMQABgbgUAAQgIAAgFAIg");
	this.shape_1137.setTransform(-319.1,-141.5);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f("#FFFFFF").s().p("AgNAzIAAg9IgKAAIAAgLIAKAAQAAgOAHgHQAHgJALABQAFAAAHABIgEAKIgHgCQgGABgEAEQgDAEAAAIIAAADIAOAAIAAALIgOAAIAAA9g");
	this.shape_1138.setTransform(-325.1,-143);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgHAKAAQAOAAAKAJQAIAKAAASQAAAQgIALQgKAKgPAAQgEAAgGgCQgGgBgBgCIAAAggAgLgmQgEACgDADIAAApIAFAEIAIABQAYAAgBgaQABgOgHgGQgFgGgMgBIgGACg");
	this.shape_1139.setTransform(172.3,-158.4);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgHALAAQAOAAAJAJQAJAKAAASQAAAQgJALQgJAKgPAAQgFAAgFgCQgGgBgBgCIAAAggAgMgmQgDACgDADIAAApIAFAEIAIABQAYAAAAgaQgBgOgFgGQgGgGgMgBIgHACg");
	this.shape_1140.setTransform(153.5,-158.4);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAKQgKAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJAAAGgIQAEgHAAgNQAAgbgTAAQgIAAgFAIg");
	this.shape_1141.setTransform(145.6,-159.7);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAKQgIAKgQAAQgOAAgJgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAFgIQAGgHAAgNQAAgbgUAAQgIAAgFAIg");
	this.shape_1142.setTransform(124.9,-159.7);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgHAKAAQAPAAAJAJQAIAKAAASQAAAQgIALQgJAKgQAAQgEAAgGgCQgFgBgCgCIAAAggAgLgmQgEACgDADIAAApIAGAEIAHABQAYAAgBgaQABgOgHgGQgFgGgMgBIgGACg");
	this.shape_1143.setTransform(96.8,-158.4);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAKQgKAKgPAAQgPAAgJgKgAgNgTQgFAHAAAMQgBAcATAAQAJAAAGgIQAEgHAAgNQAAgbgTAAQgIAAgFAIg");
	this.shape_1144.setTransform(69.4,-159.7);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAKQgIAKgQAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAFgIQAGgHAAgNQAAgbgUAAQgIAAgFAIg");
	this.shape_1145.setTransform(48.4,-159.7);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f("#FFFFFF").s().p("AAQA0IAAgvQAAgHgEgFQgEgEgHAAQgEAAgFADQgFADgCADIAAA2IgNAAIAAhnIANAAIAAAmQADgDAFgDQAGgDAFAAQAMAAAHAHQAGAIAAAMIAAAvg");
	this.shape_1146.setTransform(9.5,-161.2);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFAAAGgCIABALQgIACgJAAQgIAAgGgGg");
	this.shape_1147.setTransform(-73.6,-160.7);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgHALAAQAPAAAIAJQAJAKAAASQAAAQgJALQgIAKgQAAQgFAAgFgCQgFgBgCgCIAAAggAgMgmQgEACgCADIAAApIAFAEIAIABQAXAAABgaQAAgOgHgGQgFgGgMgBIgHACg");
	this.shape_1148.setTransform(-106.3,-158.4);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#FFFFFF").s().p("AAQA0IAAgvQAAgHgEgFQgEgEgHAAQgEAAgFADQgFADgCADIAAA2IgNAAIAAhnIANAAIAAAmQADgDAFgDQAGgDAFAAQAMAAAHAHQAGAIAAAMIAAAvg");
	this.shape_1149.setTransform(-138.6,-161.2);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgFQgJgDgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAEQAIAEAEAEQAEAFAAAIQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_1150.setTransform(-178.2,-159.7);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#FFFFFF").s().p("AgbArIAFgLQAJAHAJAAQASAAAAgYQAAgVgSAAQgJAAgHAGIgFgBIAAgxIAxAAIAAAMIgkAAIAAAYQAFgEAHAAQAOAAAHAJQAHAIAAAOQAAAmggAAQgOAAgJgIg");
	this.shape_1151.setTransform(-233.4,-161);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f("#FFFFFF").s().p("AAEAyIAAhMIgUANIAAgNQAIgDAIgHQAJgHAEgGIAEAAIAABjg");
	this.shape_1152.setTransform(-241.4,-161.1);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#FFFFFF").s().p("AAUAjQgEgBgCgGQgIAKgPAAQgJAAgGgHQgGgGAAgJQAAgLAJgHQAKgHAOgBQAEAAAGADQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgDgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_1153.setTransform(-267,-159.7);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAKQgIAKgQAAQgOAAgJgKgAgNgTQgGAHAAAMQABAcASAAQAJAAAFgIQAGgHAAgNQAAgbgUAAQgIAAgFAIg");
	this.shape_1154.setTransform(-274.4,-159.7);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#FFFFFF").s().p("AAWAlIgWgwIgUAwIgEAAIgahJIAOAAIAQAuIATguIACAAIAVAuIAQguIANAAIgaBJg");
	this.shape_1155.setTransform(-295,-159.7);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAKQgIAKgQAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAFgIQAGgHAAgNQAAgbgUAAQgIAAgFAIg");
	this.shape_1156.setTransform(-304,-159.7);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#FFFFFF").s().p("AgiAzIAAhkIAYgBQAUAAAMAOQANAMAAAWQAAA1gxAAgAgVgkIAABJIAMABQANAAAIgLQAJgLAAgRQAAgkggAAg");
	this.shape_1157.setTransform(-311.7,-161.1);

	this.instance_14 = new lib.ScreenShot20190502at84330PM();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-211,-27,1.193,1.193);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgCgDgBgEQABgDACgCQACgCADgBQADABADACQACACAAADQAAAEgCADQgDABgDAAQgDAAgCgBg");
	this.shape_1158.setTransform(-117.5,-69.9);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgIALABQAOAAAKAJQAIAKAAATQAAAPgIALQgJAKgQAAQgEAAgGgBQgFgCgCgCIAAAggAgLgmQgFACgCADIAAApIAGAEIAHACQAYgBgBgaQAAgOgFgGQgGgGgMAAIgGABg");
	this.shape_1159.setTransform(-130.3,-67.1);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f("#FFFFFF").s().p("AARAzIgWgkIgMAMIAAAYIgNAAIAAhmIANAAIAAA/IAbghIAQAAIgYAbIAdAtg");
	this.shape_1160.setTransform(-282.4,-70);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAFgIQAGgHAAgNQAAgagUAAQgIgBgFAIg");
	this.shape_1161.setTransform(139.4,-86.7);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJAAAGgIQAEgHABgNQgBgagTAAQgIgBgFAIg");
	this.shape_1162.setTransform(106.6,-86.7);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgHAKAAQAPAAAIAJQAJAKAAASQAAAQgJALQgIAKgQAAQgEAAgGgCQgGgBgBgCIAAAggAgMgmQgEACgCADIAAApIAFAEIAIABQAXABABgbQAAgOgHgGQgFgGgMgBIgHACg");
	this.shape_1163.setTransform(91.6,-85.4);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f("#FFFFFF").s().p("AAVAlIgVgwIgUAwIgEAAIgahKIAOAAIAQAvIATgvIACAAIAUAvIARgvIANAAIgaBKg");
	this.shape_1164.setTransform(-53.1,-86.7);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgIAKgQAAQgOAAgJgKgAgNgTQgGAHAAAMQABAcASAAQAJAAAFgIQAGgHAAgNQAAgagUAAQgIgBgFAIg");
	this.shape_1165.setTransform(-116.9,-86.7);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f("#FFFFFF").s().p("AgLARQALgKAAgGQAAgDgBgCQgGgEAAgFQAAgDADgDQADgCADAAQAEAAADADQACADABAFQgBAJgDAGQgEAIgLAJg");
	this.shape_1166.setTransform(-201.6,-82.8);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgFgDgEAAQgHAAgEAGQgFAGAAAJIAAApg");
	this.shape_1167.setTransform(-235.8,-86.8);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgOAAgKgKgAgNgTQgFAHgBAMQAAAcATAAQAJAAAGgIQAEgHAAgNQAAgagTAAQgIgBgFAIg");
	this.shape_1168.setTransform(-242.8,-86.7);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAFgIQAGgHgBgNQABgagUAAQgIgBgFAIg");
	this.shape_1169.setTransform(-302.5,-86.7);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f("#FFFFFF").s().p("AAAAzIgXhBIgLA/IgOAAIAThjIAGAAIAXBIIAWhIIAHAAIATBjIgMAAIgMg/IgWBBg");
	this.shape_1170.setTransform(-311.2,-88);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJgBAFgHQAGgHAAgNQAAgagUAAQgIAAgFAHg");
	this.shape_1171.setTransform(168.6,-105);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAHgHALgBQAOAAAKAKQAIAKAAASQAAAQgIALQgJALgQAAQgEgBgGgCQgFgBgCgCIAAAhgAgLglQgFABgCACIAAAqIAGAEIAHABQAYAAgBgaQAAgOgFgGQgGgHgMAAIgGADg");
	this.shape_1172.setTransform(153.6,-103.6);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f("#FFFFFF").s().p("AgMA0IAAg+IgLAAIAAgKIALAAQAAgOAGgJQAHgHALgBQAFABAHACIgEAJIgHgBQgGgBgEAFQgDAFAAAGIAAAFIAPAAIAAAKIgPAAIAAA+g");
	this.shape_1173.setTransform(118.1,-106.5);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJgBAFgHQAGgHAAgNQAAgagUAAQgIAAgFAHg");
	this.shape_1174.setTransform(111.5,-105);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgLAAIAAgKIAWAAIAABIgAAAgkQgDgCAAgDQAAgDADgDQABgCADAAQAEAAACACQACADAAADQAAADgCACQgCACgEAAQgDAAgBgCg");
	this.shape_1175.setTransform(86.3,-106.4);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f("#FFFFFF").s().p("AgKARQAKgKAAgGQAAgCgBgEQgGgCAAgGQAAgDADgCQADgDADAAQAEAAADAEQADADgBAEQAAAJgDAGQgEAIgLAJg");
	this.shape_1176.setTransform(6.2,-101);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f("#FFFFFF").s().p("AAWAmIgWgyIgUAyIgEAAIgahLIAOAAIAQAwIATgwIACAAIAVAwIARgwIAMAAIgaBLg");
	this.shape_1177.setTransform(-78.9,-104.9);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f("#FFFFFF").s().p("AgGAyIAAgtIggg2IAOAAIAYArIAZgrIAOAAIggA2IAAAtg");
	this.shape_1178.setTransform(-314.9,-106.3);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f("#FFFFFF").s().p("AgeAyIAAhjIA9AAIAAAMIgvAAIAAAcIAiAAIAAAKIgiAAIAAAxg");
	this.shape_1179.setTransform(-293.8,-124.6);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f("#FFFFFF").s().p("AAUAyIgagrIgPAAIAAArIgNAAIAAhjIAKAAIAPAAQAjgBAAAdQAAAJgGAIQgGAHgIABIAdAugAgVglIAAAhIAKABQALAAAGgEQAFgEAAgKQAAgJgGgDQgFgEgNAAg");
	this.shape_1180.setTransform(-323.4,-124.6);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f("#FFFFFF").s().p("AgZAmQgLgOABgYQgBgVAMgPQAMgPATAAQAQAAAJAGIgEALQgHgEgOAAQgMAAgIALQgIALAAARQAAARAIALQAIALAMAAQAOAAAIgKIAIAKQgMAMgUAAQgSAAgMgOg");
	this.shape_1181.setTransform(174.5,-142.9);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f("#FFFFFF").s().p("AgYARIAmgRIgmgQIAAgMIAxAYIAAAIIgxAZg");
	this.shape_1182.setTransform(160.6,-142.2);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f("#FFFFFF").s().p("AgeAyIAAhjIA9AAIAAAMIgvAAIAAAcIAiAAIAAAKIgiAAIAAAxg");
	this.shape_1183.setTransform(116.3,-142.8);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgJALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJABAGgIQAEgIAAgMQABgbgUAAQgIAAgFAIg");
	this.shape_1184.setTransform(94.9,-141.5);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgLAAIAAgLIAWAAIAABIgAAAgjQgDgDAAgEQAAgCADgDQABgCADgBQAEABACACQACADAAACQAAAEgCADQgCACgEAAQgDAAgBgCg");
	this.shape_1185.setTransform(69.2,-142.9);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgDgDAAgEQAAgCADgDQABgCADgBQAEABADACQABADAAACQAAAEgBADQgDACgEAAQgDAAgBgCg");
	this.shape_1186.setTransform(9.7,-142.9);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgCgDgBgEQABgCACgDQACgCACgBQAEABADACQACADAAACQAAAEgCADQgDACgEAAQgCAAgCgCg");
	this.shape_1187.setTransform(-62.1,-142.9);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgLAAIAAgLIAWAAIAABIgAAAgjQgDgDAAgEQAAgCADgDQABgCADgBQAEABACACQACADAAACQAAAEgCADQgCACgEAAQgDAAgBgCg");
	this.shape_1188.setTransform(-73,-142.9);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgFgDgEAAQgHAAgEAGQgFAGAAAJIAAApg");
	this.shape_1189.setTransform(-77,-141.6);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f("#FFFFFF").s().p("AgMAzIAAg9IgLAAIAAgLIALAAQgBgOAIgHQAFgJAMABQAGAAAGABIgDAKIgIgCQgGABgEAEQgDAEAAAIIAAADIAOAAIAAALIgOAAIAAA9g");
	this.shape_1190.setTransform(-129.2,-143);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f("#FFFFFF").s().p("AgMAzIAAg9IgLAAIAAgLIALAAQgBgOAIgHQAFgJAMABQAGAAAGABIgDAKIgIgCQgGABgEAEQgDAEAAAIIAAADIAOAAIAAALIgOAAIAAA9g");
	this.shape_1191.setTransform(-163.4,-143);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgIAKABQAPgBAIAKQAJAKAAATQAAAPgJALQgIAKgQAAQgEAAgGgBQgGgCgBgCIAAAggAgMgmQgEACgCACIAAAqIAFAEIAIACQAYgBAAgaQgBgOgGgGQgFgGgMAAIgHABg");
	this.shape_1192.setTransform(-175.8,-140.1);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgJALgPAAQgPAAgIgLgAgNgTQgFAHgBAMQAAAbATAAQAJABAFgIQAFgIABgMQgBgbgTAAQgIAAgFAIg");
	this.shape_1193.setTransform(-183.7,-141.5);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgKALgPAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJABAFgIQAGgIgBgMQABgbgUAAQgIAAgFAIg");
	this.shape_1194.setTransform(-217.5,-141.5);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgIALABQAOgBAKAKQAIAKAAATQAAAPgIALQgJAKgQAAQgEAAgGgBQgFgCgCgCIAAAggAgLgmQgFACgCACIAAAqIAGAEIAHACQAYgBgBgaQAAgOgFgGQgGgGgMAAIgGABg");
	this.shape_1195.setTransform(-232.5,-140.1);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgDgDAAgEQAAgCADgDQABgCADgBQAEABADACQABADAAACQAAAEgBADQgDACgEAAQgDAAgBgCg");
	this.shape_1196.setTransform(-278.9,-142.9);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f("#FFFFFF").s().p("AgLARQALgJAAgIQAAgBgBgDQgGgEAAgEQAAgEADgDQADgCADAAQAEAAADADQACADABAFQgBAJgDAHQgEAGgLAKg");
	this.shape_1197.setTransform(-289.3,-137.5);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgKALgPAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJABAFgIQAGgIgBgMQABgbgUAAQgIAAgFAIg");
	this.shape_1198.setTransform(-304.3,-141.5);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f("#FFFFFF").s().p("AARA0IgWglIgMAMIAAAZIgNAAIAAhnIANAAIAAA/IAbghIAQAAIgYAbIAdAug");
	this.shape_1199.setTransform(-245.6,-161.2);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgLQAKgKARAAQAFAAAHADQAHABADADIgHAJIgHgDIgKgCQgJAAgGAHQgHAIAAAMQAAANAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_1200.setTransform(-253,-159.7);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgLIAVAAIAABJgAAAgjQgDgDABgEQgBgDADgCQABgDAEAAQADAAACADQACACABADQgBAEgCADQgCABgDAAQgEAAgBgBg");
	this.shape_1201.setTransform(-258.6,-161.1);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgLQAKgKARAAQAFAAAHADQAHABADADIgHAJIgHgDIgKgCQgJAAgGAHQgHAIAAAMQAAANAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_1202.setTransform(-267.9,-159.7);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgDgDIgEAHIgHAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAJALQAKAKAAAPQAAASgKALQgJAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACACAAQANAAAFgGQAGgHAAgPQAAgMgHgGQgGgHgLAAIgGACg");
	this.shape_1203.setTransform(-290.9,-161.2);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f("#FFFFFF").s().p("AgiAzIAAhkIAZgBQAUAAALAOQANAMAAAWQAAA1gxAAgAgUgkIAABJIALABQANAAAIgLQAJgLgBgRQAAgkgeAAg");
	this.shape_1204.setTransform(-314.1,-161.1);

	this.instance_15 = new lib.ScreenShot20190502at84743PM();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-14,-96,0.377,0.377);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgIAKgQAAQgOAAgJgKgAgNgTQgGAHAAAMQABAcASAAQAJgBAFgHQAGgHAAgNQAAgagUAAQgIAAgFAHg");
	this.shape_1205.setTransform(-234.3,-105);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f("#FFFFFF").s().p("AgGAyIAAhXIghAAIAAgMIBOAAIAAAMIghAAIAABXg");
	this.shape_1206.setTransform(-314.9,-106.3);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgFAAgEADQgEACgCAEIAAA1IgLAAIAAgzQAAgFgEgDQgFgDgGAAQgEAAgFADQgEADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAHgKAMAAQAPAAAGAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_1207.setTransform(71.3,-123.3);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAIgIAKAAQAOAAAKAKQAIAKAAATQAAAPgIALQgKALgPAAQgEAAgGgCQgGgCgBgCIAAAhgAgLglQgEABgDACIAAAqIAFAEIAIACQAYAAgBgbQABgOgHgGQgFgHgMABIgGACg");
	this.shape_1208.setTransform(-230.9,-121.9);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f("#FFFFFF").s().p("AgEANIgBgZIALAAIgCAZg");
	this.shape_1209.setTransform(61.4,-146.6);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f("#FFFFFF").s().p("AgLARQALgJAAgIQAAgBgBgDQgGgEAAgEQAAgEADgDQADgCADAAQAEAAADADQADADAAAFQAAAJgEAHQgEAGgLAKg");
	this.shape_1210.setTransform(31.3,-137.5);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgJALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJABAGgIQAEgIAAgMQABgbgUAAQgIAAgFAIg");
	this.shape_1211.setTransform(-21.6,-141.5);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgIAKABQAOgBAKAKQAIAKAAATQAAAPgIALQgKAKgPAAQgEAAgGgBQgGgCgBgCIAAAggAgLgmQgEACgDACIAAAqIAFAEIAIACQAYgBgBgaQABgOgHgGQgFgGgMAAIgGABg");
	this.shape_1212.setTransform(-41,-140.1);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgIALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJABAFgIQAGgIAAgMQAAgbgUAAQgIAAgFAIg");
	this.shape_1213.setTransform(-48.8,-141.5);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgKALgPAAQgOAAgKgLgAgNgTQgFAHgBAMQAAAbATAAQAJABAGgIQAEgIAAgMQAAgbgTAAQgIAAgFAIg");
	this.shape_1214.setTransform(-82.6,-141.5);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgJALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJABAGgIQAEgIAAgMQABgbgUAAQgIAAgFAIg");
	this.shape_1215.setTransform(-173.7,-141.5);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgCgDIgGAHIgGAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAKALQAJAKAAAPQAAASgJALQgKAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACACAAQAMAAAGgGQAGgHAAgPQAAgMgHgGQgGgHgLAAIgGACg");
	this.shape_1216.setTransform(-230.8,-142.9);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgKALgPAAQgOAAgKgLgAgNgTQgFAHgBAMQAAAbATAAQAJABAGgIQAEgIAAgMQAAgbgTAAQgIAAgFAIg");
	this.shape_1217.setTransform(-242.8,-141.5);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgJALgQAAQgOAAgKgLgAgNgTQgFAHAAAMQAAAbASAAQAJABAGgIQAEgIAAgMQABgbgUAAQgIAAgFAIg");
	this.shape_1218.setTransform(-269.1,-141.5);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgLIAXAAIAABJgAAAgjQgDgDAAgEQAAgDADgCQABgDADAAQAEAAADADQABACAAADQAAAEgBADQgDABgEAAQgDAAgBgBg");
	this.shape_1219.setTransform(50.2,-161.1);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f("#FFFFFF").s().p("AgMA0IAAg+IgLAAIAAgLIALAAQAAgNAGgJQAHgIALAAQAFAAAHACIgEAKIgHgCQgGABgEAEQgDAFAAAGIAAAEIAPAAIAAALIgPAAIAAA+g");
	this.shape_1220.setTransform(46.1,-161.2);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f("#FFFFFF").s().p("AgLARQALgJAAgIQAAgCgBgCQgGgDAAgFQAAgEADgDQADgCADAAQAEAAADADQADAEAAAEQAAAJgEAGQgEAIgLAJg");
	this.shape_1221.setTransform(-20.3,-155.8);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAKQgIAKgQAAQgOAAgJgKgAgNgTQgGAHAAAMQABAcASAAQAJAAAFgIQAGgHAAgNQAAgbgUAAQgIAAgFAIg");
	this.shape_1222.setTransform(-39.5,-159.7);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAKQgIAKgQAAQgOAAgJgKgAgNgTQgGAHAAAMQABAcASAAQAJAAAFgIQAGgHAAgNQAAgbgUAAQgIAAgFAIg");
	this.shape_1223.setTransform(-79.5,-159.7);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAKQgJAKgQAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAGgIQAEgHAAgNQABgbgUAAQgIAAgFAIg");
	this.shape_1224.setTransform(-98.1,-159.7);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgLIAXAAIAABJgAAAgjQgCgDgBgEQABgDACgCQABgDADAAQAEAAADADQABACAAADQAAAEgBADQgDABgEAAQgDAAgBgBg");
	this.shape_1225.setTransform(-142.1,-161.1);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f("#FFFFFF").s().p("AgMA0IAAg+IgLAAIAAgLIALAAQAAgNAGgJQAHgIALAAQAFAAAHACIgEAKIgHgCQgGABgEAEQgDAFAAAGIAAAEIAPAAIAAALIgPAAIAAA+g");
	this.shape_1226.setTransform(-146.2,-161.2);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f("#FFFFFF").s().p("AgMA0IAAg+IgLAAIAAgLIALAAQAAgNAGgJQAHgIALAAQAFAAAHACIgEAKIgHgCQgGABgEAEQgDAFAAAGIAAAEIAPAAIAAALIgPAAIAAA+g");
	this.shape_1227.setTransform(-155.5,-161.2);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAKQgKAKgPAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAFgIQAGgHgBgNQABgbgUAAQgIAAgFAIg");
	this.shape_1228.setTransform(-162.1,-159.7);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgHAKAAQAPAAAIAJQAJAKAAASQAAAQgJALQgIAKgQAAQgEAAgGgCQgGgBgBgCIAAAggAgMgmQgEACgCADIAAApIAFAEIAIABQAYAAAAgaQgBgOgGgGQgFgGgMgBIgHACg");
	this.shape_1229.setTransform(-237.9,-158.4);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAKQgIAKgQAAQgPAAgIgKgAgNgTQgGAHAAAMQABAcASAAQAJAAAFgIQAGgHAAgNQgBgbgTAAQgIAAgFAIg");
	this.shape_1230.setTransform(-272.7,-159.7);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f("#FFFFFF").s().p("AgNA0IAAg+IgKAAIAAgLIAKAAQABgNAGgJQAHgIALAAQAGAAAGACIgEAKIgHgCQgGABgEAEQgDAFAAAGIAAAEIAOAAIAAALIgOAAIAAA+g");
	this.shape_1231.setTransform(-308.4,-161.2);

	this.instance_16 = new lib.ScreenShot20190501at103533PM();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-298,-128,0.332,0.332);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgIAKABQAPgBAJAKQAIAKAAATQAAAPgIALQgJAKgQAAQgEAAgGgBQgFgCgCgCIAAAggAgLgmQgEACgDACIAAAqIAGAEIAHACQAYgBgBgaQABgOgHgGQgFgGgMAAIgGABg");
	this.shape_1232.setTransform(-34.6,-140.1);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgIAKABQAPgBAIAKQAJAKAAATQAAAPgJALQgIAKgQAAQgFAAgFgBQgGgCgBgCIAAAggAgMgmQgEACgCACIAAAqIAFAEIAIACQAXgBABgaQAAgOgHgGQgFgGgMAAIgHABg");
	this.shape_1233.setTransform(-166.7,-140.1);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgIAKABQAPgBAIAKQAJAKAAATQAAAPgJALQgIAKgQAAQgFAAgFgBQgGgCgBgCIAAAggAgMgmQgEACgCACIAAAqIAFAEIAIACQAXgBABgaQAAgOgHgGQgFgGgMAAIgHABg");
	this.shape_1234.setTransform(-191.9,-140.1);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f("#FFFFFF").s().p("AgMAzIAAg9IgLAAIAAgLIALAAQAAgOAGgHQAHgJALABQAFAAAHABIgEAKIgHgCQgGABgEAEQgDAEAAAIIAAADIAPAAIAAALIgPAAIAAA9g");
	this.shape_1235.setTransform(-223.1,-143);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgIAOAAQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_1236.setTransform(-288.5,-141.5);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgHALAAQAOAAAJAJQAJAKAAASQAAAQgJALQgJAKgPAAQgFAAgFgCQgGgBgBgCIAAAggAgMgmQgDACgDADIAAApIAGAEIAHABQAXAAAAgaQAAgOgFgGQgGgGgMgBIgHACg");
	this.shape_1237.setTransform(-305.2,-158.4);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgKQAKgKANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_1238.setTransform(-51.5,111.4);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgKQAKgKANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_1239.setTransform(-64.5,111.4);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgHgEgGQgEgEgHAAQgEAAgFADQgFACgCAEIAAA2IgNAAIAAhnIANAAIAAAnQADgFAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_1240.setTransform(-72.1,109.9);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgKQAKgKANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_1241.setTransform(-114.8,111.4);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgKQAKgKANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_1242.setTransform(-133.4,111.4);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgHgEgGQgEgEgHAAQgEAAgFADQgFACgCAEIAAA2IgNAAIAAhnIANAAIAAAnQADgFAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_1243.setTransform(-141,109.9);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgKQAKgKANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_1244.setTransform(-175.6,111.4);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgKQAKgKANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_1245.setTransform(-204.7,111.4);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgKQAKgKANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_1246.setTransform(-235.7,111.4);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCgBgEQABgCACgDQABgCADAAQAEAAADACQABADAAACQAAAEgBACQgDACgEAAQgDAAgBgCg");
	this.shape_1247.setTransform(-261.8,110);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f("#FFFFFF").s().p("AAVAlIgVgwIgVAwIgDAAIgahKIAOAAIAPAvIAUgvIACAAIAUAvIARgvIANAAIgaBKg");
	this.shape_1248.setTransform(-268.8,111.4);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgJALgPAAQgPAAgIgLgAgNgTQgFAHgBAMQAAAcATgBQAJAAAGgHQAEgIAAgMQAAgagTAAQgIAAgFAHg");
	this.shape_1249.setTransform(188.8,93.1);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAFQADADAHAAQAFAAAGgCIABALQgIADgJAAQgIAAgGgHg");
	this.shape_1250.setTransform(182.4,92.2);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgJAOABQAEAAAGACQAAgSgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAZQAAAKAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgRIgJgBQgJAAgGAEg");
	this.shape_1251.setTransform(175.8,93.1);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAFQADADAHAAQAFAAAGgCIABALQgIADgJAAQgIAAgGgHg");
	this.shape_1252.setTransform(164.1,92.2);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgRQAAgRALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAIIAoAAIAAAAg");
	this.shape_1253.setTransform(126.2,93.1);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgIALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAcASgBQAJAAAFgHQAGgIAAgMQAAgagUAAQgIAAgFAHg");
	this.shape_1254.setTransform(110.9,93.1);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f("#FFFFFF").s().p("AAZAzIgHgVIgkAAIgHAVIgPAAIAohlIADAAIAmBlgAAPAUIgPgsIgOAsIAdAAg");
	this.shape_1255.setTransform(95.3,91.7);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgJALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAcASgBQAJAAAGgHQAEgIAAgMQABgagUAAQgIAAgFAHg");
	this.shape_1256.setTransform(82.3,93.1);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAFQADADAHAAQAFAAAGgCIABALQgIADgJAAQgIAAgGgHg");
	this.shape_1257.setTransform(75.9,92.2);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgJALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAcASgBQAJAAAGgHQAEgIAAgMQABgagUAAQgIAAgFAHg");
	this.shape_1258.setTransform(55.8,93.1);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgRQAAgRALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAIIAoAAIAAAAg");
	this.shape_1259.setTransform(35.4,93.1);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f("#FFFFFF").s().p("AARA0IgWglIgMALIAAAaIgNAAIAAhmIANAAIAAA/IAbghIAQAAIgYAaIAdAug");
	this.shape_1260.setTransform(28.5,91.6);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgJAOABQAEAAAGACQAAgSgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAZQAAAKAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgRIgJgBQgJAAgGAEg");
	this.shape_1261.setTransform(20.9,93.1);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAFQADADAHAAQAFAAAGgCIABALQgIADgJAAQgIAAgGgHg");
	this.shape_1262.setTransform(14.5,92.2);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgKIAXAAIAABHgAAAgkQgCgCgBgDQABgEACgCQACgDADABQADgBADADQACACAAAEQAAADgCACQgDACgDABQgDgBgCgCg");
	this.shape_1263.setTransform(-4.6,91.7);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f("#FFFFFF").s().p("AAVAmIgVgyIgVAyIgDAAIgahLIAOAAIAPAwIAUgwIADAAIATAwIASgwIAMAAIgaBLg");
	this.shape_1264.setTransform(-11.6,93.2);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAFQADADAHAAQAFAAAGgCIABALQgIADgJAAQgIAAgGgHg");
	this.shape_1265.setTransform(-25.4,92.2);

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgJAOABQAEAAAGACQAAgSgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAZQAAAKAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgRIgJgBQgJAAgGAEg");
	this.shape_1266.setTransform(-54.9,93.1);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgHgEgGQgEgEgHAAQgEAAgFACQgFADgCAEIAAA2IgNAAIAAhmIANAAIAAAmQADgFAFgDQAGgCAFAAQAMAAAHAIQAGAHAAANIAAAug");
	this.shape_1267.setTransform(-96.9,91.6);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAFQADADAHAAQAFAAAGgCIABALQgIADgJAAQgIAAgGgHg");
	this.shape_1268.setTransform(-103.4,92.2);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgRQAAgRALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAIIAoAAIAAAAg");
	this.shape_1269.setTransform(-121.4,93.1);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgJAOABQAEAAAGACQAAgSgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAZQAAAKAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgRIgJgBQgJAAgGAEg");
	this.shape_1270.setTransform(-135.8,93.1);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgRQAAgRALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAIIAoAAIAAAAg");
	this.shape_1271.setTransform(-153.2,93.1);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgHgEgGQgEgEgHAAQgEAAgFACQgFADgCAEIAAA2IgNAAIAAhmIANAAIAAAmQADgFAFgDQAGgCAFAAQAMAAAHAIQAGAHAAANIAAAug");
	this.shape_1272.setTransform(-160.8,91.6);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAFQADADAHAAQAFAAAGgCIABALQgIADgJAAQgIAAgGgHg");
	this.shape_1273.setTransform(-167.3,92.2);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgIALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAcASgBQAJAAAFgHQAGgIAAgMQAAgagUAAQgIAAgFAHg");
	this.shape_1274.setTransform(-187.4,93.1);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f("#FFFFFF").s().p("AARA0IgWglIgMALIAAAaIgNAAIAAhmIANAAIAAA/IAbghIAQAAIgYAaIAdAug");
	this.shape_1275.setTransform(-200.2,91.6);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgKQAKgLARAAQAFAAAHACQAHADADACIgHAKQgCgDgFgCIgKgBQgJAAgGAIQgHAGAAANQAAAMAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_1276.setTransform(-207.6,93.1);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgKQAKgLARAAQAFAAAHACQAHADADACIgHAKQgCgDgFgCIgKgBQgJAAgGAIQgHAGAAANQAAAMAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_1277.setTransform(-222.5,93.1);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgRQAAgRALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAIIAoAAIAAAAg");
	this.shape_1278.setTransform(-235.7,93.1);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgIALgQAAQgOAAgJgLgAgNgTQgGAHAAAMQABAcASgBQAJAAAFgHQAGgIAAgMQAAgagUAAQgIAAgFAHg");
	this.shape_1279.setTransform(-262.7,93.1);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgKALgPAAQgOAAgKgLgAgNgTQgFAHgBAMQAAAcATgBQAJAAAGgHQAEgIAAgMQAAgagTAAQgIAAgFAHg");
	this.shape_1280.setTransform(-291.4,93.1);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f("#FFFFFF").s().p("AgNA0IAAg+IgKAAIAAgKIAKAAQABgOAGgJQAHgHALAAQAFAAAHACIgEAJIgHgBQgGgBgEAFQgDAFAAAGIAAAFIAOAAIAAAKIgOAAIAAA+g");
	this.shape_1281.setTransform(-310.3,91.6);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHADADACIgHAKIgHgEQgFgCgFAAQgJAAgGAHQgHAHAAAMQAAAOAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_1282.setTransform(-296.6,56.6);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_1283.setTransform(-303.8,56.6);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgOAAgKgKgAgNgTQgFAHgBAMQAAAcATAAQAJAAAGgIQAEgHAAgNQAAgagTAAQgIgBgFAIg");
	this.shape_1284.setTransform(-112.3,38.4);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.f("#FFFFFF").s().p("AgLARQALgKAAgGQAAgDgBgCQgGgEAAgEQAAgEADgDQADgCADAAQAEAAADADQADADAAAFQAAAJgEAGQgEAIgLAJg");
	this.shape_1285.setTransform(-130.2,42.3);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgHALAAQAOAAAJAJQAJAKAAASQAAAQgJALQgJAKgPAAQgFAAgFgCQgGgBgBgCIAAAggAgMgmQgDACgDADIAAApIAFAEIAIABQAYABAAgbQgBgOgFgGQgGgGgMgBIgHACg");
	this.shape_1286.setTransform(-173.2,39.7);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgIAKgQAAQgOAAgJgKgAgNgTQgGAHAAAMQABAcASAAQAJAAAFgIQAGgHAAgNQAAgagUAAQgIgBgFAIg");
	this.shape_1287.setTransform(-268.5,38.4);

	this.instance_17 = new lib.ScreenShot20190502at85238PM();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-186,-94);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAIgIAKAAQAOAAAKAKQAIAKAAATQAAAPgIALQgKALgPAAQgEAAgGgCQgFgCgCgCIAAAhgAgLglQgEABgDACIAAAqIAFAEIAIACQAYAAgBgbQABgOgHgGQgFgHgMABIgGACg");
	this.shape_1288.setTransform(103,-121.9);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f("#FFFFFF").s().p("AgdAyIAAhjIA7AAIAAAMIgtAAIAAAcIAgAAIAAAKIggAAIAAAkIAsAAIAAANg");
	this.shape_1289.setTransform(-47.6,-124.6);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.f("#FFFFFF").s().p("AgeAyIAAhjIASAAQArgBAAAeQAAAgglABIgKgBIAAAmgAgQglIAAAlIAJABQAYAAAAgUQAAgSgaAAg");
	this.shape_1290.setTransform(-85.4,-124.6);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.f("#FFFFFF").s().p("AgYARIAmgRIgmgRIAAgLIAxAZIAAAHIgxAYg");
	this.shape_1291.setTransform(-97.5,-123.9);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f("#FFFFFF").s().p("AgKARQAKgJAAgIQAAgBgBgEQgGgCAAgGQAAgDADgCQADgDADAAQAEAAADAEQADADgBAEQABAJgEAHQgEAGgLAKg");
	this.shape_1292.setTransform(-238.1,-119.3);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgkQgCgCgBgDQABgDACgDQABgDADABQAEgBADADQABADAAADQAAADgBACQgDADgEAAQgDAAgBgDg");
	this.shape_1293.setTransform(-266.3,-124.6);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgFgDgEAAQgHAAgEAGQgFAGAAAJIAAApg");
	this.shape_1294.setTransform(-290.7,-123.3);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAKQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJAAAGgIQAEgHAAgNQAAgbgTAAQgIAAgFAIg");
	this.shape_1295.setTransform(8.8,-159.7);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAKQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJAAAGgIQAEgHAAgNQAAgbgTAAQgIAAgFAIg");
	this.shape_1296.setTransform(-4.2,-159.7);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAKQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJAAAGgIQAEgHAAgNQAAgbgTAAQgIAAgFAIg");
	this.shape_1297.setTransform(-44.3,-159.7);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgLIAVAAIAABJgAAAgjQgCgDAAgEQAAgDACgCQACgDACAAQAEAAACADQACACAAADQAAAEgCADQgCABgEAAQgCAAgCgBg");
	this.shape_1298.setTransform(-81.9,-161.1);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgLIAXAAIAABJgAAAgjQgCgDgBgEQABgDACgCQACgDADAAQADAAADADQACACAAADQAAAEgCADQgDABgDAAQgDAAgCgBg");
	this.shape_1299.setTransform(-101.8,-161.1);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgEAAgFADQgEACgCAEIAAA1IgLAAIAAgzQAAgFgFgDQgEgDgGAAQgEAAgFADQgEADgCADIAAA1IgNAAIAAhIIAJAAIAEAJQAHgKAMAAQAQAAAFAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_1300.setTransform(-223.7,-159.8);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgLIAVAAIAABJgAAAgjQgCgDAAgEQAAgDACgCQACgDADAAQADAAACADQACACAAADQAAAEgCADQgCABgDAAQgDAAgCgBg");
	this.shape_1301.setTransform(-231.7,-161.1);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAKQgKAKgPAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAFgIQAGgHgBgNQABgbgUAAQgIAAgFAIg");
	this.shape_1302.setTransform(-308.8,-159.7);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f("#FFFFFF").s().p("AgGAyIAAgtIggg2IAOAAIAYAsIAZgsIAOAAIggA2IAAAtg");
	this.shape_1303.setTransform(-314.9,-161.1);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgJALgPAAQgPAAgIgLgAgNgTQgFAHgBAMQAAAbATAAQAJAAAGgHQAEgIAAgMQAAgbgTABQgIAAgFAHg");
	this.shape_1304.setTransform(29.1,93.7);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgKQAKgLARAAQAFAAAHACQAHACADADIgHAKIgHgFIgKgBQgJAAgGAIQgHAGAAAMQAAANAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_1305.setTransform(-83,93.7);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgIALgQAAQgPAAgIgLgAgNgTQgGAHAAAMQABAbASAAQAJAAAFgHQAFgIABgMQgBgbgTABQgIAAgFAHg");
	this.shape_1306.setTransform(-110.7,93.7);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgJALgPAAQgPAAgIgLgAgNgTQgFAHgBAMQAAAbATAAQAJAAAGgHQAEgIAAgMQAAgbgTABQgIAAgFAHg");
	this.shape_1307.setTransform(-188.3,93.7);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgJALgPAAQgPAAgIgLgAgNgTQgFAHgBAMQAAAbATAAQAJAAAGgHQAEgIAAgMQAAgbgTABQgIAAgFAHg");
	this.shape_1308.setTransform(-200,93.7);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAHgIALAAQAOAAAJAKQAJAKAAATQAAAPgJALQgJALgPAAQgFAAgFgCQgGgCgBgCIAAAhgAgMglQgDABgDACIAAAqIAFAEIAIACQAYAAAAgbQgBgOgFgGQgGgHgMABIgHACg");
	this.shape_1309.setTransform(-228.1,95);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAHgIALAAQAOAAAJAKQAJAKAAATQAAAPgJALQgJALgPAAQgFAAgFgCQgGgCgBgCIAAAhgAgMglQgDABgDACIAAAqIAGAEIAHACQAXAAAAgbQAAgOgFgGQgGgHgMABIgHACg");
	this.shape_1310.setTransform(-235.9,95);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.f("#FFFFFF").s().p("AAVAmIgVgyIgVAyIgDAAIgahLIAOAAIAPAwIAUgwIADAAIATAwIARgwIANAAIgaBLg");
	this.shape_1311.setTransform(-268.9,93.7);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgFQgJgEgDgCIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAFQAIADAEAFQAEAFAAAHQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_1312.setTransform(-281.1,93.7);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgKQAKgLARAAQAFAAAHACQAHACADADIgHAKQgCgCgFgDIgKgBQgJAAgGAIQgHAGAAAMQAAANAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_1313.setTransform(-324.5,93.7);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.f("#FFFFFF").s().p("AgKARQAKgJAAgIQAAgBgBgDQgGgEAAgEQAAgEADgCQADgDADAAQAEAAADADQADADgBAFQAAAJgDAHQgEAGgLAKg");
	this.shape_1314.setTransform(173.1,79.4);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgDgDIgEAHIgHAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAJALQAKAKAAAPQAAASgKALQgJAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACADAAQAMAAAFgGQAGgHAAgPQAAgMgHgGQgGgHgKAAIgHACg");
	this.shape_1315.setTransform(142,74);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOAAQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_1316.setTransform(111.2,75.4);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgEAAgFADQgEACgCAEIAAA1IgLAAIAAgzQAAgFgFgDQgEgDgGAAQgEAAgFADQgEADgCADIAAA1IgNAAIAAhIIAJAAIAEAJQAIgKALAAQAPAAAGAJQACgEAGgDQAGgCAGAAQALAAAHAGQAGAHAAAMIAAAwg");
	this.shape_1317.setTransform(101.7,75.3);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOAAQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_1318.setTransform(82,75.4);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOAAQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_1319.setTransform(-26.8,75.4);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOAAQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_1320.setTransform(-126.7,75.4);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f("#FFFFFF").s().p("AARAzIgWgkIgMAMIAAAYIgNAAIAAhlIANAAIAAA/IAbgiIAQAAIgYAbIAdAtg");
	this.shape_1321.setTransform(-160.1,73.9);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOAAQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_1322.setTransform(-167.8,75.4);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.f("#FFFFFF").s().p("AAVAlIgVgxIgUAxIgEAAIgahJIAOAAIAQAuIATguIACAAIAUAuIARguIANAAIgaBJg");
	this.shape_1323.setTransform(-242.1,75.5);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOAAQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_1324.setTransform(-261.1,75.4);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgQIANgFIAAAVIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_1325.setTransform(-275.1,74.5);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_1326.setTransform(-286.3,75.4);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHACADADIgHAKIgHgFIgKgBQgJAAgGAHQgHAIAAALQAAAOAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_1327.setTransform(-293.5,75.4);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgQIANgFIAAAVIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_1328.setTransform(-303.6,74.5);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.f("#FFFFFF").s().p("AAGAQIgFgLIgGALIgDAFIgJgHIADgEIALgGIgMgCIgGgCIAFgKIAHADIAJAGIgFgNIAAgGIALAAIAAAFIgEAOIAKgGIAGgDIADALIgFACIgMAAIALAHIADAEIgIAHg");
	this.shape_1329.setTransform(-325.5,71.1);

	this.instance_18 = new lib.ScreenShot20190502at85932PM();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-320,-74,0.166,0.166);

	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.f("#FFFFFF").s().p("AAHANIgCgZIAMAAIgCAZgAgPANIgCgZIANAAIgCAZg");
	this.shape_1330.setTransform(51.6,-110.1);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgDgDIgFAHIgGAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAKALQAJAKAAAPQAAASgJALQgKAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACADAAQAMAAAGgGQAFgHAAgPQAAgMgGgGQgHgHgKAAIgHACg");
	this.shape_1331.setTransform(20.5,-106.4);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgKQAKgLARAAQAFAAAHADQAHACADACIgHAJIgHgEIgKgBQgJAAgGAIQgHAGAAANQAAAMAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_1332.setTransform(-296.6,-105);

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgFQgJgEgDgCIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAFQAIADAEAFQAEAFAAAHQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_1333.setTransform(169.1,-123.2);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAFAAAHQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_1334.setTransform(157.1,-123.2);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgKALgPAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJAAAFgHQAGgIAAgMQAAgbgUAAQgIABgFAHg");
	this.shape_1335.setTransform(61.1,-123.2);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAFAAAHQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_1336.setTransform(20.4,-123.2);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.f("#FFFFFF").s().p("AgOA6QAOgQAAgrQAAgmgOgTIAAgGQAMAGAIATQAJATAAATQAAAUgIASQgHASgOAKg");
	this.shape_1337.setTransform(9,-123.2);

	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAFAAAHQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_1338.setTransform(-1.6,-123.2);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgkQgDgCABgDQgBgDADgDQABgDAEABQADgBACADQACADABADQgBADgCACQgCADgDAAQgEAAgBgDg");
	this.shape_1339.setTransform(-25.9,-124.6);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f("#FFFFFF").s().p("AgEAcIAAgXIgYAAIAAgJIAYAAIAAgXIAJAAIAAAXIAXAAIAAAJIgXAAIAAAXg");
	this.shape_1340.setTransform(-49.7,-123.9);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgFQgJgEgDgCIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAFQAIADAEAFQAEAFAAAHQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_1341.setTransform(-61.7,-123.2);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgkQgCgCgBgDQABgDACgDQACgDACABQAEgBADADQACADAAADQAAADgCACQgDADgEAAQgCAAgCgDg");
	this.shape_1342.setTransform(-74.2,-124.6);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAIgIAKAAQAOAAAKAKQAIAKAAATQAAAPgIALQgKALgPAAQgEAAgGgCQgGgCgBgCIAAAhgAgLglQgEABgDACIAAAqIAFAEIAIACQAYAAgBgbQABgOgHgGQgFgHgMABIgGACg");
	this.shape_1343.setTransform(-79.7,-121.9);

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f("#FFFFFF").s().p("AgFAlQgIgSAAgUQAAgTAJgTQAHgTAMgGIAAAGQgOATAAAmQAAArAOAQIAAAHQgOgKgGgSg");
	this.shape_1344.setTransform(-100.5,-123.2);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgFQgJgEgDgCIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAFQAIADAEAFQAEAFAAAHQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_1345.setTransform(-111.6,-123.2);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAFAAAHQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_1346.setTransform(-138,-123.2);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHABQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_1347.setTransform(-169.1,-124.2);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAFAAAHQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_1348.setTransform(-207.4,-123.2);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHABQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_1349.setTransform(-219.2,-124.2);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgFQgJgEgDgCIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAFQAIADAEAFQAEAFAAAHQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_1350.setTransform(-251.1,-123.2);

	this.shape_1351 = new cjs.Shape();
	this.shape_1351.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgIALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJAAAFgHQAGgIAAgMQAAgbgUAAQgIABgFAHg");
	this.shape_1351.setTransform(-270.7,-123.2);

	this.shape_1352 = new cjs.Shape();
	this.shape_1352.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgFgDgBIgGgEIgDgGIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_1352.setTransform(136.6,-141.5);

	this.shape_1353 = new cjs.Shape();
	this.shape_1353.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgQIANgFIAAAVIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_1353.setTransform(118.2,-142.4);

	this.shape_1354 = new cjs.Shape();
	this.shape_1354.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHACADADIgHAKIgHgFIgKgBQgJAAgGAHQgHAIAAALQAAAOAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_1354.setTransform(111.9,-141.5);

	this.shape_1355 = new cjs.Shape();
	this.shape_1355.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_1355.setTransform(104.7,-141.5);

	this.shape_1356 = new cjs.Shape();
	this.shape_1356.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_1356.setTransform(86,-141.5);

	this.shape_1357 = new cjs.Shape();
	this.shape_1357.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgFgDgBIgGgEIgDgGIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_1357.setTransform(60.4,-141.5);

	this.shape_1358 = new cjs.Shape();
	this.shape_1358.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_1358.setTransform(49.6,-141.5);

	this.shape_1359 = new cjs.Shape();
	this.shape_1359.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhlIANAAIAAAlQADgDAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_1359.setTransform(42,-143);

	this.shape_1360 = new cjs.Shape();
	this.shape_1360.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgQIANgFIAAAVIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_1360.setTransform(35.5,-142.4);

	this.shape_1361 = new cjs.Shape();
	this.shape_1361.graphics.f("#FFFFFF").s().p("AgMAzIAAg9IgLAAIAAgLIALAAQAAgOAGgHQAHgJALABQAGAAAGABIgEAKIgHgCQgGABgEAEQgDAEAAAIIAAADIAPAAIAAALIgPAAIAAA9g");
	this.shape_1361.setTransform(26.2,-143);

	this.shape_1362 = new cjs.Shape();
	this.shape_1362.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgIALgQAAQgOAAgJgLgAgNgTQgGAHABAMQAAAbASAAQAJABAFgIQAGgIAAgMQAAgbgUAAQgIAAgFAIg");
	this.shape_1362.setTransform(19.6,-141.5);

	this.shape_1363 = new cjs.Shape();
	this.shape_1363.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhlIANAAIAAAlQADgDAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_1363.setTransform(7.8,-143);

	this.shape_1364 = new cjs.Shape();
	this.shape_1364.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHACADADIgHAKIgHgFIgKgBQgJAAgGAHQgHAIAAALQAAAOAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_1364.setTransform(0.6,-141.5);

	this.shape_1365 = new cjs.Shape();
	this.shape_1365.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_1365.setTransform(-45.4,-141.5);

	this.shape_1366 = new cjs.Shape();
	this.shape_1366.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgQIANgFIAAAVIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_1366.setTransform(-51.9,-142.4);

	this.shape_1367 = new cjs.Shape();
	this.shape_1367.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_1367.setTransform(-65.9,-141.5);

	this.shape_1368 = new cjs.Shape();
	this.shape_1368.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgDgDgFAAQgHAAgEAGQgFAGgBAJIAAApg");
	this.shape_1368.setTransform(-71.8,-141.6);

	this.shape_1369 = new cjs.Shape();
	this.shape_1369.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHACADADIgHAKIgHgFIgKgBQgJAAgGAHQgHAIAAALQAAAOAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_1369.setTransform(-78.5,-141.5);

	this.shape_1370 = new cjs.Shape();
	this.shape_1370.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgFgDgBIgGgEIgDgGIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_1370.setTransform(-138.7,-141.5);

	this.shape_1371 = new cjs.Shape();
	this.shape_1371.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_1371.setTransform(-145.3,-141.5);

	this.shape_1372 = new cjs.Shape();
	this.shape_1372.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgQIANgFIAAAVIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_1372.setTransform(-167.4,-142.4);

	this.shape_1373 = new cjs.Shape();
	this.shape_1373.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_1373.setTransform(-195.1,-141.5);

	this.shape_1374 = new cjs.Shape();
	this.shape_1374.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_1374.setTransform(-209.5,-141.5);

	this.shape_1375 = new cjs.Shape();
	this.shape_1375.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgFgDgBIgGgEIgDgGIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_1375.setTransform(-216.2,-141.5);

	this.shape_1376 = new cjs.Shape();
	this.shape_1376.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_1376.setTransform(-227,-141.5);

	this.shape_1377 = new cjs.Shape();
	this.shape_1377.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgQIANgFIAAAVIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_1377.setTransform(-233.5,-142.4);

	this.shape_1378 = new cjs.Shape();
	this.shape_1378.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgFgDgBIgGgEIgDgGIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_1378.setTransform(-239.2,-141.5);

	this.shape_1379 = new cjs.Shape();
	this.shape_1379.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgIAKABQAPgBAJAKQAIAKAAATQAAAPgIALQgJAKgQAAQgEAAgGgBQgFgCgCgCIAAAggAgLgmQgFACgCACIAAAqIAGAEIAHACQAYgBgBgaQABgOgHgGQgFgGgMAAIgGABg");
	this.shape_1379.setTransform(-298.7,-140.1);

	this.shape_1380 = new cjs.Shape();
	this.shape_1380.graphics.f("#FFFFFF").s().p("AgZAmQgLgOAAgYQAAgVAMgPQAMgPATAAQAQAAAJAGIgFALQgGgEgOAAQgMAAgIALQgIALAAARQAAARAIALQAIALAMAAQAOAAAIgKIAHAKQgMAMgSAAQgTAAgMgOg");
	this.shape_1380.setTransform(-314.5,-142.9);

	this.shape_1381 = new cjs.Shape();
	this.shape_1381.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgHAKAAQAPAAAIAJQAJAKAAASQAAAQgJALQgIAKgQAAQgFAAgFgCQgGgBgBgCIAAAggAgMgmQgEACgCADIAAApIAFAEIAIABQAXAAABgaQAAgOgHgGQgFgGgMgBIgHACg");
	this.shape_1381.setTransform(-175.7,-158.4);

	this.shape_1382 = new cjs.Shape();
	this.shape_1382.graphics.f("#FFFFFF").s().p("AgNA6QANgQAAgrQAAgmgNgTIAAgGQAMAGAHATQAIATABATQgBAUgHASQgHASgNAKg");
	this.shape_1382.setTransform(94,135.7);

	this.shape_1383 = new cjs.Shape();
	this.shape_1383.graphics.f("#FFFFFF").s().p("AANAvQgKAFgNAAQgOAAgIgJQgIgIAAgQQAAgIACgFQADgGAGgFQgKgKAAgKQAAgLAIgHQAIgIANAAQANAAAIAHIgGAKQgGgGgHAAQgSAAAAAQQAAAJAIAGIAZAAIAAgMIANgFIAAARIARAAIAAAKIgRAAIAAAXQAAAJACAEQADADAGAAQAEAAAFgDIABANQgHACgJAAQgGAAgGgFgAgaATQAAAVAUAAQAJAAAEgDIAAgIIAAgcIgbAAQgGAJAAAJg");
	this.shape_1383.setTransform(74.5,134.2);

	this.shape_1384 = new cjs.Shape();
	this.shape_1384.graphics.f("#FFFFFF").s().p("AgfAyIAAhjIAagBQAOABAIAGQAIAGAAAMQAAAHgFAGQgFAFgGACQAMADAFAGQAGAGAAALQAAAOgKAHQgKAJgOgBgAgRAnIAKAAQAMAAAGgEQAGgFAAgKQAAgLgFgEQgGgFgMABIgLAAgAgRgmIAAAdIAKABQATAAAAgQQAAgOgRAAg");
	this.shape_1384.setTransform(65.8,134.2);

	this.shape_1385 = new cjs.Shape();
	this.shape_1385.graphics.f("#FFFFFF").s().p("AgGAlQgHgSAAgUQAAgTAJgTQAHgTAMgGIAAAGQgOATAAAmQAAArAOAQIAAAHQgOgKgHgSg");
	this.shape_1385.setTransform(-214.5,135.7);

	this.instance_19 = new lib.ScreenShot20190502at92034PM();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-21,-51,0.214,0.214);

	this.shape_1386 = new cjs.Shape();
	this.shape_1386.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgjQgCgDAAgEQAAgDACgCQACgCACgBQAEABACACQACACAAADQAAAEgCADQgCABgEAAQgCAAgCgBg");
	this.shape_1386.setTransform(-210.6,-69.9);

	this.shape_1387 = new cjs.Shape();
	this.shape_1387.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgjQgCgDAAgEQAAgDACgCQACgCADgBQADABACACQACACAAADQAAAEgCADQgCABgDAAQgDAAgCgBg");
	this.shape_1387.setTransform(-302.3,-69.9);

	this.shape_1388 = new cjs.Shape();
	this.shape_1388.graphics.f("#FFFFFF").s().p("AAWAlIgWgwIgUAwIgEAAIgahKIAOAAIAQAvIATgvIADAAIAUAvIARgvIAMAAIgaBKg");
	this.shape_1388.setTransform(31.4,-86.7);

	this.shape_1389 = new cjs.Shape();
	this.shape_1389.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgCgCAAgEQAAgDACgCQACgDADAAQADAAACADQACACAAADQAAAEgCACQgCACgDAAQgDAAgCgCg");
	this.shape_1389.setTransform(-2.2,-88.1);

	this.shape_1390 = new cjs.Shape();
	this.shape_1390.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgKQAKgLARAAQAFAAAHADQAHABADADIgHAJIgHgDIgKgCQgJAAgGAHQgHAIAAAMQAAANAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_1390.setTransform(-196.4,-86.7);

	this.shape_1391 = new cjs.Shape();
	this.shape_1391.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgCgCAAgEQAAgDACgCQACgDADAAQADAAACADQACACAAADQAAAEgCACQgCACgDAAQgDAAgCgCg");
	this.shape_1391.setTransform(-202,-88.1);

	this.shape_1392 = new cjs.Shape();
	this.shape_1392.graphics.f("#FFFFFF").s().p("AAeAzIgzhJIAABHIgMAAIAAhjIAFAAIAxBEIAAhEIANAAIAABlg");
	this.shape_1392.setTransform(-221.3,-88);

	this.shape_1393 = new cjs.Shape();
	this.shape_1393.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgIgEgFQgEgEgHAAQgEAAgFADQgFADgCADIAAA2IgNAAIAAhnIANAAIAAAmQADgEAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_1393.setTransform(-274,-88.2);

	this.shape_1394 = new cjs.Shape();
	this.shape_1394.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgDgCABgDQgBgDADgDQABgCAEAAQADAAACACQACADABADQgBADgCACQgCACgDAAQgEAAgBgCg");
	this.shape_1394.setTransform(153.6,-106.4);

	this.shape_1395 = new cjs.Shape();
	this.shape_1395.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAHgHALgBQAOAAAJAKQAJAKAAASQAAAQgJALQgJALgPAAQgFgBgFgCQgGgBgBgCIAAAhgAgMglQgDABgDACIAAAqIAFAEIAIABQAYAAAAgaQgBgOgFgGQgGgHgMAAIgHADg");
	this.shape_1395.setTransform(5.4,-103.6);

	this.shape_1396 = new cjs.Shape();
	this.shape_1396.graphics.f("#FFFFFF").s().p("AgZAmQgKgOgBgYQABgVALgPQAMgPATAAQAQAAAJAGIgFALQgGgEgOAAQgMAAgIALQgIALAAARQAAARAIALQAIALAMAAQAOAAAIgKIAHAKQgMAMgSAAQgTAAgMgOg");
	this.shape_1396.setTransform(-69.1,-106.4);

	this.shape_1397 = new cjs.Shape();
	this.shape_1397.graphics.f("#FFFFFF").s().p("AAaAzIgIgVIgkAAIgHAVIgPAAIAohlIADAAIAmBlgAAPAUIgPgsIgOAsIAdAAg");
	this.shape_1397.setTransform(-181.7,-106.4);

	this.shape_1398 = new cjs.Shape();
	this.shape_1398.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgDgCABgDQgBgDADgDQABgCAEAAQADAAACACQACADABADQgBADgCACQgCACgDAAQgEAAgBgCg");
	this.shape_1398.setTransform(-258.6,-106.4);

	this.shape_1399 = new cjs.Shape();
	this.shape_1399.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgPAAgJgKgAgNgTQgFAHAAAMQgBAcATAAQAJgBAGgHQAEgHAAgNQAAgagTAAQgIAAgFAHg");
	this.shape_1399.setTransform(-306.4,-105);

	this.shape_1400 = new cjs.Shape();
	this.shape_1400.graphics.f("#FFFFFF").s().p("AgiAzIAAhjIAZgBQAUAAALAMQANANAAAWQAAA1gxAAgAgUglIAABKIALABQANAAAIgLQAJgKgBgTQAAgjgeAAg");
	this.shape_1400.setTransform(-314.1,-106.4);

	this.shape_1401 = new cjs.Shape();
	this.shape_1401.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgJAAIAAgLIAVAAIAABIgAAAgkQgCgCAAgDQAAgDACgDQACgDADABQADgBACADQADADAAADQAAADgDACQgCADgDAAQgDAAgCgDg");
	this.shape_1401.setTransform(-277.4,-124.6);

	this.shape_1402 = new cjs.Shape();
	this.shape_1402.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgJALgQAAQgPAAgJgLgAgNgTQgGAHABAMQAAAbASAAQAJAAAGgHQAEgIAAgMQABgbgUAAQgIABgFAHg");
	this.shape_1402.setTransform(-299.3,-123.2);

	this.shape_1403 = new cjs.Shape();
	this.shape_1403.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgIAKABQAOgBAKAKQAIAKAAATQAAAPgIALQgKAKgPAAQgEAAgGgBQgGgCgBgCIAAAggAgLgmQgEACgDACIAAAqIAFAEIAIACQAYgBAAgaQAAgOgHgGQgFgGgMAAIgGABg");
	this.shape_1403.setTransform(66.6,-140.1);

	this.shape_1404 = new cjs.Shape();
	this.shape_1404.graphics.f("#FFFFFF").s().p("AAWAlIgWgxIgUAxIgEAAIgahJIAOAAIAQAuIATguIACAAIAVAuIAQguIANAAIgaBJg");
	this.shape_1404.setTransform(-89.4,-141.4);

	this.shape_1405 = new cjs.Shape();
	this.shape_1405.graphics.f("#FFFFFF").s().p("AAVAlIgVgxIgVAxIgDAAIgahJIAOAAIAPAuIAUguIADAAIATAuIASguIAMAAIgaBJg");
	this.shape_1405.setTransform(-267.6,-141.4);

	this.shape_1406 = new cjs.Shape();
	this.shape_1406.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgHALAAQAOAAAKAJQAIAKAAASQAAAQgIALQgKAKgPAAQgFAAgFgCQgFgBgCgCIAAAggAgLgmQgEACgDADIAAApIAGAEIAHABQAXAAAAgaQAAgOgFgGQgGgGgMgBIgGACg");
	this.shape_1406.setTransform(127.2,-158.4);

	this.shape_1407 = new cjs.Shape();
	this.shape_1407.graphics.f("#FFFFFF").s().p("AgZAmQgKgOgBgYQABgVAMgPQALgPASAAQARAAAJAGIgFALQgGgEgOAAQgMAAgIALQgIALAAARQAAARAIALQAIALAMAAQAOAAAIgKIAHAKQgMAMgSAAQgTAAgMgOg");
	this.shape_1407.setTransform(111.4,-161.1);

	this.shape_1408 = new cjs.Shape();
	this.shape_1408.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgLIAXAAIAABJgAAAgjQgCgDAAgEQAAgDACgCQACgDADAAQADAAADADQACACAAADQAAAEgCADQgDABgDAAQgDAAgCgBg");
	this.shape_1408.setTransform(93.5,-161.1);

	this.shape_1409 = new cjs.Shape();
	this.shape_1409.graphics.f("#FFFFFF").s().p("AgCAzIglhlIAPAAIAZBJIAYhJIAPAAIgkBlg");
	this.shape_1409.setTransform(87.9,-161);

	this.shape_1410 = new cjs.Shape();
	this.shape_1410.graphics.f("#FFFFFF").s().p("AAVAlIgVgwIgVAwIgDAAIgahJIAOAAIAPAuIAUguIADAAIATAuIASguIAMAAIgaBJg");
	this.shape_1410.setTransform(-12.9,-159.7);

	this.shape_1411 = new cjs.Shape();
	this.shape_1411.graphics.f("#FFFFFF").s().p("AAeAzIgzhJIAABHIgMAAIAAhjIAFAAIAxBEIAAhEIANAAIAABlg");
	this.shape_1411.setTransform(-30.2,-161);

	this.shape_1412 = new cjs.Shape();
	this.shape_1412.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_1412.setTransform(-71.3,-159.7);

	this.shape_1413 = new cjs.Shape();
	this.shape_1413.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_1413.setTransform(-98.4,-159.7);

	this.shape_1414 = new cjs.Shape();
	this.shape_1414.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_1414.setTransform(-141,-159.7);

	this.shape_1415 = new cjs.Shape();
	this.shape_1415.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgCgDIgGAHIgGAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAJALQAKAKAAAPQAAASgKALQgJAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACACAAQANAAAFgGQAGgHAAgPQAAgMgHgGQgGgHgLAAIgGACg");
	this.shape_1415.setTransform(-153.6,-161.2);

	this.shape_1416 = new cjs.Shape();
	this.shape_1416.graphics.f("#FFFFFF").s().p("AAUAjQgEgBgCgGQgIAKgPAAQgJAAgGgHQgGgGAAgJQAAgLAJgHQAKgHAOgBQAEAAAGADQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgDgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_1416.setTransform(-184,-159.7);

	this.shape_1417 = new cjs.Shape();
	this.shape_1417.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_1417.setTransform(-212.9,-159.7);

	this.shape_1418 = new cjs.Shape();
	this.shape_1418.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFAAAGgCIABALQgIACgJAAQgIAAgGgGg");
	this.shape_1418.setTransform(-227,-160.7);

	this.shape_1419 = new cjs.Shape();
	this.shape_1419.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgLQAKgKARAAQAFAAAHADQAHABADADIgHAJIgHgDIgKgCQgJAAgGAHQgHAIAAAMQAAANAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_1419.setTransform(-263.9,-159.7);

	this.shape_1420 = new cjs.Shape();
	this.shape_1420.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGADADQAEADAFAAIAAAMQgXAAAAgWg");
	this.shape_1420.setTransform(-273.1,-161.2);

	this.shape_1421 = new cjs.Shape();
	this.shape_1421.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgLQAKgKARAAQAFAAAHADQAHABADADIgHAJIgHgDIgKgCQgJAAgGAHQgHAIAAAMQAAANAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_1421.setTransform(-278.8,-159.7);

	this.shape_1422 = new cjs.Shape();
	this.shape_1422.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFAAAGgCIABALQgIACgJAAQgIAAgGgGg");
	this.shape_1422.setTransform(-289.2,-160.7);

	this.shape_1423 = new cjs.Shape();
	this.shape_1423.graphics.f("#FFFFFF").s().p("AAUAzIgagrIgPgBIAAAsIgNAAIAAhkIAKAAIAPgBQAjAAAAAdQAAAJgGAIQgGAGgIACIAdAvgAgVgkIAAAgIAKABQALAAAGgEQAFgEAAgKQAAgJgGgEQgFgDgNAAg");
	this.shape_1423.setTransform(-314.1,-161.1);

	this.instance_20 = new lib.smartObject_SY();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-172,-160,0.167,0.167);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape_363},{t:this.shape_362},{t:this.shape_361,p:{x:-46,y:-134.1}},{t:this.shape_360,p:{x:-39.3,y:-134.1}},{t:this.shape_359,p:{x:-28.5,y:-135}},{t:this.shape_358,p:{x:-22,y:-135.6}},{t:this.shape_357},{t:this.shape_356,p:{x:-11.4,y:-134.1}},{t:this.shape_355,p:{x:-0.7,y:-134.1}},{t:this.shape_354,p:{x:5.8,y:-134.1}},{t:this.shape_353,p:{x:15.7,y:-135}},{t:this.shape_352,p:{x:22.2,y:-135.6}},{t:this.shape_351,p:{x:29.8,y:-134.1}},{t:this.shape_350,p:{x:41.9,y:-135.5}},{t:this.shape_349,p:{x:49.3,y:-134.1}},{t:this.shape_348,p:{x:55.9,y:-135}},{t:this.shape_347,p:{x:61.4,y:-135}},{t:this.shape_346,p:{x:67.9,y:-134.1}},{t:this.shape_345,p:{x:77.4,y:-134.2}},{t:this.shape_344,p:{x:89.7,y:-135.5}},{t:this.shape_343,p:{x:95.2,y:-134.1}},{t:this.shape_342,p:{x:102.3,y:-132.7}},{t:this.shape_341,p:{x:109.6,y:-134.1}},{t:this.shape_340,p:{x:116.6,y:-134.2}},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337,p:{x:-47.6,y:-117.3}},{t:this.shape_336,p:{x:-42,y:-115.8}},{t:this.shape_335,p:{x:-34.4,y:-115.9}},{t:this.shape_334,p:{x:-27,y:-117.3}},{t:this.shape_333,p:{x:-21.1,y:-117.2}},{t:this.shape_332,p:{x:-15.1,y:-115.9}},{t:this.shape_331,p:{x:-7.8,y:-114.7}},{t:this.shape_330},{t:this.shape_329,p:{x:13.5,y:-115.8}},{t:this.shape_328,p:{x:20.9,y:-117.3}},{t:this.shape_327,p:{x:28.8,y:-115.8}},{t:this.shape_326,p:{x:35,y:-115.8}},{t:this.shape_325,p:{x:46.4,y:-117.1}},{t:this.shape_324,p:{x:54.6,y:-115.8}},{t:this.shape_323,p:{x:61.6,y:-115.9}},{t:this.shape_322,p:{x:69.5,y:-115.9}},{t:this.shape_321,p:{x:79,y:-115.8}},{t:this.shape_320,p:{x:85,y:-117.3}},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317,p:{x:-45.7,y:-99.1}},{t:this.shape_316,p:{x:-38.2,y:-97.6}},{t:this.shape_315,p:{x:-30.7,y:-97.7}},{t:this.shape_314,p:{x:-23.4,y:-96.4}},{t:this.shape_313,p:{x:-16.1,y:-97.6}},{t:this.shape_312,p:{x:-5.3,y:-98.5}},{t:this.shape_311,p:{x:1.2,y:-99.1}},{t:this.shape_310,p:{x:8.8,y:-97.6}},{t:this.shape_309,p:{x:20.6,y:-97.6}},{t:this.shape_308,p:{x:28.4,y:-96.2}},{t:this.shape_307,p:{x:35.7,y:-97.6}},{t:this.shape_306,p:{x:42.9,y:-97.6}},{t:this.shape_305,p:{x:48.1,y:-99}},{t:this.shape_304,p:{x:53.1,y:-98.5}},{t:this.shape_303,p:{x:59.3,y:-96.2}},{t:this.shape_302,p:{x:69.8,y:-98.5}},{t:this.shape_301,p:{x:76.2,y:-97.6}},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295,p:{x:-46,y:-24.2}},{t:this.shape_294,p:{x:-39.3,y:-24.2}},{t:this.shape_293,p:{x:-28.5,y:-25.1}},{t:this.shape_292,p:{x:-22,y:-25.7}},{t:this.shape_291,p:{x:-16.4,y:-25.6}},{t:this.shape_290,p:{x:-11.4,y:-24.2}},{t:this.shape_289,p:{x:-0.7,y:-24.2}},{t:this.shape_288,p:{x:5.8,y:-24.2}},{t:this.shape_287,p:{x:15.7,y:-25.1}},{t:this.shape_286,p:{x:22.2,y:-25.7}},{t:this.shape_285,p:{x:29.8,y:-24.2}},{t:this.shape_284,p:{x:40.6,y:-25.1}},{t:this.shape_283,p:{x:47.1,y:-25.7}},{t:this.shape_282,p:{x:54.7,y:-24.2}},{t:this.shape_281,p:{x:65.5,y:-24.2}},{t:this.shape_280,p:{x:72.2,y:-24.2}},{t:this.shape_279,p:{x:79.4,y:-24.2}},{t:this.shape_278},{t:this.shape_277,p:{x:94.2,y:-24.3}},{t:this.shape_276,p:{x:101.6,y:-25.6}},{t:this.shape_275,p:{x:112.2,y:-25.6}},{t:this.shape_274,p:{x:117.7,y:-24.2}},{t:this.shape_273,p:{x:124.8,y:-22.8}},{t:this.shape_272,p:{x:132.1,y:-24.2}},{t:this.shape_271,p:{x:139.1,y:-24.3}},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268,p:{x:-47.6,y:-7.4}},{t:this.shape_267,p:{x:-42,y:-5.9}},{t:this.shape_266,p:{x:-34.4,y:-6}},{t:this.shape_265,p:{x:-27,y:-7.4}},{t:this.shape_264,p:{x:-21.1,y:-7.3}},{t:this.shape_263,p:{x:-15.1,y:-6}},{t:this.shape_262,p:{x:-7.8,y:-4.8}},{t:this.shape_261},{t:this.shape_260,p:{x:13.5,y:-5.9}},{t:this.shape_259,p:{x:20.9,y:-7.4}},{t:this.shape_258,p:{x:28.8,y:-5.9}},{t:this.shape_257,p:{x:35,y:-5.9}},{t:this.shape_256},{t:this.shape_255,p:{x:54.7,y:-5.9}},{t:this.shape_254,p:{x:62,y:-5.9}},{t:this.shape_253,p:{x:69,y:-6}},{t:this.shape_252,p:{x:73.5,y:-7.4}},{t:this.shape_251,p:{x:78.9,y:-5.9}},{t:this.shape_250,p:{x:86.1,y:-4.5}},{t:this.shape_249},{t:this.shape_248,p:{x:-53.1,y:10.9}},{t:this.shape_247},{t:this.shape_246,p:{x:-37,y:12.3}},{t:this.shape_245,p:{x:-29.9,y:12.3}},{t:this.shape_244,p:{x:-24.6,y:10.9}},{t:this.shape_243,p:{x:-19.6,y:11.4}},{t:this.shape_242,p:{x:-13.5,y:13.7}},{t:this.shape_241},{t:this.shape_240,p:{x:2.9,y:12.3}},{t:this.shape_239},{t:this.shape_238,p:{x:18.5,y:13.7}},{t:this.shape_237,p:{x:25.4,y:12.2}},{t:this.shape_236,p:{x:31.3,y:12.3}},{t:this.shape_235},{t:this.shape_234,p:{x:44.4,y:15.1}},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.instance_7},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228,p:{x:-46,y:89.2}},{t:this.shape_227,p:{x:-39.3,y:89.2}},{t:this.shape_226,p:{x:-28.5,y:88.2}},{t:this.shape_225,p:{x:-22,y:87.7}},{t:this.shape_224,p:{x:-16.4,y:87.8}},{t:this.shape_223,p:{x:-11.4,y:89.2}},{t:this.shape_222,p:{x:-0.7,y:89.2}},{t:this.shape_221,p:{x:5.8,y:89.2}},{t:this.shape_220,p:{x:15.7,y:88.2}},{t:this.shape_219,p:{x:22.2,y:87.7}},{t:this.shape_218,p:{x:29.8,y:89.2}},{t:this.shape_217,p:{x:40.6,y:88.2}},{t:this.shape_216,p:{x:47.1,y:87.7}},{t:this.shape_215,p:{x:54.7,y:89.2}},{t:this.shape_214,p:{x:65.6,y:88.2}},{t:this.shape_213,p:{x:72.1,y:87.7}},{t:this.shape_212},{t:this.shape_211,p:{x:83.1,y:89.1}},{t:this.shape_210,p:{x:88.9,y:87.7}},{t:this.shape_209,p:{x:99.5,y:87.7}},{t:this.shape_208,p:{x:104.9,y:89.2}},{t:this.shape_207,p:{x:112.1,y:90.6}},{t:this.shape_206,p:{x:119.3,y:89.2}},{t:this.shape_205,p:{x:126.4,y:89.1}},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202,p:{x:-47.6,y:106}},{t:this.shape_201,p:{x:-42,y:107.4}},{t:this.shape_200,p:{x:-34.4,y:107.3}},{t:this.shape_199,p:{x:-27,y:106}},{t:this.shape_198,p:{x:-21.1,y:106}},{t:this.shape_197,p:{x:-15.1,y:107.3}},{t:this.shape_196,p:{x:-7.8,y:108.6}},{t:this.shape_195},{t:this.shape_194,p:{x:13.5,y:107.4}},{t:this.shape_193,p:{x:20.9,y:106}},{t:this.shape_192,p:{x:28.8,y:107.4}},{t:this.shape_191,p:{x:35,y:107.4}},{t:this.shape_190},{t:this.shape_189,p:{x:54.7,y:107.4}},{t:this.shape_188,p:{x:61.7,y:107.3}},{t:this.shape_187,p:{x:67.5,y:106}},{t:this.shape_186},{t:this.shape_185,p:{x:84.6,y:106}},{t:this.shape_184,p:{x:90.3,y:108.6}},{t:this.shape_183,p:{x:97.6,y:105.9}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180,p:{x:-53.1,y:124.3}},{t:this.shape_179,p:{x:-44.3,y:127}},{t:this.shape_178,p:{x:-37,y:125.7}},{t:this.shape_177,p:{x:-29.9,y:125.7}},{t:this.shape_176,p:{x:-24.6,y:124.3}},{t:this.shape_175,p:{x:-19.6,y:124.7}},{t:this.shape_174,p:{x:-13.5,y:127.1}},{t:this.shape_173},{t:this.shape_172,p:{x:2.9,y:125.7}},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169,p:{x:25.4,y:125.6}},{t:this.shape_168,p:{x:31.3,y:125.7}},{t:this.shape_167,p:{x:38.5,y:125.7}},{t:this.shape_166,p:{x:44.4,y:128.4}},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_9},{t:this.shape_547},{t:this.shape_546,p:{x:-300,y:-161.7}},{t:this.shape_545,p:{x:-290.3,y:-161.9}},{t:this.shape_544,p:{x:-282.7,y:-160.4}},{t:this.shape_543,p:{x:-275.1,y:-160.5}},{t:this.shape_542,p:{x:-261.2,y:-161.3}},{t:this.shape_541,p:{x:-254.7,y:-161.9}},{t:this.shape_540,p:{x:-247.1,y:-160.4}},{t:this.shape_539,p:{x:-234.3,y:-161.8}},{t:this.shape_538,p:{x:-226.4,y:-160.5}},{t:this.shape_537,p:{x:-216.9,y:-160.4}},{t:this.shape_331,p:{x:-209.7,y:-159.2}},{t:this.shape_536,p:{x:-202.4,y:-160.4}},{t:this.shape_535,p:{x:-189.6,y:-161.8}},{t:this.shape_534,p:{x:-184.7,y:-160.4}},{t:this.shape_533},{t:this.shape_532,p:{x:-164.9,y:-160.5}},{t:this.shape_531},{t:this.shape_329,p:{x:-147.6,y:-160.4}},{t:this.shape_530,p:{x:-140.6,y:-160.5}},{t:this.shape_529,p:{x:-135.6,y:-161.3}},{t:this.shape_336,p:{x:-129.1,y:-160.4}},{t:this.shape_259,p:{x:-121.6,y:-161.8}},{t:this.shape_528,p:{x:-115.2,y:-156.4}},{t:this.shape_527},{t:this.shape_526,p:{x:-87.1,y:-161.9}},{t:this.shape_525,p:{x:-79.5,y:-160.4}},{t:this.shape_524,p:{x:-72.9,y:-161.3}},{t:this.shape_324,p:{x:-66.5,y:-160.4}},{t:this.shape_523,p:{x:-59.9,y:-160.4}},{t:this.shape_522,p:{x:-53.3,y:-161.9}},{t:this.shape_521,p:{x:-45.7,y:-160.4}},{t:this.shape_520,p:{x:-37.9,y:-159}},{t:this.shape_519,p:{x:-24.2,y:-160.4}},{t:this.shape_518,p:{x:-17.6,y:-161.9}},{t:this.shape_517,p:{x:-10,y:-160.4}},{t:this.shape_516,p:{x:-2.5,y:-160.3}},{t:this.shape_515,p:{x:3.6,y:-161.8}},{t:this.shape_210,p:{x:9.1,y:-161.8}},{t:this.shape_514,p:{x:24,y:-160.4}},{t:this.shape_513,p:{x:31.5,y:-160.3}},{t:this.shape_512,p:{x:38.2,y:-161.3}},{t:this.shape_511,p:{x:44.6,y:-160.4}},{t:this.shape_510,p:{x:54.2,y:-160.5}},{t:this.shape_509,p:{x:63.6,y:-160.4}},{t:this.shape_508,p:{x:70.2,y:-161.3}},{t:this.shape_507,p:{x:74.7,y:-161.8}},{t:this.shape_506,p:{x:80.3,y:-160.4}},{t:this.shape_505,p:{x:87.4,y:-160.4}},{t:this.shape_504,p:{x:93.4,y:-161.8}},{t:this.shape_503,p:{x:97.5,y:-161.8}},{t:this.shape_242,p:{x:102.7,y:-159}},{t:this.shape_502,p:{x:116.8,y:-160.4}},{t:this.shape_501,p:{x:124,y:-160.4}},{t:this.shape_500,p:{x:131.6,y:-160.5}},{t:this.shape_255,p:{x:138.8,y:-160.3}},{t:this.shape_327,p:{x:146,y:-160.4}},{t:this.shape_499},{t:this.shape_498,p:{x:158.1,y:-161.3}},{t:this.shape_497},{t:this.shape_496,p:{x:174.8,y:-161.3}},{t:this.shape_495},{t:this.shape_494,p:{x:192.4,y:-160.5}},{t:this.shape_493,p:{x:199.1,y:-161.3}},{t:this.shape_492,p:{x:205.5,y:-160.4}},{t:this.shape_321,p:{x:220.1,y:-160.4}},{t:this.shape_491,p:{x:-315.5,y:-142.1}},{t:this.shape_490,p:{x:-306.8,y:-142.2}},{t:this.shape_489,p:{x:-297.4,y:-142.1}},{t:this.shape_488,p:{x:-290.4,y:-142.2}},{t:this.shape_487,p:{x:-285.4,y:-143.1}},{t:this.shape_486,p:{x:-274.2,y:-142.1}},{t:this.shape_350,p:{x:-266.4,y:-143.6}},{t:this.shape_485,p:{x:-260.8,y:-142.1}},{t:this.shape_484,p:{x:-253.8,y:-142.1}},{t:this.shape_306,p:{x:-246.6,y:-142.1}},{t:this.shape_312,p:{x:-240.3,y:-143.1}},{t:this.shape_166,p:{x:-235.2,y:-139.4}},{t:this.shape_483,p:{x:-225,y:-142.1}},{t:this.shape_482,p:{x:-218.5,y:-143.6}},{t:this.shape_481,p:{x:-208.1,y:-143.6}},{t:this.shape_480,p:{x:-202.7,y:-142.1}},{t:this.shape_479,p:{x:-195.5,y:-140.7}},{t:this.shape_313,p:{x:-188.3,y:-142.1}},{t:this.shape_478,p:{x:-181.2,y:-142.2}},{t:this.shape_477,p:{x:-170.2,y:-143.6}},{t:this.shape_310,p:{x:-162.8,y:-142.1}},{t:this.shape_476},{t:this.shape_475,p:{x:-148.3,y:-142.1}},{t:this.shape_474,p:{x:-138.8,y:-142.2}},{t:this.shape_227,p:{x:-129.2,y:-142.1}},{t:this.shape_228,p:{x:-122.6,y:-142.1}},{t:this.shape_316,p:{x:-111.3,y:-142.1}},{t:this.shape_223,p:{x:-100.1,y:-142.1}},{t:this.shape_473,p:{x:-91.4,y:-142.2}},{t:this.shape_307,p:{x:-82,y:-142.1}},{t:this.shape_472,p:{x:-75,y:-142.2}},{t:this.shape_304,p:{x:-70,y:-143.1}},{t:this.shape_471,p:{x:-58.8,y:-142.1}},{t:this.shape_470,p:{x:-51,y:-143.6}},{t:this.shape_469,p:{x:-45.4,y:-142.1}},{t:this.shape_218,p:{x:-38.4,y:-142.1}},{t:this.shape_468,p:{x:-31.2,y:-142.1}},{t:this.shape_302,p:{x:-24.9,y:-143.1}},{t:this.shape_467,p:{x:-13.3,y:-143.6}},{t:this.shape_342,p:{x:-6.2,y:-140.7}},{t:this.shape_221,p:{x:4.8,y:-142.1}},{t:this.shape_213,p:{x:11.4,y:-143.6}},{t:this.shape_466,p:{x:19,y:-142.1}},{t:this.shape_465},{t:this.shape_224,p:{x:34.9,y:-143.5}},{t:this.shape_335,p:{x:40.9,y:-142.2}},{t:this.shape_314,p:{x:48.2,y:-141}},{t:this.shape_222,p:{x:60.1,y:-142.1}},{t:this.shape_464,p:{x:70.8,y:-143.6}},{t:this.shape_463,p:{x:74.4,y:-143.5}},{t:this.shape_226,p:{x:79.4,y:-143.1}},{t:this.shape_220,p:{x:85,y:-143.1}},{t:this.shape_462,p:{x:90,y:-143.6}},{t:this.shape_215,p:{x:95.6,y:-142.1}},{t:this.shape_461},{t:this.shape_199,p:{x:112.3,y:-143.6}},{t:this.shape_460,p:{x:120.1,y:-142.1}},{t:this.shape_459,p:{x:127.3,y:-142.1}},{t:this.shape_458,p:{x:134.6,y:-142.1}},{t:this.shape_457,p:{x:144.2,y:-142.2}},{t:this.shape_206,p:{x:153.8,y:-142.1}},{t:this.shape_332,p:{x:161.4,y:-142.2}},{t:this.shape_217,p:{x:168,y:-143.1}},{t:this.shape_456,p:{x:173,y:-147.2}},{t:this.shape_305,p:{x:181.8,y:-143.5}},{t:this.shape_455,p:{x:187.4,y:-142.1}},{t:this.shape_301,p:{x:194.6,y:-142.1}},{t:this.shape_315,p:{x:202.1,y:-142.2}},{t:this.shape_208,p:{x:214.3,y:-142.1}},{t:this.shape_214,p:{x:220.9,y:-143.1}},{t:this.shape_454,p:{x:-315.4,y:-124.8}},{t:this.shape_453},{t:this.shape_452,p:{x:-301.3,y:-123.9}},{t:this.shape_451,p:{x:-289.2,y:-125.3}},{t:this.shape_450,p:{x:-281.8,y:-123.9}},{t:this.shape_449,p:{x:-275.2,y:-124.8}},{t:this.shape_448,p:{x:-269.7,y:-124.8}},{t:this.shape_447},{t:this.shape_345,p:{x:-253.7,y:-124}},{t:this.shape_446,p:{x:-240.4,y:-124}},{t:this.shape_445},{t:this.shape_262,p:{x:-230.8,y:-122.7}},{t:this.shape_444,p:{x:-223.5,y:-125.4}},{t:this.shape_443,p:{x:-216.9,y:-124.8}},{t:this.shape_442,p:{x:-206.5,y:-123.9}},{t:this.shape_194,p:{x:-199.3,y:-123.9}},{t:this.shape_237,p:{x:-192.3,y:-124}},{t:this.shape_277,p:{x:-186.4,y:-124}},{t:this.shape_441,p:{x:-178.8,y:-123.9}},{t:this.shape_211,p:{x:-171.7,y:-124}},{t:this.shape_440,p:{x:-161.6,y:-123.9}},{t:this.shape_439},{t:this.shape_438,p:{x:-145.1,y:-122.5}},{t:this.shape_437,p:{x:-137.9,y:-123.9}},{t:this.shape_436,p:{x:-130.3,y:-123.8}},{t:this.shape_323,p:{x:-123.3,y:-124}},{t:this.shape_252,p:{x:-114.6,y:-125.3}},{t:this.shape_435,p:{x:-109.2,y:-123.9}},{t:this.shape_207,p:{x:-102,y:-122.5}},{t:this.shape_434,p:{x:-94.8,y:-123.9}},{t:this.shape_205,p:{x:-87.7,y:-124}},{t:this.shape_433,p:{x:-78.5,y:-124.8}},{t:this.shape_432,p:{x:-72,y:-125.4}},{t:this.shape_431,p:{x:-64.4,y:-123.8}},{t:this.shape_430,p:{x:-54.8,y:-124}},{t:this.shape_429,p:{x:-44.9,y:-125.3}},{t:this.shape_266,p:{x:-37.5,y:-124}},{t:this.shape_189,p:{x:-30,y:-123.9}},{t:this.shape_428,p:{x:-24.5,y:-125.3}},{t:this.shape_427,p:{x:-20.1,y:-125.3}},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424,p:{x:5.3,y:-123.9}},{t:this.shape_423,p:{x:12,y:-125.4}},{t:this.shape_422,p:{x:19.5,y:-123.9}},{t:this.shape_421,p:{x:28.5,y:-123.8}},{t:this.shape_263,p:{x:37.5,y:-124}},{t:this.shape_420,p:{x:47.3,y:-125.3}},{t:this.shape_200,p:{x:53.2,y:-124}},{t:this.shape_419,p:{x:64.1,y:-124.8}},{t:this.shape_418,p:{x:70.6,y:-125.4}},{t:this.shape_417,p:{x:78.2,y:-123.9}},{t:this.shape_416},{t:this.shape_415,p:{x:93.1,y:-125.3}},{t:this.shape_196,p:{x:98.8,y:-122.7}},{t:this.shape_414,p:{x:106.1,y:-123.8}},{t:this.shape_413,p:{x:113.1,y:-124}},{t:this.shape_201,p:{x:119.1,y:-123.9}},{t:this.shape_412,p:{x:131.2,y:-125.3}},{t:this.shape_192,p:{x:138.6,y:-123.9}},{t:this.shape_344,p:{x:144.7,y:-125.3}},{t:this.shape_411,p:{x:150.3,y:-123.9}},{t:this.shape_410},{t:this.shape_409,p:{x:167.2,y:-123.8}},{t:this.shape_408,p:{x:-315.7,y:-13.2}},{t:this.shape_407,p:{x:-307.2,y:-14.2}},{t:this.shape_406},{t:this.shape_405,p:{x:-292.2,y:-11.4}},{t:this.shape_404,p:{x:-285,y:-12.8}},{t:this.shape_403,p:{x:-277.5,y:-12.8}},{t:this.shape_402,p:{x:-266.6,y:-13.8}},{t:this.shape_401,p:{x:-260.7,y:-12.9}},{t:this.shape_273,p:{x:-255.1,y:-11.4}},{t:this.shape_400,p:{x:-244.6,y:-13.8}},{t:this.shape_399,p:{x:-238.1,y:-12.8}},{t:this.shape_398,p:{x:-226.4,y:-12.8}},{t:this.shape_193,p:{x:-218.9,y:-14.3}},{t:this.shape_397,p:{x:-213,y:-14.2}},{t:this.shape_396,p:{x:-208,y:-13.8}},{t:this.shape_395,p:{x:-198.3,y:-13.8}},{t:this.shape_394,p:{x:-191.8,y:-14.3}},{t:this.shape_393,p:{x:-184.2,y:-12.8}},{t:this.shape_392,p:{x:-173.4,y:-12.8}},{t:this.shape_391,p:{x:-164.7,y:-12.9}},{t:this.shape_390,p:{x:-155.3,y:-12.8}},{t:this.shape_169,p:{x:-148.3,y:-12.9}},{t:this.shape_389,p:{x:-143.3,y:-13.8}},{t:this.shape_388,p:{x:-132.7,y:-12.8}},{t:this.shape_387,p:{x:-124.8,y:-14.3}},{t:this.shape_386,p:{x:-119.3,y:-12.8}},{t:this.shape_385,p:{x:-112.3,y:-12.8}},{t:this.shape_384,p:{x:-105,y:-12.8}},{t:this.shape_293,p:{x:-98.7,y:-13.8}},{t:this.shape_187,p:{x:-88.2,y:-14.3}},{t:this.shape_383},{t:this.shape_382,p:{x:-76.9,y:-12.9}},{t:this.shape_381,p:{x:-70.9,y:-12.8}},{t:this.shape_380,p:{x:-63.7,y:-12.8}},{t:this.shape_287,p:{x:-57.4,y:-13.8}},{t:this.shape_275,p:{x:-52.4,y:-14.3}},{t:this.shape_174,p:{x:-47.1,y:-11.4}},{t:this.shape_379},{t:this.shape_378,p:{x:-26.7,y:-11.4}},{t:this.shape_377,p:{x:-19.5,y:-12.8}},{t:this.shape_376,p:{x:-12,y:-12.8}},{t:this.shape_375},{t:this.shape_374},{t:this.shape_202,p:{x:12.7,y:-14.3}},{t:this.shape_209,p:{x:16.8,y:-14.3}},{t:this.shape_184,p:{x:26.3,y:-11.7}},{t:this.shape_373,p:{x:33.6,y:-12.8}},{t:this.shape_284,p:{x:40.2,y:-13.8}},{t:this.shape_372,p:{x:50.8,y:-12.8}},{t:this.shape_197,p:{x:58.3,y:-12.9}},{t:this.shape_371,p:{x:70.1,y:-12.8}},{t:this.shape_271,p:{x:77.1,y:-12.9}},{t:this.shape_253,p:{x:82.5,y:-12.9}},{t:this.shape_168,p:{x:88.4,y:-12.8}},{t:this.shape_188,p:{x:95.4,y:-12.9}},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368,p:{x:113.8,y:-14.3}},{t:this.shape_367,p:{x:120.7,y:-12.8}},{t:this.shape_175,p:{x:131.5,y:-13.8}},{t:this.shape_183,p:{x:138,y:-14.3}},{t:this.shape_366},{t:this.shape_365,p:{x:148.6,y:-12.8}},{t:this.shape_364,p:{x:153.8,y:-12.8}},{t:this.instance_8}]},1).to({state:[{t:this.shape_715,p:{y:-151.7}},{t:this.shape_714,p:{x:-316.7,y:-152.7}},{t:this.shape_713,p:{x:-311,y:-151.4}},{t:this.shape_712,p:{x:-304.4,y:-151.3}},{t:this.shape_711,p:{x:-298.7,y:-152.3}},{t:this.shape_710,p:{x:-292.2,y:-151.3}},{t:this.shape_709,p:{x:-284.8,y:-151.3}},{t:this.shape_708,p:{x:-277.4,y:-152.8}},{t:this.shape_707,p:{x:-271,y:-147.4}},{t:this.shape_342,p:{x:-260.6,y:-149.9}},{t:this.shape_411,p:{x:-253.4,y:-151.3}},{t:this.shape_706,p:{x:-245.8,y:-151.3}},{t:this.shape_705,p:{x:-234.4,y:-151.3}},{t:this.shape_704,p:{x:-227.3,y:-151.3}},{t:this.shape_703,p:{x:-219.8,y:-151.4}},{t:this.shape_702,p:{x:-208,y:-151.3}},{t:this.shape_701,p:{x:-201.4,y:-151.3}},{t:this.shape_452,p:{x:-194.7,y:-151.3}},{t:this.shape_700,p:{x:-184.5,y:-156.4}},{t:this.shape_699},{t:this.shape_698,p:{x:-169,y:-151.3}},{t:this.shape_697,p:{x:-163.4,y:-152.7}},{t:this.shape_696,p:{x:-157.8,y:-151.3}},{t:this.shape_695,p:{x:-150.4,y:-152.8}},{t:this.shape_694},{t:this.shape_441,p:{x:-132.6,y:-151.3}},{t:this.shape_693,p:{x:-126.5,y:-152.8}},{t:this.shape_434,p:{x:-120.9,y:-151.3}},{t:this.shape_692,p:{x:-113.6,y:-151.3}},{t:this.shape_454,p:{x:-107.3,y:-152.3}},{t:this.shape_428,p:{x:-102.8,y:-152.7}},{t:this.shape_437,p:{x:-96.9,y:-151.3}},{t:this.shape_691,p:{x:-89.4,y:-151.4}},{t:this.shape_690,p:{x:-77.6,y:-152.7}},{t:this.shape_194,p:{x:-71.5,y:-151.3}},{t:this.shape_450,p:{x:-64,y:-151.3}},{t:this.shape_202,p:{x:-58,y:-152.8}},{t:this.shape_456,p:{x:-53.9,y:-156.4}},{t:this.shape_449,p:{x:-44.6,y:-152.3}},{t:this.shape_689,p:{x:-38.2,y:-151.3}},{t:this.shape_417,p:{x:-26.4,y:-151.3}},{t:this.shape_688,p:{x:-19,y:-152.8}},{t:this.shape_415,p:{x:-13.1,y:-152.7}},{t:this.shape_448,p:{x:-8.1,y:-152.3}},{t:this.shape_443,p:{x:1.7,y:-152.3}},{t:this.shape_183,p:{x:8.2,y:-152.8}},{t:this.shape_201,p:{x:15.8,y:-151.3}},{t:this.shape_424,p:{x:26.6,y:-151.3}},{t:this.shape_345,p:{x:35.2,y:-151.4}},{t:this.shape_435,p:{x:44.7,y:-151.3}},{t:this.shape_446,p:{x:51.6,y:-151.4}},{t:this.shape_433,p:{x:56.6,y:-152.3}},{t:this.shape_687,p:{x:67.3,y:-151.3}},{t:this.shape_470,p:{x:75.1,y:-152.8}},{t:this.shape_686,p:{x:80.7,y:-151.3}},{t:this.shape_192,p:{x:87.7,y:-151.3}},{t:this.shape_442,p:{x:94.9,y:-151.3}},{t:this.shape_419,p:{x:101.2,y:-152.3}},{t:this.shape_685,p:{x:106.3,y:-148.6}},{t:this.shape_684,p:{y:-115.2}},{t:this.shape_683,p:{x:-314.2,y:-116.3}},{t:this.shape_682,p:{x:-307.8,y:-116.3}},{t:this.shape_681},{t:this.shape_680,p:{x:-296.6,y:-114.8}},{t:this.shape_679,p:{x:-289.6,y:-114.9}},{t:this.shape_678,p:{x:-283.6,y:-114.9}},{t:this.shape_677,p:{x:-276.2,y:-114.8}},{t:this.shape_676},{t:this.shape_675,p:{x:-265.1,y:-116.2}},{t:this.shape_674,p:{x:-259.6,y:-114.8}},{t:this.shape_673,p:{x:-252.3,y:-114.8}},{t:this.shape_515,p:{x:-246.2,y:-116.3}},{t:this.shape_479,p:{x:-241,y:-113.4}},{t:this.shape_672},{t:this.shape_273,p:{x:-225.4,y:-113.4}},{t:this.shape_671},{t:this.shape_670,p:{x:-210.6,y:-114.8}},{t:this.shape_490,p:{x:-195.7,y:-114.9}},{t:this.shape_669,p:{x:-186.2,y:-114.8}},{t:this.shape_207,p:{x:-179.1,y:-113.4}},{t:this.shape_668,p:{x:-166.6,y:-116.3}},{t:this.shape_667,p:{x:-158.8,y:-114.8}},{t:this.shape_666,p:{x:-151.2,y:-114.8}},{t:this.shape_665,p:{x:-143.3,y:-116.3}},{t:this.shape_664,p:{x:-137.4,y:-116.3}},{t:this.shape_663,p:{x:-131.8,y:-114.8}},{t:this.shape_662,p:{x:-119.2,y:-114.8}},{t:this.shape_661,p:{x:-113.4,y:-116.3}},{t:this.shape_660,p:{x:-109.8,y:-116.2}},{t:this.shape_659,p:{x:-104.2,y:-114.8}},{t:this.shape_658,p:{x:-96.8,y:-116.3}},{t:this.shape_657},{t:this.shape_656,p:{x:-79.1,y:-114.8}},{t:this.shape_655,p:{x:-66.2,y:-114.8}},{t:this.shape_543,p:{x:-58.6,y:-114.9}},{t:this.shape_654,p:{x:-51.9,y:-115.8}},{t:this.shape_653,p:{x:-45.4,y:-114.8}},{t:this.shape_401,p:{x:-38.4,y:-114.9}},{t:this.shape_652,p:{x:-28,y:-115.8}},{t:this.shape_651,p:{x:-21.5,y:-116.3}},{t:this.shape_650,p:{x:-13.9,y:-114.8}},{t:this.shape_649,p:{x:-2,y:-114.8}},{t:this.shape_648,p:{x:6.7,y:-114.9}},{t:this.shape_647,p:{x:16.1,y:-114.8}},{t:this.shape_478,p:{x:23.1,y:-114.9}},{t:this.shape_646,p:{x:28.1,y:-115.8}},{t:this.shape_645,p:{x:39.9,y:-114.8}},{t:this.shape_644,p:{x:47.7,y:-116.3}},{t:this.shape_643,p:{x:53.3,y:-114.8}},{t:this.shape_267,p:{x:60.3,y:-114.8}},{t:this.shape_642,p:{x:67.5,y:-114.8}},{t:this.shape_641,p:{x:73.8,y:-115.8}},{t:this.shape_640,p:{x:84.1,y:-119.9}},{t:this.shape_639,p:{x:89.8,y:-114.8}},{t:this.shape_638,p:{x:97,y:-114.8}},{t:this.shape_500,p:{x:104.6,y:-114.9}},{t:this.shape_637,p:{x:111.2,y:-115.8}},{t:this.shape_636,p:{x:117.6,y:-114.8}},{t:this.shape_635},{t:this.shape_494,p:{x:129,y:-114.9}},{t:this.shape_258,p:{x:136.6,y:-114.8}},{t:this.shape_472,p:{x:143.7,y:-114.9}},{t:this.shape_634,p:{x:148.1,y:-119.9}},{t:this.shape_251,p:{x:159.3,y:-114.8}},{t:this.shape_335,p:{x:166.8,y:-114.9}},{t:this.shape_334,p:{x:174.3,y:-116.3}},{t:this.shape_328,p:{x:187.4,y:-116.3}},{t:this.shape_633,p:{x:193.3,y:-116.2}},{t:this.shape_632,p:{x:198.7,y:-114.9}},{t:this.shape_254,p:{x:204.6,y:-114.8}},{t:this.shape_631,p:{x:211.9,y:-114.8}},{t:this.shape_630,p:{x:218.2,y:-115.8}},{t:this.shape_629,p:{x:223.2,y:-116.3}},{t:this.shape_378,p:{x:228.4,y:-113.4}},{t:this.shape_628,p:{x:-324.2,y:-96.6}},{t:this.shape_276,p:{x:-316.7,y:-98}},{t:this.shape_244,p:{x:-310.8,y:-98}},{t:this.shape_627,p:{x:-305.8,y:-97.5}},{t:this.shape_626,p:{x:-296.1,y:-97.5}},{t:this.shape_625,p:{x:-289.6,y:-98.1}},{t:this.shape_624,p:{x:-282,y:-96.6}},{t:this.shape_623,p:{x:-272.2,y:-98}},{t:this.shape_473,p:{x:-264.2,y:-96.7}},{t:this.shape_246,p:{x:-254.8,y:-96.6}},{t:this.shape_262,p:{x:-247.5,y:-95.4}},{t:this.shape_622,p:{x:-240.3,y:-96.6}},{t:this.shape_621,p:{x:-228.5,y:-96.6}},{t:this.shape_474,p:{x:-218.9,y:-96.7}},{t:this.shape_620},{t:this.shape_619,p:{x:-201.5,y:-96.6}},{t:this.shape_265,p:{x:-194.1,y:-98}},{t:this.shape_259,p:{x:-186.3,y:-98}},{t:this.shape_618,p:{x:-178.4,y:-96.6}},{t:this.shape_210,p:{x:-171,y:-98}},{t:this.shape_617,p:{x:-160.9,y:-98}},{t:this.shape_332,p:{x:-154.9,y:-96.7}},{t:this.shape_616,p:{x:-144.1,y:-97.5}},{t:this.shape_615,p:{x:-137.6,y:-98.1}},{t:this.shape_614,p:{x:-130,y:-96.6}},{t:this.shape_613,p:{x:-119.2,y:-96.6}},{t:this.shape_457,p:{x:-110.5,y:-96.7}},{t:this.shape_240,p:{x:-101.1,y:-96.6}},{t:this.shape_323,p:{x:-94.1,y:-96.7}},{t:this.shape_612,p:{x:-89.1,y:-97.5}},{t:this.shape_611,p:{x:-78.5,y:-96.6}},{t:this.shape_350,p:{x:-70.6,y:-98}},{t:this.shape_485,p:{x:-65.1,y:-96.6}},{t:this.shape_610,p:{x:-58.1,y:-96.6}},{t:this.shape_609,p:{x:-50.8,y:-96.6}},{t:this.shape_243,p:{x:-44.5,y:-97.5}},{t:this.shape_234,p:{x:-39.4,y:-93.8}},{t:this.shape_608,p:{y:-60.5,x:-325.4}},{t:this.shape_607,p:{x:-312.6,y:-61.5}},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603,p:{x:-279.5,y:-60}},{t:this.shape_602},{t:this.shape_429,p:{x:-258.7,y:-61.5}},{t:this.shape_390,p:{x:-251.4,y:-60.1}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_196,p:{x:-230.2,y:-58.9}},{t:this.shape_211,p:{x:-223.5,y:-60.2}},{t:this.shape_599,p:{x:-217.6,y:-60.1}},{t:this.shape_516,p:{x:-210,y:-60}},{t:this.shape_315,p:{x:-202.4,y:-60.2}},{t:this.shape_199,p:{x:-195,y:-61.5}},{t:this.shape_364,p:{x:-188.5,y:-60.1}},{t:this.shape_598},{t:this.shape_513,p:{x:-166.8,y:-60}},{t:this.shape_597},{t:this.shape_596},{t:this.shape_368,p:{x:-148.2,y:-61.6}},{t:this.shape_595},{t:this.shape_594},{t:this.shape_209,p:{x:-122.8,y:-61.5}},{t:this.shape_593},{t:this.shape_592},{t:this.shape_293,p:{x:-103.7,y:-61}},{t:this.shape_397,p:{x:-99.2,y:-61.5}},{t:this.shape_591,p:{x:-93.3,y:-60.1}},{t:this.shape_277,p:{x:-85.7,y:-60.2}},{t:this.shape_590,p:{x:-72.4,y:-61.4}},{t:this.shape_168,p:{x:-66.4,y:-60.1}},{t:this.shape_388,p:{x:-58.9,y:-60.1}},{t:this.shape_427,p:{x:-52.8,y:-61.5}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587,p:{x:-23.9,y:-61.5}},{t:this.shape_586},{t:this.shape_344,p:{x:-10.6,y:-61.5}},{t:this.shape_398,p:{x:-5,y:-60.1}},{t:this.shape_585},{t:this.shape_287,p:{x:8.5,y:-61}},{t:this.shape_584,p:{x:20.3,y:-61.5}},{t:this.shape_458,p:{x:27.4,y:-60}},{t:this.shape_412,p:{x:35.3,y:-61.5}},{t:this.shape_469,p:{x:40.9,y:-60.1}},{t:this.shape_393,p:{x:47.9,y:-60.1}},{t:this.shape_384,p:{x:55.1,y:-60.1}},{t:this.shape_284,p:{x:61.4,y:-61}},{t:this.shape_583,p:{x:72.4,y:-60.5}},{t:this.shape_582},{t:this.shape_581,p:{x:91.3,y:-61.5}},{t:this.shape_385,p:{x:98.4,y:-60.1}},{t:this.shape_580},{t:this.shape_381,p:{x:110.1,y:-60.1}},{t:this.shape_380,p:{x:117.4,y:-60.1}},{t:this.shape_175,p:{x:123.7,y:-61}},{t:this.shape_579},{t:this.shape_266,p:{x:139.8,y:-60.2}},{t:this.shape_578,p:{x:147,y:-60}},{t:this.shape_373,p:{x:154.3,y:-60.1}},{t:this.shape_577,p:{x:161.3,y:-60.2}},{t:this.shape_392,p:{x:166.3,y:-60.1}},{t:this.shape_371,p:{x:172.9,y:-60.1}},{t:this.shape_576,p:{x:185,y:-60.5}},{t:this.shape_575},{t:this.shape_504,p:{x:202.8,y:-61.5}},{t:this.shape_372,p:{x:208.3,y:-60.1}},{t:this.shape_303,p:{x:215.4,y:-58.7}},{t:this.shape_367,p:{x:222.7,y:-60.1}},{t:this.shape_574,p:{x:229.7,y:-60.2}},{t:this.shape_255,p:{x:-324.6,y:-41.8}},{t:this.shape_573},{t:this.shape_343,p:{x:-313.5,y:-41.8}},{t:this.shape_572,p:{x:-302.2,y:-41.8}},{t:this.shape_436,p:{x:-294.9,y:-41.8}},{t:this.shape_347,p:{x:-288.3,y:-42.8}},{t:this.shape_571},{t:this.shape_570,p:{x:-316.3,y:-6.7}},{t:this.shape_569},{t:this.shape_568,p:{x:-301.1,y:-3.9}},{t:this.shape_567},{t:this.shape_431,p:{x:-286.4,y:-5.3}},{t:this.shape_489,p:{x:-274.3,y:-5.3}},{t:this.shape_566,p:{x:-267.3,y:-5.4}},{t:this.shape_565,p:{x:-261.4,y:-5.3}},{t:this.shape_193,p:{x:-249.3,y:-6.8}},{t:this.shape_236,p:{x:-241.4,y:-5.3}},{t:this.shape_564},{t:this.shape_263,p:{x:-229.9,y:-5.4}},{t:this.shape_184,p:{x:-222.6,y:-4.2}},{t:this.shape_312,p:{x:-211.6,y:-6.3}},{t:this.shape_216,p:{x:-205.1,y:-6.8}},{t:this.shape_563,p:{x:-197.5,y:-5.3}},{t:this.shape_491,p:{x:-186.3,y:-5.3}},{t:this.shape_304,p:{x:-180.6,y:-6.3}},{t:this.shape_562,p:{x:-174.1,y:-5.3}},{t:this.shape_561},{t:this.shape_480,p:{x:-154.2,y:-5.3}},{t:this.shape_387,p:{x:-146.4,y:-6.8}},{t:this.shape_560,p:{x:-139,y:-5.3}},{t:this.shape_559,p:{x:-131.9,y:-5.3}},{t:this.shape_484,p:{x:-124.6,y:-5.3}},{t:this.shape_558},{t:this.shape_200,p:{x:-108.4,y:-5.4}},{t:this.shape_228,p:{x:-101.8,y:-5.3}},{t:this.shape_557,p:{x:-97.2,y:-6.7}},{t:this.shape_187,p:{x:-91.4,y:-6.8}},{t:this.shape_313,p:{x:-83.5,y:-5.3}},{t:this.shape_302,p:{x:-72.2,y:-6.3}},{t:this.shape_213,p:{x:-65.7,y:-6.8}},{t:this.shape_310,p:{x:-58.1,y:-5.3}},{t:this.shape_223,p:{x:-46.8,y:-5.3}},{t:this.shape_430,p:{x:-38.2,y:-5.4}},{t:this.shape_316,p:{x:-28.7,y:-5.3}},{t:this.shape_169,p:{x:-21.8,y:-5.4}},{t:this.shape_226,p:{x:-16.8,y:-6.3}},{t:this.shape_301,p:{x:-5.7,y:-5.3}},{t:this.shape_556,p:{x:2.2,y:-6.8}},{t:this.shape_386,p:{x:7.7,y:-5.3}},{t:this.shape_227,p:{x:14.7,y:-5.3}},{t:this.shape_306,p:{x:22,y:-5.3}},{t:this.shape_220,p:{x:28.3,y:-6.3}},{t:this.shape_555},{t:this.shape_554,p:{x:46.5,y:-5.4}},{t:this.shape_307,p:{x:56,y:-5.3}},{t:this.shape_553,p:{x:63.6,y:-6.8}},{t:this.shape_218,p:{x:70.5,y:-5.3}},{t:this.shape_221,p:{x:81.8,y:-5.3}},{t:this.shape_414,p:{x:88.4,y:-5.3}},{t:this.shape_253,p:{x:95.5,y:-5.4}},{t:this.shape_215,p:{x:101.4,y:-5.3}},{t:this.shape_552,p:{x:113.3,y:-3.9}},{t:this.shape_551,p:{x:120.5,y:-5.3}},{t:this.shape_403,p:{x:128.1,y:-5.3}},{t:this.shape_550,p:{x:139.4,y:-6.8}},{t:this.shape_462,p:{x:144,y:-6.8}},{t:this.shape_222,p:{x:149.4,y:-5.3}},{t:this.shape_217,p:{x:156,y:-6.3}},{t:this.shape_214,p:{x:161.5,y:-6.3}},{t:this.shape_206,p:{x:168,y:-5.3}},{t:this.shape_197,p:{x:175.6,y:-5.4}},{t:this.shape_208,p:{x:187.7,y:-5.3}},{t:this.shape_481,p:{x:193.7,y:-6.8}},{t:this.shape_275,p:{x:197.8,y:-6.8}},{t:this.shape_549,p:{x:207.7,y:-3.9}},{t:this.shape_486,p:{x:214.9,y:-5.3}},{t:this.shape_376,p:{x:222.5,y:-5.3}},{t:this.shape_205,p:{x:229.5,y:-5.4}},{t:this.shape_252,p:{x:-325.7,y:11.5}},{t:this.shape_189,p:{x:-320.2,y:12.9}},{t:this.shape_174,p:{x:-313.1,y:14.3}},{t:this.shape_548},{t:this.shape_188,p:{x:-298.8,y:12.8}},{t:this.shape_365,p:{x:-293.8,y:12.9}},{t:this.shape_166,p:{x:-288.6,y:15.7}},{t:this.instance_10}]},1).to({state:[{t:this.shape_583,p:{x:-325.4,y:-157.1}},{t:this.shape_581,p:{x:-312.2,y:-158.1}},{t:this.shape_532,p:{x:-303,y:-156.8}},{t:this.shape_1117},{t:this.shape_1116},{t:this.shape_1115},{t:this.shape_440,p:{x:-267.8,y:-156.7}},{t:this.shape_451,p:{x:-260,y:-158.2}},{t:this.shape_1114},{t:this.shape_1113},{t:this.shape_696,p:{x:-240.2,y:-156.7}},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_1110},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_1107},{t:this.shape_1106},{t:this.shape_1105},{t:this.shape_479,p:{x:-165.4,y:-155.3}},{t:this.shape_1104,p:{x:-158.2,y:-156.7}},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_1098,p:{x:-96.2,y:-158.2}},{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_420,p:{x:-41.5,y:-158.1}},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_692,p:{x:-7.6,y:-156.7}},{t:this.shape_444,p:{x:-0.4,y:-158.2}},{t:this.shape_1088,p:{x:7.1,y:-156.7}},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082,p:{x:58.2,y:-158.1}},{t:this.shape_1081,p:{x:63.2,y:-157.7}},{t:this.shape_432,p:{x:69.7,y:-158.2}},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078,p:{x:91.4,y:-157.7}},{t:this.shape_1077},{t:this.shape_411,p:{x:109.3,y:-156.7}},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070,p:{x:163.6,y:-156.7}},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067,p:{x:178.2,y:-157.7}},{t:this.shape_1066},{t:this.shape_1065,p:{x:198.8,y:-156.7}},{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_1062},{t:this.shape_1061,p:{x:-317,y:-138.6}},{t:this.shape_1060,p:{x:-311.1,y:-138.5}},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056,p:{x:-285,y:-138.5}},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1053},{t:this.shape_1052,p:{x:-241,y:-138.6}},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_1045},{t:this.shape_599,p:{x:-173.9,y:-138.5}},{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_591,p:{x:-139.6,y:-138.5}},{t:this.shape_1041,p:{x:-133,y:-140}},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038,p:{x:-111.6,y:-138.5}},{t:this.shape_167,p:{x:-104.3,y:-138.5}},{t:this.shape_1037},{t:this.shape_1036,p:{x:-92.8,y:-139.9}},{t:this.shape_1035},{t:this.shape_1034,p:{x:-82.9,y:-139.9}},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_438,p:{x:-68.1,y:-137.1}},{t:this.shape_1031},{t:this.shape_690,p:{x:-51.5,y:-139.8}},{t:this.shape_1030,p:{x:-45.4,y:-138.5}},{t:this.shape_1029,p:{x:-31.5,y:-137.1}},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_290,p:{x:9.7,y:-138.5}},{t:this.shape_1024},{t:this.shape_1023,p:{x:22.3,y:-138.6}},{t:this.shape_179,p:{x:32.2,y:-137.1}},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020,p:{x:47.4,y:-134.5}},{t:this.shape_549,p:{x:59.7,y:-137.1}},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_279,p:{x:87.7,y:-138.5}},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014,p:{x:121.5,y:-140}},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011,p:{x:140.8,y:-140}},{t:this.shape_404,p:{x:153.7,y:-138.5}},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_288,p:{x:184.9,y:-138.5}},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005,p:{x:214.9,y:-139.4}},{t:this.shape_1004,p:{x:-324.2,y:-120.2}},{t:this.shape_1003,p:{y:-121.7,x:-316.4}},{t:this.shape_686,p:{x:-310.8,y:-120.2}},{t:this.shape_1002},{t:this.shape_662,p:{x:-296.6,y:-120.2}},{t:this.shape_654,p:{x:-290.3,y:-121.2}},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_387,p:{x:-243.2,y:-121.7}},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_546,p:{x:-207.5,y:-121.5}},{t:this.shape_651,p:{x:-197.7,y:-121.7}},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_659,p:{x:-140,y:-120.2}},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988,p:{x:-118,y:-120.2}},{t:this.shape_987},{t:this.shape_679,p:{x:-103.7,y:-120.3}},{t:this.shape_652,p:{x:-98.7,y:-121.2}},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983,p:{x:-59.8}},{t:this.shape_646,p:{x:-54.1,y:-121.2}},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_641,p:{x:-17.4,y:-121.2}},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976,p:{x:16.3}},{t:this.shape_430,p:{x:24.9,y:-120.3}},{t:this.shape_975},{t:this.shape_974},{t:this.shape_637,p:{x:46.3,y:-121.2}},{t:this.shape_973},{t:this.shape_412,p:{x:67.3,y:-121.7}},{t:this.shape_643,p:{x:72.8,y:-120.2}},{t:this.shape_972},{t:this.shape_642,p:{x:87.1,y:-120.2}},{t:this.shape_630,p:{x:93.4,y:-121.2}},{t:this.shape_971},{t:this.shape_250,p:{x:111.3,y:-118.8}},{t:this.shape_656,p:{x:118.5,y:-120.2}},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968,p:{x:147.1,y:-120.3}},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_649,p:{x:181.4,y:-120.2}},{t:this.shape_964,p:{x:186}},{t:this.shape_639,p:{x:191.6,y:-120.2}},{t:this.shape_963},{t:this.shape_693,p:{x:204.7,y:-121.7}},{t:this.shape_962,p:{x:208.8,y:-121.7}},{t:this.shape_961,p:{x:214.1,y:-118.8}},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_568,p:{x:-274.7,y:-100.6}},{t:this.shape_611,p:{x:-267.5,y:-102}},{t:this.shape_953},{t:this.shape_323,p:{x:-252.9,y:-102.1}},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_628,p:{x:-212.2,y:-102}},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943,p:{x:-159.6,y:-107.1}},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_456,p:{x:-133,y:-107.1}},{t:this.shape_939,p:{x:-128.4,y:-99.2}},{t:this.shape_325,p:{x:-116.4,y:-103.3}},{t:this.shape_486,p:{x:-108.2,y:-102}},{t:this.shape_474,p:{x:-93.8,y:-102.1}},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_624,p:{x:-65.7,y:-102}},{t:this.shape_935,p:{x:-58.7,y:-102.1}},{t:this.shape_934},{t:this.shape_301,p:{x:-40.3,y:-102}},{t:this.shape_933},{t:this.shape_242,p:{x:-17.9,y:-100.6}},{t:this.shape_932},{t:this.shape_931},{t:this.shape_246,p:{x:9.2,y:-102}},{t:this.shape_930,p:{x:15.2,y:-103.4}},{t:this.shape_929},{t:this.shape_622,p:{x:26.3,y:-102}},{t:this.shape_382,p:{x:33.4,y:-102.1}},{t:this.shape_928},{t:this.shape_625,p:{x:49.7,y:-103.5}},{t:this.shape_621,p:{x:57.3,y:-102}},{t:this.shape_927,p:{x:68.2,y:-107.1}},{t:this.shape_926},{t:this.shape_240,p:{x:81.9,y:-102}},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_615,p:{x:116.4,y:-103.5}},{t:this.shape_619,p:{x:124,y:-102}},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_623,p:{x:168.4,y:-103.4}},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_618,p:{x:199.3,y:-102}},{t:this.shape_912},{t:this.shape_627,p:{x:214.7,y:-102.9}},{t:this.shape_911},{t:this.shape_910,p:{x:-315.8,y:-85.1}},{t:this.shape_268,p:{x:-311.3,y:-85.2}},{t:this.shape_909,p:{x:-307.2,y:-85.2}},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896,p:{x:-193.8,y:-81}},{t:this.shape_570,p:{x:-182,y:-85.1}},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_530,p:{x:-133.8,y:-83.8}},{t:this.shape_421,p:{x:-119.3,y:-83.7}},{t:this.shape_890},{t:this.shape_478,p:{x:-103.4,y:-83.8}},{t:this.shape_889},{t:this.shape_888,p:{x:-90.7,y:-83.7}},{t:this.shape_887,p:{x:-85.5,y:-79.8}},{t:this.shape_886,p:{x:-72.1,y:-82.3}},{t:this.shape_885},{t:this.shape_706,p:{x:-57.4,y:-83.7}},{t:this.shape_884},{t:this.shape_488,p:{x:-35.8,y:-83.8}},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880,p:{x:-1.5,y:-85.2}},{t:this.shape_879,p:{x:4.1,y:-83.7}},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873,p:{x:56.8,y:-85.1}},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869,p:{x:82.5,y:-83.7}},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864,p:{x:134.9,y:-83.7}},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860,p:{x:160.3,y:-85.1}},{t:this.shape_559,p:{x:165.8,y:-83.7}},{t:this.shape_859},{t:this.shape_858},{t:this.shape_565,p:{x:186,y:-83.7}},{t:this.shape_857},{t:this.shape_856},{t:this.shape_563,p:{x:213.9,y:-83.7}},{t:this.shape_380,p:{x:-324.5,y:-65.5}},{t:this.shape_423,p:{x:-317.3,y:-67}},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_381,p:{x:-287.7,y:-65.5}},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_390,p:{x:-243.5,y:-65.5}},{t:this.shape_848},{t:this.shape_485,p:{x:-230.2,y:-65.5}},{t:this.shape_702,p:{x:-223.2,y:-65.4}},{t:this.shape_847},{t:this.shape_402,p:{x:-210.9,y:-66.4}},{t:this.shape_846},{t:this.shape_373,p:{x:-192.8,y:-65.5}},{t:this.shape_845},{t:this.shape_400,p:{x:-178.5,y:-66.4}},{t:this.shape_844},{t:this.shape_552,p:{x:-162.5,y:-64.1}},{t:this.shape_399,p:{x:-155.3,y:-65.5}},{t:this.shape_698,p:{x:-147.8,y:-65.4}},{t:this.shape_843,p:{x:-142.9,y:-70.6}},{t:this.shape_603,p:{x:-138.4,y:-65.4}},{t:this.shape_371,p:{x:-131.1,y:-65.5}},{t:this.shape_842},{t:this.shape_372,p:{x:-107.9,y:-65.5}},{t:this.shape_708,p:{x:-100.5,y:-66.9}},{t:this.shape_367,p:{x:-92.6,y:-65.5}},{t:this.shape_841,p:{x:-86.4,y:-62.7}},{t:this.shape_576,p:{x:-325.4,y:-29.4}},{t:this.shape_840},{t:this.shape_839,p:{x:-305.4,y:-29}},{t:this.shape_838,p:{x:-298.1,y:-29}},{t:this.shape_514,p:{x:-291,y:-29}},{t:this.shape_503,p:{x:-285,y:-30.4}},{t:this.shape_837,p:{x:-280.9,y:-30.4}},{t:this.shape_524,p:{x:-270.1,y:-29.9}},{t:this.shape_545,p:{x:-263.6,y:-30.5}},{t:this.shape_836,p:{x:-256,y:-29}},{t:this.shape_835,p:{x:-243.3,y:-29}},{t:this.shape_512,p:{x:-237.6,y:-29.9}},{t:this.shape_834,p:{x:-231.1,y:-29}},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_541,p:{x:-181.5,y:-30.5}},{t:this.shape_333,p:{x:-175.9,y:-30.4}},{t:this.shape_506,p:{x:-170.3,y:-29}},{t:this.shape_526,p:{x:-163,y:-30.5}},{t:this.shape_508,p:{x:-150.2,y:-29.9}},{t:this.shape_522,p:{x:-143.7,y:-30.5}},{t:this.shape_544,p:{x:-136.1,y:-29}},{t:this.shape_477,p:{x:-122.1,y:-30.4}},{t:this.shape_509,p:{x:-114.8,y:-29}},{t:this.shape_502,p:{x:-107.6,y:-29}},{t:this.shape_829,p:{x:-100.2,y:-30.5}},{t:this.shape_828},{t:this.shape_827,p:{x:-86.9,y:-29.1}},{t:this.shape_826,p:{x:-81,y:-29}},{t:this.shape_670,p:{x:-73.4,y:-28.9}},{t:this.shape_825},{t:this.shape_688,p:{x:-58.4,y:-30.4}},{t:this.shape_824},{t:this.shape_505,p:{x:-34.1,y:-29}},{t:this.shape_534,p:{x:-27.6,y:-29}},{t:this.shape_566,p:{x:-15.3,y:-29.1}},{t:this.shape_540,p:{x:-9.4,y:-29}},{t:this.shape_322,p:{x:0.2,y:-29.1}},{t:this.shape_492,p:{x:9.8,y:-29}},{t:this.shape_674,p:{x:16.9,y:-28.9}},{t:this.shape_536,p:{x:24.2,y:-29}},{t:this.shape_668,p:{x:31.6,y:-30.4}},{t:this.shape_823,p:{x:38.1,y:-26.2}},{t:this.shape_180,p:{x:51.7,y:-30.4}},{t:this.shape_822},{t:this.shape_336,p:{x:67.8,y:-29}},{t:this.shape_329,p:{x:81.5,y:-29}},{t:this.shape_821},{t:this.shape_498,p:{x:99.4,y:-29.9}},{t:this.shape_518,p:{x:105.9,y:-30.5}},{t:this.shape_327,p:{x:113.5,y:-29}},{t:this.shape_820},{t:this.shape_819,p:{x:135,y:-27.6}},{t:this.shape_496,p:{x:141.5,y:-29.9}},{t:this.shape_818,p:{x:146,y:-30.4}},{t:this.shape_501,p:{x:151.9,y:-29}},{t:this.shape_817},{t:this.shape_523,p:{x:166.1,y:-29}},{t:this.shape_816,p:{x:180.3,y:-28.9}},{t:this.shape_321,p:{x:189.1,y:-29}},{t:this.shape_519,p:{x:195.6,y:-29}},{t:this.shape_493,p:{x:207.5,y:-29.9}},{t:this.shape_521,p:{x:213.9,y:-29}},{t:this.shape_334,p:{x:-324.3,y:-12.2}},{t:this.shape_309,p:{x:-316.5,y:-10.7}},{t:this.shape_666,p:{x:-308.9,y:-10.7}},{t:this.shape_350,p:{x:-301,y:-12.2}},{t:this.shape_815,p:{x:-295.1,y:-12.2}},{t:this.shape_562,p:{x:-289.5,y:-10.7}},{t:this.shape_468,p:{x:-277.2,y:-10.7}},{t:this.shape_814,p:{x:-271.5,y:-12.2}},{t:this.shape_813,p:{x:-267.9,y:-12.1}},{t:this.shape_459,p:{x:-262.3,y:-10.7}},{t:this.shape_553,p:{x:-254.9,y:-12.2}},{t:this.shape_487,p:{x:-243.9,y:-11.7}},{t:this.shape_225,p:{x:-237.4,y:-12.2}},{t:this.shape_484,p:{x:-229.8,y:-10.7}},{t:this.shape_312,p:{x:-218.2,y:-11.7}},{t:this.shape_219,p:{x:-211.7,y:-12.2}},{t:this.shape_516,p:{x:-204.1,y:-10.7}},{t:this.shape_473,p:{x:-194.5,y:-10.8}},{t:this.shape_644,p:{x:-184.6,y:-12.2}},{t:this.shape_812},{t:this.shape_316,p:{x:-169.7,y:-10.7}},{t:this.shape_811,p:{x:-164.2,y:-12.1}},{t:this.shape_682,p:{x:-159.7,y:-12.2}},{t:this.shape_236,p:{x:-149.2,y:-10.7}},{t:this.shape_810},{t:this.shape_304,p:{x:-132.4,y:-11.7}},{t:this.shape_216,p:{x:-125.9,y:-12.2}},{t:this.shape_313,p:{x:-118.3,y:-10.7}},{t:this.shape_223,p:{x:-106.7,y:-10.7}},{t:this.shape_809,p:{x:-98.1,y:-10.8}},{t:this.shape_307,p:{x:-88.6,y:-10.7}},{t:this.shape_632,p:{x:-81.7,y:-10.8}},{t:this.shape_302,p:{x:-76.7,y:-11.7}},{t:this.shape_808},{t:this.shape_665,p:{x:-57.4,y:-12.2}},{t:this.shape_469,p:{x:-51.8,y:-10.7}},{t:this.shape_310,p:{x:-44.8,y:-10.7}},{t:this.shape_455,p:{x:-37.6,y:-10.7}},{t:this.shape_226,p:{x:-31.3,y:-11.7}},{t:this.shape_807,p:{x:-21.3,y:-12.2}},{t:this.shape_222,p:{x:-15.8,y:-10.7}},{t:this.shape_303,p:{x:-8.7,y:-9.3}},{t:this.shape_227,p:{x:-1.4,y:-10.7}},{t:this.shape_577,p:{x:5.6,y:-10.8}},{t:this.shape_220,p:{x:15.6,y:-11.7}},{t:this.shape_806,p:{x:22.1,y:-10.7}},{t:this.shape_805},{t:this.shape_218,p:{x:41.6,y:-10.7}},{t:this.shape_217,p:{x:48.3,y:-11.7}},{t:this.shape_463,p:{x:57.8,y:-12.1}},{t:this.shape_713,p:{x:63.7,y:-10.8}},{t:this.shape_221,p:{x:70.3,y:-10.7}},{t:this.shape_224,p:{x:75,y:-12.1}},{t:this.shape_328,p:{x:80.8,y:-12.2}},{t:this.shape_215,p:{x:88.7,y:-10.7}},{t:this.shape_214,p:{x:100.3,y:-11.7}},{t:this.shape_213,p:{x:106.8,y:-12.2}},{t:this.shape_206,p:{x:114.4,y:-10.7}},{t:this.shape_804,p:{x:125.5,y:-15.8}},{t:this.shape_470,p:{x:131.8,y:-12.2}},{t:this.shape_208,p:{x:139.1,y:-10.7}},{t:this.shape_803},{t:this.shape_802},{t:this.shape_685,p:{x:156.7,y:-8}},{t:this.shape_801},{t:this.shape_405,p:{x:175.8,y:-9.3}},{t:this.shape_276,p:{x:187.9,y:-12.2}},{t:this.shape_800},{t:this.shape_799,p:{x:201.3,y:-12.1}},{t:this.shape_703,p:{x:207.2,y:-10.8}},{t:this.shape_798},{t:this.shape_797},{t:this.shape_194,p:{x:-318.6,y:7.5}},{t:this.shape_707,p:{x:-312.5,y:11.5}},{t:this.shape_796},{t:this.shape_795},{t:this.shape_513,p:{x:-286.3,y:7.6}},{t:this.shape_794,p:{x:-273.7,y:7.5}},{t:this.shape_472,p:{x:-266.7,y:7.4}},{t:this.shape_793,p:{x:-260.8,y:7.5}},{t:this.shape_710,p:{x:-248,y:7.5}},{t:this.shape_712,p:{x:-241.4,y:7.5}},{t:this.shape_701,p:{x:-235.7,y:7.5}},{t:this.shape_452,p:{x:-229.1,y:7.5}},{t:this.shape_691,p:{x:-221.5,y:7.4}},{t:this.shape_711,p:{x:-214.8,y:6.6}},{t:this.shape_792},{t:this.shape_791,p:{x:-204.5,y:7.5}},{t:this.shape_515,p:{x:-198.5,y:6.1}},{t:this.shape_661,p:{x:-194.4,y:6.1}},{t:this.shape_378,p:{x:-189.2,y:8.9}},{t:this.shape_790,p:{x:-176.8,y:7.5}},{t:this.shape_789},{t:this.shape_441,p:{x:-161.5,y:7.5}},{t:this.shape_678,p:{x:-153.9,y:7.4}},{t:this.shape_428,p:{x:-148.3,y:6.1}},{t:this.shape_543,p:{x:-142.3,y:7.4}},{t:this.shape_788,p:{x:-135,y:8.7}},{t:this.shape_709,p:{x:-122.7,y:7.5}},{t:this.shape_424,p:{x:-111,y:7.5}},{t:this.shape_434,p:{x:-104.3,y:7.5}},{t:this.shape_787},{t:this.shape_704,p:{x:-89.1,y:7.5}},{t:this.shape_237,p:{x:-82.2,y:7.4}},{t:this.shape_435,p:{x:-76.4,y:7.5}},{t:this.shape_454,p:{x:-69.8,y:6.6}},{t:this.shape_417,p:{x:-63.3,y:7.5}},{t:this.shape_786},{t:this.shape_418,p:{x:-42.8,y:6}},{t:this.shape_785,p:{x:-35.2,y:7.5}},{t:this.shape_449,p:{x:-28.6,y:6.6}},{t:this.shape_450,p:{x:-22.2,y:7.5}},{t:this.shape_392,p:{x:-15.6,y:7.5}},{t:this.shape_394,p:{x:-9,y:6}},{t:this.shape_784},{t:this.shape_783},{t:this.shape_265,p:{x:18.9,y:6.1}},{t:this.shape_687,p:{x:26.8,y:7.5}},{t:this.shape_442,p:{x:34,y:7.5}},{t:this.shape_458,p:{x:41.2,y:7.6}},{t:this.shape_782},{t:this.shape_201,p:{x:60.4,y:7.5}},{t:this.shape_500,p:{x:68,y:7.4}},{t:this.shape_448,p:{x:74.7,y:6.6}},{t:this.shape_443,p:{x:85.4,y:6.6}},{t:this.shape_183,p:{x:91.9,y:6}},{t:this.shape_189,p:{x:99.4,y:7.5}},{t:this.shape_433,p:{x:105.9,y:6.6}},{t:this.shape_697,p:{x:115.6,y:6.1}},{t:this.shape_365,p:{x:120.6,y:7.5}},{t:this.shape_629,p:{x:130.9,y:6.1}},{t:this.shape_415,p:{x:134.5,y:6.1}},{t:this.shape_494,p:{x:140.5,y:7.4}},{t:this.shape_695,p:{x:148.2,y:6}},{t:this.shape_192,p:{x:155.1,y:7.5}},{t:this.shape_259,p:{x:162.6,y:6.1}},{t:this.shape_419,p:{x:174.7,y:6.6}},{t:this.shape_437,p:{x:181.2,y:7.5}},{t:this.shape_781,p:{x:193.6,y:8.9}},{t:this.shape_689,p:{x:200.8,y:7.5}},{t:this.shape_436,p:{x:208.3,y:7.6}},{t:this.shape_211,p:{x:215.4,y:7.4}},{t:this.shape_168,p:{x:-324.2,y:25.8}},{t:this.shape_205,p:{x:-317.2,y:25.7}},{t:this.shape_780},{t:this.shape_779,p:{x:-307.6,y:26.9}},{t:this.shape_778,p:{x:-302.3,y:24.4}},{t:this.shape_335,p:{x:-296.4,y:25.7}},{t:this.shape_777,p:{x:-288.9,y:25.8}},{t:this.shape_664,p:{x:-282.9,y:24.3}},{t:this.shape_776},{t:this.shape_775,p:{x:-266.5,y:24.4}},{t:this.shape_464,p:{x:-262.1,y:24.3}},{t:this.shape_774,p:{x:-256.5,y:25.8}},{t:this.shape_773},{t:this.shape_772,p:{x:-236.3,y:25.8}},{t:this.shape_332,p:{x:-228.8,y:25.7}},{t:this.shape_210,p:{x:-221.3,y:24.3}},{t:this.shape_396,p:{x:-206.7,y:24.8}},{t:this.shape_292,p:{x:-200.2,y:24.3}},{t:this.shape_771,p:{x:-192.6,y:25.8}},{t:this.shape_315,p:{x:-185,y:25.7}},{t:this.shape_770,p:{x:-170.1,y:27.2}},{t:this.shape_769,p:{x:-162.9,y:25.8}},{t:this.shape_431,p:{x:-155.4,y:25.8}},{t:this.shape_289,p:{x:-140.3,y:25.8}},{t:this.shape_768},{t:this.shape_360,p:{x:-127.4,y:25.8}},{t:this.shape_274,p:{x:-112.3,y:25.8}},{t:this.shape_556,p:{x:-104.5,y:24.3}},{t:this.shape_209,p:{x:-98.5,y:24.3}},{t:this.shape_351,p:{x:-92.9,y:25.8}},{t:this.shape_395,p:{x:-78.6,y:24.8}},{t:this.shape_377,p:{x:-72.2,y:25.8}},{t:this.shape_341,p:{x:-57,y:25.8}},{t:this.shape_199,p:{x:-49.5,y:24.3}},{t:this.shape_767,p:{x:-43.6,y:24.4}},{t:this.shape_389,p:{x:-38.6,y:24.8}},{t:this.shape_293,p:{x:-25.4,y:24.8}},{t:this.shape_286,p:{x:-18.9,y:24.3}},{t:this.shape_294,p:{x:-11.3,y:25.8}},{t:this.shape_176,p:{x:1.9,y:24.4}},{t:this.shape_766},{t:this.shape_178,p:{x:19.3,y:25.8}},{t:this.shape_331,p:{x:26.6,y:26.9}},{t:this.shape_285,p:{x:33.8,y:25.8}},{t:this.shape_193,p:{x:48.9,y:24.3}},{t:this.shape_765},{t:this.shape_188,p:{x:60.2,y:25.7}},{t:this.shape_282,p:{x:66.2,y:25.8}},{t:this.shape_177,p:{x:73.4,y:25.8}},{t:this.shape_287,p:{x:79.7,y:24.8}},{t:this.shape_504,p:{x:84.7,y:24.3}},{t:this.shape_764,p:{x:90,y:27.2}},{t:this.shape_234,p:{x:94.1,y:28.5}},{t:this.shape_482,p:{x:115.4,y:24.3}},{t:this.shape_763,p:{x:122.4,y:24.3}},{t:this.shape_284,p:{x:127.5,y:24.8}},{t:this.shape_280,p:{x:134,y:25.8}},{t:this.shape_574,p:{x:141.1,y:25.7}},{t:this.shape_281,p:{x:153.7,y:25.8}},{t:this.shape_172,p:{x:160.2,y:25.8}},{t:this.shape_578,p:{x:167.3,y:25.8}},{t:this.shape_762,p:{x:172.5,y:24.4}},{t:this.shape_277,p:{x:178.5,y:25.7}},{t:this.shape_314,p:{x:185.8,y:26.9}},{t:this.shape_175,p:{x:199.8,y:24.8}},{t:this.shape_283,p:{x:206.3,y:24.3}},{t:this.shape_272,p:{x:213.9,y:25.8}},{t:this.shape_761},{t:this.shape_760},{t:this.shape_645,p:{x:-308.9,y:44}},{t:this.shape_759},{t:this.shape_638,p:{x:-295.8,y:44}},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756,p:{x:-275.1,y:44}},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753,p:{x:-246,y:42.6}},{t:this.shape_202,p:{x:-241.6,y:42.6}},{t:this.shape_680,p:{x:-236,y:44}},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_677,p:{x:-173.7,y:44}},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_673,p:{x:-136.8,y:44}},{t:this.shape_744},{t:this.shape_743,p:{x:-112.6,y:43.9}},{t:this.shape_669,p:{x:-103.2,y:44}},{t:this.shape_262,p:{x:-95.9,y:45.2}},{t:this.shape_663,p:{x:-88.7,y:44}},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_655,p:{x:-62.8,y:44}},{t:this.shape_169,p:{x:-45.2,y:43.9}},{t:this.shape_647,p:{x:-39.4,y:44}},{t:this.shape_739},{t:this.shape_738},{t:this.shape_653,p:{x:-20.7,y:44}},{t:this.shape_737,p:{x:-13.6,y:43.9}},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_650,p:{x:26.3,y:44}},{t:this.shape_631,p:{x:44.1,y:44}},{t:this.shape_732},{t:this.shape_636,p:{x:58.8,y:44}},{t:this.shape_266,p:{x:66.3,y:43.9}},{t:this.shape_196,p:{x:73.7,y:45.2}},{t:this.shape_267,p:{x:80.9,y:44}},{t:this.shape_731},{t:this.shape_207,p:{x:104.4,y:45.4}},{t:this.shape_260,p:{x:111.6,y:44}},{t:this.shape_414,p:{x:119.2,y:44.1}},{t:this.shape_730,p:{x:124.1,y:38.9}},{t:this.shape_255,p:{x:128.6,y:44.1}},{t:this.shape_258,p:{x:135.8,y:44}},{t:this.shape_538,p:{x:156,y:43.9}},{t:this.shape_251,p:{x:165.5,y:44}},{t:this.shape_187,p:{x:172.8,y:42.6}},{t:this.shape_254,p:{x:180.7,y:44}},{t:this.shape_729,p:{x:200.3,y:44.1}},{t:this.shape_728,p:{x:207.3,y:42.6}},{t:this.shape_427,p:{x:211.8,y:42.6}},{t:this.shape_481,p:{x:215.9,y:42.6}},{t:this.shape_727},{t:this.shape_403,p:{x:-316.8,y:62.3}},{t:this.shape_626,p:{x:-310.2,y:61.3}},{t:this.shape_560,p:{x:-303.7,y:62.3}},{t:this.shape_345,p:{x:-294.2,y:62.2}},{t:this.shape_726},{t:this.shape_616,p:{x:-278.2,y:61.3}},{t:this.shape_725},{t:this.shape_609,p:{x:-268.1,y:62.3}},{t:this.shape_724},{t:this.shape_344,p:{x:-255,y:60.8}},{t:this.shape_252,p:{x:-250.9,y:60.8}},{t:this.shape_723,p:{x:-245.6,y:63.7}},{t:this.shape_722},{t:this.shape_342,p:{x:-228.9,y:63.7}},{t:this.shape_263,p:{x:-221.6,y:62.2}},{t:this.shape_721},{t:this.shape_720},{t:this.shape_200,p:{x:-199,y:62.2}},{t:this.shape_174,p:{x:-187.5,y:63.7}},{t:this.shape_471,p:{x:-180.3,y:62.3}},{t:this.shape_376,p:{x:-172.8,y:62.3}},{t:this.shape_446,p:{x:-165.7,y:62.2}},{t:this.shape_466,p:{x:-155.6,y:62.3}},{t:this.shape_401,p:{x:-148.6,y:62.2}},{t:this.shape_617,p:{x:-144.7,y:60.9}},{t:this.shape_184,p:{x:-139,y:63.4}},{t:this.shape_719},{t:this.shape_197,p:{x:-127.8,y:62.2}},{t:this.shape_718},{t:this.shape_462,p:{x:-114.3,y:60.8}},{t:this.shape_275,p:{x:-106,y:60.8}},{t:this.shape_717},{t:this.shape_273,p:{x:-93.4,y:63.7}},{t:this.shape_614,p:{x:-86.2,y:62.3}},{t:this.shape_271,p:{x:-79.1,y:62.2}},{t:this.shape_483,p:{x:-74.2,y:62.3}},{t:this.shape_613,p:{x:-69.1,y:62.3}},{t:this.shape_391,p:{x:-60.4,y:62.2}},{t:this.shape_716},{t:this.shape_253,p:{x:-44,y:62.2}},{t:this.shape_612,p:{x:-39,y:61.3}},{t:this.shape_460,p:{x:-28.4,y:62.3}},{t:this.shape_467,p:{x:-20.5,y:60.8}},{t:this.shape_386,p:{x:-15,y:62.3}},{t:this.shape_610,p:{x:-8,y:62.3}},{t:this.shape_245,p:{x:-0.7,y:62.3}},{t:this.shape_243,p:{x:5.6,y:61.3}},{t:this.shape_409,p:{x:11,y:62.3}},{t:this.shape_166,p:{x:15.8,y:65}}]},1).to({state:[{t:this.shape_583,p:{x:-325.4,y:-157.1}},{t:this.shape_607,p:{x:-314.1,y:-158.1}},{t:this.shape_420,p:{x:-308.8,y:-158.1}},{t:this.shape_196,p:{x:-303.1,y:-155.6}},{t:this.shape_394,p:{x:-295.8,y:-158.2}},{t:this.shape_448,p:{x:-289.2,y:-157.7}},{t:this.shape_692,p:{x:-278.8,y:-156.7}},{t:this.shape_202,p:{x:-273.1,y:-158.2}},{t:this.shape_198,p:{x:-269.5,y:-158.1}},{t:this.shape_442,p:{x:-263.9,y:-156.7}},{t:this.shape_695,p:{x:-256.5,y:-158.2}},{t:this.shape_437,p:{x:-245.4,y:-156.7}},{t:this.shape_200,p:{x:-237.9,y:-156.8}},{t:this.shape_443,p:{x:-227,y:-157.7}},{t:this.shape_183,p:{x:-220.5,y:-158.2}},{t:this.shape_417,p:{x:-212.9,y:-156.7}},{t:this.shape_433,p:{x:-202.1,y:-157.7}},{t:this.shape_435,p:{x:-195.7,y:-156.7}},{t:this.shape_574,p:{x:-188.8,y:-156.8}},{t:this.shape_184,p:{x:-183.1,y:-155.6}},{t:this.shape_201,p:{x:-175.8,y:-156.7}},{t:this.shape_419,p:{x:-169.2,y:-157.7}},{t:this.shape_481,p:{x:-160,y:-158.2}},{t:this.shape_189,p:{x:-154.5,y:-156.7}},{t:this.shape_479,p:{x:-147.4,y:-155.3}},{t:this.shape_192,p:{x:-140.1,y:-156.7}},{t:this.shape_472,p:{x:-133.1,y:-156.8}},{t:this.shape_576,p:{x:-325.4,y:-120.6}},{t:this.shape_584,p:{x:-315.3,y:-121.6}},{t:this.shape_650,p:{x:-308.2,y:-120.2}},{t:this.shape_252,p:{x:-302.1,y:-121.7}},{t:this.shape_267,p:{x:-296.5,y:-120.2}},{t:this.shape_639,p:{x:-289.2,y:-120.2}},{t:this.shape_652,p:{x:-282.9,y:-121.2}},{t:this.shape_804,p:{x:-273.8,y:-125.3}},{t:this.shape_1118},{t:this.shape_1004,p:{x:-259.4,y:-120.2}},{t:this.shape_197,p:{x:-251.9,y:-120.3}},{t:this.shape_255,p:{x:-244.7,y:-120.2}},{t:this.shape_258,p:{x:-237.4,y:-120.2}},{t:this.shape_205,p:{x:-230.4,y:-120.3}},{t:this.shape_646,p:{x:-225.4,y:-121.2}},{t:this.shape_641,p:{x:-215.6,y:-121.2}},{t:this.shape_667,p:{x:-209.2,y:-120.2}},{t:this.shape_581,p:{x:-197.9,y:-121.6}},{t:this.shape_474,p:{x:-188.7,y:-120.3}},{t:this.shape_251,p:{x:-179.3,y:-120.2}},{t:this.shape_188,p:{x:-172.3,y:-120.3}},{t:this.shape_637,p:{x:-167.3,y:-121.2}},{t:this.shape_180,p:{x:-155.7,y:-121.6}},{t:this.shape_665,p:{x:-146.9,y:-121.7}},{t:this.shape_386,p:{x:-141.4,y:-120.2}},{t:this.shape_254,p:{x:-134.4,y:-120.2}},{t:this.shape_631,p:{x:-127.1,y:-120.2}},{t:this.shape_630,p:{x:-120.8,y:-121.2}},{t:this.shape_943,p:{x:-115.9,y:-125.3}},{t:this.instance_11}]},1).to({state:[{t:this.shape_608,p:{y:-157.1,x:-325.4}},{t:this.shape_1133,p:{y:-158.2,x:-315.3}},{t:this.shape_334,p:{x:-307.6,y:-158.2}},{t:this.shape_328,p:{x:-299.8,y:-158.2}},{t:this.shape_449,p:{x:-288.7,y:-157.7}},{t:this.shape_418,p:{x:-282.2,y:-158.2}},{t:this.shape_793,p:{x:-274.6,y:-156.7}},{t:this.shape_1132,p:{x:-261.4,y:-156.7}},{t:this.shape_709,p:{x:-252.5,y:-156.7}},{t:this.shape_448,p:{x:-246,y:-157.7}},{t:this.shape_710,p:{x:-239.5,y:-156.7}},{t:this.shape_574,p:{x:-232.4,y:-156.8}},{t:this.shape_692,p:{x:-226.8,y:-156.7}},{t:this.shape_1131},{t:this.shape_275,p:{x:-213.6,y:-158.2}},{t:this.shape_450,p:{x:-208,y:-156.7}},{t:this.shape_478,p:{x:-201,y:-156.8}},{t:this.shape_276,p:{x:-191,y:-158.2}},{t:this.shape_452,p:{x:-183.1,y:-156.7}},{t:this.shape_442,p:{x:-175.9,y:-156.7}},{t:this.shape_689,p:{x:-168.7,y:-156.7}},{t:this.shape_737,p:{x:-161.7,y:-156.8}},{t:this.shape_704,p:{x:-155.9,y:-156.7}},{t:this.shape_443,p:{x:-149.3,y:-157.7}},{t:this.shape_198,p:{x:-144.8,y:-158.1}},{t:this.shape_1130,p:{x:-138.9,y:-156.7}},{t:this.shape_315,p:{x:-131.4,y:-156.8}},{t:this.shape_436,p:{x:-119.6,y:-156.7}},{t:this.shape_277,p:{x:-112,y:-156.8}},{t:this.shape_265,p:{x:-104.5,y:-158.2}},{t:this.shape_441,p:{x:-96.6,y:-156.7}},{t:this.shape_566,p:{x:-89.6,y:-156.8}},{t:this.shape_266,p:{x:-83.6,y:-156.8}},{t:this.shape_434,p:{x:-76,y:-156.7}},{t:this.shape_435,p:{x:-68.6,y:-156.7}},{t:this.shape_433,p:{x:-62,y:-157.7}},{t:this.shape_394,p:{x:-55.5,y:-158.2}},{t:this.shape_419,p:{x:-44.7,y:-157.7}},{t:this.shape_183,p:{x:-38.2,y:-158.2}},{t:this.shape_417,p:{x:-30.6,y:-156.7}},{t:this.shape_391,p:{x:-16.8,y:-156.8}},{t:this.shape_411,p:{x:-7.2,y:-156.7}},{t:this.shape_259,p:{x:0.2,y:-158.2}},{t:this.shape_201,p:{x:8.1,y:-156.7}},{t:this.shape_481,p:{x:14.2,y:-158.2}},{t:this.shape_462,p:{x:22.5,y:-158.2}},{t:this.shape_189,p:{x:27.9,y:-156.7}},{t:this.shape_1129,p:{x:35.1,y:-155.3}},{t:this.shape_192,p:{x:42.3,y:-156.7}},{t:this.shape_446,p:{x:49.4,y:-156.8}},{t:this.shape_166,p:{x:52.1,y:-154}},{t:this.shape_583,p:{x:-325.4,y:-138.9}},{t:this.shape_581,p:{x:-315.3,y:-139.9}},{t:this.shape_285,p:{x:-308.2,y:-138.5}},{t:this.shape_293,p:{x:-301.5,y:-139.4}},{t:this.shape_287,p:{x:-291.8,y:-139.4}},{t:this.shape_283,p:{x:-285.3,y:-140}},{t:this.shape_282,p:{x:-277.7,y:-138.5}},{t:this.shape_556,p:{x:-265.6,y:-139.9}},{t:this.shape_682,p:{x:-259.6,y:-139.9}},{t:this.shape_280,p:{x:-254,y:-138.5}},{t:this.shape_263,p:{x:-246.4,y:-138.6}},{t:this.shape_210,p:{x:-239,y:-139.9}},{t:this.shape_767,p:{x:-233.1,y:-139.9}},{t:this.shape_200,p:{x:-227.1,y:-138.6}},{t:this.shape_196,p:{x:-219.8,y:-137.3}},{t:this.shape_322,p:{x:-206.3,y:-138.6}},{t:this.shape_591,p:{x:-196.8,y:-138.5}},{t:this.shape_199,p:{x:-189.4,y:-139.9}},{t:this.shape_272,p:{x:-181.5,y:-138.5}},{t:this.shape_284,p:{x:-170.6,y:-139.4}},{t:this.shape_388,p:{x:-164.2,y:-138.5}},{t:this.shape_927,p:{x:-154,y:-143.6}},{t:this.shape_1128},{t:this.shape_431,p:{x:-138,y:-138.4}},{t:this.shape_515,p:{x:-131.9,y:-139.9}},{t:this.shape_175,p:{x:-127.3,y:-139.4}},{t:this.shape_778,p:{x:-122.8,y:-139.9}},{t:this.shape_1127,p:{x:-116.5,y:-137.1}},{t:this.shape_252,p:{x:-110.6,y:-139.9}},{t:this.shape_342,p:{x:-105.3,y:-137.1}},{t:this.shape_804,p:{x:-99.6,y:-143.6}},{t:this.shape_576,p:{x:-325.4,y:-120.6}},{t:this.shape_325,p:{x:-314.2,y:-121.5}},{t:this.shape_1126,p:{x:-306,y:-120.2}},{t:this.shape_1125,p:{x:-297.1,y:-120.2}},{t:this.shape_273,p:{x:-284.2,y:-118.8}},{t:this.shape_1124},{t:this.shape_414,p:{x:-269.5,y:-120.2}},{t:this.shape_188,p:{x:-262.4,y:-120.3}},{t:this.shape_350,p:{x:-252,y:-121.7}},{t:this.shape_636,p:{x:-244.7,y:-120.2}},{t:this.shape_631,p:{x:-237.5,y:-120.2}},{t:this.shape_1123,p:{x:-230.1,y:-121.7}},{t:this.shape_184,p:{x:-223.5,y:-119.1}},{t:this.shape_472,p:{x:-216.8,y:-120.3}},{t:this.shape_1122},{t:this.shape_403,p:{x:-203.3,y:-120.2}},{t:this.shape_197,p:{x:-195.7,y:-120.3}},{t:this.shape_193,p:{x:-188.3,y:-121.7}},{t:this.shape_983,p:{x:-177.2}},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_376,p:{x:-155.4,y:-120.2}},{t:this.shape_268,p:{x:-149.3,y:-121.7}},{t:this.shape_187,p:{x:-143.9,y:-121.7}},{t:this.shape_209,p:{x:-133.3,y:-121.7}},{t:this.shape_667,p:{x:-127.7,y:-120.2}},{t:this.shape_1119,p:{x:-120.2,y:-120.2}},{t:this.shape_658,p:{x:-112.5,y:-121.7}},{t:this.shape_976,p:{x:-102.4}},{t:this.shape_728,p:{x:-97.8,y:-121.6}},{t:this.shape_457,p:{x:-89.8,y:-120.3}},{t:this.shape_753,p:{x:-82.2,y:-121.6}},{t:this.shape_202,p:{x:-77.8,y:-121.7}},{t:this.shape_251,p:{x:-72.3,y:-120.2}},{t:this.shape_401,p:{x:-65.4,y:-120.3}},{t:this.shape_637,p:{x:-56.2,y:-121.2}},{t:this.shape_1004,p:{x:-49.7,y:-120.2}},{t:this.shape_630,p:{x:-38.9,y:-121.2}},{t:this.shape_651,p:{x:-32.4,y:-121.7}},{t:this.shape_964,p:{x:-26.8}},{t:this.shape_649,p:{x:-21.9,y:-120.2}},{t:this.shape_257,p:{x:-16.6,y:-120.2}},{t:this.instance_12}]},1).to({state:[{t:this.shape_583,p:{x:-325.4,y:-160.1}},{t:this.shape_1157},{t:this.shape_1156},{t:this.shape_1155,p:{x:-295,y:-159.7}},{t:this.shape_263,p:{x:-286,y:-159.8}},{t:this.shape_462,p:{x:-279.9,y:-161.2}},{t:this.shape_1154,p:{x:-274.4}},{t:this.shape_1153,p:{x:-267}},{t:this.shape_276,p:{x:-259.6,y:-161.2}},{t:this.shape_927,p:{x:-246.7,y:-164.8}},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_262,p:{x:-219.7,y:-158.6}},{t:this.shape_401,p:{x:-213,y:-159.8}},{t:this.shape_436,p:{x:-207,y:-159.7}},{t:this.shape_200,p:{x:-199.4,y:-159.8}},{t:this.shape_196,p:{x:-192.1,y:-158.6}},{t:this.shape_351,p:{x:-184.8,y:-159.7}},{t:this.shape_1150},{t:this.shape_350,p:{x:-164.7,y:-161.2}},{t:this.shape_211,p:{x:-157.8,y:-159.8}},{t:this.shape_431,p:{x:-151.8,y:-159.7}},{t:this.shape_361,p:{x:-145.2,y:-159.7}},{t:this.shape_1149},{t:this.shape_341,p:{x:-131,y:-159.7}},{t:this.shape_356,p:{x:-124.4,y:-159.7}},{t:this.shape_640,p:{x:-119.3,y:-164.8}},{t:this.shape_1148},{t:this.shape_205,p:{x:-99.4,y:-159.8}},{t:this.shape_294,p:{x:-93.5,y:-159.7}},{t:this.shape_354,p:{x:-86.9,y:-159.7}},{t:this.shape_285,p:{x:-80.2,y:-159.7}},{t:this.shape_1147,p:{x:-73.6}},{t:this.shape_295,p:{x:-68.1,y:-159.7}},{t:this.shape_355,p:{x:-55,y:-159.7}},{t:this.shape_197,p:{x:-47.5,y:-159.8}},{t:this.shape_265,p:{x:-40,y:-161.2}},{t:this.shape_343,p:{x:-25.7,y:-159.7}},{t:this.shape_259,p:{x:-18.3,y:-161.2}},{t:this.shape_210,p:{x:-10.6,y:-161.2}},{t:this.shape_359,p:{x:3,y:-160.7}},{t:this.shape_1146,p:{x:9.5}},{t:this.shape_282,p:{x:17.1,y:-159.7}},{t:this.shape_809,p:{x:26.7,y:-159.8}},{t:this.shape_353,p:{x:41.9,y:-160.7}},{t:this.shape_1145},{t:this.shape_273,p:{x:62.2,y:-158.3}},{t:this.shape_1144,p:{x:69.4}},{t:this.shape_414,p:{x:76.9,y:-159.7}},{t:this.shape_169,p:{x:84,y:-159.8}},{t:this.shape_1143,p:{x:96.8}},{t:this.shape_358,p:{x:104.3,y:-161.2}},{t:this.shape_349,p:{x:111.8,y:-159.7}},{t:this.shape_348,p:{x:118.4,y:-160.7}},{t:this.shape_1142},{t:this.shape_290,p:{x:131.4,y:-159.7}},{t:this.shape_352,p:{x:138.1,y:-161.2}},{t:this.shape_1141},{t:this.shape_1140,p:{x:153.5}},{t:this.shape_804,p:{x:166,y:-164.8}},{t:this.shape_1139,p:{x:172.3}},{t:this.shape_472,p:{x:179.2,y:-159.8}},{t:this.shape_280,p:{x:185.2,y:-159.7}},{t:this.shape_288,p:{x:191.8,y:-159.7}},{t:this.shape_272,p:{x:198.4,y:-159.7}},{t:this.shape_347,p:{x:205.1,y:-160.7}},{t:this.shape_281,p:{x:210.6,y:-159.7}},{t:this.shape_943,p:{x:215.7,y:-164.8}},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_275,p:{x:-313,y:-142.9}},{t:this.shape_199,p:{x:-307.6,y:-142.9}},{t:this.shape_327,p:{x:-299.7,y:-141.5}},{t:this.shape_566,p:{x:-292.6,y:-141.6}},{t:this.shape_166,p:{x:-289.9,y:-138.7}},{t:this.shape_576,p:{x:-325.4,y:-123.6}},{t:this.shape_1136,p:{y:-124.5}},{t:this.shape_491,p:{x:-306.8,y:-123.2}},{t:this.shape_313,p:{x:-300.2,y:-123.2}},{t:this.shape_226,p:{x:-289.3,y:-124.2}},{t:this.shape_225,p:{x:-282.8,y:-124.7}},{t:this.shape_310,p:{x:-275.2,y:-123.2}},{t:this.shape_451,p:{x:-263.1,y:-124.7}},{t:this.shape_1061,p:{x:-256.2,y:-123.3}},{t:this.shape_403,p:{x:-250.3,y:-123.2}},{t:this.shape_228,p:{x:-243.7,y:-123.2}},{t:this.shape_219,p:{x:-237,y:-124.7}},{t:this.shape_220,p:{x:-226.2,y:-124.2}},{t:this.shape_1135,p:{x:-219.7}},{t:this.shape_223,p:{x:-209,y:-123.2}},{t:this.shape_473,p:{x:-200.3,y:-123.3}},{t:this.shape_560,p:{x:-190.8,y:-123.2}},{t:this.shape_309,p:{x:-183.3,y:-123.2}},{t:this.shape_217,p:{x:-176.7,y:-124.2}},{t:this.shape_216,p:{x:-170.2,y:-124.7}},{t:this.shape_214,p:{x:-159.3,y:-124.2}},{t:this.shape_213,p:{x:-152.8,y:-124.7}},{t:this.shape_227,p:{x:-145.2,y:-123.2}},{t:this.shape_218,p:{x:-133.4,y:-123.2}},{t:this.shape_193,p:{x:-126,y:-124.7}},{t:this.shape_184,p:{x:-118.3,y:-122.1}},{t:this.shape_215,p:{x:-111.1,y:-123.2}},{t:this.shape_221,p:{x:-104.5,y:-123.2}},{t:this.shape_551,p:{x:-93.7,y:-123.2}},{t:this.shape_1134},{t:this.shape_378,p:{x:-77.1,y:-121.8}},{t:this.shape_486,p:{x:-69.9,y:-123.2}},{t:this.shape_376,p:{x:-62.4,y:-123.2}},{t:this.shape_188,p:{x:-55.3,y:-123.3}},{t:this.shape_345,p:{x:-43.2,y:-123.3}},{t:this.shape_471,p:{x:-33.6,y:-123.2}},{t:this.shape_187,p:{x:-26.2,y:-124.7}},{t:this.shape_206,p:{x:-18.3,y:-123.2}},{t:this.shape_209,p:{x:-12.2,y:-124.7}},{t:this.instance_13}]},1).to({state:[{t:this.shape_684,p:{y:-160.1}},{t:this.shape_1204},{t:this.shape_1144,p:{x:-306.4}},{t:this.shape_516,p:{x:-298.8,y:-159.7}},{t:this.shape_1203},{t:this.shape_814,p:{x:-285,y:-161.2}},{t:this.shape_360,p:{x:-279.4,y:-159.7}},{t:this.shape_1202,p:{x:-267.9}},{t:this.shape_427,p:{x:-262.2,y:-161.2}},{t:this.shape_1201},{t:this.shape_1200,p:{x:-253}},{t:this.shape_1199,p:{x:-245.6}},{t:this.shape_346,p:{x:-234.5,y:-159.7}},{t:this.shape_713,p:{x:-227,y:-159.8}},{t:this.shape_353,p:{x:-216.1,y:-160.7}},{t:this.shape_352,p:{x:-209.6,y:-161.2}},{t:this.shape_351,p:{x:-202,y:-159.7}},{t:this.shape_288,p:{x:-191.2,y:-159.7}},{t:this.shape_345,p:{x:-182.6,y:-159.8}},{t:this.shape_343,p:{x:-173.1,y:-159.7}},{t:this.shape_401,p:{x:-166.2,y:-159.8}},{t:this.shape_348,p:{x:-161.2,y:-160.7}},{t:this.shape_349,p:{x:-150.5,y:-159.7}},{t:this.shape_470,p:{x:-142.7,y:-161.2}},{t:this.shape_469,p:{x:-137.1,y:-159.7}},{t:this.shape_341,p:{x:-130.1,y:-159.7}},{t:this.shape_572,p:{x:-122.9,y:-159.7}},{t:this.shape_347,p:{x:-116.6,y:-160.7}},{t:this.shape_685,p:{x:-111.5,y:-157}},{t:this.shape_608,p:{y:-141.9,x:-325.4}},{t:this.shape_325,p:{x:-312.5,y:-142.8}},{t:this.shape_1198},{t:this.shape_816,p:{x:-295.4,y:-141.4}},{t:this.shape_1197},{t:this.shape_1196},{t:this.shape_703,p:{x:-272.9,y:-141.6}},{t:this.shape_508,p:{x:-260.4,y:-142.4}},{t:this.shape_526,p:{x:-253.9,y:-143}},{t:this.shape_834,p:{x:-246.3,y:-141.5}},{t:this.shape_1195,p:{x:-232.5}},{t:this.shape_522,p:{x:-225,y:-143}},{t:this.shape_1194},{t:this.shape_498,p:{x:-210.9,y:-142.4}},{t:this.shape_517,p:{x:-204.4,y:-141.5}},{t:this.shape_523,p:{x:-197.9,y:-141.5}},{t:this.shape_518,p:{x:-191.2,y:-143}},{t:this.shape_1193,p:{x:-183.7}},{t:this.shape_1192},{t:this.shape_1191},{t:this.shape_507,p:{x:-159.3,y:-142.9}},{t:this.shape_962,p:{x:-154.9,y:-142.9}},{t:this.shape_544,p:{x:-149.3,y:-141.5}},{t:this.shape_511,p:{x:-135.8,y:-141.5}},{t:this.shape_1190,p:{x:-129.2}},{t:this.shape_961,p:{x:-117.6,y:-140.1}},{t:this.shape_492,p:{x:-110.4,y:-141.5}},{t:this.shape_513,p:{x:-102.8,y:-141.4}},{t:this.shape_382,p:{x:-95.8,y:-141.6}},{t:this.shape_521,p:{x:-84,y:-141.5}},{t:this.shape_1189,p:{x:-77,y:-141.6}},{t:this.shape_1188},{t:this.shape_262,p:{x:-67.3,y:-140.3}},{t:this.shape_1187,p:{x:-62.1}},{t:this.shape_691,p:{x:-56.1,y:-141.6}},{t:this.shape_537,p:{x:-48.7,y:-141.5}},{t:this.shape_268,p:{x:-42.7,y:-142.9}},{t:this.shape_577,p:{x:-31.7,y:-141.6}},{t:this.shape_514,p:{x:-25.9,y:-141.5}},{t:this.shape_519,p:{x:-19.4,y:-141.5}},{t:this.shape_496,p:{x:-13.7,y:-142.4}},{t:this.shape_540,p:{x:-7.2,y:-141.5}},{t:this.shape_488,p:{x:-0.2,y:-141.6}},{t:this.shape_1186,p:{x:9.7}},{t:this.shape_490,p:{x:17.6,y:-141.6}},{t:this.shape_509,p:{x:27.1,y:-141.5}},{t:this.shape_196,p:{x:34.3,y:-140.3}},{t:this.shape_536,p:{x:41.6,y:-141.5}},{t:this.shape_528,p:{x:47.7,y:-137.5}},{t:this.shape_506,p:{x:59.8,y:-141.5}},{t:this.shape_807,p:{x:65.6,y:-142.9}},{t:this.shape_1185},{t:this.shape_502,p:{x:74.8,y:-141.5}},{t:this.shape_829,p:{x:82.2,y:-143}},{t:this.shape_1184,p:{x:94.9,y:-141.5}},{t:this.shape_678,p:{x:102.5,y:-141.6}},{t:this.shape_1183},{t:this.shape_818,p:{x:121.3,y:-142.9}},{t:this.shape_344,p:{x:125.7,y:-142.9}},{t:this.shape_493,p:{x:130.4,y:-142.4}},{t:this.shape_336,p:{x:136.9,y:-141.5}},{t:this.shape_323,p:{x:143.9,y:-141.6}},{t:this.shape_408,p:{x:154.5,y:-141.9}},{t:this.shape_1182},{t:this.shape_1181},{t:this.shape_505,p:{x:182.3,y:-141.5}},{t:this.shape_430,p:{x:191.8,y:-141.6}},{t:this.shape_327,p:{x:201.4,y:-141.5}},{t:this.shape_271,p:{x:208.4,y:-141.6}},{t:this.shape_321,p:{x:214.2,y:-141.5}},{t:this.shape_1180},{t:this.shape_208,p:{x:-316.2,y:-123.2}},{t:this.shape_421,p:{x:-307.3,y:-123.2}},{t:this.shape_1179,p:{x:-293.8}},{t:this.shape_811,p:{x:-288.8,y:-124.6}},{t:this.shape_682,p:{x:-284.4,y:-124.7}},{t:this.shape_214,p:{x:-279.7,y:-124.2}},{t:this.shape_206,p:{x:-273.2,y:-123.2}},{t:this.shape_574,p:{x:-266.2,y:-123.3}},{t:this.shape_583,p:{x:-325.4,y:-105.4}},{t:this.shape_1178},{t:this.shape_785,p:{x:-308.8,y:-105}},{t:this.shape_458,p:{x:-301.3,y:-104.9}},{t:this.shape_1088,p:{x:-289.6,y:-105}},{t:this.shape_205,p:{x:-282.7,y:-105.1}},{t:this.shape_452,p:{x:-276.7,y:-105}},{t:this.shape_1070,p:{x:-265.1,y:-105}},{t:this.shape_451,p:{x:-257.3,y:-106.4}},{t:this.shape_664,p:{x:-251.3,y:-106.4}},{t:this.shape_441,p:{x:-245.7,y:-105}},{t:this.shape_1081,p:{x:-234.9,y:-105.9}},{t:this.shape_422,p:{x:-228.4,y:-105}},{t:this.shape_1065,p:{x:-216.8,y:-105}},{t:this.shape_210,p:{x:-209.5,y:-106.4}},{t:this.shape_386,p:{x:-203.5,y:-105}},{t:this.shape_436,p:{x:-196.5,y:-104.9}},{t:this.shape_424,p:{x:-189.9,y:-105}},{t:this.shape_1078,p:{x:-184.2,y:-105.9}},{t:this.shape_474,p:{x:-175.7,y:-105.1}},{t:this.shape_434,p:{x:-166.1,y:-105}},{t:this.shape_543,p:{x:-158.5,y:-105.1}},{t:this.shape_1067,p:{x:-151.8,y:-105.9}},{t:this.shape_692,p:{x:-141.5,y:-105}},{t:this.shape_437,p:{x:-134.3,y:-105}},{t:this.shape_500,p:{x:-126.7,y:-105.1}},{t:this.shape_711,p:{x:-120.1,y:-105.9}},{t:this.shape_237,p:{x:-114.1,y:-105.1}},{t:this.shape_794,p:{x:-108.3,y:-105}},{t:this.shape_392,p:{x:-101.8,y:-105}},{t:this.shape_454,p:{x:-96.1,y:-105.9}},{t:this.shape_707,p:{x:-91.1,y:-101}},{t:this.shape_1177},{t:this.shape_418,p:{x:-69.9,y:-106.5}},{t:this.shape_185,p:{x:-64.3,y:-106.4}},{t:this.shape_449,p:{x:-59.3,y:-105.9}},{t:this.shape_417,p:{x:-52.8,y:-105}},{t:this.shape_665,p:{x:-40.7,y:-106.4}},{t:this.shape_791,p:{x:-33.4,y:-105}},{t:this.shape_515,p:{x:-27.4,y:-106.4}},{t:this.shape_709,p:{x:-22,y:-105}},{t:this.shape_494,p:{x:-14.5,y:-105.1}},{t:this.shape_442,p:{x:-7.2,y:-105}},{t:this.shape_201,p:{x:0,y:-105}},{t:this.shape_1176},{t:this.shape_704,p:{x:16.8,y:-105}},{t:this.shape_335,p:{x:24.3,y:-105.1}},{t:this.shape_199,p:{x:31.7,y:-106.4}},{t:this.shape_365,p:{x:42.8,y:-105}},{t:this.shape_435,p:{x:49.3,y:-105}},{t:this.shape_448,p:{x:55.9,y:-105.9}},{t:this.shape_431,p:{x:62.4,y:-104.9}},{t:this.shape_478,p:{x:69.4,y:-105.1}},{t:this.shape_189,p:{x:75.2,y:-105}},{t:this.shape_443,p:{x:81.8,y:-105.9}},{t:this.shape_1175,p:{x:86.3}},{t:this.shape_440,p:{x:92.2,y:-105}},{t:this.shape_332,p:{x:99.7,y:-105.1}},{t:this.shape_1174},{t:this.shape_1173},{t:this.shape_433,p:{x:127.4,y:-105.9}},{t:this.shape_394,p:{x:133.9,y:-106.5}},{t:this.shape_192,p:{x:141.5,y:-105}},{t:this.shape_1172},{t:this.shape_183,p:{x:161.1,y:-106.5}},{t:this.shape_1171},{t:this.shape_419,p:{x:175.2,y:-105.9}},{t:this.shape_450,p:{x:181.7,y:-105}},{t:this.shape_234,p:{x:187.8,y:-102.2}},{t:this.shape_576,p:{x:-325.4,y:-87.1}},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_281,p:{x:-296,y:-86.7}},{t:this.shape_402,p:{x:-290.3,y:-87.7}},{t:this.shape_209,p:{x:-285.3,y:-88.2}},{t:this.shape_886,p:{x:-280,y:-85.3}},{t:this.shape_176,p:{x:-268.1,y:-88.1}},{t:this.shape_391,p:{x:-260.1,y:-86.8}},{t:this.shape_1029,p:{x:-250.2,y:-85.4}},{t:this.shape_1168,p:{x:-242.8,y:-86.7}},{t:this.shape_1167,p:{x:-235.8,y:-86.8}},{t:this.shape_400,p:{x:-230.8,y:-87.7}},{t:this.shape_274,p:{x:-224.5,y:-86.7}},{t:this.shape_315,p:{x:-217,y:-86.8}},{t:this.shape_275,p:{x:-210.9,y:-88.2}},{t:this.shape_174,p:{x:-205.6,y:-85.3}},{t:this.shape_1166},{t:this.shape_303,p:{x:-188.7,y:-85.3}},{t:this.shape_1060,p:{x:-181.5,y:-86.7}},{t:this.shape_414,p:{x:-173.9,y:-86.7}},{t:this.shape_277,p:{x:-159.6,y:-86.8}},{t:this.shape_294,p:{x:-152,y:-86.7}},{t:this.shape_285,p:{x:-144.4,y:-86.7}},{t:this.shape_193,p:{x:-137,y:-88.2}},{t:this.shape_396,p:{x:-123.3,y:-87.7}},{t:this.shape_1165,p:{x:-116.9,y:-86.7}},{t:this.shape_395,p:{x:-103.6,y:-87.7}},{t:this.shape_403,p:{x:-97.1,y:-86.7}},{t:this.shape_827,p:{x:-90,y:-86.8}},{t:this.shape_266,p:{x:-84.1,y:-86.8}},{t:this.shape_187,p:{x:-69.9,y:-88.2}},{t:this.shape_1030,p:{x:-62.1,y:-86.7}},{t:this.shape_1164,p:{x:-53.1,y:-86.7}},{t:this.shape_263,p:{x:-44.1,y:-86.8}},{t:this.shape_389,p:{x:-30.8,y:-87.7}},{t:this.shape_292,p:{x:-24.3,y:-88.2}},{t:this.shape_282,p:{x:-16.7,y:-86.7}},{t:this.shape_177,p:{x:-2.7,y:-86.7}},{t:this.shape_504,p:{x:3,y:-88.2}},{t:this.shape_178,p:{x:8.5,y:-86.7}},{t:this.shape_472,p:{x:15.4,y:-86.8}},{t:this.shape_767,p:{x:19.4,y:-88.1}},{t:this.shape_293,p:{x:24.4,y:-87.7}},{t:this.shape_552,p:{x:30.5,y:-85.3}},{t:this.shape_591,p:{x:44.4,y:-86.7}},{t:this.shape_1041,p:{x:51,y:-88.2}},{t:this.shape_287,p:{x:62.9,y:-87.7}},{t:this.shape_286,p:{x:69.4,y:-88.2}},{t:this.shape_280,p:{x:77,y:-86.7}},{t:this.shape_1163},{t:this.shape_283,p:{x:99,y:-88.2}},{t:this.shape_1162},{t:this.shape_284,p:{x:113.2,y:-87.7}},{t:this.shape_399,p:{x:119.6,y:-86.7}},{t:this.shape_175,p:{x:132.9,y:-87.7}},{t:this.shape_1161},{t:this.shape_473,p:{x:155.6,y:-86.8}},{t:this.shape_172,p:{x:165.1,y:-86.7}},{t:this.shape_1011,p:{x:172.7,y:-88.2}},{t:this.shape_272,p:{x:179.6,y:-86.7}},{t:this.shape_273,p:{x:193.6,y:-85.3}},{t:this.shape_388,p:{x:200.8,y:-86.7}},{t:this.shape_376,p:{x:208.3,y:-86.7}},{t:this.shape_211,p:{x:215.4,y:-86.8}},{t:this.shape_669,p:{x:-324.3,y:-68.5}},{t:this.shape_566,p:{x:-317.4,y:-68.6}},{t:this.shape_641,p:{x:-312.4,y:-69.4}},{t:this.shape_1155,p:{x:-304.5,y:-68.4}},{t:this.shape_656,p:{x:-295.5,y:-68.5}},{t:this.shape_188,p:{x:-288.5,y:-68.6}},{t:this.shape_1160},{t:this.shape_481,p:{x:-272.8,y:-69.9}},{t:this.shape_260,p:{x:-267.3,y:-68.5}},{t:this.shape_756,p:{x:-259.8,y:-68.5}},{t:this.shape_1123,p:{x:-252.1,y:-70}},{t:this.shape_202,p:{x:-242.5,y:-69.9}},{t:this.shape_264,p:{x:-238.9,y:-69.9}},{t:this.shape_658,p:{x:-232.8,y:-70}},{t:this.shape_258,p:{x:-225.9,y:-68.5}},{t:this.shape_647,p:{x:-214.2,y:-68.5}},{t:this.shape_1125,p:{x:-201.1,y:-68.4}},{t:this.shape_636,p:{x:-192.3,y:-68.5}},{t:this.shape_637,p:{x:-185.7,y:-69.4}},{t:this.shape_254,p:{x:-179.2,y:-68.5}},{t:this.shape_169,p:{x:-172.2,y:-68.6}},{t:this.shape_631,p:{x:-166.6,y:-68.5}},{t:this.shape_1119,p:{x:-159.4,y:-68.5}},{t:this.shape_252,p:{x:-153.3,y:-69.9}},{t:this.shape_638,p:{x:-147.8,y:-68.5}},{t:this.shape_253,p:{x:-140.8,y:-68.6}},{t:this.shape_1159},{t:this.shape_251,p:{x:-123,y:-68.5}},{t:this.shape_1158},{t:this.shape_200,p:{x:-111.6,y:-68.6}},{t:this.shape_630,p:{x:-104.9,y:-69.4}},{t:this.shape_675,p:{x:-100.4,y:-69.9}},{t:this.shape_197,p:{x:-94.5,y:-68.6}},{t:this.shape_184,p:{x:-87.1,y:-67.3}},{t:this.shape_166,p:{x:-81.3,y:-65.7}},{t:this.instance_14}]},1).to({state:[{t:this.shape_608,p:{y:-160.1,x:-325.4}},{t:this.shape_1133,p:{y:-161.2,x:-315.3}},{t:this.shape_1231,p:{x:-308.4}},{t:this.shape_1147,p:{x:-303.2}},{t:this.shape_294,p:{x:-296.7,y:-159.7}},{t:this.shape_472,p:{x:-289.7,y:-159.8}},{t:this.shape_242,p:{x:-279.9,y:-158.3}},{t:this.shape_1230},{t:this.shape_702,p:{x:-265.1,y:-159.7}},{t:this.shape_1153,p:{x:-253.5}},{t:this.shape_1140,p:{x:-245.7}},{t:this.shape_1229,p:{x:-237.9}},{t:this.shape_481,p:{x:-232,y:-161.2}},{t:this.shape_764,p:{x:-226.7,y:-158.3}},{t:this.shape_355,p:{x:-215.4,y:-159.7}},{t:this.shape_470,p:{x:-203.4,y:-161.2}},{t:this.shape_698,p:{x:-196,y:-159.7}},{t:this.shape_332,p:{x:-188.4,y:-159.8}},{t:this.shape_572,p:{x:-181.1,y:-159.7}},{t:this.shape_1146,p:{x:-173.9}},{t:this.shape_1228,p:{x:-162.1}},{t:this.shape_1227},{t:this.shape_1226},{t:this.shape_1225,p:{x:-142.1}},{t:this.shape_202,p:{x:-137.6,y:-161.2}},{t:this.shape_359,p:{x:-133,y:-160.7}},{t:this.shape_285,p:{x:-126.5,y:-159.7}},{t:this.shape_530,p:{x:-119.4,y:-159.8}},{t:this.shape_288,p:{x:-114.5,y:-159.7}},{t:this.shape_353,p:{x:-104.6,y:-160.7}},{t:this.shape_1224,p:{x:-98.1}},{t:this.shape_207,p:{x:-86.7,y:-158.3}},{t:this.shape_1223},{t:this.shape_670,p:{x:-72,y:-159.7}},{t:this.shape_401,p:{x:-64.9,y:-159.8}},{t:this.shape_1139,p:{x:-54.5}},{t:this.shape_358,p:{x:-47,y:-161.2}},{t:this.shape_1222},{t:this.shape_348,p:{x:-32.9,y:-160.7}},{t:this.shape_1154,p:{x:-26.4}},{t:this.shape_1221},{t:this.shape_281,p:{x:-10.6,y:-159.7}},{t:this.shape_343,p:{x:-4.1,y:-159.7}},{t:this.shape_255,p:{x:3,y:-159.7}},{t:this.shape_282,p:{x:10.3,y:-159.7}},{t:this.shape_347,p:{x:21.1,y:-160.7}},{t:this.shape_352,p:{x:27.6,y:-161.2}},{t:this.shape_280,p:{x:35.2,y:-159.7}},{t:this.shape_1220},{t:this.shape_1219},{t:this.shape_880,p:{x:54.6,y:-161.2}},{t:this.shape_272,p:{x:60.2,y:-159.7}},{t:this.shape_234,p:{x:66.4,y:-157}},{t:this.shape_583,p:{x:-325.4,y:-141.9}},{t:this.shape_546,p:{x:-312.7,y:-142.8}},{t:this.shape_545,p:{x:-303,y:-143}},{t:this.shape_544,p:{x:-295.4,y:-141.5}},{t:this.shape_315,p:{x:-287.8,y:-141.6}},{t:this.shape_723,p:{x:-276.3,y:-140.1}},{t:this.shape_1218},{t:this.shape_666,p:{x:-261.6,y:-141.4}},{t:this.shape_262,p:{x:-250,y:-140.3}},{t:this.shape_1217},{t:this.shape_1216},{t:this.shape_537,p:{x:-223.5,y:-141.5}},{t:this.shape_506,p:{x:-216.3,y:-141.5}},{t:this.shape_829,p:{x:-208.9,y:-143}},{t:this.shape_512,p:{x:-198.8,y:-142.4}},{t:this.shape_501,p:{x:-192.3,y:-141.5}},{t:this.shape_342,p:{x:-180.9,y:-140.1}},{t:this.shape_1215},{t:this.shape_516,p:{x:-166.2,y:-141.4}},{t:this.shape_488,p:{x:-159.1,y:-141.6}},{t:this.shape_1193,p:{x:-149}},{t:this.shape_237,p:{x:-142,y:-141.6}},{t:this.shape_333,p:{x:-138.1,y:-142.9}},{t:this.shape_196,p:{x:-132.4,y:-140.3}},{t:this.shape_818,p:{x:-127.1,y:-142.9}},{t:this.shape_277,p:{x:-121.2,y:-141.6}},{t:this.shape_514,p:{x:-113.7,y:-141.5}},{t:this.shape_503,p:{x:-107.7,y:-142.9}},{t:this.shape_819,p:{x:-97.6,y:-140.1}},{t:this.shape_541,p:{x:-90.2,y:-143}},{t:this.shape_1214},{t:this.shape_508,p:{x:-76,y:-142.4}},{t:this.shape_521,p:{x:-69.6,y:-141.5}},{t:this.shape_534,p:{x:-63,y:-141.5}},{t:this.shape_526,p:{x:-56.4,y:-143}},{t:this.shape_1213,p:{x:-48.8}},{t:this.shape_1212},{t:this.shape_276,p:{x:-29.5,y:-142.9}},{t:this.shape_1211,p:{x:-21.6}},{t:this.shape_502,p:{x:-14.4,y:-141.5}},{t:this.shape_513,p:{x:-7.2,y:-141.4}},{t:this.shape_554,p:{x:2.4,y:-141.6}},{t:this.shape_540,p:{x:12,y:-141.5}},{t:this.shape_266,p:{x:19.6,y:-141.6}},{t:this.shape_498,p:{x:26.3,y:-142.4}},{t:this.shape_1210},{t:this.shape_886,p:{x:41.7,y:-140.1}},{t:this.shape_492,p:{x:48.9,y:-141.5}},{t:this.shape_458,p:{x:56.5,y:-141.4}},{t:this.shape_1209},{t:this.shape_462,p:{x:64.8,y:-142.9}},{t:this.shape_515,p:{x:68.9,y:-142.9}},{t:this.shape_523,p:{x:77.7,y:-141.5}},{t:this.shape_536,p:{x:84.3,y:-141.5}},{t:this.shape_336,p:{x:91.9,y:-141.5}},{t:this.shape_496,p:{x:102.8,y:-142.4}},{t:this.shape_522,p:{x:109.3,y:-143}},{t:this.shape_509,p:{x:116.7,y:-141.5}},{t:this.shape_493,p:{x:123.3,y:-142.4}},{t:this.shape_1129,p:{x:133.6,y:-140.1}},{t:this.shape_1184,p:{x:140.8,y:-141.5}},{t:this.shape_436,p:{x:148.4,y:-141.4}},{t:this.shape_271,p:{x:155.4,y:-141.6}},{t:this.shape_464,p:{x:164.1,y:-142.9}},{t:this.shape_505,p:{x:169.5,y:-141.5}},{t:this.shape_378,p:{x:176.7,y:-140.1}},{t:this.shape_327,p:{x:183.9,y:-141.5}},{t:this.shape_211,p:{x:191,y:-141.6}},{t:this.shape_518,p:{x:201.1,y:-143}},{t:this.shape_321,p:{x:208.6,y:-141.5}},{t:this.shape_519,p:{x:215.1,y:-141.5}},{t:this.shape_489,p:{x:-324.3,y:-123.2}},{t:this.shape_427,p:{x:-318.3,y:-124.7}},{t:this.shape_188,p:{x:-313.3,y:-123.3}},{t:this.shape_864,p:{x:-307.3,y:-123.2}},{t:this.shape_480,p:{x:-299.9,y:-123.2}},{t:this.shape_265,p:{x:-292.5,y:-124.7}},{t:this.shape_303,p:{x:-285,y:-121.8}},{t:this.shape_556,p:{x:-273.2,y:-124.7}},{t:this.shape_565,p:{x:-265.8,y:-123.2}},{t:this.shape_563,p:{x:-258.2,y:-123.2}},{t:this.shape_263,p:{x:-250.6,y:-123.3}},{t:this.shape_431,p:{x:-238.8,y:-123.2}},{t:this.shape_1208,p:{x:-230.9,y:-121.9}},{t:this.shape_259,p:{x:-223.6,y:-124.7}},{t:this.shape_316,p:{x:-215.8,y:-123.2}},{t:this.shape_302,p:{x:-209.3,y:-124.2}},{t:this.shape_562,p:{x:-202.8,y:-123.2}},{t:this.shape_210,p:{x:-195.3,y:-124.7}},{t:this.shape_665,p:{x:-182.9,y:-124.7}},{t:this.shape_174,p:{x:-175.8,y:-121.8}},{t:this.shape_226,p:{x:-165.3,y:-124.2}},{t:this.shape_219,p:{x:-158.8,y:-124.7}},{t:this.shape_484,p:{x:-151.2,y:-123.2}},{t:this.shape_459,p:{x:-139.8,y:-123.2}},{t:this.shape_216,p:{x:-132.5,y:-124.7}},{t:this.shape_307,p:{x:-125.1,y:-123.2}},{t:this.shape_200,p:{x:-117.6,y:-123.3}},{t:this.shape_184,p:{x:-110.2,y:-122.1}},{t:this.shape_313,p:{x:-103,y:-123.2}},{t:this.shape_228,p:{x:-96.4,y:-123.2}},{t:this.shape_273,p:{x:-85.9,y:-121.8}},{t:this.shape_466,p:{x:-78.7,y:-123.2}},{t:this.shape_414,p:{x:-71.1,y:-123.2}},{t:this.shape_843,p:{x:-66.2,y:-128.3}},{t:this.shape_730,p:{x:-64,y:-128.3}},{t:this.shape_559,p:{x:-59.5,y:-123.2}},{t:this.shape_310,p:{x:-52.3,y:-123.2}},{t:this.shape_322,p:{x:-38.5,y:-123.3}},{t:this.shape_222,p:{x:-29,y:-123.2}},{t:this.shape_199,p:{x:-21.7,y:-124.7}},{t:this.shape_227,p:{x:-13.8,y:-123.2}},{t:this.shape_811,p:{x:-4,y:-124.6}},{t:this.shape_197,p:{x:2,y:-123.3}},{t:this.shape_223,p:{x:8.6,y:-123.2}},{t:this.shape_463,p:{x:13.2,y:-124.6}},{t:this.shape_193,p:{x:19,y:-124.7}},{t:this.shape_218,p:{x:26.9,y:-123.2}},{t:this.shape_220,p:{x:37.8,y:-124.2}},{t:this.shape_213,p:{x:44.3,y:-124.7}},{t:this.shape_215,p:{x:51.9,y:-123.2}},{t:this.shape_221,p:{x:62.7,y:-123.2}},{t:this.shape_1207},{t:this.shape_208,p:{x:80.8,y:-123.2}},{t:this.shape_566,p:{x:87.7,y:-123.3}},{t:this.shape_217,p:{x:92.7,y:-124.2}},{t:this.shape_309,p:{x:103.4,y:-123.2}},{t:this.shape_429,p:{x:111.2,y:-124.7}},{t:this.shape_386,p:{x:116.8,y:-123.2}},{t:this.shape_206,p:{x:123.8,y:-123.2}},{t:this.shape_455,p:{x:131,y:-123.2}},{t:this.shape_214,p:{x:137.3,y:-124.2}},{t:this.shape_166,p:{x:142.4,y:-120.5}},{t:this.shape_576,p:{x:-325.4,y:-105.4}},{t:this.shape_1206},{t:this.shape_418,p:{x:-307,y:-106.5}},{t:this.shape_201,p:{x:-299.4,y:-105}},{t:this.shape_169,p:{x:-288.2,y:-105.1}},{t:this.shape_192,p:{x:-282.2,y:-105}},{t:this.shape_701,p:{x:-275.6,y:-105}},{t:this.shape_403,p:{x:-269,y:-104.9}},{t:this.shape_209,p:{x:-262.9,y:-106.4}},{t:this.shape_443,p:{x:-258.2,y:-105.9}},{t:this.shape_424,p:{x:-248.5,y:-105}},{t:this.shape_394,p:{x:-241.9,y:-106.5}},{t:this.shape_1205},{t:this.shape_376,p:{x:-226.8,y:-104.9}},{t:this.shape_344,p:{x:-220.7,y:-106.4}},{t:this.shape_187,p:{x:-215.2,y:-106.4}},{t:this.shape_252,p:{x:-204.6,y:-106.4}},{t:this.shape_437,p:{x:-199.1,y:-105}},{t:this.shape_1130,p:{x:-191.6,y:-105}},{t:this.shape_695,p:{x:-183.9,y:-106.5}},{t:this.shape_392,p:{x:-173.8,y:-105}},{t:this.shape_198,p:{x:-169.1,y:-106.4}},{t:this.shape_473,p:{x:-161.2,y:-105.1}},{t:this.shape_1175,p:{x:-153.6}},{t:this.shape_275,p:{x:-149.1,y:-106.4}},{t:this.shape_189,p:{x:-143.7,y:-105}},{t:this.shape_253,p:{x:-136.7,y:-105.1}},{t:this.shape_433,p:{x:-127.5,y:-105.9}},{t:this.shape_411,p:{x:-121.1,y:-105}},{t:this.shape_419,p:{x:-110.3,y:-105.9}},{t:this.shape_183,p:{x:-103.8,y:-106.5}},{t:this.shape_420,p:{x:-98.2,y:-106.4}},{t:this.shape_365,p:{x:-93.2,y:-105}},{t:this.shape_191,p:{x:-88,y:-105}},{t:this.instance_15}]},1).to({state:[{t:this.shape_583,p:{x:-325.4,y:-160.1}},{t:this.shape_180,p:{x:-314,y:-161.1}},{t:this.shape_1237,p:{x:-305.2}},{t:this.shape_280,p:{x:-297.7,y:-159.7}},{t:this.shape_200,p:{x:-290.1,y:-159.8}},{t:this.shape_634,p:{x:-279.9,y:-164.8}},{t:this.shape_1133,p:{y:-161.2,x:-273.5}},{t:this.shape_210,p:{x:-265.7,y:-161.2}},{t:this.shape_1224,p:{x:-257.9}},{t:this.shape_467,p:{x:-250,y:-161.2}},{t:this.shape_272,p:{x:-242.6,y:-159.7}},{t:this.shape_570,p:{x:-232.6,y:-161.1}},{t:this.shape_275,p:{x:-228.4,y:-161.2}},{t:this.shape_252,p:{x:-224.3,y:-161.2}},{t:this.shape_376,p:{x:-218.7,y:-159.7}},{t:this.shape_281,p:{x:-212.1,y:-159.7}},{t:this.shape_348,p:{x:-206.4,y:-160.7}},{t:this.shape_577,p:{x:-200.5,y:-159.8}},{t:this.shape_343,p:{x:-194.7,y:-159.7}},{t:this.shape_347,p:{x:-188.1,y:-160.7}},{t:this.shape_1154,p:{x:-181.7}},{t:this.shape_323,p:{x:-174.7,y:-159.8}},{t:this.shape_804,p:{x:-170.3,y:-164.8}},{t:this.shape_576,p:{x:-325.4,y:-141.9}},{t:this.shape_1136,p:{y:-142.8}},{t:this.shape_534,p:{x:-306.8,y:-141.5}},{t:this.shape_834,p:{x:-300.2,y:-141.5}},{t:this.shape_1236,p:{x:-288.5}},{t:this.shape_345,p:{x:-274.8,y:-141.6}},{t:this.shape_552,p:{x:-265.6,y:-140.1}},{t:this.shape_574,p:{x:-258.9,y:-141.6}},{t:this.shape_1186,p:{x:-254.9}},{t:this.shape_537,p:{x:-249.1,y:-141.5}},{t:this.shape_199,p:{x:-241.8,y:-142.9}},{t:this.shape_1213,p:{x:-229.7}},{t:this.shape_1235},{t:this.shape_523,p:{x:-213.8,y:-141.5}},{t:this.shape_518,p:{x:-207.2,y:-143}},{t:this.shape_514,p:{x:-199.7,y:-141.5}},{t:this.shape_1234},{t:this.shape_544,p:{x:-184.5,y:-141.5}},{t:this.shape_519,p:{x:-177.9,y:-141.5}},{t:this.shape_1233},{t:this.shape_205,p:{x:-159.8,y:-141.6}},{t:this.shape_1184,p:{x:-153.9,y:-141.5}},{t:this.shape_255,p:{x:-146.8,y:-141.4}},{t:this.shape_818,p:{x:-141.5,y:-142.9}},{t:this.shape_193,p:{x:-135.7,y:-142.9}},{t:this.shape_540,p:{x:-127.8,y:-141.5}},{t:this.shape_187,p:{x:-120.4,y:-142.9}},{t:this.shape_508,p:{x:-109.2,y:-142.4}},{t:this.shape_501,p:{x:-102.8,y:-141.5}},{t:this.shape_502,p:{x:-91.4,y:-141.5}},{t:this.shape_188,p:{x:-84.7,y:-141.6}},{t:this.shape_536,p:{x:-78.7,y:-141.5}},{t:this.shape_509,p:{x:-71.3,y:-141.5}},{t:this.shape_498,p:{x:-64.7,y:-142.4}},{t:this.shape_336,p:{x:-58.2,y:-141.5}},{t:this.shape_505,p:{x:-46.6,y:-141.5}},{t:this.shape_1232},{t:this.shape_321,p:{x:-27.3,y:-141.5}},{t:this.shape_496,p:{x:-20.7,y:-142.4}},{t:this.shape_493,p:{x:-15.2,y:-142.4}},{t:this.shape_327,p:{x:-8.7,y:-141.5}},{t:this.shape_253,p:{x:-1.6,y:-141.6}},{t:this.shape_197,p:{x:4.3,y:-141.6}},{t:this.shape_326,p:{x:10.5,y:-141.5}},{t:this.instance_16}]},1).to({state:[{t:this.shape_715,p:{y:-160.1}},{t:this.shape_1303},{t:this.shape_1302},{t:this.shape_702,p:{x:-301.3,y:-159.7}},{t:this.shape_572,p:{x:-289.8,y:-159.7}},{t:this.shape_1153,p:{x:-282.7}},{t:this.shape_678,p:{x:-275.2,y:-159.8}},{t:this.shape_469,p:{x:-265.3,y:-159.7}},{t:this.shape_698,p:{x:-258.3,y:-159.7}},{t:this.shape_356,p:{x:-251.7,y:-159.7}},{t:this.shape_359,p:{x:-246,y:-160.7}},{t:this.shape_354,p:{x:-236.3,y:-159.7}},{t:this.shape_1301,p:{x:-231.7}},{t:this.shape_1300,p:{x:-223.7,y:-159.8}},{t:this.shape_1237,p:{x:-213.8}},{t:this.shape_1034,p:{x:-207.9,y:-161.2}},{t:this.shape_303,p:{x:-202.6,y:-158.3}},{t:this.shape_668,p:{x:-191.3,y:-161.2}},{t:this.shape_413,p:{x:-184,y:-159.8}},{t:this.shape_355,p:{x:-178.2,y:-159.7}},{t:this.shape_262,p:{x:-170.9,y:-158.6}},{t:this.shape_353,p:{x:-160.4,y:-160.7}},{t:this.shape_1146,p:{x:-153.9}},{t:this.shape_1038,p:{x:-146.3,y:-159.7}},{t:this.shape_804,p:{x:-136.1,y:-164.8}},{t:this.shape_841,p:{x:-131.4,y:-157}},{t:this.shape_343,p:{x:-125.1,y:-159.7}},{t:this.shape_1225,p:{x:-119.6}},{t:this.shape_634,p:{x:-115.2,y:-164.8}},{t:this.shape_1231,p:{x:-105.9}},{t:this.shape_1299,p:{x:-101.8}},{t:this.shape_930,p:{x:-97.3,y:-161.2}},{t:this.shape_774,p:{x:-91.7,y:-159.7}},{t:this.shape_1298},{t:this.shape_543,p:{x:-76,y:-159.8}},{t:this.shape_348,p:{x:-69.3,y:-160.7}},{t:this.shape_1154,p:{x:-62.9}},{t:this.shape_405,p:{x:-51.5,y:-158.3}},{t:this.shape_1297},{t:this.shape_670,p:{x:-36.7,y:-159.7}},{t:this.shape_968,p:{x:-29.7,y:-159.8}},{t:this.shape_1229,p:{x:-19.2}},{t:this.shape_358,p:{x:-11.8,y:-161.2}},{t:this.shape_1296},{t:this.shape_347,p:{x:2.4,y:-160.7}},{t:this.shape_1295,p:{x:8.8}},{t:this.shape_295,p:{x:15.4,y:-159.7}},{t:this.shape_352,p:{x:22,y:-161.2}},{t:this.shape_1228,p:{x:29.6}},{t:this.shape_1143,p:{x:37.4}},{t:this.shape_684,p:{y:-123.6}},{t:this.shape_1133,p:{y:-124.7,x:-315.3}},{t:this.shape_909,p:{x:-308.9,y:-124.7}},{t:this.shape_304,p:{x:-304.3,y:-124.2}},{t:this.shape_563,p:{x:-297.8,y:-123.2}},{t:this.shape_1294},{t:this.shape_500,p:{x:-284.8,y:-123.3}},{t:this.shape_316,p:{x:-277.3,y:-123.2}},{t:this.shape_302,p:{x:-270.8,y:-124.2}},{t:this.shape_1293,p:{x:-266.3}},{t:this.shape_559,p:{x:-260.7,y:-123.2}},{t:this.shape_562,p:{x:-253.5,y:-123.2}},{t:this.shape_837,p:{x:-247.4,y:-124.7}},{t:this.shape_781,p:{x:-242.1,y:-121.8}},{t:this.shape_1292},{t:this.shape_207,p:{x:-227.7,y:-121.8}},{t:this.shape_560,p:{x:-220.5,y:-123.2}},{t:this.shape_666,p:{x:-212.9,y:-123.2}},{t:this.shape_1052,p:{x:-199.1,y:-123.3}},{t:this.shape_307,p:{x:-189.7,y:-123.2}},{t:this.shape_770,p:{x:-182.5,y:-121.8}},{t:this.shape_223,p:{x:-172.1,y:-123.2}},{t:this.shape_484,p:{x:-165.4,y:-123.2}},{t:this.shape_629,p:{x:-159.3,y:-124.7}},{t:this.shape_313,p:{x:-153.7,y:-123.2}},{t:this.shape_468,p:{x:-146.5,y:-123.2}},{t:this.shape_226,p:{x:-140.2,y:-124.2}},{t:this.shape_1179,p:{x:-129.2}},{t:this.shape_557,p:{x:-124.2,y:-124.6}},{t:this.shape_462,p:{x:-119.7,y:-124.7}},{t:this.shape_310,p:{x:-114.1,y:-123.2}},{t:this.shape_608,p:{y:-123.6,x:-103.6}},{t:this.shape_1291},{t:this.shape_1290},{t:this.shape_815,p:{x:-79.4,y:-124.7}},{t:this.shape_222,p:{x:-74,y:-123.2}},{t:this.shape_459,p:{x:-66.8,y:-123.2}},{t:this.shape_227,p:{x:-59.6,y:-123.2}},{t:this.shape_1289},{t:this.shape_648,p:{x:-38.3,y:-123.3}},{t:this.shape_644,p:{x:-28.4,y:-124.7}},{t:this.shape_218,p:{x:-21,y:-123.2}},{t:this.shape_334,p:{x:-13.5,y:-124.7}},{t:this.shape_328,p:{x:-5.8,y:-124.7}},{t:this.shape_215,p:{x:2.1,y:-123.2}},{t:this.shape_276,p:{x:9.6,y:-124.7}},{t:this.shape_220,p:{x:20.7,y:-124.2}},{t:this.shape_475,p:{x:27.2,y:-123.2}},{t:this.shape_455,p:{x:38.6,y:-123.2}},{t:this.shape_213,p:{x:45.8,y:-124.7}},{t:this.shape_208,p:{x:53.3,y:-123.2}},{t:this.shape_494,p:{x:60.8,y:-123.3}},{t:this.shape_196,p:{x:68.1,y:-122.1}},{t:this.shape_206,p:{x:75.4,y:-123.2}},{t:this.shape_799,p:{x:85.2,y:-124.6}},{t:this.shape_391,p:{x:93.1,y:-123.3}},{t:this.shape_1288},{t:this.shape_301,p:{x:110.4,y:-123.2}},{t:this.shape_1189,p:{x:117.4,y:-123.3}},{t:this.shape_217,p:{x:122.4,y:-124.2}},{t:this.shape_1135,p:{x:133.1}},{t:this.shape_308,p:{x:140.9,y:-121.9}},{t:this.shape_214,p:{x:147.4,y:-124.2}},{t:this.shape_224,p:{x:151.9,y:-124.6}},{t:this.shape_309,p:{x:157.8,y:-123.2}},{t:this.shape_335,p:{x:165.4,y:-123.3}},{t:this.shape_221,p:{x:172,y:-123.2}},{t:this.shape_823,p:{x:177.2,y:-120.5}},{t:this.instance_17},{t:this.shape_583,p:{x:-325.4,y:38}},{t:this.shape_546,p:{x:-312.4,y:37.1}},{t:this.shape_292,p:{x:-302.7,y:36.9}},{t:this.shape_771,p:{x:-295.1,y:38.4}},{t:this.shape_332,p:{x:-287.5,y:38.3}},{t:this.shape_174,p:{x:-275.7,y:39.8}},{t:this.shape_1287},{t:this.shape_516,p:{x:-261,y:38.4}},{t:this.shape_777,p:{x:-249,y:38.4}},{t:this.shape_323,p:{x:-242.1,y:38.3}},{t:this.shape_360,p:{x:-236.1,y:38.4}},{t:this.shape_265,p:{x:-224.2,y:36.9}},{t:this.shape_1165,p:{x:-216.3,y:38.4}},{t:this.shape_315,p:{x:-208.8,y:38.3}},{t:this.shape_351,p:{x:-201.2,y:38.4}},{t:this.shape_762,p:{x:-191.1,y:37}},{t:this.shape_345,p:{x:-183.1,y:38.3}},{t:this.shape_1286},{t:this.shape_168,p:{x:-165.8,y:38.4}},{t:this.shape_205,p:{x:-158.8,y:38.3}},{t:this.shape_1005,p:{x:-153.8,y:37.4}},{t:this.shape_778,p:{x:-149.3,y:37}},{t:this.shape_277,p:{x:-143.4,y:38.3}},{t:this.shape_184,p:{x:-136,y:39.5}},{t:this.shape_1285},{t:this.shape_764,p:{x:-119.5,y:39.8}},{t:this.shape_1284},{t:this.shape_513,p:{x:-104.8,y:38.4}},{t:this.shape_1164,p:{x:-91.3,y:38.4}},{t:this.shape_775,p:{x:-84.3,y:37}},{t:this.shape_344,p:{x:-79.8,y:36.9}},{t:this.shape_814,p:{x:-75.7,y:36.9}},{t:this.shape_266,p:{x:-65.6,y:38.3}},{t:this.shape_769,p:{x:-58.1,y:38.4}},{t:this.shape_402,p:{x:-51.5,y:37.4}},{t:this.shape_291,p:{x:-47,y:37}},{t:this.shape_279,p:{x:-41.4,y:38.4}},{t:this.shape_341,p:{x:-34.1,y:38.4}},{t:this.shape_400,p:{x:-23,y:37.4}},{t:this.shape_286,p:{x:-16.5,y:36.9}},{t:this.shape_294,p:{x:-8.9,y:38.4}},{t:this.shape_603,p:{x:2.8,y:38.4}},{t:this.shape_285,p:{x:10.1,y:38.4}},{t:this.shape_177,p:{x:17.3,y:38.4}},{t:this.shape_396,p:{x:23.6,y:37.4}},{t:this.shape_399,p:{x:30.1,y:38.4}},{t:this.shape_382,p:{x:37.1,y:38.3}},{t:this.shape_290,p:{x:46.5,y:38.4}},{t:this.shape_283,p:{x:53.2,y:36.9}},{t:this.shape_772,p:{x:60.6,y:38.4}},{t:this.shape_1127,p:{x:68.4,y:39.7}},{t:this.shape_282,p:{x:75.9,y:38.4}},{t:this.shape_288,p:{x:82.5,y:38.4}},{t:this.shape_289,p:{x:93.5,y:38.4}},{t:this.shape_271,p:{x:100.4,y:38.3}},{t:this.shape_280,p:{x:106.4,y:38.4}},{t:this.shape_274,p:{x:118.3,y:38.4}},{t:this.shape_962,p:{x:124.3,y:36.9}},{t:this.shape_574,p:{x:129.4,y:38.3}},{t:this.shape_272,p:{x:135.3,y:38.4}},{t:this.shape_178,p:{x:142.8,y:38.4}},{t:this.shape_259,p:{x:150.1,y:36.9}},{t:this.shape_723,p:{x:157.7,y:39.8}},{t:this.shape_281,p:{x:168.4,y:38.4}},{t:this.shape_322,p:{x:177.1,y:38.3}},{t:this.shape_172,p:{x:186.5,y:38.4}},{t:this.shape_1167,p:{x:193.5,y:38.3}},{t:this.shape_395,p:{x:198.5,y:37.4}},{t:this.shape_1004,p:{x:-324.2,y:56.6}},{t:this.shape_1003,p:{y:55.2,x:-316.4}},{t:this.shape_386,p:{x:-310.8,y:56.6}},{t:this.shape_1283},{t:this.shape_1282},{t:this.shape_630,p:{x:-290.3,y:55.7}},{t:this.shape_649,p:{x:-284.8,y:56.6}},{t:this.shape_685,p:{x:-279.5,y:59.4}},{t:this.shape_576,p:{x:-325.4,y:92.7}},{t:this.shape_714,p:{x:-315,y:91.8}},{t:this.shape_1281},{t:this.shape_342,p:{x:-298.6,y:94.5}},{t:this.shape_1280},{t:this.shape_458,p:{x:-283.9,y:93.2}},{t:this.shape_210,p:{x:-270.5,y:91.7}},{t:this.shape_1279},{t:this.shape_436,p:{x:-255.1,y:93.2}},{t:this.shape_387,p:{x:-247.2,y:91.7}},{t:this.shape_682,p:{x:-241.3,y:91.7}},{t:this.shape_1278},{t:this.shape_1277},{t:this.shape_807,p:{x:-216.8,y:91.7}},{t:this.shape_873,p:{x:-213.2,y:91.7}},{t:this.shape_1276},{t:this.shape_1275},{t:this.shape_1274},{t:this.shape_263,p:{x:-179.9,y:93}},{t:this.shape_1273},{t:this.shape_1272},{t:this.shape_1271},{t:this.shape_268,p:{x:-141.2,y:91.7}},{t:this.shape_1270},{t:this.shape_273,p:{x:-128.6,y:94.5}},{t:this.shape_1269},{t:this.shape_827,p:{x:-114.3,y:93}},{t:this.shape_1268},{t:this.shape_1267},{t:this.shape_431,p:{x:-89.3,y:93.2}},{t:this.shape_473,p:{x:-79.7,y:93}},{t:this.shape_556,p:{x:-69.8,y:91.7}},{t:this.shape_200,p:{x:-62.4,y:93}},{t:this.shape_1266},{t:this.shape_860,p:{x:-49.4,y:91.7}},{t:this.shape_515,p:{x:-45,y:91.7}},{t:this.shape_887,p:{x:-40.8,y:97.1}},{t:this.shape_910,p:{x:-30.4,y:91.7}},{t:this.shape_1265},{t:this.shape_1264},{t:this.shape_1263},{t:this.shape_664,p:{x:-0.1,y:91.7}},{t:this.shape_275,p:{x:4,y:91.7}},{t:this.shape_1262},{t:this.shape_1261},{t:this.shape_1260},{t:this.shape_1259},{t:this.shape_1129,p:{x:48.6,y:94.5}},{t:this.shape_1258},{t:this.shape_414,p:{x:63.3,y:93.2}},{t:this.shape_1257},{t:this.shape_1256},{t:this.shape_1255},{t:this.shape_199,p:{x:103.1,y:91.7}},{t:this.shape_1254},{t:this.shape_477,p:{x:118.8,y:91.7}},{t:this.shape_1253},{t:this.shape_570,p:{x:137.9,y:91.8}},{t:this.shape_504,p:{x:142.1,y:91.7}},{t:this.shape_209,p:{x:146.2,y:91.7}},{t:this.shape_403,p:{x:151.8,y:93.2}},{t:this.shape_888,p:{x:158.4,y:93.1}},{t:this.shape_1252},{t:this.shape_188,p:{x:170,y:93}},{t:this.shape_1251},{t:this.shape_1250},{t:this.shape_1249},{t:this.shape_253,p:{x:195.8,y:93}},{t:this.shape_234,p:{x:198.5,y:95.9}},{t:this.shape_683,p:{x:-323.8,y:109.9}},{t:this.shape_197,p:{x:-315.9,y:111.3}},{t:this.shape_193,p:{x:-308.5,y:109.9}},{t:this.shape_378,p:{x:-296.7,y:112.8}},{t:this.shape_404,p:{x:-289.5,y:111.4}},{t:this.shape_376,p:{x:-282,y:111.4}},{t:this.shape_1248,p:{x:-268.8,y:111.4}},{t:this.shape_1247},{t:this.shape_202,p:{x:-257.3,y:109.9}},{t:this.shape_481,p:{x:-253.2,y:109.9}},{t:this.shape_470,p:{x:-243.1,y:109.9}},{t:this.shape_1246},{t:this.shape_372,p:{x:-224,y:111.4}},{t:this.shape_665,p:{x:-216.2,y:109.9}},{t:this.shape_252,p:{x:-210.3,y:109.9}},{t:this.shape_1245},{t:this.shape_389,p:{x:-193.8,y:110.4}},{t:this.shape_377,p:{x:-187.4,y:111.4}},{t:this.shape_1244},{t:this.shape_187,p:{x:-168.2,y:109.9}},{t:this.shape_407,p:{x:-162.3,y:110}},{t:this.shape_293,p:{x:-157.3,y:110.4}},{t:this.shape_287,p:{x:-147.5,y:110.4}},{t:this.shape_1243},{t:this.shape_1242},{t:this.shape_578,p:{x:-122,y:111.4}},{t:this.shape_1241},{t:this.shape_380,p:{x:-107.5,y:111.4}},{t:this.shape_284,p:{x:-101.2,y:110.4}},{t:this.shape_1168,p:{x:-94.8,y:111.4}},{t:this.shape_566,p:{x:-87.8,y:111.3}},{t:this.shape_175,p:{x:-78.6,y:110.4}},{t:this.shape_1240},{t:this.shape_1239},{t:this.shape_169,p:{x:-57.4,y:111.3}},{t:this.shape_1238},{t:this.shape_166,p:{x:-45.3,y:114.1}}]},1).to({state:[{t:this.shape_608,p:{y:-160.1,x:-325.4}},{t:this.shape_584,p:{x:-315.3,y:-161.1}},{t:this.shape_294,p:{x:-308.2,y:-159.7}},{t:this.shape_814,p:{x:-302.1,y:-161.2}},{t:this.shape_285,p:{x:-296.5,y:-159.7}},{t:this.shape_1200,p:{x:-289.2}},{t:this.shape_348,p:{x:-282.9,y:-160.7}},{t:this.shape_242,p:{x:-272.6,y:-158.3}},{t:this.shape_1154,p:{x:-265.4}},{t:this.shape_513,p:{x:-257.8,y:-159.7}},{t:this.shape_446,p:{x:-250.8,y:-159.8}},{t:this.shape_988,p:{x:-241,y:-159.7}},{t:this.shape_282,p:{x:-233.8,y:-159.7}},{t:this.shape_572,p:{x:-226.5,y:-159.7}},{t:this.shape_347,p:{x:-220.2,y:-160.7}},{t:this.shape_1224,p:{x:-213.8}},{t:this.shape_632,p:{x:-206.8,y:-159.8}},{t:this.shape_281,p:{x:-197.6,y:-159.7}},{t:this.shape_352,p:{x:-191,y:-161.2}},{t:this.shape_355,p:{x:-183.5,y:-159.7}},{t:this.shape_1381},{t:this.shape_280,p:{x:-168.3,y:-159.7}},{t:this.shape_629,p:{x:-158,y:-161.2}},{t:this.shape_343,p:{x:-152.5,y:-159.7}},{t:this.shape_770,p:{x:-145.4,y:-158.3}},{t:this.shape_272,p:{x:-138.1,y:-159.7}},{t:this.shape_401,p:{x:-131.1,y:-159.8}},{t:this.shape_841,p:{x:-128.4,y:-157}},{t:this.shape_583,p:{x:-325.4,y:-141.9}},{t:this.shape_1380},{t:this.shape_492,p:{x:-306.6,y:-141.5}},{t:this.shape_1379},{t:this.shape_764,p:{x:-291.6,y:-140.1}},{t:this.shape_1236,p:{x:-280.3}},{t:this.shape_703,p:{x:-272.8,y:-141.6}},{t:this.shape_210,p:{x:-265.4,y:-142.9}},{t:this.shape_520,p:{x:-253,y:-140.1}},{t:this.shape_537,p:{x:-245.7,y:-141.5}},{t:this.shape_1378},{t:this.shape_1377},{t:this.shape_1376},{t:this.shape_1375},{t:this.shape_1374},{t:this.shape_674,p:{x:-202.3,y:-141.4}},{t:this.shape_1373},{t:this.shape_253,p:{x:-188,y:-141.6}},{t:this.shape_514,p:{x:-182.2,y:-141.5}},{t:this.shape_427,p:{x:-176.2,y:-142.9}},{t:this.shape_1372},{t:this.shape_1187,p:{x:-162.9}},{t:this.shape_743,p:{x:-154.9,y:-141.6}},{t:this.shape_1371},{t:this.shape_1370},{t:this.shape_823,p:{x:-133.5,y:-138.7}},{t:this.shape_581,p:{x:-123.2,y:-142.9}},{t:this.shape_1211,p:{x:-116.1}},{t:this.shape_207,p:{x:-104.7,y:-140.1}},{t:this.shape_525,p:{x:-97.5,y:-141.5}},{t:this.shape_458,p:{x:-90,y:-141.4}},{t:this.shape_1369},{t:this.shape_1368},{t:this.shape_1367},{t:this.shape_509,p:{x:-58.4,y:-141.5}},{t:this.shape_1366},{t:this.shape_1365},{t:this.shape_505,p:{x:-33.7,y:-141.5}},{t:this.shape_477,p:{x:-21.7,y:-142.9}},{t:this.shape_436,p:{x:-14.3,y:-141.4}},{t:this.shape_691,p:{x:-6.7,y:-141.6}},{t:this.shape_1364},{t:this.shape_1363},{t:this.shape_1362},{t:this.shape_1361},{t:this.shape_1360},{t:this.shape_1359},{t:this.shape_1358},{t:this.shape_1357},{t:this.shape_321,p:{x:66.9,y:-141.5}},{t:this.shape_1300,p:{x:76.4,y:-141.6}},{t:this.shape_1356},{t:this.shape_255,p:{x:97.4,y:-141.4}},{t:this.shape_1355,p:{x:104.7}},{t:this.shape_1354},{t:this.shape_1353},{t:this.shape_826,p:{x:124.7,y:-141.5}},{t:this.shape_935,p:{x:131.7,y:-141.6}},{t:this.shape_1352},{t:this.shape_685,p:{x:141.9,y:-138.7}},{t:this.shape_576,p:{x:-325.4,y:-123.6}},{t:this.shape_590,p:{x:-313.6,y:-124.6}},{t:this.shape_317,p:{x:-305.8,y:-124.7}},{t:this.shape_879,p:{x:-298.2,y:-123.2}},{t:this.shape_678,p:{x:-290.6,y:-123.3}},{t:this.shape_479,p:{x:-277.9,y:-121.8}},{t:this.shape_1351},{t:this.shape_431,p:{x:-263.1,y:-123.2}},{t:this.shape_1350},{t:this.shape_869,p:{x:-244.4,y:-123.2}},{t:this.shape_344,p:{x:-238.3,y:-124.7}},{t:this.shape_864,p:{x:-232.7,y:-123.2}},{t:this.shape_459,p:{x:-225.5,y:-123.2}},{t:this.shape_1349},{t:this.shape_1348},{t:this.shape_807,p:{x:-201.4,y:-124.7}},{t:this.shape_275,p:{x:-197.3,y:-124.7}},{t:this.shape_806,p:{x:-186.3,y:-123.2}},{t:this.shape_550,p:{x:-179.7,y:-124.7}},{t:this.shape_1347},{t:this.shape_311,p:{x:-162.6,y:-124.7}},{t:this.shape_565,p:{x:-155,y:-123.2}},{t:this.shape_664,p:{x:-143.4,y:-124.7}},{t:this.shape_1346},{t:this.shape_174,p:{x:-130.8,y:-121.8}},{t:this.shape_563,p:{x:-123.6,y:-123.2}},{t:this.shape_323,p:{x:-116.5,y:-123.3}},{t:this.shape_1345},{t:this.shape_1344,p:{x:-100.5,y:-123.2}},{t:this.shape_455,p:{x:-94.7,y:-123.2}},{t:this.shape_236,p:{x:-87.5,y:-123.2}},{t:this.shape_1343},{t:this.shape_1342},{t:this.shape_562,p:{x:-68.3,y:-123.2}},{t:this.shape_1341},{t:this.shape_1340},{t:this.shape_560,p:{x:-36.9,y:-123.2}},{t:this.shape_530,p:{x:-29.9,y:-123.3}},{t:this.shape_1339},{t:this.shape_788,p:{x:-20.2,y:-122.1}},{t:this.shape_813,p:{x:-15,y:-124.6}},{t:this.shape_543,p:{x:-9,y:-123.3}},{t:this.shape_1338},{t:this.shape_515,p:{x:4.4,y:-124.7}},{t:this.shape_1337},{t:this.shape_1336},{t:this.shape_500,p:{x:27.9,y:-123.3}},{t:this.shape_199,p:{x:35.4,y:-124.7}},{t:this.shape_779,p:{x:48.5,y:-122.1}},{t:this.shape_488,p:{x:55.2,y:-123.3}},{t:this.shape_1335},{t:this.shape_414,p:{x:68.6,y:-123.2}},{t:this.shape_238,p:{x:76.5,y:-121.9}},{t:this.shape_487,p:{x:88.5,y:-124.2}},{t:this.shape_225,p:{x:95,y:-124.7}},{t:this.shape_484,p:{x:102.6,y:-123.2}},{t:this.shape_345,p:{x:112.2,y:-123.3}},{t:this.shape_1293,p:{x:125.2}},{t:this.shape_494,p:{x:131.2,y:-123.3}},{t:this.shape_312,p:{x:137.8,y:-124.2}},{t:this.shape_486,p:{x:144.3,y:-123.2}},{t:this.shape_1334},{t:this.shape_1333},{t:this.shape_538,p:{x:177.7,y:-123.3}},{t:this.shape_489,p:{x:187.2,y:-123.2}},{t:this.shape_237,p:{x:194.1,y:-123.3}},{t:this.shape_304,p:{x:199.1,y:-124.2}},{t:this.shape_1104,p:{x:-324.2,y:-105}},{t:this.shape_470,p:{x:-316.4,y:-106.4}},{t:this.shape_686,p:{x:-310.8,y:-105}},{t:this.shape_434,p:{x:-303.8,y:-105}},{t:this.shape_1332},{t:this.shape_711,p:{x:-290.3,y:-105.9}},{t:this.shape_467,p:{x:-279.3,y:-106.4}},{t:this.shape_723,p:{x:-272.2,y:-103.6}},{t:this.shape_211,p:{x:-261.3,y:-105.1}},{t:this.shape_198,p:{x:-257.3,y:-106.4}},{t:this.shape_331,p:{x:-251.6,y:-103.8}},{t:this.shape_394,p:{x:-244.4,y:-106.5}},{t:this.shape_454,p:{x:-237.7,y:-105.9}},{t:this.shape_705,p:{x:-227.4,y:-105}},{t:this.shape_504,p:{x:-221.6,y:-106.4}},{t:this.shape_428,p:{x:-218,y:-106.4}},{t:this.shape_696,p:{x:-212.4,y:-105}},{t:this.shape_695,p:{x:-205,y:-106.5}},{t:this.shape_1082,p:{x:-200.1,y:-106.4}},{t:this.shape_335,p:{x:-194.2,y:-105.1}},{t:this.shape_314,p:{x:-186.8,y:-103.8}},{t:this.shape_449,p:{x:-176.3,y:-105.9}},{t:this.shape_183,p:{x:-169.8,y:-106.5}},{t:this.shape_417,p:{x:-162.2,y:-105}},{t:this.shape_648,p:{x:-152.6,y:-105.1}},{t:this.shape_704,p:{x:-139,y:-105}},{t:this.shape_332,p:{x:-131.5,y:-105.1}},{t:this.shape_193,p:{x:-124,y:-106.4}},{t:this.shape_804,p:{x:-113.5,y:-110.1}},{t:this.shape_692,p:{x:-107.8,y:-105}},{t:this.shape_687,p:{x:-100.6,y:-105}},{t:this.shape_315,p:{x:-93,y:-105.1}},{t:this.shape_559,p:{x:-85.8,y:-104.9}},{t:this.shape_201,p:{x:-78.6,y:-105}},{t:this.shape_205,p:{x:-71.5,y:-105.1}},{t:this.shape_448,p:{x:-66.5,y:-105.9}},{t:this.shape_443,p:{x:-56.8,y:-105.9}},{t:this.shape_790,p:{x:-50.3,y:-105}},{t:this.shape_435,p:{x:-38.7,y:-105}},{t:this.shape_365,p:{x:-28,y:-105}},{t:this.shape_391,p:{x:-19.4,y:-105.1}},{t:this.shape_189,p:{x:-9.9,y:-105}},{t:this.shape_169,p:{x:-3,y:-105.1}},{t:this.shape_433,p:{x:2,y:-105.9}},{t:this.shape_689,p:{x:12.7,y:-105}},{t:this.shape_1331},{t:this.shape_643,p:{x:26.1,y:-105}},{t:this.shape_192,p:{x:33.1,y:-105}},{t:this.shape_442,p:{x:40.3,y:-105}},{t:this.shape_419,p:{x:46.6,y:-105.9}},{t:this.shape_1330},{t:this.shape_234,p:{x:56.2,y:-102.2}},{t:this.instance_18,p:{scaleX:0.166,scaleY:0.166,x:-320,y:-74}},{t:this.shape_1329},{t:this.shape_325,p:{x:-318.4,y:74.1}},{t:this.shape_501,p:{x:-310.2,y:75.4}},{t:this.shape_1328},{t:this.shape_818,p:{x:-299.1,y:74}},{t:this.shape_1327},{t:this.shape_1326,p:{x:-286.3,y:75.4}},{t:this.shape_1325},{t:this.shape_545,p:{x:-268.6,y:73.9}},{t:this.shape_1324},{t:this.shape_542,p:{x:-254.6,y:74.5}},{t:this.shape_1323},{t:this.shape_541,p:{x:-233.1,y:73.9}},{t:this.shape_839,p:{x:-225.5,y:75.4}},{t:this.shape_277,p:{x:-217.9,y:75.3}},{t:this.shape_342,p:{x:-206.1,y:76.8}},{t:this.shape_1184,p:{x:-198.9,y:75.4}},{t:this.shape_403,p:{x:-191.4,y:75.5}},{t:this.shape_430,p:{x:-177.2,y:75.3}},{t:this.shape_1322},{t:this.shape_1321},{t:this.shape_836,p:{x:-153.2,y:75.4}},{t:this.shape_838,p:{x:-141.4,y:75.4}},{t:this.shape_526,p:{x:-134.2,y:73.9}},{t:this.shape_1320},{t:this.shape_266,p:{x:-119.2,y:75.3}},{t:this.shape_262,p:{x:-111.9,y:76.6}},{t:this.shape_834,p:{x:-104.6,y:75.4}},{t:this.shape_835,p:{x:-98,y:75.4}},{t:this.shape_529,p:{x:-87.8,y:74.5}},{t:this.shape_324,p:{x:-81.3,y:75.4}},{t:this.shape_524,p:{x:-70.2,y:74.5}},{t:this.shape_522,p:{x:-63.7,y:73.9}},{t:this.shape_544,p:{x:-56.1,y:75.4}},{t:this.shape_534,p:{x:-44.9,y:75.4}},{t:this.shape_457,p:{x:-36.3,y:75.3}},{t:this.shape_1319},{t:this.shape_188,p:{x:-19.9,y:75.3}},{t:this.shape_512,p:{x:-14.9,y:74.5}},{t:this.shape_521,p:{x:-3.9,y:75.4}},{t:this.shape_556,p:{x:4,y:74}},{t:this.shape_485,p:{x:9.5,y:75.4}},{t:this.shape_540,p:{x:16.5,y:75.4}},{t:this.shape_506,p:{x:23.8,y:75.4}},{t:this.shape_508,p:{x:30.1,y:74.5}},{t:this.shape_507,p:{x:39.1,y:74}},{t:this.shape_263,p:{x:45.1,y:75.3}},{t:this.shape_523,p:{x:51.7,y:75.4}},{t:this.shape_333,p:{x:56.3,y:74}},{t:this.shape_187,p:{x:62.1,y:74}},{t:this.shape_536,p:{x:70,y:75.4}},{t:this.shape_1318},{t:this.shape_519,p:{x:93.1,y:75.4}},{t:this.shape_1317},{t:this.shape_1316},{t:this.shape_577,p:{x:118.1,y:75.3}},{t:this.shape_498,p:{x:123.1,y:74.5}},{t:this.shape_329,p:{x:134.1,y:75.4}},{t:this.shape_1315},{t:this.shape_469,p:{x:147.5,y:75.4}},{t:this.shape_336,p:{x:154.5,y:75.4}},{t:this.shape_502,p:{x:161.8,y:75.4}},{t:this.shape_496,p:{x:168.1,y:74.5}},{t:this.shape_1314},{t:this.shape_493,p:{x:183.3,y:74.5}},{t:this.shape_518,p:{x:189.8,y:73.9}},{t:this.shape_327,p:{x:197.4,y:75.4}},{t:this.shape_1313},{t:this.shape_219,p:{x:-317.3,y:92.2}},{t:this.shape_480,p:{x:-309.8,y:93.7}},{t:this.shape_200,p:{x:-302.3,y:93.6}},{t:this.shape_196,p:{x:-295,y:94.8}},{t:this.shape_313,p:{x:-287.7,y:93.7}},{t:this.shape_1312},{t:this.shape_1311},{t:this.shape_557,p:{x:-261.9,y:92.3}},{t:this.shape_462,p:{x:-257.4,y:92.2}},{t:this.shape_209,p:{x:-253.3,y:92.2}},{t:this.shape_316,p:{x:-243.7,y:93.7}},{t:this.shape_1310},{t:this.shape_1309},{t:this.shape_481,p:{x:-222.2,y:92.2}},{t:this.shape_273,p:{x:-216.9,y:95.1}},{t:this.shape_302,p:{x:-206.4,y:92.7}},{t:this.shape_1308},{t:this.shape_1307},{t:this.shape_226,p:{x:-181.7,y:92.7}},{t:this.shape_216,p:{x:-175.2,y:92.2}},{t:this.shape_310,p:{x:-167.6,y:93.7}},{t:this.shape_478,p:{x:-160.5,y:93.6}},{t:this.shape_491,p:{x:-151.4,y:93.7}},{t:this.shape_473,p:{x:-142.7,y:93.6}},{t:this.shape_307,p:{x:-133.3,y:93.7}},{t:this.shape_472,p:{x:-126.3,y:93.6}},{t:this.shape_220,p:{x:-121.3,y:92.7}},{t:this.shape_1306},{t:this.shape_665,p:{x:-102.8,y:92.2}},{t:this.shape_386,p:{x:-97.3,y:93.7}},{t:this.shape_227,p:{x:-90.3,y:93.7}},{t:this.shape_1305},{t:this.shape_217,p:{x:-76.7,y:92.7}},{t:this.shape_228,p:{x:-71.2,y:93.7}},{t:this.shape_463,p:{x:-62.4,y:92.3}},{t:this.shape_197,p:{x:-56.4,y:93.6}},{t:this.shape_214,p:{x:-45.6,y:92.7}},{t:this.shape_213,p:{x:-39.1,y:92.2}},{t:this.shape_218,p:{x:-31.5,y:93.7}},{t:this.shape_223,p:{x:-20.7,y:93.7}},{t:this.shape_222,p:{x:-14.2,y:93.7}},{t:this.shape_474,p:{x:-4.7,y:93.6}},{t:this.shape_215,p:{x:4.9,y:93.7}},{t:this.shape_184,p:{x:16.5,y:94.8}},{t:this.shape_574,p:{x:23.2,y:93.6}},{t:this.shape_1304},{t:this.shape_376,p:{x:36.6,y:93.7}},{t:this.shape_1208,p:{x:44.5,y:95}},{t:this.shape_208,p:{x:56,y:93.7}},{t:this.shape_221,p:{x:62.5,y:93.7}},{t:this.shape_1132,p:{x:74.8,y:93.7}},{t:this.shape_206,p:{x:83.8,y:93.7}},{t:this.shape_252,p:{x:89.9,y:92.2}},{t:this.shape_320,p:{x:94,y:92.2}},{t:this.shape_166,p:{x:98.2,y:96.4}}]},1).to({state:[{t:this.shape_684,p:{y:-160.1}},{t:this.shape_1423},{t:this.shape_1299,p:{x:-308.8}},{t:this.shape_779,p:{x:-303.1,y:-158.6}},{t:this.shape_358,p:{x:-295.8,y:-161.2}},{t:this.shape_1422},{t:this.shape_1421},{t:this.shape_1420},{t:this.shape_1301,p:{x:-269.5}},{t:this.shape_1419},{t:this.shape_1199,p:{x:-256.5}},{t:this.shape_1295,p:{x:-245.4}},{t:this.shape_703,p:{x:-237.9,y:-159.8}},{t:this.shape_1418},{t:this.shape_352,p:{x:-220.5,y:-161.2}},{t:this.shape_1417},{t:this.shape_290,p:{x:-202.1,y:-159.7}},{t:this.shape_345,p:{x:-193.5,y:-159.8}},{t:this.shape_1416},{t:this.shape_632,p:{x:-177.1,y:-159.8}},{t:this.shape_1147,p:{x:-172.1}},{t:this.shape_1154,p:{x:-161.4}},{t:this.shape_1415},{t:this.shape_686,p:{x:-148,y:-159.7}},{t:this.shape_1414},{t:this.shape_1202,p:{x:-133.8}},{t:this.shape_359,p:{x:-127.5,y:-160.7}},{t:this.shape_337,p:{x:-118.3,y:-161.2}},{t:this.shape_1153,p:{x:-112.8}},{t:this.shape_342,p:{x:-105.7,y:-158.3}},{t:this.shape_1413},{t:this.shape_827,p:{x:-91.4,y:-159.8}},{t:this.shape_939,p:{x:-88.7,y:-157}},{t:this.shape_587,p:{x:-78.4,y:-161.1}},{t:this.shape_1412},{t:this.shape_268,p:{x:-65.2,y:-161.2}},{t:this.shape_1056,p:{x:-59.6,y:-159.7}},{t:this.shape_1200,p:{x:-52.3}},{t:this.shape_353,p:{x:-46,y:-160.7}},{t:this.shape_700,p:{x:-36.9,y:-164.8}},{t:this.shape_1411},{t:this.shape_1038,p:{x:-21.9,y:-159.7}},{t:this.shape_1410},{t:this.shape_584,p:{x:-0.2,y:-161.1}},{t:this.shape_743,p:{x:9,y:-159.8}},{t:this.shape_355,p:{x:18.4,y:-159.7}},{t:this.shape_488,p:{x:25.4,y:-159.8}},{t:this.shape_348,p:{x:30.4,y:-160.7}},{t:this.shape_248,p:{x:42,y:-161.1}},{t:this.shape_1036,p:{x:50.8,y:-161.2}},{t:this.shape_643,p:{x:56.3,y:-159.7}},{t:this.shape_774,p:{x:63.3,y:-159.7}},{t:this.shape_572,p:{x:70.6,y:-159.7}},{t:this.shape_347,p:{x:76.9,y:-160.7}},{t:this.shape_1409},{t:this.shape_1408},{t:this.shape_343,p:{x:99.3,y:-159.7}},{t:this.shape_1407},{t:this.shape_1144,p:{x:119.3}},{t:this.shape_1406},{t:this.shape_273,p:{x:134.3,y:-158.3}},{t:this.shape_634,p:{x:140,y:-164.8}},{t:this.shape_896,p:{x:144.6,y:-157}},{t:this.shape_608,p:{y:-141.9,x:-325.4}},{t:this.shape_590,p:{x:-313.2,y:-142.8}},{t:this.shape_541,p:{x:-305.3,y:-143}},{t:this.shape_1355,p:{x:-297.7}},{t:this.shape_691,p:{x:-284.2,y:-141.6}},{t:this.shape_1326,p:{x:-276.6,y:-141.5}},{t:this.shape_1405},{t:this.shape_835,p:{x:-253.7,y:-141.5}},{t:this.shape_510,p:{x:-245.1,y:-141.6}},{t:this.shape_514,p:{x:-235.6,y:-141.5}},{t:this.shape_968,p:{x:-228.7,y:-141.6}},{t:this.shape_542,p:{x:-223.7,y:-142.4}},{t:this.shape_521,p:{x:-211.3,y:-141.5}},{t:this.shape_644,p:{x:-203.5,y:-142.9}},{t:this.shape_485,p:{x:-197.9,y:-141.5}},{t:this.shape_839,p:{x:-190.9,y:-141.5}},{t:this.shape_838,p:{x:-183.7,y:-141.5}},{t:this.shape_529,p:{x:-177.4,y:-142.4}},{t:this.shape_378,p:{x:-165.3,y:-140.1}},{t:this.shape_501,p:{x:-158.1,y:-141.5}},{t:this.shape_431,p:{x:-150.6,y:-141.4}},{t:this.shape_506,p:{x:-137.4,y:-141.5}},{t:this.shape_577,p:{x:-130.7,y:-141.6}},{t:this.shape_836,p:{x:-124.8,y:-141.5}},{t:this.shape_509,p:{x:-117.3,y:-141.5}},{t:this.shape_524,p:{x:-110.8,y:-142.4}},{t:this.shape_834,p:{x:-104.3,y:-141.5}},{t:this.shape_1404},{t:this.shape_507,p:{x:-82.4,y:-142.9}},{t:this.shape_512,p:{x:-77.4,y:-142.4}},{t:this.shape_526,p:{x:-70.9,y:-143}},{t:this.shape_508,p:{x:-58.3,y:-142.4}},{t:this.shape_522,p:{x:-51.8,y:-143}},{t:this.shape_539,p:{x:-46.2,y:-142.9}},{t:this.shape_534,p:{x:-41.3,y:-141.5}},{t:this.shape_474,p:{x:-26.7,y:-141.6}},{t:this.shape_544,p:{x:-17.1,y:-141.5}},{t:this.shape_498,p:{x:-10.5,y:-142.4}},{t:this.shape_518,p:{x:-4,y:-143}},{t:this.shape_1184,p:{x:3.6,y:-141.5}},{t:this.shape_210,p:{x:11,y:-142.9}},{t:this.shape_535,p:{x:22.8,y:-142.9}},{t:this.shape_523,p:{x:27.7,y:-141.5}},{t:this.shape_502,p:{x:39.9,y:-141.5}},{t:this.shape_492,p:{x:47.1,y:-141.5}},{t:this.shape_538,p:{x:56.7,y:-141.6}},{t:this.shape_1403},{t:this.shape_202,p:{x:72.5,y:-142.9}},{t:this.shape_540,p:{x:78.1,y:-141.5}},{t:this.shape_496,p:{x:84.8,y:-142.4}},{t:this.shape_536,p:{x:91.3,y:-141.5}},{t:this.shape_464,p:{x:97.4,y:-142.9}},{t:this.shape_174,p:{x:102.6,y:-140.1}},{t:this.shape_519,p:{x:114.8,y:-141.5}},{t:this.shape_336,p:{x:121.4,y:-141.5}},{t:this.shape_1195,p:{x:129.3}},{t:this.shape_505,p:{x:136.6,y:-141.5}},{t:this.shape_323,p:{x:143.6,y:-141.6}},{t:this.shape_321,p:{x:149.4,y:-141.5}},{t:this.shape_493,p:{x:155.9,y:-142.4}},{t:this.shape_327,p:{x:162.4,y:-141.5}},{t:this.shape_1190,p:{x:175}},{t:this.shape_340,p:{x:180.5,y:-141.6}},{t:this.shape_324,p:{x:186.4,y:-141.5}},{t:this.shape_1023,p:{x:196,y:-141.6}},{t:this.shape_220,p:{x:-325.1,y:-124.2}},{t:this.shape_213,p:{x:-318.6,y:-124.7}},{t:this.shape_215,p:{x:-311,y:-123.2}},{t:this.shape_1402},{t:this.shape_574,p:{x:-292.3,y:-123.3}},{t:this.shape_1293,p:{x:-288.3}},{t:this.shape_331,p:{x:-282.6,y:-122.1}},{t:this.shape_1401},{t:this.shape_678,p:{x:-271.4,y:-123.3}},{t:this.shape_222,p:{x:-264,y:-123.2}},{t:this.shape_807,p:{x:-258,y:-124.7}},{t:this.shape_221,p:{x:-249.2,y:-123.2}},{t:this.shape_322,p:{x:-240.5,y:-123.3}},{t:this.shape_208,p:{x:-231.1,y:-123.2}},{t:this.shape_566,p:{x:-224.1,y:-123.3}},{t:this.shape_217,p:{x:-219.1,y:-124.2}},{t:this.shape_309,p:{x:-208.5,y:-123.2}},{t:this.shape_429,p:{x:-200.6,y:-124.7}},{t:this.shape_469,p:{x:-195.1,y:-123.2}},{t:this.shape_206,p:{x:-188.1,y:-123.2}},{t:this.shape_455,p:{x:-180.8,y:-123.2}},{t:this.shape_214,p:{x:-174.5,y:-124.2}},{t:this.shape_841,p:{x:-169.4,y:-120.5}},{t:this.shape_583,p:{x:-325.4,y:-105.4}},{t:this.shape_1400},{t:this.shape_1399},{t:this.shape_414,p:{x:-298.8,y:-104.9}},{t:this.shape_665,p:{x:-290.9,y:-106.4}},{t:this.shape_664,p:{x:-285,y:-106.4}},{t:this.shape_452,p:{x:-279.4,y:-105}},{t:this.shape_696,p:{x:-267.9,y:-105}},{t:this.shape_427,p:{x:-262.2,y:-106.4}},{t:this.shape_1398},{t:this.shape_692,p:{x:-253,y:-105}},{t:this.shape_1098,p:{x:-245.6,y:-106.5}},{t:this.shape_1078,p:{x:-235.4,y:-105.9}},{t:this.shape_790,p:{x:-229,y:-105}},{t:this.shape_314,p:{x:-217.5,y:-103.8}},{t:this.shape_450,p:{x:-210.3,y:-105}},{t:this.shape_1067,p:{x:-199.5,y:-105.9}},{t:this.shape_194,p:{x:-193,y:-105}},{t:this.shape_1397},{t:this.shape_199,p:{x:-174,y:-106.4}},{t:this.shape_440,p:{x:-166.1,y:-105}},{t:this.shape_451,p:{x:-158.3,y:-106.4}},{t:this.shape_441,p:{x:-150.8,y:-105}},{t:this.shape_570,p:{x:-140.9,y:-106.3}},{t:this.shape_504,p:{x:-136.7,y:-106.4}},{t:this.shape_344,p:{x:-132.6,y:-106.4}},{t:this.shape_403,p:{x:-127,y:-104.9}},{t:this.shape_365,p:{x:-120.4,y:-105}},{t:this.shape_711,p:{x:-114.7,y:-105.9}},{t:this.shape_237,p:{x:-108.7,y:-105.1}},{t:this.shape_791,p:{x:-102.9,y:-105}},{t:this.shape_454,p:{x:-96.4,y:-105.9}},{t:this.shape_689,p:{x:-89.9,y:-105}},{t:this.shape_401,p:{x:-82.9,y:-105.1}},{t:this.shape_823,p:{x:-80.2,y:-102.2}},{t:this.shape_1396},{t:this.shape_418,p:{x:-61.2,y:-106.5}},{t:this.shape_709,p:{x:-53.7,y:-105}},{t:this.shape_543,p:{x:-46.2,y:-105.1}},{t:this.shape_262,p:{x:-38.9,y:-103.8}},{t:this.shape_434,p:{x:-31.6,y:-105}},{t:this.shape_449,p:{x:-20.8,y:-105.9}},{t:this.shape_394,p:{x:-14.3,y:-106.5}},{t:this.shape_417,p:{x:-6.7,y:-105}},{t:this.shape_1395},{t:this.shape_704,p:{x:12.7,y:-105}},{t:this.shape_448,p:{x:19.3,y:-105.9}},{t:this.shape_443,p:{x:24.8,y:-105.9}},{t:this.shape_201,p:{x:31.3,y:-105}},{t:this.shape_472,p:{x:38.4,y:-105.1}},{t:this.shape_500,p:{x:44.3,y:-105.1}},{t:this.shape_433,p:{x:55.2,y:-105.9}},{t:this.shape_411,p:{x:61.6,y:-105}},{t:this.shape_1003,p:{y:-106.4,x:73.7}},{t:this.shape_661,p:{x:79.6,y:-106.4}},{t:this.shape_435,p:{x:85.1,y:-105}},{t:this.shape_442,p:{x:92.2,y:-105}},{t:this.shape_695,p:{x:99.6,y:-106.5}},{t:this.shape_189,p:{x:110.6,y:-105}},{t:this.shape_494,p:{x:118.1,y:-105.1}},{t:this.shape_193,p:{x:125.5,y:-106.4}},{t:this.shape_1132,p:{x:139,y:-104.9}},{t:this.shape_183,p:{x:148,y:-106.5}},{t:this.shape_1394},{t:this.shape_419,p:{x:158.6,y:-105.9}},{t:this.shape_192,p:{x:165.1,y:-105}},{t:this.shape_685,p:{x:171.3,y:-102.2}},{t:this.shape_576,p:{x:-325.4,y:-87.1}},{t:this.shape_581,p:{x:-314,y:-88.1}},{t:this.shape_772,p:{x:-307,y:-86.7}},{t:this.shape_578,p:{x:-299.9,y:-86.7}},{t:this.shape_771,p:{x:-292.7,y:-86.7}},{t:this.shape_1005,p:{x:-280.5,y:-87.7}},{t:this.shape_1393},{t:this.shape_360,p:{x:-266.4,y:-86.7}},{t:this.shape_763,p:{x:-254.3,y:-88.2}},{t:this.shape_767,p:{x:-250.2,y:-88.1}},{t:this.shape_629,p:{x:-245.7,y:-88.2}},{t:this.shape_351,p:{x:-240.1,y:-86.7}},{t:this.shape_234,p:{x:-233.9,y:-84}},{t:this.shape_1392},{t:this.shape_599,p:{x:-213.1,y:-86.7}},{t:this.shape_402,p:{x:-206.5,y:-87.7}},{t:this.shape_1391},{t:this.shape_1390},{t:this.shape_341,p:{x:-189.1,y:-86.7}},{t:this.shape_400,p:{x:-177,y:-87.7}},{t:this.shape_1014,p:{x:-170.5,y:-88.2}},{t:this.shape_289,p:{x:-163,y:-86.7}},{t:this.shape_396,p:{x:-156.5,y:-87.7}},{t:this.shape_395,p:{x:-145.4,y:-87.7}},{t:this.shape_292,p:{x:-138.9,y:-88.2}},{t:this.shape_294,p:{x:-131.3,y:-86.7}},{t:this.shape_335,p:{x:-118.2,y:-86.8}},{t:this.shape_285,p:{x:-110.6,y:-86.7}},{t:this.shape_1164,p:{x:-101.6,y:-86.7}},{t:this.shape_288,p:{x:-88.1,y:-86.7}},{t:this.shape_457,p:{x:-79.5,y:-86.8}},{t:this.shape_274,p:{x:-70,y:-86.7}},{t:this.shape_205,p:{x:-63.1,y:-86.8}},{t:this.shape_389,p:{x:-58.1,y:-87.7}},{t:this.shape_168,p:{x:-46.1,y:-86.7}},{t:this.shape_477,p:{x:-38.3,y:-88.2}},{t:this.shape_386,p:{x:-32.7,y:-86.7}},{t:this.shape_282,p:{x:-25.7,y:-86.7}},{t:this.shape_279,p:{x:-18.5,y:-86.7}},{t:this.shape_293,p:{x:-12.2,y:-87.7}},{t:this.shape_1389},{t:this.shape_281,p:{x:2.8,y:-86.7}},{t:this.shape_332,p:{x:14.9,y:-86.8}},{t:this.shape_769,p:{x:22.5,y:-86.7}},{t:this.shape_1388},{t:this.shape_470,p:{x:46.2,y:-88.2}},{t:this.shape_462,p:{x:52.2,y:-88.2}},{t:this.shape_178,p:{x:57.6,y:-86.7}},{t:this.shape_177,p:{x:64.8,y:-86.7}},{t:this.shape_1011,p:{x:72.2,y:-88.2}},{t:this.shape_172,p:{x:84.4,y:-86.7}},{t:this.shape_315,p:{x:91.9,y:-86.8}},{t:this.shape_187,p:{x:99.4,y:-88.2}},{t:this.shape_1248,p:{x:114.2,y:-86.7}},{t:this.shape_286,p:{x:123.2,y:-88.2}},{t:this.shape_778,p:{x:128.8,y:-88.1}},{t:this.shape_287,p:{x:133.8,y:-87.7}},{t:this.shape_280,p:{x:140.3,y:-86.7}},{t:this.shape_1020,p:{x:146.4,y:-82.8}},{t:this.shape_556,p:{x:158.8,y:-88.2}},{t:this.shape_376,p:{x:166.2,y:-86.7}},{t:this.shape_284,p:{x:172.9,y:-87.7}},{t:this.shape_175,p:{x:183.9,y:-87.7}},{t:this.shape_283,p:{x:190.4,y:-88.2}},{t:this.shape_272,p:{x:198,y:-86.7}},{t:this.shape_1004,p:{x:-324.2,y:-68.5}},{t:this.shape_188,p:{x:-317.2,y:-68.6}},{t:this.shape_675,p:{x:-313.3,y:-69.9}},{t:this.shape_196,p:{x:-307.6,y:-67.3}},{t:this.shape_1387},{t:this.shape_277,p:{x:-296.4,y:-68.6}},{t:this.shape_669,p:{x:-288.9,y:-68.5}},{t:this.shape_481,p:{x:-282.9,y:-69.9}},{t:this.shape_1126,p:{x:-273.2,y:-68.5}},{t:this.shape_266,p:{x:-265.6,y:-68.6}},{t:this.shape_267,p:{x:-258,y:-68.5}},{t:this.shape_649,p:{x:-251.4,y:-68.5}},{t:this.shape_253,p:{x:-241.1,y:-68.6}},{t:this.shape_258,p:{x:-235.2,y:-68.5}},{t:this.shape_391,p:{x:-225.6,y:-68.6}},{t:this.shape_647,p:{x:-216.1,y:-68.5}},{t:this.shape_1386},{t:this.shape_263,p:{x:-204.7,y:-68.6}},{t:this.shape_660,p:{x:-194.9,y:-69.9}},{t:this.shape_200,p:{x:-188.9,y:-68.6}},{t:this.shape_637,p:{x:-182.3,y:-69.4}},{t:this.shape_636,p:{x:-175.9,y:-68.5}},{t:this.shape_631,p:{x:-168.8,y:-68.5}},{t:this.shape_630,p:{x:-162.5,y:-69.4}},{t:this.shape_166,p:{x:-157.4,y:-65.7}},{t:this.instance_18,p:{scaleX:0.206,scaleY:0.206,x:-288,y:-51}},{t:this.instance_19},{t:this.shape_180,p:{x:-216.1,y:116}},{t:this.shape_211,p:{x:-208.2,y:117.3}},{t:this.shape_264,p:{x:-204.2,y:116}},{t:this.shape_184,p:{x:-198.5,y:118.5}},{t:this.shape_633,p:{x:-193.3,y:116}},{t:this.shape_197,p:{x:-187.3,y:117.3}},{t:this.shape_251,p:{x:-179.9,y:117.4}},{t:this.shape_275,p:{x:-173.9,y:115.9}},{t:this.shape_1385},{t:this.shape_609,p:{x:-208.7,y:135.6}},{t:this.shape_471,p:{x:-201.5,y:135.6}},{t:this.shape_252,p:{x:-195.4,y:134.2}},{t:this.shape_560,p:{x:-189.9,y:135.6}},{t:this.shape_169,p:{x:-182.9,y:135.5}},{t:this.shape_409,p:{x:-178,y:135.7}},{t:this.shape_325,p:{x:67.4,y:116.1}},{t:this.shape_254,p:{x:75.7,y:117.4}},{t:this.shape_729,p:{x:84.7,y:117.4}},{t:this.shape_1344,p:{x:59.2,y:135.7}},{t:this.shape_1384},{t:this.shape_1383},{t:this.shape_546,p:{x:85.3,y:134.3}},{t:this.shape_1382}]},1).to({state:[{t:this.instance_20}]},1).wait(1));

	// slide num
	this.text = new cjs.Text("Slide 1 of 15", "14px 'Trebuchet MS'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 159;
	this.text.parent = this;
	this.text.setTransform(19.5,241.5);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({text:"Slide 2 of 15"},0).wait(1).to({x:20.5,text:"Slide 3 of 15"},0).wait(1).to({text:"Slide 4 of 15"},0).wait(1).to({text:"Slide 5 of 15"},0).wait(1).to({text:"Slide 6 of 15"},0).wait(1).to({text:"Slide 7 of 15"},0).wait(1).to({text:"Slide 8 of 15"},0).wait(1).to({text:"Slide 9 of 15"},0).wait(1).to({text:"Slide 10 of 15"},0).wait(1).to({text:"Slide 11 of 15"},0).wait(1).to({text:"Slide 12 of 15"},0).wait(1).to({text:"Slide 13 of 15"},0).wait(1).to({text:"Slide 14 of 15"},0).wait(1).to({text:"Slide 15 of 15"},0).wait(1));

	// Layer 5
	this.shape_1424 = new cjs.Shape();
	this.shape_1424.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0)"],[0,1],-0.1,-180.3,0,180.4).s().p("EguFAfQMAAAg+fMBcLAAAMAAAA+fg");
	this.shape_1424.setTransform(-47.8,5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1424).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-342.8,-237.1,590,511.6);


(lib.ButtonG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#00FF00","#006600"],[0,1],37.2,-14.9,37.2,15).s().p("AgmCWQg+AAgsgsQgsgsAAg+QAAg9AsgsQAsgsA+AAIDjAAQh0CVB0CWg");
	this.shape.setTransform(-37.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ButtonG, new cjs.Rectangle(-56,-15,37.8,30), null);


(lib.Button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ButtonG();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-15,37.8,30);


// stage content:
(lib.smartObjectcopy_HTML5Canvas_presentation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		_this.contents.stop();
		
		
		var frameNumber = this.currentFrame;
		
		
		
		_this.m2.on('click', function(){
		
			frameNumber = frameNumber + 1
			_this.contents.gotoAndStop(frameNumber);
		
		});
		
		_this.m1.on('click', function(){
		
			if (frameNumber == 0 ) {
			_this.contents.gotoAndStop(14);
				frameNumber = 14;
			}
			else {
			frameNumber = frameNumber - 1
			_this.contents.gotoAndStop(frameNumber);
			}
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btns
	this.m1 = new lib.Button();
	this.m1.name = "m1";
	this.m1.parent = this;
	this.m1.setTransform(428.1,513.6);
	this.m1.shadow = new cjs.Shadow("#333333",1,1,3);
	new cjs.ButtonHelper(this.m1, 0, 1, 2);

	this.m2 = new lib.Button();
	this.m2.name = "m2";
	this.m2.parent = this;
	this.m2.setTransform(688.9,513.6,1,1,0,0,180);
	this.m2.shadow = new cjs.Shadow("#333333",1,1,3);
	new cjs.ButtonHelper(this.m2, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.m2},{t:this.m1}]}).wait(1));

	// Slides
	this.contents = new lib.ContentSlides();
	this.contents.name = "contents";
	this.contents.parent = this;
	this.contents.setTransform(540.8,263);

	this.timeline.addTween(cjs.Tween.get(this.contents).wait(1));

	// header footer
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAZAbIgGAAIgOAAIAAAAIgCAAIABgBIAEAAIADgBIAAgEIAAgWQAAgNgBgCQgCgGgGAAQgFAAgEAFQAAAAAAABQgBABAAAAQAAABAAAAQAAABAAAAIAAAlQAAAAAAABQAAAAAAAAQABAAAAAAQABABAAAAIAEAAIABABIgBAAIgCAAIgIAAIgGAAIgFAAIgBAAIgCAAIACgBIADAAIADgBIAAgCIAAgZIAAgPQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAIgDAAIgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQABgBAAAAIAIgBQAEgBACgCIACgBQAAAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAAHQAGgJAJAAQAIAAAEAHQACADAAAKIAAAaIABAFIADABIABAAIABAAIABABIgBAAg");
	this.shape.setTransform(131,165.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAZQgDgDAAgFQgBgKAMgGQAFgBAJgCIAAgDIgBgOQgCgGgGAAQgFAAgCADQgDACAAADIABABIADACIABADQAAAFgFAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgGAEgEQAFgEAJgBQAMAAADAIQABACAAAJIAAAVIAAAHQAAAEADAAQAEAAACgDIACgBIAAABQAAACgEACQgEACgEAAQgIAAAAgIQgEAJgKAAQgEAAgEgDgAgKAFQgDADAAAGQAAADACADQACACAEAAQAEAAADgFQABgCAAgHIAAgIQgIABgFAEg");
	this.shape_1.setTransform(125.1,166);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAKAbIgBgBIAAgHQgFAIgJAAQgJAAgEgFQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgKIAAgaIgBgFQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgBAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAHABIACAAIAIgBIAAAhQAAAJABADQACAFAGAAQAFAAADgGQACgDAAgJIAAgRIAAgGIAAgEIgBgCIgDgBQgFAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIABAAIAGAAIAJAAIAAAhIABALQAAAAAAABQAAAAAAABQABAAAAAAQAAAAAAAAIAHABQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAQgJAAgHAEg");
	this.shape_2.setTransform(118.5,166);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAPAqIgQgBIgLABIgCAAQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABgBQAAAAABAAQAHAAABgBQABgBAAgFIAAgZIgHgNIgMgYIgEgHQgBgCgFAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIAKAAIAGAAIAOAAIACAAQAAAAABAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQgBAAgBAAQgHAAAAADQAAACAHAPIAKATIAHgMIAHgOIAEgKQAAgBAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgGgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIAHAAIAEAAQAMAAAAABQAAABAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgHAAgBACIgKAVIgIAPIgDAFIAAAHIAAAXQAAAEABABIAHABQABAAABAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAg");
	this.shape_3.setTransform(110.8,164.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAZAbIgGAAIgOAAIAAAAIgCAAIABgBIAEAAIADgBIAAgEIAAgWQAAgNgBgCQgCgGgGAAQgFAAgEAFQAAAAAAABQgBABAAAAQAAABAAAAQAAABAAAAIAAAlQAAAAAAABQAAAAAAAAQABAAAAAAQABABAAAAIAEAAIABABIgBAAIgCAAIgIAAIgGAAIgFAAIgBAAIgCAAIACgBIADAAIADgBIAAgCIAAgZIAAgPQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAIgDAAIgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQABgBAAAAIAIgBQAEgBACgCIACgBQAAAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAIAAAHQAGgJAJAAQAIAAAEAHQACADAAAKIAAAaIABAFIADABIABAAIABAAIABABIgBAAg");
	this.shape_4.setTransform(100.1,165.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOAUQgHgIgBgLQAAgLAIgIQAGgIAKgBQAIAAAGAFQAGAFAAAIIgKABIgIAAIgOAAIgBAIQAAALAGAGQAEAHAHAAQAFAAADgCQADgDADgGIACgBIAAABIgBAEQgCAEgCABQgGAGgIAAQgKAAgHgIgAAMgKQgBgPgJAAQgJAAgDAPIAWAAIAAAAg");
	this.shape_5.setTransform(93.6,166);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAAYIgBgCIgKgaIgHgTQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgCAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAIAAIAIAAIAGAAIABAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAAAIABAEIAGAUIAEALIAGgSIAGgRQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAIgCAAIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIABgBIAHAAIAFAAQABAAAAAAQABAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgCAAIgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAABIgBAEIgKAeIgDAIQgCAGgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBg");
	this.shape_6.setTransform(87.7,166.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOAUQgIgIAAgLQABgLAGgIQAIgIAJgBQAIAAAGAFQAGAFAAAIIgKABIgJAAIgNAAIAAAIQAAALAEAGQAFAHAIAAQAEAAADgCQADgDADgGIABgBIABABIgCAEQgBAEgCABQgGAGgIAAQgKAAgHgIgAAMgKQAAgPgLAAQgIAAgCAPIAVAAIAAAAg");
	this.shape_7.setTransform(81.9,166);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGAcQgCgBAAgJIAAgjIgBgBIgFAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAJgCAFgHIABgCIABABIAAABIAAACIAAAGIAEABQAGAAACgCIABAAIABACQAAACgKAAIgEAAIAAAUQAAARABAFQABAEAEAAQAEAAAFgEIABgBIABABIgDAEQgGAEgHAAQgFAAgDgEg");
	this.shape_8.setTransform(76.7,165.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAnIgEgBQAAAAAAAAQgBABAAAAQAAAAAAABQgBABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAgCIABgNIgBgHIAAgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQAEAWARAAQAGAAAEgEQAEgFAAgHQAAgHgEgEQgEgFgIgFQgMgFgEgFQgEgFAAgIQAAgKAGgGQAGgHAKAAQADAAAIADIADABIACgBIABgCQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAACIAAAHIAAAJIAAACQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQgCgHgFgFQgFgEgFAAQgGAAgDADQgEAEAAAHQAAAIAFAEIAMAIQALAFAFAFQAFAGAAAHQAAALgIAHQgIAHgKAAQgGAAgJgEg");
	this.shape_9.setTransform(71,164.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQADIAAgFIAgAAIAAAFg");
	this.shape_10.setTransform(61.9,165.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGAqIgQgDIgFADIgEABQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgCgDAAgEIAAgPQAAgEABgCQACgBADAAQAEAAACAEIACAFQAEAFAHADQAHACAIAAQAJAAAGgDQAGgEAAgGQAAgHgFgCQgEgDgLAAIgEAAQgSAAgKgGQgJgFAAgMQAAgMAJgGQAJgHARAAQAGAAAHACIAHACIAEgBQADgCACAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQABACAAAFIAAAKQAAAFgBACQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgCAAgEgFIgFgEQgEgFgGgCQgFgCgGAAQgIAAgFAEQgFAEAAAFQAAAGAFACQAFADAQAAQASAAAJAGQAIAFAAANQAAAMgJAHQgJAHgQAAg");
	this.shape_11.setTransform(175.7,126);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAzQgIgDgDgHQgCgDgBgEIgBgOIAAgCIAAgcIgOAAQgEgBgBgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAgBQAAgDACgBQADgCAHAAIAJAAIAAgSIAAgEQABgEABgCQACgCAEAAQADAAABACQACADAAAIIAAARIAiAAQAEAAACACQACABAAADQAAABAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCABgDABIgjAAIAAAcQAAAOAEAFQAEAEAIABQAIgBALgEQALgFACAAQABAAABAAQAAAAABAAQAAABABAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAQAAADgDACQgBACgGACIgPAGIgOABQgIAAgHgDg");
	this.shape_12.setTransform(164.8,124.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdAfQgNgMAAgTQAAgRANgMQANgNARAAQAHAAAHACIAOAGIAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQACgBADAAQAEAAABACIABAJIAAAQQAAADgBACQgCABgDAAIgEgBIgFgGQgEgHgGgDQgGgEgIAAQgMAAgJAIQgJAIAAAMQAAANAJAJQAIAIAMAAQAGAAAFgCQAFgBAFgEIAFgDQAFgFAEAAQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABQAAAGgNAIQgOAHgOAAQgSAAgNgMg");
	this.shape_13.setTransform(153.8,126);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgfAfQgMgLgBgTQAAgTANgMQANgMATAAQATAAAMAMQAMALAAAQQAAAEgBABQgCACgKAAIgBAAIg6AAQAAANAJAHQAHAHANAAQAKAAAMgGQANgFACAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAQAAABAAAAQAAAAABABQAAABAAAAQAAABAAAAQAAADgCACIgGAEQgIAEgKADQgJACgJAAQgUAAgLgMgAAcgHQgBgKgIgGQgHgHgLAAQgLAAgIAGQgHAHgDAKIA4AAIAAAAg");
	this.shape_14.setTransform(143.3,126);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYBMQgEgCAAgEQAAgDACgCQACgCADAAIAIABIAHAAQAMAAAFgGQAGgGAAgOIAAg/IghAAQgJAAgCgBQgCgBAAgEQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQACgCAEAAIAvAAIAEABQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABIAABHQAAALgBAGQgBAGgDAEQgFAGgJAEQgJADgLAAQgKAAgFgCgAAIg3QgCgCAAgFQAAgKACgCQACgDAGAAQAFAAACACQABACAAAIQAAAIgBACQgCABgFAAQgGAAgCgBg");
	this.shape_15.setTransform(132.2,125.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgJA3QgHgDgEgHIAAAHIgBAEIgDABIgQAAQgDAAgCgCQgCgBAAgEQAAgBAAAAQABgBAAgBQAAAAAAgBQABAAAAAAQACgCAGAAIACAAIAAhZIgBAAQgGAAgDgBQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAgBAAgBQAAgDACgCQACgBADAAIAOAAIADABQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAIAAArQAEgGAIgDQAHgDAJAAQARAAAMALQAMAMAAARQAAARgMAMQgMAMgSAAQgIAAgHgDgAgOgDQgIAHAAAMQAAANAIAIQAIAIALAAQAMAAAIgIQAIgIAAgNQAAgMgIgHQgIgIgMAAQgLAAgIAIg");
	this.shape_16.setTransform(121.7,124.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AghAoQgOgQAAgYQAAgXAOgQQANgPAUAAQAVAAANAQQANAPABAXQgBAYgNAQQgNAPgVAAQgTAAgOgPgAgWgeQgJALAAATQAAAUAJALQAIAMAOAAQAPAAAIgMQAJgLgBgUQABgTgJgLQgIgLgPAAQgOAAgIALg");
	this.shape_17.setTransform(110.9,124.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgIAzQgIgDgDgHQgCgDgBgEIgBgOIAAgCIAAgcIgOAAQgEgBgBgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAgBQAAgDACgBQADgCAHAAIAJAAIAAgSIAAgEQAAgEACgCQACgCAEAAQADAAABACQACADAAAIIAAARIAiAAQAEAAACACQACABAAADQAAABAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCABgDABIgjAAIAAAcQAAAOAEAFQAEAEAIABQAIgBALgEQALgFADAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAQAAADgDACQgBACgGACIgPAGIgOABQgIAAgHgDg");
	this.shape_18.setTransform(89.2,124.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AglAqQgEAAgBgCQgCgBAAgEQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQABgCAEAAIAQAAIAAg3IgGAAQgJAAgCgBQgCgCAAgDQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQABgBAEAAIAUAAIADABQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAIAAAPQAIgKAIgFQAJgGALAAQAHAAAFAEQAFADAAAFQAAADgCACQgDADgDAAIgGgDQgFgCgEAAQgHAAgIAFQgHAEgIALIAAAjIAcAAQADAAACACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAAEgBABQgCACgEAAg");
	this.shape_19.setTransform(78.6,125.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgkAkQgIgIAAgLQAAgOAKgHQALgIAUAAIAJABIALACIAAAAQAAgLgGgEQgEgFgJAAQgHAAgIAEQgJADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBgCgBgDQAAgFAKgEQAJgEAQAAQAPAAAHAIQAIAIAAAQIAAAmIAFAAQAFAAADACQAAAAABAAQAAABAAAAQABABAAABQAAAAAAABQAAAEgCABQgCACgDAAIgOAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIgBgFQgHAGgJAEQgHADgJAAQgNAAgIgHgAgWADQgIAFAAAIQAAAGAFAEQAEADAIAAQAMAAAIgFQAKgGAAgHIAAgJIgKgCIgIAAQgNAAgIADg");
	this.shape_20.setTransform(68,126);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAmAqQgDAAgCgCQgCgCAAgFIAAgnQAAgNgCgEQgCgEgGAAQgGAAgEAFQgEAGAAAKIAAAjIACAAQAFAAACACQABAAAAAAQAAABAAAAQABABAAABQAAAAAAABQAAAEgCABQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgLAAQgDAAgCgCQgBgCAAgGIAAgCIAAgkIAAgHQAAgHgDgDQgDgEgFAAQgEAAgDACQgEACgCAFIAAAvIADAAQAFAAACACQABAAAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAEgBABQgCACgEAAIgXAAQgEAAgBgCQgCgBAAgEQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAABAAQACgCAGAAIACAAIAAg3IgCAAIgIgBQgCgCAAgDQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQACgBAEAAIANAAIAEABIABAEQAEgEAEgCQAEgCAFAAQAGAAAEADQADADACAFQAEgFAFgDQAFgDAGAAQALAAAFAIQAGAHAAARIAAAmIABAAQAFAAACACQABAAAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAEgCABQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_21.setTransform(57,125.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AglA2QgCgDAAgEIgBgVIAAgBQAAgFACgBQACgCADAAQAFAAACAHIACAGQAEAGAHAEQAGADAIAAQAMAAAGgFQAIgGgBgIQAAgHgDgEQgFgEgJgCIgLgBQgTgDgIgGQgIgHAAgNQAAgNALgJQALgKAPAAIALACIAMAEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBIADgBIAGABQACACAAAEIABASIAAABQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQgBACgDAAQgGAAgCgHIgDgFQgCgFgFgCQgGgDgHAAQgJAAgIAGQgGAFAAAIQAAAHAFAEQAFAEAKABIANACQAQACAHAGQAIAIAAAMQAAAPgLAJQgLAJgTAAIgLgCIgNgEQAAAEgCABQgCACgDAAQgEAAgCgCg");
	this.shape_22.setTransform(46.1,124.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgjAIIgEgBIgBgDIAAgIIABgCIAEgBIBHAAIADABIABACIAAAIQAAABAAAAQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAg");
	this.shape_23.setTransform(24.5,126);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgfAfQgMgLgBgTQAAgTANgMQANgMATAAQATAAAMAMQAMALAAAQQAAAEgBABQgCACgKAAIgBAAIg6AAQAAANAJAHQAHAHANAAQAKAAAMgGQANgFACAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAADgCACIgGAEQgIAEgKADQgJACgJAAQgUAAgLgMgAAcgHQgBgKgIgGQgHgHgLAAQgLAAgIAGQgHAHgDAKIA4AAIAAAAg");
	this.shape_24.setTransform(132.5,105);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgVA4QgEgCAAgEQAAgCACgDQACgCADAAIAHABIAIABQAMAAAFgGQAGgGAAgPIAAgKQgGAGgGADQgHADgHAAQgQAAgLgLQgLgKAAgRQAAgRAMgLQALgLAQAAQAFAAAHACQAGADAHAFIAAgGIABgDIAEgBIANAAQADAAACACQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAAEgCABQgCACgGAAIgCAAIAAA/IgBARQgBAFgDAEQgFAHgJADQgJADgLAAQgKAAgFgCgAgXglQgHAHAAAMQAAALAHAHQAIAGALAAQAKAAAIgGQAHgHAAgLQAAgMgHgHQgIgHgKAAQgLAAgIAHg");
	this.shape_25.setTransform(122,106.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgkAkQgIgIAAgLQAAgOAKgHQALgIAUAAIAJABIALACIAAAAQAAgLgGgEQgEgFgJAAQgHAAgJAEQgIADgDAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBgCgBgDQAAgFAKgEQAJgEAQAAQAPAAAHAIQAIAIAAAQIAAAmIAFAAQAFAAADACQAAAAABAAQAAABAAAAQABABAAABQAAAAAAABQAAAEgCABQgCACgDAAIgOAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgBgFQgHAGgJAEQgHADgJAAQgNAAgIgHgAgWADQgIAFAAAIQAAAGAFAEQAEADAIAAQAMAAAIgFQAKgGAAgHIAAgJIgKgCIgIAAQgNAAgIADg");
	this.shape_26.setTransform(111.2,105);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AggA5QgDABgCgCQgBgCAAgDQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAAAQACgCADAAIAZAAIAAhZIgPAAQgJAAgCgBQgCgCABgDQAAgEABgBQACgCAEAAIAbAAIAEACQAAAAABAAQAAAAAAABQAAAAAAAAQABABAAAAIAABiIAbAAQADAAACACQAAAAABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAEgBABQgCACgEgBg");
	this.shape_27.setTransform(100.3,103.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AggA5QgDABgCgCQgBgCAAgDQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAAAQACgCADAAIAZAAIAAhZIgPAAQgJAAgCgBQgBgCgBgDQABgEABgBQACgCAEAAIAbAAIAEACQAAAAABAAQAAAAAAABQAAAAAAAAQABABAAAAIAABiIAbAAQADAAACACQAAAAABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAEgBABQgCACgEgBg");
	this.shape_28.setTransform(89.5,103.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AggAeQgNgLAAgTQAAgSANgMQANgMATAAQAUAAANAMQANANAAARQAAATgNALQgNAMgUAAQgTAAgNgMgAgVgVQgJAIAAANQAAANAJAJQAIAIANAAQANAAAJgIQAJgJAAgNQAAgNgJgIQgJgJgNAAQgNAAgIAJg");
	this.shape_29.setTransform(78.5,105.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgeAoQgOgQAAgYQAAgWAOgQQAPgQAUAAIAMACIANAEIACgDIAFgBQABAAAAAAQABAAABAAQAAAAABABQAAAAAAAAQABACAAAFIABAQIAAAGQAAAEgCACQgBABgDAAQgGAAgCgIIgBgEQgBgGgHgFQgHgEgIAAQgPAAgJAMQgJALAAATQAAASAJAMQAKALAOAAIALgBIAKgFIAHgEIAGgDQACAAACACQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAADgCACIgIAGQgHAFgHADQgIACgIAAQgVAAgOgPg");
	this.shape_30.setTransform(67.5,103.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// BG gray
	this.instance = new lib.flashmo_018_bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400,300,800,600);
// library properties:
lib.properties = {
	id: '413959B28677411B9BEC12CEBB15EA06',
	width: 800,
	height: 600,
	fps: 30,
	color: "#006600",
	opacity: 1.00,
	manifest: [
		{src:"images/smartObject copy_HTML5 Canvas_presentation_atlas_.png", id:"smartObject copy_HTML5 Canvas_presentation_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['413959B28677411B9BEC12CEBB15EA06'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;