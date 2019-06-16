(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"facialClimbRowboat_SY_HTML5 Canvas_presentation_atlas_", frames: [[0,0,967,665],[969,0,967,664],[969,666,703,707],[0,667,703,706],[970,1375,967,498],[0,1375,968,499]]}
];


// symbols:



(lib.climbingBad = function() {
	this.spriteSheet = ss["facialClimbRowboat_SY_HTML5 Canvas_presentation_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.climbingGood = function() {
	this.spriteSheet = ss["facialClimbRowboat_SY_HTML5 Canvas_presentation_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.faceBad = function() {
	this.spriteSheet = ss["facialClimbRowboat_SY_HTML5 Canvas_presentation_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.faceGood = function() {
	this.spriteSheet = ss["facialClimbRowboat_SY_HTML5 Canvas_presentation_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.rowboatGood = function() {
	this.spriteSheet = ss["facialClimbRowboat_SY_HTML5 Canvas_presentation_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ScreenShot20190524at21909PM = function() {
	this.spriteSheet = ss["facialClimbRowboat_SY_HTML5 Canvas_presentation_atlas_"];
	this.gotoAndStop(5);
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


(lib.flashmo016buttonG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FE8989","#CD0707","#990000","#E30202"],[0,0.486,0.502,1],0,-11,0,11).s().p("AoHBuQg0AAglggQgkggAAguQAAgtAkggQAlggA0AAIQPAAQA0AAAkAgQAlAgAAAtQAAAuglAgQgkAgg0AAg");
	this.shape.setTransform(66,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.flashmo016buttonG, new cjs.Rectangle(1.5,-12,129,22), null);


(lib.ContentSlides = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* //navigate through slides with transitions
		
		import fl.transitions.*;
		import fl.transitions.easing.*;
		import flash.display.MovieClip; */
		
		this.stop();
		
		/*MovieClip(root).m2.addEventListener(MouseEvent.CLICK, buttonClickNext);
		 
		function buttonClickNext(evt:MouseEvent):void {
			if(this.currentFrame == this.totalFrames) gotoAndStop(1);
		     else nextFrame();
			MovieClip(root).m2.play();
			TransitionManager.start(MovieClip(root).content_slides, {type:Fade, direction:Transition.IN, duration:3, easing:Strong.easeOut})
		}
		
		MovieClip(root).m1.addEventListener(MouseEvent.CLICK, buttonClickBack);
		 
		function buttonClickBack(evt:MouseEvent):void {
		     if(this.currentFrame != 1) prevFrame();
			 else stop();
			MovieClip(root).m1.play();
			 TransitionManager.start(MovieClip(root).content_slides, {type:Fade, direction:Transition.IN, duration:3, easing:Strong.easeOut})
		}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13));

	// Title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AgoBCIAAiBIAQAAIAAAHQAKgKAOAAQATAAAKANQAMAMAAAZQAAAUgMAOQgKAOgVgBQgGABgHgDQgHgCgCgDIAAAqgAgQgxQgEADgEADIAAA2QACACAFACQAFACAFAAQAfAAAAgiQAAgSgIgIQgIgIgPAAQgDgBgGADg");
	this.shape.setTransform(-136.3,-221.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AgeAjQgMgNAAgWQAAgVAMgOQAMgNASAAQAUAAALANQAMANAAAWQAAAWgMANQgLAOgUAAQgTAAgLgOgAgRgZQgHAKAAAPQAAAjAYAAQAMAAAGgKQAHgJAAgQQAAgigZgBQgKAAgHAKg");
	this.shape_1.setTransform(-146.4,-222.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AAVBCIAAg7QAAgJgGgHQgFgGgJAAQgFAAgGAEQgGAEgEAEIAABFIgQAAIAAiDIAQAAIAAAwQAEgFAHgDQAIgEAGAAQAPAAAJAKQAIAKAAAQIAAA7g");
	this.shape_2.setTransform(-156.1,-224.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990000").s().p("AgeAqIAGgRQAOAKAJgBQAOABAAgNQAAgKgOgGQgLgFgEgDIgHgGQgDgDgBgEQgCgEAAgEQAAgMAJgGQAIgHANAAQAKAAAQAHIgFAPQgKgIgKAAQgFAAgEADQgEADAAAEQAAAJAKAFIALAGQALAEAFAGQAFAGAAAKQAAAMgJAIQgJAHgPAAQgOAAgOgHg");
	this.shape_3.setTransform(-164.7,-222.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990000").s().p("AgeAjQgMgNAAgWQAAgVAMgOQAMgNASAAQAUAAALANQAMANAAAWQAAAWgMANQgLAOgUAAQgTAAgLgOgAgRgZQgHAKAAAPQAAAjAYAAQAMAAAGgKQAHgJAAgQQAAgigZgBQgKAAgHAKg");
	this.shape_4.setTransform(-173.1,-222.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990000").s().p("AgLA1QgHgJAAgNIAAg0IgLAAIAAgNIALAAIAAgUIAQgGIAAAaIAZAAIAAANIgZAAIAAAuQAAALAEAGQADAEAJAAQAHAAAHgCIACAOQgKADgNAAQgKAAgIgIg");
	this.shape_5.setTransform(-181.3,-224.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990000").s().p("AgeAjQgMgNAAgWQAAgVAMgOQAMgNASAAQAUAAALANQAMANAAAWQAAAWgMANQgLAOgUAAQgTAAgLgOgAgRgZQgHAKAAAPQAAAjAYAAQAMAAAGgKQAHgJAAgQQAAgigZgBQgKAAgHAKg");
	this.shape_6.setTransform(-189.9,-222.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990000").s().p("AAVBCIAAg7QAAgJgGgHQgFgGgJAAQgFAAgGAEQgGAEgEAEIAABFIgQAAIAAiDIAQAAIAAAwQAEgFAHgDQAIgEAGAAQAPAAAJAKQAIAKAAAQIAAA7g");
	this.shape_7.setTransform(-199.6,-224.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990000").s().p("AgnBBIAAiAIAYgBQA3AAAAAmQAAAqgwAAIgNgBIAAAygAgVgvIAAAvIALAAQAgAAAAgZQAAgXgiAAg");
	this.shape_8.setTransform(-208.3,-224.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990000").s().p("AAVAwIAAg2QAAgPgFgGQgFgGgKAAQgFAAgGAEQgGADgEAFIAABFIgQAAIAAhdIALAAIAFAMQAJgOARAAQAfAAAAAlIAAA6g");
	this.shape_9.setTransform(-223.9,-223);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#990000").s().p("AgCBBIAAhPIgNAAIAAgOIAcAAIAABdgAAAguQgDgDAAgFQAAgEADgDQACgDAEAAQAEAAADADQADADAAAEQAAAFgDADQgDADgEAAQgEAAgCgDg");
	this.shape_10.setTransform(-231.6,-224.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#990000").s().p("AgUBBQgLgDgGgEIAJgOQAPAKAMgBQAKAAAHgDQAHgEAAgGQAAgLgQAAIgKABIgMABQgTAAgBgPQAAgFAGgDQAEgEAHgBQgUgJAAgXQAAgOAKgLQALgJAPgBQANABAHAFIAJgJIAKAJIgKAIQAHAJAAANQAAAOgJAKQgIAJgPABIgNABIgHADQgDABAAACQgBAEAJAAIAMgBIAKgCQAOABAJAGQAHAHAAAMQAAANgMAHQgLAJgRgBQgJAAgKgDgAgQgsQgFAGAAAJQAAAKAFAGQAGAHAJAAQAIAAAEgHQAGgGAAgKQAAgJgGgGQgFgGgHAAQgJAAgGAGg");
	this.shape_11.setTransform(-243.7,-221.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#990000").s().p("AAVAwIAAg2QAAgPgFgGQgFgGgKAAQgFAAgGAEQgGADgEAFIAABFIgQAAIAAhdIALAAIAFAMQAJgOARAAQAfAAAAAlIAAA6g");
	this.shape_12.setTransform(-253.2,-223);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#990000").s().p("AgCBBIAAhPIgNAAIAAgOIAcAAIAABdgAAAguQgDgDAAgFQAAgEADgDQACgDAEAAQAEAAADADQADADAAAEQAAAFgDADQgDADgEAAQgEAAgCgDg");
	this.shape_13.setTransform(-260.9,-224.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#990000").s().p("AAVBCIAAg7QAAgJgGgHQgFgGgJAAQgFAAgGAEQgGAEgEAEIAABFIgQAAIAAiDIAQAAIAAAwQAEgFAHgDQAIgEAGAAQAPAAAJAKQAIAKAAAQIAAA7g");
	this.shape_14.setTransform(-268.1,-224.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#990000").s().p("AgZAkQgNgNAAgWQAAgWANgOQANgNAWAAQAHAAAJADQAIAEAEADIgIALQgDgCgGgCQgGgDgHAAQgMAAgIAKQgIAJAAAQQAAAQAIAJQAIAIANAAQAMAAAMgIIAGAOQgOAJgTAAQgTAAgMgNg");
	this.shape_15.setTransform(-277.5,-222.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#990000").s().p("AgdAnQgIgJAAgQIAAg9IAQAAIAAA7QAAAWATgBQAIAAAGgEQAHgFADgGIAAhBIAQAAIAABdIgQAAIAAgNQgDAFgJAFQgIAFgHAAQgQAAgIgJg");
	this.shape_16.setTransform(-286.8,-222.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#990000").s().p("AgeAjQgMgNAAgWQAAgVAMgOQAMgNASAAQAUAAALANQAMANAAAWQAAAWgMANQgLAOgUAAQgTAAgLgOgAgRgZQgHAKAAAPQAAAjAYAAQAMAAAGgKQAHgJAAgQQAAgigZgBQgKAAgHAKg");
	this.shape_17.setTransform(-296.6,-222.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#990000").s().p("AgKA1QgIgJAAgNIAAg0IgLAAIAAgNIALAAIAAgUIARgGIAAAaIAYAAIAAANIgYAAIAAAuQAAALACAGQAFAEAIAAQAHAAAHgCIACAOQgKADgMAAQgLAAgHgIg");
	this.shape_18.setTransform(-304.8,-224.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#990000").s().p("AgdAkQgOgMAAgXQAAgXAPgOQAMgMARAAQAUAAAMALQALAMgBARQABAGgCADIhDAAQABARAIAJQAIAHAMAAQAOABAKgJIAHANQgEAEgIACQgKAEgNAAQgQAAgNgNgAAbgKQAAgKgGgHQgIgHgMAAQgKAAgHAHQgHAHgCAKIA0AAIAAAAg");
	this.shape_19.setTransform(-313.4,-222.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#990000").s().p("AAZBBIghg4IgTAAIAAA4IgSAAIAAiAIAPgBIASAAQAtAAAAAlQAAAMgIAKQgHAIgKADIAlA7gAgbgvIAAAqIAMABQAQAAAGgGQAIgEAAgOQAAgLgIgEQgHgFgRAAg");
	this.shape_20.setTransform(-322,-224.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#990000").s().p("AggAyQAKAAAIgEQAHgFAAgHQAAgIgDgHIgHgTIgZhAIARAAIAbBHIAYhHIARAAIgnBtQgEAIgJAGQgLAHgMgBg");
	this.shape_21.setTransform(-126.4,-221.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#990000").s().p("AgcAwIAAhdIARAAIAAAPQAKgRAQAAIAOABIgHARQgGgEgFAAQgJAAgGAIQgGAJgBALIAAA1g");
	this.shape_22.setTransform(-133.6,-223);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#990000").s().p("AgfApQgIgJAAgLQAAgOAMgJQANgLASABQAGgBAGADQAAgXgTAAQgQAAgIAIIgHgNQAEgEAJgDQAIgDAIAAQATAAAKAKQAJAJAAAUIAAAhQAAAMAHAFIAAAIQgKAAgFgDQgFgDgCgHQgKANgUAAQgLAAgIgIgAgPAGQgIAGAAAJQAAAOASAAQALABAKgMIAAgXIgLgBQgMAAgIAGg");
	this.shape_23.setTransform(-142.5,-222.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#990000").s().p("AgeAqIAGgRQAOAKAJgBQAOABAAgNQAAgKgOgGQgLgFgEgDIgHgGQgDgDgBgEQgCgEAAgEQAAgMAJgGQAIgHANAAQAKAAAQAHIgFAPQgKgIgKAAQgFAAgEADQgEADAAAEQAAAJAKAFIALAGQALAEAFAGQAFAGAAAKQAAAMgJAIQgJAHgPAAQgOAAgOgHg");
	this.shape_24.setTransform(-158.1,-222.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#990000").s().p("AgPAnIAAhpIAQAAIAABmQAAAHAEAFQAEAEAHAAIAAAPQgfAAAAgcg");
	this.shape_25.setTransform(-173.8,-224.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#990000").s().p("AgiAwQgQgRAAgeQAAgeARgSQARgSAcgBQAUAAANAMIgIAOQgNgKgNAAQgTABgMAOQgLAOAAAWQAAAXALANQAMAOASAAQAPAAAIgIIAAgfIgSAAIAAgNIAkAAIAAA3QgHAFgNAEQgMAEgMgBQgaABgPgTg");
	this.shape_26.setTransform(-183.1,-224.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#990000").s().p("AgeAqIAGgRQAOAKAJgBQAOABAAgNQAAgKgOgGQgLgFgEgDIgHgGQgDgDgBgEQgCgEAAgEQAAgMAJgGQAIgHANAAQAKAAAQAHIgFAPQgKgIgKAAQgFAAgEADQgEADAAAEQAAAJAKAFIALAGQALAEAFAGQAFAGAAAKQAAAMgJAIQgJAHgPAAQgOAAgOgHg");
	this.shape_27.setTransform(-197.9,-222.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#990000").s().p("AgPAnIAAhpIAQAAIAABmQAAAHAEAFQAEAEAHAAIAAAPQgfAAAAgcg");
	this.shape_28.setTransform(-203.9,-224.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#990000").s().p("AgJBAIAAhwIgpAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_29.setTransform(-229.1,-224.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#990000").s().p("AgSBLQASgVAAg4QAAgwgSgZIAAgIQAPAIAKAZQAMAYAAAYQAAAbgKAXQgJAXgSANg");
	this.shape_30.setTransform(-202.2,-222.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#990000").s().p("AAFBBIAAhiIgaAQIAAgQQAKgFALgJQALgJAFgIIAGAAIAACBg");
	this.shape_31.setTransform(-211.2,-224.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#990000").s().p("AgIAwQgKgXAAgbQAAgYALgYQALgZAPgIIAAAIQgSAZAAAwQAAA4ASAVIAAAJQgSgNgJgXg");
	this.shape_32.setTransform(-218.2,-222.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#990000").s().p("AgoBCIAAiBIAQAAIAAAHQAKgKAOAAQASAAALANQAMAMAAAZQAAAUgMAOQgKAOgVgBQgGABgHgDQgGgCgDgDIAAAqgAgQgxQgEADgEADIAAA2QACACAFACQAGACAEAAQAfAAgBgiQABgSgIgIQgHgIgQAAQgEgBgFADg");
	this.shape_33.setTransform(-231.9,-221.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#990000").s().p("AAuAwIAAg6QAAgXgTAAQgGAAgFAEQgGAEgCAFIAABEIgPAAIAAhCQAAgHgGgEQgFgEgIAAQgFAAgGAEQgGAEgCAFIAABEIgRAAIAAhdIALAAIAGALQAJgNAPAAQAUAAAHAMQADgEAHgFQAIgDAIAAQAPAAAIAJQAIAJAAAPIAAA+g");
	this.shape_34.setTransform(-244.6,-223);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#990000").s().p("AgLA1QgHgJAAgNIAAg0IgLAAIAAgNIALAAIAAgUIAQgGIAAAaIAZAAIAAANIgZAAIAAAuQABALADAGQAEAEAIAAQAHAAAHgCIACAOQgKADgNAAQgKAAgIgIg");
	this.shape_35.setTransform(-264.9,-224.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#990000").s().p("AgjA6IAHgPQAEADAIACQAHADAGAAQAJAAAGgFQAHgHAAgIQAAgHgEgFQgDgGgNgGIgLgFQgNgFgFgJQgFgIAAgMQAAgOAKgKQAKgKAPAAQAWABAIAGIgFAQQgEgDgHgCQgHgCgGgBQgIAAgFAGQgGAFAAAHQAAAFACAEIAFAIIANAHIAKAFQAOAFAFAJQAFAJAAANQAAAOgLAKQgMALgTgBQgRABgMgJg");
	this.shape_36.setTransform(-273,-224.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#990000").s().p("AgcAkQgOgMgBgXQAAgXAPgOQAMgMARAAQAUAAAMALQAKAMABARQgBAGgBADIhDAAQAAARAJAJQAJAHALAAQAOABAKgJIAHANQgEAEgIACQgKAEgNAAQgQAAgMgNgAAbgKQAAgKgHgHQgGgHgNAAQgKAAgHAHQgIAHgBAKIA0AAIAAAAg");
	this.shape_37.setTransform(-287.6,-222.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#990000").s().p("AgfAwQgPgRAAgeQAAgcAQgTQAPgUAYAAQAVABAMAGIgGAQQgJgHgSAAQgQAAgKAPQgKAOAAAWQAAAXAKANQALAOAPAAQASAAAKgNIAKAOQgPAPgYgBQgZABgOgTg");
	this.shape_38.setTransform(-322.6,-224.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#990000").s().p("AgmBBIAAgDIAog+QAMgSAAgOQAAgSgTAAQgHABgHADQgGAEgDAGIgLgJQADgKAJgFQAIgEANgBQASAAAKAJQAKAIAAAQQAAAPgOAVIgcAtIAyAAIAAAQg");
	this.shape_39.setTransform(-210.7,-224.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#990000").s().p("AgoBCIAAiBIARAAIAAAHQAJgKANAAQAUAAALANQALAMAAAZQAAAUgLAOQgMAOgUgBQgGABgGgDQgIgCgBgDIAAAqgAgPgxQgGADgCADIAAA2QABACAFACQAFACAFAAQAeAAAAgiQAAgSgHgIQgIgIgOAAQgFgBgEADg");
	this.shape_40.setTransform(-71.6,-221.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#990000").s().p("AgKA1QgIgJAAgNIAAg0IgLAAIAAgNIALAAIAAgUIARgGIAAAaIAZAAIAAANIgZAAIAAAuQAAALACAGQAFAEAJAAQAGAAAGgCIADAOQgKADgNAAQgKAAgHgIg");
	this.shape_41.setTransform(-104.7,-224.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#990000").s().p("AgbAwIAAhdIARAAIAAAPQAIgRASAAIAMABIgHARQgFgEgGAAQgJAAgFAIQgHAJABALIAAA1g");
	this.shape_42.setTransform(-135,-223);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#990000").s().p("AgdAkQgNgMAAgXQAAgXAOgOQANgMAQAAQAUAAALALQAMAMgBARQABAGgCADIhCAAQAAARAJAJQAHAHAMAAQAOABAKgJIAHANQgEAEgIACQgKAEgNAAQgQAAgNgNgAAbgKQAAgKgGgHQgIgHgLAAQgKAAgIAHQgIAHAAAKIAzAAIAAAAg");
	this.shape_43.setTransform(-144.1,-222.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#990000").s().p("AgKA1QgIgJAAgNIAAg0IgLAAIAAgNIALAAIAAgUIARgGIAAAaIAZAAIAAANIgZAAIAAAuQAAALACAGQAFAEAJAAQAGAAAGgCIADAOQgKADgNAAQgKAAgHgIg");
	this.shape_44.setTransform(-152.4,-224.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#990000").s().p("AgLA1QgHgJAAgNIAAg0IgLAAIAAgNIALAAIAAgUIAQgGIAAAaIAaAAIAAANIgaAAIAAAuQAAALADAGQAFAEAJAAQAGAAAGgCIADAOQgKADgNAAQgKAAgIgIg");
	this.shape_45.setTransform(-159.5,-224.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#990000").s().p("AgfApQgIgJAAgLQAAgOAMgJQANgLASABQAGgBAGADQAAgXgTAAQgQAAgIAIIgHgNQAEgEAJgDQAIgDAIAAQATAAAKAKQAJAJAAAUIAAAhQAAAMAHAFIAAAIQgKAAgFgDQgFgDgCgHQgKANgUAAQgLAAgIgIgAgPAGQgIAGAAAJQAAAOASAAQALABAKgMIAAgXIgLgBQgMAAgIAGg");
	this.shape_46.setTransform(-167.9,-222.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#990000").s().p("AgSAIIAAgPIAlAAIAAAPg");
	this.shape_47.setTransform(-190.5,-223.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#990000").s().p("AgWA/QgJgDgFgFIAJgNQAJAKANAAQAXAAAAgYQAAgMgHgGQgHgHgLAAIgBAAIAAgNIABAAQAVgBAAgTQAAgVgUAAQgMABgGAHIgIgMQAIgLAUAAQAPABALAIQAKAKAAANQABAMgHAHQgGAJgHACQALAEAGAIQAHAJAAAMQAAARgMAKQgLALgTgBQgJABgIgEg");
	this.shape_48.setTransform(-210.6,-224.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#990000").s().p("AAuAwIAAg6QAAgXgTAAQgGAAgFAEQgGAEgCAFIAABEIgPAAIAAhCQAAgHgGgEQgFgEgIAAQgFAAgGAEQgGAEgCAFIAABEIgRAAIAAhdIALAAIAGALQAJgNAPAAQAUAAAHAMQADgEAHgFQAIgDAIAAQAPAAAIAJQAIAJAAAPIAAA+g");
	this.shape_49.setTransform(-244.6,-223);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#990000").s().p("AgfApQgIgJAAgLQAAgOAMgJQANgLASABQAGgBAGADQAAgXgTAAQgQAAgIAIIgHgNQAEgEAJgDQAIgDAIAAQATAAAKAKQAJAJAAAUIAAAhQAAAMAHAFIAAAIQgKAAgFgDQgFgDgCgHQgKANgUAAQgLAAgIgIgAgPAGQgIAGAAAJQAAAOASAAQALABAKgMIAAgXIgLgBQgMAAgIAGg");
	this.shape_50.setTransform(-256.8,-222.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#990000").s().p("AgjA6IAHgPQAEADAIACQAHADAGAAQAJAAAGgFQAHgHAAgIQAAgHgEgFQgDgGgNgGIgLgFQgNgFgFgJQgFgIAAgMQAAgOAKgKQAKgKAPAAQAWABAIAGIgFAQQgEgDgHgCQgHgCgGgBQgIAAgFAGQgGAFAAAHQAAAFACAEIAFAIIANAHIAKAFQAOAFAFAJQAFAJAAANQAAAOgLAKQgMALgTgBQgRABgMgJg");
	this.shape_51.setTransform(-273,-224.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#990000").s().p("AgIAtQgEgEAAgGQAAgFAEgEQADgEAFABQAFgBAEAEQAEAEAAAFQAAAGgEAEQgEAEgFAAQgFAAgDgEgAgIgaQgEgDAAgGQAAgFAEgEQADgEAFAAQAFAAAEAEQAEAEAAAFQAAAGgEADQgEAFgFAAQgFAAgDgFg");
	this.shape_52.setTransform(-0.1,-222.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#990000").s().p("AgdAkQgNgMAAgXQAAgXAOgOQANgMAQAAQAUAAALALQALAMAAARQAAAGgBADIhCAAQAAARAJAJQAIAHALAAQAOABAKgJIAHANQgEAEgIACQgKAEgMAAQgRAAgNgNgAAbgKQAAgKgGgHQgIgHgLAAQgKAAgIAHQgHAHgBAKIAzAAIAAAAg");
	this.shape_53.setTransform(-8.1,-222.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#990000").s().p("AAVBCIgcgvIgPAPIAAAgIgRAAIAAiDIARAAIAABRIAjgrIATAAIgeAjIAlA6g");
	this.shape_54.setTransform(-16.9,-224.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#990000").s().p("AglBAIAAh/IASAAIAABvIA5AAIAAAQg");
	this.shape_55.setTransform(-31.1,-224.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#990000").s().p("AAVBCIgdgvIgOAPIAAAgIgRAAIAAiDIARAAIAABRIAjgrIATAAIgdAjIAlA6g");
	this.shape_56.setTransform(-45.5,-224.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#990000").s().p("AglBAIAAh/IASAAIAABvIA5AAIAAAQg");
	this.shape_57.setTransform(-74,-224.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#990000").s().p("AgdA3QgLgNAAgVQAAgVANgPQANgPAQAAQAPABAHAGIAAgrIARAAIAACDIgRAAIAAgHQgIAJgQAAQgSAAgLgMgAgOgGQgIAKAAAPQAAAiAeAAQAEAAAFgDQAGgCABgCIAAg0QgGgJgLAAQgMgBgJAKg");
	this.shape_58.setTransform(-89.8,-224.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#990000").s().p("AgLA1QgHgJAAgNIAAg0IgLAAIAAgNIALAAIAAgUIAQgGIAAAaIAZAAIAAANIgZAAIAAAuQABALADAGQAEAEAIAAQAHAAAHgCIACAOQgKADgMAAQgLAAgIgIg");
	this.shape_59.setTransform(-146.5,-224.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#990000").s().p("AgdAnQgIgJAAgQIAAg9IAQAAIAAA7QAAAWATgBQAIAAAGgEQAHgFADgGIAAhBIAQAAIAABdIgQAAIAAgNQgDAFgJAFQgIAFgHAAQgQAAgIgJg");
	this.shape_60.setTransform(-160.4,-222.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#990000").s().p("AgcAkQgOgMgBgXQAAgXAPgOQAMgMARAAQAUAAALALQAMAMAAARQAAAGgCADIhDAAQAAARAJAJQAJAHALAAQAOABAKgJIAHANQgEAEgIACQgKAEgMAAQgRAAgMgNgAAbgKQAAgKgHgHQgGgHgNAAQgKAAgHAHQgHAHgCAKIA0AAIAAAAg");
	this.shape_61.setTransform(-177.4,-222.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#990000").s().p("AAZBBIghg4IgTAAIAAA4IgRAAIAAiAIANgBIASAAQAuAAAAAlQAAAMgHAKQgIAIgKADIAmA7gAgbgvIAAAqIAMABQAPAAAIgGQAGgEAAgOQABgLgIgEQgHgFgQAAg");
	this.shape_62.setTransform(-186.1,-224.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#990000").s().p("AgcAkQgPgMAAgXQAAgXAPgOQAMgMARAAQAUAAAMALQALAMgBARQAAAGgBADIhDAAQABARAIAJQAJAHALAAQAOABAKgJIAHANQgEAEgIACQgKAEgNAAQgQAAgMgNgAAbgKQAAgKgHgHQgGgHgNAAQgJAAgIAHQgIAHgBAKIA0AAIAAAAg");
	this.shape_63.setTransform(-202.3,-222.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#990000").s().p("AAeBBIgehYIgcBYIgGAAIgpiBIATAAIAaBZIAchZIAFAAIAcBZIAahZIASAAIgnCBg");
	this.shape_64.setTransform(-266.5,-224.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#990000").s().p("AgFARIgCghIAPAAIgDAhg");
	this.shape_65.setTransform(-288.2,-229.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#990000").s().p("AgcAkQgPgMAAgXQAAgXAPgOQANgMAQAAQAUAAAMALQALAMgBARQAAAGgBADIhDAAQABARAIAJQAJAHALAAQAOABAKgJIAHANQgEAEgIACQgKAEgNAAQgQAAgMgNgAAbgKQAAgKgHgHQgGgHgNAAQgJAAgIAHQgIAHgBAKIA0AAIAAAAg");
	this.shape_66.setTransform(-294.6,-222.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#990000").s().p("AgcAwIAAhdIARAAIAAAPQAKgRAQAAIAOABIgIARQgFgEgFAAQgKAAgFAIQgHAJAAALIAAA1g");
	this.shape_67.setTransform(-302.3,-223);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#990000").s().p("AgcAkQgOgMgBgXQAAgXAPgOQAMgMARAAQAUAAAMALQAKAMABARQgBAGgBADIhDAAQABARAIAJQAJAHALAAQAOABAKgJIAHANQgEAEgIACQgKAEgNAAQgQAAgMgNgAAbgKQAAgKgHgHQgGgHgNAAQgKAAgHAHQgIAHgBAKIA0AAIAAAAg");
	this.shape_68.setTransform(-311.3,-222.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#990000").s().p("AAcBAIAAg+Ig3AAIAAA+IgSAAIAAh/IASAAIAAAzIA3AAIAAgzIASAAIAAB/g");
	this.shape_69.setTransform(-322.1,-224.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#990000").s().p("AAEBBIAAhiIgZAQIAAgQQAKgFALgJQALgJAFgIIAGAAIAACBg");
	this.shape_70.setTransform(-202.5,-224.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#990000").s().p("AgoBBIAAiAIAigBQASAAAKAIQALAJAAAPQAAAJgGAHQgIAHgIACQAQAEAHAIQAHAIAAAPQAAARgNAKQgMAKgTAAgAgWABIAAAxIAOABQAPAAAIgGQAIgHgBgNQABgNgIgGQgHgFgQgBgAgWgwIAAAlIAOAAQAYAAAAgUQAAgTgXABg");
	this.shape_71.setTransform(-257,-224.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#990000").s().p("AgUBBQgLgDgFgEIAJgOQAOAKANgBQAJAAAIgDQAGgEAAgGQAAgLgQAAIgKABIgMABQgTAAgBgPQAAgFAGgDQAEgEAHgBQgUgJAAgXQAAgOALgLQAKgJAPgBQANABAHAFIAJgJIAKAJIgKAIQAHAJAAANQAAAOgJAKQgIAJgPABIgNABIgHADQgDABAAACQgBAEAJAAIAMgBIAKgCQAOABAJAGQAHAHAAAMQAAANgMAHQgLAJgRgBQgJAAgKgDgAgQgsQgFAGAAAJQAAAKAFAGQAGAHAJAAQAIAAAEgHQAGgGAAgKQAAgJgGgGQgFgGgHAAQgJAAgGAGg");
	this.shape_72.setTransform(-272.2,-221.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#990000").s().p("AgmBBIAAgDIAog+QAMgSAAgOQAAgSgTAAQgHABgHADQgFAEgEAGIgLgJQADgKAJgFQAJgEAMgBQASAAAKAJQAKAIAAAQQABAPgOAVIgdAtIAyAAIAAAQg");
	this.shape_73.setTransform(-201.9,-224.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#990000").s().p("AgZAkQgNgNAAgWQAAgWAOgOQANgNAVAAQAHAAAJADQAJAEADADIgIALQgDgCgGgCQgHgDgFAAQgNAAgIAKQgIAJAAAQQAAAQAIAJQAIAIAOAAQALAAALgIIAHAOQgNAJgVAAQgRAAgNgNg");
	this.shape_74.setTransform(-142.9,-222.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#990000").s().p("AgXA/QgHgDgFgFIAIgNQAJAKANAAQAXAAAAgYQAAgMgHgGQgHgHgLAAIgBAAIAAgNIABAAQAVgBAAgTQAAgVgUAAQgLABgHAHIgIgMQAIgLATAAQAQABALAIQAKAKAAANQAAAMgFAHQgHAJgIACQALAEAHAIQAGAJABAMQgBARgKAKQgMALgUgBQgIABgJgEg");
	this.shape_75.setTransform(-201.8,-224.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#990000").s().p("AAVBCIgcgvIgPAPIAAAgIgRAAIAAiDIARAAIAABRIAjgrIATAAIgdAjIAkA6g");
	this.shape_76.setTransform(-17,-224.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#990000").s().p("AgIBAIAAh/IARAAIAAB/g");
	this.shape_77.setTransform(-24.6,-224.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#990000").s().p("AgLA1QgHgJAAgNIAAg0IgLAAIAAgNIALAAIAAgUIAQgGIAAAaIAZAAIAAANIgZAAIAAAuQAAALAEAGQADAEAJAAQAHAAAGgCIADAOQgKADgNAAQgKAAgIgIg");
	this.shape_78.setTransform(-46.9,-224.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#990000").s().p("AAhBBIgJgbIgvAAIgJAbIgUAAIA0iBIAEAAIAxCBgAATAZIgSg4IgTA4IAlAAg");
	this.shape_79.setTransform(-124.9,-224.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#990000").s().p("AAVBCIgdgvIgOAPIAAAgIgQAAIAAiDIAQAAIAABRIAjgrIAUAAIgfAjIAlA6g");
	this.shape_80.setTransform(-162.4,-224.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#990000").s().p("AgoBCIAAiBIARAAIAAAHQAJgKANAAQAUAAALANQALAMAAAZQAAAUgLAOQgMAOgUgBQgGABgGgDQgIgCgBgDIAAAqgAgPgxQgGADgCADIAAA2QABACAFACQAFACAFAAQAeAAAAgiQAAgSgHgIQgIgIgOAAQgFgBgEADg");
	this.shape_81.setTransform(-214.2,-221.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#990000").s().p("AgJBAIAAhwIgpAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_82.setTransform(-229.1,-224.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#990000").s().p("AAVAwIAAg2QAAgPgFgGQgFgGgKAAQgFAAgGAEQgGADgEAFIAABFIgQAAIAAhdIALAAIAFAMQAJgOARAAQAfAAAAAlIAAA6g");
	this.shape_83.setTransform(-253.2,-223);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#990000").s().p("AgCBBIAAhPIgNAAIAAgOIAcAAIAABdgAAAguQgDgDAAgFQAAgEADgDQACgDAEAAQAEAAADADQADADAAAEQAAAFgDADQgDADgEAAQgEAAgCgDg");
	this.shape_84.setTransform(-260.9,-224.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#990000").s().p("AgdAkQgOgMABgXQAAgXAOgOQANgMAQAAQAUAAALALQALAMAAARQAAAGgBADIhCAAQgBARAKAJQAHAHAMAAQAOABAKgJIAHANQgEAEgIACQgKAEgMAAQgRAAgNgNgAAbgKQAAgKgGgHQgIgHgLAAQgKAAgIAHQgHAHgBAKIAzAAIAAAAg");
	this.shape_85.setTransform(35.2,-222.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#990000").s().p("AgLA1QgHgJAAgNIAAg0IgLAAIAAgNIALAAIAAgUIAQgGIAAAaIAaAAIAAANIgaAAIAAAuQAAALAEAGQADAEAKAAQAGAAAGgCIADAOQgKADgNAAQgKAAgIgIg");
	this.shape_86.setTransform(26.9,-224.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#990000").s().p("AgcAwIAAhdIASAAIAAAPQAJgRARAAIAMABIgGARQgGgEgGAAQgIAAgGAIQgGAJAAALIAAA1g");
	this.shape_87.setTransform(11,-223);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#990000").s().p("AgVBBQgJgDgHgEIAJgOQAPAKAMgBQALAAAGgDQAHgEAAgGQAAgLgRAAIgJABIgLABQgVAAAAgPQABgFAEgDQAFgEAHgBQgUgJAAgXQAAgOAKgLQALgJAOgBQAOABAHAFIAJgJIALAJIgLAIQAHAJAAANQAAAOgJAKQgJAJgOABIgNABIgHADQgDABAAACQAAAEAIAAIAMgBIAKgCQAOABAJAGQAHAHAAAMQAAANgMAHQgLAJgRgBQgJAAgLgDgAgPgsQgGAGAAAJQAAAKAGAGQAFAHAJAAQAHAAAGgHQAFgGAAgKQAAgJgFgGQgGgGgHAAQgJAAgFAGg");
	this.shape_88.setTransform(-79.7,-221.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#990000").s().p("AgcAwIAAhdIARAAIAAAPQAKgRAQAAIAOABIgHARQgGgEgFAAQgJAAgGAIQgGAJgBALIAAA1g");
	this.shape_89.setTransform(-127.3,-223);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#990000").s().p("AgIBAIAAg5IgphGIASAAIAfA4IAgg4IASAAIgpBGIAAA5g");
	this.shape_90.setTransform(-154,-224.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#990000").s().p("AgsBBIAAiAIAggBQAaAAAPARQAQAQAAAbQAABFg/AAgAgagvIAABfIAOABQASAAAKgOQALgOAAgXQAAgugoAAg");
	this.shape_91.setTransform(-179,-224.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#990000").s().p("AgIA/QgEgFAAgFQAAgFAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAFQAAAFgEAFQgEADgFAAQgEAAgEgDgAgDAfQgGgsAAgRIAAgkIASAAIAAAkQAAARgGAsg");
	this.shape_92.setTransform(-135.8,-224.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#990000").s().p("AgUBBQgLgDgFgEIAJgOQAOAKANgBQAJAAAIgDQAGgEAAgGQAAgLgQAAIgKABIgMABQgTAAgBgPQAAgFAGgDQAEgEAHgBQgUgJAAgXQAAgOALgLQAJgJAQgBQAMABAIAFIAJgJIAKAJIgKAIQAHAJAAANQAAAOgJAKQgIAJgPABIgNABIgGADQgEABgBACQAAAEAJAAIAMgBIAKgCQAPABAHAGQAIAHAAAMQAAANgMAHQgLAJgRgBQgJAAgKgDgAgQgsQgFAGAAAJQAAAKAFAGQAGAHAJAAQAIAAAEgHQAGgGAAgKQAAgJgGgGQgFgGgHAAQgJAAgGAGg");
	this.shape_93.setTransform(-143.6,-221.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#990000").s().p("AgZAkQgNgNAAgWQAAgWANgOQANgNAWAAQAIAAAIADQAJAEADADIgIALQgDgCgGgCQgHgDgFAAQgNAAgIAKQgIAJAAAQQAAAQAIAJQAIAIANAAQAMAAAMgIIAGAOQgOAJgTAAQgTAAgMgNg");
	this.shape_94.setTransform(-177.3,-222.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#990000").s().p("AAcAwIgcg/IgaA/IgFAAIgihfIASAAIAVA9IAYg9IAEAAIAaA9IAVg9IAQAAIghBfg");
	this.shape_95.setTransform(-205,-222.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#990000").s().p("AgQBCIAAhPIgOAAIAAgOIAOAAQAAgSAJgKQAIgKAOAAQAIAAAIACIgFAMIgJgBQgIAAgFAGQgEAFAAAJIAAAFIATAAIAAAOIgTAAIAABPg");
	this.shape_96.setTransform(-236.7,-224.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#990000").s().p("AAVBCIgdgvIgOAPIAAAgIgQAAIAAiDIAQAAIAABRIAjgrIAUAAIgfAjIAmA6g");
	this.shape_97.setTransform(-283.3,-224.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:-304.8}},{t:this.shape_17},{t:this.shape_16,p:{x:-286.8}},{t:this.shape_15},{t:this.shape_14,p:{x:-268.1}},{t:this.shape_13,p:{x:-260.9}},{t:this.shape_12,p:{x:-253.2}},{t:this.shape_11},{t:this.shape_10,p:{x:-231.6}},{t:this.shape_9,p:{x:-223.9}},{t:this.shape_8,p:{x:-208.3}},{t:this.shape_7,p:{x:-199.6}},{t:this.shape_6,p:{x:-189.9}},{t:this.shape_5,p:{x:-181.3}},{t:this.shape_4,p:{x:-173.1}},{t:this.shape_3,p:{x:-164.7}},{t:this.shape_2,p:{x:-156.1}},{t:this.shape_1,p:{x:-146.4}},{t:this.shape}]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:-304.8}},{t:this.shape_17},{t:this.shape_16,p:{x:-286.8}},{t:this.shape_15},{t:this.shape_2,p:{x:-268.1}},{t:this.shape_10,p:{x:-260.9}},{t:this.shape_9,p:{x:-253.2}},{t:this.shape_11},{t:this.shape_29,p:{x:-229.1}},{t:this.shape_6,p:{x:-221.3}},{t:this.shape_4,p:{x:-211.6}},{t:this.shape_28,p:{x:-203.9}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25,p:{x:-173.8}},{t:this.shape_1,p:{x:-166.6}},{t:this.shape_24,p:{x:-158.1}},{t:this.shape_3,p:{x:-150.9}},{t:this.shape_23,p:{x:-142.5}},{t:this.shape_22,p:{x:-133.6}},{t:this.shape_21,p:{x:-126.4}}]},1).to({state:[{t:this.shape_38},{t:this.shape_25,p:{x:-314.3}},{t:this.shape_1,p:{x:-307.1}},{t:this.shape_9,p:{x:-297.4}},{t:this.shape_37,p:{x:-287.6}},{t:this.shape_36,p:{x:-273}},{t:this.shape_35},{t:this.shape_23,p:{x:-256.8}},{t:this.shape_34,p:{x:-244.6}},{t:this.shape_33,p:{x:-231.9}},{t:this.shape_32,p:{x:-218.2}},{t:this.shape_31},{t:this.shape_30,p:{x:-202.2}}]},1).to({state:[{t:this.shape_38},{t:this.shape_25,p:{x:-314.3}},{t:this.shape_1,p:{x:-307.1}},{t:this.shape_9,p:{x:-297.4}},{t:this.shape_37,p:{x:-287.6}},{t:this.shape_36,p:{x:-273}},{t:this.shape_35},{t:this.shape_23,p:{x:-256.8}},{t:this.shape_34,p:{x:-244.6}},{t:this.shape_33,p:{x:-231.9}},{t:this.shape_32,p:{x:-218.2}},{t:this.shape_39},{t:this.shape_30,p:{x:-202.2}}]},1).to({state:[{t:this.shape_38},{t:this.shape_28,p:{x:-314.3}},{t:this.shape_6,p:{x:-307.1}},{t:this.shape_12,p:{x:-297.4}},{t:this.shape_37,p:{x:-287.6}},{t:this.shape_51},{t:this.shape_35},{t:this.shape_50,p:{x:-256.8}},{t:this.shape_49},{t:this.shape_33,p:{x:-231.9}},{t:this.shape_32,p:{x:-218.2}},{t:this.shape_48},{t:this.shape_30,p:{x:-202.2}},{t:this.shape_47,p:{x:-190.5}},{t:this.shape_8,p:{x:-176.5}},{t:this.shape_46,p:{x:-167.9}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43,p:{x:-144.1}},{t:this.shape_42,p:{x:-135}},{t:this.shape_9,p:{x:-127.3}},{t:this.shape_36,p:{x:-112.7}},{t:this.shape_41},{t:this.shape_23,p:{x:-96.6}},{t:this.shape_34,p:{x:-84.4}},{t:this.shape_40,p:{x:-71.6}},{t:this.shape_29,p:{x:-56.7}},{t:this.shape_4,p:{x:-48.9}},{t:this.shape_1,p:{x:-39.2}},{t:this.shape_25,p:{x:-31.5}}]},1).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_24,p:{x:-283.2}},{t:this.shape_64},{t:this.shape_14,p:{x:-254}},{t:this.shape_23,p:{x:-244.4}},{t:this.shape_18,p:{x:-235.9}},{t:this.shape_29,p:{x:-222.3}},{t:this.shape_7,p:{x:-212.1}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_3,p:{x:-168.9}},{t:this.shape_60,p:{x:-160.4}},{t:this.shape_28,p:{x:-152.6}},{t:this.shape_59,p:{x:-146.5}},{t:this.shape_36,p:{x:-133.4}},{t:this.shape_2,p:{x:-124.1}},{t:this.shape_6,p:{x:-114.4}},{t:this.shape_16,p:{x:-104.7}},{t:this.shape_25,p:{x:-96.9}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_4,p:{x:-65.2}},{t:this.shape_1,p:{x:-55.5}},{t:this.shape_56},{t:this.shape_55,p:{x:-31.1}},{t:this.shape_10,p:{x:-24.8}},{t:this.shape_54},{t:this.shape_53,p:{x:-8.1}},{t:this.shape_52,p:{x:-0.1}}]},1).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_23,p:{x:-301.7}},{t:this.shape_25,p:{x:-294.1}},{t:this.shape_10,p:{x:-289.4}},{t:this.shape_9,p:{x:-281.7}},{t:this.shape_72,p:{x:-272.2}},{t:this.shape_71},{t:this.shape_42,p:{x:-248.1}},{t:this.shape_16,p:{x:-240.4}},{t:this.shape_3,p:{x:-231.9}},{t:this.shape_2,p:{x:-223.3}},{t:this.shape_32,p:{x:-209.5}},{t:this.shape_70},{t:this.shape_30,p:{x:-193.5}}]},1).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_23,p:{x:-301.7}},{t:this.shape_25,p:{x:-294.1}},{t:this.shape_10,p:{x:-289.4}},{t:this.shape_9,p:{x:-281.7}},{t:this.shape_72,p:{x:-272.2}},{t:this.shape_71},{t:this.shape_42,p:{x:-248.1}},{t:this.shape_16,p:{x:-240.4}},{t:this.shape_3,p:{x:-231.9}},{t:this.shape_2,p:{x:-223.3}},{t:this.shape_32,p:{x:-209.5}},{t:this.shape_73},{t:this.shape_30,p:{x:-193.5}}]},1).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_46,p:{x:-301.7}},{t:this.shape_28,p:{x:-294.1}},{t:this.shape_10,p:{x:-289.4}},{t:this.shape_9,p:{x:-281.7}},{t:this.shape_72,p:{x:-272.2}},{t:this.shape_71},{t:this.shape_42,p:{x:-248.1}},{t:this.shape_16,p:{x:-240.4}},{t:this.shape_3,p:{x:-231.9}},{t:this.shape_7,p:{x:-223.3}},{t:this.shape_32,p:{x:-209.5}},{t:this.shape_75},{t:this.shape_30,p:{x:-193.5}},{t:this.shape_47,p:{x:-181.8}},{t:this.shape_8,p:{x:-167.7}},{t:this.shape_23,p:{x:-159.2}},{t:this.shape_5,p:{x:-150.7}},{t:this.shape_74},{t:this.shape_2,p:{x:-133.5}},{t:this.shape_29,p:{x:-118.4}},{t:this.shape_4,p:{x:-110.6}},{t:this.shape_1,p:{x:-100.9}},{t:this.shape_25,p:{x:-93.2}}]},1).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_24,p:{x:-283.2}},{t:this.shape_64},{t:this.shape_14,p:{x:-254}},{t:this.shape_23,p:{x:-244.4}},{t:this.shape_18,p:{x:-235.9}},{t:this.shape_29,p:{x:-222.3}},{t:this.shape_7,p:{x:-212.1}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_3,p:{x:-168.9}},{t:this.shape_60,p:{x:-160.4}},{t:this.shape_28,p:{x:-152.6}},{t:this.shape_59,p:{x:-146.5}},{t:this.shape_36,p:{x:-133.4}},{t:this.shape_2,p:{x:-124.1}},{t:this.shape_6,p:{x:-114.4}},{t:this.shape_16,p:{x:-104.7}},{t:this.shape_25,p:{x:-96.9}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_4,p:{x:-65.2}},{t:this.shape_1,p:{x:-55.5}},{t:this.shape_56},{t:this.shape_55,p:{x:-31.1}},{t:this.shape_77},{t:this.shape_76},{t:this.shape_43,p:{x:-8.2}},{t:this.shape_52,p:{x:-0.2}}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:-304.8}},{t:this.shape_4,p:{x:-296.6}},{t:this.shape_16,p:{x:-286.8}},{t:this.shape_15},{t:this.shape_7,p:{x:-268.1}},{t:this.shape_84},{t:this.shape_83},{t:this.shape_11},{t:this.shape_82},{t:this.shape_13,p:{x:-222.3}},{t:this.shape_81},{t:this.shape_24,p:{x:-205.9}},{t:this.shape_47,p:{x:-193.6}},{t:this.shape_29,p:{x:-180}},{t:this.shape_46,p:{x:-172.3}},{t:this.shape_80},{t:this.shape_10,p:{x:-156.2}},{t:this.shape_12,p:{x:-148.5}},{t:this.shape_72,p:{x:-139}},{t:this.shape_79,p:{x:-124.9}},{t:this.shape_36,p:{x:-110.9}},{t:this.shape_9,p:{x:-101.6}},{t:this.shape_23,p:{x:-92}},{t:this.shape_40,p:{x:-82}},{t:this.shape_3,p:{x:-73.7}},{t:this.shape_2,p:{x:-65.1}},{t:this.shape_1,p:{x:-55.4}},{t:this.shape_78}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:-304.8}},{t:this.shape_17},{t:this.shape_60,p:{x:-286.8}},{t:this.shape_15},{t:this.shape_7,p:{x:-268.1}},{t:this.shape_84},{t:this.shape_83},{t:this.shape_11},{t:this.shape_82},{t:this.shape_13,p:{x:-222.3}},{t:this.shape_40,p:{x:-214.2}},{t:this.shape_3,p:{x:-205.9}},{t:this.shape_47,p:{x:-193.6}},{t:this.shape_91},{t:this.shape_6,p:{x:-169}},{t:this.shape_90},{t:this.shape_4,p:{x:-146.1}},{t:this.shape_16,p:{x:-136.4}},{t:this.shape_89},{t:this.shape_29,p:{x:-114.3}},{t:this.shape_2,p:{x:-104.1}},{t:this.shape_10,p:{x:-96.9}},{t:this.shape_12,p:{x:-89.2}},{t:this.shape_88},{t:this.shape_1,p:{x:-65.1}},{t:this.shape_9,p:{x:-55.4}},{t:this.shape_79,p:{x:-40.8}},{t:this.shape_36,p:{x:-26.8}},{t:this.shape_53,p:{x:-17.5}},{t:this.shape_33,p:{x:-7.3}},{t:this.shape_50,p:{x:2.1}},{t:this.shape_87,p:{x:11}},{t:this.shape_46,p:{x:18.5}},{t:this.shape_86},{t:this.shape_85},{t:this.shape_55,p:{x:50.6}},{t:this.shape_23,p:{x:59.3}},{t:this.shape_21,p:{x:68.5}},{t:this.shape_37,p:{x:77.8}},{t:this.shape_22,p:{x:86.9}}]},1).to({state:[{t:this.shape_29,p:{x:-322.8}},{t:this.shape_7,p:{x:-312.6}},{t:this.shape_46,p:{x:-303}},{t:this.shape_12,p:{x:-293.4}},{t:this.shape_97},{t:this.shape_21,p:{x:-269.6}},{t:this.shape_4,p:{x:-260.4}},{t:this.shape_16,p:{x:-250.6}},{t:this.shape_96},{t:this.shape_1,p:{x:-228.9}},{t:this.shape_87,p:{x:-219.9}},{t:this.shape_95},{t:this.shape_23,p:{x:-193.6}},{t:this.shape_59,p:{x:-185.2}},{t:this.shape_94},{t:this.shape_2,p:{x:-168}},{t:this.shape_10,p:{x:-160.8}},{t:this.shape_9,p:{x:-153.1}},{t:this.shape_93},{t:this.shape_92}]},1).wait(1));

	// Paragraph
	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_98.setTransform(-51.8,81.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_99.setTransform(-57.6,79.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_100.setTransform(-65,78.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgDgCABgEQgBgCADgDQABgCAEAAQADAAACACQACADABACQgBAEgCACQgCACgDAAQgEAAgBgCg");
	this.shape_101.setTransform(-70.9,77.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_102.setTransform(-76.8,77.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOAAQAEAAAGACQAAgTgPABQgMAAgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_103.setTransform(-84.2,78.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgKQAKgKANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_104.setTransform(-91.6,78.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgFANQgEgDgFAAQgHAAgEAGQgFAGgBAJIAAApg");
	this.shape_105.setTransform(-97.6,78.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgKQAKgKANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_106.setTransform(-108.8,78.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_107.setTransform(-116.4,78.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_108.setTransform(-124,78.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgCgCAAgEQAAgCACgDQACgCADAAQADAAACACQACADAAACQAAAEgCACQgCACgDAAQgDAAgCgCg");
	this.shape_109.setTransform(-130,77.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_110.setTransform(-134.5,77.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_111.setTransform(-141.1,78.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJAAAGgIQAEgHAAgNQAAgagTAAQgIgBgFAIg");
	this.shape_112.setTransform(-148.7,78.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgKQAKgLARAAQAFAAAHADQAHACADACIgHAJIgHgDIgKgCQgJAAgGAIQgHAGAAANQAAANAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_113.setTransform(-155.9,78.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgIAKgQAAQgOAAgJgKgAgNgTQgGAHAAAMQABAcASAAQAJAAAFgIQAGgHAAgNQAAgagUAAQgIgBgFAIg");
	this.shape_114.setTransform(-167.3,78.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_115.setTransform(-173.7,77.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AAGANIgBgZIANAAIgDAZgAgPANIgBgZIAMAAIgCAZg");
	this.shape_116.setTransform(-183,73.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgJApQgGgFABgMIAAgkIgJAAIAAgNIAJAAIAAgQIAQgGIAAAWIAUAAIAAANIgUAAIAAAfQAAAIACADQADAEAGgBQAFABAGgEIAAAQQgGACgLAAQgKAAgGgHg");
	this.shape_117.setTransform(-188.1,77.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AASAlIgSgZIgRAZIgUAAIAcglIgagjIATAAIAQAVIAQgVIAUAAIgcAjIAeAlg");
	this.shape_118.setTransform(-194.7,78.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgZAcQgKgKAAgRQAAgRALgKQALgLAOAAQAPAAAKAKQAKAJAAAOIgCAJIgzAAQABAJAFAFQAGAEAIAAQAMAAAGgFIAGAMQgJAIgSAAQgPAAgKgKgAATgGQgCgRgQAAQgOAAgDARIAjAAIAAAAg");
	this.shape_119.setTransform(-202.5,78.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AAdAzIgvg/IAAA9IgRAAIAAhjIAIAAIAuA8IAAg8IARAAIAABlg");
	this.shape_120.setTransform(-211.2,77.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AAHANIgCgZIAMAAIgBAZgAgPANIgCgZIANAAIgCAZg");
	this.shape_121.setTransform(-218.1,73.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AARA0IgWglIgMAMIAAAZIgNAAIAAhnIANAAIAAA/IAbggIAQAAIgYAaIAdAug");
	this.shape_122.setTransform(-227.6,77);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgKQAKgLARAAQAFAAAHADQAHACADACIgHAJIgHgDIgKgCQgJAAgGAIQgHAGAAANQAAANAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_123.setTransform(-235,78.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCgBgEQABgCACgDQABgCADAAQAEAAADACQABADAAACQAAAEgBACQgDACgEAAQgDAAgBgCg");
	this.shape_124.setTransform(-240.6,77.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAAAgWg");
	this.shape_125.setTransform(-244.2,77.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgZAmQgLgOABgYQgBgVAMgPQAMgPATAAQAQAAAJAGIgFALQgGgEgOAAQgMAAgIALQgIALAAARQAAARAIALQAIALAMAAQAOAAAIgKIAHAKQgMAMgSAAQgTAAgMgOg");
	this.shape_126.setTransform(-250.7,77.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_127.setTransform(-261.8,81.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgHALgBQAOAAAJAKQAJAKAAASQAAAQgJALQgJALgPgBQgFAAgFgCQgGgBgBgCIAAAggAgMgmQgDACgDADIAAApIAGAEIAHABQAXABAAgbQAAgOgFgGQgGgGgMgBIgHACg");
	this.shape_128.setTransform(-267.8,79.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgOAAgKgKgAgNgTQgFAHgBAMQAAAcATAAQAJAAAGgIQAEgHAAgNQAAgagTAAQgIgBgFAIg");
	this.shape_129.setTransform(-275.7,78.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgHgEgGQgEgEgHAAQgEAAgFACQgFADgCAEIAAA2IgNAAIAAhnIANAAIAAAnQADgFAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_130.setTransform(-283.2,77);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgGQgJgEgDgBIgGgFIgDgGIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAEQAIAEAEAEQAEAGAAAHQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_131.setTransform(-289.9,78.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgIAKgQAAQgOAAgJgKgAgNgTQgGAHAAAMQABAcASAAQAJAAAFgIQAGgHAAgNQAAgagUAAQgIgBgFAIg");
	this.shape_132.setTransform(-296.4,78.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_133.setTransform(-302.9,77.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgIAKgQAAQgOAAgJgKgAgNgTQgGAHAAAMQABAcASAAQAJAAAFgIQAGgHAAgNQAAgagUAAQgIgBgFAIg");
	this.shape_134.setTransform(-309.5,78.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgHgEgGQgEgEgHAAQgEAAgFACQgFADgCAEIAAA2IgNAAIAAhnIANAAIAAAnQADgFAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_135.setTransform(-317,77);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgeAzIAAhjIATgBQAqAAAAAdQAAAhgmAAIgKgBIAAAngAgRglIAAAlIAJAAQAZAAAAgSQAAgTgaAAg");
	this.shape_136.setTransform(-323.8,77.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_137.setTransform(214.2,60.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCgBgDQABgEACgCQACgDADABQADgBADADQACACAAAEQAAADgCACQgDACgDABQgDgBgCgCg");
	this.shape_138.setTransform(208.3,58.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_139.setTransform(197,61.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_140.setTransform(189.6,60.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgCgCAAgDQAAgEACgCQACgDADABQADgBACADQACACAAAEQAAADgCACQgCACgDABQgDgBgCgCg");
	this.shape_141.setTransform(183.7,58.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgIgEgFQgEgEgHAAQgEAAgFACQgFADgCAEIAAA2IgNAAIAAhmIANAAIAAAmQADgFAFgCQAGgDAFAAQAMAAAHAIQAGAHAAANIAAAug");
	this.shape_142.setTransform(178.1,58.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgKQAKgLARAAQAFAAAHADQAHACADACIgHAKQgCgDgFgCIgKgBQgJAAgGAIQgHAGAAAMQAAANAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_143.setTransform(170.8,60.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_144.setTransform(163.6,60.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJgBAFgHQAGgIgBgMQABgagUAAQgIAAgFAHg");
	this.shape_145.setTransform(156,60.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHAAQAFAAAGgCIABALQgIADgJAAQgIAAgGgHg");
	this.shape_146.setTransform(149.6,59.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_147.setTransform(142.9,60.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgDgDgFAAQgHAAgEAGQgFAGgBAJIAAApg");
	this.shape_148.setTransform(137,60.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgFgDgEAAQgHAAgEAGQgFAGAAAJIAAApg");
	this.shape_149.setTransform(125.5,60.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgOAAgKgKgAgNgTQgFAHgBAMQAAAcATAAQAJgBAGgHQAEgIAAgMQAAgagTAAQgIAAgFAHg");
	this.shape_150.setTransform(118.5,60.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgNA0IAAg+IgKAAIAAgKIAKAAQABgOAGgJQAHgHALAAQAGAAAGACIgEAJIgHgBQgGgBgEAFQgDAFAAAGIAAAFIAPAAIAAAKIgPAAIAAA+g");
	this.shape_151.setTransform(112.5,58.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAFgEAAgGQAAgGgBgGIgGgOIgTgyIAMAAIAVA4IAUg4IAMAAIgfBVQgCAHgHAEQgIAFgKAAg");
	this.shape_152.setTransform(100.1,61.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgEgDgEAAQgHAAgEAGQgGAGAAAJIAAApg");
	this.shape_153.setTransform(94.5,60.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAZQAAAKAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_154.setTransform(87.6,60.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgGQgJgEgDgBIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAEQAIAEAEAEQAEAGAAAHQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_155.setTransform(81.1,60.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgGQgJgEgDgBIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAEQAIAEAEAEQAEAGAAAHQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_156.setTransform(75.4,60.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_157.setTransform(68.8,60.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgKQAKgLARAAQAFAAAHADQAHACADACIgHAKQgCgDgFgCIgKgBQgJAAgGAIQgHAGAAAMQAAANAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_158.setTransform(61.6,60.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_159.setTransform(54.3,60.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_160.setTransform(46.7,60.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_161.setTransform(33.1,60.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgGANQgEgDgEAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_162.setTransform(27.1,60.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAZQAAAKAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_163.setTransform(20.2,60.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHAAQAFAAAGgCIABALQgIADgJAAQgIAAgGgHg");
	this.shape_164.setTransform(7.8,59.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAZQAAAKAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_165.setTransform(1.2,60.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgIgEgFQgEgEgHAAQgEAAgFACQgFADgCAEIAAA2IgNAAIAAhmIANAAIAAAmQADgFAFgCQAGgDAFAAQAMAAAHAIQAGAHAAANIAAAug");
	this.shape_166.setTransform(-6.2,58.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHAAQAFAAAGgCIABALQgIADgJAAQgIAAgGgHg");
	this.shape_167.setTransform(-12.7,59.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgGQgJgEgDgBIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAEQAIAEAEAEQAEAGAAAHQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_168.setTransform(-24.5,60.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGAEADQADADAGAAIAAAMQgYAAAAgWg");
	this.shape_169.setTransform(-29.1,58.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgJAKgQAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJgBAGgHQAEgIAAgMQABgagUAAQgIAAgFAHg");
	this.shape_170.setTransform(-35.1,60.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgIAKgQAAQgOAAgJgKgAgNgTQgGAHAAAMQABAcASAAQAJgBAFgHQAGgIAAgMQAAgagUAAQgIAAgFAHg");
	this.shape_171.setTransform(-42.6,60.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHAAQAFAAAGgCIABALQgIADgJAAQgIAAgGgHg");
	this.shape_172.setTransform(-49.1,59.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgNA0IAAg+IgKAAIAAgKIAKAAQAAgOAIgJQAFgHAMAAQAGAAAGACIgDAJIgIgBQgGgBgEAFQgDAFAAAGIAAAFIAOAAIAAAKIgOAAIAAA+g");
	this.shape_173.setTransform(-60.3,58.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgOAAgKgKgAgNgTQgFAHgBAMQAAAcATAAQAJgBAGgHQAEgIAAgMQAAgagTAAQgIAAgFAHg");
	this.shape_174.setTransform(-66.9,60.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHAAQAFAAAGgCIABALQgIADgJAAQgIAAgGgHg");
	this.shape_175.setTransform(-79.4,59.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_176.setTransform(-86,60.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgGQgJgEgDgBIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAEQAIAEAEAEQAEAGAAAHQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_177.setTransform(-92.7,60.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAZQAAAKAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_178.setTransform(-105.2,60.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_179.setTransform(-118.4,61.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_180.setTransform(-125.7,60.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgDgCABgDQgBgEADgCQABgDAEABQADgBACADQACACABAEQgBADgCACQgCACgDABQgEgBgBgCg");
	this.shape_181.setTransform(-131.7,58.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgeAlIAAgEIAqg5IgpAAIAAgLIA8AAIAAADIgoA5IAoAAIAAAMg");
	this.shape_182.setTransform(-136.8,60.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgCgCAAgDQAAgEACgCQACgDACABQAEgBACADQACACAAAEQAAADgCACQgCACgEABQgCgBgCgCg");
	this.shape_183.setTransform(-142.2,58.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgFANQgEgDgFAAQgHAAgEAGQgFAGgBAJIAAApg");
	this.shape_184.setTransform(-146.2,60.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAZQAAAKAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_185.setTransform(-153.1,60.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCgBgDQABgEACgCQACgDADABQADgBADADQACACAAAEQAAADgCACQgDACgDABQgDgBgCgCg");
	this.shape_186.setTransform(-158.9,58.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGAEADQADADAGAAIAAAMQgZAAAAgWg");
	this.shape_187.setTransform(-162.5,58.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgCgCAAgDQAAgEACgCQACgDACABQAEgBACADQACACAAAEQAAADgCACQgCACgEABQgCgBgCgCg");
	this.shape_188.setTransform(-167,58.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgEAAgFADQgEACgCAEIAAA1IgLAAIAAgzQAAgFgFgDQgEgDgGAAQgEAAgFADQgEADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAIgKALAAQAPAAAGAJQACgEAGgDQAGgCAGAAQALAAAHAGQAGAHAAAMIAAAwg");
	this.shape_189.setTransform(-174.6,60.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAZQAAAKAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_190.setTransform(-184.1,60.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgNA0IAAg+IgKAAIAAgKIAKAAQABgOAGgJQAHgHALAAQAGAAAGACIgEAJIgHgBQgGgBgEAFQgDAFAAAGIAAAFIAOAAIAAAKIgOAAIAAA+g");
	this.shape_191.setTransform(-190,58.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAFgEABgGQAAgGgCgGIgGgOIgTgyIAMAAIAVA4IAUg4IAMAAIgeBVQgDAHgHAEQgIAFgKAAg");
	this.shape_192.setTransform(-202.4,61.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgDgDIgEAHIgHAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAJALQAKAKAAAPQAAASgKALQgJAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACACAAQANAAAFgGQAGgHAAgPQAAgMgHgGQgGgHgLAAIgGACg");
	this.shape_193.setTransform(-209.5,58.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_194.setTransform(-223.1,61.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_195.setTransform(-230.4,60.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgLAAIAAgKIAWAAIAABIgAAAgkQgDgCAAgDQAAgEADgCQABgDADABQAEgBACADQACACAAAEQAAADgCACQgCACgEABQgDgBgBgCg");
	this.shape_196.setTransform(-236.4,58.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHAAQAFAAAGgCIABALQgIADgJAAQgIAAgGgHg");
	this.shape_197.setTransform(-240.9,59.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgDgDgFAAQgHAAgEAGQgFAGgBAJIAAApg");
	this.shape_198.setTransform(-245.9,60.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAZQAAAKAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_199.setTransform(-252.8,60.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHAAQAFAAAGgCIABALQgIADgJAAQgIAAgGgHg");
	this.shape_200.setTransform(-259.2,59.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgGQgJgEgDgBIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAEQAIAEAEAEQAEAGAAAHQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_201.setTransform(-264.9,60.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHAAQAFAAAGgCIABALQgIADgJAAQgIAAgGgHg");
	this.shape_202.setTransform(-276.4,59.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_203.setTransform(-283.1,60.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_204.setTransform(-290.3,61.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgGQgJgEgDgBIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAEQAIAEAEAEQAEAGAAAHQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_205.setTransform(-302.8,60.3);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgEANIgBgZIALAAIgCAZg");
	this.shape_206.setTransform(-306.7,55.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHAAQAFAAAGgCIABALQgIADgJAAQgIAAgGgHg");
	this.shape_207.setTransform(-310.5,59.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_208.setTransform(-317.1,60.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgcAyIAAhjIANAAIAABWIAsAAIAAANg");
	this.shape_209.setTransform(-324,58.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_210.setTransform(98.3,26.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAKACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_211.setTransform(93.2,22.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAAAgWg");
	this.shape_212.setTransform(88.5,22.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_213.setTransform(82.4,23.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_214.setTransform(75.8,23.8);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_215.setTransform(69.2,23.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgFgDgEAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_216.setTransform(63.2,23.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAKACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_217.setTransform(53.1,22.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_218.setTransform(46.4,23.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_219.setTransform(38.8,23.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHADADACIgHAKIgHgEQgFgCgFAAQgJAAgGAHQgHAHAAAMQAAAOAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_220.setTransform(31.6,23.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_221.setTransform(24.3,23.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_222.setTransform(16.4,22.3);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAAMANgBQAJABAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_223.setTransform(4.9,23.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhlIANAAIAAAlQADgDAFgEQAGgCAFAAQAMAAAHAHQAGAIAAAMIAAAug");
	this.shape_224.setTransform(-6.8,22.3);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_225.setTransform(-13.4,23.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgjQgCgDAAgEQAAgDACgCQACgCADgBQADABACACQACACAAADQAAAEgCADQgCABgDAAQgDAAgCgBg");
	this.shape_226.setTransform(-18.4,22.4);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGADADQAEADAFAAIAAAMQgXAAAAgWg");
	this.shape_227.setTransform(-22,22.3);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgIAKABQAOAAAKAJQAIAKAAATQAAAPgIALQgKAKgPAAQgEAAgGgBQgGgCgBgCIAAAggAgLgmQgEACgDADIAAApIAFAEIAIACQAYgBgBgaQABgOgHgGQgFgGgMAAIgGABg");
	this.shape_228.setTransform(-27.9,25.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgFAAgEADQgEACgBAEIAAA1IgNAAIAAgzQAAgFgDgDQgFgDgGAAQgEAAgEADQgFADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAIgKALAAQAQAAAFAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_229.setTransform(-37.8,23.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgKALgPAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJABAFgIQAGgHgBgNQABgbgUAAQgIAAgFAIg");
	this.shape_230.setTransform(-47.4,23.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHADADACIgHAKIgHgEQgFgCgFAAQgJAAgGAHQgHAHAAAMQAAAOAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_231.setTransform(-54.6,23.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHADADACIgHAKIgHgEQgFgCgFAAQgJAAgGAHQgHAHAAAMQAAAOAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_232.setTransform(-61.5,23.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAAMANgBQAJABAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_233.setTransform(-68.6,23.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgKALgPAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJABAFgIQAGgHgBgNQABgbgUAAQgIAAgFAIg");
	this.shape_234.setTransform(-80.2,23.8);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAKACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_235.setTransform(-86.7,22.8);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgFgDgEAAQgHAAgEAGQgFAGAAAJIAAApg");
	this.shape_236.setTransform(-95.9,23.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_237.setTransform(-102.9,23.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_238.setTransform(-110.8,22.3);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgEgDgEAAQgHAAgEAGQgGAGAAAJIAAApg");
	this.shape_239.setTransform(-116.6,23.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgIALgQAAQgOAAgJgLgAgNgTQgGAHAAAMQABAbASAAQAJABAFgIQAGgHAAgNQAAgbgUAAQgIAAgFAIg");
	this.shape_240.setTransform(-123.6,23.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_241.setTransform(-135.4,23.7);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgjQgCgDAAgEQAAgDACgCQACgCACgBQAEABACACQACACAAADQAAAEgCADQgCABgEAAQgCAAgCgBg");
	this.shape_242.setTransform(-141.3,22.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAGgEgBgGQAAgGgCgGIgFgOIgUgyIAOAAIAUA4IATg4IAOAAIggBVQgCAHgHAEQgIAFgKAAg");
	this.shape_243.setTransform(-150.8,25.2);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAAAgWg");
	this.shape_244.setTransform(-156,22.3);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_245.setTransform(-162.1,23.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_246.setTransform(-169.7,23.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAKACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_247.setTransform(-176.2,22.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_248.setTransform(-181.9,23.8);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgLAAIAAgLIAWAAIAABIgAAAgjQgDgDAAgEQAAgDADgCQABgCADgBQAEABACACQACACAAADQAAAEgCADQgCABgEAAQgDAAgBgBg");
	this.shape_249.setTransform(-186.9,22.4);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_250.setTransform(-191.5,23.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgDgDgFAAQgHAAgEAGQgFAGgBAJIAAApg");
	this.shape_251.setTransform(-196.5,23.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_252.setTransform(-203.5,23.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgIAKABQAPAAAJAJQAIAKAAATQAAAPgIALQgJAKgQAAQgEAAgGgBQgFgCgCgCIAAAggAgLgmQgEACgDADIAAApIAGAEIAHACQAYgBgBgaQABgOgHgGQgFgGgMAAIgGABg");
	this.shape_253.setTransform(-211,25.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_254.setTransform(-223.4,22.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_255.setTransform(-230.8,23.7);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAAMANgBQAJABAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_256.setTransform(-238.3,23.8);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAFgEABgGQAAgGgCgGIgGgOIgTgyIAMAAIAVA4IAUg4IAMAAIgeBVQgDAHgHAEQgIAFgKAAg");
	this.shape_257.setTransform(-249.6,25.2);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGAEADQADADAGAAIAAAMQgYAAAAgWg");
	this.shape_258.setTransform(-254.9,22.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_259.setTransform(-260.6,24.9);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_260.setTransform(-268,23.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgDgDAAgEQAAgDADgCQABgCADgBQAEABADACQABACAAADQAAAEgBADQgDABgEAAQgDAAgBgBg");
	this.shape_261.setTransform(-273.9,22.4);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AARAzIgWgkIgMAMIAAAYIgNAAIAAhlIANAAIAAA+IAbghIAQAAIgYAbIAdAtg");
	this.shape_262.setTransform(-278.8,22.3);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAAMANgBQAJABAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_263.setTransform(-286.5,23.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAKACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_264.setTransform(-292.8,22.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_265.setTransform(-298.5,23.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_266.setTransform(-305.1,23.7);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgLAAIAAgLIAWAAIAABIgAAAgjQgDgDAAgEQAAgDADgCQABgCADgBQAEABACACQACACAAADQAAAEgCADQgCABgEAAQgDAAgBgBg");
	this.shape_267.setTransform(-311.1,22.4);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAAMANgBQAJABAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_268.setTransform(-316.6,23.8);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgIAKABQAPAAAIAJQAJAKAAATQAAAPgJALQgIAKgQAAQgEAAgGgBQgGgCgBgCIAAAggAgMgmQgEACgCADIAAApIAFAEIAIACQAYgBAAgaQgBgOgGgGQgFgGgMAAIgHABg");
	this.shape_269.setTransform(-323.9,25.1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AARA0IgWglIgMAMIAAAZIgNAAIAAhnIANAAIAAA/IAbggIAQAAIgYAaIAdAug");
	this.shape_270.setTransform(214.9,4);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgEgDgEAAQgHAAgEAGQgGAGAAAJIAAApg");
	this.shape_271.setTransform(208.8,5.4);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgIAKgQAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAFgIQAGgHAAgNQAAgagUAAQgIgBgFAIg");
	this.shape_272.setTransform(201.8,5.5);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AAWAlIgWgwIgUAwIgEAAIgahKIAOAAIAQAvIATgvIACAAIAVAvIARgvIAMAAIgaBKg");
	this.shape_273.setTransform(192.9,5.6);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_274.setTransform(179.1,4.1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGAEADQADADAGAAIAAAMQgZAAAAgWg");
	this.shape_275.setTransform(173.6,4.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_276.setTransform(167.5,5.6);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgIAKgQAAQgOAAgJgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAFgIQAGgHAAgNQAAgagUAAQgIgBgFAIg");
	this.shape_277.setTransform(160,5.5);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgIgEgFQgEgEgHAAQgEAAgFADQgFADgCADIAAA2IgNAAIAAhnIANAAIAAAmQADgEAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_278.setTransform(152.4,4);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgFQgJgDgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAEQAIAEAEAEQAEAFAAAIQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_279.setTransform(145.8,5.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_280.setTransform(134.7,5.5);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_281.setTransform(127.1,5.4);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AgeAlQgLgPAAgWQAAgVALgPQALgPATAAQATAAAMAOQALANAAAYQAAAYgMAOQgLAOgTAAQgTAAgLgPgAgUgcQgGAKAAASQAAARAGALQAHAMANAAQANAAAHgLQAHgLAAgSQAAgmgbAAQgNAAgHAKg");
	this.shape_282.setTransform(118.6,4.1);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_283.setTransform(106.7,8.3);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgFQgJgDgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAEQAIAEAEAEQAEAFAAAIQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_284.setTransform(101.4,5.5);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgFQgJgDgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAEQAIAEAEAEQAEAFAAAIQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_285.setTransform(95.8,5.5);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_286.setTransform(89.2,5.5);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgKQAKgLARAAQAFAAAHADQAHABADADIgHAJIgHgDIgKgCQgJAAgGAHQgHAIAAAMQAAANAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_287.setTransform(81.9,5.5);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgIAKgQAAQgPAAgIgKgAgNgTQgGAHAAAMQABAcASAAQAJAAAFgIQAFgHABgNQgBgagTAAQgIgBgFAIg");
	this.shape_288.setTransform(74.7,5.5);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgFgDgEAAQgHAAgEAGQgFAGAAAJIAAApg");
	this.shape_289.setTransform(68.8,5.4);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgHALAAQAOAAAKAJQAIAKAAASQAAAQgIALQgKAKgPAAQgFAAgFgCQgFgBgCgCIAAAggAgLgmQgEACgDADIAAApIAGAEIAHABQAXABAAgbQAAgOgFgGQgGgGgMgBIgGACg");
	this.shape_290.setTransform(61.9,6.9);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_291.setTransform(49.5,5.5);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_292.setTransform(43,4.6);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AAUAkQgEgDgCgFQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOgBQAEABAGACQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_293.setTransform(36.5,5.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgKQAKgLARAAQAFAAAHADQAHABADADIgHAJIgHgDIgKgCQgJAAgGAHQgHAIAAAMQAAANAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_294.setTransform(29.4,5.5);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCgBgEQABgDACgCQACgDADAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_295.setTransform(23.8,4.1);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgEgDgEAAQgHAAgEAGQgGAGAAAJIAAApg");
	this.shape_296.setTransform(19.8,5.4);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_297.setTransform(13.9,4.6);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_298.setTransform(7.2,5.4);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCgBgEQABgDACgCQACgDADAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_299.setTransform(1.3,4.1);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_300.setTransform(-9.1,4.1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_301.setTransform(-16.6,5.4);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("AAUAkQgEgDgCgFQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOgBQAEABAGACQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_302.setTransform(-24.1,5.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_303.setTransform(-36,5.5);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_304.setTransform(-42.5,4.6);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("AAUAkQgEgDgCgFQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOgBQAEABAGACQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_305.setTransform(-49.1,5.5);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgKQAKgLARAAQAFAAAHADQAHABADADIgHAJIgHgDIgKgCQgJAAgGAHQgHAIAAAMQAAANAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_306.setTransform(-56.2,5.5);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgLAAIAAgKIAWAAIAABIgAAAgkQgDgCAAgEQAAgDADgCQABgDADAAQAEAAACADQACACAAADQAAAEgCACQgCACgEAAQgDAAgBgCg");
	this.shape_307.setTransform(-61.8,4.1);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAAAgWg");
	this.shape_308.setTransform(-65.4,4.1);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_309.setTransform(-71.5,5.5);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_310.setTransform(-79.4,4.1);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("AAUAkQgEgDgCgFQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOgBQAEABAGACQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_311.setTransform(-91.2,5.5);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgFQgJgDgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAEQAIAEAEAEQAEAFAAAIQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_312.setTransform(-102.2,5.5);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCgBgEQABgDACgCQACgDADAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_313.setTransform(-107.2,4.1);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgFQgJgDgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAEQAIAEAEAEQAEAFAAAIQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_314.setTransform(-116.3,5.5);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgJAKgQAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAGgIQAEgHAAgNQABgagUAAQgIgBgFAIg");
	this.shape_315.setTransform(-122.9,5.5);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_316.setTransform(-129.3,4.6);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgJAKgQAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAGgIQAEgHAAgNQABgagUAAQgIgBgFAIg");
	this.shape_317.setTransform(-135.9,5.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgIgEgFQgEgEgHAAQgEAAgFADQgFADgCADIAAA2IgNAAIAAhnIANAAIAAAmQADgEAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_318.setTransform(-143.5,4);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgHALAAQAOAAAKAJQAIAKAAASQAAAQgIALQgKAKgPAAQgFAAgFgCQgFgBgCgCIAAAggAgLgmQgEACgDADIAAApIAGAEIAHABQAXABAAgbQAAgOgFgGQgGgGgMgBIgGACg");
	this.shape_319.setTransform(-150.9,6.9);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_320.setTransform(-163,6.7);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_321.setTransform(-170.3,5.4);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCgBgEQABgDACgCQABgDADAAQAEAAADADQABACAAADQAAAEgBACQgDACgEAAQgDAAgBgCg");
	this.shape_322.setTransform(-176.3,4.1);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgIgEgFQgEgEgHAAQgEAAgFADQgFADgCADIAAA2IgNAAIAAhnIANAAIAAAmQADgEAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_323.setTransform(-181.9,4);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgKQAKgLARAAQAFAAAHADQAHABADADIgHAJIgHgDIgKgCQgJAAgGAHQgHAIAAAMQAAANAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_324.setTransform(-189.1,5.5);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_325.setTransform(-196.4,5.6);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJAAAFgIQAFgHABgNQgBgagTAAQgIgBgFAIg");
	this.shape_326.setTransform(-203.9,5.5);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_327.setTransform(-210.4,4.6);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_328.setTransform(-217,5.5);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgFgDgEAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_329.setTransform(-223,5.4);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_330.setTransform(-233.4,4.6);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFFFF").s().p("AAUAkQgEgDgCgFQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOgBQAEABAGACQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_331.setTransform(-240,5.5);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgIgEgFQgEgEgHAAQgEAAgFADQgFADgCADIAAA2IgNAAIAAhnIANAAIAAAmQADgEAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_332.setTransform(-247.4,4);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_333.setTransform(-253.9,4.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgDgDgFAAQgHAAgEAGQgFAGgBAJIAAApg");
	this.shape_334.setTransform(-263.4,5.4);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_335.setTransform(-270.5,5.5);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgCgDIgGAHIgGAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAKALQAJAKAAAPQAAASgJALQgKAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACACAAQAMAAAHgGQAFgHAAgPQAAgMgHgGQgGgHgLAAIgGACg");
	this.shape_336.setTransform(-277.9,4.1);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgFAAgEADQgEACgBAEIAAA1IgNAAIAAgzQAAgFgEgDQgDgDgHAAQgEAAgEADQgFADgCADIAAA1IgNAAIAAhIIAJAAIAEAJQAHgKAMAAQAQAAAFAJQACgEAGgDQAGgCAGAAQALAAAHAGQAGAHAAAMIAAAwg");
	this.shape_337.setTransform(-287.8,5.4);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_338.setTransform(-297.4,5.5);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgFAAgEADQgEACgBAEIAAA1IgNAAIAAgzQAAgFgDgDQgFgDgGAAQgEAAgEADQgFADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAIgKALAAQAQAAAFAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_339.setTransform(-307,5.4);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_340.setTransform(-316.6,5.5);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFFFFF").s().p("AAUAzIgagrIgPgBIAAAsIgNAAIAAhjIAKgBIAPgBQAjAAAAAdQAAAJgGAIQgGAGgIADIAdAugAgVgkIAAAgIAKABQALAAAGgEQAFgEAAgKQAAgIgGgFQgFgDgNAAg");
	this.shape_341.setTransform(-323.4,4.1);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_342.setTransform(126.3,-28.2);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgFQgJgEgDgCIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAFQAIADAEAFQAEAFAAAHQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_343.setTransform(121.1,-31);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_344.setTransform(114.5,-31);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_345.setTransform(106.9,-30.9);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FFFFFF").s().p("AATA0IAAgiQgFAHgOAAQgOgBgIgJQgJgLAAgQQAAgSAKgLQAJgJAPgBQAKABAIAGIADgFIAIAAIAABlgAgLggQgGAHAAANQAAAMAGAHQAGAGAJABQAKgBAFgFIAAgqQgGgGgIABQgKgBgGAIg");
	this.shape_346.setTransform(99,-29.6);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgkQgCgCgBgDQABgDACgDQACgDACABQAEgBADADQACADAAADQAAADgCACQgDADgEAAQgCAAgCgDg");
	this.shape_347.setTransform(93.2,-32.4);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_348.setTransform(87.6,-31.1);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgHgEgEQgEgFgHAAQgEAAgFACQgFAEgCADIAAA1IgNAAIAAhlIANAAIAAAmQADgEAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_349.setTransform(80,-32.5);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHACADADIgHAKIgHgFIgKgBQgJAAgGAIQgHAGAAAMQAAANAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_350.setTransform(72.7,-31);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_351.setTransform(65.5,-31);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHABQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_352.setTransform(59,-31.9);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_353.setTransform(47.8,-32.4);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_354.setTransform(40.4,-31.1);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAFAAAHQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_355.setTransform(32.9,-31);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgFQgJgEgDgCIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAFQAIADAEAFQAEAFAAAHQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_356.setTransform(22.2,-31);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGAEADQADADAGAAIAAAMQgZAAAAgWg");
	this.shape_357.setTransform(17.6,-32.4);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgJALgPAAQgPAAgIgLgAgNgTQgFAHgBAMQAAAbATAAQAJAAAGgHQAEgIAAgMQAAgbgTAAQgIABgFAHg");
	this.shape_358.setTransform(11.5,-31);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgJALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJAAAGgHQAEgIAAgMQABgbgUAAQgIABgFAHg");
	this.shape_359.setTransform(4,-31);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHABQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_360.setTransform(-2.4,-31.9);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_361.setTransform(-13.6,-32.4);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_362.setTransform(-21,-31);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHACADADIgHAKIgHgFIgKgBQgJAAgGAIQgHAGAAAMQAAANAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_363.setTransform(-28.3,-31);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_364.setTransform(-35.5,-31.1);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAFAAAHQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_365.setTransform(-43,-31);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FFFFFF").s().p("AgBAmIgfhLIAOAAIASAzIAUgzIANAAIggBLg");
	this.shape_366.setTransform(-50.1,-30.9);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_367.setTransform(-57.6,-32.4);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAFAAAHQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_368.setTransform(-65,-31);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_369.setTransform(-76.6,-31);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgFgDgEAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_370.setTransform(-82.6,-31.1);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgJALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJAAAGgHQAEgIAAgMQABgbgUAAQgIABgFAHg");
	this.shape_371.setTransform(-89.6,-31);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgFAAgEADQgEACgBAEIAAA1IgNAAIAAgzQAAgFgDgDQgFgDgGAAQgEAAgEADQgFADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAIgKALAAQAQAAAFAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_372.setTransform(-99.1,-31.1);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAGgEAAgGQAAgGgDgGIgFgOIgTgyIAMAAIAVA4IAUg4IAMAAIgeBVQgDAHgHAEQgIAFgKAAg");
	this.shape_373.setTransform(-112.6,-29.6);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgJALgPAAQgPAAgIgLgAgNgTQgFAHgBAMQAAAbATAAQAJAAAFgHQAFgIABgMQgBgbgTAAQgIABgFAHg");
	this.shape_374.setTransform(-119.8,-31);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAAAgWg");
	this.shape_375.setTransform(-125.3,-32.4);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAIgIAKAAQAPAAAIAKQAJAKAAATQAAAPgJALQgIALgQAAQgEAAgGgCQgGgCgBgCIAAAhgAgMglQgEABgCACIAAAqIAFAEIAIACQAYAAAAgbQgBgOgGgGQgFgHgMABIgHACg");
	this.shape_376.setTransform(-131.3,-29.6);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgEAAgFADQgEACgCAEIAAA1IgLAAIAAgzQAAgFgFgDQgEgDgGAAQgEAAgFADQgEADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAIgKALAAQAPAAAGAJQACgEAGgDQAGgCAGAAQALAAAHAGQAGAHAAAMIAAAwg");
	this.shape_377.setTransform(-141.2,-31.1);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_378.setTransform(-150.8,-31);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_379.setTransform(-162.9,-32.4);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_380.setTransform(-170.3,-31.1);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAFAAAHQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_381.setTransform(-177.8,-31);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgFQgJgEgDgCIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAFQAIADAEAFQAEAFAAAHQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_382.setTransform(-188.5,-31);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FFFFFF").s().p("AARAzIgWgkIgMALIAAAZIgNAAIAAhlIANAAIAAA/IAbgiIAQAAIgYAbIAdAtg");
	this.shape_383.setTransform(-194.4,-32.5);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgFQgJgEgDgCIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAFQAIADAEAFQAEAFAAAHQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_384.setTransform(-201.2,-31);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAFAAAHQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_385.setTransform(-207.7,-31);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHABQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_386.setTransform(-214.1,-31.9);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_387.setTransform(-224.9,-31);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAAAgWg");
	this.shape_388.setTransform(-230.5,-32.4);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAIgIAKAAQAPAAAIAKQAJAKAAATQAAAPgJALQgIALgQAAQgFAAgFgCQgGgCgBgCIAAAhgAgMglQgEABgCACIAAAqIAFAEIAIACQAXAAABgbQAAgOgHgGQgFgHgMABIgHACg");
	this.shape_389.setTransform(-236.5,-29.6);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgJAAIAAgLIAVAAIAABIgAAAgkQgDgCABgDQgBgDADgDQACgDADABQADgBACADQADADAAADQAAADgDACQgCADgDAAQgDAAgCgDg");
	this.shape_390.setTransform(-242.7,-32.4);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHABQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_391.setTransform(-247.2,-31.9);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAAAgWg");
	this.shape_392.setTransform(-251.9,-32.4);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_393.setTransform(-258,-30.9);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgFAAgEADQgEACgBAEIAAA1IgNAAIAAgzQAAgFgEgDQgDgDgHAAQgEAAgEADQgFADgCADIAAA1IgNAAIAAhIIAJAAIAEAJQAHgKAMAAQAQAAAFAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_394.setTransform(-267.6,-31.1);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgEAAgFADQgEACgCAEIAAA1IgLAAIAAgzQAAgFgFgDQgEgDgGAAQgEAAgFADQgEADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAIgKALAAQAPAAAGAJQACgEAGgDQAGgCAGAAQALAAAHAGQAGAHAAAMIAAAwg");
	this.shape_395.setTransform(-283.4,-31.1);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgDgDgFAAQgHAAgEAGQgFAGgBAJIAAApg");
	this.shape_396.setTransform(-291.3,-31.1);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgIALgQAAQgPAAgIgLgAgNgTQgGAHAAAMQABAbASAAQAJAAAFgHQAFgIABgMQgBgbgTAAQgIABgFAHg");
	this.shape_397.setTransform(-298.3,-31);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FFFFFF").s().p("AgMAzIAAg9IgLAAIAAgLIALAAQgBgOAIgHQAFgIAMAAQAGAAAGACIgDAJIgIgBQgGgBgEAFQgDAEAAAIIAAADIAPAAIAAALIgPAAIAAA9g");
	this.shape_398.setTransform(-304.4,-32.5);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgFgDgEAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_399.setTransform(-309.4,-31.1);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_400.setTransform(-316.4,-31);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAIgIAKAAQAPAAAIAKQAJAKAAATQAAAPgJALQgIALgQAAQgEAAgGgCQgGgCgBgCIAAAhgAgMglQgEABgCACIAAAqIAFAEIAIACQAYAAAAgbQgBgOgGgGQgFgHgMABIgHACg");
	this.shape_401.setTransform(-323.9,-29.6);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgKALgPAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJABAFgIQAGgIAAgMQAAgbgUAAQgIAAgFAIg");
	this.shape_402.setTransform(213.6,-49.2);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgQIANgFIAAAVIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_403.setTransform(207.2,-50.2);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_404.setTransform(195.4,-50.7);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_405.setTransform(187.9,-49.2);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_406.setTransform(180.3,-49.2);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_407.setTransform(172.7,-49.3);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAGgEgBgGQAAgGgBgGIgGgOIgUgyIAOAAIAUA4IATg4IAOAAIggBVQgCAHgHAEQgIAFgKAAg");
	this.shape_408.setTransform(160.6,-47.8);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgIAOAAQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_409.setTransform(153.5,-49.2);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgEAAgFADQgEACgCAEIAAA1IgLAAIAAgzQAAgFgFgDQgEgDgGAAQgEAAgFADQgEADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAIgKALAAQAPAAAGAJQACgEAGgDQAGgCAGAAQALAAAHAGQAGAHAAAMIAAAwg");
	this.shape_410.setTransform(144,-49.3);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_411.setTransform(129.6,-49.2);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgKALgPAAQgPAAgJgLgAgNgTQgFAHAAAMQgBAbATAAQAJABAGgIQAEgIAAgMQAAgbgTAAQgIAAgFAIg");
	this.shape_412.setTransform(122,-49.2);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAGgEgBgGQAAgGgCgGIgFgOIgUgyIAOAAIAUA4IATg4IAOAAIggBVQgCAHgHAEQgIAFgKAAg");
	this.shape_413.setTransform(114.8,-47.8);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FFFFFF").s().p("AgLARQALgJAAgIQAAgBgBgDQgGgEAAgEQAAgEADgDQADgCADAAQAEAAADADQADADAAAFQAAAJgEAHQgEAGgLAKg");
	this.shape_414.setTransform(103.8,-45.3);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgFgDgBIgGgEIgDgGIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_415.setTransform(98.6,-49.2);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgEgDgEAAQgHAAgEAGQgGAGAAAJIAAApg");
	this.shape_416.setTransform(93.6,-49.3);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_417.setTransform(86.6,-49.2);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhlIANAAIAAAlQADgDAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_418.setTransform(79,-50.7);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgQIANgFIAAAVIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_419.setTransform(72.5,-50.2);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgKALgPAAQgOAAgKgLgAgNgTQgFAHAAAMQgBAbATAAQAJABAGgIQAEgIAAgMQAAgbgTAAQgIAAgFAIg");
	this.shape_420.setTransform(65.9,-49.2);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgFgDgEAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_421.setTransform(55.1,-49.3);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgJALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJABAGgIQAEgIAAgMQABgbgUAAQgIAAgFAIg");
	this.shape_422.setTransform(48.1,-49.2);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FFFFFF").s().p("AgeAyIAAhjIA9AAIAAAMIgvAAIAAAcIAiAAIAAAKIgiAAIAAAxg");
	this.shape_423.setTransform(41.2,-50.6);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_424.setTransform(29.5,-46.5);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhlIANAAIAAAlQADgDAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_425.setTransform(23.3,-50.7);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgFgDgBIgGgEIgDgGIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_426.setTransform(16.7,-49.2);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgCgDgBgEQABgCACgDQACgCACgBQAEABADACQACADAAACQAAAEgCADQgDACgEAAQgCAAgCgCg");
	this.shape_427.setTransform(11.7,-50.6);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgEAAgFADQgEACgBAEIAAA1IgNAAIAAgzQAAgFgDgDQgEgDgHAAQgEAAgEADQgFADgCADIAAA1IgNAAIAAhIIAJAAIAEAJQAHgKAMAAQAQAAAFAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_428.setTransform(4.1,-49.3);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_429.setTransform(-5.5,-49.2);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGAEADQADADAGAAIAAAMQgYAAAAgWg");
	this.shape_430.setTransform(-11.1,-50.7);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgCgDIgGAHIgGAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAKALQAJAKAAAPQAAASgJALQgKAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACACAAQAMAAAGgGQAGgHAAgPQAAgMgHgGQgGgHgLAAIgGACg");
	this.shape_431.setTransform(-17,-50.7);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgFgDgEAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_432.setTransform(-28.1,-49.3);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgJALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJABAGgIQAEgIAAgMQABgbgUAAQgIAAgFAIg");
	this.shape_433.setTransform(-35.1,-49.2);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_434.setTransform(-42.7,-49.3);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgjQgCgDAAgEQAAgCACgDQACgCACgBQAEABACACQACADAAACQAAAEgCADQgCACgEAAQgCAAgCgCg");
	this.shape_435.setTransform(-48.6,-50.6);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgEAAgFADQgEACgCAEIAAA1IgLAAIAAgzQAAgFgFgDQgEgDgGAAQgEAAgFADQgEADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAIgKALAAQAPAAAGAJQACgEAGgDQAGgCAGAAQALAAAHAGQAGAHAAAMIAAAwg");
	this.shape_436.setTransform(-56.2,-49.3);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgIAOAAQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_437.setTransform(-70.6,-49.2);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgFgDgEAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_438.setTransform(-81.2,-49.3);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgDgDAAgEQAAgCADgDQABgCADgBQAEABADACQABADAAACQAAAEgBADQgDACgEAAQgDAAgBgCg");
	this.shape_439.setTransform(-86.6,-50.6);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgIAOAAQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_440.setTransform(-92.1,-49.2);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgIALABQAOgBAJAKQAJAKAAATQAAAPgJALQgJAKgPAAQgFAAgFgBQgGgCgBgCIAAAggAgMgmQgDACgDACIAAAqIAFAEIAIACQAYgBAAgaQgBgOgFgGQgGgGgMAAIgHABg");
	this.shape_441.setTransform(-99.4,-47.9);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_442.setTransform(-107.3,-49.2);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgGANQgEgDgEAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_443.setTransform(-113.3,-49.3);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgFgDgEAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_444.setTransform(-123.5,-49.3);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgJALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJABAGgIQAEgIAAgMQABgbgUAAQgIAAgFAIg");
	this.shape_445.setTransform(-130.5,-49.2);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FFFFFF").s().p("AgKARQAKgJAAgIQAAgBgBgDQgGgEAAgEQAAgEADgDQADgCADAAQAEAAADADQADADgBAFQAAAJgDAHQgEAGgLAKg");
	this.shape_446.setTransform(-141.9,-45.3);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_447.setTransform(-148,-49.2);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_448.setTransform(-155.3,-48.1);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgIAOAAQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_449.setTransform(-162.5,-49.2);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgEAAgFADQgEACgCAEIAAA1IgLAAIAAgzQAAgFgFgDQgEgDgGAAQgEAAgFADQgEADgCADIAAA1IgNAAIAAhIIAJAAIAEAJQAHgKAMAAQAQAAAFAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_450.setTransform(-172,-49.3);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgjQgCgDAAgEQAAgCACgDQACgCADgBQADABACACQACADAAACQAAAEgCADQgCACgDAAQgDAAgCgCg");
	this.shape_451.setTransform(-179.9,-50.6);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_452.setTransform(-190.4,-49.2);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhlIANAAIAAAlQADgDAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_453.setTransform(-198,-50.7);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgQIANgFIAAAVIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_454.setTransform(-204.5,-50.2);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_455.setTransform(-216,-49.3);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_456.setTransform(-223.6,-49.2);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgQIANgFIAAAVIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_457.setTransform(-230.1,-50.2);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhlIANAAIAAAlQADgDAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_458.setTransform(-236.7,-50.7);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_459.setTransform(-244,-48.1);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgjQgCgDAAgEQAAgCACgDQACgCADgBQADABACACQACADAAACQAAAEgCADQgCACgDAAQgDAAgCgCg");
	this.shape_460.setTransform(-249.7,-50.6);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGADADQAEADAFAAIAAAMQgXAAAAgWg");
	this.shape_461.setTransform(-253.3,-50.7);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FFFFFF").s().p("AgKARQAKgJAAgIQAAgBgBgDQgGgEAAgEQAAgEADgDQADgCADAAQAEAAADADQACADAAAFQABAJgEAHQgEAGgLAKg");
	this.shape_462.setTransform(-263.2,-45.3);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_463.setTransform(-269.3,-49.3);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgKALgPAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJABAFgIQAGgIgBgMQABgbgUAAQgIAAgFAIg");
	this.shape_464.setTransform(-276.9,-49.2);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgJAAIAAgLIAVAAIAABIgAAAgjQgDgDABgEQAAgCACgDQACgCADgBQADABACACQADADAAACQAAAEgDADQgCACgDAAQgDAAgCgCg");
	this.shape_465.setTransform(-282.8,-50.6);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgQIANgFIAAAVIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_466.setTransform(-287.3,-50.2);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_467.setTransform(-293.9,-49.2);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGAEADQADADAGAAIAAAMQgYAAAAgWg");
	this.shape_468.setTransform(-299.5,-50.7);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgJALgQAAQgPAAgJgLgAgNgTQgGAHABAMQAAAbASAAQAJABAGgIQAEgIAAgMQABgbgUAAQgIAAgFAIg");
	this.shape_469.setTransform(-305.6,-49.2);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgFgDgBIgGgEIgDgGIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_470.setTransform(-312.2,-49.2);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_471.setTransform(-318.8,-49.2);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgDgDgFAAQgHAAgEAGQgFAGgBAJIAAApg");
	this.shape_472.setTransform(-324.7,-49.3);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_473.setTransform(214.1,-67.5);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#FFFFFF").s().p("AAQA0IAAgvQAAgHgEgFQgEgEgHAAQgEAAgFADQgFADgCADIAAA2IgNAAIAAhnIANAAIAAAmQADgDAFgDQAGgDAFAAQAMAAAHAHQAGAIAAAMIAAAvg");
	this.shape_474.setTransform(206.5,-69);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFAAAGgCIABALQgIACgJAAQgIAAgGgGg");
	this.shape_475.setTransform(200,-68.4);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_476.setTransform(185.2,-67.5);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_477.setTransform(177.9,-66.3);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_478.setTransform(170.6,-67.6);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#FFFFFF").s().p("AAUAjQgEgBgCgGQgIAKgPAAQgJAAgGgHQgGgGAAgJQAAgLAJgHQAKgHAOgBQAEAAAGADQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgDgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_479.setTransform(163.1,-67.5);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#FFFFFF").s().p("AAQA0IAAgvQAAgHgEgFQgEgEgHAAQgEAAgFADQgFADgCADIAAA2IgNAAIAAhnIANAAIAAAmQADgDAFgDQAGgDAFAAQAMAAAHAHQAGAIAAAMIAAAvg");
	this.shape_480.setTransform(155.6,-69);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgLQAKgKARAAQAFAAAHADQAHABADADIgHAJIgHgDIgKgCQgJAAgGAHQgHAIAAAMQAAANAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_481.setTransform(148.4,-67.5);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAKQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJAAAGgIQAEgHAAgNQAAgbgTAAQgIAAgFAIg");
	this.shape_482.setTransform(133,-67.5);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFAAAGgCIABALQgIACgJAAQgIAAgGgGg");
	this.shape_483.setTransform(126.6,-68.4);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAGgEgBgGQAAgGgCgGIgFgOIgUgyIAOAAIAUA4IATg4IAOAAIggBVQgCAHgHAEQgIAFgKAAg");
	this.shape_484.setTransform(112.1,-66.1);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAAAgWg");
	this.shape_485.setTransform(106.9,-68.9);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_486.setTransform(100.8,-67.6);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAKQgKAKgPAAQgPAAgJgKgAgNgTQgFAHAAAMQgBAcATAAQAJAAAGgIQAEgHAAgNQAAgbgTAAQgIAAgFAIg");
	this.shape_487.setTransform(93.2,-67.5);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_488.setTransform(77.2,-68.9);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_489.setTransform(69.8,-67.5);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_490.setTransform(62.2,-67.5);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_491.setTransform(54.6,-67.6);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAFgEABgGQAAgGgCgGIgGgOIgTgyIAMAAIAVA4IAUg4IAMAAIgeBVQgDAHgHAEQgIAFgKAAg");
	this.shape_492.setTransform(39.2,-66.1);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FFFFFF").s().p("AAUAjQgEgBgCgGQgIAKgPAAQgJAAgGgHQgGgGAAgJQAAgLAJgHQAKgHAOgBQAEAAAGADQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgDgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_493.setTransform(32,-67.5);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgEAAgFADQgEACgBAEIAAA1IgNAAIAAgzQAAgFgDgDQgEgDgHAAQgEAAgEADQgFADgCADIAAA1IgNAAIAAhIIAJAAIAEAJQAHgKAMAAQAQAAAFAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_494.setTransform(22.6,-67.6);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_495.setTransform(4.8,-67.5);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_496.setTransform(-2.8,-67.6);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAKQgIAKgQAAQgPAAgIgKgAgNgTQgGAHAAAMQABAcASAAQAJAAAFgIQAFgHABgNQgBgbgTAAQgIAAgFAIg");
	this.shape_497.setTransform(-10.3,-67.5);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#FFFFFF").s().p("AgLARQALgJAAgIQAAgCgBgCQgGgDAAgFQAAgEADgDQADgCADAAQAEAAADADQACAEAAAEQAAAJgDAGQgEAIgLAJg");
	this.shape_498.setTransform(-25,-63.5);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgFQgJgDgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAEQAIAEAEAEQAEAFAAAIQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_499.setTransform(-30.2,-67.5);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_500.setTransform(-36.8,-67.5);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgEgDgEAAQgHAAgEAGQgGAGAAAJIAAApg");
	this.shape_501.setTransform(-42.7,-67.6);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_502.setTransform(-49.8,-67.4);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFAAAGgCIABALQgIACgJAAQgIAAgGgGg");
	this.shape_503.setTransform(-56.3,-68.4);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgLQAKgKARAAQAFAAAHADQAHABADADIgHAJIgHgDIgKgCQgJAAgGAHQgHAIAAAMQAAANAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_504.setTransform(-62.6,-67.5);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgLIAXAAIAABJgAAAgjQgDgDAAgEQAAgDADgCQABgDADAAQAEAAADADQABACAAADQAAAEgBADQgDABgEAAQgDAAgBgBg");
	this.shape_505.setTransform(-68.2,-68.9);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgHALAAQAOAAAKAJQAIAKAAASQAAAQgIALQgJAKgQAAQgEAAgGgCQgFgBgCgCIAAAggAgLgmQgFACgCADIAAApIAGAEIAHABQAYAAgBgaQAAgOgFgGQgGgGgMgBIgGACg");
	this.shape_506.setTransform(-73.6,-66.1);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAFgEAAgGQAAgGgBgGIgGgOIgUgyIANAAIAVA4IATg4IANAAIgfBVQgCAHgHAEQgIAFgKAAg");
	this.shape_507.setTransform(-89.3,-66.1);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_508.setTransform(-96.6,-67.6);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#FFFFFF").s().p("AAUAjQgEgBgCgGQgIAKgPAAQgJAAgGgHQgGgGAAgJQAAgLAJgHQAKgHAOgBQAEAAAGADQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgDgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_509.setTransform(-104.1,-67.5);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgFAAgEADQgEACgBAEIAAA1IgNAAIAAgzQAAgFgDgDQgFgDgGAAQgEAAgEADQgFADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAIgKALAAQAQAAAFAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_510.setTransform(-113.5,-67.6);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgFgDgEAAQgHAAgEAGQgFAGAAAJIAAApg");
	this.shape_511.setTransform(-129.6,-67.6);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAKQgKAKgPAAQgOAAgKgKgAgNgTQgFAHgBAMQAAAcATAAQAJAAAGgIQAEgHAAgNQAAgbgTAAQgIAAgFAIg");
	this.shape_512.setTransform(-136.6,-67.5);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#FFFFFF").s().p("AgeAyIAAhjIA9AAIAAAMIgvAAIAAAcIAiAAIAAALIgiAAIAAAwg");
	this.shape_513.setTransform(-143.6,-68.8);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_514.setTransform(-158.5,-64.7);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgFQgJgDgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAEQAIAEAEAEQAEAFAAAIQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_515.setTransform(-163.8,-67.5);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGAEADQADADAGAAIAAAMQgZAAAAgWg");
	this.shape_516.setTransform(-168.4,-68.9);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#FFFFFF").s().p("AAUAjQgEgBgCgGQgIAKgPAAQgJAAgGgHQgGgGAAgJQAAgLAJgHQAKgHAOgBQAEAAAGADQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgDgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_517.setTransform(-174.4,-67.5);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAKQgIAKgQAAQgPAAgIgKgAgNgTQgGAHAAAMQABAcASAAQAJAAAFgIQAFgHABgNQgBgbgTAAQgIAAgFAIg");
	this.shape_518.setTransform(-181.8,-67.5);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_519.setTransform(-189,-66.3);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgLQAKgKARAAQAFAAAHADQAHABADADIgHAJIgHgDIgKgCQgJAAgGAHQgHAIAAAMQAAANAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_520.setTransform(-204.1,-67.5);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgLIAVAAIAABJgAAAgjQgCgDAAgEQAAgDACgCQACgDACAAQAEAAACADQACACAAADQAAAEgCADQgCABgEAAQgCAAgCgBg");
	this.shape_521.setTransform(-209.7,-68.9);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#FFFFFF").s().p("AgMA0IAAg+IgLAAIAAgLIALAAQgBgNAIgJQAFgIAMAAQAGAAAGACIgDAKIgIgCQgGABgEAEQgDAFAAAGIAAAEIAOAAIAAALIgOAAIAAA+g");
	this.shape_522.setTransform(-213.8,-69);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgLAAIAAgLIAWAAIAABJgAAAgjQgDgDAAgEQAAgDADgCQABgDADAAQAEAAACADQACACAAADQAAAEgCADQgCABgEAAQgDAAgBgBg");
	this.shape_523.setTransform(-218.8,-68.9);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgLQAKgKARAAQAFAAAHADQAHABADADIgHAJIgHgDIgKgCQgJAAgGAHQgHAIAAAMQAAANAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_524.setTransform(-224.1,-67.5);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_525.setTransform(-231.3,-67.5);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgHALAAQAOAAAKAJQAIAKAAASQAAAQgIALQgJAKgQAAQgEAAgGgCQgFgBgCgCIAAAggAgLgmQgFACgCADIAAApIAGAEIAHABQAYAAgBgaQAAgOgFgGQgGgGgMgBIgGACg");
	this.shape_526.setTransform(-238.8,-66.1);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgFQgJgDgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAEQAIAEAEAEQAEAFAAAIQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_527.setTransform(-245.7,-67.5);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgFQgJgDgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAEQAIAEAEAEQAEAFAAAIQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_528.setTransform(-259.5,-67.5);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgLIAXAAIAABJgAAAgjQgCgDgBgEQABgDACgCQABgDADAAQAEAAADADQABACAAADQAAAEgBADQgDABgEAAQgDAAgBgBg");
	this.shape_529.setTransform(-264.5,-68.9);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#FFFFFF").s().p("AAQA0IAAgvQAAgHgEgFQgEgEgHAAQgEAAgFADQgFADgCADIAAA2IgNAAIAAhnIANAAIAAAmQADgDAFgDQAGgDAFAAQAMAAAHAHQAGAIAAAMIAAAvg");
	this.shape_530.setTransform(-270.1,-69);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_531.setTransform(-286.1,-68.9);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_532.setTransform(-293.6,-67.6);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#FFFFFF").s().p("AAUAjQgEgBgCgGQgIAKgPAAQgJAAgGgHQgGgGAAgJQAAgLAJgHQAKgHAOgBQAEAAAGADQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgDgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_533.setTransform(-301.1,-67.5);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_534.setTransform(-316.7,-67.6);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAKQgIAKgQAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAFgIQAGgHAAgNQAAgbgUAAQgIAAgFAIg");
	this.shape_535.setTransform(-324.2,-67.5);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_536.setTransform(214.4,-84.6);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_537.setTransform(207.1,-85.8);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgCgCAAgEQAAgCACgDQACgCACAAQAEAAACACQACADAAACQAAAEgCACQgCACgEAAQgCAAgCgCg");
	this.shape_538.setTransform(201.1,-87.1);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#FFFFFF").s().p("AARA0IgWglIgMALIAAAaIgNAAIAAhnIANAAIAAA/IAbggIAQAAIgYAaIAdAug");
	this.shape_539.setTransform(196.2,-87.2);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgFgDgEAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_540.setTransform(190.1,-85.8);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgJAKgQAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAGgIQAEgHAAgNQABgagUAAQgIgBgFAIg");
	this.shape_541.setTransform(183.1,-85.7);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#FFFFFF").s().p("AAWAlIgWgwIgVAwIgDAAIgahKIAOAAIAPAvIAUgvIADAAIAUAvIARgvIAMAAIgaBKg");
	this.shape_542.setTransform(174.2,-85.7);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgGQgJgEgDgBIgGgFIgDgGIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAEQAIAEAEAEQAEAGAAAHQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_543.setTransform(161.7,-85.7);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#FFFFFF").s().p("AgEANIgBgZIALAAIgCAZg");
	this.shape_544.setTransform(157.8,-90.8);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgKQAKgKANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_545.setTransform(152.9,-85.7);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgHgEgGQgEgEgHAAQgEAAgFACQgFADgCAEIAAA2IgNAAIAAhnIANAAIAAAnQADgFAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_546.setTransform(145.3,-87.2);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgKQAKgKANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_547.setTransform(133.3,-85.7);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_548.setTransform(126.1,-84.6);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOAAQAEAAAGACQAAgTgPABQgMAAgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_549.setTransform(118.8,-85.7);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgEAAgFADQgEACgCAEIAAA1IgLAAIAAgzQAAgFgFgDQgEgDgGAAQgEAAgFADQgEADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAIgKALAAQAPAAAGAJQACgEAGgDQAGgCAGAAQALAAAHAGQAGAHAAAMIAAAwg");
	this.shape_550.setTransform(109.4,-85.8);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgDgCABgEQgBgCADgDQABgCAEAAQADAAACACQACADABACQgBAEgCACQgCACgDAAQgEAAgBgCg");
	this.shape_551.setTransform(101.4,-87.1);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgKQAKgKANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_552.setTransform(91.4,-85.7);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgHgEgGQgEgEgHAAQgEAAgFACQgFADgCAEIAAA2IgNAAIAAhnIANAAIAAAnQADgFAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_553.setTransform(83.8,-87.2);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_554.setTransform(77.3,-86.7);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_555.setTransform(66.3,-85.8);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgIAKgQAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAFgIQAGgHAAgNQAAgagUAAQgIgBgFAIg");
	this.shape_556.setTransform(58.7,-85.7);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgGQgJgEgDgBIgGgFIgDgGIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAEQAIAEAEAEQAEAGAAAHQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_557.setTransform(47.7,-85.7);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_558.setTransform(40.8,-87.2);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_559.setTransform(33.4,-85.8);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgKQAKgKANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_560.setTransform(25.8,-85.7);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgHALgBQAPAAAIAKQAJAKAAASQAAAQgJALQgIALgQgBQgFAAgFgCQgFgBgCgCIAAAggAgMgmQgEACgCADIAAApIAFAEIAIABQAXABABgbQAAgOgHgGQgFgGgMgBIgHACg");
	this.shape_561.setTransform(18.3,-84.4);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgKQAKgKANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_562.setTransform(10.4,-85.7);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_563.setTransform(2.5,-87.2);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgOAAgKgKgAgNgTQgFAHgBAMQAAAcATAAQAJAAAGgIQAEgHAAgNQAAgagTAAQgIgBgFAIg");
	this.shape_564.setTransform(-9.3,-85.7);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_565.setTransform(-17.1,-87.2);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_566.setTransform(-29.3,-87.2);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGAEADQADADAGAAIAAAMQgZAAAAgWg");
	this.shape_567.setTransform(-34.7,-87.2);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_568.setTransform(-40.8,-85.7);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgIAKgQAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAFgIQAGgHAAgNQAAgagUAAQgIgBgFAIg");
	this.shape_569.setTransform(-48.4,-85.7);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgHgEgGQgEgEgHAAQgEAAgFACQgFADgCAEIAAA2IgNAAIAAhnIANAAIAAAnQADgFAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_570.setTransform(-55.9,-87.2);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgGQgJgEgDgBIgGgFIgDgGIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAEQAIAEAEAEQAEAGAAAHQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_571.setTransform(-62.6,-85.7);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgFANQgEgDgFAAQgHAAgEAGQgFAGgBAJIAAApg");
	this.shape_572.setTransform(-71.9,-85.8);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJAAAGgIQAEgHAAgNQAAgagTAAQgIgBgFAIg");
	this.shape_573.setTransform(-78.9,-85.7);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_574.setTransform(-85.4,-86.7);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgCgCAAgEQAAgCACgDQACgCADAAQADAAACACQACADAAACQAAAEgCACQgCACgDAAQgDAAgCgCg");
	this.shape_575.setTransform(-90.4,-87.1);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_576.setTransform(-96.3,-87.2);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgKQAKgKANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_577.setTransform(-103.7,-85.7);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_578.setTransform(-115.7,-85.8);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOAAQAEAAAGACQAAgTgPABQgMAAgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_579.setTransform(-123.2,-85.7);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_580.setTransform(-134.7,-84.6);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_581.setTransform(-142.1,-85.8);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCgBgEQABgCACgDQACgCACAAQAEAAADACQACADAAACQAAAEgCACQgDACgEAAQgCAAgCgCg");
	this.shape_582.setTransform(-148,-87.1);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgHgEgGQgEgEgHAAQgEAAgFACQgFADgCAEIAAA2IgNAAIAAhnIANAAIAAAnQADgFAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_583.setTransform(-153.6,-87.2);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgKQAKgLARAAQAFAAAHADQAHACADACIgHAJIgHgDIgKgCQgJAAgGAIQgHAGAAANQAAANAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_584.setTransform(-160.9,-85.7);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_585.setTransform(-168.1,-85.7);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJAAAGgIQAEgHAAgNQAAgagTAAQgIgBgFAIg");
	this.shape_586.setTransform(-175.7,-85.7);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_587.setTransform(-182.1,-86.7);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgKQAKgKANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_588.setTransform(-188.8,-85.7);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgGANQgEgDgEAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_589.setTransform(-194.7,-85.8);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgHgEgGQgEgEgHAAQgEAAgFACQgFADgCAEIAAA2IgNAAIAAhnIANAAIAAAnQADgFAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_590.setTransform(-206.2,-87.2);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgKQAKgLARAAQAFAAAHADQAHACADACIgHAJIgHgDIgKgCQgJAAgGAIQgHAGAAANQAAANAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_591.setTransform(-213.4,-85.7);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_592.setTransform(-220.7,-85.7);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgEAAgFADQgEACgCAEIAAA1IgLAAIAAgzQAAgFgFgDQgEgDgGAAQgEAAgFADQgEADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAIgKALAAQAPAAAGAJQACgEAGgDQAGgCAGAAQALAAAHAGQAGAHAAAMIAAAwg");
	this.shape_593.setTransform(-230.3,-85.8);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#FFFFFF").s().p("AAWAlIgWgwIgVAwIgDAAIgahKIAOAAIAPAvIAUgvIADAAIAUAvIARgvIAMAAIgaBKg");
	this.shape_594.setTransform(-245.7,-85.7);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgPAAgJgKgAgNgTQgFAHAAAMQgBAcATAAQAJAAAGgIQAEgHAAgNQAAgagTAAQgIgBgFAIg");
	this.shape_595.setTransform(-254.6,-85.7);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgHgEgGQgEgEgHAAQgEAAgFACQgFADgCAEIAAA2IgNAAIAAhnIANAAIAAAnQADgFAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_596.setTransform(-262.2,-87.2);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#FFFFFF").s().p("AgLARQALgKAAgGQAAgDgBgDQgGgDAAgFQAAgDADgDQADgCADAAQAEAAADAEQACADABAEQgBAJgDAGQgEAIgLAJg");
	this.shape_597.setTransform(-273.1,-81.8);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgFgDgEAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_598.setTransform(-275.6,-85.8);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgKQAKgKANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_599.setTransform(-282.7,-85.7);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#FFFFFF").s().p("AgBAlIgfhKIAOAAIASAzIAUgzIANAAIggBKg");
	this.shape_600.setTransform(-289.9,-85.7);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgKQAKgKANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_601.setTransform(-297.1,-85.7);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#FFFFFF").s().p("AAVAlIgVgwIgVAwIgDAAIgahKIAOAAIAPAvIAUgvIACAAIAUAvIARgvIANAAIgaBKg");
	this.shape_602.setTransform(-306.1,-85.7);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgJAKgPAAQgPAAgIgKgAgNgTQgGAHAAAMQAAAcATAAQAJAAAFgIQAFgHABgNQgBgagTAAQgIgBgFAIg");
	this.shape_603.setTransform(-315.1,-85.7);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#FFFFFF").s().p("AAWAyIAAgwIgrAAIAAAwIgOAAIAAhjIAOAAIAAAoIArAAIAAgoIANAAIAABjg");
	this.shape_604.setTransform(-323.4,-87.1);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_605.setTransform(-48.8,-119.5);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAHAIAEIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_606.setTransform(-54.1,-122.2);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGAEADQADADAGAAIAAAMQgYAAAAgWg");
	this.shape_607.setTransform(-58.7,-123.7);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOAAQAEAAAGACQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_608.setTransform(-64.7,-122.2);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgJALgPAAQgPAAgIgLgAgNgTQgFAHgBAMQAAAbATAAQAJAAAFgHQAFgIABgMQgBgbgTAAQgIABgFAHg");
	this.shape_609.setTransform(-72.1,-122.2);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_610.setTransform(-79.3,-121.1);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAHAIAEIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_611.setTransform(-89.9,-122.2);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgCgDgBgDQABgDACgDQABgCADgBQAEABADACQABADAAADQAAADgBADQgDACgEAAQgDAAgBgCg");
	this.shape_612.setTransform(-94.8,-123.6);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFACQgFADgCAEIAAA1IgNAAIAAhlIANAAIAAAlQADgEAFgDQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_613.setTransform(-100.4,-123.7);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_614.setTransform(-111.9,-121.1);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_615.setTransform(-119.2,-122.3);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgCgDgBgDQABgDACgDQACgCADgBQADABADACQACADAAADQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_616.setTransform(-125.2,-123.6);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#FFFFFF").s().p("AgBAmIgfhKIAOAAIASAyIAUgyIANAAIggBKg");
	this.shape_617.setTransform(-130.4,-122.2);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_618.setTransform(-137.6,-122.2);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgjQgCgDAAgDQAAgDACgDQACgCACgBQAEABACACQACADAAADQAAADgCADQgCACgEAAQgCAAgCgCg");
	this.shape_619.setTransform(-143.6,-123.6);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFACQgFADgCAEIAAA1IgNAAIAAhlIANAAIAAAlQADgEAFgDQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_620.setTransform(-149.2,-123.7);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHACADADIgHAKIgHgFIgKgBQgJAAgGAHQgHAIAAALQAAANAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_621.setTransform(-156.4,-122.2);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOAAQAEAAAGACQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_622.setTransform(-163.6,-122.2);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_623.setTransform(-175.2,-122.3);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgjQgDgDABgDQgBgDADgDQABgCAEgBQADABACACQACADABADQgBADgCADQgCACgDAAQgEAAgBgCg");
	this.shape_624.setTransform(-181.2,-123.6);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgGANQgEgDgEAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_625.setTransform(-189.3,-122.3);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgKALgPAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJAAAFgHQAGgIgBgMQABgbgUAAQgIABgFAHg");
	this.shape_626.setTransform(-196.3,-122.2);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAFAHAAQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_627.setTransform(-202.8,-123.2);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgCgDgBgDQABgDACgDQABgCADgBQAEABADACQABADAAADQAAADgBADQgDACgEAAQgDAAgBgCg");
	this.shape_628.setTransform(-207.8,-123.6);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_629.setTransform(-213.7,-123.7);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_630.setTransform(-221.1,-122.2);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgIALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJAAAFgHQAGgIAAgMQAAgbgUAAQgIABgFAHg");
	this.shape_631.setTransform(-232.9,-122.2);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAFAHAAQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_632.setTransform(-239.3,-123.2);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgIALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJAAAFgHQAGgIAAgMQAAgbgUAAQgIABgFAHg");
	this.shape_633.setTransform(-245.9,-122.2);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFACQgFADgCAEIAAA1IgNAAIAAhlIANAAIAAAlQADgEAFgDQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_634.setTransform(-253.5,-123.7);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAIgIAKAAQAPAAAJAKQAIAKAAATQAAAPgIALQgJALgQAAQgEAAgGgCQgFgCgCgCIAAAhgAgLglQgEABgDACIAAAqIAGAEIAHACQAYAAgBgbQABgOgHgGQgFgHgMABIgGACg");
	this.shape_635.setTransform(-260.9,-120.9);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_636.setTransform(-273,-122.2);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFACQgFADgCAEIAAA1IgNAAIAAhlIANAAIAAAlQADgEAFgDQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_637.setTransform(-280.6,-123.7);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAFAHAAQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_638.setTransform(-287.1,-123.2);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAFAHAAQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_639.setTransform(-296.9,-123.2);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAHAIAEIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_640.setTransform(-302.6,-122.2);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgJAAIAAgLIAVAAIAABIgAAAgjQgDgDABgDQAAgDACgDQACgCADgBQADABACACQADADAAADQAAADgDADQgCACgDAAQgDAAgCgCg");
	this.shape_641.setTransform(-307.5,-123.6);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAHAIAEIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_642.setTransform(-312.2,-122.2);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAHAIAEIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_643.setTransform(-317.8,-122.2);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOAAQAEAAAGACQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_644.setTransform(-324.3,-122.2);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAGgEAAgGQgBgGgCgGIgFgOIgTgyIAMAAIAVA4IAUg4IAMAAIgeBVQgDAHgHAEQgIAFgKAAg");
	this.shape_645.setTransform(214,-139.1);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAABgWg");
	this.shape_646.setTransform(208.8,-141.9);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgCgDgBgEQABgDACgCQACgCACgBQAEABADACQACACAAADQAAAEgCADQgDABgEAAQgCAAgCgBg");
	this.shape_647.setTransform(204.3,-141.9);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAGQgHAGgLAAQgMAAgKgGg");
	this.shape_648.setTransform(199.7,-140.5);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAAMANgBQAJABAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_649.setTransform(193.2,-140.5);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAHIAoAAIAAAAg");
	this.shape_650.setTransform(185.7,-140.5);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_651.setTransform(173.5,-140.6);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAAMANgBQAJABAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_652.setTransform(166,-140.5);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHADADACIgHAJIgHgDQgFgCgFAAQgJAAgGAHQgHAHAAAMQAAAOAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_653.setTransform(158.9,-140.5);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#FFFFFF").s().p("AAPA0IAAgtQAAgHgEgDQgFgEgGAAQgDAAgFACQgEADgCACIAAA0IgSAAIAAhjIASgEIAAAkQAGgGALAAQAOAAAIAHQAHAIABANIAAAtg");
	this.shape_654.setTransform(146.7,-142.1);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#FFFFFF").s().p("AgNAkIgMgEIAHgOQAHAGAKAAQAJAAAAgHQAAgEgDgCQgDgDgIgEQgTgHAAgOQAAgKAHgEQAIgGAKAAQALAAAKAFIgEANQgGgEgKAAQgIAAAAAGQAAAEADABQADADAIAEQAKADAEAFQAFAGAAAHQAAAKgIAGQgIAGgLAAQgIAAgEgCg");
	this.shape_655.setTransform(139.5,-140.5);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#FFFFFF").s().p("AgfAKIAAguIARAAIAAAtQAAAOANAAQAFAAAFgDQAFgDABgEIAAgxIARAAIAABIIgRAAIAAgGQgDADgHACQgFACgGAAQgZAAAAgbg");
	this.shape_656.setTransform(132.4,-140.4);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#FFFFFF").s().p("AgYAlIAAhIIARAAIAAAHQAHgIALAAQAJAAAFACIgIAPQgEgDgGAAQgFAAgEAFQgFAGAAAIIAAAog");
	this.shape_657.setTransform(125.7,-140.6);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#FFFFFF").s().p("AgTAvIgEAGIgKAAIAAhlIARgEIAAAiQAHgEAIAAQAPAAAKAKQAKAKAAAPQAAASgKALQgKALgQAAQgKAAgHgGgAgQgEIAAAmQAEAEAGAAQAMABAFgHQAFgFAAgOQAAgUgUAAQgIAAgEADg");
	this.shape_658.setTransform(118.4,-142);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#FFFFFF").s().p("AgfAsIALgNQAJAIALAAQAGAAAFgCQAFgCAAgEQAAgHgLAAIgHABIgJABQgSAAAAgNQAAgEADgDQADgEAEgBQgMgHAAgPQAAgMAIgIQAJgHAMAAQAJAAAHADIAHgIIALALIgIAGQAFAHAAAIQAAANgIAHQgIAHgLAAIgEgBIgDAAIgEACQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAACAFAAIAHgBIAIgBQAYAAAAAUQAAALgKAHQgJAGgOAAQgQAAgOgKgAgKgfQgEAEAAAGQAAAGAEAEQADAEAGAAQAFAAAEgEQADgEAAgGQAAgGgDgEQgEgDgFAAQgGAAgDADg");
	this.shape_659.setTransform(106.1,-139.4);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#FFFFFF").s().p("AAPAlIAAgpQAAgJgDgFQgEgEgIAAQgDAAgEACQgFACgCADIAAA0IgRAAIAAhIIAMAAIADAHQAHgIANAAQANAAAIAIQAHAHAAAOIAAAsg");
	this.shape_660.setTransform(98.4,-140.6);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#FFFFFF").s().p("AgEAzIAAg6IgJAAIAAgOIAZAAIAABIgAgCghQgDgDAAgEQAAgEADgDQACgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgCgDg");
	this.shape_661.setTransform(92,-141.9);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#FFFFFF").s().p("AgMAlIAAhVIARgEIAABRQAAAOAIADQgEAHgJAAQgMAAAAgQg");
	this.shape_662.setTransform(88.5,-142);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#FFFFFF").s().p("AAQAjQgDgCgBgEQgCAEgGACQgFADgGAAQgMAAgHgGQgGgGAAgLQAAgNAJgFQAKgIAQAAIAHABQAAgNgPAAQgKAAgGADIgEgNQAJgEAMAAQAQAAAIAHQAIAIAAAVIAAAPQAAAPAFADQgCAEgCABIgGABQgEAAgDgDgAgPAOQAAALALgBQAPAAAAgPIAAgHIgHgBQgTAAAAANg");
	this.shape_663.setTransform(82.4,-140.5);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#FFFFFF").s().p("AgZAcQgKgKAAgSQAAgQALgLQALgKAOAAQAPAAAKAJQAKAKAAAPIgCAIIgzAAQABAJAFAEQAGAGAIgBQAMABAGgHIAGAOQgJAHgSAAQgPAAgKgKgAATgGQgCgRgQAAQgOAAgDARIAjAAIAAAAg");
	this.shape_664.setTransform(74.6,-140.5);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#FFFFFF").s().p("AAPA0IAAgtQAAgHgEgDQgFgEgGAAQgDAAgFACQgEADgCACIAAA0IgRAAIAAhjIARgEIAAAkQAHgGALAAQANAAAHAHQAJAIAAANIAAAtg");
	this.shape_665.setTransform(66.5,-142.1);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_666.setTransform(53.6,-141.9);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_667.setTransform(46.2,-140.6);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAAMANgBQAJABAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_668.setTransform(38.7,-140.5);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#FFFFFF").s().p("AghAzIAAhkIARAAIAAAEQAHgFAJAAQAiAAAAAmQAAARgKAJQgJALgQgBQgIAAgHgDIAAAegAgQgfIAAAlQAFAEAGAAQALAAAFgFQAFgGAAgLQAAgNgFgGQgFgFgLAAQgGAAgFAFg");
	this.shape_669.setTransform(26.4,-139.1);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#FFFFFF").s().p("AAiAlIAAgtQAAgOgNAAQgEAAgEACQgDACgCADIAAA0IgPAAIAAgvQgBgGgDgDQgDgDgGAAQgEAAgDACQgEADgBADIAAAzIgSAAIAAhIIAMAAIAEAGQAGgHAMAAQAOAAAHAIQADgEAGgCQAFgCAGAAQANAAAGAHQAHAHAAAMIAAAvg");
	this.shape_670.setTransform(16.2,-140.6);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#FFFFFF").s().p("AAQAjQgDgCgBgEQgCAEgGACQgFADgGAAQgMAAgHgGQgGgGAAgLQAAgNAJgFQAKgIAQAAIAHABQAAgNgPAAQgKAAgGADIgEgNQAJgEAMAAQAQAAAIAHQAIAIAAAVIAAAPQAAAPAFADQgCAEgCABIgGABQgEAAgDgDgAgPAOQAAALALgBQAPAAAAgPIAAgHIgHgBQgTAAAAANg");
	this.shape_671.setTransform(6.5,-140.5);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#FFFFFF").s().p("AgJAqQgFgHgBgLIAAgkIgIAAIAAgOIAIAAIAAgOIAQgHIAAAVIAUAAIAAAOIgUAAIAAAfQABAIACADQADADAFAAQAHAAAFgDIAAAQQgGACgLAAQgKAAgGgGg");
	this.shape_672.setTransform(0,-141.5);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#FFFFFF").s().p("AgNAkIgMgEIAHgOQAHAGAKAAQAJAAAAgHQAAgEgDgCQgDgDgIgEQgTgHAAgOQAAgKAHgEQAIgGAKAAQALAAAKAFIgEANQgGgEgKAAQgIAAAAAGQAAAEADABQADADAIAEQAKADAEAFQAFAGAAAHQAAAKgIAGQgIAGgLAAQgIAAgEgCg");
	this.shape_673.setTransform(-5.8,-140.5);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#FFFFFF").s().p("AgZAcQgKgKAAgSQAAgQALgLQALgKAOAAQAPAAAKAJQAKAKAAAPIgCAIIgzAAQABAJAFAEQAGAGAIgBQAMABAGgHIAGAOQgJAHgSAAQgPAAgKgKgAATgGQgCgRgQAAQgOAAgDARIAjAAIAAAAg");
	this.shape_674.setTransform(-17.4,-140.5);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#FFFFFF").s().p("AAPAlIAAgpQAAgJgDgFQgEgEgIAAQgDAAgEACQgFACgCADIAAA0IgRAAIAAhIIAMAAIADAHQAHgIANAAQANAAAIAIQAHAHAAAOIAAAsg");
	this.shape_675.setTransform(-25.6,-140.6);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#FFFFFF").s().p("AgZAbQgJgKAAgRQAAgQAJgLQAKgKAPAAQARAAAJAKQAJAKAAARQAAARgJAKQgKALgQAAQgQAAgJgLgAgMgRQgFAHAAAKQAAAYARAAQAIAAAFgHQAEgFAAgMQAAgXgRAAQgHAAgFAGg");
	this.shape_676.setTransform(-33.6,-140.5);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#FFFFFF").s().p("AgMAlIAAhVIARgEIAABRQAAAOAIADQgEAHgJAAQgMAAAAgQg");
	this.shape_677.setTransform(-39.2,-142);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#FFFFFF").s().p("AgUAcQgKgKAAgSQAAgQAKgLQALgKASAAQAMAAAKAHIgHANQgGgGgLAAQgIAAgGAGQgGAHAAAKQAAAXAVAAQAKABAHgHIAGAOQgHAFgGAAQgFACgIAAQgQAAgJgKg");
	this.shape_678.setTransform(-45.3,-140.5);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAGQgHAGgLAAQgMAAgKgGg");
	this.shape_679.setTransform(-56.3,-140.5);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAAMANgBQAJABAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_680.setTransform(-62.8,-140.5);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhmIANAAIAAAmQADgDAFgEQAGgCAFAAQAMAAAHAHQAGAIAAAMIAAAug");
	this.shape_681.setTransform(-74.9,-142);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHADADACIgHAJIgHgDQgFgCgFAAQgJAAgGAHQgHAHAAAMQAAAOAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_682.setTransform(-82.2,-140.5);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_683.setTransform(-89.4,-140.4);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAGQgHAGgLAAQgMAAgKgGg");
	this.shape_684.setTransform(-96.1,-140.5);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAGQgHAGgLAAQgMAAgKgGg");
	this.shape_685.setTransform(-106.4,-140.5);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGAEADQADADAGAAIAAAMQgYAAAAgWg");
	this.shape_686.setTransform(-111,-141.9);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgJALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJABAGgIQAEgHAAgNQABgbgUAAQgIAAgFAIg");
	this.shape_687.setTransform(-117,-140.5);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgIALgQAAQgOAAgJgLgAgNgTQgGAHAAAMQABAbASAAQAJABAFgIQAGgHAAgNQAAgbgUAAQgIAAgFAIg");
	this.shape_688.setTransform(-124.5,-140.5);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAKACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_689.setTransform(-131,-141.4);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAHIAoAAIAAAAg");
	this.shape_690.setTransform(-142.3,-140.5);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGAEADQADADAGAAIAAAMQgYAAAAgWg");
	this.shape_691.setTransform(-147.9,-141.9);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgDgDAAgEQAAgDADgCQABgCADgBQAEABADACQABACAAADQAAAEgBADQgDABgEAAQgDAAgBgBg");
	this.shape_692.setTransform(-152.3,-141.9);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAKACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_693.setTransform(-156.8,-141.4);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAAMANgBQAJABAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_694.setTransform(-163.4,-140.5);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAGQgHAGgLAAQgMAAgKgGg");
	this.shape_695.setTransform(-169.9,-140.5);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgFgDgEAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_696.setTransform(-174.8,-140.6);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAHIAoAAIAAAAg");
	this.shape_697.setTransform(-181.9,-140.5);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#FFFFFF").s().p("AgCAzIglhlIAPAAIAZBJIAYhJIAPAAIgkBlg");
	this.shape_698.setTransform(-188.9,-141.8);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_699.setTransform(-200.3,-137.7);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAHIAoAAIAAAAg");
	this.shape_700.setTransform(-206.5,-140.5);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#FFFFFF").s().p("AgBAlIgfhJIAOAAIASAyIAUgyIANAAIggBJg");
	this.shape_701.setTransform(-213.8,-140.4);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgJAAIAAgLIAVAAIAABIgAAAgjQgDgDABgEQgBgDADgCQACgCADgBQADABACACQADACAAADQAAAEgDADQgCABgDAAQgDAAgCgBg");
	this.shape_702.setTransform(-219.3,-141.9);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAKACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_703.setTransform(-223.8,-141.4);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgDgDAAgEQAAgDADgCQABgCADgBQAEABADACQABACAAADQAAAEgBADQgDABgEAAQgDAAgBgBg");
	this.shape_704.setTransform(-228.8,-141.9);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_705.setTransform(-234.4,-140.4);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAKACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_706.setTransform(-240.9,-141.4);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_707.setTransform(-247.6,-140.6);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgJAAIAAgLIAVAAIAABIgAAAgjQgDgDABgEQgBgDADgCQACgCADgBQADABACACQADACAAADQAAAEgDADQgCABgDAAQgDAAgCgBg");
	this.shape_708.setTransform(-253.5,-141.9);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_709.setTransform(-264.1,-141.9);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_710.setTransform(-271.5,-140.6);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAAMANgBQAJABAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_711.setTransform(-279,-140.5);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAHIAoAAIAAAAg");
	this.shape_712.setTransform(-291.1,-140.5);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGAEADQADADAGAAIAAAMQgYAAAAgWg");
	this.shape_713.setTransform(-296.7,-141.9);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgIALABQAOAAAKAJQAIAKAAATQAAAPgIALQgJAKgQAAQgEAAgGgBQgFgCgCgCIAAAggAgLgmQgFACgCADIAAApIAGAEIAHACQAXgBAAgaQAAgOgFgGQgGgGgMAAIgGABg");
	this.shape_714.setTransform(-302.7,-139.1);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgFAAgEADQgEACgBAEIAAA1IgNAAIAAgzQAAgFgEgDQgDgDgHAAQgEAAgEADQgFADgCADIAAA1IgNAAIAAhIIAJAAIAEAJQAHgKAMAAQAQAAAFAJQACgEAGgDQAGgCAGAAQALAAAHAGQAGAHAAAMIAAAwg");
	this.shape_715.setTransform(-312.6,-140.6);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgLAAIAAgLIAWAAIAABIgAAAgjQgDgDAAgEQAAgDADgCQABgCADgBQAEABACACQACACAAADQAAAEgCADQgCABgEAAQgDAAgBgBg");
	this.shape_716.setTransform(-320.5,-141.9);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAGQgHAGgLAAQgMAAgKgGg");
	this.shape_717.setTransform(-325.2,-140.5);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgFQgJgDgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAEQAIAEAEAEQAEAFAAAIQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_718.setTransform(215,-158.7);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgFQgJgDgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAEQAIAEAEAEQAEAFAAAIQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_719.setTransform(209.4,-158.7);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_720.setTransform(202.8,-158.7);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgKQAKgLARAAQAFAAAHADQAHABADADIgHAJIgHgDIgKgCQgJAAgGAHQgHAIAAAMQAAANAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_721.setTransform(195.5,-158.7);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgIAKgQAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAFgIQAGgHAAgNQAAgagUAAQgIgBgFAIg");
	this.shape_722.setTransform(188.3,-158.7);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgFANQgEgDgFAAQgHAAgEAGQgFAGgBAJIAAApg");
	this.shape_723.setTransform(182.4,-158.8);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgHALAAQAOAAAJAJQAJAKAAASQAAAQgJALQgJAKgPAAQgFAAgFgCQgGgBgBgCIAAAggAgMgmQgDACgDADIAAApIAFAEIAIABQAYABAAgbQgBgOgFgGQgGgGgMgBIgHACg");
	this.shape_724.setTransform(175.5,-157.4);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#FFFFFF").s().p("AgQAzQgHgDgFgDIAHgLQALAIAKAAQAIAAAFgDQAFgDAAgFQAAgJgNAAIgHACIgJABQgQAAAAgMQAAgEAEgDQAEgDAFgBQgPgGAAgSQAAgMAIgHQAIgIALAAQAKAAAGAFIAHgIIAIAIIgHAGQAFAGAAALQAAALgHAHQgHAHgLABIgKABIgFABQgBABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAADAHAAIAJgBIAJgCQAKAAAGAGQAGAFAAAJQAAAKgJAGQgJAGgNAAQgHAAgIgCgAgMgiQgEAFAAAHQAAAIAEAFQAEAFAHAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgEgGAAQgGAAgFAEg");
	this.shape_725.setTransform(161,-157.6);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#FFFFFF").s().p("AAQAlIAAgpQAAgMgDgFQgEgEgIAAQgEAAgFACQgEADgDAEIAAA1IgNAAIAAhIIAJAAIAEAJQAGgKAOAAQAYAAAAAdIAAAsg");
	this.shape_726.setTransform(153.7,-158.8);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCgBgEQABgDACgCQABgDADAAQAEAAADADQABACAAADQAAAEgBACQgDACgEAAQgDAAgBgCg");
	this.shape_727.setTransform(147.7,-160.1);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgIgEgFQgEgEgHAAQgEAAgFADQgFADgCADIAAA2IgNAAIAAhnIANAAIAAAmQADgEAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_728.setTransform(142.1,-160.2);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgKQAKgLARAAQAFAAAHADQAHABADADIgHAJIgHgDIgKgCQgJAAgGAHQgHAIAAAMQAAANAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_729.setTransform(134.9,-158.7);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_730.setTransform(127.6,-158.7);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJAAAGgIQAEgHABgNQgBgagTAAQgIgBgFAIg");
	this.shape_731.setTransform(120.1,-158.7);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_732.setTransform(113.6,-159.7);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_733.setTransform(107,-158.7);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgFgDgEAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_734.setTransform(101,-158.8);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_735.setTransform(87,-158.7);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgIgEgFQgEgEgHAAQgEAAgFADQgFADgCADIAAA2IgNAAIAAhnIANAAIAAAmQADgEAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_736.setTransform(79.4,-160.2);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_737.setTransform(72.9,-159.7);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_738.setTransform(59.3,-158.7);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#FFFFFF").s().p("AARA0IgWglIgMAMIAAAZIgNAAIAAhnIANAAIAAA/IAbggIAQAAIgYAaIAdAug");
	this.shape_739.setTransform(52.4,-160.2);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#FFFFFF").s().p("AAUAkQgEgDgCgFQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOgBQAEABAGACQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_740.setTransform(44.8,-158.7);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgFAAgEADQgEACgCAEIAAA1IgMAAIAAgzQAAgFgDgDQgFgDgGAAQgEAAgFADQgEADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAHgKAMAAQAPAAAGAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_741.setTransform(35.3,-158.8);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_742.setTransform(19.9,-159.7);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#FFFFFF").s().p("AAUAkQgEgDgCgFQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOgBQAEABAGACQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_743.setTransform(13.3,-158.7);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgIgEgFQgEgEgHAAQgEAAgFADQgFADgCADIAAA2IgNAAIAAhnIANAAIAAAmQADgEAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_744.setTransform(5.9,-160.2);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_745.setTransform(-0.6,-159.7);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgFQgJgDgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAEQAIAEAEAEQAEAFAAAIQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_746.setTransform(-13.3,-158.7);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAAAgWg");
	this.shape_747.setTransform(-17.9,-160.2);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJAAAFgIQAFgHABgNQgBgagTAAQgIgBgFAIg");
	this.shape_748.setTransform(-23.9,-158.7);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgPAAgJgKgAgNgTQgFAHAAAMQgBAcATAAQAJAAAGgIQAEgHAAgNQAAgagTAAQgIgBgFAIg");
	this.shape_749.setTransform(-31.4,-158.7);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_750.setTransform(-37.9,-159.7);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#FFFFFF").s().p("AgNA0IAAg+IgKAAIAAgKIAKAAQABgOAGgJQAHgHALgBQAGAAAGACIgEAKIgHgCQgGAAgEAFQgDAFAAAGIAAAFIAPAAIAAAKIgPAAIAAA+g");
	this.shape_751.setTransform(-50,-160.2);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgIAKgQAAQgOAAgJgKgAgNgTQgGAHAAAMQABAcASAAQAJAAAFgIQAGgHAAgNQAAgagUAAQgIgBgFAIg");
	this.shape_752.setTransform(-56.6,-158.7);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_753.setTransform(-71.4,-160.2);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#FFFFFF").s().p("AAUAkQgEgDgCgFQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOgBQAEABAGACQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_754.setTransform(-78.7,-158.7);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgCgCAAgEQAAgDACgCQACgDADAAQADAAACADQACACAAADQAAAEgCACQgCACgDAAQgDAAgCgCg");
	this.shape_755.setTransform(-84.5,-160.1);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgDgDgFAAQgHAAgEAGQgFAGgBAJIAAApg");
	this.shape_756.setTransform(-88.5,-158.8);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAFgEAAgGQAAgGgBgGIgGgOIgUgyIANAAIAVA4IATg4IANAAIgfBVQgCAHgHAEQgIAFgKAAg");
	this.shape_757.setTransform(-95.2,-157.3);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgFAAgEADQgEACgBAEIAAA1IgNAAIAAgzQAAgFgDgDQgFgDgGAAQgEAAgEADQgFADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAIgKALAAQAQAAAFAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_758.setTransform(-104.4,-158.8);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#FFFFFF").s().p("AAUAkQgEgDgCgFQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOgBQAEABAGACQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_759.setTransform(-120.9,-158.7);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgIgEgFQgEgEgHAAQgEAAgFADQgFADgCADIAAA2IgNAAIAAhnIANAAIAAAmQADgEAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_760.setTransform(-135.3,-160.2);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_761.setTransform(-141.8,-159.7);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCgBgEQABgDACgCQACgDADAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_762.setTransform(-146.8,-160.1);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#FFFFFF").s().p("AAVAlIgVgwIgVAwIgDAAIgahKIAOAAIAPAvIAUgvIADAAIATAvIASgvIAMAAIgaBKg");
	this.shape_763.setTransform(-153.8,-158.7);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgFQgJgDgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAEQAIAEAEAEQAEAFAAAIQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_764.setTransform(-168.8,-158.7);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgFgDgEAAQgHAAgEAGQgFAGAAAJIAAApg");
	this.shape_765.setTransform(-173.7,-158.8);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_766.setTransform(-180.8,-158.7);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgFQgJgDgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAEQAIAEAEAEQAEAFAAAIQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_767.setTransform(-187.4,-158.7);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_768.setTransform(-194,-158.7);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgFQgJgDgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAEQAIAEAEAEQAEAFAAAIQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_769.setTransform(-207.6,-158.7);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgRQAAgSALgLQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_770.setTransform(-214.2,-158.7);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#FFFFFF").s().p("AgWAqQgJgKAAgQQAAgQAKgLQAKgMANAAQALAAAGAGIAAgiIANAAIAABmIgNAAIAAgGQgHAHgMAAQgOAAgIgKgAgKgEQgHAHAAAMQAAAaAXAAQADAAAEgCQAFgCABgCIAAgoQgFgHgJAAQgJAAgGAIg");
	this.shape_771.setTransform(-222.1,-160.2);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgDgCAAgEQAAgDADgCQABgDADAAQAEAAADADQABACAAADQAAAEgBACQgDACgEAAQgDAAgBgCg");
	this.shape_772.setTransform(-227.9,-160.1);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#FFFFFF").s().p("AgBAlIgfhKIAOAAIASAzIAUgzIANAAIggBKg");
	this.shape_773.setTransform(-233.2,-158.7);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgJAKgQAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAGgIQAEgHAAgNQABgagUAAQgIgBgFAIg");
	this.shape_774.setTransform(-240.3,-158.7);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgEgDgEAAQgHAAgEAGQgGAGAAAJIAAApg");
	this.shape_775.setTransform(-246.2,-158.8);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgHAKAAQAPAAAIAJQAJAKAAASQAAAQgJALQgIAKgQAAQgFAAgFgCQgGgBgBgCIAAAggAgMgmQgEACgCADIAAApIAFAEIAIABQAXABABgbQAAgOgHgGQgFgGgMgBIgHACg");
	this.shape_776.setTransform(-253.1,-157.4);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgHALAAQAOAAAJAJQAJAKAAASQAAAQgJALQgJAKgPAAQgFAAgFgCQgGgBgBgCIAAAggAgMgmQgDACgDADIAAApIAGAEIAHABQAXABAAgbQAAgOgFgGQgGgGgMgBIgHACg");
	this.shape_777.setTransform(-267.8,-157.4);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgOAAgKgKgAgNgTQgFAHgBAMQAAAcATAAQAJAAAGgIQAEgHAAgNQAAgagTAAQgIgBgFAIg");
	this.shape_778.setTransform(-275.7,-158.7);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgIgEgFQgEgEgHAAQgEAAgFADQgFADgCADIAAA2IgNAAIAAhnIANAAIAAAmQADgEAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_779.setTransform(-283.2,-160.2);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgFQgJgDgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAEQAIAEAEAEQAEAFAAAIQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_780.setTransform(-289.9,-158.7);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgIAKgQAAQgOAAgJgKgAgNgTQgGAHAAAMQABAcASAAQAJAAAFgIQAGgHAAgNQAAgagUAAQgIgBgFAIg");
	this.shape_781.setTransform(-296.4,-158.7);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_782.setTransform(-302.9,-159.7);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgIAKgQAAQgOAAgJgKgAgNgTQgGAHAAAMQABAcASAAQAJAAAFgIQAGgHAAgNQAAgagUAAQgIgBgFAIg");
	this.shape_783.setTransform(-309.5,-158.7);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgIgEgFQgEgEgHAAQgEAAgFADQgFADgCADIAAA2IgNAAIAAhnIANAAIAAAmQADgEAFgCQAGgDAFAAQAMAAAHAHQAGAIAAANIAAAug");
	this.shape_784.setTransform(-317,-160.2);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#FFFFFF").s().p("AgeAzIAAhjIATgCQAqAAAAAeQAAAhgmgBIgKAAIAAAngAgRgkIAAAkIAJAAQAZAAAAgSQAAgTgaAAg");
	this.shape_785.setTransform(-323.8,-160.1);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#FFFFFF").s().p("AAVAlIgVgwIgUAwIgEAAIgahKIAOAAIAQAvIATgvIACAAIAUAvIARgvIANAAIgaBKg");
	this.shape_786.setTransform(-52.7,78.6);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#FFFFFF").s().p("AgNA0IAAg+IgKAAIAAgKIAKAAQABgOAGgJQAHgHALgBQAGAAAGADIgEAJIgHgCQgGAAgEAFQgDAFAAAGIAAAFIAPAAIAAAKIgPAAIAAA+g");
	this.shape_787.setTransform(-64.4,77);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgJAAIAAgKIAVAAIAABIgAAAgkQgDgCABgEQgBgCADgDQACgCADAAQADAAACACQADADAAACQAAAEgDACQgCACgDAAQgDAAgCgCg");
	this.shape_788.setTransform(-135.6,77.1);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgEgDgFAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_789.setTransform(-143.7,78.4);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgLAAIAAgKIAWAAIAABIgAAAgkQgDgCAAgEQAAgCADgDQABgCADAAQAEAAACACQACADAAACQAAAEgCACQgCACgEAAQgDAAgBgCg");
	this.shape_790.setTransform(-182.8,77.1);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgEgDgFAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_791.setTransform(-193.6,78.4);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgHALgBQAOAAAJAKQAJAKAAASQAAAQgJALQgJALgPgBQgFAAgFgCQgGgBgBgCIAAAggAgMgmQgDACgDADIAAApIAFAEIAIABQAYABAAgbQgBgOgFgGQgGgGgMgBIgHACg");
	this.shape_792.setTransform(-226.8,79.9);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#FFFFFF").s().p("AgMA0IAAg+IgLAAIAAgKIALAAQgBgOAIgJQAFgHAMgBQAGAAAGADIgDAJIgIgCQgGAAgEAFQgDAFAAAGIAAAFIAOAAIAAAKIgOAAIAAA+g");
	this.shape_793.setTransform(-250.3,77);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgJAKgQAAQgPAAgJgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAGgIQAEgHAAgNQABgagUAAQgIgBgFAIg");
	this.shape_794.setTransform(-272.3,78.5);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgGQgJgEgDgBIgGgFIgDgGIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAEQAIAEAEAEQAEAGAAAHQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_795.setTransform(-286.5,78.5);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgHALgBQAOAAAJAKQAJAKAAASQAAAQgJALQgJALgPgBQgFAAgFgCQgGgBgBgCIAAAggAgMgmQgDACgDADIAAApIAFAEIAIABQAYABAAgbQgBgOgFgGQgGgGgMgBIgHACg");
	this.shape_796.setTransform(-292.9,79.9);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#FFFFFF").s().p("AgbAuIAFgNIAKAFQAFACAFAAQAHAAAFgFQAEgEAAgHQAAgFgCgEQgDgFgKgFIgIgDQgKgEgEgHQgEgGAAgKQAAgLAIgHQAIgIALAAQARAAAGAGIgEAMIgIgEIgLgCQgGAAgEAEQgEAEAAAGIACAHIAEAFQACADAHADIAJAEQAKAEAEAHQAEAHAAAKQAAALgJAIQgJAIgOAAQgOAAgJgGg");
	this.shape_797.setTransform(-315.3,77.1);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#FFFFFF").s().p("AgNAGIAAgLIAbAAIAAALg");
	this.shape_798.setTransform(-325.4,78.1);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOABQAEgBAGACQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_799.setTransform(47.7,42);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgCgDAAgDQAAgDACgDQACgCADgBQADABADACQACADAAADQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_800.setTransform(5.8,40.6);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAHgIALAAQAOAAAKAKQAIAKAAATQAAAPgIALQgKALgPAAQgFAAgFgCQgFgCgCgCIAAAhgAgLglQgEABgDACIAAAqIAGAEIAHACQAXAAAAgbQAAgOgFgGQgGgHgMABIgGACg");
	this.shape_801.setTransform(-19.5,43.4);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgDgDAAgDQAAgDADgDQABgCADgBQAEABADACQABADAAADQAAADgBADQgDACgEAAQgDAAgBgCg");
	this.shape_802.setTransform(-41.2,40.6);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOABQAEgBAGACQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_803.setTransform(-82.7,42);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgDgDAAgDQAAgDADgDQABgCADgBQAEABADACQABADAAADQAAADgBADQgDACgEAAQgDAAgBgCg");
	this.shape_804.setTransform(-100.1,40.6);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOABQAEgBAGACQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_805.setTransform(-117.4,42);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAFAHAAQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_806.setTransform(-159.4,41.1);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_807.setTransform(-171.7,42);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgIALgQAAQgOAAgJgLgAgNgTQgGAHAAAMQABAbASAAQAJAAAFgHQAGgIAAgMQAAgbgUAAQgIABgFAHg");
	this.shape_808.setTransform(-194.3,42);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#FFFFFF").s().p("AgMAzIAAg9IgLAAIAAgLIALAAQgBgOAIgHQAFgJAMABQAGAAAGABIgDAKIgIgBQgGAAgEAEQgDAEAAAIIAAADIAOAAIAAALIgOAAIAAA9g");
	this.shape_809.setTransform(-200.3,40.5);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgIALgQAAQgPAAgIgLgAgNgTQgGAHAAAMQABAbASAAQAJAAAFgHQAFgIABgMQgBgbgTAAQgIABgFAHg");
	this.shape_810.setTransform(-222.7,42);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAFAHAAQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_811.setTransform(-229.2,41.1);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#FFFFFF").s().p("AgfAyIAAhjIAagBQAOABAIAGQAIAGAAAMQAAAHgFAGQgFAFgGACQAMADAFAGQAGAGAAAMQAAANgKAHQgKAJgOgBgAgRAnIAKAAQAMAAAGgEQAGgFAAgKQAAgLgFgEQgGgFgMABIgLAAgAgRgmIAAAdIAKABQATAAAAgQQAAgOgRAAg");
	this.shape_812.setTransform(-266.2,40.6);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgKALgPAAQgPAAgJgLgAgNgTQgFAHAAAMQgBAbATAAQAJAAAGgHQAEgIAAgMQAAgbgTAAQgIABgFAHg");
	this.shape_813.setTransform(-290.6,42);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAFAHAAQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_814.setTransform(-297.1,41.1);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAHAIAEIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_815.setTransform(-302.8,42);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgjQgCgDAAgDQAAgDACgDQACgCADgBQADABACACQACADAAADQAAADgCADQgCACgDAAQgDAAgCgCg");
	this.shape_816.setTransform(-307.7,40.6);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#FFFFFF").s().p("AAWAyIAAgxIgrAAIAAAxIgNAAIAAhjIANAAIAAAoIArAAIAAgoIANAAIAABjg");
	this.shape_817.setTransform(-314.1,40.7);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#FFFFFF").s().p("AgNAGIAAgLIAbAAIAAALg");
	this.shape_818.setTransform(-325.4,41.6);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#FFFFFF").s().p("AgRA1QANAAAEgEQAFgEAAgJIAAg9IgNAAIAAgLIAaAAIAABIQAAAPgJAHQgIAHgSAAgAAEgyQgCgCAAgEQAAgDACgCQADgDADAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgDAAgDgCg");
	this.shape_819.setTransform(26.1,5.5);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgCgDIgGAHIgGAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAJALQAKAKAAAPQAAASgKALQgJAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACACAAQANAAAFgGQAGgHAAgPQAAgMgHgGQgGgHgLAAIgGACg");
	this.shape_820.setTransform(20.6,4.1);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgDgCABgEQgBgDADgCQABgDAEAAQADAAACADQACACABADQgBAEgCACQgCACgDAAQgEAAgBgCg");
	this.shape_821.setTransform(-12,4.1);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgEgDgFAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_822.setTransform(-49.6,5.4);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgCgCAAgEQAAgDACgCQACgDACAAQAEAAACADQACACAAADQAAAEgCACQgCACgEAAQgCAAgCgCg");
	this.shape_823.setTransform(-90.9,4.1);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAFgIQAGgHgBgNQABgagUAAQgIgBgFAIg");
	this.shape_824.setTransform(-145,5.5);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#FFFFFF").s().p("AgNA0IAAg+IgKAAIAAgKIAKAAQAAgOAIgJQAGgHALgBQAFAAAHACIgDAKIgIgCQgGAAgEAFQgDAFAAAGIAAAFIAOAAIAAAKIgOAAIAAA+g");
	this.shape_825.setTransform(-151.1,4);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgEgDgFAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_826.setTransform(-235.5,5.4);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#FFFFFF").s().p("AgNAGIAAgLIAbAAIAAALg");
	this.shape_827.setTransform(-266.4,5.1);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAFgIQAGgHgBgNQABgagUAAQgIgBgFAIg");
	this.shape_828.setTransform(-306.6,5.5);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#FFFFFF").s().p("AgZAmQgLgOAAgYQAAgVAMgPQAMgPATAAQAQAAAJAGIgFALQgGgEgOAAQgMAAgIALQgIALAAARQAAARAIALQAIALAMAAQAOAAAIgKIAHAKQgMAMgSAAQgTAAgMgOg");
	this.shape_829.setTransform(-314.5,4.1);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#FFFFFF").s().p("AgNAGIAAgLIAbAAIAAALg");
	this.shape_830.setTransform(-325.4,5.1);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgkQgCgCgBgDQABgDACgDQABgDADABQAEgBADADQABADAAADQAAADgBACQgDADgEAAQgDAAgBgDg");
	this.shape_831.setTransform(-18.3,-32.4);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#FFFFFF").s().p("AgNAzIAAg9IgKAAIAAgLIAKAAQAAgOAIgHQAGgIALAAQAFAAAHACIgDAJIgIgBQgGgBgEAFQgDAEAAAIIAAADIAOAAIAAALIgOAAIAAA9g");
	this.shape_832.setTransform(-45.8,-32.5);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgkQgDgCAAgDQAAgDADgDQABgDADABQAEgBADADQABADAAADQAAADgBACQgDADgEAAQgDAAgBgDg");
	this.shape_833.setTransform(-107.3,-32.4);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgEgDgFAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_834.setTransform(-111.3,-31.1);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgLAAIAAgLIAWAAIAABIgAAAgkQgDgCAAgDQAAgDADgDQABgDADABQAEgBACADQACADAAADQAAADgCACQgCADgEAAQgDAAgBgDg");
	this.shape_835.setTransform(-116.7,-32.4);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgJALgPAAQgPAAgIgLgAgNgTQgFAHgBAMQAAAbATAAQAJAAAGgHQAEgIAAgMQAAgbgTAAQgIABgFAHg");
	this.shape_836.setTransform(-159.9,-31);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#FFFFFF").s().p("AgMAzIAAg9IgLAAIAAgLIALAAQAAgOAGgHQAHgIALAAQAFAAAHACIgEAJIgHgBQgGgBgEAFQgDAEAAAIIAAADIAPAAIAAALIgPAAIAAA9g");
	this.shape_837.setTransform(-166,-32.5);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgIALgQAAQgPAAgIgLgAgNgTQgGAHAAAMQABAbASAAQAJAAAFgHQAFgIABgMQgBgbgTAAQgIABgFAHg");
	this.shape_838.setTransform(-180.9,-31);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgKALgPAAQgOAAgKgLgAgNgTQgFAHgBAMQAAAbATAAQAJAAAGgHQAEgIAAgMQAAgbgTAAQgIABgFAHg");
	this.shape_839.setTransform(-188.4,-31);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#FFFFFF").s().p("AgfAyIAAhjIAaAAQAOAAAIAGQAIAGAAAMQAAAHgFAGQgFAFgGACQAMADAFAGQAGAGAAAMQAAANgKAHQgKAJgOgBgAgRAnIAKABQAMgBAGgEQAGgFAAgKQAAgLgFgEQgGgFgMABIgLAAgAgRgmIAAAdIAKAAQATAAAAgPQAAgOgRAAg");
	this.shape_840.setTransform(-231.8,-32.4);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgkQgCgCAAgDQAAgDACgDQACgDACABQAEgBACADQACADAAADQAAADgCACQgCADgEAAQgCAAgCgDg");
	this.shape_841.setTransform(-257,-32.4);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#FFFFFF").s().p("AAVAyIAAgxIgqAAIAAAxIgNAAIAAhjIANAAIAAAoIAqAAIAAgoIAPAAIAABjg");
	this.shape_842.setTransform(-282.4,-32.3);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgIALgQAAQgOAAgJgLgAgNgTQgGAHAAAMQABAbASAAQAJAAAFgHQAGgIAAgMQAAgbgUAAQgIABgFAHg");
	this.shape_843.setTransform(-300.5,-31);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAHgIALAAQAOAAAJAKQAJAKAAATQAAAPgJALQgJALgPAAQgFAAgFgCQgGgCgBgCIAAAhgAgMglQgDABgDACIAAAqIAGAEIAHACQAXAAAAgbQAAgOgFgGQgGgHgMABIgHACg");
	this.shape_844.setTransform(-307.9,-29.6);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#FFFFFF").s().p("AgbAuIAFgNIAKAFQAFACAFAAQAHAAAFgFQAEgEAAgHQAAgFgCgEQgDgFgKgFIgIgDQgKgEgEgHQgEgGAAgKQAAgLAIgHQAIgIALAAQARAAAGAGIgEAMIgIgEIgLgCQgGAAgEAEQgEAEAAAGIACAHIAEAFQACADAHADIAJAEQAKAEAEAHQAEAHAAAKQAAALgJAIQgJAIgOAAQgOAAgJgGg");
	this.shape_845.setTransform(-315.3,-32.4);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#FFFFFF").s().p("AgNAGIAAgLIAbAAIAAALg");
	this.shape_846.setTransform(-325.4,-31.4);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgHALAAQAOAAAJAJQAJAKAAASQAAAQgJALQgJAKgPAAQgFAAgFgCQgGgBgBgCIAAAggAgMgmQgDACgDADIAAApIAGAEIAHABQAXAAAAgaQAAgOgFgGQgGgGgMgBIgHACg");
	this.shape_847.setTransform(109.3,-66.1);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#FFFFFF").s().p("AgMA0IAAg+IgLAAIAAgLIALAAQAAgNAGgJQAHgIALAAQAFAAAHACIgEAKIgHgCQgGABgEAEQgDAFAAAGIAAAEIAPAAIAAALIgPAAIAAA+g");
	this.shape_848.setTransform(79.4,-69);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgLIAXAAIAABJgAAAgjQgCgDgBgEQABgDACgCQABgDADAAQAEAAADADQACACgBADQABAEgCADQgDABgEAAQgDAAgBgBg");
	this.shape_849.setTransform(74.4,-68.9);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgHAKAAQAOAAAKAJQAIAKAAASQAAAQgIALQgKAKgPAAQgEAAgGgCQgGgBgBgCIAAAggAgLgmQgEACgDADIAAApIAFAEIAIABQAYAAgBgaQABgOgHgGQgFgGgMgBIgGACg");
	this.shape_850.setTransform(54.4,-66.1);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#FFFFFF").s().p("AAVAlIgVgwIgVAwIgDAAIgahJIAOAAIAPAuIAUguIADAAIATAuIARguIANAAIgaBJg");
	this.shape_851.setTransform(6.6,-67.4);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgEAAgFADQgEACgBAEIAAA1IgNAAIAAgzQAAgFgDgDQgEgDgHAAQgEAAgEADQgFADgCADIAAA1IgNAAIAAhIIAJAAIAEAJQAHgKAMAAQAQAAAFAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_852.setTransform(-30.5,-67.6);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgLIAXAAIAABJgAAAgjQgDgDAAgEQAAgDADgCQABgDADAAQAEAAADADQABACAAADQAAAEgBADQgDABgEAAQgDAAgBgBg");
	this.shape_853.setTransform(-38.5,-68.9);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#FFFFFF").s().p("AgNA0IAAg+IgKAAIAAgLIAKAAQAAgNAHgJQAHgIALAAQAFAAAHACIgEAKIgHgCQgGABgEAEQgDAFAAAGIAAAEIAOAAIAAALIgOAAIAAA+g");
	this.shape_854.setTransform(-65.9,-69);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAKQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJAAAFgIQAFgHABgNQgBgbgTAAQgIAAgFAIg");
	this.shape_855.setTransform(-72.5,-67.5);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFAAAGgCIABALQgIACgJAAQgIAAgGgGg");
	this.shape_856.setTransform(-83.2,-68.4);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#FFFFFF").s().p("AAUAjQgEgBgCgGQgIAKgPAAQgJAAgGgHQgGgGAAgJQAAgLAJgHQAKgHAOgBQAEAAAGADQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgDgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_857.setTransform(-139.9,-67.5);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgHALAAQAOAAAJAJQAJAKAAASQAAAQgJALQgJAKgPAAQgFAAgFgCQgGgBgBgCIAAAggAgMgmQgDACgDADIAAApIAGAEIAHABQAXAAAAgaQAAgOgFgGQgGgGgMgBIgHACg");
	this.shape_858.setTransform(-151.3,-66.1);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgEgDgFAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_859.setTransform(-174.7,-67.6);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#FFFFFF").s().p("AgNA0IAAg+IgKAAIAAgLIAKAAQABgNAGgJQAHgIALAAQAGAAAGACIgEAKIgHgCQgGABgEAEQgDAFAAAGIAAAEIAOAAIAAALIgOAAIAAA+g");
	this.shape_860.setTransform(-187.8,-69);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFAAAGgCIABALQgIACgJAAQgIAAgGgGg");
	this.shape_861.setTransform(-222.3,-68.4);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgHAKAAQAPAAAIAJQAJAKAAASQAAAQgJALQgIAKgQAAQgEAAgGgCQgGgBgBgCIAAAggAgMgmQgEACgCADIAAApIAFAEIAIABQAYAAAAgaQgBgOgGgGQgFgGgMgBIgHACg");
	this.shape_862.setTransform(-233,-66.1);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#FFFFFF").s().p("AAUAjQgEgBgCgGQgIAKgPAAQgJAAgGgHQgGgGAAgJQAAgLAJgHQAKgHAOgBQAEAAAGADQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgDgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_863.setTransform(-252.4,-67.5);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFAAAGgCIABALQgIACgJAAQgIAAgGgGg");
	this.shape_864.setTransform(-258.7,-68.4);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#FFFFFF").s().p("AgbAuIAFgNIAKAFQAFACAFAAQAHAAAFgFQAEgEAAgHQAAgFgCgEQgDgFgKgFIgIgDQgKgEgEgHQgEgGAAgKQAAgLAIgHQAIgIALAAQARAAAGAGIgEAMIgIgEIgLgCQgGAAgEAEQgEAEAAAGIACAHIAEAFQACADAHADIAJAEQAKAEAEAHQAEAHAAAKQAAALgJAIQgJAIgOAAQgOAAgJgGg");
	this.shape_865.setTransform(-264.9,-68.9);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFAAAGgCIABALQgIACgJAAQgIAAgGgGg");
	this.shape_866.setTransform(-295.8,-68.4);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFAAAGgCIABALQgIACgJAAQgIAAgGgGg");
	this.shape_867.setTransform(-301.3,-68.4);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#FFFFFF").s().p("AAUAjQgEgBgCgGQgIAKgPAAQgJAAgGgHQgGgGAAgJQAAgLAJgHQAKgHAOgBQAEAAAGADQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgDgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_868.setTransform(-307.9,-67.5);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#FFFFFF").s().p("AgeAzIAAhkIASgBQArAAAAAeQAAAhglgBIgKAAIAAAngAgQgkIAAAkIAJAAQAYAAAAgSQAAgTgaAAg");
	this.shape_869.setTransform(-314.5,-68.9);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#FFFFFF").s().p("AgNAGIAAgLIAbAAIAAALg");
	this.shape_870.setTransform(-325.4,-67.9);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAZQAAAKAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_871.setTransform(-78,-104);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAZQAAAKAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_872.setTransform(-98.3,-104);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAIgIAKAAQAOAAAKAKQAIAKAAASQAAAQgIALQgKALgPAAQgEAAgGgDQgGgBgBgCIAAAhgAgLglQgEABgDACIAAAqIAFAEIAIABQAYAAgBgaQABgOgHgGQgFgHgMAAIgGADg");
	this.shape_873.setTransform(-109.8,-102.6);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgKIAVAAIAABHgAAAgkQgDgCABgDQgBgEADgCQABgDAEABQADgBACADQACACABAEQgBADgCACQgCACgDABQgEgBgBgCg");
	this.shape_874.setTransform(-142.5,-105.4);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#FFFFFF").s().p("AAQAzIAAgtQAAgIgEgFQgEgEgHAAQgEAAgFACQgFADgCAEIAAA1IgNAAIAAhlIANAAIAAAmQADgFAFgDQAGgCAFAAQAMAAAHAIQAGAHAAANIAAAtg");
	this.shape_875.setTransform(-148.1,-105.5);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgKQAKgLARAAQAFAAAHACQAHADADACIgHAKQgCgDgFgCIgKgBQgJAAgGAIQgHAGAAAMQAAANAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_876.setTransform(-155.3,-104);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgJALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJAAAGgHQAEgIAAgMQABgagUAAQgIAAgFAHg");
	this.shape_877.setTransform(-170.1,-104);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgJALgPAAQgPAAgIgLgAgNgTQgFAHgBAMQAAAbATAAQAJAAAGgHQAEgIAAgMQAAgagTAAQgIAAgFAHg");
	this.shape_878.setTransform(-192.8,-104);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#FFFFFF").s().p("AgMAzIAAg9IgLAAIAAgKIALAAQAAgOAGgJQAHgHALAAQAFAAAHACIgEAJIgHgBQgGgBgEAFQgDAFAAAGIAAAFIAPAAIAAAKIgPAAIAAA9g");
	this.shape_879.setTransform(-198.8,-105.5);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAABgWg");
	this.shape_880.setTransform(-213.3,-105.4);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgIALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJAAAFgHQAGgIAAgMQAAgagUAAQgIAAgFAHg");
	this.shape_881.setTransform(-219.4,-104);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgJALgPAAQgPAAgIgLgAgNgTQgFAHgBAMQAAAbATAAQAJAAAFgHQAFgIABgMQgBgagTAAQgIAAgFAHg");
	this.shape_882.setTransform(-226.9,-104);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAHgIALAAQAPAAAIAKQAJAKAAASQAAAQgJALQgIALgQAAQgFAAgFgDQgFgBgCgCIAAAhgAgMglQgEABgCACIAAAqIAFAEIAIABQAXAAABgaQAAgOgHgGQgFgHgMAAIgHADg");
	this.shape_883.setTransform(-244,-102.6);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAZQAAAKAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_884.setTransform(-263.4,-104);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#FFFFFF").s().p("AgbAuIAFgNIAKAFQAFACAFAAQAHAAAFgFQAEgEAAgHQAAgFgCgEQgDgFgKgFIgIgDQgKgEgEgHQgEgGAAgKQAAgLAIgHQAIgIALAAQARAAAGAGIgEAMIgIgEIgLgCQgGAAgEAEQgEAEAAAGIACAHIAEAFQACADAHADIAJAEQAKAEAEAHQAEAHAAAKQAAALgJAIQgJAIgOAAQgOAAgJgGg");
	this.shape_885.setTransform(-276,-105.4);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgJALgPAAQgPAAgIgLgAgNgTQgGAHAAAMQAAAbATAAQAJAAAFgHQAFgIABgMQgBgagTAAQgIAAgFAHg");
	this.shape_886.setTransform(-302.5,-104);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#FFFFFF").s().p("AgZAmQgLgOAAgYQAAgVAMgPQAMgPATAAQAQAAAJAGIgFALQgGgEgOAAQgMAAgIALQgIALAAARQAAARAIALQAIALAMAAQAOAAAIgKIAHAKQgMAMgSAAQgTAAgMgOg");
	this.shape_887.setTransform(-314.5,-105.4);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#FFFFFF").s().p("AgNAGIAAgLIAbAAIAAALg");
	this.shape_888.setTransform(-325.4,-104.4);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#FFFFFF").s().p("AgGAjQgDgDAAgFQAAgEADgCQADgEADAAQAEAAADAEQADACAAAEQAAAFgDADQgDADgEAAQgDAAgDgDgAgGgUQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_889.setTransform(-88.1,-140.5);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgJALgPAAQgPAAgIgLgAgNgTQgFAHgBAMQAAAbATAAQAJABAGgIQAEgHAAgNQAAgbgTAAQgIAAgFAIg");
	this.shape_890.setTransform(-186,-140.5);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgJALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJABAGgIQAEgHAAgNQABgbgUAAQgIAAgFAIg");
	this.shape_891.setTransform(-313.2,-140.5);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAFgEAAgGQAAgGgBgGIgGgOIgTgyIAMAAIAVA4IATg4IANAAIgfBVQgCAHgHAEQgIAFgKAAg");
	this.shape_892.setTransform(214.4,-157.3);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgJAAIAAgKIAVAAIAABIgAAAgkQgDgCABgEQgBgDADgCQACgDADAAQADAAACADQADACAAADQAAAEgDACQgCACgDAAQgDAAgCgCg");
	this.shape_893.setTransform(170.4,-160.1);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgEgDgEAAQgHAAgEAGQgGAGAAAJIAAApg");
	this.shape_894.setTransform(166.4,-158.8);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgLAAIAAgKIAXAAIAABIgAAAgkQgDgCAAgEQAAgDADgCQABgDADAAQAEAAADADQABACAAADQAAAEgBACQgDACgEAAQgDAAgBgCg");
	this.shape_895.setTransform(121.4,-160.1);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgDgDIgEAHIgHAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAKALQAJAKAAAPQAAASgJALQgKAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACADAAQALAAAHgGQAFgHAAgPQAAgMgGgGQgHgHgKAAIgHACg");
	this.shape_896.setTransform(62.5,-160.2);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#FFFFFF").s().p("AgLARQALgKAAgGQAAgDgBgCQgGgEAAgFQAAgDADgDQADgCADAAQAEAAADADQACADABAFQgBAJgDAGQgEAIgLAJg");
	this.shape_897.setTransform(47.8,-154.8);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgHAKAAQAOAAAKAJQAIAKAAASQAAAQgIALQgKAKgPAAQgEAAgGgCQgFgBgCgCIAAAggAgLgmQgEACgDADIAAApIAFAEIAIABQAYABgBgbQABgOgHgGQgFgGgMgBIgGACg");
	this.shape_898.setTransform(41.8,-157.4);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgOAAgKgKgAgNgTQgFAHAAAMQgBAcATAAQAJAAAGgIQAEgHAAgNQAAgagTAAQgIgBgFAIg");
	this.shape_899.setTransform(13.2,-158.7);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#FFFFFF").s().p("AgeAzIAAhjIASgCQArAAAAAeQAAAhglgBIgKAAIAAAngAgQgkIAAAkIAJAAQAYAAAAgSQAAgTgaAAg");
	this.shape_900.setTransform(-14.2,-160.1);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgDgDIgEAHIgHAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAKALQAJAKAAAPQAAASgJALQgKAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACADAAQALAAAHgGQAFgHAAgPQAAgMgGgGQgHgHgKAAIgHACg");
	this.shape_901.setTransform(-60.8,-160.2);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgDgCAAgEQAAgDADgCQABgDADAAQAEAAADADQABACAAADQAAAEgBACQgDACgEAAQgDAAgBgCg");
	this.shape_902.setTransform(-78.5,-160.1);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#FFFFFF").s().p("AgBAlIgfhKIAOAAIASAzIAUgzIANAAIggBKg");
	this.shape_903.setTransform(-91.1,-158.7);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgDgCABgEQgBgDADgCQABgDAEAAQADAAACADQACACABADQgBAEgCACQgCACgDAAQgEAAgBgCg");
	this.shape_904.setTransform(-164.5,-160.1);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgFAAgEADQgEACgCAEIAAA1IgLAAIAAgzQgBgFgEgDQgDgDgHAAQgEAAgFADQgEADgCADIAAA1IgNAAIAAhIIAJAAIAEAJQAHgKAMAAQAQAAAFAJQACgEAGgDQAGgCAGAAQALAAAHAGQAGAHAAAMIAAAwg");
	this.shape_905.setTransform(-249.9,-158.8);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgFANQgEgDgFAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_906.setTransform(-273.3,-158.8);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#FFFFFF").s().p("AAUAkQgEgDgCgFQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOgBQAEABAGACQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_907.setTransform(-280.2,-158.7);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#FFFFFF").s().p("AgHAyIAAhXIgfAAIAAgMIBNAAIAAAMIggAAIAABXg");
	this.shape_908.setTransform(-323.9,-160.1);

	this.instance = new lib.ScreenShot20190524at21909PM();
	this.instance.parent = this;
	this.instance.setTransform(-330,-110,0.537,0.537);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#FFFFFF").s().p("AgGAjQgDgDAAgEQAAgFADgCQADgDADAAQAEAAADADQADACAAAFQAAAEgDADQgDADgEAAQgDAAgDgDgAgGgUQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDAEgEAAQgDAAgDgEg");
	this.shape_909.setTransform(-63.5,-158.7);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#FFFFFF").s().p("AATAlIgTgbIgSAbIgPAAIAaglIgYgjIAOAAIARAYIARgYIAPAAIgbAjIAdAlg");
	this.shape_910.setTransform(-107.8,-158.7);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#FFFFFF").s().p("AgcAyIAAhjIANAAIAABXIAsAAIAAAMg");
	this.shape_911.setTransform(-324,-160.1);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_912.setTransform(90.9,134.3);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_913.setTransform(66.9,135.3);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_914.setTransform(49.7,135.3);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_915.setTransform(35.6,134.3);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_916.setTransform(18.3,134.3);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#FFFFFF").s().p("AAVAmIgVgyIgUAyIgEAAIgahKIAOAAIAQAuIATguIACAAIAUAuIARguIANAAIgaBKg");
	this.shape_917.setTransform(6.3,135.3);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_918.setTransform(-14.7,135.3);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#FFFFFF").s().p("AgNAzIAAg9IgKAAIAAgLIAKAAQAAgOAIgHQAFgJAMABQAGAAAGABIgDAKIgIgCQgGABgEAEQgDAEAAAIIAAADIAOAAIAAALIgOAAIAAA9g");
	this.shape_919.setTransform(-24.7,133.8);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgjQgDgDABgEQgBgCADgDQABgCAEgBQADABACACQACADABACQgBAEgCADQgCACgDAAQgEAAgBgCg");
	this.shape_920.setTransform(-35.4,133.9);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_921.setTransform(-39.9,134.3);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_922.setTransform(-63.7,135.3);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgIALgQAAQgPAAgIgLgAgNgTQgGAHAAAMQABAbASAAQAJABAFgIQAFgIABgMQgBgbgTAAQgIAAgFAIg");
	this.shape_923.setTransform(-95.8,135.3);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_924.setTransform(-121.4,134.3);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#FFFFFF").s().p("AgXAyQAFgQAMgaQALgaAKgSIgvAAIAAgNIBBAAIAAAFIgJARIgJAUIgKAUIgHAVIgGAQg");
	this.shape_925.setTransform(-147.2,133.9);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgJALgPAAQgPAAgIgLgAgNgTQgFAHgBAMQAAAbATAAQAJABAFgIQAFgIABgMQgBgbgTAAQgIAAgFAIg");
	this.shape_926.setTransform(-158.9,135.3);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_927.setTransform(-165.4,134.3);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#FFFFFF").s().p("AgSAxQgGgCgEgEIAHgKQAGAHALAAQASAAAAgTQAAgIgGgFQgFgGgIAAIgCAAIAAgKIACAAQAPAAAAgPQAAgQgOAAQgKAAgFAGIgGgJQAGgJAQAAQAMAAAHAHQAJAHAAALQAAAJgEAGQgGAGgGADQAJACAGAGQAEAHAAAJQAAAOgJAIQgIAIgPAAQgHAAgHgDg");
	this.shape_928.setTransform(-176.1,133.9);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAIgIAKABQAPgBAJAKQAIAKAAATQAAAPgIALQgJAKgQABQgEAAgGgCQgFgCgCgCIAAAhgAgLglQgEABgDACIAAAqIAGAEIAHACQAYgBgBgaQABgOgHgGQgFgGgMAAIgGACg");
	this.shape_929.setTransform(-187.6,136.6);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_930.setTransform(-195.5,135.3);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_931.setTransform(-202,134.3);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgFgDgBIgGgEIgDgGIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_932.setTransform(-207.7,135.3);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_933.setTransform(-217.4,134.3);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_934.setTransform(-231.4,135.3);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAIgIAKABQAPgBAIAKQAJAKAAATQAAAPgJALQgIAKgQABQgEAAgGgCQgGgCgBgCIAAAhgAgMglQgEABgCACIAAAqIAFAEIAIACQAYgBAAgaQgBgOgGgGQgFgGgMAAIgHACg");
	this.shape_935.setTransform(-238.8,136.6);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_936.setTransform(-246.7,135.3);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#FFFFFF").s().p("AgGAyIAAgtIggg2IAOAAIAYAsIAZgsIAOAAIggA2IAAAtg");
	this.shape_937.setTransform(-307.6,133.9);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#FFFFFF").s().p("AgeAWQAAgIAGgIQAFgHAHgDQgGgEgEgGQgEgGAAgHQAAgLAIgGQAHgHALAAQANAAAHAHQAHAGAAAMQAAAGgEAHQgEAHgGADQASAJAAAQQAAAOgIAIQgJAIgOAAQgeAAAAgegAgQAWQAAAIAFAFQAEAFAHAAQAHAAAFgFQAFgFAAgIQAAgFgDgFQgEgFgLgHQgPAJAAANgAgMgbQAAAJAQAJQAJgIAAgKQAAgFgDgEQgEgDgGAAQgMAAAAAMg");
	this.shape_938.setTransform(-324.3,133.9);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#FFFFFF").s().p("AgbArIAFgLQAJAHAJAAQASAAAAgYQAAgVgSAAQgJAAgHAGIgFgCIAAgwIAxAAIAAAMIgkAAIAAAYQAFgEAHAAQAOAAAHAIQAHAJAAAOQAAAmggAAQgOAAgJgIg");
	this.shape_939.setTransform(36,97.5);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgHALgBQAOAAAKAKQAIAKAAASQAAAQgIALQgJALgQgBQgEAAgGgCQgFgBgCgCIAAAggAgLgmQgFACgCADIAAApIAGAEIAHABQAYABgBgbQAAgOgFgGQgGgGgMgBIgGACg");
	this.shape_940.setTransform(24.5,100.1);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgHAKgBQAPAAAIAKQAJAKAAASQAAAQgJALQgIALgQgBQgFAAgFgCQgGgBgBgCIAAAggAgMgmQgEACgCADIAAApIAFAEIAIABQAXABABgbQAAgOgHgGQgFgGgMgBIgHACg");
	this.shape_941.setTransform(-42.5,100.1);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAFgEAAgGQAAgGgBgGIgGgOIgUgyIAOAAIAUA4IATg4IAOAAIggBVQgCAHgHAEQgIAFgKAAg");
	this.shape_942.setTransform(-78.9,100.2);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgHAKgBQAPAAAIAKQAJAKAAASQAAAQgJALQgIALgQgBQgEAAgGgCQgGgBgBgCIAAAggAgMgmQgEACgCADIAAApIAFAEIAIABQAYABAAgbQgBgOgGgGQgFgGgMgBIgHACg");
	this.shape_943.setTransform(-323.9,100.1);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAIIAoAAIAAAAg");
	this.shape_944.setTransform(213.7,80.5);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgIgEgFQgEgEgHAAQgEAAgFACQgFADgCAEIAAA2IgNAAIAAhmIANAAIAAAmQADgFAFgDQAGgCAFAAQAMAAAHAIQAGAHAAANIAAAug");
	this.shape_945.setTransform(206.1,79);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgDgCABgDQgBgEADgCQACgDADABQADgBACADQADACAAAEQAAADgDACQgCACgDABQgDgBgCgCg");
	this.shape_946.setTransform(173.1,79.1);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgKQAKgLARAAQAFAAAHACQAHADADACIgHAKIgHgFIgKgBQgJAAgGAIQgHAGAAAMQAAANAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_947.setTransform(167.8,80.5);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgJAOABQAEAAAGACQAAgSgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAZQAAAKAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJgBAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_948.setTransform(160.7,80.5);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAIIAoAAIAAAAg");
	this.shape_949.setTransform(141.4,80.5);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAFgEAAgGQAAgGgBgGIgGgOIgUgyIAOAAIAUA4IATg4IAOAAIggBVQgCAHgHAEQgIAFgKAAg");
	this.shape_950.setTransform(121.8,81.9);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgJAOABQAEAAAGACQAAgSgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAZQAAAKAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJgBAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_951.setTransform(106.5,80.5);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAIIAoAAIAAAAg");
	this.shape_952.setTransform(81.9,80.5);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAIIAoAAIAAAAg");
	this.shape_953.setTransform(63,80.5);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAIIAoAAIAAAAg");
	this.shape_954.setTransform(48.5,80.5);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgJAOABQAEAAAGACQAAgSgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAZQAAAKAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJgBAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_955.setTransform(35.6,80.5);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgIAKgQAAQgOAAgJgKgAgNgTQgGAHABAMQAAAbASABQAJgBAFgHQAGgIAAgMQAAgagUAAQgIAAgFAHg");
	this.shape_956.setTransform(13.7,80.5);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAFgEAAgGQABgGgCgGIgGgOIgUgyIANAAIAVA4IAUg4IAMAAIgeBVQgDAHgHAEQgIAFgKAAg");
	this.shape_957.setTransform(6.5,81.9);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#FFFFFF").s().p("AgKARQAKgJAAgHQAAgDgBgDQgGgCAAgGQAAgDADgCQADgDADAAQAEAAADAEQACADAAAEQAAAJgDAGQgEAIgLAJg");
	this.shape_958.setTransform(-6.6,84.5);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgIgEgFQgEgEgHAAQgEAAgFACQgFADgCAEIAAA2IgNAAIAAhmIANAAIAAAmQADgFAFgDQAGgCAFAAQAMAAAHAIQAGAHAAANIAAAug");
	this.shape_959.setTransform(-12.7,79);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAbATABQAJgBAGgHQAEgIAAgMQAAgagTAAQgIAAgFAHg");
	this.shape_960.setTransform(-31.2,80.5);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#FFFFFF").s().p("AgMA0IAAg+IgLAAIAAgKIALAAQAAgOAGgJQAHgHALAAQAFAAAHACIgEAJIgHgBQgGgBgEAFQgDAFAAAGIAAAFIAPAAIAAAKIgPAAIAAA+g");
	this.shape_961.setTransform(-37.3,79);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgJAOABQAEAAAGACQAAgSgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAZQAAAKAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJgBAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_962.setTransform(-66.1,80.5);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#FFFFFF").s().p("AARA0IgWglIgMALIAAAaIgNAAIAAhmIANAAIAAA/IAbghIAQAAIgYAaIAdAug");
	this.shape_963.setTransform(-79.7,79);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgJAOABQAEAAAGACQAAgSgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAZQAAAKAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJgBAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_964.setTransform(-94.3,80.5);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgDgDIgEAHIgHAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAJALQAKAKAAAPQAAASgKALQgJAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACADAAQAMAAAFgGQAGgHAAgPQAAgMgGgGQgHgHgKAAIgHACg");
	this.shape_965.setTransform(-101.6,79.1);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAHgIALAAQAPAAAIAKQAJAKAAASQAAAQgJALQgIALgQAAQgFAAgFgDQgFgBgCgCIAAAhgAgMglQgEABgCACIAAAqIAFAEIAIABQAXAAABgaQAAgOgHgGQgFgHgMAAIgHADg");
	this.shape_966.setTransform(-116.2,81.9);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgJAOABQAEAAAGACQAAgSgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAZQAAAKAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJgBAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_967.setTransform(-135.6,80.5);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAIIAoAAIAAAAg");
	this.shape_968.setTransform(-161.2,80.5);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgPAAgJgKgAgNgTQgFAHAAAMQgBAbATABQAJgBAGgHQAEgIAAgMQAAgagTAAQgIAAgFAHg");
	this.shape_969.setTransform(-176.3,80.5);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgKQAKgLARAAQAFAAAHACQAHADADACIgHAKQgCgDgFgCIgKgBQgJAAgGAIQgHAGAAAMQAAANAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_970.setTransform(-187.6,80.5);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAbATABQAJgBAFgHQAFgIABgMQgBgagTAAQgIAAgFAHg");
	this.shape_971.setTransform(-214.7,80.5);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgJAOABQAEAAAGACQAAgSgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAZQAAAKAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAAMANAAQAJgBAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_972.setTransform(-243,80.5);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgPAAgJgKgAgNgTQgFAHAAAMQgBAbATABQAJgBAGgHQAEgIAAgMQAAgagTAAQgIAAgFAHg");
	this.shape_973.setTransform(-278,80.5);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#FFFFFF").s().p("AAaAzIgHgVIgkAAIgIAVIgPAAIAohlIADAAIAmBlgAAPAUIgOgsIgPAsIAdAAg");
	this.shape_974.setTransform(-305.3,79.1);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#FFFFFF").s().p("AgXAyQAFgQAMgaQALgaAKgSIguAAIAAgNIBAAAIAAAFIgJARIgJAUIgKAUIgHAVIgGAQg");
	this.shape_975.setTransform(-324.2,79.1);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#FFFFFF").s().p("AgOA6QAOgQAAgrQAAgmgOgTIAAgGQANAGAHATQAJATAAATQAAAUgIASQgHASgOAKg");
	this.shape_976.setTransform(30.2,44.1);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgFAAgEADQgEACgBAEIAAA1IgNAAIAAgzQAAgFgEgDQgDgDgHAAQgEAAgEADQgFADgCADIAAA1IgNAAIAAhIIAJAAIAEAJQAHgKAMAAQAQAAAFAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_977.setTransform(-0.3,43.9);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhmIANAAIAAAmQADgDAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_978.setTransform(-25.6,42.5);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_979.setTransform(-32.1,43.1);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#FFFFFF").s().p("AgMAzIAAg9IgLAAIAAgLIALAAQgBgOAIgHQAFgJAMAAQAGAAAGACIgDAKIgIgCQgGABgEAEQgDAEAAAIIAAADIAOAAIAAALIgOAAIAAA9g");
	this.shape_980.setTransform(-41.5,42.5);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgKALgPAAQgPAAgJgLgAgNgTQgFAHAAAMQgBAbATAAQAJABAGgIQAEgHAAgNQAAgbgTAAQgIAAgFAIg");
	this.shape_981.setTransform(-48.1,44);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgIALABQAOAAAKAJQAIAKAAATQAAAPgIALQgJAKgQAAQgEAAgGgBQgFgCgCgCIAAAggAgLgmQgFACgCADIAAApIAGAEIAHACQAYgBgBgaQAAgOgFgGQgGgGgMAAIgGABg");
	this.shape_982.setTransform(-59.7,45.4);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_983.setTransform(-74,43.1);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhmIANAAIAAAmQADgDAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_984.setTransform(-92.4,42.5);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_985.setTransform(-98.9,43.1);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_986.setTransform(-108.7,43.1);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhmIANAAIAAAmQADgDAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_987.setTransform(-170.9,42.5);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_988.setTransform(-177.4,43.1);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAHIAoAAIAAAAg");
	this.shape_989.setTransform(-220.5,44);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_990.setTransform(-258.6,43.1);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#FFFFFF").s().p("AgMAzIAAg9IgLAAIAAgLIALAAQgBgOAIgHQAFgJAMAAQAGAAAGACIgDAKIgIgCQgGABgEAEQgDAEAAAIIAAADIAOAAIAAALIgOAAIAAA9g");
	this.shape_991.setTransform(-263.8,42.5);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAHIAoAAIAAAAg");
	this.shape_992.setTransform(-270.4,44);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgIALgQAAQgPAAgIgLgAgNgTQgGAHAAAMQABAbASAAQAJABAFgIQAFgHABgNQgBgbgTAAQgIAAgFAIg");
	this.shape_993.setTransform(-297.9,44);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_994.setTransform(-304.3,43.1);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_995.setTransform(-309.9,43.1);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgDgDIgEAHIgHAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAJALQAKAKAAAPQAAASgKALQgJAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACADAAQAMAAAFgGQAGgHAAgPQAAgMgGgGQgHgHgKAAIgHACg");
	this.shape_996.setTransform(-323.9,42.6);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#FFFFFF").s().p("AgKARQAKgKAAgGQAAgDgBgCQgGgEAAgEQAAgEADgDQADgCADAAQAEAAADADQADADAAAFQAAAJgEAGQgEAIgLAJg");
	this.shape_997.setTransform(167.2,29.7);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgCgCAAgEQAAgDACgCQACgDADAAQADAAACADQACACAAADQAAAEgCACQgCACgDAAQgDAAgCgCg");
	this.shape_998.setTransform(95.5,24.4);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#FFFFFF").s().p("AgGAlQgHgSgBgUQABgTAIgTQAIgTAMgGIAAAGQgOATAAAmQAAArAOAQIAAAHQgOgKgHgSg");
	this.shape_999.setTransform(91.3,25.8);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#FFFFFF").s().p("AgNA0IAAg+IgKAAIAAgKIAKAAQABgOAGgJQAHgHALgBQAGAAAGACIgEAKIgHgCQgGAAgEAFQgDAFAAAGIAAAFIAOAAIAAAKIgOAAIAAA+g");
	this.shape_1000.setTransform(86.3,24.3);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAGgEAAgGQAAgGgDgGIgFgOIgTgyIAMAAIAVA4IAUg4IAMAAIgeBVQgDAHgHAEQgIAFgKAAg");
	this.shape_1001.setTransform(-47.3,27.2);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgFANQgEgDgFAAQgHAAgEAGQgFAGgBAJIAAApg");
	this.shape_1002.setTransform(-104.3,25.7);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgIAKgQAAQgPAAgIgKgAgNgTQgGAHAAAMQABAcASAAQAJAAAFgIQAFgHABgNQgBgagTAAQgIgBgFAIg");
	this.shape_1003.setTransform(-156.6,25.8);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgFANQgEgDgFAAQgHAAgEAGQgFAGgBAJIAAApg");
	this.shape_1004.setTransform(-172.7,25.7);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJAAAFgIQAFgHABgNQgBgagTAAQgIgBgFAIg");
	this.shape_1005.setTransform(-230.5,25.8);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAGgEAAgGQAAgGgDgGIgFgOIgTgyIAMAAIAVA4IAUg4IAMAAIgeBVQgDAHgHAEQgIAFgKAAg");
	this.shape_1006.setTransform(-237.7,27.2);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#FFFFFF").s().p("AAVAlIgVgwIgUAwIgEAAIgahKIAOAAIAQAvIATgvIACAAIAUAvIARgvIANAAIgaBKg");
	this.shape_1007.setTransform(-289.3,25.8);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#FFFFFF").s().p("AAeAzIgzhJIAABHIgMAAIAAhjIAFAAIAxBEIAAhEIANAAIAABlg");
	this.shape_1008.setTransform(-306.4,24.5);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#FFFFFF").s().p("AgeAIQAAgRANgTQANgTAOgEIAGAIQgGACgLAOQgKAOgCAHQAGgFAJAAQANAAAIAIQAIAIAAAOQAAAPgIAJQgJAJgMAAQggAAAAgsgAgPATQAAAVAQAAQAHAAAFgFQAEgGAAgJQAAgJgFgGQgEgFgHAAQgQAAAAATg");
	this.shape_1009.setTransform(-324.3,24.4);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgkQgCgCAAgDQAAgDACgDQACgDADABQADgBACADQACADAAADQAAADgCACQgCADgDAAQgDAAgCgDg");
	this.shape_1010.setTransform(73.4,-12.1);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHACADADIgHAKQgCgCgFgDIgKgBQgJAAgGAIQgHAGAAAMQAAANAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_1011.setTransform(49,-10.7);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#FFFFFF").s().p("AAVAmIgVgyIgVAyIgDAAIgahLIAOAAIAPAwIAUgwIADAAIATAwIARgwIANAAIgaBLg");
	this.shape_1012.setTransform(-35.3,-10.7);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#FFFFFF").s().p("AAVAmIgVgyIgUAyIgEAAIgahLIAOAAIAQAwIATgwIACAAIAUAwIARgwIANAAIgaBLg");
	this.shape_1013.setTransform(-104.3,-10.7);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHABQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_1014.setTransform(-131.8,-11.7);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHACADADIgHAKQgCgCgFgDIgKgBQgJAAgGAIQgHAGAAAMQAAANAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_1015.setTransform(-145.4,-10.7);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgkQgDgCABgDQgBgDADgDQABgDAEABQADgBACADQACADABADQgBADgCACQgCADgDAAQgEAAgBgDg");
	this.shape_1016.setTransform(-151,-12.1);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgHgEgEQgEgFgHAAQgEAAgFACQgFAEgCADIAAA1IgNAAIAAhlIANAAIAAAmQADgEAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_1017.setTransform(-201.9,-12.2);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#FFFFFF").s().p("AgKARQAKgJAAgIQAAgBgBgEQgGgCAAgGQAAgDADgCQADgDADAAQAEAAADAEQACADAAAEQABAJgEAHQgEAGgLAKg");
	this.shape_1018.setTransform(-238.9,-6.8);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgkQgCgCAAgDQAAgDACgDQACgDADABQADgBACADQACADAAADQAAADgCACQgCADgDAAQgDAAgCgDg");
	this.shape_1019.setTransform(-275.3,-12.1);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAFgEABgGQAAgGgCgGIgGgOIgTgyIAMAAIAVA4IAUg4IAMAAIgeBVQgDAHgHAEQgIAFgKAAg");
	this.shape_1020.setTransform(-300,-9.3);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#FFFFFF").s().p("AgbArIAFgMQAJAIAJAAQASAAAAgYQAAgVgSAAQgJAAgHAHIgFgDIAAgwIAxAAIAAALIgkAAIAAAZQAFgEAHAAQAOAAAHAIQAHAJAAAOQAAAmggAAQgOAAgJgIg");
	this.shape_1021.setTransform(-324.3,-12);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgEAAgFADQgEACgBAEIAAA1IgNAAIAAgzQAAgFgEgDQgDgDgHAAQgEAAgEADQgFADgCADIAAA1IgNAAIAAhIIAJAAIAEAJQAHgKAMAAQAQAAAFAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_1022.setTransform(6,-47.3);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAKQgKAKgPAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAFgIQAGgHgBgNQABgbgUAAQgIAAgFAIg");
	this.shape_1023.setTransform(-44.2,-47.2);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgLIAXAAIAABJgAAAgjQgCgDgBgEQABgDACgCQACgDADAAQADAAADADQACACAAADQAAAEgCADQgDABgDAAQgDAAgCgBg");
	this.shape_1024.setTransform(-68.9,-48.6);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#FFFFFF").s().p("AARA0IgWglIgMAMIAAAZIgNAAIAAhnIANAAIAAA/IAbghIAQAAIgYAbIAdAug");
	this.shape_1025.setTransform(-73.8,-48.7);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgLIAXAAIAABJgAAAgjQgCgDgBgEQABgDACgCQACgDACAAQAEAAADADQACACAAADQAAAEgCADQgDABgEAAQgCAAgCgBg");
	this.shape_1026.setTransform(-86.8,-48.6);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#FFFFFF").s().p("AAWAlIgWgwIgVAwIgDAAIgahJIAOAAIAPAuIAUguIADAAIAUAuIARguIAMAAIgaBJg");
	this.shape_1027.setTransform(-132.3,-47.2);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#FFFFFF").s().p("AARA0IgWglIgMAMIAAAZIgNAAIAAhnIANAAIAAA/IAbghIAQAAIgYAbIAdAug");
	this.shape_1028.setTransform(-159.3,-48.7);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#FFFFFF").s().p("AAHANIgCgZIANAAIgCAZgAgPANIgCgZIANAAIgCAZg");
	this.shape_1029.setTransform(-169.7,-52.3);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAKQgKAKgPAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAFgIQAGgHgBgNQABgbgUAAQgIAAgFAIg");
	this.shape_1030.setTransform(-183.3,-47.2);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgJAAIAAgLIAVAAIAABJgAAAgjQgDgDABgEQgBgDADgCQACgDADAAQADAAACADQADACAAADQAAAEgDADQgCABgDAAQgDAAgCgBg");
	this.shape_1031.setTransform(-189.2,-48.6);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgHAKAAQAPAAAJAJQAIAKAAASQAAAQgIALQgJAKgQAAQgEAAgGgCQgFgBgCgCIAAAggAgLgmQgEACgDADIAAApIAGAEIAHABQAYAAgBgaQABgOgHgGQgFgGgMgBIgGACg");
	this.shape_1032.setTransform(-200.2,-45.9);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAKQgKAKgPAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAFgIQAGgHgBgNQABgbgUAAQgIAAgFAIg");
	this.shape_1033.setTransform(-208,-47.2);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("#FFFFFF").s().p("AAVAlIgVgwIgUAwIgEAAIgahJIAOAAIAQAuIATguIACAAIAUAuIARguIANAAIgaBJg");
	this.shape_1034.setTransform(-258.2,-47.2);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAKQgIAKgQAAQgOAAgJgKgAgNgTQgGAHAAAMQABAcASAAQAJAAAFgIQAGgHAAgNQAAgbgUAAQgIAAgFAIg");
	this.shape_1035.setTransform(-267.2,-47.2);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAKQgKAKgPAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAFgIQAGgHgBgNQABgbgUAAQgIAAgFAIg");
	this.shape_1036.setTransform(-298.5,-47.2);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#FFFFFF").s().p("AAVAyIAAgwIgqAAIAAAwIgNAAIAAhjIANAAIAAAoIAqAAIAAgoIAPAAIAABjg");
	this.shape_1037.setTransform(-306.8,-48.6);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_1038.setTransform(-318.3,-44.5);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#FFFFFF").s().p("AALAyIAAgbIgtAAIAAgIIA1hAIAGAAIAAA9IAKAAIAAALIgKAAIAAAbgAgRAMIAcAAIAAgig");
	this.shape_1039.setTransform(-324.4,-48.6);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_1040.setTransform(48.7,-81);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#FFFFFF").s().p("AgOA6QAOgQAAgrQAAgmgOgTIAAgGQAMAGAIATQAJATgBATQABAUgIASQgHASgOAKg");
	this.shape_1041.setTransform(44,-83.7);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGAEADQADADAGAAIAAAMQgZAAAAgWg");
	this.shape_1042.setTransform(33.8,-85.2);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#FFFFFF").s().p("AATAkIgTgaIgSAaIgPAAIAagkIgYgjIAOAAIARAZIARgZIAPAAIgbAjIAdAkg");
	this.shape_1043.setTransform(20.4,-83.7);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgLAAIAAgKIAXAAIAABHgAAAgkQgDgCAAgDQAAgEADgCQABgDADABQAEgBADADQABACAAAEQAAADgBACQgDACgEABQgDgBgBgCg");
	this.shape_1044.setTransform(14.7,-85.1);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAHgIALAAQAOAAAKAKQAIAKAAASQAAAQgIALQgKALgPAAQgFAAgFgDQgFgBgCgCIAAAhgAgLglQgEABgDACIAAAqIAGAEIAHABQAXAAAAgaQAAgOgFgGQgGgHgMAAIgGADg");
	this.shape_1045.setTransform(9.3,-82.4);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("#FFFFFF").s().p("AgGAlQgIgSAAgUQAAgTAJgTQAIgTALgGIAAAGQgNATAAAmQAAArANAQIAAAHQgNgKgHgSg");
	this.shape_1046.setTransform(-39.8,-83.7);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#FFFFFF").s().p("AAVAmIgVgyIgVAyIgDAAIgahLIAOAAIAPAwIAUgwIADAAIATAwIASgwIAMAAIgaBLg");
	this.shape_1047.setTransform(-73.7,-83.7);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgIALgQAAQgOAAgJgLgAgNgTQgGAHAAAMQABAbASAAQAJAAAFgHQAGgIAAgMQAAgagUAAQgIAAgFAHg");
	this.shape_1048.setTransform(-134.4,-83.7);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgKQAKgLARAAQAFAAAHACQAHADADACIgHAKQgCgDgFgCIgKgBQgJAAgGAIQgHAGAAAMQAAANAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_1049.setTransform(-160.3,-83.7);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAHgIALAAQAPAAAIAKQAJAKAAASQAAAQgJALQgIALgQAAQgFAAgFgDQgFgBgCgCIAAAhgAgMglQgEABgCACIAAAqIAFAEIAIABQAXAAABgaQAAgOgHgGQgFgHgMAAIgHADg");
	this.shape_1050.setTransform(-171.6,-82.4);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHAAQAFAAAGgCIABALQgIADgJAAQgIAAgGgHg");
	this.shape_1051.setTransform(-197.3,-84.7);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgGQgJgEgDgBIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAEQAIAEAEAEQAEAGAAAHQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_1052.setTransform(-203,-83.7);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgKALgPAAQgPAAgJgLgAgNgTQgFAHAAAMQgBAbATAAQAJAAAGgHQAEgIAAgMQAAgagTAAQgIAAgFAHg");
	this.shape_1053.setTransform(-229,-83.7);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGAEADQADADAGAAIAAAMQgZAAAAgWg");
	this.shape_1054.setTransform(-234.5,-85.2);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgKQAKgLARAAQAFAAAHACQAHADADACIgHAKQgCgDgFgCIgKgBQgJAAgGAIQgHAGAAAMQAAANAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_1055.setTransform(-240.3,-83.7);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAGgEAAgGQAAgGgDgGIgFgOIgTgyIAMAAIAVA4IAUg4IAMAAIgeBVQgDAHgHAEQgIAFgKAAg");
	this.shape_1056.setTransform(-271.9,-82.3);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#FFFFFF").s().p("AgBAmIgfhLIAOAAIASAzIAUgzIANAAIggBLg");
	this.shape_1057.setTransform(-290.6,-83.7);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgKALgPAAQgOAAgKgLgAgNgTQgFAHgBAMQAAAbATAAQAJAAAGgHQAEgIAAgMQAAgagTAAQgIAAgFAHg");
	this.shape_1058.setTransform(-297.7,-83.7);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#FFFFFF").s().p("AAAAzIgXhBIgMA/IgMAAIAShjIAGAAIAXBIIAWhIIAGAAIAUBjIgNAAIgLg/IgWBBg");
	this.shape_1059.setTransform(-306.4,-85);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_1060.setTransform(-318.3,-81);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#FFFFFF").s().p("AgSAxQgGgCgDgEIAGgKQAHAHAKAAQASAAAAgTQAAgIgGgFQgFgGgJAAIgBAAIAAgKIABAAQARAAgBgPQABgQgQAAQgIAAgGAGIgGgJQAGgJAQAAQALAAAJAHQAIAHAAALQAAAJgFAGQgEAGgHADQAJACAGAGQAEAHAAAJQABAOgKAIQgIAIgPAAQgHAAgHgDg");
	this.shape_1061.setTransform(-324.4,-85.1);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_1062.setTransform(77.7,-117.5);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgIAKABQAPAAAIAJQAJAKAAATQAAAPgJALQgIAKgQAAQgEAAgGgBQgGgCgBgCIAAAggAgMgmQgEACgCADIAAApIAFAEIAIACQAYgBAAgaQgBgOgFgGQgGgGgMAAIgHABg");
	this.shape_1063.setTransform(71.7,-118.9);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgJALgPAAQgPAAgIgLgAgNgTQgFAHgBAMQAAAbATAAQAJABAGgIQAEgHABgNQgBgbgTAAQgIAAgFAIg");
	this.shape_1064.setTransform(63.8,-120.2);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAHIAoAAIAAAAg");
	this.shape_1065.setTransform(46.5,-120.2);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgKALgPAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJABAFgIQAGgHgBgNQABgbgUAAQgIAAgFAIg");
	this.shape_1066.setTransform(-58.2,-120.2);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGAEADQADADAGAAIAAAMQgZAAAAgWg");
	this.shape_1067.setTransform(-67.9,-121.7);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAHIAoAAIAAAAg");
	this.shape_1068.setTransform(-98.8,-120.2);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhmIANAAIAAAmQADgDAFgEQAGgCAFAAQAMAAAHAHQAGAIAAAMIAAAug");
	this.shape_1069.setTransform(-106.4,-121.7);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgCgDgBgEQABgDACgCQACgCADgBQADABADACQACACAAADQAAAEgCADQgDABgDAAQgDAAgCgBg");
	this.shape_1070.setTransform(-129.7,-121.6);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAHIAoAAIAAAAg");
	this.shape_1071.setTransform(-139.5,-120.2);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f("#FFFFFF").s().p("AgeAkIAAgDIAqg5IgpAAIAAgMIA7AAIAAAEIgnA5IAnAAIAAALg");
	this.shape_1072.setTransform(-146.6,-120.2);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhmIANAAIAAAmQADgDAFgEQAGgCAFAAQAMAAAHAHQAGAIAAAMIAAAug");
	this.shape_1073.setTransform(-167.5,-121.7);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgFANQgEgDgFAAQgHAAgEAGQgFAGgBAJIAAApg");
	this.shape_1074.setTransform(-186.7,-120.3);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAHIAoAAIAAAAg");
	this.shape_1075.setTransform(-205.7,-120.2);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgDgDIgEAHIgHAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAJALQAKAKAAAPQAAASgKALQgJAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACADAAQAMAAAFgGQAGgHAAgPQAAgMgGgGQgHgHgKAAIgHACg");
	this.shape_1076.setTransform(-217.2,-121.7);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_1077.setTransform(-242,-120.2);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f("#FFFFFF").s().p("AgWAdQgLgLAAgSQAAgQALgMQAKgJANAAQAPAAAJAIQAJAJAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgGIAGAJQgDADgGACQgIADgKAAQgMAAgKgJgAAVgIQAAgHgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAHIAoAAIAAAAg");
	this.shape_1078.setTransform(-271,-120.2);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgIALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJABAFgIQAGgHAAgNQAAgbgUAAQgIAAgFAIg");
	this.shape_1079.setTransform(-284.2,-120.2);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgJALgPAAQgPAAgIgLgAgNgTQgFAHgBAMQAAAbATAAQAJABAFgIQAFgHABgNQgBgbgTAAQgIAAgFAIg");
	this.shape_1080.setTransform(-291.7,-120.2);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhmIANAAIAAAmQADgDAFgEQAGgCAFAAQAMAAAHAHQAGAIAAAMIAAAug");
	this.shape_1081.setTransform(-299.2,-121.7);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f("#FFFFFF").s().p("AgZAmQgKgOgBgYQABgVALgPQANgPASAAQAQAAAJAGIgFALQgGgEgOAAQgMAAgIALQgIALAAARQAAARAIALQAIALAMAAQAOAAAIgKIAHAKQgMAMgSAAQgTAAgMgOg");
	this.shape_1082.setTransform(-307.2,-121.6);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_1083.setTransform(-318.3,-117.5);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f("#FFFFFF").s().p("AgdAzIAAgCIAegxQAKgOAAgLQAAgOgPABQgGAAgEACQgFADgCAFIgJgIQADgGAGgEQAHgEAJAAQAOAAAIAHQAJAHAAALQgBAMgKAQIgWAkIAmAAIAAAMg");
	this.shape_1084.setTransform(-324.5,-121.7);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_1085.setTransform(42,-154);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f("#FFFFFF").s().p("AgNA6QANgQAAgrQAAgmgNgTIAAgGQAMAGAHATQAIATABATQgBAUgHASQgHASgNAKg");
	this.shape_1086.setTransform(37.3,-156.7);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgIAOAAQAEAAAGACQAAgSgPAAQgMAAgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_1087.setTransform(17.7,-156.7);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJgBAFgHQAFgHABgNQgBgagTAAQgIAAgFAHg");
	this.shape_1088.setTransform(10.3,-156.7);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgRQAAgSALgKQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_1089.setTransform(-11.9,-156.7);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f("#FFFFFF").s().p("AARA0IgWglIgMALIAAAaIgNAAIAAhnIANAAIAABAIAbghIAQAAIgYAaIAdAug");
	this.shape_1090.setTransform(-18.8,-158.2);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_1091.setTransform(-36.2,-156.7);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJgBAFgHQAFgHABgNQgBgagTAAQgIAAgFAHg");
	this.shape_1092.setTransform(-43.7,-156.7);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAGgEAAgGQAAgGgDgGIgFgOIgTgyIAMAAIAVA4IAUg4IAMAAIgeBVQgDAHgHAEQgIAFgKAAg");
	this.shape_1093.setTransform(-50.9,-155.3);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJgBAGgHQAEgHAAgNQAAgagTAAQgIAAgFAHg");
	this.shape_1094.setTransform(-69.9,-156.7);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#FFFFFF").s().p("AAHANIgCgZIANAAIgCAZgAgPANIgCgZIANAAIgCAZg");
	this.shape_1095.setTransform(-80.1,-161.8);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f("#FFFFFF").s().p("AAGANIgBgZIAMAAIgCAZgAgPANIgBgZIAMAAIgCAZg");
	this.shape_1096.setTransform(-91.3,-161.8);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgGQgJgEgDgBIgGgFIgDgGIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAEQAIAEAEAEQAEAGAAAHQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_1097.setTransform(-106.3,-156.7);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgRQAAgSALgKQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_1098.setTransform(-112.9,-156.7);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAHgHALgBQAOAAAKAKQAIAKAAASQAAAQgIALQgKALgPAAQgFgBgFgCQgFgBgCgCIAAAhgAgLglQgEABgDACIAAAqIAGAEIAHABQAXAAAAgaQAAgOgFgGQgGgHgMAAIgGADg");
	this.shape_1099.setTransform(-125.7,-155.4);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f("#FFFFFF").s().p("AgFAlQgJgSAAgUQAAgTAJgTQAIgTALgGIAAAGQgNATAAAmQAAArANAQIAAAHQgNgKgGgSg");
	this.shape_1100.setTransform(-132.2,-156.7);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGAEADQADADAGAAIAAAMQgZAAAAgWg");
	this.shape_1101.setTransform(-140.9,-158.2);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgOAAgKgKgAgNgTQgFAHgBAMQAAAcATAAQAJgBAGgHQAEgHAAgNQAAgagTAAQgIAAgFAHg");
	this.shape_1102.setTransform(-147,-156.7);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJgBAFgHQAGgHgBgNQABgagUAAQgIAAgFAHg");
	this.shape_1103.setTransform(-154.5,-156.7);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAjQAAAKACAEQADADAHAAQAFAAAGgCIABALQgIACgJABQgIAAgGgHg");
	this.shape_1104.setTransform(-160.9,-157.7);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAHgHALgBQAOAAAKAKQAIAKAAASQAAAQgIALQgKALgPAAQgFgBgFgCQgFgBgCgCIAAAhgAgLglQgEABgDACIAAAqIAGAEIAHABQAXAAAAgaQAAgOgFgGQgGgHgMAAIgGADg");
	this.shape_1105.setTransform(-171.6,-155.4);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgIAOAAQAEAAAGACQAAgSgPAAQgMAAgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_1106.setTransform(-191,-156.7);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAjQAAAKACAEQADADAHAAQAFAAAGgCIABALQgIACgJABQgIAAgGgHg");
	this.shape_1107.setTransform(-197.4,-157.7);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgHgKgGQgJgEgDgBIgGgFIgDgGIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAAEQAAAGAIAEIAJAEQAIAEAEAEQAEAGAAAHQAAAKgHAFQgHAGgLAAQgMAAgKgGg");
	this.shape_1108.setTransform(-203.1,-156.7);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgRQAAgSALgKQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_1109.setTransform(-213.9,-156.7);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgIAKgQAAQgPAAgIgKgAgNgTQgGAHAAAMQABAcASAAQAJgBAFgHQAFgHABgNQgBgagTAAQgIAAgFAHg");
	this.shape_1110.setTransform(-229,-156.7);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgKQAKgLARAAQAFAAAHADQAHACADACIgHAJIgHgEIgKgBQgJAAgGAIQgHAGAAANQAAAMAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_1111.setTransform(-240.3,-156.7);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgRQAAgSALgKQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_1112.setTransform(-251.8,-156.7);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAjQAAAKACAEQADADAHAAQAFAAAGgCIABALQgIACgJABQgIAAgGgHg");
	this.shape_1113.setTransform(-265.9,-157.7);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAjQAAAKACAEQADADAHAAQAFAAAGgCIABALQgIACgJABQgIAAgGgHg");
	this.shape_1114.setTransform(-275.6,-157.7);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgRQAAgRAKgKQAKgLARAAQAFAAAHADQAHACADACIgHAJIgHgEIgKgBQgJAAgGAIQgHAGAAANQAAAMAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_1115.setTransform(-281.9,-156.7);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgRQAAgSALgKQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_1116.setTransform(-289.2,-156.7);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAABgWg");
	this.shape_1117.setTransform(-294.8,-158.2);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgRQAAgSALgKQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_1118.setTransform(-300.9,-156.7);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_1119.setTransform(-318.3,-154);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f("#FFFFFF").s().p("AADAyIAAhMIgTANIAAgNQAIgDAIgHQAJgHAEgGIAEAAIAABjg");
	this.shape_1120.setTransform(-324.9,-158.1);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCgBgEQABgCACgDQACgCADAAQADAAADACQACADAAACQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_1121.setTransform(-271.4,97.4);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgHAKgBQAPAAAJAKQAIAKAAASQAAAQgIALQgKALgPgBQgEAAgGgCQgGgBgBgCIAAAggAgLgmQgEACgDADIAAApIAFAEIAIABQAYABgBgbQABgOgHgGQgFgGgMgBIgGACg");
	this.shape_1122.setTransform(-292.1,100.1);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgLAAIAAgLIAWAAIAABIgAAAgjQgDgDAAgDQAAgDADgDQABgCADgBQAEABACACQACADAAADQAAADgCADQgCACgEAAQgDAAgBgCg");
	this.shape_1123.setTransform(52.1,60.9);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f("#FFFFFF").s().p("AgBAmIgfhKIAOAAIASAyIAUgyIANAAIggBKg");
	this.shape_1124.setTransform(7.4,62.3);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_1125.setTransform(-58.1,62.3);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_1126.setTransform(-96.1,62.3);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_1127.setTransform(-133.5,62.3);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_1128.setTransform(-145.2,62.3);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#FFFFFF").s().p("AgLARQALgJAAgIQAAgBgBgEQgGgDAAgEQAAgEADgCQADgDADAAQAEAAADADQADADAAAFQAAAJgEAHQgEAGgLAKg");
	this.shape_1129.setTransform(-161.6,66.2);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgDgDIgFAHIgGAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAKALQAJAKAAAPQAAASgJALQgKAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACADAAQALAAAHgGQAFgHAAgPQAAgMgGgGQgHgHgKAAIgHACg");
	this.shape_1130.setTransform(-178.4,60.8);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_1131.setTransform(-205.7,62.3);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAHgIALAAQAOAAAJAKQAJAKAAATQAAAPgJALQgJALgPAAQgFAAgFgCQgGgCgBgCIAAAhgAgMglQgDABgDACIAAAqIAFAEIAIACQAYAAAAgbQgBgOgFgGQgGgHgMABIgHACg");
	this.shape_1132.setTransform(-259.2,63.6);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_1133.setTransform(-278.8,62.3);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f("#FFFFFF").s().p("AgGAyIAAhjIANAAIAABjg");
	this.shape_1134.setTransform(-309.4,60.9);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#FFFFFF").s().p("AgbArIAFgMQAJAIAJAAQASAAAAgYQAAgVgSAAQgJAAgHAHIgFgDIAAgwIAxAAIAAALIgkAAIAAAZQAFgEAHAAQAOAAAHAJQAHAIAAAOQAAAmggAAQgOAAgJgIg");
	this.shape_1135.setTransform(-324.3,61);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgHAKAAQAOAAAKAJQAIAKAAASQAAAQgIALQgKAKgPAAQgEAAgGgCQgGgBgBgCIAAAggAgLgmQgEACgDADIAAApIAFAEIAIABQAYABAAgbQAAgOgHgGQgFgGgMgBIgGACg");
	this.shape_1136.setTransform(177.7,27.1);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgHALAAQAPAAAIAJQAJAKAAASQAAAQgJALQgIAKgQAAQgFAAgFgCQgFgBgCgCIAAAggAgMgmQgEACgCADIAAApIAFAEIAIABQAXABABgbQAAgOgHgGQgFgGgMgBIgHACg");
	this.shape_1137.setTransform(-123,27.1);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCgBgEQABgDACgCQACgDACAAQAEAAADADQACACAAADQAAAEgCACQgDACgEAAQgCAAgCgCg");
	this.shape_1138.setTransform(-301.5,24.4);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#FFFFFF").s().p("AgeAyIAAhjIATAAQAqgBAAAeQAAAggmABIgKgBIAAAmgAgRglIAAAlIAJABQAZAAAAgUQAAgSgaAAg");
	this.shape_1139.setTransform(-178.7,-12.1);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgkQgCgCgBgDQABgDACgDQACgDADABQADgBADADQACADAAADQAAADgCACQgDADgDAAQgDAAgCgDg");
	this.shape_1140.setTransform(-204.4,-12.1);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#FFFFFF").s().p("AgNAzIAAg9IgKAAIAAgLIAKAAQABgOAGgHQAHgIALAAQAGAAAGACIgEAJIgHgBQgGgBgEAFQgDAEAAAIIAAADIAOAAIAAALIgOAAIAAA9g");
	this.shape_1141.setTransform(-208.5,-12.2);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f("#FFFFFF").s().p("AgiAyIAAhjIAYAAQAVgBAMANQAMANAAAVQAAA1gxAAgAgUglIAABLIALAAQANAAAJgKQAHgLABgTQgBgjgfAAg");
	this.shape_1142.setTransform(-222.9,-12.1);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#FFFFFF").s().p("AgYARIAmgRIgmgRIAAgLIAxAZIAAAHIgxAYg");
	this.shape_1143.setTransform(-235.4,-11.4);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f("#FFFFFF").s().p("AgOAGIAAgLIAcAAIAAALg");
	this.shape_1144.setTransform(-241.5,-11.1);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#FFFFFF").s().p("AgdAyIAAhjIA7AAIAAAMIgtAAIAAAcIAgAAIAAAKIggAAIAAAkIAsAAIAAANg");
	this.shape_1145.setTransform(-269,-12.1);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgJALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJAAAFgHQAGgIgBgMQABgbgUAAQgIABgFAHg");
	this.shape_1146.setTransform(-280.9,-10.7);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#FFFFFF").s().p("AgbAmQgLgOgBgXQABgXANgOQANgPAVAAQAQAAAJAJIgFALQgLgHgKAAQgOAAgJALQgJALAAARQAAARAJALQAJALAOAAQALAAAHgHIAAgXIgOAAIAAgLIAcAAIAAArQgGAEgKADQgKADgJAAQgUAAgMgOg");
	this.shape_1147.setTransform(-306.9,-12.1);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgLIAXAAIAABJgAAAgjQgCgDgBgEQABgDACgCQABgDADAAQAEAAADADQABACABADQgBAEgBADQgDABgEAAQgDAAgBgBg");
	this.shape_1148.setTransform(112.2,-48.6);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgHAKAAQAPAAAIAJQAJAKAAASQAAAQgJALQgIAKgQAAQgFAAgFgCQgGgBgBgCIAAAggAgMgmQgEACgCADIAAApIAFAEIAIABQAXAAABgaQAAgOgHgGQgFgGgMgBIgHACg");
	this.shape_1149.setTransform(-11,-45.9);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAKQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJAAAFgIQAFgHABgNQgBgbgTAAQgIAAgFAIg");
	this.shape_1150.setTransform(-78.4,-47.2);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#FFFFFF").s().p("AAVAlIgVgwIgVAwIgDAAIgahJIAOAAIAPAuIAUguIACAAIAUAuIARguIANAAIgaBJg");
	this.shape_1151.setTransform(-117.6,-47.2);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAKQgJAKgQAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAGgIQAEgHAAgNQABgbgUAAQgIAAgFAIg");
	this.shape_1152.setTransform(-203,-47.2);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#FFFFFF").s().p("AAQA0IAAgvQAAgHgEgFQgEgEgHAAQgEAAgFADQgFADgCADIAAA2IgNAAIAAhnIANAAIAAAmQADgDAFgDQAGgDAFAAQAMAAAHAHQAGAIAAAMIAAAvg");
	this.shape_1153.setTransform(-259.4,-48.7);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f("#FFFFFF").s().p("AgdAzIAAgCIAegxQAKgOAAgKQAAgOgPgBQgGAAgEADQgFAEgCAEIgJgIQADgGAGgEQAHgEAJAAQAOAAAIAHQAJAGAAANQgBALgKAQIgWAkIAmAAIAAAMg");
	this.shape_1154.setTransform(-324.5,-48.7);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#FFFFFF").s().p("AgOA6QAOgQAAgrQAAgmgOgTIAAgGQAMAGAIATQAJATAAATQAAAUgIASQgHASgOAKg");
	this.shape_1155.setTransform(-86,-83.7);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f("#FFFFFF").s().p("AAAAzIgXhBIgMA/IgMAAIAShjIAGAAIAXBIIAWhIIAGAAIAUBjIgMAAIgMg/IgWBBg");
	this.shape_1156.setTransform(-93.6,-85);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#FFFFFF").s().p("AgFAlQgIgSAAgUQAAgTAJgTQAHgTAMgGIAAAGQgOATAAAmQAAArAOAQIAAAHQgOgKgGgSg");
	this.shape_1157.setTransform(-101,-83.7);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgKALgPAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJAAAFgHQAGgIgBgMQABgagUAAQgIAAgFAHg");
	this.shape_1158.setTransform(-115.8,-83.7);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgIALgQAAQgPAAgIgLgAgNgTQgGAHAAAMQABAbASAAQAJAAAFgHQAFgIABgMQgBgagTAAQgIAAgFAHg");
	this.shape_1159.setTransform(-123.3,-83.7);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f("#FFFFFF").s().p("AgHAyIAAhXIgfAAIAAgMIBOAAIAAAMIgiAAIAABXg");
	this.shape_1160.setTransform(-129.3,-85.1);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#FFFFFF").s().p("AATA0IAAgiQgGAGgNABQgOgBgJgJQgIgKAAgSQAAgRAKgLQAKgJAOgBQAKAAAIAHIAEgFIAHAAIAABlgAgLggQgGAIAAALQAAANAGAHQAGAGAKAAQAJAAAFgEIAAgrQgGgGgIAAQgKAAgGAIg");
	this.shape_1161.setTransform(-164.2,-82.4);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f("#FFFFFF").s().p("AAAAzIgXhBIgLA/IgOAAIAThjIAGAAIAXBIIAWhIIAGAAIAUBjIgMAAIgMg/IgWBBg");
	this.shape_1162.setTransform(-185.5,-85);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#FFFFFF").s().p("AAUAyIgagrIgPAAIAAArIgNAAIAAhiIAKgBIAPAAQAjgBAAAdQAAAKgGAHQgGAHgIACIAdAtgAgVglIAAAhIAKABQALAAAGgEQAFgEAAgKQAAgIgGgEQgFgEgNAAg");
	this.shape_1163.setTransform(-264.1,-85.1);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f("#FFFFFF").s().p("AgGAyIAAhXIghAAIAAgMIBOAAIAAAMIghAAIAABXg");
	this.shape_1164.setTransform(-230.6,-121.6);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgIALABQAOAAAKAJQAIAKAAATQAAAPgIALQgKAKgPAAQgFAAgFgBQgFgCgCgCIAAAggAgLgmQgEACgDADIAAApIAGAEIAHACQAXgBAAgaQAAgOgFgGQgGgGgMAAIgGABg");
	this.shape_1165.setTransform(-242.3,-118.9);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgFAAgEADQgEACgCAEIAAA1IgLAAIAAgzQgBgFgEgDQgDgDgHAAQgEAAgFADQgEADgCADIAAA1IgNAAIAAhIIAJAAIAEAJQAHgKAMAAQAQAAAFAJQACgEAGgDQAGgCAGAAQALAAAHAGQAGAHAAAMIAAAwg");
	this.shape_1166.setTransform(-252.2,-120.3);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f("#FFFFFF").s().p("AgbAuIAFgNIAKAFQAFACAFAAQAHAAAFgFQAEgEAAgHQAAgFgCgEQgDgFgKgFIgIgDQgKgEgEgHQgEgGAAgKQAAgLAIgHQAIgIALAAQARAAAGAGIgEAMIgIgEIgLgCQgGAAgEAEQgEAEAAAGIACAHIAEAFQACADAHADIAJAEQAKAEAEAHQAEAHAAAKQAAALgJAIQgJAIgOAAQgOAAgJgGg");
	this.shape_1167.setTransform(-274.2,-121.6);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f("#FFFFFF").s().p("AgeAyIAAhjIATgBQAqABAAAdQAAAggmAAIgKAAIAAAmgAgRgkIAAAkIAJABQAZgBAAgSQAAgTgaAAg");
	this.shape_1168.setTransform(-323.8,-121.6);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f("#FFFFFF").s().p("AgNAGIAAgLIAcAAIAAALg");
	this.shape_1169.setTransform(215.3,-138.9);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCgBgEQABgDACgCQACgDACAAQAEAAADADQACACAAADQAAAEgCACQgDACgEAAQgCAAgCgCg");
	this.shape_1170.setTransform(189.5,-139.9);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_1171.setTransform(91.8,-139.4);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCAAgEQAAgDACgCQACgDADAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_1172.setTransform(86.8,-139.9);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgPAAgJgKgAgNgTQgFAHAAAMQgBAcATAAQAJAAAGgIQAEgHAAgNQAAgagTAAQgIgBgFAIg");
	this.shape_1173.setTransform(57.2,-138.5);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCgBgEQABgDACgCQACgDACAAQAEAAADADQACACAAADQAAAEgCACQgDACgEAAQgCAAgCgCg");
	this.shape_1174.setTransform(15.3,-139.9);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgHALAAQAOAAAKAJQAIAKAAASQAAAQgIALQgJAKgQAAQgEAAgGgCQgFgBgCgCIAAAggAgLgmQgFACgCADIAAApIAGAEIAHABQAYABgBgbQAAgOgFgGQgGgGgMgBIgGACg");
	this.shape_1175.setTransform(-50.2,-137.1);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgKIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAJACAFQADADAHAAQAFABAGgDIABALQgIACgJAAQgIABgGgHg");
	this.shape_1176.setTransform(-85.3,-139.4);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJAAAFgIQAFgHABgNQgBgagTAAQgIgBgFAIg");
	this.shape_1177.setTransform(-91.9,-138.5);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgJAKgQAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJgBAGgHQAEgHAAgNQABgagUAAQgIAAgFAHg");
	this.shape_1178.setTransform(191.2,-156.7);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgDgCAAgDQAAgDADgDQABgCADAAQAEAAADACQABADAAADQAAADgBACQgDACgEAAQgDAAgBgCg");
	this.shape_1179.setTransform(152.8,-158.1);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgJAKgQAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJgBAGgHQAEgHAAgNQABgagUAAQgIAAgFAHg");
	this.shape_1180.setTransform(102.1,-156.7);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgJAAIAAgKIAWAAIAABIgAAAgkQgCgCgBgDQABgDACgDQACgCADAAQADAAADACQACADAAADQAAADgCACQgDACgDAAQgDAAgCgCg");
	this.shape_1181.setTransform(76.4,-158.1);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgFAAgEADQgEACgCAEIAAA1IgLAAIAAgzQgBgFgEgDQgDgDgHAAQgEAAgFADQgEADgCADIAAA1IgNAAIAAhIIAJAAIAEAJQAHgKAMAAQAQAAAFAJQACgEAGgDQAGgCAGAAQALAAAHAGQAGAHAAAMIAAAwg");
	this.shape_1182.setTransform(57,-156.8);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgIAOAAQAEAAAGACQAAgSgPAAQgMAAgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_1183.setTransform(47.5,-156.7);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f("#FFFFFF").s().p("AgNA0IAAg+IgKAAIAAgKIAKAAQAAgOAIgJQAGgHALgBQAFABAHACIgDAJIgIgBQgGgBgEAFQgDAFAAAGIAAAFIAOAAIAAAKIgOAAIAAA+g");
	this.shape_1184.setTransform(17.7,-158.2);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgEgDgEAAQgHAAgEAGQgGAGAAAJIAAApg");
	this.shape_1185.setTransform(-15.4,-156.8);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCgBgDQABgDACgDQACgCADAAQADAAADACQACADAAADQAAADgCACQgDACgDAAQgDAAgCgCg");
	this.shape_1186.setTransform(-20.8,-158.1);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAGgEgBgGQAAgGgCgGIgFgOIgUgyIAOAAIAUA4IATg4IAOAAIggBVQgCAHgHAEQgIAFgKAAg");
	this.shape_1187.setTransform(-62.1,-155.3);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgIAOAAQAEAAAGACQAAgSgPAAQgMAAgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_1188.setTransform(-69.3,-156.7);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAGgEgBgGQAAgGgCgGIgFgOIgUgyIAOAAIAUA4IATg4IAOAAIggBVQgCAHgHAEQgIAFgKAAg");
	this.shape_1189.setTransform(-108.3,-155.3);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f("#FFFFFF").s().p("AgLARQALgKAAgGQAAgCgBgEQgGgCAAgGQAAgDADgCQADgDADAAQAEAAADAEQACADABAEQgBAJgDAGQgEAIgLAJg");
	this.shape_1190.setTransform(-119.7,-152.8);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgIAOAAQAEAAAGACQAAgSgPAAQgMAAgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_1191.setTransform(-173.7,-156.7);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgIAOAAQAEAAAGACQAAgSgPAAQgMAAgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_1192.setTransform(-191.9,-156.7);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgIAOAAQAEAAAGACQAAgSgPAAQgMAAgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_1193.setTransform(-212.3,-156.7);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgDgCABgDQgBgDADgDQABgCAEAAQADAAACACQACADABADQgBADgCACQgCACgDAAQgEAAgBgCg");
	this.shape_1194.setTransform(-237.9,-158.1);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgJAKgQAAQgPAAgJgKgAgNgTQgGAHABAMQAAAcASAAQAJgBAGgHQAEgHAAgNQABgagUAAQgIAAgFAHg");
	this.shape_1195.setTransform(-265.5,-156.7);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgRQAAgSALgKQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_1196.setTransform(-278.6,-156.7);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgRQAAgSALgKQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgHQAAgIgFgGQgGgFgJAAQgIAAgFAFQgGAGgBAIIAoAAIAAAAg");
	this.shape_1197.setTransform(-296.8,-156.7);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f("#FFFFFF").s().p("AgNA0IAAg+IgKAAIAAgKIAKAAQAAgOAIgJQAFgHAMgBQAGABAGACIgDAJIgIgBQgGgBgEAFQgDAFAAAGIAAAFIAOAAIAAAKIgOAAIAAA+g");
	this.shape_1198.setTransform(-321.3,-158.2);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f("#FFFFFF").s().p("AgGAyIAAhjIANAAIAABjg");
	this.shape_1199.setTransform(-326,-158.1);

	this.instance_1 = new lib.rowboatGood();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-330,-151,0.6,0.6);

	this.instance_2 = new lib.climbingBad();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-330,-120,0.409,0.409);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f("#FFFFFF").s().p("AATAlIgTgbIgSAbIgPAAIAaglIgYgjIAOAAIARAZIARgZIAPAAIgbAjIAdAlg");
	this.shape_1200.setTransform(180.2,60.3);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAHgIALAAQAOAAAJAKQAJAKAAASQAAAQgJALQgJALgPAAQgFAAgFgDQgGgBgBgCIAAAhgAgMglQgDABgDACIAAAqIAGAEIAHABQAXAAAAgaQAAgOgFgGQgGgHgMAAIgHADg");
	this.shape_1201.setTransform(37.3,61.6);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCgBgDQABgEACgCQABgDADABQAEgBADADQABACAAAEQAAADgBACQgDACgEABQgDgBgBgCg");
	this.shape_1202.setTransform(-16.5,58.9);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f("#FFFFFF").s().p("AgNA0IAAg+IgKAAIAAgKIAKAAQAAgOAIgJQAGgHALAAQAFAAAHACIgDAJIgIgBQgGgBgEAFQgDAFAAAGIAAAFIAOAAIAAAKIgOAAIAAA+g");
	this.shape_1203.setTransform(-30.5,58.8);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJgBAGgHQAEgIAAgMQAAgagTAAQgIAAgFAHg");
	this.shape_1204.setTransform(-37.1,60.3);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJgBAGgHQAEgIAAgMQAAgagTAAQgIAAgFAHg");
	this.shape_1205.setTransform(-105.5,60.3);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGADADQAEADAFAAIAAAMQgXAAAAgWg");
	this.shape_1206.setTransform(-126.8,58.8);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAIgIAKAAQAPAAAIAKQAJAKAAASQAAAQgJALQgIALgQAAQgEAAgGgDQgGgBgBgCIAAAhgAgMglQgEABgCACIAAAqIAFAEIAIABQAYAAAAgaQgBgOgGgGQgFgHgMAAIgHADg");
	this.shape_1207.setTransform(-262.7,61.6);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJgBAGgHQAEgIAAgMQAAgagTAAQgIAAgFAHg");
	this.shape_1208.setTransform(-287.7,60.3);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgLAAIAAgKIAWAAIAABIgAAAgkQgDgCAAgDQAAgEADgCQABgDADABQAEgBACADQACACAAAEQAAADgCACQgCACgEABQgDgBgBgCg");
	this.shape_1209.setTransform(-319.2,58.9);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGADADQAEADAFAAIAAAMQgXAAAAgWg");
	this.shape_1210.setTransform(211.6,40.6);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f("#FFFFFF").s().p("AAVAmIgVgyIgVAyIgDAAIgahKIAOAAIAPAvIAUgvIADAAIATAvIARgvIANAAIgaBKg");
	this.shape_1211.setTransform(200.1,42.1);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgCgDgBgDQABgDACgDQABgCADgBQAEABADACQABADABADQgBADgBADQgDACgEAAQgDAAgBgCg");
	this.shape_1212.setTransform(85.2,40.6);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f("#FFFFFF").s().p("AgLARQALgJAAgIQAAgBgBgEQgGgDAAgEQAAgEADgCQADgDADAAQAEAAADADQACADABAFQgBAJgDAHQgEAGgLAKg");
	this.shape_1213.setTransform(62.8,46);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f("#FFFFFF").s().p("AAVAmIgVgyIgVAyIgDAAIgahKIAOAAIAPAvIAUgvIADAAIATAvIASgvIAMAAIgaBKg");
	this.shape_1214.setTransform(28.9,42.1);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f("#FFFFFF").s().p("AgLAtQALgKAAgHQAAgDgBgDQgGgDAAgFQAAgDADgDQADgCADAAQAEAAADADQACADAAAFQAAAJgDAHQgEAHgLAKgAgGgfQgCgDAAgFQAAgEACgDQADgDAEAAQAEAAADADQADADAAAEQAAAFgDADQgDADgEAAQgEAAgDgDg");
	this.shape_1215.setTransform(-38,43.2);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f("#FFFFFF").s().p("AATAkIgTgaIgSAaIgPAAIAagkIgYgkIAOAAIARAaIARgaIAPAAIgbAkIAdAkg");
	this.shape_1216.setTransform(-61.2,42);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAIgIAKAAQAOAAAKAKQAIAKAAATQAAAPgIALQgKALgPAAQgEAAgGgCQgGgCgBgCIAAAhgAgLglQgEABgDACIAAAqIAFAEIAIACQAYAAgBgbQABgOgHgGQgFgHgMABIgGACg");
	this.shape_1217.setTransform(-170.1,43.4);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOABQAEgBAGACQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_1218.setTransform(-236.8,42);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOABQAEgBAGACQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_1219.setTransform(-324.3,42);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgLAAIAAgLIAXAAIAABIgAAAgjQgDgDAAgEQAAgDADgCQABgCADgBQAEABADACQABACAAADQAAAEgBADQgDABgEAAQgDAAgBgBg");
	this.shape_1220.setTransform(210,22.4);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgCgDIgGAHIgGAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAJALQAKAKAAAPQAAASgKALQgJAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACACAAQANAAAFgGQAGgHAAgPQAAgMgHgGQgGgHgLAAIgGACg");
	this.shape_1221.setTransform(172.8,22.3);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgCgDgBgEQABgDACgCQABgCADgBQAEABADACQABACAAADQAAAEgBADQgDABgEAAQgDAAgBgBg");
	this.shape_1222.setTransform(146.4,22.4);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGADADQAEADAGAAIAAAMQgZAAAAgWg");
	this.shape_1223.setTransform(142.8,22.3);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhlIANAAIAAAlQADgDAFgEQAGgCAFAAQAMAAAHAHQAGAIAAAMIAAAug");
	this.shape_1224.setTransform(121.7,22.3);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f("#FFFFFF").s().p("AgLARQALgJAAgIQAAgCgBgCQgGgEAAgEQAAgEADgDQADgCADAAQAEAAADADQADADAAAFQAAAJgEAHQgEAHgLAJg");
	this.shape_1225.setTransform(83.2,27.7);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgIAKABQAPAAAIAJQAJAKAAATQAAAPgJALQgIAKgQAAQgFAAgFgBQgGgCgBgCIAAAggAgMgmQgEACgCADIAAApIAFAEIAIACQAXgBABgaQAAgOgHgGQgFgGgMAAIgHABg");
	this.shape_1226.setTransform(77.2,25.1);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f("#FFFFFF").s().p("AAkAlIAAgtQAAgRgPAAQgFAAgEADQgEACgCAEIAAA1IgMAAIAAgzQAAgFgDgDQgFgDgGAAQgEAAgFADQgEADgCADIAAA1IgNAAIAAhIIAIAAIAFAJQAHgKAMAAQAPAAAGAJQACgEAGgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAAwg");
	this.shape_1227.setTransform(67.3,23.7);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGADADQAEADAFAAIAAAMQgXAAAAgWg");
	this.shape_1228.setTransform(-35,22.3);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgCgDgBgEQABgDACgCQABgCADgBQAEABADACQABACAAADQAAAEgBADQgDABgEAAQgDAAgBgBg");
	this.shape_1229.setTransform(-39.5,22.4);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_1230.setTransform(-118.3,23.8);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_1231.setTransform(-124,23.8);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhlIANAAIAAAlQADgDAFgEQAGgCAFAAQAMAAAHAHQAGAIAAAMIAAAug");
	this.shape_1232.setTransform(-178.9,22.3);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhlIANAAIAAAlQADgDAFgEQAGgCAFAAQAMAAAHAHQAGAIAAAMIAAAug");
	this.shape_1233.setTransform(-210.5,22.3);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgIALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJABAFgIQAGgHAAgNQAAgbgUAAQgIAAgFAIg");
	this.shape_1234.setTransform(-253.1,23.8);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgJALgQAAQgPAAgJgLgAgNgTQgGAHABAMQAAAbASAAQAJABAGgIQAEgHAAgNQABgbgUAAQgIAAgFAIg");
	this.shape_1235.setTransform(-312.8,23.8);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.f("#FFFFFF").s().p("AAGAQIgFgLIgGALIgDAFIgJgHIADgEIALgHIgMgBIgGgCIAFgKIAHADIAJAGIgFgNIAAgGIALAAIAAAFIgEAOIAKgGIAGgDIADALIgFACIgMAAIALAHIADAEIgIAHg");
	this.shape_1236.setTransform(-325.5,19.5);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgDgDgFAAQgHAAgEAGQgGAGAAAJIAAApg");
	this.shape_1237.setTransform(-317,-12.8);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgkQgCgCgBgDQABgDACgDQABgDADABQAEgBADADQABADABADQgBADgBACQgDADgEAAQgDAAgBgDg");
	this.shape_1238.setTransform(201.3,-32.4);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgHgEgEQgEgFgHAAQgEAAgFACQgFAEgCADIAAA1IgNAAIAAhlIANAAIAAAmQADgEAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_1239.setTransform(136.8,-32.5);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f("#FFFFFF").s().p("AAWAmIgWgyIgVAyIgDAAIgahLIAOAAIAPAwIAUgwIADAAIAUAwIARgwIAMAAIgaBLg");
	this.shape_1240.setTransform(118.3,-30.9);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgHgEgEQgEgFgHAAQgEAAgFACQgFAEgCADIAAA1IgNAAIAAhlIANAAIAAAmQADgEAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_1241.setTransform(-9.1,-32.5);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHABQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_1242.setTransform(-45.5,-31.9);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgkQgCgCAAgDQAAgDACgDQACgDACABQAEgBACADQACADAAADQAAADgCACQgCADgEAAQgCAAgCgDg");
	this.shape_1243.setTransform(-58.1,-32.4);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgkQgDgCABgDQgBgDADgDQABgDAEABQADgBACADQACADABADQgBADgCACQgCADgDAAQgEAAgBgDg");
	this.shape_1244.setTransform(-97.5,-32.4);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHABQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_1245.setTransform(-102,-31.9);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHABQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_1246.setTransform(-120.3,-31.9);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHABQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_1247.setTransform(-212,-31.9);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAHgIALAAQAOAAAKAKQAIAKAAATQAAAPgIALQgJALgQAAQgEAAgGgCQgFgCgCgCIAAAhgAgLglQgFABgCACIAAAqIAGAEIAHACQAYAAgBgbQAAgOgFgGQgGgHgMABIgGACg");
	this.shape_1248.setTransform(-218.5,-29.6);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_1249.setTransform(-239.7,-31);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgHgEgEQgEgFgHAAQgEAAgFACQgFAEgCADIAAA1IgNAAIAAhlIANAAIAAAmQADgEAFgEQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_1250.setTransform(-247.3,-32.5);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHABQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_1251.setTransform(-253.8,-31.9);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_1252.setTransform(-266.2,-31);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAFAAAHQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_1253.setTransform(-279.3,-31);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_1254.setTransform(-286.8,-31);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgLQAKgKANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_1255.setTransform(-298.5,-31);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f("#FFFFFF").s().p("AAUAyIgagrIgPAAIAAArIgNAAIAAhjIAKAAIAPAAQAjgBAAAdQAAAJgGAIQgGAHgIABIAdAugAgVglIAAAhIAKABQALAAAGgEQAFgEAAgKQAAgJgGgDQgFgEgNAAg");
	this.shape_1256.setTransform(-305.2,-32.4);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgLIAVAAIAABJgAAAgjQgDgDABgEQgBgDADgCQABgDAEAAQADAAACADQACACABADQgBAEgCADQgCABgDAAQgEAAgBgBg");
	this.shape_1257.setTransform(51.9,-68.9);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f("#FFFFFF").s().p("AgFAlQgJgSAAgUQAAgTAKgTQAHgTALgGIAAAGQgNATAAAmQAAArANAQIAAAHQgNgKgGgSg");
	this.shape_1258.setTransform(11.4,-67.4);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f("#FFFFFF").s().p("AATAlIgTgbIgSAbIgPAAIAaglIgYgkIAOAAIARAZIARgZIAPAAIgbAkIAdAlg");
	this.shape_1259.setTransform(-22.7,-67.5);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAKQgKAKgPAAQgOAAgKgKgAgNgTQgFAHgBAMQAAAcATAAQAJAAAGgIQAEgHAAgNQAAgbgTAAQgIAAgFAIg");
	this.shape_1260.setTransform(-68.2,-67.5);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgLIAVAAIAABJgAAAgjQgCgDAAgEQAAgDACgCQACgDACAAQAEAAACADQACACAAADQAAAEgCADQgCABgEAAQgCAAgCgBg");
	this.shape_1261.setTransform(-141.8,-68.9);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f("#FFFFFF").s().p("AgKARQAKgJAAgIQAAgCgBgCQgGgDAAgFQAAgEADgDQADgCADAAQAEAAADADQACAEAAAEQABAJgEAGQgEAIgLAJg");
	this.shape_1262.setTransform(-191.2,-63.5);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAKQgKAKgPAAQgPAAgJgKgAgNgTQgFAHAAAMQgBAcATAAQAJAAAGgIQAEgHAAgNQAAgbgTAAQgIAAgFAIg");
	this.shape_1263.setTransform(-282.5,-67.5);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgJAAIAAgKIAWAAIAABIgAAAgkQgCgCgBgEQABgCACgDQACgCADAAQADAAADACQACADAAACQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_1264.setTransform(201.1,-87.1);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOAAQAEAAAGACQAAgTgPABQgMAAgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_1265.setTransform(74.4,-85.7);

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOAAQAEAAAGACQAAgTgPABQgMAAgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_1266.setTransform(19.4,-85.7);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgHAKgBQAOAAAKAKQAIAKAAASQAAAQgIALQgKALgPgBQgEAAgGgCQgGgBgBgCIAAAggAgLgmQgEACgDADIAAApIAFAEIAIABQAYABgBgbQABgOgHgGQgFgGgMgBIgGACg");
	this.shape_1267.setTransform(-18.9,-84.4);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgHQAKgHAOAAQAEAAAGACQAAgTgPABQgMAAgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFADIAAAHQgIAAgDgCgAgLAEQgGAGAAAGQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_1268.setTransform(-37.2,-85.7);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f("#FFFFFF").s().p("AARA0IgWglIgMALIAAAaIgNAAIAAhnIANAAIAAA/IAbggIAQAAIgYAaIAdAug");
	this.shape_1269.setTransform(-154.1,-87.2);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgHAKgBQAPAAAJAKQAIAKAAASQAAAQgIALQgJALgQgBQgEAAgGgCQgFgBgCgCIAAAggAgLgmQgEACgDADIAAApIAGAEIAHABQAYABgBgbQABgOgHgGQgFgGgMgBIgGACg");
	this.shape_1270.setTransform(-195.7,-84.4);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f("#FFFFFF").s().p("AgdAkIAAgDIApg5IgpAAIAAgMIA8AAIAAAEIgoA5IAoAAIAAALg");
	this.shape_1271.setTransform(-1.1,-122.2);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAHAIAEIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_1272.setTransform(-11.2,-122.2);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAHAIAEIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_1273.setTransform(-28.6,-122.2);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgDgDIgFAHIgGAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAKALQAJAKAAAPQAAASgJALQgKAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACADAAQALAAAHgGQAFgHAAgPQAAgMgGgGQgHgHgKAAIgHACg");
	this.shape_1274.setTransform(-71.7,-123.7);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgCgDgBgDQABgDACgDQACgCACgBQAEABADACQACADAAADQAAADgCADQgDACgEAAQgCAAgCgCg");
	this.shape_1275.setTransform(-90.9,-123.6);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAHAIAEIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_1276.setTransform(-103.1,-122.2);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAHAIAEIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_1277.setTransform(-132.1,-122.2);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgKALgPAAQgPAAgJgLgAgNgTQgFAHAAAMQgBAbATAAQAJAAAGgHQAEgIAAgMQAAgbgTAAQgIABgFAHg");
	this.shape_1278.setTransform(-146.2,-122.2);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFACQgFADgCAEIAAA1IgNAAIAAhlIANAAIAAAlQADgEAFgDQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_1279.setTransform(-153.7,-123.7);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHACADADIgHAKQgCgDgFgCIgKgBQgJAAgGAHQgHAIAAALQAAANAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_1280.setTransform(-161,-122.2);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f("#FFFFFF").s().p("AgKARQAKgJAAgIQAAgBgBgEQgGgDAAgEQAAgEADgCQADgDADAAQAEAAADADQACADAAAFQABAJgEAHQgEAGgLAKg");
	this.shape_1281.setTransform(-171.4,-118.3);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgCgDIgGAHIgGAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAJALQAKAKAAAPQAAASgKALQgJAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACACAAQANAAAFgGQAGgHAAgPQAAgMgHgGQgGgHgLAAIgGACg");
	this.shape_1282.setTransform(-188.1,-123.7);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgFIgDgFIgBgHQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAHAIAEIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAHQgHAFgLAAQgMAAgKgGg");
	this.shape_1283.setTransform(-199.3,-122.2);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgJAAIAAgLIAVAAIAABIgAAAgjQgDgDABgDQgBgDADgDQACgCADgBQADABACACQADADAAADQAAADgDADQgCACgDAAQgDAAgCgCg");
	this.shape_1284.setTransform(-219.3,-123.6);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAIgIAKAAQAPAAAJAKQAIAKAAATQAAAPgIALQgJALgQAAQgEAAgGgCQgFgCgCgCIAAAhgAgLglQgEABgDACIAAAqIAGAEIAHACQAYAAgBgbQABgOgHgGQgFgHgMABIgGACg");
	this.shape_1285.setTransform(-230.3,-120.9);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgKALgPAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJAAAFgHQAGgIgBgMQABgbgUAAQgIABgFAHg");
	this.shape_1286.setTransform(-238.2,-122.2);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgJALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJAAAGgHQAEgIAAgMQABgbgUAAQgIABgFAHg");
	this.shape_1287.setTransform(-261.5,-122.2);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFACQgFADgCAEIAAA1IgNAAIAAhlIANAAIAAAlQADgEAFgDQAGgCAFAAQAMAAAHAIQAGAHAAAMIAAAug");
	this.shape_1288.setTransform(-286.4,-123.7);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f("#FFFFFF").s().p("AgdAzIAAgDIAegwQAKgOAAgLQAAgNgPAAQgGAAgEACQgFADgCAFIgJgIQADgGAGgEQAHgEAJAAQAOAAAIAHQAJAGAAAMQgBAMgKAQIgWAjIAmAAIAAANg");
	this.shape_1289.setTransform(-324.5,-123.7);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.f("#FFFFFF").s().p("AgNA6QANgQAAgrQAAgmgNgTIAAgGQAMAGAHATQAJATAAATQgBAUgHASQgHASgNAKg");
	this.shape_1290.setTransform(153.7,-158.7);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgCgDIgGAHIgGAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAKALQAJAKAAAPQAAASgJALQgKAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACACAAQAMAAAGgGQAGgHAAgPQAAgMgHgGQgGgHgLAAIgGACg");
	this.shape_1291.setTransform(119.3,-160.2);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJAAAGgIQAEgHAAgNQAAgagTAAQgIgBgFAIg");
	this.shape_1292.setTransform(72.7,-158.7);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAGgEAAgGQgBgGgCgGIgFgOIgTgyIANAAIAUA4IAUg4IAMAAIgeBVQgDAHgHAEQgIAFgKAAg");
	this.shape_1293.setTransform(65.5,-157.3);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.f("#FFFFFF").s().p("AAHANIgCgZIANAAIgCAZgAgPANIgBgZIAMAAIgCAZg");
	this.shape_1294.setTransform(36.3,-163.8);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.f("#FFFFFF").s().p("AgTAtQgGgGgBgKIANAAQABAJAJAAQAJAAADgEQAEgEAAgSIAAg+IANAAIAAA+QAAAUgGAKQgHAJgPAAQgKAAgHgGg");
	this.shape_1295.setTransform(30.4,-160);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgCgDIgGAHIgGAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAKALQAJAKAAAPQAAASgJALQgKAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACACAAQAMAAAHgGQAFgHAAgPQAAgMgHgGQgGgHgLAAIgGACg");
	this.shape_1296.setTransform(-41.7,-160.2);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_1297.setTransform(-53.8,-158.7);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f("#FFFFFF").s().p("AgWAeQgHgHAAgMIAAgvIANAAIAAAtQAAARAPAAQAFAAAGgEQAFgDACgFIAAgyIANAAIAABIIgNAAIAAgKQgCAEgHAEQgHADgFAAQgMAAgGgHg");
	this.shape_1298.setTransform(-175.7,-158.7);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f("#FFFFFF").s().p("AgfAzIAAhjIAagCQAOAAAIAHQAIAGAAAMQAAAHgFAGQgFAGgGABQAMADAFAFQAGAHAAALQAAAOgKAIQgKAHgOABgAgRAnIAKAAQAMABAGgFQAGgFAAgLQAAgKgFgEQgGgEgMgBIgLAAgAgRglIAAAcIAKAAQATAAAAgQQAAgNgRAAg");
	this.shape_1299.setTransform(-188.6,-160.1);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAABgWg");
	this.shape_1300.setTransform(-217.4,-160.2);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.f("#FFFFFF").s().p("AAVAyIAAgwIgqAAIAAAwIgNAAIAAhjIANAAIAAAoIAqAAIAAgoIAPAAIAABjg");
	this.shape_1301.setTransform(-239.2,-160.1);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAABgWg");
	this.shape_1302.setTransform(-294.8,-160.2);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f("#FFFFFF").s().p("AgMA0IAAg+IgLAAIAAgLIALAAQgBgNAIgIQAFgJAMAAQAGAAAGACIgDAKIgIgCQgGABgEAEQgDAFAAAGIAAAEIAOAAIAAALIgOAAIAAA+g");
	this.shape_1303.setTransform(-73.4,95.3);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgLIAVAAIAABJgAAAgjQgCgDAAgEQAAgDACgCQACgDADAAQADAAACADQACACAAADQAAAEgCADQgCABgDAAQgDAAgCgBg");
	this.shape_1304.setTransform(-84.1,95.4);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.f("#FFFFFF").s().p("AAUAjQgEgBgCgGQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGADQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFAEIAAAGQgIAAgDgDgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_1305.setTransform(-95.1,96.8);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.f("#FFFFFF").s().p("AAUAjQgEgBgCgGQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGADQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFAEIAAAGQgIAAgDgDgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_1306.setTransform(-125.3,96.8);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgHALAAQAOAAAKAJQAIAKAAATQAAAPgIALQgJAKgQAAQgEAAgGgCQgFgBgCgCIAAAggAgLgmQgFACgCADIAAApIAGAEIAHABQAYAAgBgaQAAgOgFgGQgGgGgMgBIgGACg");
	this.shape_1307.setTransform(-234.7,98.1);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.f("#FFFFFF").s().p("AAUAjQgEgBgCgGQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGADQAAgTgPABQgMgBgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAaQAAAJAFAEIAAAGQgIAAgDgDgAgLAEQgGAFAAAHQAAAMANAAQAJAAAIgKIAAgRIgJgBQgJAAgGAEg");
	this.shape_1308.setTransform(-277.2,96.8);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgHALAAQAOAAAJAJQAJAKAAATQAAAPgJALQgJAKgPAAQgFAAgFgCQgGgBgBgCIAAAggAgMgmQgDACgDADIAAApIAGAEIAHABQAXAAAAgaQAAgOgFgGQgGgGgMgBIgHACg");
	this.shape_1309.setTransform(-292.1,98.1);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.f("#FFFFFF").s().p("AAUAzIgagrIgPgBIAAAsIgNAAIAAhkIAKAAIAPgBQAjAAAAAdQAAAJgGAIQgGAGgIACIAdAvgAgVgkIAAAgIAKABQALAAAGgEQAFgEAAgKQAAgJgGgEQgFgDgNAAg");
	this.shape_1310.setTransform(-306.8,95.4);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.f("#FFFFFF").s().p("AgbArIAFgLQAJAHAJAAQASAAAAgYQAAgVgSAAQgJAAgHAGIgFgBIAAgxIAxAAIAAAMIgkAAIAAAYQAFgEAHAAQAOAAAHAJQAHAIAAAOQAAAmggAAQgOAAgJgIg");
	this.shape_1311.setTransform(-324.3,95.5);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGAEADQADADAFAAIAAAMQgYAAAAgWg");
	this.shape_1312.setTransform(174.7,40.6);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAIgIAKAAQAPAAAIAKQAJAKAAATQAAAPgJALQgIALgQAAQgEAAgGgCQgGgCgBgCIAAAhgAgMglQgEABgCACIAAAqIAFAEIAIACQAXAAABgbQAAgOgHgGQgFgHgMABIgHACg");
	this.shape_1313.setTransform(82.6,43.4);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.f("#FFFFFF").s().p("AAVAmIgVgyIgUAyIgEAAIgahKIAOAAIAQAvIATgvIACAAIAUAvIARgvIANAAIgaBKg");
	this.shape_1314.setTransform(-9.5,42.1);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOABQAEgBAGACQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_1315.setTransform(-147.8,42);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f("#FFFFFF").s().p("AgKARQAKgJAAgIQAAgBgBgEQgGgDAAgEQAAgEADgCQADgDADAAQAEAAADADQADADgBAFQAAAJgDAHQgEAGgLAKg");
	this.shape_1316.setTransform(-226.5,46);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOABQAEgBAGACQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_1317.setTransform(-239.5,42);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.f("#FFFFFF").s().p("AAZAzIgGgVIglAAIgHAVIgPAAIAohlIADAAIAmBlgAAPAUIgOgsIgPAsIAdAAg");
	this.shape_1318.setTransform(-304.2,40.6);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgLAAIAAgKIAWAAIAABIgAAAgkQgDgCAAgDQAAgDADgDQABgCADAAQAEAAACACQACADAAADQAAADgCACQgCACgEAAQgDAAgBgCg");
	this.shape_1319.setTransform(182.6,-14.1);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f("#FFFFFF").s().p("AgMA0IAAg+IgLAAIAAgKIALAAQgBgOAIgJQAFgHAMgBQAGABAGACIgDAJIgIgBQgGgBgEAFQgDAFAAAGIAAAFIAPAAIAAAKIgPAAIAAA+g");
	this.shape_1320.setTransform(178.5,-14.2);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgJAKgPAAQgPAAgIgKgAgNgTQgFAHgBAMQAAAcATAAQAJgBAGgHQAEgHABgNQgBgagTAAQgIAAgFAHg");
	this.shape_1321.setTransform(166.9,-12.7);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgOAAgKgKgAgNgTQgFAHAAAMQgBAcATAAQAJgBAGgHQAEgHAAgNQAAgagTAAQgIAAgFAHg");
	this.shape_1322.setTransform(115.4,-12.7);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAjQAAAKACAEQADADAHAAQAFAAAGgCIABALQgIACgJABQgIAAgGgHg");
	this.shape_1323.setTransform(18.1,-13.7);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAjQAAAKACAEQADADAHAAQAFAAAGgCIABALQgIACgJABQgIAAgGgHg");
	this.shape_1324.setTransform(0,-13.7);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAjQAAAKACAEQADADAHAAQAFAAAGgCIABALQgIACgJABQgIAAgGgHg");
	this.shape_1325.setTransform(-10.5,-13.7);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgOAAgKgKgAgNgTQgFAHgBAMQAAAcATAAQAJgBAGgHQAEgHAAgNQAAgagTAAQgIAAgFAHg");
	this.shape_1326.setTransform(-93.9,-12.7);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCgBgDQABgDACgDQABgCADAAQAEAAADACQABADAAADQAAADgBACQgDACgEAAQgDAAgBgCg");
	this.shape_1327.setTransform(-99.8,-14.1);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAjQAAAKACAEQADADAHAAQAFAAAGgCIABALQgIACgJABQgIAAgGgHg");
	this.shape_1328.setTransform(-104.3,-13.7);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAjQAAAKACAEQADADAHAAQAFAAAGgCIABALQgIACgJABQgIAAgGgHg");
	this.shape_1329.setTransform(-161.9,-13.7);

	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgIAKgQAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJgBAFgHQAGgHAAgNQAAgagUAAQgIAAgFAHg");
	this.shape_1330.setTransform(-173.5,-12.7);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAjQAAAKACAEQADADAHAAQAFAAAGgCIABALQgIACgJABQgIAAgGgHg");
	this.shape_1331.setTransform(-179.9,-13.7);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgOAAgKgKgAgNgTQgFAHgBAMQAAAcATAAQAJgBAGgHQAEgHAAgNQAAgagTAAQgIAAgFAHg");
	this.shape_1332.setTransform(-263.1,-12.7);

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgPAAgJgKgAgNgTQgFAHAAAMQgBAcATAAQAJgBAGgHQAEgHAAgNQAAgagTAAQgIAAgFAHg");
	this.shape_1333.setTransform(-296.9,-12.7);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f("#FFFFFF").s().p("AATAkIgTgaIgSAaIgPAAIAagkIgYgkIAOAAIARAZIARgZIAPAAIgbAkIAdAkg");
	this.shape_1334.setTransform(164.1,-49.2);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.f("#FFFFFF").s().p("AgMAzIAAg9IgLAAIAAgLIALAAQgBgOAIgHQAFgJAMABQAGAAAGABIgDAKIgIgCQgGABgEAEQgDAEAAAIIAAADIAOAAIAAALIgOAAIAAA9g");
	this.shape_1335.setTransform(154.4,-50.7);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgIALABQAOgBAKAKQAIAKAAATQAAAPgIALQgKAKgPAAQgFAAgFgBQgFgCgCgCIAAAggAgLgmQgEACgDACIAAAqIAGAEIAHACQAXgBAAgaQAAgOgFgGQgGgGgMAAIgGABg");
	this.shape_1336.setTransform(107.4,-47.9);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgIALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJABAFgIQAGgIAAgMQAAgbgUAAQgIAAgFAIg");
	this.shape_1337.setTransform(31.3,-49.2);

	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHACADADIgHAKIgHgFIgKgBQgJAAgGAHQgHAIAAALQAAAOAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_1338.setTransform(-40.7,-49.2);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHACADADIgHAKIgHgFIgKgBQgJAAgGAHQgHAIAAALQAAAOAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_1339.setTransform(-57,-49.2);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f("#FFFFFF").s().p("AgLARQALgJAAgIQAAgBgBgDQgGgEAAgEQAAgEADgDQADgCADAAQAEAAADADQACADABAFQgBAJgDAHQgEAGgLAKg");
	this.shape_1340.setTransform(-93.6,-45.3);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgKALgPAAQgOAAgKgLgAgNgTQgFAHgBAMQAAAbATAAQAJABAGgIQAEgIAAgMQAAgbgTAAQgIAAgFAIg");
	this.shape_1341.setTransform(-103.8,-49.2);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgKALgPAAQgOAAgKgLgAgNgTQgFAHgBAMQAAAbATAAQAJABAGgIQAEgIAAgMQAAgbgTAAQgIAAgFAIg");
	this.shape_1342.setTransform(-128.5,-49.2);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgQIANgFIAAAVIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_1343.setTransform(-169.5,-50.2);

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f("#FFFFFF").s().p("AAWAlIgWgxIgUAxIgEAAIgahJIAOAAIAQAuIATguIACAAIAVAuIARguIAMAAIgaBJg");
	this.shape_1344.setTransform(-181.5,-49.2);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgQIANgFIAAAVIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_1345.setTransform(-212.2,-50.2);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHACADADIgHAKIgHgFIgKgBQgJAAgGAHQgHAIAAALQAAAOAHAGQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_1346.setTransform(-218.5,-49.2);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgKALgPAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJABAFgIQAGgIgBgMQABgbgUAAQgIAAgFAIg");
	this.shape_1347.setTransform(-254.8,-49.2);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgQIANgFIAAAVIATAAIAAAKIgTAAIAAAkQAAAJACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_1348.setTransform(-261.3,-50.2);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgDgDAAgEQAAgCADgDQABgCADgBQAEABADACQABADAAACQAAAEgBADQgDACgEAAQgDAAgBgCg");
	this.shape_1349.setTransform(-287.3,-50.6);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.f("#FFFFFF").s().p("AgdAzIAAgCIAegxQAKgOAAgLQAAgOgPABQgGAAgEACQgFADgCAFIgJgIQADgGAGgEQAHgEAJAAQAOAAAIAHQAJAGAAAMQgBAMgKAQIgWAjIAmAAIAAANg");
	this.shape_1350.setTransform(-324.5,-50.7);

	this.shape_1351 = new cjs.Shape();
	this.shape_1351.graphics.f("#FFFFFF").s().p("AgZArQgJgJAAgPIAAhFIANAAIAABEQABAJAFAGQAGAGAJAAQAKAAAFgGQAHgGAAgKIAAhDIANAAIAABFQAAAPgKAIQgJAJgQAAQgQAAgJgIg");
	this.shape_1351.setTransform(-185.8,-87);

	this.shape_1352 = new cjs.Shape();
	this.shape_1352.graphics.f("#FFFFFF").s().p("AgGAlQgHgSgBgUQABgTAIgTQAIgTALgGIAAAGQgNATAAAmQAAArANAQIAAAHQgNgKgHgSg");
	this.shape_1352.setTransform(-192.7,-85.7);

	this.shape_1353 = new cjs.Shape();
	this.shape_1353.graphics.f("#FFFFFF").s().p("AgHAyIAAhXIgfAAIAAgMIBOAAIAAAMIghAAIAABXg");
	this.shape_1353.setTransform(-226.2,-87.1);

	this.shape_1354 = new cjs.Shape();
	this.shape_1354.graphics.f("#FFFFFF").s().p("AgeAzIAAhjIASgBQArAAAAAdQAAAhglAAIgKgBIAAAngAgQglIAAAlIAJAAQAYAAAAgTQAAgSgaAAg");
	this.shape_1354.setTransform(-264.6,-87.1);

	this.shape_1355 = new cjs.Shape();
	this.shape_1355.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_1355.setTransform(-159.8,-122.2);

	this.shape_1356 = new cjs.Shape();
	this.shape_1356.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_1356.setTransform(-184.4,-122.2);

	this.shape_1357 = new cjs.Shape();
	this.shape_1357.graphics.f("#FFFFFF").s().p("AATAkIgTgaIgSAaIgPAAIAagkIgYgkIAOAAIARAaIARgaIAPAAIgbAkIAdAkg");
	this.shape_1357.setTransform(-219.7,-122.2);

	this.shape_1358 = new cjs.Shape();
	this.shape_1358.graphics.f("#FFFFFF").s().p("AgNAzIAAg9IgKAAIAAgLIAKAAQAAgOAIgHQAFgJAMABQAGAAAGABIgDAKIgIgBQgGAAgEAEQgDAEAAAIIAAADIAOAAIAAALIgOAAIAAA9g");
	this.shape_1358.setTransform(-229.5,-123.7);

	this.shape_1359 = new cjs.Shape();
	this.shape_1359.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgIALgQAAQgPAAgIgLgAgNgTQgGAHAAAMQABAbASAAQAJAAAFgHQAFgIABgMQgBgbgTAAQgIABgFAHg");
	this.shape_1359.setTransform(-240.3,-122.2);

	this.shape_1360 = new cjs.Shape();
	this.shape_1360.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_1360.setTransform(-265.3,-122.2);

	this.shape_1361 = new cjs.Shape();
	this.shape_1361.graphics.f("#FFFFFF").s().p("AgWAcQgLgKAAgSQAAgQALgMQAKgJANAAQAPAAAJAJQAJAIAAAOIgBAHIg0AAQAAANAHAHQAGAGAJAAQALAAAHgHIAGAKQgDADgGACQgIADgKAAQgMAAgKgKgAAVgIQAAgHgFgFQgGgGgJAAQgIAAgFAGQgGAFgBAHIAoAAIAAAAg");
	this.shape_1361.setTransform(-290.4,-122.2);

	this.shape_1362 = new cjs.Shape();
	this.shape_1362.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOAAQAEAAAGACQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_1362.setTransform(-317.4,-122.2);

	this.shape_1363 = new cjs.Shape();
	this.shape_1363.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHACADADIgHAKQgCgDgFgCIgKgBQgJAAgGAHQgHAIAAALQAAANAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_1363.setTransform(-324.5,-122.2);

	this.shape_1364 = new cjs.Shape();
	this.shape_1364.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgjQgDgDABgEQgBgDADgCQABgCAEgBQADABACACQACACABADQgBAEgCADQgCABgDAAQgEAAgBgBg");
	this.shape_1364.setTransform(210.3,-141.9);

	this.shape_1365 = new cjs.Shape();
	this.shape_1365.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgIALgQAAQgOAAgJgLgAgNgTQgGAHABAMQAAAbASAAQAJABAFgIQAGgHAAgNQAAgbgUAAQgIAAgFAIg");
	this.shape_1365.setTransform(109.1,-140.5);

	this.shape_1366 = new cjs.Shape();
	this.shape_1366.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAABgWg");
	this.shape_1366.setTransform(72,-141.9);

	this.shape_1367 = new cjs.Shape();
	this.shape_1367.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgIALgQAAQgOAAgJgLgAgNgTQgGAHABAMQAAAbASAAQAJABAFgIQAGgHAAgNQAAgbgUAAQgIAAgFAIg");
	this.shape_1367.setTransform(65.9,-140.5);

	this.shape_1368 = new cjs.Shape();
	this.shape_1368.graphics.f("#FFFFFF").s().p("AgHAyIAAhXIgfAAIAAgMIBOAAIAAAMIghAAIAABXg");
	this.shape_1368.setTransform(52.4,-141.8);

	this.shape_1369 = new cjs.Shape();
	this.shape_1369.graphics.f("#FFFFFF").s().p("AgdAkIAAgDIAog5IgnAAIAAgMIA6AAIAAAEIgnA5IAnAAIAAALg");
	this.shape_1369.setTransform(-13,-140.5);

	this.shape_1370 = new cjs.Shape();
	this.shape_1370.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAGQgHAGgLAAQgMAAgKgGg");
	this.shape_1370.setTransform(-161.4,-140.5);

	this.shape_1371 = new cjs.Shape();
	this.shape_1371.graphics.f("#FFFFFF").s().p("AgXAgIAFgMQALAHAGAAQALAAAAgKQAAgIgKgEQgJgEgDgCIgGgEIgDgHIgBgGQAAgJAGgFQAHgFAJAAQAIAAANAFIgEAMQgIgGgIAAQgDAAgDACQgEACAAADQAAAIAIADIAJAFQAIADAEAFQAEAEAAAIQAAAJgHAGQgHAGgLAAQgMAAgKgGg");
	this.shape_1371.setTransform(-213.7,-140.5);

	this.shape_1372 = new cjs.Shape();
	this.shape_1372.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgCgDgBgEQABgDACgCQACgCACgBQAEABADACQACACAAADQAAAEgCADQgDABgEAAQgCAAgCgBg");
	this.shape_1372.setTransform(-259.2,-141.9);

	this.shape_1373 = new cjs.Shape();
	this.shape_1373.graphics.f("#FFFFFF").s().p("AAQAzIAAguQAAgGgEgFQgEgFgHAAQgEAAgFADQgFADgCADIAAA1IgNAAIAAhmIANAAIAAAmQADgDAFgEQAGgCAFAAQAMAAAHAHQAGAIAAAMIAAAug");
	this.shape_1373.setTransform(-312.3,-142);

	this.shape_1374 = new cjs.Shape();
	this.shape_1374.graphics.f("#FFFFFF").s().p("AAXAzIgXhEIgWBEIgEAAIgghlIAOAAIAUBFIAWhFIAEAAIAWBFIAUhFIAPAAIggBlg");
	this.shape_1374.setTransform(-322,-141.8);

	this.shape_1375 = new cjs.Shape();
	this.shape_1375.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAABgWg");
	this.shape_1375.setTransform(211,-160.2);

	this.shape_1376 = new cjs.Shape();
	this.shape_1376.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgCgDIgGAHIgGAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAKALQAJAKAAAPQAAASgJALQgKAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACADAAQALAAAHgGQAFgHAAgPQAAgMgGgGQgHgHgKAAIgHACg");
	this.shape_1376.setTransform(152.4,-160.2);

	this.shape_1377 = new cjs.Shape();
	this.shape_1377.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGAEADQADADAFAAIAAAMQgYAAAAgWg");
	this.shape_1377.setTransform(60.9,-160.2);

	this.shape_1378 = new cjs.Shape();
	this.shape_1378.graphics.f("#FFFFFF").s().p("AgLAeIAAhRIALAAIAABPQAAAGADADQAEADAFAAIAAAMQgYAAABgWg");
	this.shape_1378.setTransform(-158.4,-160.2);

	this.shape_1379 = new cjs.Shape();
	this.shape_1379.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgHAKAAQAPAAAJAJQAIAKAAASQAAAQgIALQgJAKgQAAQgEAAgGgCQgFgBgCgCIAAAggAgLgmQgEACgDADIAAApIAGAEIAHABQAYABgBgbQABgOgHgGQgFgGgMgBIgGACg");
	this.shape_1379.setTransform(-294.7,-157.4);

	this.instance_3 = new lib.climbingGood();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-330,-167,0.49,0.49);

	this.shape_1380 = new cjs.Shape();
	this.shape_1380.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgLAAIAAgKIAXAAIAABIgAAAgkQgDgCAAgDQAAgEADgCQABgDADABQAEgBADADQABACAAAEQAAADgBACQgDACgEABQgDgBgBgCg");
	this.shape_1380.setTransform(44.4,58.9);

	this.shape_1381 = new cjs.Shape();
	this.shape_1381.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCgBgDQABgEACgCQACgDACABQAEgBADADQACACAAAEQAAADgCACQgDACgEABQgCgBgCgCg");
	this.shape_1381.setTransform(-85.9,58.9);

	this.shape_1382 = new cjs.Shape();
	this.shape_1382.graphics.f("#FFFFFF").s().p("AAWAmIgWgyIgUAyIgEAAIgahLIAOAAIAQAwIATgwIACAAIAVAwIAQgwIANAAIgaBLg");
	this.shape_1382.setTransform(-157.8,60.3);

	this.shape_1383 = new cjs.Shape();
	this.shape_1383.graphics.f("#FFFFFF").s().p("AAQA0IAAguQAAgIgEgFQgEgEgHAAQgEAAgFACQgFADgCAEIAAA2IgNAAIAAhmIANAAIAAAmQADgFAFgCQAGgDAFAAQAMAAAHAIQAGAHAAANIAAAug");
	this.shape_1383.setTransform(-191.9,58.8);

	this.shape_1384 = new cjs.Shape();
	this.shape_1384.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgPAAgJgKgAgNgTQgFAHAAAMQgBAcATAAQAJgBAGgHQAEgIAAgMQAAgagTAAQgIAAgFAHg");
	this.shape_1384.setTransform(-298.7,60.3);

	this.shape_1385 = new cjs.Shape();
	this.shape_1385.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgIALABQAOAAAJAJQAJAKAAATQAAAPgJALQgJAKgPAAQgFAAgFgBQgGgCgBgCIAAAggAgMgmQgDACgDADIAAApIAFAEIAIACQAYgBAAgaQgBgOgFgGQgGgGgMAAIgHABg");
	this.shape_1385.setTransform(-45.9,25.1);

	this.shape_1386 = new cjs.Shape();
	this.shape_1386.graphics.f("#FFFFFF").s().p("AgNAzIAAg9IgKAAIAAgLIAKAAQAAgOAIgHQAFgJAMABQAGgBAGACIgDAKIgIgCQgGABgEAEQgDAEAAAIIAAADIAOAAIAAALIgOAAIAAA9g");
	this.shape_1386.setTransform(-81.4,22.3);

	this.shape_1387 = new cjs.Shape();
	this.shape_1387.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgKALgPAAQgOAAgKgLgAgNgTQgFAHgBAMQAAAbATAAQAJABAGgIQAEgHAAgNQAAgbgTAAQgIAAgFAIg");
	this.shape_1387.setTransform(-88,23.8);

	this.shape_1388 = new cjs.Shape();
	this.shape_1388.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgIALABQAOAAAJAJQAJAKAAATQAAAPgJALQgJAKgPAAQgFAAgFgBQgGgCgBgCIAAAggAgMgmQgDACgDADIAAApIAGAEIAHACQAXgBAAgaQAAgOgFgGQgGgGgMAAIgHABg");
	this.shape_1388.setTransform(-192.7,25.1);

	this.shape_1389 = new cjs.Shape();
	this.shape_1389.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgIALABQAOAAAKAJQAIAKAAATQAAAPgIALQgKAKgPAAQgFAAgFgBQgFgCgCgCIAAAggAgLgmQgEACgDADIAAApIAGAEIAHACQAXgBAAgaQAAgOgFgGQgGgGgMAAIgGABg");
	this.shape_1389.setTransform(-200.4,25.1);

	this.shape_1390 = new cjs.Shape();
	this.shape_1390.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgKALgPAAQgPAAgJgLgAgNgTQgFAHAAAMQgBAbATAAQAJABAGgIQAEgHAAgNQAAgbgTAAQgIAAgFAIg");
	this.shape_1390.setTransform(-225.4,23.8);

	this.shape_1391 = new cjs.Shape();
	this.shape_1391.graphics.f("#FFFFFF").s().p("AAVAmIgVgyIgVAyIgDAAIgahLIAOAAIAPAwIAUgwIACAAIAUAwIARgwIANAAIgaBLg");
	this.shape_1391.setTransform(77.7,-12.7);

	this.shape_1392 = new cjs.Shape();
	this.shape_1392.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgJAAIAAgKIAVAAIAABIgAAAgkQgDgCABgDQgBgDADgDQACgCADAAQADAAACACQADADAAADQAAADgDACQgCACgDAAQgDAAgCgCg");
	this.shape_1392.setTransform(47.5,-14.1);

	this.shape_1393 = new cjs.Shape();
	this.shape_1393.graphics.f("#FFFFFF").s().p("AAWAmIgWgyIgVAyIgDAAIgahLIAOAAIAPAwIAUgwIADAAIAUAwIARgwIAMAAIgaBLg");
	this.shape_1393.setTransform(40.5,-12.7);

	this.shape_1394 = new cjs.Shape();
	this.shape_1394.graphics.f("#FFFFFF").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJALQgIAKgQAAQgOAAgJgKgAgNgTQgGAHAAAMQABAcASAAQAJgBAFgHQAGgHAAgNQAAgagUAAQgIAAgFAHg");
	this.shape_1394.setTransform(-113.7,-12.7);

	this.shape_1395 = new cjs.Shape();
	this.shape_1395.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgPAAgJgKgAgNgTQgFAHAAAMQgBAcATAAQAJgBAGgHQAEgHAAgNQAAgagTAAQgIAAgFAHg");
	this.shape_1395.setTransform(-157.4,-12.7);

	this.shape_1396 = new cjs.Shape();
	this.shape_1396.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAIgHAKgBQAPAAAIAKQAJAKAAASQAAAQgJALQgIALgQAAQgEgBgGgCQgGgBgBgCIAAAhgAgMglQgEABgCACIAAAqIAFAEIAIABQAYAAAAgaQgBgOgGgGQgFgHgMAAIgHADg");
	this.shape_1396.setTransform(-178.1,-11.4);

	this.shape_1397 = new cjs.Shape();
	this.shape_1397.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgPAAgJgKgAgNgTQgFAHAAAMQgBAcATAAQAJgBAGgHQAEgHAAgNQAAgagTAAQgIAAgFAHg");
	this.shape_1397.setTransform(-273.1,-12.7);

	this.shape_1398 = new cjs.Shape();
	this.shape_1398.graphics.f("#FFFFFF").s().p("AgdAzIAAgDIAegwQAKgOAAgKQAAgPgPAAQgGAAgEAEQgFADgCAEIgJgHQADgHAGgEQAHgEAJAAQAOAAAIAHQAJAHAAAMQgBALgKAQIgWAjIAmAAIAAANg");
	this.shape_1398.setTransform(-324.5,-14.2);

	this.shape_1399 = new cjs.Shape();
	this.shape_1399.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgLAAIAAgLIAWAAIAABIgAAAgjQgDgDAAgEQAAgCADgDQABgCADgBQAEABACACQACADAAACQAAAEgCADQgCACgEAAQgDAAgBgCg");
	this.shape_1399.setTransform(-262,-50.6);

	this.shape_1400 = new cjs.Shape();
	this.shape_1400.graphics.f("#FFFFFF").s().p("AAWAyIAAgxIgrAAIAAAxIgOAAIAAhjIAOAAIAAAoIArAAIAAgoIANAAIAABjg");
	this.shape_1400.setTransform(-268.4,-50.6);

	this.shape_1401 = new cjs.Shape();
	this.shape_1401.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgJALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJABAFgIQAGgIgBgMQABgbgUAAQgIAAgFAIg");
	this.shape_1401.setTransform(-280.9,-49.2);

	this.shape_1402 = new cjs.Shape();
	this.shape_1402.graphics.f("#FFFFFF").s().p("AAWAlIgWgwIgUAwIgEAAIgahKIAOAAIAQAvIATgvIACAAIAVAvIAQgvIANAAIgaBKg");
	this.shape_1402.setTransform(77.1,-85.7);

	this.shape_1403 = new cjs.Shape();
	this.shape_1403.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgHALgBQAOAAAKAKQAIAKAAASQAAAQgIALQgKALgPgBQgFAAgFgCQgFgBgCgCIAAAggAgLgmQgEACgDADIAAApIAGAEIAHABQAXABAAgbQAAgOgFgGQgGgGgMgBIgGACg");
	this.shape_1403.setTransform(-74,-84.4);

	this.shape_1404 = new cjs.Shape();
	this.shape_1404.graphics.f("#FFFFFF").s().p("AgNA0IAAg+IgKAAIAAgKIAKAAQAAgOAHgJQAHgHALgBQAFAAAHADIgEAJIgHgCQgGAAgEAFQgDAFAAAGIAAAFIAOAAIAAAKIgOAAIAAA+g");
	this.shape_1404.setTransform(-313.4,-87.2);

	this.shape_1405 = new cjs.Shape();
	this.shape_1405.graphics.f("#FFFFFF").s().p("AAWAmIgWgyIgUAyIgEAAIgahLIAOAAIAQAwIATgwIACAAIAVAwIARgwIAMAAIgaBLg");
	this.shape_1405.setTransform(189.7,-103.9);

	this.shape_1406 = new cjs.Shape();
	this.shape_1406.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgKALgPAAQgOAAgKgLgAgNgTQgFAHAAAMQgBAbATAAQAJAAAGgHQAEgIAAgMQAAgagTAAQgIAAgFAHg");
	this.shape_1406.setTransform(134.3,-104);

	this.shape_1407 = new cjs.Shape();
	this.shape_1407.graphics.f("#FFFFFF").s().p("AgNAzIAAg9IgKAAIAAgKIAKAAQABgOAGgJQAHgHALAAQAGAAAGACIgEAJIgHgBQgGgBgEAFQgDAFAAAGIAAAFIAPAAIAAAKIgPAAIAAA9g");
	this.shape_1407.setTransform(128.2,-105.5);

	this.shape_1408 = new cjs.Shape();
	this.shape_1408.graphics.f("#FFFFFF").s().p("AARAzIgWgkIgMALIAAAZIgNAAIAAhlIANAAIAAA/IAbghIAQAAIgYAaIAdAtg");
	this.shape_1408.setTransform(85.5,-105.5);

	this.shape_1409 = new cjs.Shape();
	this.shape_1409.graphics.f("#FFFFFF").s().p("AAQAzIAAgtQAAgIgEgFQgEgEgHAAQgEAAgFACQgFADgCAEIAAA1IgNAAIAAhlIANAAIAAAmQADgFAFgDQAGgCAFAAQAMAAAHAIQAGAHAAANIAAAtg");
	this.shape_1409.setTransform(48.7,-105.5);

	this.shape_1410 = new cjs.Shape();
	this.shape_1410.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgKIAXAAIAABHgAAAgkQgCgCgBgDQABgEACgCQABgDADABQAEgBADADQABACABAEQgBADgBACQgDACgEABQgDgBgBgCg");
	this.shape_1410.setTransform(30.3,-105.4);

	this.shape_1411 = new cjs.Shape();
	this.shape_1411.graphics.f("#FFFFFF").s().p("AAVAmIgVgyIgVAyIgDAAIgahLIAOAAIAPAwIAUgwIACAAIAUAwIARgwIANAAIgaBLg");
	this.shape_1411.setTransform(23.3,-103.9);

	this.shape_1412 = new cjs.Shape();
	this.shape_1412.graphics.f("#FFFFFF").s().p("AAUAkQgEgCgCgGQgIAKgPAAQgJAAgGgHQgGgFAAgKQAAgLAJgGQAKgJAOABQAEAAAGABQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAHAAAQIAAAZQAAAKAFADIAAAHQgIAAgDgCgAgLAEQgGAFAAAHQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_1412.setTransform(-65.3,-104);

	this.shape_1413 = new cjs.Shape();
	this.shape_1413.graphics.f("#FFFFFF").s().p("AgLARQALgJAAgHQAAgDgBgDQgGgCAAgGQAAgDADgCQADgDADAAQAEAAADAEQACADAAAEQAAAJgDAGQgEAIgLAJg");
	this.shape_1413.setTransform(-107.8,-100);

	this.shape_1414 = new cjs.Shape();
	this.shape_1414.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgJALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJAAAGgHQAEgIAAgMQABgagUAAQgIAAgFAHg");
	this.shape_1414.setTransform(-222.3,-104);

	this.shape_1415 = new cjs.Shape();
	this.shape_1415.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIAKQgJALgQAAQgPAAgJgLgAgNgTQgGAHABAMQAAAbASAAQAJAAAGgHQAEgIAAgMQABgagUAAQgIAAgFAHg");
	this.shape_1415.setTransform(-281.3,-104);

	this.shape_1416 = new cjs.Shape();
	this.shape_1416.graphics.f("#FFFFFF").s().p("AgIApQgGgGAAgLIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAEAHAAQAFAAAGgCIABALQgIADgJAAQgIAAgGgHg");
	this.shape_1416.setTransform(-287.7,-104.9);

	this.shape_1417 = new cjs.Shape();
	this.shape_1417.graphics.f("#FFFFFF").s().p("AARAzIgWgkIgMALIAAAZIgNAAIAAhlIANAAIAAA/IAbghIAQAAIgYAaIAdAtg");
	this.shape_1417.setTransform(-300.7,-105.5);

	this.shape_1418 = new cjs.Shape();
	this.shape_1418.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgKQAJgLAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgJALgPAAQgPAAgIgLgAgNgTQgFAHgBAMQAAAbATAAQAJAAAGgHQAEgIAAgMQAAgagTAAQgIAAgFAHg");
	this.shape_1418.setTransform(-313.8,-104);

	this.shape_1419 = new cjs.Shape();
	this.shape_1419.graphics.f("#FFFFFF").s().p("AAVAmIgVgyIgVAyIgDAAIgahLIAOAAIAPAwIAUgwIACAAIAUAwIARgwIANAAIgaBLg");
	this.shape_1419.setTransform(-322.8,-103.9);

	this.shape_1420 = new cjs.Shape();
	this.shape_1420.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgCgDgBgDQABgDACgDQABgCADgBQAEABADACQACADAAADQAAADgCADQgDACgEAAQgDAAgBgCg");
	this.shape_1420.setTransform(162.6,-123.6);

	this.shape_1421 = new cjs.Shape();
	this.shape_1421.graphics.f("#FFFFFF").s().p("AAWAmIgWgyIgVAyIgDAAIgahKIAOAAIAPAvIAUgvIADAAIAUAvIARgvIAMAAIgaBKg");
	this.shape_1421.setTransform(97.1,-122.2);

	this.shape_1422 = new cjs.Shape();
	this.shape_1422.graphics.f("#FFFFFF").s().p("AARAzIgWgkIgMALIAAAZIgNAAIAAhlIANAAIAAA/IAbgiIAQAAIgYAbIAdAtg");
	this.shape_1422.setTransform(-106.1,-123.7);

	this.shape_1423 = new cjs.Shape();
	this.shape_1423.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAFAHAAQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_1423.setTransform(-205.6,-123.2);

	this.shape_1424 = new cjs.Shape();
	this.shape_1424.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgGQAKgJAOAAQAEAAAGACQAAgRgPgBQgMABgHAGIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAALANAAQAJAAAIgJIAAgSIgJAAQgJAAgGAEg");
	this.shape_1424.setTransform(-243.5,-122.2);

	this.shape_1425 = new cjs.Shape();
	this.shape_1425.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgKIAAgoIgIAAIAAgKIAIAAIAAgPIANgGIAAAVIATAAIAAAKIgTAAIAAAkQAAAIACAEQADAFAHAAQAFAAAGgDIABAMQgIACgJAAQgIgBgGgGg");
	this.shape_1425.setTransform(-294.8,-123.2);

	this.shape_1426 = new cjs.Shape();
	this.shape_1426.graphics.f("#FFFFFF").s().p("AAWAlIgWgwIgUAwIgEAAIgahJIAOAAIAQAuIATguIACAAIAVAuIARguIAMAAIgaBJg");
	this.shape_1426.setTransform(168.6,-140.4);

	this.shape_1427 = new cjs.Shape();
	this.shape_1427.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgKAAIAAgLIAVAAIAABIgAAAgjQgCgDAAgEQAAgDACgCQACgCADgBQADABACACQACACAAADQAAAEgCADQgCABgDAAQgDAAgCgBg");
	this.shape_1427.setTransform(140,-141.9);

	this.shape_1428 = new cjs.Shape();
	this.shape_1428.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAKACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_1428.setTransform(126.4,-141.4);

	this.shape_1429 = new cjs.Shape();
	this.shape_1429.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAFgEAAgGQAAgGgBgGIgGgOIgUgyIANAAIAVA4IATg4IANAAIgeBVQgDAHgHAEQgIAFgKAAg");
	this.shape_1429.setTransform(44.8,-139.1);

	this.shape_1430 = new cjs.Shape();
	this.shape_1430.graphics.f("#FFFFFF").s().p("AgNAzIAAg9IgKAAIAAgLIAKAAQABgOAGgHQAHgJALAAQAGAAAGACIgEAKIgHgCQgGABgEAEQgDAEAAAIIAAADIAOAAIAAALIgOAAIAAA9g");
	this.shape_1430.setTransform(33.2,-142);

	this.shape_1431 = new cjs.Shape();
	this.shape_1431.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAKACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_1431.setTransform(7.2,-141.4);

	this.shape_1432 = new cjs.Shape();
	this.shape_1432.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAKACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_1432.setTransform(-44.1,-141.4);

	this.shape_1433 = new cjs.Shape();
	this.shape_1433.graphics.f("#FFFFFF").s().p("AgMAzIAAg9IgLAAIAAgLIALAAQgBgOAIgHQAFgJAMAAQAGAAAGACIgDAKIgIgCQgGABgEAEQgDAEAAAIIAAADIAPAAIAAALIgPAAIAAA9g");
	this.shape_1433.setTransform(-56.9,-142);

	this.shape_1434 = new cjs.Shape();
	this.shape_1434.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgKALgPAAQgOAAgKgLgAgNgTQgFAHgBAMQAAAbATAAQAJABAGgIQAEgHAAgNQAAgbgTAAQgIAAgFAIg");
	this.shape_1434.setTransform(-102.4,-140.5);

	this.shape_1435 = new cjs.Shape();
	this.shape_1435.graphics.f("#FFFFFF").s().p("AgNAzIAAg9IgKAAIAAgLIAKAAQABgOAGgHQAHgJALAAQAGAAAGACIgEAKIgHgCQgGABgEAEQgDAEAAAIIAAADIAPAAIAAALIgPAAIAAA9g");
	this.shape_1435.setTransform(-108.5,-142);

	this.shape_1436 = new cjs.Shape();
	this.shape_1436.graphics.f("#FFFFFF").s().p("AgMAyQgFgCgDgDIgEAHIgHAAIAAhnIANAAIAAAjQACgDAFgCQAFgCAFAAQAOAAAJALQAKAKAAAPQAAASgKALQgJAKgPAAQgFAAgFgCgAgMgKIgGAEIAAApQAAABAFADQAFACADAAQALAAAHgGQAFgHAAgPQAAgMgGgGQgHgHgKAAIgHACg");
	this.shape_1436.setTransform(-164.7,-141.9);

	this.shape_1437 = new cjs.Shape();
	this.shape_1437.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAAMANgBQAJABAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_1437.setTransform(-256.9,-140.5);

	this.shape_1438 = new cjs.Shape();
	this.shape_1438.graphics.f("#FFFFFF").s().p("AgIApQgGgHAAgJIAAgpIgIAAIAAgKIAIAAIAAgQIANgEIAAAUIATAAIAAAKIgTAAIAAAjQAAAKACADQADAFAHAAQAFgBAGgCIABAMQgIABgJAAQgIAAgGgGg");
	this.shape_1438.setTransform(-276,-141.4);

	this.shape_1439 = new cjs.Shape();
	this.shape_1439.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAJAKQAIAKAAARQAAASgIAJQgJALgQAAQgOAAgKgLgAgNgTQgFAHAAAMQAAAbASAAQAJABAGgIQAEgHAAgNQABgbgUAAQgIAAgFAIg");
	this.shape_1439.setTransform(-282.6,-140.5);

	this.shape_1440 = new cjs.Shape();
	this.shape_1440.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgIALABQAOAAAJAJQAJAKAAATQAAAPgJALQgJAKgPAAQgFAAgFgBQgGgCgBgCIAAAggAgMgmQgDACgDADIAAApIAFAEIAIACQAYgBAAgaQgBgOgFgGQgGgGgMAAIgHABg");
	this.shape_1440.setTransform(-303.3,-139.1);

	this.shape_1441 = new cjs.Shape();
	this.shape_1441.graphics.f("#FFFFFF").s().p("AAUAjQgEgCgCgFQgIAKgPAAQgJAAgGgGQgGgHAAgJQAAgLAJgHQAKgHAOgBQAEAAAGACQAAgSgPAAQgMAAgHAHIgFgLQADgDAHgCQAGgCAGAAQAPAAAHAHQAIAIAAAPIAAAZQAAAKAFAEIAAAGQgIAAgDgDgAgLAEQgGAGAAAGQAAAMANgBQAJABAIgKIAAgSIgJAAQgJAAgGAEg");
	this.shape_1441.setTransform(-311.1,-140.5);

	this.shape_1442 = new cjs.Shape();
	this.shape_1442.graphics.f("#FFFFFF").s().p("AgBAzIAAg+IgKAAIAAgKIAVAAIAABIgAAAgkQgDgCABgEQgBgDADgCQACgDADAAQADAAACADQADACAAADQAAAEgDACQgCACgDAAQgDAAgCgCg");
	this.shape_1442.setTransform(179.8,-160.1);

	this.shape_1443 = new cjs.Shape();
	this.shape_1443.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgGANQgEgDgEAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_1443.setTransform(73.5,-158.8);

	this.shape_1444 = new cjs.Shape();
	this.shape_1444.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgOAAgKgKgAgNgTQgGAHABAMQAAAcASAAQAJAAAFgIQAGgHAAgNQAAgagUAAQgIgBgFAIg");
	this.shape_1444.setTransform(66.5,-158.7);

	this.shape_1445 = new cjs.Shape();
	this.shape_1445.graphics.f("#FFFFFF").s().p("AgYAcQgIgLAAgRQAAgQAJgKQAJgLAOAAQAQAAAJAKQAIAKAAARQAAARgIALQgKAKgPAAQgOAAgKgKgAgNgTQgFAHgBAMQAAAcATAAQAJAAAGgIQAEgHAAgNQAAgagTAAQgIgBgFAIg");
	this.shape_1445.setTransform(28.5,-158.7);

	this.shape_1446 = new cjs.Shape();
	this.shape_1446.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIANAAIAAAMQAHgNANAAIAKABIgGANQgEgDgEAAQgHAAgEAGQgGAGABAJIAAApg");
	this.shape_1446.setTransform(-60.6,-158.8);

	this.shape_1447 = new cjs.Shape();
	this.shape_1447.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAMAAIAAAMQAIgNANAAIAKABIgGANQgDgDgFAAQgHAAgEAGQgFAGgBAJIAAApg");
	this.shape_1447.setTransform(-110,-158.8);

	this.shape_1448 = new cjs.Shape();
	this.shape_1448.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAIgHAKAAQAOAAAKAJQAIAKAAASQAAAQgIALQgKAKgPAAQgEAAgGgCQgGgBgBgCIAAAggAgLgmQgEACgDADIAAApIAFAEIAIABQAYABgBgbQABgOgHgGQgFgGgMgBIgGACg");
	this.shape_1448.setTransform(-211.1,-157.4);

	this.shape_1449 = new cjs.Shape();
	this.shape_1449.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIANAAIAAAGQAHgHALAAQAOAAAJAJQAJAKAAASQAAAQgJALQgJAKgPAAQgFAAgFgCQgGgBgBgCIAAAggAgMgmQgDACgDADIAAApIAFAEIAIABQAYABAAgbQgBgOgFgGQgGgGgMgBIgHACg");
	this.shape_1449.setTransform(-257.4,-157.4);

	this.shape_1450 = new cjs.Shape();
	this.shape_1450.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgJAAIAAgKIAWAAIAABIgAAAgkQgCgCgBgEQABgDACgCQACgDADAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_1450.setTransform(147.1,4.1);

	this.shape_1451 = new cjs.Shape();
	this.shape_1451.graphics.f("#FFFFFF").s().p("AgMAeIAAhRIAMAAIAABPQAAAGAEADQADADAGAAIAAAMQgYAAgBgWg");
	this.shape_1451.setTransform(143.5,4.1);

	this.shape_1452 = new cjs.Shape();
	this.shape_1452.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAFgEAAgGQAAgGgBgGIgGgOIgUgyIANAAIAVA4IAUg4IAMAAIgfBVQgCAHgHAEQgIAFgKAAg");
	this.shape_1452.setTransform(21.8,6.9);

	this.shape_1453 = new cjs.Shape();
	this.shape_1453.graphics.f("#FFFFFF").s().p("AATAzIAAggQgGAFgNAAQgOAAgIgKQgJgKAAgRQAAgRAKgKQAKgLAOABQAJgBAJAIIAEgGIAHAAIAABkgAgLggQgGAHAAAMQAAANAGAGQAGAIAKgBQAJAAAFgEIAAgrQgGgFgIgBQgKABgGAHg");
	this.shape_1453.setTransform(-239.2,6.9);

	this.shape_1454 = new cjs.Shape();
	this.shape_1454.graphics.f("#FFFFFF").s().p("AgMAzIAAg9IgLAAIAAgLIALAAQgBgOAIgHQAFgIAMAAQAGAAAGACIgDAJIgIgBQgGgBgEAFQgDAEAAAIIAAADIAOAAIAAALIgOAAIAAA9g");
	this.shape_1454.setTransform(-184.1,-32.5);

	this.shape_1455 = new cjs.Shape();
	this.shape_1455.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgJAAIAAgLIAVAAIAABIgAAAgkQgDgCABgDQAAgDACgDQACgDADABQADgBACADQADADAAADQAAADgDACQgCADgDAAQgDAAgCgDg");
	this.shape_1455.setTransform(-271.5,-32.4);

	this.shape_1456 = new cjs.Shape();
	this.shape_1456.graphics.f("#FFFFFF").s().p("AgdAzIAAgDIAegwQAKgOAAgLQAAgNgPAAQgGAAgEADQgFADgCAEIgJgHQADgHAGgEQAHgEAJAAQAOAAAIAHQAJAGAAAMQgBAMgKAQIgWAjIAmAAIAAANg");
	this.shape_1456.setTransform(-324.5,-32.4);

	this.shape_1457 = new cjs.Shape();
	this.shape_1457.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIAagBQAOAAAIAHQAIAGAAAMQAAAHgFAGQgFAFgGACQAMADAFAFQAGAHAAALQAAAOgKAIQgKAHgOABgAgRAnIAKAAQAMABAGgFQAGgFAAgLQAAgKgFgEQgGgEgMgBIgLAAgAgRglIAAAcIAKABQATgBAAgQQAAgNgRAAg");
	this.shape_1457.setTransform(-29.6,-68.9);

	this.shape_1458 = new cjs.Shape();
	this.shape_1458.graphics.f("#FFFFFF").s().p("AgiAzIAAhkIAZgBQATAAANAOQAMAMAAAWQAAA1gxAAgAgUgkIAABJIALABQANAAAIgLQAIgLAAgRQAAgkgeAAg");
	this.shape_1458.setTransform(-306.8,-68.9);

	this.shape_1459 = new cjs.Shape();
	this.shape_1459.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgLAAIAAgKIAWAAIAABHgAAAgkQgDgCAAgDQAAgEADgCQABgDADABQAEgBACADQACACAAAEQAAADgCACQgCACgEABQgDgBgBgCg");
	this.shape_1459.setTransform(-119.4,-105.4);

	this.shape_1460 = new cjs.Shape();
	this.shape_1460.graphics.f("#FFFFFF").s().p("AgKARQAKgJAAgIQAAgBgBgEQgGgDAAgEQAAgEADgCQADgDADAAQAEAAADADQACADAAAFQAAAJgDAHQgEAGgLAKg");
	this.shape_1460.setTransform(156.3,-118.3);

	this.shape_1461 = new cjs.Shape();
	this.shape_1461.graphics.f("#FFFFFF").s().p("AgUAcQgJgKAAgSQAAgQAKgLQAKgKARAAQAFAAAHACQAHACADADIgHAKIgHgFIgKgBQgJAAgGAHQgHAIAAALQAAANAHAHQAGAHAKAAQAJAAAJgHIAFALQgKAHgQAAQgOAAgKgKg");
	this.shape_1461.setTransform(124.4,-122.2);

	this.shape_1462 = new cjs.Shape();
	this.shape_1462.graphics.f("#FFFFFF").s().p("AgMAzIAAg9IgLAAIAAgLIALAAQgBgOAIgHQAFgJAMABQAGAAAGABIgDAKIgIgBQgGAAgEAEQgDAEAAAIIAAADIAPAAIAAALIgPAAIAAA9g");
	this.shape_1462.setTransform(48.9,-123.7);

	this.shape_1463 = new cjs.Shape();
	this.shape_1463.graphics.f("#FFFFFF").s().p("AgBAyIAAg9IgLAAIAAgLIAWAAIAABIgAAAgjQgDgDAAgDQAAgDADgDQABgCADgBQAEABACACQACADAAADQAAADgCADQgCACgEAAQgDAAgBgCg");
	this.shape_1463.setTransform(-100,-123.6);

	this.shape_1464 = new cjs.Shape();
	this.shape_1464.graphics.f("#FFFFFF").s().p("AgMAzIAAg9IgLAAIAAgLIALAAQAAgOAGgHQAHgJALABQAFAAAHABIgEAKIgHgBQgGAAgEAEQgDAEAAAIIAAADIAPAAIAAALIgPAAIAAA9g");
	this.shape_1464.setTransform(-152.5,-123.7);

	this.shape_1465 = new cjs.Shape();
	this.shape_1465.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAARgJAKQgIALgQAAQgOAAgKgLgAgNgTQgGAHABAMQAAAbASAAQAJAAAFgHQAGgIAAgMQAAgbgUAAQgIABgFAHg");
	this.shape_1465.setTransform(-159.1,-122.2);

	this.shape_1466 = new cjs.Shape();
	this.shape_1466.graphics.f("#FFFFFF").s().p("AgfA0IAAhlIANAAIAAAGQAHgIALAAQAOAAAKAKQAIAKAAATQAAAPgIALQgJALgQAAQgEAAgGgCQgFgCgCgCIAAAhgAgLglQgFABgCACIAAAqIAGAEIAHACQAYAAgBgbQAAgOgFgGQgGgHgMABIgGACg");
	this.shape_1466.setTransform(-308.5,-120.9);

	this.shape_1467 = new cjs.Shape();
	this.shape_1467.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgIALgQAAQgPAAgIgLgAgNgTQgGAHAAAMQABAbASAAQAJABAFgIQAFgHABgNQgBgbgTAAQgIAAgFAIg");
	this.shape_1467.setTransform(116.1,-140.5);

	this.shape_1468 = new cjs.Shape();
	this.shape_1468.graphics.f("#FFFFFF").s().p("AARAzIgWgkIgMAMIAAAYIgNAAIAAhmIANAAIAAA/IAbghIAQAAIgYAbIAdAtg");
	this.shape_1468.setTransform(76,-142);

	this.shape_1469 = new cjs.Shape();
	this.shape_1469.graphics.f("#FFFFFF").s().p("AgXAbQgJgKAAgRQAAgQAJgLQAJgKAOAAQAQAAAIAKQAJAKAAARQAAASgJAJQgJALgPAAQgPAAgIgLgAgNgTQgFAHgBAMQAAAbATAAQAJABAFgIQAFgHABgNQgBgbgTAAQgIAAgFAIg");
	this.shape_1469.setTransform(-32.9,-140.5);

	this.shape_1470 = new cjs.Shape();
	this.shape_1470.graphics.f("#FFFFFF").s().p("AgCAyIAAg9IgKAAIAAgLIAXAAIAABIgAAAgjQgCgDgBgEQABgDACgCQACgCADgBQADABADACQACACAAADQAAAEgCADQgDABgDAAQgDAAgCgBg");
	this.shape_1470.setTransform(-69.4,-141.9);

	this.shape_1471 = new cjs.Shape();
	this.shape_1471.graphics.f("#FFFFFF").s().p("AARA0IgWglIgMAMIAAAZIgNAAIAAhnIANAAIAAA/IAbggIAQAAIgYAaIAdAug");
	this.shape_1471.setTransform(145.1,-160.2);

	this.shape_1472 = new cjs.Shape();
	this.shape_1472.graphics.f("#FFFFFF").s().p("AgNA0IAAg+IgKAAIAAgKIAKAAQAAgOAIgJQAFgHAMgBQAGAAAGACIgDAKIgIgCQgGAAgEAFQgDAFAAAGIAAAFIAOAAIAAAKIgOAAIAAA+g");
	this.shape_1472.setTransform(28.8,-160.2);

	this.shape_1473 = new cjs.Shape();
	this.shape_1473.graphics.f("#FFFFFF").s().p("AgZAnQAIAAAGgDQAGgEgBgGQAAgGgCgGIgFgOIgUgyIAOAAIAUA4IATg4IAOAAIggBVQgCAHgHAEQgIAFgKAAg");
	this.shape_1473.setTransform(-44,-157.3);

	this.shape_1474 = new cjs.Shape();
	this.shape_1474.graphics.f("#FFFFFF").s().p("AAVAlIgVgwIgVAwIgDAAIgahKIAOAAIAPAvIAUgvIADAAIATAvIARgvIANAAIgaBKg");
	this.shape_1474.setTransform(-61,-158.7);

	this.shape_1475 = new cjs.Shape();
	this.shape_1475.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCgBgEQABgDACgCQABgDADAAQAEAAADADQABACAAADQAAAEgBACQgDACgEAAQgDAAgBgCg");
	this.shape_1475.setTransform(-201.5,-160.1);

	this.shape_1476 = new cjs.Shape();
	this.shape_1476.graphics.f("#FFFFFF").s().p("AgCAzIAAg+IgKAAIAAgKIAXAAIAABIgAAAgkQgCgCgBgEQABgDACgCQABgDADAAQAEAAADADQABACAAADQAAAEgBACQgDACgEAAQgDAAgBgCg");
	this.shape_1476.setTransform(-244.2,-160.1);

	this.shape_1477 = new cjs.Shape();
	this.shape_1477.graphics.f("#000000").s().p("AA0CGIhGhyIgmgCIAAB0IgkAAIAAkIIAcgBIAmgCQBeAAAABMQAAAZgPAUQgQATgVAFIBNB6gAg4hhIAABWIAZABQAgAAAOgKQAPgLAAgaQAAgXgQgJQgPgKgiAAg");
	this.shape_1477.setTransform(147.2,95.7);

	this.shape_1478 = new cjs.Shape();
	this.shape_1478.graphics.f("#000000").s().p("AhOCEIAAkHICdAAIAAAgIh5AAIAABKIBWAAIAAAdIhWAAIAABgIB3AAIAAAgg");
	this.shape_1478.setTransform(125.8,95.8);

	this.shape_1479 = new cjs.Shape();
	this.shape_1479.graphics.f("#000000").s().p("AgTCEIAAjnIhUAAIAAggIDPAAIAAAgIhYAAIAADng");
	this.shape_1479.setTransform(104.5,95.8);

	this.shape_1480 = new cjs.Shape();
	this.shape_1480.graphics.f("#000000").s().p("AhRCEIAAkHICjAAIAAAgIh/AAIAABKIBdAAIAAAdIhdAAIAACAg");
	this.shape_1480.setTransform(85.2,95.8);

	this.shape_1481 = new cjs.Shape();
	this.shape_1481.graphics.f("#000000").s().p("ABECGIgSg4IhiAAIgTA4IgpAAIBskLIAJAAIBkELgAAoA0Iglh0IgpB0IBOAAg");
	this.shape_1481.setTransform(63.5,95.6);

	this.shape_1482 = new cjs.Shape();
	this.shape_1482.graphics.f("#000000").s().p("AhOCEIAAkHICdAAIAAAgIh5AAIAABKIBWAAIAAAdIhWAAIAABgIB3AAIAAAgg");
	this.shape_1482.setTransform(-157.3,95.9);

	this.shape_1483 = new cjs.Shape();
	this.shape_1483.graphics.f("#000000").s().p("AA0CGIhGhyIgmgCIAAB0IgkAAIAAkIIAcgBIAmgCQBeAAAABMQAAAZgPAUQgQATgVAFIBNB6gAg4hhIAABWIAZABQAgAAAOgKQAPgLAAgaQAAgXgQgJQgPgKgiAAg");
	this.shape_1483.setTransform(-177.2,95.8);

	this.shape_1484 = new cjs.Shape();
	this.shape_1484.graphics.f("#000000").s().p("AhRBiQgcgnAAg8QAAg5AdgnQAcgnAxAAQA2AAAeAkQAdAjAABAQAABAgdAlQgeAlg2AAQgyAAgcgngAg2hMQgRAcAAAvQAAAtASAeQASAfAgAAQAkAAAUgcQATgdAAgxQAAhmhLgBQghAAgSAcg");
	this.shape_1484.setTransform(-201.9,95.9);

	this.shape_1485 = new cjs.Shape();
	this.shape_1485.graphics.f("#000000").s().p("AhRCEIAAkHICjAAIAAAgIh/AAIAABKIBdAAIAAAdIhdAAIAACAg");
	this.shape_1485.setTransform(-222.9,95.9);

	this.shape_1486 = new cjs.Shape();
	this.shape_1486.graphics.f("#000000").s().p("AhOCEIAAkHICdAAIAAAgIh5AAIAABKIBWAAIAAAdIhWAAIAABgIB3AAIAAAgg");
	this.shape_1486.setTransform(-242.9,95.9);

	this.shape_1487 = new cjs.Shape();
	this.shape_1487.graphics.f("#000000").s().p("AhTCGIAAkIIBGgDQAmABAWARQAVAQAAAfQAAATgOAPQgNAPgRAEQAfAIAOAQQAPASAAAeQAAAjgZAUQgaAWgpAAgAgvACIAABlIAdACQAgAAARgNQAPgNAAgbQAAgagPgNQgPgMgiAAgAgvhlIAABMIAcABQAzAAAAgqQgBglgtAAg");
	this.shape_1487.setTransform(-263.3,95.8);

	this.instance_4 = new lib.faceGood();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-20,-132,0.356,0.356);

	this.instance_5 = new lib.faceBad();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-330,-132,0.355,0.355);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_785,p:{x:-323.8,y:-160.1}},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782,p:{x:-302.9,y:-159.7}},{t:this.shape_781,p:{x:-296.4}},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778,p:{x:-275.7}},{t:this.shape_777},{t:this.shape_776,p:{x:-253.1,y:-157.4}},{t:this.shape_775,p:{x:-246.2,y:-158.8}},{t:this.shape_774},{t:this.shape_773,p:{x:-233.2,y:-158.7}},{t:this.shape_772,p:{x:-227.9,y:-160.1}},{t:this.shape_771},{t:this.shape_770,p:{x:-214.2,y:-158.7}},{t:this.shape_769},{t:this.shape_768,p:{x:-194,y:-158.7}},{t:this.shape_767},{t:this.shape_766,p:{x:-180.8,y:-158.7}},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763,p:{x:-153.8,y:-158.7}},{t:this.shape_762},{t:this.shape_761,p:{x:-141.8,y:-159.7}},{t:this.shape_760},{t:this.shape_759,p:{x:-120.9,y:-158.7}},{t:this.shape_758},{t:this.shape_757,p:{x:-95.2,y:-157.3}},{t:this.shape_756,p:{x:-88.5,y:-158.8}},{t:this.shape_755,p:{x:-84.5,y:-160.1}},{t:this.shape_754,p:{x:-78.7,y:-158.7}},{t:this.shape_753},{t:this.shape_752,p:{x:-56.6}},{t:this.shape_751},{t:this.shape_750,p:{x:-37.9,y:-159.7}},{t:this.shape_749,p:{x:-31.4,y:-158.7}},{t:this.shape_748,p:{x:-23.9,y:-158.7}},{t:this.shape_747},{t:this.shape_746,p:{x:-13.3}},{t:this.shape_745,p:{x:-0.6,y:-159.7}},{t:this.shape_744,p:{x:5.9,y:-160.2}},{t:this.shape_743,p:{x:13.3,y:-158.7}},{t:this.shape_742,p:{x:19.9,y:-159.7}},{t:this.shape_741,p:{x:35.3,y:-158.8}},{t:this.shape_740,p:{x:44.8,y:-158.7}},{t:this.shape_739,p:{x:52.4}},{t:this.shape_738,p:{x:59.3,y:-158.7}},{t:this.shape_737,p:{x:72.9,y:-159.7}},{t:this.shape_736,p:{x:79.4,y:-160.2}},{t:this.shape_735,p:{x:87,y:-158.7}},{t:this.shape_734},{t:this.shape_733,p:{x:107,y:-158.7}},{t:this.shape_732,p:{x:113.6,y:-159.7}},{t:this.shape_731,p:{x:120.1}},{t:this.shape_730,p:{x:127.6,y:-158.7}},{t:this.shape_729},{t:this.shape_728,p:{x:142.1,y:-160.2}},{t:this.shape_727,p:{x:147.7}},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724,p:{x:175.5,y:-157.4}},{t:this.shape_723,p:{x:182.4,y:-158.8}},{t:this.shape_722},{t:this.shape_721,p:{x:195.5,y:-158.7}},{t:this.shape_720,p:{x:202.8,y:-158.7}},{t:this.shape_719,p:{x:209.4}},{t:this.shape_718,p:{x:215}},{t:this.shape_717,p:{x:-325.2}},{t:this.shape_716},{t:this.shape_715,p:{x:-312.6,y:-140.6}},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712,p:{x:-291.1,y:-140.5}},{t:this.shape_711,p:{x:-279}},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706,p:{x:-240.9}},{t:this.shape_705,p:{x:-234.4,y:-140.4}},{t:this.shape_704},{t:this.shape_703,p:{x:-223.8}},{t:this.shape_702,p:{x:-219.3,y:-141.9}},{t:this.shape_701,p:{x:-213.8,y:-140.4}},{t:this.shape_700,p:{x:-206.5,y:-140.5}},{t:this.shape_699,p:{x:-200.3,y:-137.7}},{t:this.shape_698},{t:this.shape_697,p:{x:-181.9,y:-140.5}},{t:this.shape_696},{t:this.shape_695,p:{x:-169.9,y:-140.5}},{t:this.shape_694,p:{x:-163.4}},{t:this.shape_693,p:{x:-156.8,y:-141.4}},{t:this.shape_692,p:{x:-152.3}},{t:this.shape_691},{t:this.shape_690,p:{x:-142.3,y:-140.5}},{t:this.shape_689,p:{x:-131,y:-141.4}},{t:this.shape_688,p:{x:-124.5}},{t:this.shape_687,p:{x:-117,y:-140.5}},{t:this.shape_686},{t:this.shape_685,p:{x:-106.4,y:-140.5}},{t:this.shape_684,p:{x:-96.1,y:-140.5}},{t:this.shape_683,p:{x:-89.4,y:-140.4}},{t:this.shape_682,p:{x:-82.2}},{t:this.shape_681,p:{x:-74.9,y:-142}},{t:this.shape_680,p:{x:-62.8}},{t:this.shape_679,p:{x:-56.3,y:-140.5}},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668,p:{x:38.7,y:-140.5}},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653,p:{x:158.9,y:-140.5}},{t:this.shape_652,p:{x:166,y:-140.5}},{t:this.shape_651},{t:this.shape_650,p:{x:185.7,y:-140.5}},{t:this.shape_649,p:{x:193.2,y:-140.5}},{t:this.shape_648,p:{x:199.7,y:-140.5}},{t:this.shape_647,p:{x:204.3}},{t:this.shape_646,p:{x:208.8,y:-141.9}},{t:this.shape_645,p:{x:214,y:-139.1}},{t:this.shape_644,p:{x:-324.3}},{t:this.shape_643,p:{x:-317.8,y:-122.2}},{t:this.shape_642,p:{x:-312.2,y:-122.2}},{t:this.shape_641},{t:this.shape_640,p:{x:-302.6,y:-122.2}},{t:this.shape_639,p:{x:-296.9,y:-123.2}},{t:this.shape_638,p:{x:-287.1,y:-123.2}},{t:this.shape_637,p:{x:-280.6,y:-123.7}},{t:this.shape_636,p:{x:-273,y:-122.2}},{t:this.shape_635,p:{x:-260.9,y:-120.9}},{t:this.shape_634,p:{x:-253.5,y:-123.7}},{t:this.shape_633,p:{x:-245.9}},{t:this.shape_632,p:{x:-239.3,y:-123.2}},{t:this.shape_631,p:{x:-232.9}},{t:this.shape_630,p:{x:-221.1,y:-122.2}},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627,p:{x:-202.8,y:-123.2}},{t:this.shape_626,p:{x:-196.3,y:-122.2}},{t:this.shape_625,p:{x:-189.3,y:-122.3}},{t:this.shape_624,p:{x:-181.2,y:-123.6}},{t:this.shape_623},{t:this.shape_622,p:{x:-163.6}},{t:this.shape_621,p:{x:-156.4,y:-122.2}},{t:this.shape_620,p:{x:-149.2,y:-123.7}},{t:this.shape_619,p:{x:-143.6,y:-123.6}},{t:this.shape_618,p:{x:-137.6,y:-122.2}},{t:this.shape_617,p:{x:-130.4,y:-122.2}},{t:this.shape_616,p:{x:-125.2,y:-123.6}},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613,p:{x:-100.4,y:-123.7}},{t:this.shape_612,p:{x:-94.8,y:-123.6}},{t:this.shape_611,p:{x:-89.9,y:-122.2}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608,p:{x:-64.7}},{t:this.shape_607,p:{x:-58.7,y:-123.7}},{t:this.shape_606,p:{x:-54.1,y:-122.2}},{t:this.shape_605,p:{x:-48.8,y:-119.5}},{t:this.shape_604},{t:this.shape_603,p:{x:-315.1,y:-85.7}},{t:this.shape_602,p:{x:-306.1}},{t:this.shape_601,p:{x:-297.1}},{t:this.shape_600,p:{x:-289.9,y:-85.7}},{t:this.shape_599,p:{x:-282.7}},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596,p:{x:-262.2}},{t:this.shape_595,p:{x:-254.6,y:-85.7}},{t:this.shape_594,p:{x:-245.7,y:-85.7}},{t:this.shape_593},{t:this.shape_592,p:{x:-220.7,y:-85.7}},{t:this.shape_591},{t:this.shape_590,p:{x:-206.2}},{t:this.shape_589,p:{x:-194.7,y:-85.8}},{t:this.shape_588,p:{x:-188.8}},{t:this.shape_587,p:{x:-182.1,y:-86.7}},{t:this.shape_586,p:{x:-175.7,y:-85.7}},{t:this.shape_585,p:{x:-168.1,y:-85.7}},{t:this.shape_584},{t:this.shape_583,p:{x:-153.6,y:-87.2}},{t:this.shape_582,p:{x:-148,y:-87.1}},{t:this.shape_581},{t:this.shape_580,p:{x:-134.7,y:-84.6}},{t:this.shape_579,p:{x:-123.2,y:-85.7}},{t:this.shape_578},{t:this.shape_577,p:{x:-103.7}},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574,p:{x:-85.4,y:-86.7}},{t:this.shape_573,p:{x:-78.9,y:-85.7}},{t:this.shape_572,p:{x:-71.9,y:-85.8}},{t:this.shape_571,p:{x:-62.6,y:-85.7}},{t:this.shape_570,p:{x:-55.9,y:-87.2}},{t:this.shape_569,p:{x:-48.4,y:-85.7}},{t:this.shape_568,p:{x:-40.8,y:-85.7}},{t:this.shape_567,p:{x:-34.7,y:-87.2}},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564,p:{x:-9.3,y:-85.7}},{t:this.shape_563},{t:this.shape_562,p:{x:10.4,y:-85.7}},{t:this.shape_561,p:{x:18.3,y:-84.4}},{t:this.shape_560,p:{x:25.8,y:-85.7}},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557,p:{x:47.7,y:-85.7}},{t:this.shape_556,p:{x:58.7,y:-85.7}},{t:this.shape_555,p:{x:66.3,y:-85.8}},{t:this.shape_554,p:{x:77.3,y:-86.7}},{t:this.shape_553,p:{x:83.8,y:-87.2}},{t:this.shape_552,p:{x:91.4,y:-85.7}},{t:this.shape_551,p:{x:101.4}},{t:this.shape_550},{t:this.shape_549,p:{x:118.8,y:-85.7}},{t:this.shape_548,p:{x:126.1,y:-84.6}},{t:this.shape_547,p:{x:133.3,y:-85.7}},{t:this.shape_546,p:{x:145.3,y:-87.2}},{t:this.shape_545,p:{x:152.9,y:-85.7}},{t:this.shape_544,p:{x:157.8,y:-90.8}},{t:this.shape_543,p:{x:161.7,y:-85.7}},{t:this.shape_542,p:{x:174.2,y:-85.7}},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539,p:{x:196.2}},{t:this.shape_538,p:{x:201.1}},{t:this.shape_537,p:{x:207.1,y:-85.8}},{t:this.shape_536,p:{x:214.4,y:-84.6}},{t:this.shape_535,p:{x:-324.2}},{t:this.shape_534,p:{x:-316.7,y:-67.6}},{t:this.shape_533,p:{x:-301.1,y:-67.5}},{t:this.shape_532,p:{x:-293.6,y:-67.6}},{t:this.shape_531},{t:this.shape_530,p:{x:-270.1,y:-69}},{t:this.shape_529,p:{x:-264.5,y:-68.9}},{t:this.shape_528,p:{x:-259.5,y:-67.5}},{t:this.shape_527,p:{x:-245.7,y:-67.5}},{t:this.shape_526},{t:this.shape_525,p:{x:-231.3,y:-67.5}},{t:this.shape_524},{t:this.shape_523,p:{x:-218.8,y:-68.9}},{t:this.shape_522,p:{x:-213.8}},{t:this.shape_521,p:{x:-209.7,y:-68.9}},{t:this.shape_520,p:{x:-204.1,y:-67.5}},{t:this.shape_519,p:{x:-189,y:-66.3}},{t:this.shape_518},{t:this.shape_517,p:{x:-174.4,y:-67.5}},{t:this.shape_516,p:{x:-168.4,y:-68.9}},{t:this.shape_515,p:{x:-163.8,y:-67.5}},{t:this.shape_514,p:{x:-158.5,y:-64.7}},{t:this.shape_513,p:{x:-143.6,y:-68.8}},{t:this.shape_512,p:{x:-136.6,y:-67.5}},{t:this.shape_511,p:{x:-129.6,y:-67.6}},{t:this.shape_510},{t:this.shape_509,p:{x:-104.1,y:-67.5}},{t:this.shape_508,p:{x:-96.6,y:-67.6}},{t:this.shape_507,p:{x:-89.3,y:-66.1}},{t:this.shape_506,p:{x:-73.6}},{t:this.shape_505,p:{x:-68.2,y:-68.9}},{t:this.shape_504,p:{x:-62.6,y:-67.5}},{t:this.shape_503,p:{x:-56.3,y:-68.4}},{t:this.shape_502,p:{x:-49.8,y:-67.4}},{t:this.shape_501,p:{x:-42.7,y:-67.6}},{t:this.shape_500,p:{x:-36.8,y:-67.5}},{t:this.shape_499,p:{x:-30.2,y:-67.5}},{t:this.shape_498},{t:this.shape_497,p:{x:-10.3}},{t:this.shape_496,p:{x:-2.8,y:-67.6}},{t:this.shape_495,p:{x:4.8,y:-67.5}},{t:this.shape_494,p:{x:22.6,y:-67.6}},{t:this.shape_493,p:{x:32,y:-67.5}},{t:this.shape_492,p:{x:39.2,y:-66.1}},{t:this.shape_491,p:{x:54.6,y:-67.6}},{t:this.shape_490,p:{x:62.2,y:-67.5}},{t:this.shape_489,p:{x:69.8,y:-67.5}},{t:this.shape_488,p:{x:77.2,y:-68.9}},{t:this.shape_487,p:{x:93.2}},{t:this.shape_486,p:{x:100.8,y:-67.6}},{t:this.shape_485,p:{x:106.9,y:-68.9}},{t:this.shape_484,p:{x:112.1,y:-66.1}},{t:this.shape_483,p:{x:126.6,y:-68.4}},{t:this.shape_482,p:{x:133,y:-67.5}},{t:this.shape_481,p:{x:148.4,y:-67.5}},{t:this.shape_480,p:{x:155.6,y:-69}},{t:this.shape_479,p:{x:163.1,y:-67.5}},{t:this.shape_478,p:{x:170.6,y:-67.6}},{t:this.shape_477,p:{x:177.9,y:-66.3}},{t:this.shape_476,p:{x:185.2,y:-67.5}},{t:this.shape_475,p:{x:200,y:-68.4}},{t:this.shape_474,p:{x:206.5,y:-69}},{t:this.shape_473,p:{x:214.1,y:-67.5}},{t:this.shape_472,p:{x:-324.7,y:-49.3}},{t:this.shape_471},{t:this.shape_470,p:{x:-312.2,y:-49.2}},{t:this.shape_469,p:{x:-305.6,y:-49.2}},{t:this.shape_468,p:{x:-299.5,y:-50.7}},{t:this.shape_467,p:{x:-293.9,y:-49.2}},{t:this.shape_466,p:{x:-287.3}},{t:this.shape_465},{t:this.shape_464,p:{x:-276.9}},{t:this.shape_463,p:{x:-269.3,y:-49.3}},{t:this.shape_462},{t:this.shape_461,p:{x:-253.3,y:-50.7}},{t:this.shape_460,p:{x:-249.7,y:-50.6}},{t:this.shape_459,p:{x:-244,y:-48.1}},{t:this.shape_458},{t:this.shape_457,p:{x:-230.1}},{t:this.shape_456},{t:this.shape_455,p:{x:-216,y:-49.3}},{t:this.shape_454,p:{x:-204.5}},{t:this.shape_453,p:{x:-198}},{t:this.shape_452},{t:this.shape_451,p:{x:-179.9,y:-50.6}},{t:this.shape_450,p:{x:-172,y:-49.3}},{t:this.shape_449,p:{x:-162.5,y:-49.2}},{t:this.shape_448,p:{x:-155.3,y:-48.1}},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443,p:{x:-113.3,y:-49.3}},{t:this.shape_442,p:{x:-107.3}},{t:this.shape_441},{t:this.shape_440,p:{x:-92.1,y:-49.2}},{t:this.shape_439,p:{x:-86.6,y:-50.6}},{t:this.shape_438},{t:this.shape_437,p:{x:-70.6,y:-49.2}},{t:this.shape_436},{t:this.shape_435,p:{x:-48.6}},{t:this.shape_434,p:{x:-42.7,y:-49.3}},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431,p:{x:-17,y:-50.7}},{t:this.shape_430,p:{x:-11.1,y:-50.7}},{t:this.shape_429,p:{x:-5.5}},{t:this.shape_428,p:{x:4.1,y:-49.3}},{t:this.shape_427,p:{x:11.7}},{t:this.shape_426,p:{x:16.7,y:-49.2}},{t:this.shape_425,p:{x:23.3,y:-50.7}},{t:this.shape_424,p:{x:29.5,y:-46.5}},{t:this.shape_423},{t:this.shape_422,p:{x:48.1}},{t:this.shape_421,p:{x:55.1,y:-49.3}},{t:this.shape_420},{t:this.shape_419,p:{x:72.5}},{t:this.shape_418,p:{x:79,y:-50.7}},{t:this.shape_417,p:{x:86.6}},{t:this.shape_416,p:{x:93.6,y:-49.3}},{t:this.shape_415,p:{x:98.6,y:-49.2}},{t:this.shape_414},{t:this.shape_413,p:{x:114.8,y:-47.8}},{t:this.shape_412,p:{x:122}},{t:this.shape_411,p:{x:129.6,y:-49.2}},{t:this.shape_410},{t:this.shape_409,p:{x:153.5,y:-49.2}},{t:this.shape_408,p:{x:160.6}},{t:this.shape_407,p:{x:172.7,y:-49.3}},{t:this.shape_406,p:{x:180.3}},{t:this.shape_405,p:{x:187.9}},{t:this.shape_404,p:{x:195.4,y:-50.7}},{t:this.shape_403,p:{x:207.2}},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400,p:{x:-316.4,y:-31}},{t:this.shape_399,p:{x:-309.4,y:-31.1}},{t:this.shape_398},{t:this.shape_397,p:{x:-298.3,y:-31}},{t:this.shape_396,p:{x:-291.3,y:-31.1}},{t:this.shape_395},{t:this.shape_394,p:{x:-267.6,y:-31.1}},{t:this.shape_393,p:{x:-258,y:-30.9}},{t:this.shape_392,p:{x:-251.9,y:-32.4}},{t:this.shape_391,p:{x:-247.2,y:-31.9}},{t:this.shape_390},{t:this.shape_389,p:{x:-236.5,y:-29.6}},{t:this.shape_388,p:{x:-230.5,y:-32.4}},{t:this.shape_387,p:{x:-224.9,y:-31}},{t:this.shape_386,p:{x:-214.1,y:-31.9}},{t:this.shape_385,p:{x:-207.7}},{t:this.shape_384,p:{x:-201.2}},{t:this.shape_383,p:{x:-194.4,y:-32.5}},{t:this.shape_382,p:{x:-188.5}},{t:this.shape_381,p:{x:-177.8,y:-31}},{t:this.shape_380,p:{x:-170.3,y:-31.1}},{t:this.shape_379,p:{x:-162.9,y:-32.4}},{t:this.shape_378,p:{x:-150.8,y:-31}},{t:this.shape_377,p:{x:-141.2,y:-31.1}},{t:this.shape_376,p:{x:-131.3,y:-29.6}},{t:this.shape_375,p:{x:-125.3,y:-32.4}},{t:this.shape_374,p:{x:-119.8,y:-31}},{t:this.shape_373,p:{x:-112.6,y:-29.6}},{t:this.shape_372},{t:this.shape_371,p:{x:-89.6}},{t:this.shape_370,p:{x:-82.6,y:-31.1}},{t:this.shape_369,p:{x:-76.6,y:-31}},{t:this.shape_368,p:{x:-65,y:-31}},{t:this.shape_367,p:{x:-57.6,y:-32.4}},{t:this.shape_366,p:{x:-50.1,y:-30.9}},{t:this.shape_365,p:{x:-43,y:-31}},{t:this.shape_364,p:{x:-35.5,y:-31.1}},{t:this.shape_363},{t:this.shape_362,p:{x:-21,y:-31}},{t:this.shape_361,p:{x:-13.6,y:-32.4}},{t:this.shape_360,p:{x:-2.4,y:-31.9}},{t:this.shape_359,p:{x:4,y:-31}},{t:this.shape_358,p:{x:11.5,y:-31}},{t:this.shape_357,p:{x:17.6,y:-32.4}},{t:this.shape_356,p:{x:22.2,y:-31}},{t:this.shape_355,p:{x:32.9,y:-31}},{t:this.shape_354,p:{x:40.4,y:-31.1}},{t:this.shape_353,p:{x:47.8,y:-32.4}},{t:this.shape_352,p:{x:59,y:-31.9}},{t:this.shape_351,p:{x:65.5,y:-31}},{t:this.shape_350,p:{x:72.7}},{t:this.shape_349,p:{x:80,y:-32.5}},{t:this.shape_348,p:{x:87.6,y:-31.1}},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345,p:{x:106.9,y:-30.9}},{t:this.shape_344,p:{x:114.5,y:-31}},{t:this.shape_343,p:{x:121.1,y:-31}},{t:this.shape_342,p:{x:126.3,y:-28.2}},{t:this.shape_341,p:{x:-323.4,y:4.1}},{t:this.shape_340,p:{x:-316.6,y:5.5}},{t:this.shape_339,p:{x:-307,y:5.4}},{t:this.shape_338,p:{x:-297.4,y:5.5}},{t:this.shape_337,p:{x:-287.8,y:5.4}},{t:this.shape_336,p:{x:-277.9,y:4.1}},{t:this.shape_335,p:{x:-270.5,y:5.5}},{t:this.shape_334,p:{x:-263.4,y:5.4}},{t:this.shape_333,p:{x:-253.9,y:4.6}},{t:this.shape_332,p:{x:-247.4,y:4}},{t:this.shape_331,p:{x:-240,y:5.5}},{t:this.shape_330,p:{x:-233.4,y:4.6}},{t:this.shape_329,p:{x:-223,y:5.4}},{t:this.shape_328,p:{x:-217,y:5.5}},{t:this.shape_327,p:{x:-210.4,y:4.6}},{t:this.shape_326,p:{x:-203.9,y:5.5}},{t:this.shape_325,p:{x:-196.4,y:5.6}},{t:this.shape_324,p:{x:-189.1,y:5.5}},{t:this.shape_323,p:{x:-181.9,y:4}},{t:this.shape_322,p:{x:-176.3,y:4.1}},{t:this.shape_321,p:{x:-170.3,y:5.4}},{t:this.shape_320,p:{x:-163,y:6.7}},{t:this.shape_319},{t:this.shape_318,p:{x:-143.5,y:4}},{t:this.shape_317,p:{x:-135.9,y:5.5}},{t:this.shape_316,p:{x:-129.3,y:4.6}},{t:this.shape_315,p:{x:-122.9,y:5.5}},{t:this.shape_314,p:{x:-116.3,y:5.5}},{t:this.shape_313},{t:this.shape_312,p:{x:-102.2,y:5.5}},{t:this.shape_311,p:{x:-91.2,y:5.5}},{t:this.shape_310,p:{x:-79.4,y:4.1}},{t:this.shape_309,p:{x:-71.5,y:5.5}},{t:this.shape_308,p:{x:-65.4,y:4.1}},{t:this.shape_307,p:{x:-61.8,y:4.1}},{t:this.shape_306,p:{x:-56.2,y:5.5}},{t:this.shape_305,p:{x:-49.1,y:5.5}},{t:this.shape_304,p:{x:-42.5,y:4.6}},{t:this.shape_303,p:{x:-36,y:5.5}},{t:this.shape_302,p:{x:-24.1,y:5.5}},{t:this.shape_301,p:{x:-16.6,y:5.4}},{t:this.shape_300,p:{x:-9.1,y:4.1}},{t:this.shape_299},{t:this.shape_298,p:{x:7.2,y:5.4}},{t:this.shape_297,p:{x:13.9,y:4.6}},{t:this.shape_296,p:{x:19.8,y:5.4}},{t:this.shape_295},{t:this.shape_294,p:{x:29.4,y:5.5}},{t:this.shape_293,p:{x:36.5,y:5.5}},{t:this.shape_292,p:{x:43,y:4.6}},{t:this.shape_291,p:{x:49.5,y:5.5}},{t:this.shape_290,p:{x:61.9,y:6.9}},{t:this.shape_289,p:{x:68.8,y:5.4}},{t:this.shape_288,p:{x:74.7,y:5.5}},{t:this.shape_287,p:{x:81.9,y:5.5}},{t:this.shape_286,p:{x:89.2,y:5.5}},{t:this.shape_285,p:{x:95.8,y:5.5}},{t:this.shape_284,p:{x:101.4,y:5.5}},{t:this.shape_283,p:{x:106.7,y:8.3}},{t:this.shape_282,p:{x:118.6,y:4.1}},{t:this.shape_281,p:{x:127.1,y:5.4}},{t:this.shape_280,p:{x:134.7,y:5.5}},{t:this.shape_279,p:{x:145.8,y:5.5}},{t:this.shape_278,p:{x:152.4,y:4}},{t:this.shape_277,p:{x:160,y:5.5}},{t:this.shape_276,p:{x:167.5,y:5.6}},{t:this.shape_275,p:{x:173.6,y:4.1}},{t:this.shape_274,p:{x:179.1,y:4.1}},{t:this.shape_273,p:{x:192.9,y:5.6}},{t:this.shape_272,p:{x:201.8,y:5.5}},{t:this.shape_271,p:{x:208.8,y:5.4}},{t:this.shape_270,p:{x:214.9}},{t:this.shape_269,p:{x:-323.9}},{t:this.shape_268,p:{x:-316.6,y:23.8}},{t:this.shape_267,p:{x:-311.1,y:22.4}},{t:this.shape_266,p:{x:-305.1,y:23.7}},{t:this.shape_265,p:{x:-298.5}},{t:this.shape_264,p:{x:-292.8,y:22.8}},{t:this.shape_263,p:{x:-286.5,y:23.8}},{t:this.shape_262},{t:this.shape_261,p:{x:-273.9,y:22.4}},{t:this.shape_260,p:{x:-268,y:23.7}},{t:this.shape_259,p:{x:-260.6,y:24.9}},{t:this.shape_258,p:{x:-254.9,y:22.3}},{t:this.shape_257,p:{x:-249.6,y:25.2}},{t:this.shape_256,p:{x:-238.3,y:23.8}},{t:this.shape_255,p:{x:-230.8,y:23.7}},{t:this.shape_254,p:{x:-223.4,y:22.3}},{t:this.shape_253,p:{x:-211,y:25.1}},{t:this.shape_252,p:{x:-203.5}},{t:this.shape_251,p:{x:-196.5,y:23.7}},{t:this.shape_250,p:{x:-191.5}},{t:this.shape_249,p:{x:-186.9,y:22.4}},{t:this.shape_248,p:{x:-181.9}},{t:this.shape_247,p:{x:-176.2,y:22.8}},{t:this.shape_246,p:{x:-169.7}},{t:this.shape_245,p:{x:-162.1,y:23.7}},{t:this.shape_244,p:{x:-156,y:22.3}},{t:this.shape_243,p:{x:-150.8,y:25.2}},{t:this.shape_242,p:{x:-141.3,y:22.4}},{t:this.shape_241,p:{x:-135.4,y:23.7}},{t:this.shape_240,p:{x:-123.6,y:23.8}},{t:this.shape_239,p:{x:-116.6,y:23.7}},{t:this.shape_238,p:{x:-110.8,y:22.3}},{t:this.shape_237,p:{x:-102.9}},{t:this.shape_236,p:{x:-95.9,y:23.7}},{t:this.shape_235,p:{x:-86.7,y:22.8}},{t:this.shape_234,p:{x:-80.2,y:23.8}},{t:this.shape_233,p:{x:-68.6,y:23.8}},{t:this.shape_232,p:{x:-61.5}},{t:this.shape_231,p:{x:-54.6}},{t:this.shape_230,p:{x:-47.4,y:23.8}},{t:this.shape_229,p:{x:-37.8,y:23.7}},{t:this.shape_228},{t:this.shape_227,p:{x:-22,y:22.3}},{t:this.shape_226,p:{x:-18.4,y:22.4}},{t:this.shape_225,p:{x:-13.4}},{t:this.shape_224,p:{x:-6.8}},{t:this.shape_223,p:{x:4.9,y:23.8}},{t:this.shape_222,p:{x:16.4,y:22.3}},{t:this.shape_221,p:{x:24.3}},{t:this.shape_220,p:{x:31.6}},{t:this.shape_219,p:{x:38.8}},{t:this.shape_218,p:{x:46.4,y:23.7}},{t:this.shape_217,p:{x:53.1,y:22.8}},{t:this.shape_216,p:{x:63.2,y:23.7}},{t:this.shape_215,p:{x:69.2}},{t:this.shape_214,p:{x:75.8}},{t:this.shape_213,p:{x:82.4,y:23.8}},{t:this.shape_212,p:{x:88.5,y:22.3}},{t:this.shape_211,p:{x:93.2,y:22.8}},{t:this.shape_210,p:{x:98.3,y:26.5}},{t:this.shape_209},{t:this.shape_208,p:{x:-317.1,y:60.3}},{t:this.shape_207,p:{x:-310.5,y:59.3}},{t:this.shape_206,p:{y:55.2,x:-306.7}},{t:this.shape_205,p:{x:-302.8,y:60.3}},{t:this.shape_204,p:{x:-290.3,y:61.4}},{t:this.shape_203,p:{x:-283.1,y:60.3}},{t:this.shape_202,p:{x:-276.4,y:59.3}},{t:this.shape_201,p:{x:-264.9,y:60.3}},{t:this.shape_200,p:{x:-259.2,y:59.3}},{t:this.shape_199},{t:this.shape_198,p:{x:-245.9,y:60.2}},{t:this.shape_197,p:{x:-240.9,y:59.3}},{t:this.shape_196,p:{x:-236.4,y:58.9}},{t:this.shape_195,p:{x:-230.4,y:60.2}},{t:this.shape_194,p:{x:-223.1,y:61.4}},{t:this.shape_193,p:{x:-209.5,y:58.8}},{t:this.shape_192,p:{x:-202.4,y:61.7}},{t:this.shape_191},{t:this.shape_190,p:{x:-184.1}},{t:this.shape_189,p:{x:-174.6,y:60.2}},{t:this.shape_188},{t:this.shape_187,p:{x:-162.5,y:58.8}},{t:this.shape_186},{t:this.shape_185,p:{x:-153.1}},{t:this.shape_184,p:{x:-146.2,y:60.2}},{t:this.shape_183,p:{x:-142.2}},{t:this.shape_182},{t:this.shape_181,p:{x:-131.7}},{t:this.shape_180,p:{x:-125.7,y:60.2}},{t:this.shape_179,p:{x:-118.4,y:61.4}},{t:this.shape_178,p:{x:-105.2}},{t:this.shape_177,p:{x:-92.7,y:60.3}},{t:this.shape_176,p:{x:-86,y:60.3}},{t:this.shape_175,p:{x:-79.4,y:59.3}},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172,p:{x:-49.1,y:59.3}},{t:this.shape_171},{t:this.shape_170,p:{x:-35.1}},{t:this.shape_169,p:{x:-29.1,y:58.8}},{t:this.shape_168,p:{x:-24.5,y:60.3}},{t:this.shape_167,p:{x:-12.7,y:59.3}},{t:this.shape_166,p:{x:-6.2}},{t:this.shape_165,p:{x:1.2}},{t:this.shape_164,p:{x:7.8,y:59.3}},{t:this.shape_163,p:{x:20.2}},{t:this.shape_162,p:{x:27.1,y:60.2}},{t:this.shape_161,p:{x:33.1,y:60.3}},{t:this.shape_160,p:{x:46.7,y:60.2}},{t:this.shape_159,p:{x:54.3,y:60.3}},{t:this.shape_158,p:{x:61.6}},{t:this.shape_157,p:{x:68.8,y:60.3}},{t:this.shape_156,p:{x:75.4,y:60.3}},{t:this.shape_155,p:{x:81.1,y:60.3}},{t:this.shape_154,p:{x:87.6}},{t:this.shape_153,p:{x:94.5,y:60.2}},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150,p:{x:118.5}},{t:this.shape_149,p:{x:125.5,y:60.2}},{t:this.shape_148,p:{x:137,y:60.2}},{t:this.shape_147,p:{x:142.9,y:60.3}},{t:this.shape_146,p:{x:149.6,y:59.3}},{t:this.shape_145,p:{x:156}},{t:this.shape_144,p:{x:163.6,y:60.3}},{t:this.shape_143,p:{x:170.8}},{t:this.shape_142,p:{x:178.1}},{t:this.shape_141},{t:this.shape_140,p:{x:189.6,y:60.2}},{t:this.shape_139,p:{x:197,y:61.4}},{t:this.shape_138,p:{x:208.3}},{t:this.shape_137,p:{x:214.2,y:60.2}},{t:this.shape_136},{t:this.shape_135,p:{x:-317,y:77}},{t:this.shape_134,p:{x:-309.5,y:78.5}},{t:this.shape_133,p:{x:-302.9,y:77.6}},{t:this.shape_132,p:{x:-296.4,y:78.5}},{t:this.shape_131,p:{x:-289.9,y:78.5}},{t:this.shape_130,p:{x:-283.2,y:77}},{t:this.shape_129,p:{x:-275.7,y:78.5}},{t:this.shape_128,p:{x:-267.8,y:79.9}},{t:this.shape_127,p:{x:-261.8,y:81.3}},{t:this.shape_126},{t:this.shape_125,p:{x:-244.2,y:77.1}},{t:this.shape_124,p:{x:-240.6,y:77.1}},{t:this.shape_123,p:{x:-235,y:78.5}},{t:this.shape_122,p:{x:-227.6,y:77}},{t:this.shape_121,p:{x:-218.1,y:73.4}},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116,p:{x:-183,y:73.4}},{t:this.shape_115,p:{x:-173.7,y:77.6}},{t:this.shape_114,p:{x:-167.3,y:78.5}},{t:this.shape_113,p:{x:-155.9,y:78.5}},{t:this.shape_112,p:{x:-148.7,y:78.5}},{t:this.shape_111,p:{x:-141.1,y:78.4}},{t:this.shape_110,p:{x:-134.5,y:77.6}},{t:this.shape_109,p:{x:-130,y:77.1}},{t:this.shape_108,p:{x:-124,y:78.4}},{t:this.shape_107,p:{x:-116.4,y:78.6}},{t:this.shape_106,p:{x:-108.8,y:78.5}},{t:this.shape_105,p:{x:-97.6,y:78.4}},{t:this.shape_104,p:{x:-91.6,y:78.5}},{t:this.shape_103,p:{x:-84.2,y:78.5}},{t:this.shape_102,p:{x:-76.8,y:77.1}},{t:this.shape_101,p:{x:-70.9,y:77.1}},{t:this.shape_100,p:{x:-65,y:78.4}},{t:this.shape_99,p:{x:-57.6,y:79.7}},{t:this.shape_98,p:{x:-51.8,y:81.3}}]}).to({state:[{t:this.shape_908,p:{x:-323.9}},{t:this.shape_736,p:{x:-316.1,y:-160.2}},{t:this.shape_525,p:{x:-308.5,y:-158.7}},{t:this.shape_723,p:{x:-301.4,y:-158.8}},{t:this.shape_500,p:{x:-295.5,y:-158.7}},{t:this.shape_907,p:{x:-280.2,y:-158.7}},{t:this.shape_906},{t:this.shape_495,p:{x:-267.3,y:-158.7}},{t:this.shape_905,p:{x:-249.9,y:-158.8}},{t:this.shape_759,p:{x:-240.5,y:-158.7}},{t:this.shape_478,p:{x:-233,y:-158.8}},{t:this.shape_413,p:{x:-225.7,y:-157.3}},{t:this.shape_472,p:{x:-211.2,y:-158.8}},{t:this.shape_490,p:{x:-205.3,y:-158.7}},{t:this.shape_737,p:{x:-198.6,y:-159.7}},{t:this.shape_315,p:{x:-192.2,y:-158.7}},{t:this.shape_467,p:{x:-184.6,y:-158.7}},{t:this.shape_324,p:{x:-177.4,y:-158.7}},{t:this.shape_728,p:{x:-170.1,y:-160.2}},{t:this.shape_904,p:{x:-164.5,y:-160.1}},{t:this.shape_463,p:{x:-158.6,y:-158.8}},{t:this.shape_580,p:{x:-151.2,y:-157.6}},{t:this.shape_732,p:{x:-137.1,y:-159.7}},{t:this.shape_112,p:{x:-130.7,y:-158.7}},{t:this.shape_781,p:{x:-123.2}},{t:this.shape_388,p:{x:-117.1,y:-160.2}},{t:this.shape_499,p:{x:-112.5,y:-158.7}},{t:this.shape_754,p:{x:-98.2,y:-158.7}},{t:this.shape_903,p:{x:-91.1,y:-158.7}},{t:this.shape_743,p:{x:-84,y:-158.7}},{t:this.shape_902},{t:this.shape_607,p:{x:-74.1,y:-160.2}},{t:this.shape_740,p:{x:-68.6,y:-158.7}},{t:this.shape_901},{t:this.shape_567,p:{x:-54.9,y:-160.2}},{t:this.shape_489,p:{x:-49.3,y:-158.7}},{t:this.shape_322,p:{x:-35.9,y:-160.1}},{t:this.shape_455,p:{x:-29.9,y:-158.8}},{t:this.shape_900,p:{x:-14.2,y:-160.1}},{t:this.shape_332,p:{x:-7.4,y:-160.2}},{t:this.shape_564,p:{x:0.2,y:-158.7}},{t:this.shape_587,p:{x:6.8,y:-159.7}},{t:this.shape_899},{t:this.shape_314,p:{x:19.8,y:-158.7}},{t:this.shape_323,p:{x:26.4,y:-160.2}},{t:this.shape_556,p:{x:34,y:-158.7}},{t:this.shape_898},{t:this.shape_897,p:{x:47.8,y:-154.8}},{t:this.shape_896,p:{x:62.5,y:-160.2}},{t:this.shape_411,p:{x:69.9,y:-158.7}},{t:this.shape_574,p:{x:76.6,y:-159.7}},{t:this.shape_772,p:{x:88.9,y:-160.1}},{t:this.shape_434,p:{x:94.8,y:-158.8}},{t:this.shape_554,p:{x:109.3,y:-159.7}},{t:this.shape_318,p:{x:115.8,y:-160.2}},{t:this.shape_895},{t:this.shape_312,p:{x:126.3,y:-158.7}},{t:this.shape_333,p:{x:139.8,y:-159.7}},{t:this.shape_393,p:{x:146.3,y:-158.7}},{t:this.shape_330,p:{x:153,y:-159.7}},{t:this.shape_752,p:{x:159.4}},{t:this.shape_894,p:{x:166.4,y:-158.8}},{t:this.shape_893},{t:this.shape_331,p:{x:176.2,y:-158.7}},{t:this.shape_516,p:{x:182.2,y:-160.2}},{t:this.shape_277,p:{x:195.5,y:-158.7}},{t:this.shape_407,p:{x:203.1,y:-158.8}},{t:this.shape_357,p:{x:209.2,y:-160.2}},{t:this.shape_892,p:{x:214.4,y:-157.3}},{t:this.shape_682,p:{x:-324.5}},{t:this.shape_468,p:{x:-318.8,y:-141.9}},{t:this.shape_891,p:{x:-313.2,y:-140.5}},{t:this.shape_380,p:{x:-305.7,y:-140.6}},{t:this.shape_226,p:{x:-300.1,y:-141.9}},{t:this.shape_364,p:{x:-294.1,y:-140.6}},{t:this.shape_548,p:{x:-286.8,y:-139.3}},{t:this.shape_256,p:{x:-275.5,y:-140.5}},{t:this.shape_354,p:{x:-268,y:-140.6}},{t:this.shape_254,p:{x:-260.5,y:-141.9}},{t:this.shape_681,p:{x:-248.4,y:-142}},{t:this.shape_697,p:{x:-240.8,y:-140.5}},{t:this.shape_233,p:{x:-233.4,y:-140.5}},{t:this.shape_375,p:{x:-227.4,y:-141.9}},{t:this.shape_249,p:{x:-223.8,y:-141.9}},{t:this.shape_348,p:{x:-217.8,y:-140.6}},{t:this.shape_536,p:{x:-210.5,y:-139.3}},{t:this.shape_211,p:{x:-200,y:-141.4}},{t:this.shape_687,p:{x:-193.5,y:-140.5}},{t:this.shape_890,p:{x:-186,y:-140.5}},{t:this.shape_275,p:{x:-180,y:-141.9}},{t:this.shape_648,p:{x:-175.4,y:-140.5}},{t:this.shape_223,p:{x:-164.7,y:-140.5}},{t:this.shape_370,p:{x:-157.7,y:-140.6}},{t:this.shape_690,p:{x:-151.8,y:-140.5}},{t:this.shape_261,p:{x:-142,y:-141.9}},{t:this.shape_321,p:{x:-136,y:-140.6}},{t:this.shape_653,p:{x:-128.8,y:-140.5}},{t:this.shape_430,p:{x:-123,y:-141.9}},{t:this.shape_345,p:{x:-117.4,y:-140.4}},{t:this.shape_238,p:{x:-110,y:-141.9}},{t:this.shape_650,p:{x:-102.1,y:-140.5}},{t:this.shape_222,p:{x:-94.6,y:-141.9}},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_308,p:{x:-308,y:-105.4}},{t:this.shape_886},{t:this.shape_301,p:{x:-294.9,y:-104.1}},{t:this.shape_176,p:{x:-287.3,y:-104}},{t:this.shape_885,p:{x:-276,y:-105.4}},{t:this.shape_167,p:{x:-269.8,y:-104.9}},{t:this.shape_884,p:{x:-263.4,y:-104}},{t:this.shape_339,p:{x:-253.9,y:-104.1}},{t:this.shape_883,p:{x:-244,y:-102.6}},{t:this.shape_164,p:{x:-233.3,y:-104.9}},{t:this.shape_882,p:{x:-226.9,y:-104}},{t:this.shape_881},{t:this.shape_880,p:{x:-213.3,y:-105.4}},{t:this.shape_156,p:{x:-208.7,y:-104}},{t:this.shape_879},{t:this.shape_878,p:{x:-192.8,y:-104}},{t:this.shape_572,p:{x:-185.8,y:-104.1}},{t:this.shape_146,p:{x:-176.6,y:-104.9}},{t:this.shape_877,p:{x:-170.1}},{t:this.shape_325,p:{x:-162.6,y:-103.9}},{t:this.shape_876,p:{x:-155.3,y:-104}},{t:this.shape_875,p:{x:-148.1,y:-105.5}},{t:this.shape_874},{t:this.shape_298,p:{x:-136.5,y:-104.1}},{t:this.shape_519,p:{x:-129.2,y:-102.8}},{t:this.shape_276,p:{x:-117.7,y:-103.9}},{t:this.shape_873,p:{x:-109.8,y:-102.6}},{t:this.shape_872,p:{x:-98.3,y:-104}},{t:this.shape_511,p:{x:-91.4,y:-104.1}},{t:this.shape_161,p:{x:-85.4,y:-104}},{t:this.shape_871,p:{x:-78,y:-104}},{t:this.shape_155,p:{x:-71.5,y:-104}},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867,p:{x:-301.3,y:-68.4}},{t:this.shape_866,p:{x:-295.8,y:-68.4}},{t:this.shape_476,p:{x:-289.3,y:-67.5}},{t:this.shape_775,p:{x:-282.2,y:-67.6}},{t:this.shape_281,p:{x:-276.3,y:-67.6}},{t:this.shape_865,p:{x:-264.9,y:-68.9}},{t:this.shape_864,p:{x:-258.7,y:-68.4}},{t:this.shape_863},{t:this.shape_189,p:{x:-242.9,y:-67.6}},{t:this.shape_862,p:{x:-233}},{t:this.shape_861,p:{x:-222.3,y:-68.4}},{t:this.shape_512,p:{x:-215.8,y:-67.5}},{t:this.shape_497,p:{x:-208.3}},{t:this.shape_244,p:{x:-202.3,y:-68.9}},{t:this.shape_285,p:{x:-197.7,y:-67.5}},{t:this.shape_860,p:{x:-187.8}},{t:this.shape_487,p:{x:-181.7}},{t:this.shape_859,p:{x:-174.7,y:-67.6}},{t:this.shape_501,p:{x:-165.1,y:-67.6}},{t:this.shape_473,p:{x:-159.2,y:-67.5}},{t:this.shape_858},{t:this.shape_187,p:{x:-145.3,y:-68.9}},{t:this.shape_857},{t:this.shape_504,p:{x:-132.7,y:-67.5}},{t:this.shape_523,p:{x:-127.5,y:-68.9}},{t:this.shape_266,p:{x:-121.5,y:-67.6}},{t:this.shape_477,p:{x:-114.2,y:-66.3}},{t:this.shape_506,p:{x:-102.4}},{t:this.shape_533,p:{x:-95.1,y:-67.5}},{t:this.shape_416,p:{x:-88.2,y:-67.6}},{t:this.shape_856,p:{x:-83.2,y:-68.4}},{t:this.shape_855,p:{x:-72.5,y:-67.5}},{t:this.shape_854,p:{x:-65.9,y:-69}},{t:this.shape_517,p:{x:-55.8,y:-67.5}},{t:this.shape_260,p:{x:-48.3,y:-67.6}},{t:this.shape_853},{t:this.shape_852},{t:this.shape_509,p:{x:-21.1,y:-67.5}},{t:this.shape_459,p:{x:-13.8,y:-66.3}},{t:this.shape_340,p:{x:-6.6,y:-67.5}},{t:this.shape_851,p:{x:6.6,y:-67.4}},{t:this.shape_529,p:{x:13.6,y:-68.9}},{t:this.shape_503,p:{x:18.6,y:-68.4}},{t:this.shape_474,p:{x:25.1,y:-69}},{t:this.shape_493,p:{x:36.8,y:-67.5}},{t:this.shape_284,p:{x:47.5,y:-67.5}},{t:this.shape_850,p:{x:54.4}},{t:this.shape_338,p:{x:61.9,y:-67.5}},{t:this.shape_481,p:{x:69.1,y:-67.5}},{t:this.shape_849},{t:this.shape_848},{t:this.shape_505,p:{x:83.5,y:-68.9}},{t:this.shape_335,p:{x:89.4,y:-67.5}},{t:this.shape_102,p:{x:96.9,y:-68.9}},{t:this.shape_847,p:{x:109.3}},{t:this.shape_479,p:{x:116.6,y:-67.5}},{t:this.shape_483,p:{x:123.1,y:-68.4}},{t:this.shape_475,p:{x:128.7,y:-68.4}},{t:this.shape_328,p:{x:135.2,y:-67.5}},{t:this.shape_296,p:{x:142.2,y:-67.6}},{t:this.shape_255,p:{x:148.2,y:-67.6}},{t:this.shape_846},{t:this.shape_845,p:{x:-315.3,y:-32.4}},{t:this.shape_844,p:{x:-307.9}},{t:this.shape_843},{t:this.shape_386,p:{x:-293.9,y:-31.9}},{t:this.shape_842},{t:this.shape_159,p:{x:-274,y:-31}},{t:this.shape_385,p:{x:-266.6}},{t:this.shape_646,p:{x:-260.6,y:-32.4}},{t:this.shape_841,p:{x:-257}},{t:this.shape_245,p:{x:-251,y:-31.1}},{t:this.shape_448,p:{x:-243.7,y:-29.8}},{t:this.shape_840,p:{x:-231.8,y:-32.4}},{t:this.shape_443,p:{x:-224.9,y:-31.1}},{t:this.shape_213,p:{x:-218.9,y:-30.9}},{t:this.shape_343,p:{x:-212.3,y:-31}},{t:this.shape_349,p:{x:-205.7,y:-32.5}},{t:this.shape_360,p:{x:-194.8,y:-31.9}},{t:this.shape_839,p:{x:-188.4,y:-31}},{t:this.shape_838,p:{x:-180.9,y:-31}},{t:this.shape_212,p:{x:-174.8,y:-32.4}},{t:this.shape_837},{t:this.shape_836,p:{x:-159.9,y:-31}},{t:this.shape_184,p:{x:-152.9,y:-31.1}},{t:this.shape_329,p:{x:-143.3,y:-31.1}},{t:this.shape_157,p:{x:-137.4,y:-31}},{t:this.shape_376,p:{x:-129.5,y:-29.6}},{t:this.shape_381,p:{x:-122.2,y:-31}},{t:this.shape_835,p:{x:-116.7}},{t:this.shape_834,p:{x:-111.3,y:-31.1}},{t:this.shape_833,p:{x:-107.3,y:-32.4}},{t:this.shape_241,p:{x:-101.4,y:-31.1}},{t:this.shape_320,p:{x:-94,y:-29.8}},{t:this.shape_635,p:{x:-82.3,y:-29.6}},{t:this.shape_368,p:{x:-75,y:-31}},{t:this.shape_271,p:{x:-68,y:-31.1}},{t:this.shape_352,p:{x:-63,y:-31.9}},{t:this.shape_358,p:{x:-52.4,y:-31}},{t:this.shape_832},{t:this.shape_365,p:{x:-35.6,y:-31}},{t:this.shape_218,p:{x:-28.1,y:-31.1}},{t:this.shape_831},{t:this.shape_229,p:{x:-10.4,y:-31.1}},{t:this.shape_355,p:{x:-0.9,y:-31}},{t:this.shape_259,p:{x:6.3,y:-29.8}},{t:this.shape_147,p:{x:13.6,y:-31}},{t:this.shape_830},{t:this.shape_829,p:{x:-314.5,y:4.1}},{t:this.shape_828,p:{x:-306.6,y:5.5}},{t:this.shape_195,p:{x:-299,y:5.4}},{t:this.shape_327,p:{x:-292.4,y:4.6}},{t:this.shape_309,p:{x:-285.9,y:5.5}},{t:this.shape_180,p:{x:-278.3,y:5.4}},{t:this.shape_316,p:{x:-271.6,y:4.6}},{t:this.shape_827},{t:this.shape_311,p:{x:-260.2,y:5.5}},{t:this.shape_273,p:{x:-251.3,y:5.6}},{t:this.shape_305,p:{x:-242.4,y:5.5}},{t:this.shape_826,p:{x:-235.5,y:5.4}},{t:this.shape_303,p:{x:-229.5,y:5.5}},{t:this.shape_785,p:{x:-217.4,y:4.1}},{t:this.shape_302,p:{x:-210.7,y:5.5}},{t:this.shape_304,p:{x:-204.2,y:4.6}},{t:this.shape_306,p:{x:-198,y:5.5}},{t:this.shape_278,p:{x:-190.8,y:4}},{t:this.shape_297,p:{x:-179.9,y:4.6}},{t:this.shape_272,p:{x:-173.5,y:5.5}},{t:this.shape_595,p:{x:-166,y:5.5}},{t:this.shape_258,p:{x:-159.9,y:4.1}},{t:this.shape_825,p:{x:-151.1,y:4}},{t:this.shape_824,p:{x:-145,y:5.5}},{t:this.shape_162,p:{x:-138,y:5.4}},{t:this.shape_396,p:{x:-128.4,y:5.4}},{t:this.shape_291,p:{x:-122.5,y:5.5}},{t:this.shape_494,p:{x:-112.9,y:5.4}},{t:this.shape_129,p:{x:-103.3,y:5.5}},{t:this.shape_773,p:{x:-96.2,y:5.6}},{t:this.shape_823,p:{x:-90.9,y:4.1}},{t:this.shape_160,p:{x:-85,y:5.4}},{t:this.shape_204,p:{x:-77.6,y:6.7}},{t:this.shape_748,p:{x:-66.2,y:5.5}},{t:this.shape_334,p:{x:-59.2,y:5.4}},{t:this.shape_822,p:{x:-49.6,y:5.4}},{t:this.shape_286,p:{x:-43.7,y:5.5}},{t:this.shape_776,p:{x:-35.8,y:6.9}},{t:this.shape_125,p:{x:-29.8,y:4.1}},{t:this.shape_293,p:{x:-24.4,y:5.5}},{t:this.shape_294,p:{x:-17.2,y:5.5}},{t:this.shape_821,p:{x:-12,y:4.1}},{t:this.shape_140,p:{x:-6,y:5.4}},{t:this.shape_194,p:{x:1.3,y:6.7}},{t:this.shape_134,p:{x:12.7,y:5.5}},{t:this.shape_820,p:{x:20.6,y:4.1}},{t:this.shape_819,p:{x:26.1,y:5.5}},{t:this.shape_280,p:{x:33.1,y:5.5}},{t:this.shape_287,p:{x:40.4,y:5.5}},{t:this.shape_292,p:{x:46.7,y:4.6}},{t:this.shape_279,p:{x:52.2,y:5.5}},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816,p:{x:-307.7,y:40.6}},{t:this.shape_815,p:{x:-302.8}},{t:this.shape_814,p:{x:-297.1,y:41.1}},{t:this.shape_813,p:{x:-290.6,y:42}},{t:this.shape_289,p:{x:-283.6,y:41.9}},{t:this.shape_243,p:{x:-278,y:43.4}},{t:this.shape_812},{t:this.shape_236,p:{x:-259.2,y:41.9}},{t:this.shape_144,p:{x:-253.3,y:42.1}},{t:this.shape_643,p:{x:-246.7,y:42}},{t:this.shape_613,p:{x:-240,y:40.5}},{t:this.shape_811,p:{x:-229.2,y:41.1}},{t:this.shape_810,p:{x:-222.7,y:42}},{t:this.shape_626,p:{x:-215.2,y:42}},{t:this.shape_227,p:{x:-209.2,y:40.6}},{t:this.shape_809,p:{x:-200.3,y:40.5}},{t:this.shape_808,p:{x:-194.3,y:42}},{t:this.shape_239,p:{x:-187.3,y:41.9}},{t:this.shape_105,p:{x:-177.7,y:41.9}},{t:this.shape_807,p:{x:-171.7,y:42}},{t:this.shape_642,p:{x:-165.1,y:42}},{t:this.shape_806,p:{x:-159.4,y:41.1}},{t:this.shape_397,p:{x:-153,y:42}},{t:this.shape_251,p:{x:-146,y:41.9}},{t:this.shape_624,p:{x:-142,y:40.6}},{t:this.shape_137,p:{x:-136.1,y:41.9}},{t:this.shape_179,p:{x:-128.7,y:43.2}},{t:this.shape_805,p:{x:-117.4,y:42}},{t:this.shape_111,p:{x:-109.9,y:41.9}},{t:this.shape_804},{t:this.shape_428,p:{x:-92.2,y:41.9}},{t:this.shape_803,p:{x:-82.7,y:42}},{t:this.shape_139,p:{x:-75.5,y:43.2}},{t:this.shape_636,p:{x:-68.2,y:42}},{t:this.shape_639,p:{x:-57.4,y:41.1}},{t:this.shape_374,p:{x:-50.9,y:42}},{t:this.shape_802,p:{x:-41.2,y:40.6}},{t:this.shape_638,p:{x:-36.2,y:41.1}},{t:this.shape_640,p:{x:-30.7,y:42}},{t:this.shape_801},{t:this.shape_149,p:{x:-12.6,y:41.9}},{t:this.shape_630,p:{x:-6.7,y:42}},{t:this.shape_617,p:{x:0.5,y:42.1}},{t:this.shape_800},{t:this.shape_359,p:{x:11.7,y:42}},{t:this.shape_107,p:{x:19.2,y:42.1}},{t:this.shape_611,p:{x:25.8,y:42}},{t:this.shape_606,p:{x:35.7,y:42}},{t:this.shape_632,p:{x:41.4,y:41.1}},{t:this.shape_799,p:{x:47.7,y:42}},{t:this.shape_627,p:{x:54.3,y:41.1}},{t:this.shape_618,p:{x:60.8,y:42}},{t:this.shape_798},{t:this.shape_797,p:{x:-315.3,y:77.1}},{t:this.shape_108,p:{x:-308.2,y:78.4}},{t:this.shape_579,p:{x:-300.7,y:78.5}},{t:this.shape_796},{t:this.shape_795,p:{x:-286.5,y:78.5}},{t:this.shape_130,p:{x:-279.8,y:77}},{t:this.shape_794},{t:this.shape_133,p:{x:-265.7,y:77.6}},{t:this.shape_571,p:{x:-260.2,y:78.5}},{t:this.shape_793},{t:this.shape_132,p:{x:-244.2,y:78.5}},{t:this.shape_153,p:{x:-237.2,y:78.4}},{t:this.shape_792},{t:this.shape_198,p:{x:-219.9,y:78.4}},{t:this.shape_552,p:{x:-213.9,y:78.5}},{t:this.shape_557,p:{x:-207.3,y:78.5}},{t:this.shape_547,p:{x:-200.7,y:78.5}},{t:this.shape_791,p:{x:-193.6,y:78.4}},{t:this.shape_600,p:{x:-188.1,y:78.6}},{t:this.shape_790,p:{x:-182.8,y:77.1}},{t:this.shape_100,p:{x:-176.9,y:78.4}},{t:this.shape_99,p:{x:-169.5,y:79.7}},{t:this.shape_545,p:{x:-158.1,y:78.5}},{t:this.shape_549,p:{x:-150.6,y:78.5}},{t:this.shape_789,p:{x:-143.7,y:78.4}},{t:this.shape_169,p:{x:-139.2,y:77.1}},{t:this.shape_788,p:{x:-135.6,y:77.1}},{t:this.shape_106,p:{x:-129.7,y:78.5}},{t:this.shape_216,p:{x:-122.6,y:78.4}},{t:this.shape_543,p:{x:-113.5,y:78.5}},{t:this.shape_115,p:{x:-107.8,y:77.6}},{t:this.shape_103,p:{x:-101.4,y:78.5}},{t:this.shape_110,p:{x:-94.9,y:77.6}},{t:this.shape_104,p:{x:-88.4,y:78.5}},{t:this.shape_131,p:{x:-81.8,y:78.5}},{t:this.shape_114,p:{x:-71,y:78.5}},{t:this.shape_787,p:{x:-64.4,y:77}},{t:this.shape_786,p:{x:-52.7,y:78.6}},{t:this.shape_326,p:{x:-43.7,y:78.5}},{t:this.shape_148,p:{x:-36.7,y:78.4}},{t:this.shape_122,p:{x:-30.6,y:77}}]},1).to({state:[{t:this.shape_911,p:{x:-324,y:-160.1}},{t:this.shape_335,p:{x:-317.1,y:-158.7}},{t:this.shape_133,p:{x:-310.5,y:-159.7}},{t:this.shape_206,p:{y:-163.8,x:-306.7}},{t:this.shape_285,p:{x:-302.8,y:-158.7}},{t:this.shape_144,p:{x:-291.9,y:-158.7}},{t:this.shape_284,p:{x:-285.3,y:-158.7}},{t:this.shape_328,p:{x:-278.7,y:-158.7}},{t:this.shape_115,p:{x:-267.8,y:-159.7}},{t:this.shape_278,p:{x:-261.3,y:-160.2}},{t:this.shape_309,p:{x:-253.7,y:-158.7}},{t:this.shape_724,p:{x:-241.6,y:-157.4}},{t:this.shape_755,p:{x:-236.2,y:-160.1}},{t:this.shape_287,p:{x:-230.6,y:-158.7}},{t:this.shape_110,p:{x:-224.3,y:-159.7}},{t:this.shape_107,p:{x:-217.8,y:-158.7}},{t:this.shape_789,p:{x:-210.7,y:-158.8}},{t:this.shape_303,p:{x:-204.8,y:-158.7}},{t:this.shape_896,p:{x:-192.7,y:-160.2}},{t:this.shape_291,p:{x:-185.2,y:-158.7}},{t:this.shape_646,p:{x:-179.1,y:-160.2}},{t:this.shape_114,p:{x:-173.6,y:-158.7}},{t:this.shape_786,p:{x:-164.6,y:-158.7}},{t:this.shape_305,p:{x:-151.6,y:-158.7}},{t:this.shape_279,p:{x:-145.1,y:-158.7}},{t:this.shape_302,p:{x:-134.4,y:-158.7}},{t:this.shape_100,p:{x:-126.9,y:-158.8}},{t:this.shape_286,p:{x:-115.1,y:-158.7}},{t:this.shape_910,p:{x:-107.8,y:-158.7}},{t:this.shape_293,p:{x:-100.6,y:-158.7}},{t:this.shape_741,p:{x:-91.1,y:-158.8}},{t:this.shape_776,p:{x:-81.2,y:-157.4}},{t:this.shape_125,p:{x:-75.3,y:-160.2}},{t:this.shape_280,p:{x:-69.7,y:-158.7}},{t:this.shape_909},{t:this.instance}]},1).to({state:[{t:this.shape_1120,p:{y:-158.1}},{t:this.shape_1119,p:{x:-318.3,y:-154}},{t:this.shape_865,p:{x:-308,y:-158.1}},{t:this.shape_1118,p:{x:-300.9,y:-156.7}},{t:this.shape_1117,p:{y:-158.2,x:-294.8}},{t:this.shape_1116,p:{x:-289.2,y:-156.7}},{t:this.shape_1115,p:{x:-281.9,y:-156.7}},{t:this.shape_1114,p:{x:-275.6,y:-157.7}},{t:this.shape_1113,p:{x:-265.9,y:-157.7}},{t:this.shape_553,p:{x:-259.4,y:-158.2}},{t:this.shape_1112,p:{x:-251.8,y:-156.7}},{t:this.shape_1111,p:{x:-240.3,y:-156.7}},{t:this.shape_375,p:{x:-234.6,y:-158.2}},{t:this.shape_1110},{t:this.shape_455,p:{x:-221.5,y:-156.8}},{t:this.shape_1109,p:{x:-213.9,y:-156.7}},{t:this.shape_1108},{t:this.shape_1107,p:{x:-197.4,y:-157.7}},{t:this.shape_1106,p:{x:-191,y:-156.7}},{t:this.shape_905,p:{x:-181.5,y:-156.8}},{t:this.shape_1105},{t:this.shape_1104,p:{x:-160.9,y:-157.7}},{t:this.shape_1103},{t:this.shape_1102,p:{x:-147,y:-156.7}},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_1099,p:{x:-125.7}},{t:this.shape_289,p:{x:-118.8,y:-156.8}},{t:this.shape_1098,p:{x:-112.9,y:-156.7}},{t:this.shape_1097},{t:this.shape_795,p:{x:-100.6,y:-156.7}},{t:this.shape_1096,p:{x:-91.3,y:-161.8}},{t:this.shape_845,p:{x:-85.7,y:-158.1}},{t:this.shape_1095,p:{x:-80.1,y:-161.8}},{t:this.shape_1094,p:{x:-69.9,y:-156.7}},{t:this.shape_434,p:{x:-62.4,y:-156.8}},{t:this.shape_1093},{t:this.shape_1092,p:{x:-43.7,y:-156.7}},{t:this.shape_1091,p:{x:-36.2,y:-156.7}},{t:this.shape_625,p:{x:-29.1,y:-156.8}},{t:this.shape_1090,p:{x:-18.8,y:-158.2}},{t:this.shape_1089,p:{x:-11.9,y:-156.7}},{t:this.shape_645,p:{x:-4.7,y:-155.3}},{t:this.shape_336,p:{x:2.9,y:-158.2}},{t:this.shape_1088,p:{x:10.3,y:-156.7}},{t:this.shape_1087,p:{x:17.7,y:-156.7}},{t:this.shape_822,p:{x:24.6,y:-156.8}},{t:this.shape_404,p:{x:30.4,y:-158.2}},{t:this.shape_1086},{t:this.shape_1085,p:{x:42,y:-154}},{t:this.shape_1084},{t:this.shape_1083,p:{y:-117.5}},{t:this.shape_1082,p:{y:-121.6}},{t:this.shape_1081,p:{x:-299.2,y:-121.7}},{t:this.shape_1080,p:{x:-291.7,y:-120.2}},{t:this.shape_1079,p:{x:-284.2,y:-120.2}},{t:this.shape_695,p:{x:-277.6,y:-120.2}},{t:this.shape_1078},{t:this.shape_668,p:{x:-259.3,y:-120.2}},{t:this.shape_685,p:{x:-248.6,y:-120.2}},{t:this.shape_1077,p:{x:-242,y:-120.2}},{t:this.shape_267,p:{x:-236.4,y:-121.6}},{t:this.shape_693,p:{x:-231.4,y:-121.2}},{t:this.shape_652,p:{x:-225,y:-120.2}},{t:this.shape_1076},{t:this.shape_308,p:{x:-211.3,y:-121.7}},{t:this.shape_1075},{t:this.shape_896,p:{x:-193.6,y:-121.7}},{t:this.shape_1074},{t:this.shape_768,p:{x:-180.7,y:-120.2}},{t:this.shape_684,p:{x:-174.1,y:-120.2}},{t:this.shape_1073,p:{x:-167.5,y:-121.7}},{t:this.shape_679,p:{x:-156.7,y:-120.2}},{t:this.shape_226,p:{x:-152,y:-121.6}},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070,p:{x:-129.7,y:-121.6}},{t:this.shape_407,p:{x:-123.7,y:-120.3}},{t:this.shape_689,p:{x:-112.9,y:-121.2}},{t:this.shape_1069,p:{x:-106.4,y:-121.7}},{t:this.shape_1068,p:{x:-98.8,y:-120.2}},{t:this.shape_264,p:{x:-87.9,y:-121.2}},{t:this.shape_891,p:{x:-81.5,y:-120.2}},{t:this.shape_890,p:{x:-74,y:-120.2}},{t:this.shape_1067,p:{x:-67.9,y:-121.7}},{t:this.shape_1066},{t:this.shape_253,p:{x:-50.3,y:-118.9}},{t:this.shape_247,p:{x:-43.8,y:-121.2}},{t:this.shape_702,p:{x:-39.3,y:-121.6}},{t:this.shape_234,p:{x:-33.4,y:-120.2}},{t:this.shape_380,p:{x:-25.9,y:-120.3}},{t:this.shape_648,p:{x:-19.3,y:-120.2}},{t:this.shape_820,p:{x:-8.1,y:-121.7}},{t:this.shape_649,p:{x:-0.8,y:-120.2}},{t:this.shape_472,p:{x:6.1,y:-120.3}},{t:this.shape_268,p:{x:16.1,y:-120.2}},{t:this.shape_235,p:{x:22.7,y:-121.2}},{t:this.shape_217,p:{x:32.4,y:-121.2}},{t:this.shape_681,p:{x:38.9,y:-121.7}},{t:this.shape_1065,p:{x:46.5,y:-120.2}},{t:this.shape_211,p:{x:57.4,y:-121.2}},{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_1062,p:{x:77.7,y:-117.5}},{t:this.shape_1061,p:{y:-85.1}},{t:this.shape_1060,p:{y:-81,x:-318.3}},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_362,p:{x:-283.3,y:-83.7}},{t:this.shape_1056},{t:this.shape_882,p:{x:-264.7,y:-83.7}},{t:this.shape_730,p:{x:-257.1,y:-83.7}},{t:this.shape_589,p:{x:-250.1,y:-83.8}},{t:this.shape_1055},{t:this.shape_1054,p:{x:-234.5,y:-85.2}},{t:this.shape_1053},{t:this.shape_364,p:{x:-221.4,y:-83.8}},{t:this.shape_351,p:{x:-213.8,y:-83.7}},{t:this.shape_1052},{t:this.shape_1051,p:{x:-197.3,y:-84.7}},{t:this.shape_884,p:{x:-191,y:-83.7}},{t:this.shape_339,p:{x:-181.5,y:-83.8}},{t:this.shape_1050},{t:this.shape_1049,p:{x:-160.3,y:-83.7}},{t:this.shape_705,p:{x:-153,y:-83.7}},{t:this.shape_396,p:{x:-146,y:-83.8}},{t:this.shape_205,p:{x:-141,y:-83.7}},{t:this.shape_1048,p:{x:-134.4,y:-83.7}},{t:this.shape_239,p:{x:-127.4,y:-83.8}},{t:this.shape_207,p:{x:-118.2,y:-84.7}},{t:this.shape_878,p:{x:-111.8,y:-83.7}},{t:this.shape_202,p:{x:-101,y:-84.7}},{t:this.shape_875,p:{x:-94.5,y:-85.2}},{t:this.shape_344,p:{x:-86.9,y:-83.7}},{t:this.shape_1047},{t:this.shape_872,p:{x:-64.8,y:-83.7}},{t:this.shape_200,p:{x:-58.3,y:-84.7}},{t:this.shape_208,p:{x:-51.8,y:-83.7}},{t:this.shape_334,p:{x:-44.7,y:-83.8}},{t:this.shape_1046,p:{x:-39.8,y:-83.7}},{t:this.shape_197,p:{x:-34.6,y:-84.7}},{t:this.shape_871,p:{x:-28.3,y:-83.7}},{t:this.shape_251,p:{x:-21.3,y:-83.8}},{t:this.shape_459,p:{x:-15.6,y:-82.6}},{t:this.shape_203,p:{x:-8.4,y:-83.7}},{t:this.shape_175,p:{x:-1.7,y:-84.7}},{t:this.shape_1045},{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_176,p:{x:27.7,y:-83.7}},{t:this.shape_1042,p:{x:33.8,y:-85.2}},{t:this.shape_201,p:{x:38.4,y:-83.7}},{t:this.shape_1041},{t:this.shape_1040,p:{x:48.7,y:-81}},{t:this.shape_1039,p:{y:-48.6}},{t:this.shape_1038,p:{y:-44.5,x:-318.3}},{t:this.shape_1037,p:{x:-306.8,y:-48.6}},{t:this.shape_1036},{t:this.shape_227,p:{x:-292.4,y:-48.7}},{t:this.shape_379,p:{x:-287,y:-48.7}},{t:this.shape_367,p:{x:-275,y:-48.7}},{t:this.shape_1035,p:{x:-267.2,y:-47.2}},{t:this.shape_1034,p:{x:-258.2,y:-47.2}},{t:this.shape_354,p:{x:-249.2,y:-47.3}},{t:this.shape_503,p:{x:-238.4,y:-48.2}},{t:this.shape_530,p:{x:-231.9,y:-48.7}},{t:this.shape_473,p:{x:-224.3,y:-47.2}},{t:this.shape_121,p:{x:-214,y:-52.3}},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_483,p:{x:-193.7,y:-48.2}},{t:this.shape_1031,p:{x:-189.2,y:-48.6}},{t:this.shape_1030},{t:this.shape_348,p:{x:-175.7,y:-47.3}},{t:this.shape_1029,p:{x:-169.7,y:-52.3}},{t:this.shape_1028},{t:this.shape_340,p:{x:-152.4,y:-47.2}},{t:this.shape_757,p:{x:-145.1,y:-45.8}},{t:this.shape_1027},{t:this.shape_480,p:{x:-123.3,y:-48.7}},{t:this.shape_505,p:{x:-117.7,y:-48.6}},{t:this.shape_430,p:{x:-113.2,y:-48.7}},{t:this.shape_338,p:{x:-107.6,y:-47.2}},{t:this.shape_504,p:{x:-96.2,y:-47.2}},{t:this.shape_567,p:{x:-90.4,y:-48.7}},{t:this.shape_1026,p:{x:-86.8,y:-48.6}},{t:this.shape_481,p:{x:-81.2,y:-47.2}},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_321,p:{x:-63,y:-47.3}},{t:this.shape_448,p:{x:-55.6,y:-46.1}},{t:this.shape_1023,p:{x:-44.2,y:-47.2}},{t:this.shape_301,p:{x:-36.7,y:-47.3}},{t:this.shape_475,p:{x:-25.8,y:-48.2}},{t:this.shape_474,p:{x:-19.3,y:-48.7}},{t:this.shape_335,p:{x:-11.7,y:-47.2}},{t:this.shape_523,p:{x:-1.9,y:-48.6}},{t:this.shape_1022},{t:this.shape_479,p:{x:15.5,y:-47.2}},{t:this.shape_320,p:{x:22.7,y:-46.1}},{t:this.shape_328,p:{x:30,y:-47.2}},{t:this.shape_699,p:{x:36.2,y:-44.5}},{t:this.shape_1021},{t:this.shape_605,p:{x:-318.3,y:-8}},{t:this.shape_840,p:{x:-307.2,y:-12.1}},{t:this.shape_1020},{t:this.shape_361,p:{x:-288.7,y:-12.2}},{t:this.shape_374,p:{x:-280.9,y:-10.7}},{t:this.shape_1019},{t:this.shape_298,p:{x:-269.4,y:-10.8}},{t:this.shape_259,p:{x:-262,y:-9.6}},{t:this.shape_356,p:{x:-251.6,y:-10.7}},{t:this.shape_836,p:{x:-245,y:-10.7}},{t:this.shape_1018},{t:this.shape_492,p:{x:-228.5,y:-9.3}},{t:this.shape_808,p:{x:-221.3,y:-10.7}},{t:this.shape_683,p:{x:-213.7,y:-10.7}},{t:this.shape_1017,p:{x:-201.9,y:-12.2}},{t:this.shape_381,p:{x:-194.5,y:-10.7}},{t:this.shape_366,p:{x:-187.4,y:-10.7}},{t:this.shape_161,p:{x:-180.1,y:-10.7}},{t:this.shape_833,p:{x:-170.3,y:-12.1}},{t:this.shape_281,p:{x:-164.4,y:-10.8}},{t:this.shape_353,p:{x:-156.9,y:-12.2}},{t:this.shape_1016,p:{x:-151,y:-12.1}},{t:this.shape_1015},{t:this.shape_368,p:{x:-138.3,y:-10.7}},{t:this.shape_1014,p:{x:-131.8,y:-11.7}},{t:this.shape_159,p:{x:-125.3,y:-10.7}},{t:this.shape_310,p:{x:-117.8,y:-12.2}},{t:this.shape_1013,p:{x:-104.3,y:-10.7}},{t:this.shape_349,p:{x:-95.3,y:-12.2}},{t:this.shape_157,p:{x:-87.7,y:-10.7}},{t:this.shape_791,p:{x:-80.7,y:-10.8}},{t:this.shape_147,p:{x:-74.7,y:-10.7}},{t:this.shape_413,p:{x:-63.3,y:-9.3}},{t:this.shape_839,p:{x:-56.1,y:-10.7}},{t:this.shape_592,p:{x:-48.5,y:-10.7}},{t:this.shape_1012,p:{x:-35.3,y:-10.7}},{t:this.shape_365,p:{x:-26.5,y:-10.7}},{t:this.shape_266,p:{x:-19,y:-10.8}},{t:this.shape_391,p:{x:-12.3,y:-11.7}},{t:this.shape_386,p:{x:-2.6,y:-11.7}},{t:this.shape_358,p:{x:3.9,y:-10.7}},{t:this.shape_343,p:{x:14.6,y:-10.7}},{t:this.shape_360,p:{x:20.3,y:-11.7}},{t:this.shape_355,p:{x:26.7,y:-10.7}},{t:this.shape_789,p:{x:33.6,y:-10.8}},{t:this.shape_352,p:{x:38.6,y:-11.7}},{t:this.shape_1011,p:{x:49,y:-10.7}},{t:this.shape_258,p:{x:54.7,y:-12.2}},{t:this.shape_359,p:{x:60.3,y:-10.7}},{t:this.shape_260,p:{x:67.8,y:-10.8}},{t:this.shape_1010,p:{x:73.4,y:-12.1}},{t:this.shape_255,p:{x:79.4,y:-10.8}},{t:this.shape_204,p:{x:86.7,y:-9.6}},{t:this.shape_514,p:{x:92.6,y:-8}},{t:this.shape_1009,p:{y:24.4}},{t:this.shape_424,p:{x:-318.3,y:28.5}},{t:this.shape_1008,p:{x:-306.4,y:24.5}},{t:this.shape_134,p:{x:-298.2,y:25.8}},{t:this.shape_1007},{t:this.shape_377,p:{x:-273.6,y:25.7}},{t:this.shape_132,p:{x:-264,y:25.8}},{t:this.shape_903,p:{x:-256.9,y:25.8}},{t:this.shape_309,p:{x:-249.6,y:25.8}},{t:this.shape_1006},{t:this.shape_1005,p:{x:-230.5,y:25.8}},{t:this.shape_585,p:{x:-222.9,y:25.8}},{t:this.shape_443,p:{x:-215.9,y:25.7}},{t:this.shape_306,p:{x:-205.6,y:25.8}},{t:this.shape_568,p:{x:-198.3,y:25.8}},{t:this.shape_236,p:{x:-191.3,y:25.7}},{t:this.shape_312,p:{x:-186.3,y:25.8}},{t:this.shape_112,p:{x:-179.7,y:25.8}},{t:this.shape_1004},{t:this.shape_574,p:{x:-163,y:24.8}},{t:this.shape_1003,p:{x:-156.6,y:25.8}},{t:this.shape_554,p:{x:-145.3,y:24.8}},{t:this.shape_728,p:{x:-138.8,y:24.3}},{t:this.shape_303,p:{x:-131.2,y:25.8}},{t:this.shape_776,p:{x:-118.6,y:27.1}},{t:this.shape_305,p:{x:-111.3,y:25.8}},{t:this.shape_1002,p:{x:-104.3,y:25.7}},{t:this.shape_333,p:{x:-99.3,y:24.8}},{t:this.shape_763,p:{x:-86.7,y:25.8}},{t:this.shape_332,p:{x:-77.7,y:24.3}},{t:this.shape_307,p:{x:-72.1,y:24.4}},{t:this.shape_294,p:{x:-66.5,y:25.8}},{t:this.shape_323,p:{x:-59.3,y:24.3}},{t:this.shape_1001,p:{x:-47.3,y:27.2}},{t:this.shape_748,p:{x:-40.1,y:25.8}},{t:this.shape_502,p:{x:-32.6,y:25.8}},{t:this.shape_542,p:{x:-18.9,y:25.8}},{t:this.shape_302,p:{x:-10,y:25.8}},{t:this.shape_245,p:{x:-2.5,y:25.7}},{t:this.shape_330,p:{x:4.1,y:24.8}},{t:this.shape_327,p:{x:14.4,y:24.8}},{t:this.shape_114,p:{x:20.8,y:25.8}},{t:this.shape_194,p:{x:32.8,y:26.9}},{t:this.shape_291,p:{x:40.1,y:25.8}},{t:this.shape_316,p:{x:46.7,y:24.8}},{t:this.shape_370,p:{x:57.4,y:25.7}},{t:this.shape_322,p:{x:61.3,y:24.4}},{t:this.shape_300,p:{x:67.1,y:24.3}},{t:this.shape_288,p:{x:79.7,y:25.8}},{t:this.shape_1000,p:{x:86.3,y:24.3}},{t:this.shape_999},{t:this.shape_998,p:{x:95.5,y:24.4}},{t:this.shape_241,p:{x:101.4,y:25.7}},{t:this.shape_304,p:{x:112.8,y:24.8}},{t:this.shape_318,p:{x:119.3,y:24.3}},{t:this.shape_772,p:{x:124.9,y:24.4}},{t:this.shape_285,p:{x:129.8,y:25.8}},{t:this.shape_287,p:{x:140.8,y:25.8}},{t:this.shape_293,p:{x:147.9,y:25.8}},{t:this.shape_284,p:{x:154.4,y:25.8}},{t:this.shape_286,p:{x:161.1,y:25.8}},{t:this.shape_997},{t:this.shape_755,p:{x:176.5,y:24.4}},{t:this.shape_297,p:{x:181.5,y:24.8}},{t:this.shape_206,p:{y:20.7,x:185.3}},{t:this.shape_279,p:{x:189.2,y:25.8}},{t:this.shape_292,p:{x:199.6,y:24.8}},{t:this.shape_278,p:{x:206.1,y:24.3}},{t:this.shape_280,p:{x:213.7,y:25.8}},{t:this.shape_996,p:{y:42.6}},{t:this.shape_230,p:{x:-316.5,y:44}},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993,p:{x:-297.9,y:44}},{t:this.shape_189,p:{x:-288.3,y:43.9}},{t:this.shape_169,p:{x:-276,y:42.6}},{t:this.shape_992,p:{x:-270.4,y:44}},{t:this.shape_991},{t:this.shape_990},{t:this.shape_653,p:{x:-248.3,y:44}},{t:this.shape_240,p:{x:-241.1,y:44}},{t:this.shape_153,p:{x:-234.1,y:43.9}},{t:this.shape_218,p:{x:-228.1,y:43.9}},{t:this.shape_989,p:{x:-220.5,y:44}},{t:this.shape_198,p:{x:-213.5,y:43.9}},{t:this.shape_263,p:{x:-203.5,y:44}},{t:this.shape_195,p:{x:-196,y:43.9}},{t:this.shape_274,p:{x:-188.5,y:42.6}},{t:this.shape_988},{t:this.shape_987},{t:this.shape_712,p:{x:-163.3,y:44}},{t:this.shape_851,p:{x:-150.1,y:44.1}},{t:this.shape_256,p:{x:-141.2,y:44}},{t:this.shape_701,p:{x:-134.1,y:44.1}},{t:this.shape_700,p:{x:-126.9,y:44}},{t:this.shape_233,p:{x:-115.2,y:44}},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_697,p:{x:-84.8,y:44}},{t:this.shape_983},{t:this.shape_687,p:{x:-67.5,y:44}},{t:this.shape_982,p:{x:-59.7,y:45.4}},{t:this.shape_981,p:{x:-48.1,y:44}},{t:this.shape_980,p:{x:-41.5,y:42.5}},{t:this.shape_979},{t:this.shape_978},{t:this.shape_690,p:{x:-18,y:44}},{t:this.shape_249,p:{x:-8.2,y:42.6}},{t:this.shape_977,p:{x:-0.3,y:43.9}},{t:this.shape_223,p:{x:9.2,y:44}},{t:this.shape_179,p:{x:16.4,y:45.2}},{t:this.shape_650,p:{x:23.7,y:44}},{t:this.shape_976,p:{x:30.2,y:44.1}},{t:this.shape_342,p:{x:35,y:46.8}},{t:this.shape_975},{t:this.shape_283,p:{x:-318.3,y:83.3}},{t:this.shape_974,p:{x:-305.3,y:79.1}},{t:this.shape_177,p:{x:-298.4,y:80.5}},{t:this.shape_243,p:{x:-285.2,y:81.9}},{t:this.shape_973},{t:this.shape_467,p:{x:-270.5,y:80.6}},{t:this.shape_254,p:{x:-256.1,y:79.1}},{t:this.shape_723,p:{x:-248.8,y:80.4}},{t:this.shape_972},{t:this.shape_139,p:{x:-235.7,y:81.7}},{t:this.shape_373,p:{x:-221.9,y:81.9}},{t:this.shape_971},{t:this.shape_411,p:{x:-207.2,y:80.6}},{t:this.shape_162,p:{x:-200.1,y:80.4}},{t:this.shape_970,p:{x:-187.6,y:80.5}},{t:this.shape_516,p:{x:-181.9,y:79.1}},{t:this.shape_969},{t:this.shape_180,p:{x:-168.8,y:80.4}},{t:this.shape_968},{t:this.shape_168,p:{x:-147.7,y:80.5}},{t:this.shape_172,p:{x:-142,y:79.6}},{t:this.shape_967},{t:this.shape_229,p:{x:-126.1,y:80.4}},{t:this.shape_966},{t:this.shape_965,p:{x:-101.6,y:79.1}},{t:this.shape_964},{t:this.shape_876,p:{x:-87.1,y:80.5}},{t:this.shape_963,p:{x:-79.7,y:79}},{t:this.shape_962},{t:this.shape_160,p:{x:-58.6,y:80.4}},{t:this.shape_238,p:{x:-51.1,y:79.1}},{t:this.shape_961,p:{x:-37.3,y:79}},{t:this.shape_960},{t:this.shape_572,p:{x:-24.2,y:80.4}},{t:this.shape_167,p:{x:-19.2,y:79.6}},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_393,p:{x:21.3,y:80.6}},{t:this.shape_955},{t:this.shape_148,p:{x:42.6,y:80.4}},{t:this.shape_954},{t:this.shape_953},{t:this.shape_156,p:{x:69.6,y:80.5}},{t:this.shape_155,p:{x:75.3,y:80.5}},{t:this.shape_952},{t:this.shape_140,p:{x:89.5,y:80.4}},{t:this.shape_164,p:{x:96.2,y:79.6}},{t:this.shape_196,p:{x:100.7,y:79.1}},{t:this.shape_951},{t:this.shape_880,p:{x:112.5,y:79.1}},{t:this.shape_357,p:{x:116.6,y:79.1}},{t:this.shape_950,p:{x:121.8,y:81.9}},{t:this.shape_149,p:{x:135.4,y:80.4}},{t:this.shape_949},{t:this.shape_883,p:{x:149.3,y:81.9}},{t:this.shape_646,p:{x:155.2,y:79.1}},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_137,p:{x:179,y:80.4}},{t:this.shape_99,p:{x:186.4,y:81.7}},{t:this.shape_146,p:{x:199.6,y:79.6}},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943,p:{x:-323.9,y:100.1}},{t:this.shape_101,p:{x:-318.4,y:97.4}},{t:this.shape_910,p:{x:-312.8,y:98.8}},{t:this.shape_562,p:{x:-305.5,y:98.8}},{t:this.shape_244,p:{x:-299.4,y:97.3}},{t:this.shape_571,p:{x:-294.8,y:98.8}},{t:this.shape_786,p:{x:-282.5,y:98.8}},{t:this.shape_790,p:{x:-275.5,y:97.4}},{t:this.shape_133,p:{x:-270.5,y:97.8}},{t:this.shape_546,p:{x:-264,y:97.3}},{t:this.shape_115,p:{x:-253.2,y:97.8}},{t:this.shape_135,p:{x:-246.7,y:97.3}},{t:this.shape_560,p:{x:-239.1,y:98.8}},{t:this.shape_326,p:{x:-227.3,y:98.8}},{t:this.shape_111,p:{x:-219.8,y:98.7}},{t:this.shape_552,p:{x:-212.2,y:98.8}},{t:this.shape_557,p:{x:-205.6,y:98.8}},{t:this.shape_507,p:{x:-195.1,y:100.2}},{t:this.shape_272,p:{x:-187.9,y:98.8}},{t:this.shape_345,p:{x:-180.3,y:98.8}},{t:this.shape_130,p:{x:-168.5,y:97.3}},{t:this.shape_549,p:{x:-161.1,y:98.8}},{t:this.shape_773,p:{x:-154,y:98.8}},{t:this.shape_547,p:{x:-146.7,y:98.8}},{t:this.shape_128,p:{x:-134.6,y:100.1}},{t:this.shape_184,p:{x:-127.7,y:98.7}},{t:this.shape_545,p:{x:-121.8,y:98.8}},{t:this.shape_600,p:{x:-114.6,y:98.8}},{t:this.shape_582,p:{x:-109.3,y:97.4}},{t:this.shape_595,p:{x:-103.4,y:98.8}},{t:this.shape_325,p:{x:-95.9,y:98.8}},{t:this.shape_543,p:{x:-89.3,y:98.8}},{t:this.shape_275,p:{x:-84.1,y:97.3}},{t:this.shape_942,p:{x:-78.9,y:100.2}},{t:this.shape_131,p:{x:-68.4,y:98.8}},{t:this.shape_103,p:{x:-61.9,y:98.8}},{t:this.shape_741,p:{x:-52.4,y:98.7}},{t:this.shape_941,p:{x:-42.5}},{t:this.shape_212,p:{x:-36.6,y:97.3}},{t:this.shape_106,p:{x:-31,y:98.8}},{t:this.shape_222,p:{x:-23.5,y:97.3}},{t:this.shape_109,p:{x:-13.4,y:97.4}},{t:this.shape_108,p:{x:-7.5,y:98.7}},{t:this.shape_797,p:{x:3.9,y:97.4}},{t:this.shape_110,p:{x:10.1,y:97.8}},{t:this.shape_104,p:{x:16.6,y:98.8}},{t:this.shape_940},{t:this.shape_939},{t:this.shape_210,p:{x:42,y:101.5}},{t:this.shape_938},{t:this.shape_127,p:{x:-318.3,y:138}},{t:this.shape_937,p:{x:-307.6,y:133.9}},{t:this.shape_469,p:{x:-301.5,y:135.3}},{t:this.shape_276,p:{x:-294,y:135.3}},{t:this.shape_394,p:{x:-280.2,y:135.2}},{t:this.shape_449,p:{x:-270.7,y:135.3}},{t:this.shape_257,p:{x:-263.6,y:136.7}},{t:this.shape_329,p:{x:-252.7,y:135.2}},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_440,p:{x:-223.9,y:135.3}},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_213,p:{x:-135.7,y:135.3}},{t:this.shape_100,p:{x:-128.1,y:135.2}},{t:this.shape_924},{t:this.shape_460,p:{x:-116.9,y:133.9}},{t:this.shape_187,p:{x:-112.5,y:133.8}},{t:this.shape_192,p:{x:-103,y:136.7}},{t:this.shape_923,p:{x:-95.8,y:135.3}},{t:this.shape_144,p:{x:-88.3,y:135.3}},{t:this.shape_437,p:{x:-76.6,y:135.3}},{t:this.shape_105,p:{x:-69.7,y:135.2}},{t:this.shape_922},{t:this.shape_470,p:{x:-52.9,y:135.3}},{t:this.shape_409,p:{x:-46.4,y:135.3}},{t:this.shape_921},{t:this.shape_920,p:{x:-35.4,y:133.9}},{t:this.shape_426,p:{x:-30.4,y:135.3}},{t:this.shape_919},{t:this.shape_451,p:{x:-20.6,y:133.9}},{t:this.shape_918},{t:this.shape_102,p:{x:-7.2,y:133.8}},{t:this.shape_917},{t:this.shape_439,p:{x:13.3,y:133.9}},{t:this.shape_916},{t:this.shape_425,p:{x:24.8,y:133.8}},{t:this.shape_915},{t:this.shape_418,p:{x:42.1,y:133.8}},{t:this.shape_914},{t:this.shape_216,p:{x:61,y:135.2}},{t:this.shape_913},{t:this.shape_415,p:{x:73.5,y:135.3}},{t:this.shape_107,p:{x:80.2,y:135.3}},{t:this.shape_125,p:{x:86.3,y:133.8}},{t:this.shape_912},{t:this.shape_98,p:{x:96,y:138}}]},1).to({state:[{t:this.shape_1199},{t:this.shape_1198},{t:this.shape_1114,p:{x:-310.9,y:-157.7}},{t:this.shape_583,p:{x:-304.4,y:-158.2}},{t:this.shape_1197,p:{x:-296.8,y:-156.7}},{t:this.shape_251,p:{x:-284.6,y:-156.8}},{t:this.shape_1196,p:{x:-278.6,y:-156.7}},{t:this.shape_1113,p:{x:-272,y:-157.7}},{t:this.shape_1195},{t:this.shape_705,p:{x:-258,y:-156.7}},{t:this.shape_1111,p:{x:-250.7,y:-156.7}},{t:this.shape_570,p:{x:-243.5,y:-158.2}},{t:this.shape_1194},{t:this.shape_478,p:{x:-231.9,y:-156.8}},{t:this.shape_580,p:{x:-224.6,y:-155.6}},{t:this.shape_1193},{t:this.shape_834,p:{x:-205.3,y:-156.8}},{t:this.shape_1118,p:{x:-199.4,y:-156.7}},{t:this.shape_1192},{t:this.shape_557,p:{x:-185.4,y:-156.7}},{t:this.shape_1191,p:{x:-173.7,y:-156.7}},{t:this.shape_198,p:{x:-166.8,y:-156.8}},{t:this.shape_1116,p:{x:-160.8,y:-156.7}},{t:this.shape_553,p:{x:-148,y:-158.2}},{t:this.shape_683,p:{x:-140.4,y:-156.7}},{t:this.shape_548,p:{x:-133.1,y:-155.6}},{t:this.shape_1112,p:{x:-125.8,y:-156.7}},{t:this.shape_1190},{t:this.shape_1189,p:{x:-108.3,y:-155.3}},{t:this.shape_1102,p:{x:-101.1,y:-156.7}},{t:this.shape_592,p:{x:-93.5,y:-156.7}},{t:this.shape_189,p:{x:-78.7,y:-156.8}},{t:this.shape_1188,p:{x:-69.3,y:-156.7}},{t:this.shape_1187,p:{x:-62.1,y:-155.3}},{t:this.shape_536,p:{x:-49.9,y:-155.6}},{t:this.shape_1109,p:{x:-42.7,y:-156.7}},{t:this.shape_1107,p:{x:-36,y:-157.7}},{t:this.shape_1104,p:{x:-25.3,y:-157.7}},{t:this.shape_1186},{t:this.shape_1185},{t:this.shape_1098,p:{x:-9.4,y:-156.7}},{t:this.shape_367,p:{x:-2,y:-158.2}},{t:this.shape_1094,p:{x:11.1,y:-156.7}},{t:this.shape_1184},{t:this.shape_1002,p:{x:28.4,y:-156.8}},{t:this.shape_1089,p:{x:34.4,y:-156.7}},{t:this.shape_543,p:{x:41,y:-156.7}},{t:this.shape_1183,p:{x:47.5,y:-156.7}},{t:this.shape_1182},{t:this.shape_1099,p:{x:66.9}},{t:this.shape_357,p:{x:72.8,y:-158.2}},{t:this.shape_1181},{t:this.shape_463,p:{x:82.4,y:-156.8}},{t:this.shape_519,p:{x:89.7,y:-155.6}},{t:this.shape_1180},{t:this.shape_421,p:{x:109.1,y:-156.8}},{t:this.shape_361,p:{x:120.1,y:-158.2}},{t:this.shape_589,p:{x:127.5,y:-156.8}},{t:this.shape_1106,p:{x:133.3,y:-156.7}},{t:this.shape_477,p:{x:140.5,y:-155.6}},{t:this.shape_459,p:{x:147.5,y:-155.6}},{t:this.shape_1179,p:{x:152.8,y:-158.1}},{t:this.shape_455,p:{x:158.7,y:-156.8}},{t:this.shape_448,p:{x:166.1,y:-155.6}},{t:this.shape_1087,p:{x:178.4,y:-156.7}},{t:this.shape_894,p:{x:185.3,y:-156.8}},{t:this.shape_1178,p:{x:191.2,y:-156.7}},{t:this.shape_585,p:{x:198.8,y:-156.7}},{t:this.shape_434,p:{x:206.4,y:-156.8}},{t:this.shape_353,p:{x:213.8,y:-158.2}},{t:this.shape_1001,p:{x:-324.5,y:-137.1}},{t:this.shape_603,p:{x:-317.3,y:-138.5}},{t:this.shape_568,p:{x:-309.8,y:-138.4}},{t:this.shape_443,p:{x:-302.7,y:-138.6}},{t:this.shape_721,p:{x:-291.1,y:-138.5}},{t:this.shape_502,p:{x:-283.9,y:-138.4}},{t:this.shape_775,p:{x:-276.8,y:-138.6}},{t:this.shape_499,p:{x:-271.9,y:-138.5}},{t:this.shape_569,p:{x:-265.3,y:-138.5}},{t:this.shape_501,p:{x:-258.3,y:-138.6}},{t:this.shape_556,p:{x:-246.4,y:-138.5}},{t:this.shape_903,p:{x:-239.2,y:-138.4}},{t:this.shape_770,p:{x:-232,y:-138.5}},{t:this.shape_723,p:{x:-224.9,y:-138.6}},{t:this.shape_907,p:{x:-213.1,y:-138.5}},{t:this.shape_407,p:{x:-205.6,y:-138.6}},{t:this.shape_310,p:{x:-198.2,y:-139.9}},{t:this.shape_564,p:{x:-184.3,y:-138.5}},{t:this.shape_773,p:{x:-177.2,y:-138.4}},{t:this.shape_766,p:{x:-169.9,y:-138.5}},{t:this.shape_416,p:{x:-162.9,y:-138.6}},{t:this.shape_759,p:{x:-151.1,y:-138.5}},{t:this.shape_320,p:{x:-143.8,y:-137.3}},{t:this.shape_754,p:{x:-136.7,y:-138.5}},{t:this.shape_904,p:{x:-131.2,y:-139.9}},{t:this.shape_380,p:{x:-125.3,y:-138.6}},{t:this.shape_1119,p:{x:-119.1,y:-135.7}},{t:this.shape_785,p:{x:-106.2,y:-139.9}},{t:this.shape_744,p:{x:-99.4,y:-140}},{t:this.shape_1177},{t:this.shape_1176},{t:this.shape_1005,p:{x:-78.8,y:-138.5}},{t:this.shape_314,p:{x:-72.3,y:-138.5}},{t:this.shape_736,p:{x:-65.6,y:-140}},{t:this.shape_317,p:{x:-58.1,y:-138.5}},{t:this.shape_1175},{t:this.shape_728,p:{x:-36.8,y:-140}},{t:this.shape_743,p:{x:-29.3,y:-138.5}},{t:this.shape_312,p:{x:-22.8,y:-138.5}},{t:this.shape_724,p:{x:-9.9,y:-137.1}},{t:this.shape_148,p:{x:-3,y:-138.6}},{t:this.shape_272,p:{x:2.9,y:-138.5}},{t:this.shape_600,p:{x:10.1,y:-138.4}},{t:this.shape_1174},{t:this.shape_300,p:{x:21.1,y:-139.9}},{t:this.shape_738,p:{x:29,y:-138.5}},{t:this.shape_274,p:{x:36.5,y:-139.9}},{t:this.shape_484,p:{x:50,y:-137.1}},{t:this.shape_1173,p:{x:57.2,y:-138.5}},{t:this.shape_467,p:{x:64.8,y:-138.4}},{t:this.shape_594,p:{x:79.8,y:-138.4}},{t:this.shape_1172},{t:this.shape_1171},{t:this.shape_332,p:{x:98.3,y:-140}},{t:this.shape_740,p:{x:111.7,y:-138.5}},{t:this.shape_820,p:{x:125.5,y:-139.9}},{t:this.shape_735,p:{x:133,y:-138.5}},{t:this.shape_782,p:{x:139.6,y:-139.4}},{t:this.shape_761,p:{x:145.2,y:-139.4}},{t:this.shape_733,p:{x:151.7,y:-138.5}},{t:this.shape_826,p:{x:158.7,y:-138.6}},{t:this.shape_749,p:{x:170.6,y:-138.5}},{t:this.shape_290,p:{x:178.5,y:-137.1}},{t:this.shape_750,p:{x:185,y:-139.4}},{t:this.shape_1170},{t:this.shape_595,p:{x:195.4,y:-138.5}},{t:this.shape_364,p:{x:202.9,y:-138.6}},{t:this.shape_1169},{t:this.shape_1168,p:{x:-323.8,y:-121.6}},{t:this.shape_233,p:{x:-317.2,y:-120.2}},{t:this.shape_235,p:{x:-310.6,y:-121.2}},{t:this.shape_217,p:{x:-305.1,y:-121.2}},{t:this.shape_650,p:{x:-298.6,y:-120.2}},{t:this.shape_572,p:{x:-291.5,y:-120.3}},{t:this.shape_354,p:{x:-285.6,y:-120.3}},{t:this.shape_1167},{t:this.shape_211,p:{x:-268,y:-121.2}},{t:this.shape_223,p:{x:-261.7,y:-120.2}},{t:this.shape_1166},{t:this.shape_1165,p:{x:-242.3,y:-118.9}},{t:this.shape_1164,p:{x:-230.6,y:-121.6}},{t:this.shape_687,p:{x:-224.6,y:-120.2}},{t:this.shape_890,p:{x:-217.1,y:-120.2}},{t:this.shape_275,p:{x:-211,y:-121.7}},{t:this.shape_1085,p:{x:-206.8,y:-117.5}},{t:this.shape_1120,p:{y:-85.1}},{t:this.shape_1083,p:{y:-81}},{t:this.shape_885,p:{x:-308,y:-85.1}},{t:this.shape_344,p:{x:-300.9,y:-83.7}},{t:this.shape_1117,p:{y:-85.2,x:-294.8}},{t:this.shape_208,p:{x:-289.2,y:-83.7}},{t:this.shape_970,p:{x:-281.9,y:-83.7}},{t:this.shape_164,p:{x:-275.6,y:-84.7}},{t:this.shape_1163},{t:this.shape_203,p:{x:-257.4,y:-83.7}},{t:this.shape_876,p:{x:-250.1,y:-83.7}},{t:this.shape_146,p:{x:-243.8,y:-84.7}},{t:this.shape_884,p:{x:-237.5,y:-83.7}},{t:this.shape_348,p:{x:-230,y:-83.8}},{t:this.shape_259,p:{x:-222.6,y:-82.6}},{t:this.shape_411,p:{x:-215.4,y:-83.7}},{t:this.shape_880,p:{x:-209.3,y:-85.2}},{t:this.shape_872,p:{x:-203.8,y:-83.7}},{t:this.shape_399,p:{x:-196.9,y:-83.8}},{t:this.shape_1162},{t:this.shape_871,p:{x:-177,y:-83.7}},{t:this.shape_184,p:{x:-170,y:-83.8}},{t:this.shape_1161},{t:this.shape_393,p:{x:-156.3,y:-83.7}},{t:this.shape_176,p:{x:-148.7,y:-83.7}},{t:this.shape_161,p:{x:-141.1,y:-83.7}},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158},{t:this.shape_461,p:{x:-109.7,y:-85.2}},{t:this.shape_1157},{t:this.shape_1156,p:{x:-93.6,y:-85}},{t:this.shape_1155,p:{x:-86,y:-83.7}},{t:this.shape_1062,p:{x:-81.2,y:-81}},{t:this.shape_1154},{t:this.shape_1060,p:{y:-44.5,x:-318.3}},{t:this.shape_865,p:{x:-308,y:-48.6}},{t:this.shape_720,p:{x:-300.9,y:-47.2}},{t:this.shape_646,p:{x:-294.8,y:-48.7}},{t:this.shape_525,p:{x:-289.2,y:-47.2}},{t:this.shape_520,p:{x:-281.9,y:-47.2}},{t:this.shape_867,p:{x:-275.6,y:-48.2}},{t:this.shape_866,p:{x:-265.9,y:-48.2}},{t:this.shape_1153,p:{x:-259.4,y:-48.7}},{t:this.shape_500,p:{x:-251.8,y:-47.2}},{t:this.shape_533,p:{x:-240.1,y:-47.2}},{t:this.shape_296,p:{x:-233.2,y:-47.3}},{t:this.shape_495,p:{x:-227.2,y:-47.2}},{t:this.shape_517,p:{x:-219.8,y:-47.2}},{t:this.shape_854,p:{x:-209,y:-48.7}},{t:this.shape_1152,p:{x:-203,y:-47.2}},{t:this.shape_370,p:{x:-196,y:-47.3}},{t:this.shape_1034,p:{x:-184.4,y:-47.2}},{t:this.shape_530,p:{x:-175.4,y:-48.7}},{t:this.shape_1031,p:{x:-169.8,y:-48.6}},{t:this.shape_504,p:{x:-164.2,y:-47.2}},{t:this.shape_480,p:{x:-157,y:-48.7}},{t:this.shape_645,p:{x:-145.5,y:-45.8}},{t:this.shape_482,p:{x:-138.3,y:-47.2}},{t:this.shape_345,p:{x:-130.8,y:-47.2}},{t:this.shape_1151,p:{x:-117.6,y:-47.2}},{t:this.shape_509,p:{x:-108.7,y:-47.2}},{t:this.shape_321,p:{x:-101.2,y:-47.3}},{t:this.shape_864,p:{x:-94.6,y:-48.2}},{t:this.shape_861,p:{x:-84.8,y:-48.2}},{t:this.shape_1150,p:{x:-78.4,y:-47.2}},{t:this.shape_325,p:{x:-66.6,y:-47.2}},{t:this.shape_285,p:{x:-60,y:-47.2}},{t:this.shape_490,p:{x:-53.4,y:-47.2}},{t:this.shape_856,p:{x:-42.5,y:-48.2}},{t:this.shape_855,p:{x:-36.1,y:-47.2}},{t:this.shape_822,p:{x:-24.9,y:-47.3}},{t:this.shape_489,p:{x:-18.9,y:-47.2}},{t:this.shape_1149},{t:this.shape_244,p:{x:-5.1,y:-48.7}},{t:this.shape_493,p:{x:0.4,y:-47.2}},{t:this.shape_481,p:{x:7.5,y:-47.2}},{t:this.shape_476,p:{x:14.8,y:-47.2}},{t:this.shape_503,p:{x:25.6,y:-48.2}},{t:this.shape_474,p:{x:32.1,y:-48.7}},{t:this.shape_473,p:{x:39.7,y:-47.2}},{t:this.shape_483,p:{x:50.6,y:-48.2}},{t:this.shape_479,p:{x:56.9,y:-47.2}},{t:this.shape_236,p:{x:63.9,y:-47.3}},{t:this.shape_204,p:{x:69.6,y:-46.1}},{t:this.shape_340,p:{x:76.8,y:-47.2}},{t:this.shape_475,p:{x:83.5,y:-48.2}},{t:this.shape_271,p:{x:93.6,y:-47.3}},{t:this.shape_338,p:{x:99.6,y:-47.2}},{t:this.shape_194,p:{x:106.9,y:-46.1}},{t:this.shape_1148},{t:this.shape_512,p:{x:118.1,y:-47.2}},{t:this.shape_301,p:{x:125.6,y:-47.3}},{t:this.shape_284,p:{x:132.2,y:-47.2}},{t:this.shape_1040,p:{x:137.5,y:-44.5}},{t:this.shape_1061,p:{y:-12.1}},{t:this.shape_1038,p:{y:-8,x:-318.3}},{t:this.shape_1147,p:{y:-12.1}},{t:this.shape_839,p:{x:-298.2,y:-10.7}},{t:this.shape_391,p:{x:-287.4,y:-11.7}},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_254,p:{x:-261.9,y:-12.2}},{t:this.shape_1010,p:{x:-256,y:-12.1}},{t:this.shape_386,p:{x:-251,y:-11.7}},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_159,p:{x:-215.1,y:-10.7}},{t:this.shape_1141},{t:this.shape_1140,p:{x:-204.4,y:-12.1}},{t:this.shape_298,p:{x:-198.4,y:-10.8}},{t:this.shape_157,p:{x:-190.8,y:-10.7}},{t:this.shape_1139},{t:this.shape_355,p:{x:-172,y:-10.7}},{t:this.shape_360,p:{x:-165.5,y:-11.7}},{t:this.shape_352,p:{x:-159.9,y:-11.7}},{t:this.shape_147,p:{x:-153.4,y:-10.7}},{t:this.shape_791,p:{x:-146.4,y:-10.8}},{t:this.shape_281,p:{x:-140.4,y:-10.8}},{t:this.shape_699,p:{x:-134.2,y:-8}},{t:this.shape_605,p:{x:-129.1,y:-8}},{t:this.shape_514,p:{x:-124,y:-8}},{t:this.shape_1039,p:{y:24.4}},{t:this.shape_424,p:{x:-318.3,y:28.5}},{t:this.shape_341,p:{x:-306.8,y:24.4}},{t:this.shape_1138,p:{x:-301.5,y:24.4}},{t:this.shape_179,p:{x:-295.8,y:26.9}},{t:this.shape_323,p:{x:-288.5,y:24.3}},{t:this.shape_745,p:{x:-281.9,y:24.8}},{t:this.shape_324,p:{x:-271.5,y:25.8}},{t:this.shape_258,p:{x:-265.8,y:24.3}},{t:this.shape_821,p:{x:-262.2,y:24.4}},{t:this.shape_306,p:{x:-256.6,y:25.8}},{t:this.shape_122,p:{x:-249.2,y:24.3}},{t:this.shape_748,p:{x:-238.1,y:25.8}},{t:this.shape_266,p:{x:-230.6,y:25.7}},{t:this.shape_742,p:{x:-219.7,y:24.8}},{t:this.shape_318,p:{x:-213.2,y:24.3}},{t:this.shape_335,p:{x:-205.6,y:25.8}},{t:this.shape_829,p:{x:-193.4,y:24.4}},{t:this.shape_212,p:{x:-187,y:24.3}},{t:this.shape_326,p:{x:-181.4,y:25.8}},{t:this.shape_260,p:{x:-173.9,y:25.7}},{t:this.shape_328,p:{x:-166.3,y:25.8}},{t:this.shape_845,p:{x:-154.9,y:24.4}},{t:this.shape_737,p:{x:-148.7,y:24.8}},{t:this.shape_331,p:{x:-142.4,y:25.8}},{t:this.shape_339,p:{x:-132.9,y:25.7}},{t:this.shape_1137},{t:this.shape_998,p:{x:-113.3,y:24.4}},{t:this.shape_294,p:{x:-107.7,y:25.8}},{t:this.shape_112,p:{x:-100.5,y:25.8}},{t:this.shape_255,p:{x:-93,y:25.7}},{t:this.shape_755,p:{x:-83.2,y:24.4}},{t:this.shape_245,p:{x:-77.2,y:25.7}},{t:this.shape_732,p:{x:-66.4,y:24.8}},{t:this.shape_278,p:{x:-59.9,y:24.3}},{t:this.shape_309,p:{x:-52.3,y:25.8}},{t:this.shape_741,p:{x:-38.5,y:25.7}},{t:this.shape_303,p:{x:-28.9,y:25.8}},{t:this.shape_241,p:{x:-21.3,y:25.7}},{t:this.shape_276,p:{x:-13.7,y:25.8}},{t:this.shape_193,p:{x:-1.6,y:24.3}},{t:this.shape_311,p:{x:5.7,y:25.8}},{t:this.shape_105,p:{x:12.7,y:25.7}},{t:this.shape_305,p:{x:22.7,y:25.8}},{t:this.shape_218,p:{x:30.2,y:25.7}},{t:this.shape_238,p:{x:37.6,y:24.3}},{t:this.shape_279,p:{x:48.7,y:25.8}},{t:this.shape_291,p:{x:55.4,y:25.8}},{t:this.shape_169,p:{x:61.5,y:24.3}},{t:this.shape_286,p:{x:67.1,y:25.8}},{t:this.shape_287,p:{x:74.3,y:25.8}},{t:this.shape_587,p:{x:80.6,y:24.8}},{t:this.shape_116,p:{x:89.8,y:20.7}},{t:this.shape_900,p:{x:96.2,y:24.4}},{t:this.shape_302,p:{x:102.8,y:25.8}},{t:this.shape_574,p:{x:109.4,y:24.8}},{t:this.shape_554,p:{x:114.9,y:24.8}},{t:this.shape_280,p:{x:121.4,y:25.8}},{t:this.shape_329,p:{x:128.5,y:25.7}},{t:this.shape_195,p:{x:134.4,y:25.7}},{t:this.shape_797,p:{x:145.8,y:24.4}},{t:this.shape_333,p:{x:152,y:24.8}},{t:this.shape_293,p:{x:158.3,y:25.8}},{t:this.shape_229,p:{x:167.8,y:25.7}},{t:this.shape_1136},{t:this.shape_1096,p:{x:183.6,y:20.7}},{t:this.shape_342,p:{x:188.3,y:28.5}},{t:this.shape_1135},{t:this.shape_283,p:{x:-318.3,y:65}},{t:this.shape_1134,p:{y:60.9,x:-309.4}},{t:this.shape_180,p:{x:-303.7,y:62.2}},{t:this.shape_811,p:{x:-292.9,y:61.3}},{t:this.shape_634,p:{x:-286.4,y:60.8}},{t:this.shape_1133,p:{y:62.3,x:-278.8}},{t:this.shape_836,p:{x:-267,y:62.3}},{t:this.shape_1132},{t:this.shape_806,p:{x:-252.7,y:61.3}},{t:this.shape_802,p:{x:-248.2,y:60.9}},{t:this.shape_358,p:{x:-242.3,y:62.3}},{t:this.shape_160,p:{x:-234.7,y:62.2}},{t:this.shape_640,p:{x:-228.1,y:62.3}},{t:this.shape_905,p:{x:-215.3,y:62.2}},{t:this.shape_1131,p:{x:-205.7,y:62.3}},{t:this.shape_140,p:{x:-198.1,y:62.2}},{t:this.shape_213,p:{x:-190.5,y:62.3}},{t:this.shape_1130,p:{x:-178.4,y:60.8}},{t:this.shape_805,p:{x:-171.1,y:62.3}},{t:this.shape_162,p:{x:-164.1,y:62.2}},{t:this.shape_1129},{t:this.shape_611,p:{x:-151.9,y:62.3}},{t:this.shape_1128,p:{x:-145.2,y:62.3}},{t:this.shape_187,p:{x:-139.1,y:60.8}},{t:this.shape_1127,p:{x:-133.5,y:62.3}},{t:this.shape_621,p:{x:-126.3,y:62.3}},{t:this.shape_639,p:{x:-120,y:61.3}},{t:this.shape_638,p:{x:-110.2,y:61.3}},{t:this.shape_620,p:{x:-103.7,y:60.8}},{t:this.shape_1126,p:{x:-96.1,y:62.3}},{t:this.shape_376,p:{x:-84,y:63.6}},{t:this.shape_803,p:{x:-76.7,y:62.3}},{t:this.shape_632,p:{x:-70.2,y:61.3}},{t:this.shape_627,p:{x:-64.6,y:61.3}},{t:this.shape_1125,p:{x:-58.1,y:62.3}},{t:this.shape_216,p:{x:-51.1,y:62.2}},{t:this.shape_137,p:{x:-45.1,y:62.2}},{t:this.shape_413,p:{x:-33.7,y:63.7}},{t:this.shape_813,p:{x:-26.5,y:62.3}},{t:this.shape_144,p:{x:-18.9,y:62.3}},{t:this.shape_613,p:{x:-7.1,y:60.8}},{t:this.shape_799,p:{x:0.3,y:62.3}},{t:this.shape_1124},{t:this.shape_807,p:{x:14.7,y:62.3}},{t:this.shape_389,p:{x:26.8,y:63.6}},{t:this.shape_239,p:{x:33.7,y:62.2}},{t:this.shape_636,p:{x:39.6,y:62.3}},{t:this.shape_617,p:{x:46.8,y:62.3}},{t:this.shape_1123,p:{x:52.1,y:60.9}},{t:this.shape_374,p:{x:58,y:62.3}},{t:this.shape_107,p:{x:65.5,y:62.3}},{t:this.shape_606,p:{x:72.1,y:62.3}},{t:this.shape_125,p:{x:77.3,y:60.8}},{t:this.shape_243,p:{x:82.5,y:63.7}},{t:this.shape_222,p:{x:93.8,y:60.8}},{t:this.shape_630,p:{x:101.7,y:62.3}},{t:this.shape_809,p:{x:108.4,y:60.8}},{t:this.shape_619,p:{x:112.5,y:60.9}},{t:this.shape_111,p:{x:118.4,y:62.2}},{t:this.shape_618,p:{x:126,y:62.3}},{t:this.shape_102,p:{x:133.5,y:60.8}},{t:this.shape_210,p:{x:140,y:65}},{t:this.shape_1009,p:{y:97.4}},{t:this.shape_127,p:{x:-318.3,y:101.5}},{t:this.shape_974,p:{x:-308,y:97.3}},{t:this.shape_561,p:{x:-299.8,y:100.1}},{t:this.shape_1122},{t:this.shape_227,p:{x:-286.1,y:97.3}},{t:this.shape_373,p:{x:-280.9,y:100.2}},{t:this.shape_1121,p:{x:-271.4,y:97.4}},{t:this.shape_330,p:{x:-266.4,y:97.8}},{t:this.shape_327,p:{x:-256.7,y:97.8}},{t:this.shape_315,p:{x:-250.2,y:98.8}},{t:this.shape_316,p:{x:-239.4,y:97.8}},{t:this.shape_546,p:{x:-232.9,y:97.3}},{t:this.shape_552,p:{x:-225.3,y:98.8}},{t:this.shape_304,p:{x:-214.5,y:97.8}},{t:this.shape_549,p:{x:-208.1,y:98.8}},{t:this.shape_149,p:{x:-201.2,y:98.7}},{t:this.shape_139,p:{x:-195.5,y:99.9}},{t:this.shape_547,p:{x:-188.2,y:98.8}},{t:this.shape_297,p:{x:-181.6,y:97.8}},{t:this.shape_153,p:{x:-171.4,y:98.7}},{t:this.shape_545,p:{x:-165.5,y:98.8}},{t:this.shape_99,p:{x:-158.1,y:99.9}},{t:this.shape_124,p:{x:-152.9,y:97.4}},{t:this.shape_129,p:{x:-147,y:98.8}},{t:this.shape_108,p:{x:-139.4,y:98.7}},{t:this.shape_131,p:{x:-132.8,y:98.8}},{t:this.shape_542,p:{x:-120.6,y:98.8}},{t:this.shape_788,p:{x:-113.6,y:97.4}},{t:this.shape_292,p:{x:-108.6,y:97.8}},{t:this.shape_135,p:{x:-102.1,y:97.3}},{t:this.shape_133,p:{x:-91.2,y:97.8}},{t:this.shape_130,p:{x:-84.7,y:97.3}},{t:this.shape_106,p:{x:-77.1,y:98.8}},{t:this.shape_941,p:{x:-65}},{t:this.shape_103,p:{x:-57.7,y:98.8}},{t:this.shape_115,p:{x:-51.2,y:97.8}},{t:this.shape_110,p:{x:-45.6,y:97.8}},{t:this.shape_104,p:{x:-39.1,y:98.8}},{t:this.shape_789,p:{x:-32.1,y:98.7}},{t:this.shape_100,p:{x:-26.1,y:98.7}},{t:this.shape_98,p:{x:-19.9,y:101.5}}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_911,p:{x:-324,y:-160.1}},{t:this.shape_335,p:{x:-317.1,y:-158.7}},{t:this.shape_133,p:{x:-310.5,y:-159.7}},{t:this.shape_206,p:{y:-163.8,x:-306.7}},{t:this.shape_285,p:{x:-302.8,y:-158.7}},{t:this.shape_144,p:{x:-291.9,y:-158.7}},{t:this.shape_284,p:{x:-285.3,y:-158.7}},{t:this.shape_328,p:{x:-278.7,y:-158.7}},{t:this.shape_115,p:{x:-267.8,y:-159.7}},{t:this.shape_278,p:{x:-261.3,y:-160.2}},{t:this.shape_309,p:{x:-253.7,y:-158.7}},{t:this.shape_724,p:{x:-241.6,y:-157.4}},{t:this.shape_755,p:{x:-236.2,y:-160.1}},{t:this.shape_287,p:{x:-230.6,y:-158.7}},{t:this.shape_110,p:{x:-224.3,y:-159.7}},{t:this.shape_107,p:{x:-217.8,y:-158.7}},{t:this.shape_789,p:{x:-210.7,y:-158.8}},{t:this.shape_303,p:{x:-204.8,y:-158.7}},{t:this.shape_896,p:{x:-192.7,y:-160.2}},{t:this.shape_291,p:{x:-185.2,y:-158.7}},{t:this.shape_646,p:{x:-179.1,y:-160.2}},{t:this.shape_114,p:{x:-173.6,y:-158.7}},{t:this.shape_786,p:{x:-164.6,y:-158.7}},{t:this.shape_305,p:{x:-151.6,y:-158.7}},{t:this.shape_279,p:{x:-145.1,y:-158.7}},{t:this.shape_302,p:{x:-134.4,y:-158.7}},{t:this.shape_100,p:{x:-126.9,y:-158.8}},{t:this.shape_286,p:{x:-115.1,y:-158.7}},{t:this.shape_910,p:{x:-107.8,y:-158.7}},{t:this.shape_293,p:{x:-100.6,y:-158.7}},{t:this.shape_741,p:{x:-91.1,y:-158.8}},{t:this.shape_776,p:{x:-81.2,y:-157.4}},{t:this.shape_125,p:{x:-75.3,y:-160.2}},{t:this.shape_280,p:{x:-69.7,y:-158.7}},{t:this.shape_909},{t:this.instance_2}]},1).to({state:[{t:this.shape_1120,p:{y:-160.1}},{t:this.shape_699,p:{x:-318.3,y:-156}},{t:this.shape_797,p:{x:-308,y:-160.1}},{t:this.shape_500,p:{x:-300.9,y:-158.7}},{t:this.shape_1302,p:{x:-294.8,y:-160.2}},{t:this.shape_495,p:{x:-289.2,y:-158.7}},{t:this.shape_287,p:{x:-281.9,y:-158.7}},{t:this.shape_574,p:{x:-275.6,y:-159.7}},{t:this.shape_554,p:{x:-265.9,y:-159.7}},{t:this.shape_323,p:{x:-259.4,y:-160.2}},{t:this.shape_490,p:{x:-251.8,y:-158.7}},{t:this.shape_1301},{t:this.shape_489,p:{x:-230.8,y:-158.7}},{t:this.shape_305,p:{x:-223.4,y:-158.7}},{t:this.shape_1300,p:{x:-217.4,y:-160.2}},{t:this.shape_823,p:{x:-213.8,y:-160.1}},{t:this.shape_537,p:{x:-207.8,y:-158.8}},{t:this.shape_548,p:{x:-200.5,y:-157.6}},{t:this.shape_1299},{t:this.shape_625,p:{x:-181.7,y:-158.8}},{t:this.shape_1298},{t:this.shape_528,p:{x:-169.1,y:-158.7}},{t:this.shape_318,p:{x:-162.5,y:-160.2}},{t:this.shape_908,p:{x:-150.7}},{t:this.shape_573,p:{x:-144.6,y:-158.7}},{t:this.shape_132,p:{x:-137.1,y:-158.7}},{t:this.shape_392,p:{x:-131.1,y:-160.2}},{t:this.shape_1138,p:{x:-123.3,y:-160.1}},{t:this.shape_534,p:{x:-117.3,y:-158.8}},{t:this.shape_333,p:{x:-106.5,y:-159.7}},{t:this.shape_278,p:{x:-100,y:-160.2}},{t:this.shape_476,p:{x:-92.4,y:-158.7}},{t:this.shape_977,p:{x:-78.6,y:-158.8}},{t:this.shape_473,p:{x:-69,y:-158.7}},{t:this.shape_532,p:{x:-61.4,y:-158.8}},{t:this.shape_1297},{t:this.shape_1296,p:{x:-41.7,y:-160.2}},{t:this.shape_302,p:{x:-34.4,y:-158.7}},{t:this.shape_501,p:{x:-27.4,y:-158.8}},{t:this.shape_605,p:{x:-24.7,y:-156}},{t:this.shape_1046,p:{x:-15.1,y:-158.7}},{t:this.shape_785,p:{x:-8.6,y:-160.1}},{t:this.shape_416,p:{x:-2.3,y:-158.8}},{t:this.shape_340,p:{x:3.6,y:-158.7}},{t:this.shape_527,p:{x:10.2,y:-158.7}},{t:this.shape_515,p:{x:15.9,y:-158.7}},{t:this.shape_1095,p:{x:25.2,y:-163.8}},{t:this.shape_1295},{t:this.shape_1294},{t:this.shape_564,p:{x:46.5,y:-158.7}},{t:this.shape_508,p:{x:54.1,y:-158.8}},{t:this.shape_1293},{t:this.shape_1292},{t:this.shape_1091,p:{x:80.3,y:-158.7}},{t:this.shape_296,p:{x:87.3,y:-158.8}},{t:this.shape_122,p:{x:97.6,y:-160.2}},{t:this.shape_338,p:{x:104.5,y:-158.7}},{t:this.shape_1189,p:{x:111.8,y:-157.3}},{t:this.shape_1291},{t:this.shape_112,p:{x:126.7,y:-158.7}},{t:this.shape_293,p:{x:134.1,y:-158.7}},{t:this.shape_329,p:{x:141.1,y:-158.8}},{t:this.shape_488,p:{x:146.9,y:-160.2}},{t:this.shape_1290},{t:this.shape_1289},{t:this.shape_514,p:{x:-318.3,y:-119.5}},{t:this.shape_1134,p:{y:-123.6,x:-309.4}},{t:this.shape_496,p:{x:-303.7,y:-122.3}},{t:this.shape_814,p:{x:-292.9,y:-123.2}},{t:this.shape_1288},{t:this.shape_1133,p:{y:-122.2,x:-278.8}},{t:this.shape_811,p:{x:-267.9,y:-123.2}},{t:this.shape_1287},{t:this.shape_836,p:{x:-254,y:-122.2}},{t:this.shape_1042,p:{x:-247.9,y:-123.7}},{t:this.shape_1286,p:{x:-238.2}},{t:this.shape_1285},{t:this.shape_806,p:{x:-223.8,y:-123.2}},{t:this.shape_1284,p:{x:-219.3,y:-123.6}},{t:this.shape_626,p:{x:-213.4,y:-122.2}},{t:this.shape_491,p:{x:-205.9,y:-122.3}},{t:this.shape_1283,p:{x:-199.3}},{t:this.shape_1282},{t:this.shape_644,p:{x:-180.8}},{t:this.shape_251,p:{x:-173.9,y:-122.3}},{t:this.shape_1281,p:{x:-171.4}},{t:this.shape_1280,p:{x:-161,y:-122.2}},{t:this.shape_1279},{t:this.shape_1278},{t:this.shape_374,p:{x:-138.7,y:-122.2}},{t:this.shape_1277,p:{x:-132.1}},{t:this.shape_1131,p:{x:-125.5,y:-122.2}},{t:this.shape_622,p:{x:-113.8}},{t:this.shape_1276,p:{x:-103.1,y:-122.2}},{t:this.shape_1077,p:{x:-96.5,y:-122.2}},{t:this.shape_1275,p:{x:-90.9}},{t:this.shape_639,p:{x:-85.9,y:-123.2}},{t:this.shape_608,p:{x:-79.5}},{t:this.shape_1274},{t:this.shape_567,p:{x:-65.8,y:-123.7}},{t:this.shape_1128,p:{x:-60.2,y:-122.2}},{t:this.shape_431,p:{x:-48.1,y:-123.7}},{t:this.shape_216,p:{x:-41.2,y:-122.3}},{t:this.shape_768,p:{x:-35.2,y:-122.2}},{t:this.shape_1273,p:{x:-28.6,y:-122.2}},{t:this.shape_637,p:{x:-22,y:-123.7}},{t:this.shape_1272,p:{x:-11.2,y:-122.2}},{t:this.shape_802,p:{x:-6.5,y:-123.6}},{t:this.shape_1271},{t:this.shape_1127,p:{x:6,y:-122.2}},{t:this.shape_424,p:{x:12.2,y:-119.5}},{t:this.shape_1061,p:{y:-87.1}},{t:this.shape_342,p:{x:-318.3,y:-83}},{t:this.shape_1037,p:{x:-306.1,y:-87.1}},{t:this.shape_1173,p:{x:-297.8,y:-85.7}},{t:this.shape_607,p:{x:-291.8,y:-87.2}},{t:this.shape_404,p:{x:-286.3,y:-87.2}},{t:this.shape_379,p:{x:-273.7,y:-87.2}},{t:this.shape_749,p:{x:-265.9,y:-85.7}},{t:this.shape_542,p:{x:-256.9,y:-85.7}},{t:this.shape_486,p:{x:-247.9,y:-85.8}},{t:this.shape_330,p:{x:-236.4,y:-86.7}},{t:this.shape_553,p:{x:-229.9,y:-87.2}},{t:this.shape_547,p:{x:-222.3,y:-85.7}},{t:this.shape_121,p:{x:-211.4,y:-90.8}},{t:this.shape_282,p:{x:-204.5,y:-87.1}},{t:this.shape_1270},{t:this.shape_327,p:{x:-189.2,y:-86.7}},{t:this.shape_788,p:{x:-184.7,y:-87.1}},{t:this.shape_824,p:{x:-178.8,y:-85.7}},{t:this.shape_478,p:{x:-171.2,y:-85.8}},{t:this.shape_1029,p:{x:-165.2,y:-90.8}},{t:this.shape_1269},{t:this.shape_545,p:{x:-147.2,y:-85.7}},{t:this.shape_1187,p:{x:-140,y:-84.3}},{t:this.shape_786,p:{x:-126.5,y:-85.7}},{t:this.shape_546,p:{x:-117.5,y:-87.2}},{t:this.shape_551,p:{x:-111.9}},{t:this.shape_388,p:{x:-107.4,y:-87.2}},{t:this.shape_106,p:{x:-101.8,y:-85.7}},{t:this.shape_123,p:{x:-89.7,y:-85.7}},{t:this.shape_468,p:{x:-84,y:-87.2}},{t:this.shape_101,p:{x:-80.4,y:-87.1}},{t:this.shape_113,p:{x:-74.8,y:-85.7}},{t:this.shape_539,p:{x:-67.4}},{t:this.shape_109,p:{x:-62.5,y:-87.1}},{t:this.shape_463,p:{x:-56.5,y:-85.8}},{t:this.shape_536,p:{x:-49.2,y:-84.6}},{t:this.shape_1268},{t:this.shape_795,p:{x:-25.9,y:-85.7}},{t:this.shape_1267},{t:this.shape_129,p:{x:-11.5,y:-85.7}},{t:this.shape_316,p:{x:-4.9,y:-86.7}},{t:this.shape_304,p:{x:5.5,y:-86.7}},{t:this.shape_135,p:{x:12,y:-87.2}},{t:this.shape_1266,p:{x:19.4}},{t:this.shape_297,p:{x:26,y:-86.7}},{t:this.shape_484,p:{x:37,y:-84.3}},{t:this.shape_595,p:{x:44.2,y:-85.7}},{t:this.shape_730,p:{x:51.7,y:-85.7}},{t:this.shape_602,p:{x:65.6}},{t:this.shape_1265,p:{x:74.4}},{t:this.shape_455,p:{x:81.9,y:-85.8}},{t:this.shape_292,p:{x:88.6,y:-86.7}},{t:this.shape_133,p:{x:99,y:-86.7}},{t:this.shape_114,p:{x:105.4,y:-85.7}},{t:this.shape_705,p:{x:117.8,y:-85.7}},{t:this.shape_571,p:{x:124.4,y:-85.7}},{t:this.shape_104,p:{x:131.1,y:-85.7}},{t:this.shape_579,p:{x:143.4,y:-85.7}},{t:this.shape_557,p:{x:149.9,y:-85.7}},{t:this.shape_549,p:{x:161.2,y:-85.7}},{t:this.shape_543,p:{x:172.6,y:-85.7}},{t:this.shape_115,p:{x:178.3,y:-86.7}},{t:this.shape_103,p:{x:184.6,y:-85.7}},{t:this.shape_859,p:{x:191.6,y:-85.8}},{t:this.shape_110,p:{x:196.6,y:-86.7}},{t:this.shape_1264},{t:this.shape_434,p:{x:207,y:-85.8}},{t:this.shape_519,p:{x:214.4,y:-84.6}},{t:this.shape_862,p:{x:-323.9}},{t:this.shape_1023,p:{x:-316.5,y:-67.5}},{t:this.shape_1026,p:{x:-310.9,y:-68.9}},{t:this.shape_407,p:{x:-305,y:-67.6}},{t:this.shape_861,p:{x:-298.3,y:-68.4}},{t:this.shape_860,p:{x:-288.6}},{t:this.shape_1263},{t:this.shape_834,p:{x:-275.5,y:-67.6}},{t:this.shape_507,p:{x:-265.7,y:-66.1}},{t:this.shape_535,p:{x:-258.5}},{t:this.shape_683,p:{x:-251,y:-67.4}},{t:this.shape_289,p:{x:-243.9,y:-67.6}},{t:this.shape_499,p:{x:-234.8,y:-67.5}},{t:this.shape_533,p:{x:-228.3,y:-67.5}},{t:this.shape_450,p:{x:-218.8,y:-67.6}},{t:this.shape_847,p:{x:-208.9}},{t:this.shape_516,p:{x:-202.9,y:-68.9}},{t:this.shape_335,p:{x:-197.3,y:-67.5}},{t:this.shape_1262},{t:this.shape_1034,p:{x:-179,y:-67.4}},{t:this.shape_1153,p:{x:-170,y:-69}},{t:this.shape_1031,p:{x:-164.4,y:-68.9}},{t:this.shape_504,p:{x:-158.8,y:-67.5}},{t:this.shape_530,p:{x:-151.6,y:-69}},{t:this.shape_1261,p:{x:-141.8,y:-68.9}},{t:this.shape_314,p:{x:-136.8,y:-67.5}},{t:this.shape_592,p:{x:-126,y:-67.4}},{t:this.shape_312,p:{x:-119.4,y:-67.5}},{t:this.shape_328,p:{x:-112.7,y:-67.5}},{t:this.shape_367,p:{x:-105.3,y:-68.9}},{t:this.shape_856,p:{x:-94.1,y:-68.4}},{t:this.shape_487,p:{x:-87.7}},{t:this.shape_361,p:{x:-76.1,y:-68.9}},{t:this.shape_1260},{t:this.shape_503,p:{x:-57.4,y:-68.4}},{t:this.shape_480,p:{x:-50.9,y:-69}},{t:this.shape_309,p:{x:-43.3,y:-67.5}},{t:this.shape_522,p:{x:-32.5}},{t:this.shape_521,p:{x:-28.4,y:-68.9}},{t:this.shape_1259},{t:this.shape_529,p:{x:-17.4,y:-68.9}},{t:this.shape_380,p:{x:-11.5,y:-67.6}},{t:this.shape_477,p:{x:-4.1,y:-66.3}},{t:this.shape_283,p:{x:1.7,y:-64.7}},{t:this.shape_1258},{t:this.shape_285,p:{x:16.5,y:-67.5}},{t:this.shape_517,p:{x:23,y:-67.5}},{t:this.shape_189,p:{x:32.5,y:-67.6}},{t:this.shape_303,p:{x:42.1,y:-67.5}},{t:this.shape_1257},{t:this.shape_353,p:{x:57.7,y:-68.9}},{t:this.shape_291,p:{x:65.6,y:-67.5}},{t:this.shape_509,p:{x:73.1,y:-67.5}},{t:this.shape_493,p:{x:84.6,y:-67.5}},{t:this.shape_284,p:{x:91.1,y:-67.5}},{t:this.shape_483,p:{x:101,y:-68.4}},{t:this.shape_474,p:{x:107.5,y:-69}},{t:this.shape_286,p:{x:115.1,y:-67.5}},{t:this.shape_481,p:{x:126.6,y:-67.5}},{t:this.shape_357,p:{x:132.3,y:-68.9}},{t:this.shape_512,p:{x:137.9,y:-67.5}},{t:this.shape_364,p:{x:145.4,y:-67.6}},{t:this.shape_280,p:{x:153,y:-67.5}},{t:this.shape_279,p:{x:163.8,y:-67.5}},{t:this.shape_475,p:{x:169.5,y:-68.4}},{t:this.shape_479,p:{x:175.9,y:-67.5}},{t:this.shape_339,p:{x:185.4,y:-67.6}},{t:this.shape_850,p:{x:195.3}},{t:this.shape_976,p:{x:201.7,y:-67.4}},{t:this.shape_1039,p:{y:-32.4}},{t:this.shape_210,p:{x:-318.3,y:-28.2}},{t:this.shape_1256},{t:this.shape_1255},{t:this.shape_375,p:{x:-292.4,y:-32.4}},{t:this.shape_1254},{t:this.shape_1253},{t:this.shape_384,p:{x:-272.8}},{t:this.shape_1252,p:{x:-266.2,y:-31}},{t:this.shape_1251},{t:this.shape_1250},{t:this.shape_1249,p:{x:-239.7,y:-31}},{t:this.shape_371,p:{x:-226.4}},{t:this.shape_1248,p:{x:-218.5,y:-29.6}},{t:this.shape_1247},{t:this.shape_1140,p:{x:-207.5,y:-32.4}},{t:this.shape_359,p:{x:-201.6,y:-31}},{t:this.shape_354,p:{x:-194.1,y:-31.1}},{t:this.shape_383,p:{x:-180.6,y:-32.5}},{t:this.shape_400,p:{x:-173.7,y:-31}},{t:this.shape_413,p:{x:-166.4,y:-29.6}},{t:this.shape_385,p:{x:-153.6}},{t:this.shape_348,p:{x:-146.1,y:-31.1}},{t:this.shape_310,p:{x:-138.6,y:-32.4}},{t:this.shape_382,p:{x:-126}},{t:this.shape_1246},{t:this.shape_381,p:{x:-113.9,y:-31}},{t:this.shape_589,p:{x:-107,y:-31.1}},{t:this.shape_1245},{t:this.shape_1244},{t:this.shape_321,p:{x:-91.5,y:-31.1}},{t:this.shape_459,p:{x:-84.2,y:-29.8}},{t:this.shape_389,p:{x:-70.9,y:-29.6}},{t:this.shape_368,p:{x:-63.6,y:-31}},{t:this.shape_1243},{t:this.shape_301,p:{x:-52.1,y:-31.1}},{t:this.shape_1242},{t:this.shape_841,p:{x:-41}},{t:this.shape_298,p:{x:-35,y:-31.1}},{t:this.shape_448,p:{x:-27.7,y:-29.8}},{t:this.shape_1014,p:{x:-15.6,y:-31.9}},{t:this.shape_1241},{t:this.shape_387,p:{x:-1.5,y:-31}},{t:this.shape_585,p:{x:11.8,y:-30.9}},{t:this.shape_281,p:{x:19.4,y:-31.1}},{t:this.shape_1013,p:{x:28.4,y:-30.9}},{t:this.shape_365,p:{x:37.3,y:-31}},{t:this.shape_266,p:{x:44.8,y:-31.1}},{t:this.shape_391,p:{x:51.4,y:-31.9}},{t:this.shape_378,p:{x:57.9,y:-31}},{t:this.shape_300,p:{x:65.4,y:-32.4}},{t:this.shape_356,p:{x:78,y:-31}},{t:this.shape_844,p:{x:85}},{t:this.shape_808,p:{x:92.4,y:-31}},{t:this.shape_386,p:{x:99,y:-31.9}},{t:this.shape_343,p:{x:104.5,y:-31}},{t:this.shape_1240,p:{x:118.3,y:-30.9}},{t:this.shape_1016,p:{x:125.3,y:-32.4}},{t:this.shape_360,p:{x:130.3,y:-31.9}},{t:this.shape_1239},{t:this.shape_352,p:{x:149.2,y:-31.9}},{t:this.shape_1017,p:{x:155.7,y:-32.5}},{t:this.shape_369,p:{x:163.3,y:-31}},{t:this.shape_349,p:{x:176.6,y:-32.5}},{t:this.shape_362,p:{x:184.2,y:-31}},{t:this.shape_355,p:{x:191.7,y:-31}},{t:this.shape_308,p:{x:197.7,y:-32.4}},{t:this.shape_1238},{t:this.shape_260,p:{x:207.2,y:-31.1}},{t:this.shape_320,p:{x:214.6,y:-29.8}},{t:this.shape_996,p:{y:-14.2}},{t:this.shape_1237},{t:this.shape_568,p:{x:-311,y:-12.7}},{t:this.shape_131,p:{x:-304.4,y:-12.7}},{t:this.shape_130,p:{x:-297.8,y:-14.2}},{t:this.shape_127,p:{x:-291.6,y:-10}},{t:this.shape_1236},{t:this.shape_937,p:{x:-318.9,y:22.4}},{t:this.shape_1235},{t:this.shape_502,p:{x:-305.2,y:23.8}},{t:this.shape_715,p:{x:-290.1,y:23.7}},{t:this.shape_268,p:{x:-280.6,y:23.8}},{t:this.shape_257,p:{x:-273.5,y:25.2}},{t:this.shape_255,p:{x:-260.7,y:23.7}},{t:this.shape_1234},{t:this.shape_693,p:{x:-246.5,y:22.8}},{t:this.shape_226,p:{x:-242,y:22.4}},{t:this.shape_232,p:{x:-236.4}},{t:this.shape_252,p:{x:-229.2}},{t:this.shape_689,p:{x:-217,y:22.8}},{t:this.shape_1233},{t:this.shape_263,p:{x:-203,y:23.8}},{t:this.shape_264,p:{x:-196.5,y:22.8}},{t:this.shape_247,p:{x:-185.4,y:22.8}},{t:this.shape_1232,p:{x:-178.9}},{t:this.shape_246,p:{x:-171.3}},{t:this.shape_269,p:{x:-157.8}},{t:this.shape_198,p:{x:-150.9,y:23.7}},{t:this.shape_230,p:{x:-145,y:23.8}},{t:this.shape_231,p:{x:-137.8}},{t:this.shape_237,p:{x:-130.6}},{t:this.shape_1231},{t:this.shape_1230},{t:this.shape_267,p:{x:-108.1,y:22.4}},{t:this.shape_265,p:{x:-103.2}},{t:this.shape_701,p:{x:-91.4,y:23.8}},{t:this.shape_221,p:{x:-84.1}},{t:this.shape_826,p:{x:-77.1,y:23.7}},{t:this.shape_243,p:{x:-71.5,y:25.2}},{t:this.shape_250,p:{x:-59.7}},{t:this.shape_249,p:{x:-55,y:22.4}},{t:this.shape_394,p:{x:-47.1,y:23.7}},{t:this.shape_1229,p:{x:-39.5,y:22.4}},{t:this.shape_1228},{t:this.shape_256,p:{x:-29.6,y:23.8}},{t:this.shape_822,p:{x:-22.6,y:23.7}},{t:this.shape_235,p:{x:-12.1,y:22.8}},{t:this.shape_1079,p:{x:-5.6,y:23.8}},{t:this.shape_220,p:{x:7.1}},{t:this.shape_430,p:{x:12.9,y:22.3}},{t:this.shape_687,p:{x:18.4,y:23.8}},{t:this.shape_245,p:{x:26,y:23.7}},{t:this.shape_219,p:{x:33.6}},{t:this.shape_248,p:{x:45.7}},{t:this.shape_217,p:{x:51.4,y:22.8}},{t:this.shape_233,p:{x:57.8,y:23.8}},{t:this.shape_1227},{t:this.shape_1226},{t:this.shape_1225,p:{x:83.2,y:27.7}},{t:this.shape_336,p:{x:95.6,y:22.3}},{t:this.shape_467,p:{x:103,y:23.8}},{t:this.shape_211,p:{x:109.7,y:22.8}},{t:this.shape_1224,p:{x:121.7}},{t:this.shape_215,p:{x:129.3}},{t:this.shape_223,p:{x:136.8,y:23.8}},{t:this.shape_1223,p:{x:142.8,y:22.3}},{t:this.shape_1222,p:{x:146.4,y:22.4}},{t:this.shape_241,p:{x:152.3,y:23.7}},{t:this.shape_259,p:{x:159.7,y:24.9}},{t:this.shape_1221},{t:this.shape_443,p:{x:179.7,y:23.7}},{t:this.shape_411,p:{x:185.6,y:23.8}},{t:this.shape_225,p:{x:192.2}},{t:this.shape_224,p:{x:198.9}},{t:this.shape_1220},{t:this.shape_214,p:{x:215}},{t:this.shape_1219,p:{x:-324.3}},{t:this.shape_1130,p:{x:-316.5,y:40.6}},{t:this.shape_275,p:{x:-310.6,y:40.6}},{t:this.shape_1126,p:{x:-305,y:42}},{t:this.shape_638,p:{x:-293.7,y:41.1}},{t:this.shape_358,p:{x:-287.3,y:42}},{t:this.shape_815,p:{x:-276.1}},{t:this.shape_1123,p:{x:-271.5,y:40.6}},{t:this.shape_337,p:{x:-263.5,y:41.9}},{t:this.shape_393,p:{x:-253.9,y:42.1}},{t:this.shape_244,p:{x:-247.8,y:40.6}},{t:this.shape_632,p:{x:-243.2,y:41.1}},{t:this.shape_1218,p:{x:-236.8}},{t:this.shape_218,p:{x:-229.3,y:41.9}},{t:this.shape_1125,p:{x:-221.7,y:42}},{t:this.shape_810,p:{x:-214.2,y:42}},{t:this.shape_345,p:{x:-206.6,y:42.1}},{t:this.shape_643,p:{x:-200,y:42}},{t:this.shape_1117,p:{y:40.6,x:-194.9}},{t:this.shape_645,p:{x:-189.6,y:43.4}},{t:this.shape_805,p:{x:-177.9,y:42}},{t:this.shape_1217},{t:this.shape_635,p:{x:-162.4,y:43.4}},{t:this.shape_258,p:{x:-156.4,y:40.6}},{t:this.shape_192,p:{x:-151.2,y:43.4}},{t:this.shape_803,p:{x:-139.5,y:42}},{t:this.shape_195,p:{x:-132,y:41.9}},{t:this.shape_274,p:{x:-124.5,y:40.6}},{t:this.shape_820,p:{x:-111.7,y:40.6}},{t:this.shape_880,p:{x:-105.8,y:40.6}},{t:this.shape_807,p:{x:-100.2,y:42}},{t:this.shape_180,p:{x:-92.6,y:41.9}},{t:this.shape_254,p:{x:-85.1,y:40.6}},{t:this.shape_376,p:{x:-72.3,y:43.4}},{t:this.shape_624,p:{x:-66.9,y:40.6}},{t:this.shape_1216,p:{x:-61.2,y:42}},{t:this.shape_636,p:{x:-53.9,y:42}},{t:this.shape_212,p:{x:-47.8,y:40.6}},{t:this.shape_642,p:{x:-43.2,y:42}},{t:this.shape_1215},{t:this.shape_616,p:{x:-28.9,y:40.6}},{t:this.shape_160,p:{x:-22.9,y:41.9}},{t:this.shape_397,p:{x:-10.8,y:42}},{t:this.shape_627,p:{x:-4.2,y:41.1}},{t:this.shape_634,p:{x:2.3,y:40.5}},{t:this.shape_630,p:{x:9.9,y:42}},{t:this.shape_791,p:{x:17,y:41.9}},{t:this.shape_1214},{t:this.shape_813,p:{x:37.9,y:42}},{t:this.shape_789,p:{x:44.9,y:41.9}},{t:this.shape_238,p:{x:50.7,y:40.6}},{t:this.shape_640,p:{x:57.6,y:42}},{t:this.shape_1213},{t:this.shape_325,p:{x:73.9,y:42.1}},{t:this.shape_611,p:{x:80.5,y:42}},{t:this.shape_1212},{t:this.shape_140,p:{x:91.1,y:41.9}},{t:this.shape_204,p:{x:98.5,y:43.2}},{t:this.shape_620,p:{x:110.3,y:40.5}},{t:this.shape_618,p:{x:117.9,y:42}},{t:this.shape_799,p:{x:125.4,y:42}},{t:this.shape_646,p:{x:131.4,y:40.6}},{t:this.shape_619,p:{x:135,y:40.6}},{t:this.shape_137,p:{x:140.9,y:41.9}},{t:this.shape_194,p:{x:148.3,y:43.2}},{t:this.shape_965,p:{x:160.4,y:40.6}},{t:this.shape_271,p:{x:167.3,y:41.9}},{t:this.shape_276,p:{x:173.3,y:42.1}},{t:this.shape_606,p:{x:179.9,y:42}},{t:this.shape_613,p:{x:186.5,y:40.5}},{t:this.shape_1211},{t:this.shape_612,p:{x:207.1,y:40.6}},{t:this.shape_1210},{t:this.shape_125,p:{x:215.7,y:40.6}},{t:this.shape_179,p:{x:-324.4,y:61.4}},{t:this.shape_1209},{t:this.shape_366,p:{x:-313.6,y:60.3}},{t:this.shape_351,p:{x:-306.4,y:60.3}},{t:this.shape_1001,p:{x:-294.9,y:61.7}},{t:this.shape_1208},{t:this.shape_213,p:{x:-280.2,y:60.3}},{t:this.shape_239,p:{x:-273.1,y:60.2}},{t:this.shape_1207},{t:this.shape_181,p:{x:-257.2}},{t:this.shape_158,p:{x:-251.6}},{t:this.shape_197,p:{x:-245.3,y:59.3}},{t:this.shape_144,p:{x:-238.8,y:60.3}},{t:this.shape_236,p:{x:-231.8,y:60.2}},{t:this.shape_344,p:{x:-225.8,y:60.3}},{t:this.shape_190,p:{x:-214.2}},{t:this.shape_741,p:{x:-200.5,y:60.2}},{t:this.shape_145,p:{x:-190.9}},{t:this.shape_162,p:{x:-183.9,y:60.2}},{t:this.shape_208,p:{x:-178,y:60.3}},{t:this.shape_111,p:{x:-166.2,y:60.2}},{t:this.shape_185,p:{x:-158.7}},{t:this.shape_175,p:{x:-152.2,y:59.3}},{t:this.shape_107,p:{x:-145.7,y:60.3}},{t:this.shape_149,p:{x:-138.6,y:60.2}},{t:this.shape_178,p:{x:-132.8}},{t:this.shape_1206,p:{x:-126.8,y:58.8}},{t:this.shape_169,p:{x:-118.5,y:58.8}},{t:this.shape_170,p:{x:-113}},{t:this.shape_1205,p:{x:-105.5}},{t:this.shape_963,p:{x:-97.8,y:58.8}},{t:this.shape_183,p:{x:-88.7}},{t:this.shape_108,p:{x:-82.7,y:60.2}},{t:this.shape_168,p:{x:-76.1,y:60.3}},{t:this.shape_172,p:{x:-70.4,y:59.3}},{t:this.shape_203,p:{x:-63.9,y:60.3}},{t:this.shape_165,p:{x:-56.5}},{t:this.shape_222,p:{x:-49.1,y:58.8}},{t:this.shape_1204,p:{x:-37.1}},{t:this.shape_1203},{t:this.shape_156,p:{x:-21.2,y:60.3}},{t:this.shape_1202,p:{x:-16.5}},{t:this.shape_229,p:{x:-8.6,y:60.2}},{t:this.shape_873,p:{x:1.3,y:61.6}},{t:this.shape_461,p:{x:7.3,y:58.8}},{t:this.shape_373,p:{x:12.5,y:61.7}},{t:this.shape_153,p:{x:23.4,y:60.2}},{t:this.shape_176,p:{x:29.4,y:60.3}},{t:this.shape_1201},{t:this.shape_187,p:{x:43.2,y:58.8}},{t:this.shape_163,p:{x:48.7}},{t:this.shape_143,p:{x:55.8}},{t:this.shape_196,p:{x:61.1,y:58.9}},{t:this.shape_100,p:{x:67,y:60.2}},{t:this.shape_139,p:{x:74.4,y:61.4}},{t:this.shape_167,p:{x:84.9,y:59.3}},{t:this.shape_142,p:{x:91.4}},{t:this.shape_161,p:{x:99,y:60.3}},{t:this.shape_164,p:{x:109.8,y:59.3}},{t:this.shape_154,p:{x:116.2}},{t:this.shape_148,p:{x:123.1,y:60.2}},{t:this.shape_99,p:{x:128.8,y:61.4}},{t:this.shape_159,p:{x:136.1,y:60.3}},{t:this.shape_146,p:{x:142.7,y:59.3}},{t:this.shape_157,p:{x:149.2,y:60.3}},{t:this.shape_102,p:{x:156.7,y:58.8}},{t:this.shape_883,p:{x:169.1,y:61.6}},{t:this.shape_138,p:{x:174.5}},{t:this.shape_1200,p:{x:180.2,y:60.3}},{t:this.shape_147,p:{x:187.5,y:60.3}},{t:this.shape_227,p:{x:193.6,y:58.8}},{t:this.shape_155,p:{x:198.2,y:60.3}},{t:this.shape_98,p:{x:203.4,y:63}}]},1).to({state:[{t:this.shape_908,p:{x:-323.9}},{t:this.shape_728,p:{x:-316.1,y:-160.2}},{t:this.shape_525,p:{x:-308.5,y:-158.7}},{t:this.shape_1379,p:{x:-294.7}},{t:this.shape_754,p:{x:-287.4,y:-158.7}},{t:this.shape_574,p:{x:-280.8,y:-159.7}},{t:this.shape_294,p:{x:-274.7,y:-158.7}},{t:this.shape_332,p:{x:-267.4,y:-160.2}},{t:this.shape_554,p:{x:-254.9,y:-159.7}},{t:this.shape_315,p:{x:-248.4,y:-158.7}},{t:this.shape_586,p:{x:-240.9,y:-158.7}},{t:this.shape_1067,p:{x:-234.9,y:-160.2}},{t:this.shape_998,p:{x:-225.4,y:-160.1}},{t:this.shape_719,p:{x:-220.4}},{t:this.shape_500,p:{x:-207.9,y:-158.7}},{t:this.shape_718,p:{x:-201.3}},{t:this.shape_528,p:{x:-195.6,y:-158.7}},{t:this.shape_495,p:{x:-189,y:-158.7}},{t:this.shape_354,p:{x:-181.4,y:-158.8}},{t:this.shape_333,p:{x:-174.7,y:-159.7}},{t:this.shape_307,p:{x:-170.2,y:-160.1}},{t:this.shape_743,p:{x:-164.4,y:-158.7}},{t:this.shape_1378},{t:this.shape_1054,p:{x:-154.3,y:-160.2}},{t:this.shape_942,p:{x:-149.1,y:-157.3}},{t:this.shape_740,p:{x:-136.1,y:-158.7}},{t:this.shape_287,p:{x:-123,y:-158.7}},{t:this.shape_573,p:{x:-115.8,y:-158.7}},{t:this.shape_450,p:{x:-106.3,y:-158.8}},{t:this.shape_896,p:{x:-96.4,y:-160.2}},{t:this.shape_823,p:{x:-90.9,y:-160.1}},{t:this.shape_348,p:{x:-85,y:-158.8}},{t:this.shape_331,p:{x:-77.5,y:-158.7}},{t:this.shape_330,p:{x:-71,y:-159.7}},{t:this.shape_322,p:{x:-66.5,y:-160.1}},{t:this.shape_564,p:{x:-60.6,y:-158.7}},{t:this.shape_321,p:{x:-53,y:-158.8}},{t:this.shape_1003,p:{x:-39.6,y:-158.7}},{t:this.shape_1000,p:{x:-33,y:-160.2}},{t:this.shape_327,p:{x:-21.9,y:-159.7}},{t:this.shape_323,p:{x:-15.4,y:-160.2}},{t:this.shape_490,p:{x:-7.8,y:-158.7}},{t:this.shape_1223,p:{x:4.2,y:-160.2}},{t:this.shape_311,p:{x:9.6,y:-158.7}},{t:this.shape_527,p:{x:16.1,y:-158.7}},{t:this.shape_515,p:{x:21.8,y:-158.7}},{t:this.shape_288,p:{x:28.4,y:-158.7}},{t:this.shape_316,p:{x:40.9,y:-159.7}},{t:this.shape_595,p:{x:47.3,y:-158.7}},{t:this.shape_731,p:{x:54.8}},{t:this.shape_1377},{t:this.shape_305,p:{x:72.2,y:-158.7}},{t:this.shape_301,p:{x:79.7,y:-158.8}},{t:this.shape_404,p:{x:87.2,y:-160.2}},{t:this.shape_318,p:{x:101,y:-160.2}},{t:this.shape_489,p:{x:108.6,y:-158.7}},{t:this.shape_302,p:{x:116,y:-158.7}},{t:this.shape_227,p:{x:122,y:-160.2}},{t:this.shape_755,p:{x:125.6,y:-160.1}},{t:this.shape_298,p:{x:131.6,y:-158.8}},{t:this.shape_580,p:{x:138.9,y:-157.6}},{t:this.shape_1376},{t:this.shape_289,p:{x:159.3,y:-158.8}},{t:this.shape_730,p:{x:165.2,y:-158.7}},{t:this.shape_499,p:{x:171.8,y:-158.7}},{t:this.shape_278,p:{x:178.5,y:-160.2}},{t:this.shape_304,p:{x:191,y:-159.7}},{t:this.shape_748,p:{x:197.5,y:-158.7}},{t:this.shape_277,p:{x:205,y:-158.7}},{t:this.shape_1375},{t:this.shape_1060,p:{y:-156,x:215.2}},{t:this.shape_1374,p:{x:-322,y:-141.8}},{t:this.shape_1373},{t:this.shape_692,p:{x:-306.7}},{t:this.shape_468,p:{x:-302.2,y:-141.9}},{t:this.shape_992,p:{x:-296.6,y:-140.5}},{t:this.shape_1081,p:{x:-283.8,y:-142}},{t:this.shape_989,p:{x:-276.2,y:-140.5}},{t:this.shape_263,p:{x:-268.8,y:-140.5}},{t:this.shape_1042,p:{x:-262.8,y:-141.9}},{t:this.shape_1372},{t:this.shape_281,p:{x:-253.2,y:-140.6}},{t:this.shape_548,p:{x:-245.9,y:-139.3}},{t:this.shape_820,p:{x:-233.1,y:-141.9}},{t:this.shape_625,p:{x:-226.2,y:-140.6}},{t:this.shape_705,p:{x:-220.3,y:-140.4}},{t:this.shape_1371},{t:this.shape_1073,p:{x:-207,y:-142}},{t:this.shape_693,p:{x:-195.2,y:-141.4}},{t:this.shape_890,p:{x:-188.7,y:-140.5}},{t:this.shape_688,p:{x:-181.2}},{t:this.shape_485,p:{x:-175.2,y:-141.9}},{t:this.shape_1229,p:{x:-166.4,y:-141.9}},{t:this.shape_1370,p:{x:-161.4}},{t:this.shape_392,p:{x:-151.1,y:-141.9}},{t:this.shape_1222,p:{x:-147.5,y:-141.9}},{t:this.shape_339,p:{x:-139.5,y:-140.6}},{t:this.shape_1070,p:{x:-131.9,y:-141.9}},{t:this.shape_689,p:{x:-126.9,y:-141.4}},{t:this.shape_712,p:{x:-120.4,y:-140.5}},{t:this.shape_379,p:{x:-113,y:-141.9}},{t:this.shape_264,p:{x:-100.8,y:-141.4}},{t:this.shape_240,p:{x:-94.4,y:-140.5}},{t:this.shape_226,p:{x:-83.6,y:-141.9}},{t:this.shape_247,p:{x:-78.6,y:-141.4}},{t:this.shape_717,p:{x:-73.1}},{t:this.shape_193,p:{x:-61,y:-141.9}},{t:this.shape_501,p:{x:-54.1,y:-140.6}},{t:this.shape_683,p:{x:-48.1,y:-140.4}},{t:this.shape_695,p:{x:-41.5,y:-140.5}},{t:this.shape_1069,p:{x:-34.9,y:-142}},{t:this.shape_685,p:{x:-23.1,y:-140.5}},{t:this.shape_647,p:{x:-18.4}},{t:this.shape_1369},{t:this.shape_700,p:{x:-5.9,y:-140.5}},{t:this.shape_1225,p:{x:0.3,y:-136.5}},{t:this.shape_982,p:{x:12.3,y:-139.1}},{t:this.shape_256,p:{x:19.6,y:-140.5}},{t:this.shape_235,p:{x:26.2,y:-141.4}},{t:this.shape_653,p:{x:32.3,y:-140.5}},{t:this.shape_681,p:{x:39.6,y:-142}},{t:this.shape_1368},{t:this.shape_1080,p:{x:58.4,y:-140.5}},{t:this.shape_1367},{t:this.shape_1366},{t:this.shape_261,p:{x:80.8,y:-141.9}},{t:this.shape_684,p:{x:85.7,y:-140.5}},{t:this.shape_189,p:{x:99.6,y:-140.6}},{t:this.shape_1365},{t:this.shape_416,p:{x:116.1,y:-140.6}},{t:this.shape_697,p:{x:122.1,y:-140.5}},{t:this.shape_701,p:{x:134.5,y:-140.4}},{t:this.shape_690,p:{x:141.7,y:-140.5}},{t:this.shape_756,p:{x:148.8,y:-140.6}},{t:this.shape_679,p:{x:153.7,y:-140.5}},{t:this.shape_233,p:{x:160.2,y:-140.5}},{t:this.shape_217,p:{x:166.8,y:-141.4}},{t:this.shape_702,p:{x:171.3,y:-141.9}},{t:this.shape_388,p:{x:175.7,y:-141.9}},{t:this.shape_650,p:{x:181.3,y:-140.5}},{t:this.shape_223,p:{x:194,y:-140.5}},{t:this.shape_648,p:{x:200.5,y:-140.5}},{t:this.shape_1364},{t:this.shape_211,p:{x:215.3,y:-141.4}},{t:this.shape_1363},{t:this.shape_1362,p:{x:-317.4}},{t:this.shape_266,p:{x:-309.9,y:-122.3}},{t:this.shape_431,p:{x:-297.8,y:-123.7}},{t:this.shape_1361},{t:this.shape_592,p:{x:-278.6,y:-122.2}},{t:this.shape_1283,p:{x:-272}},{t:this.shape_1360},{t:this.shape_367,p:{x:-257.9,y:-123.7}},{t:this.shape_806,p:{x:-246.7,y:-123.2}},{t:this.shape_1359},{t:this.shape_1358},{t:this.shape_816,p:{x:-225.4,y:-123.6}},{t:this.shape_1357},{t:this.shape_1302,p:{x:-209.7,y:-123.7}},{t:this.shape_644,p:{x:-204.3}},{t:this.shape_216,p:{x:-197.3,y:-122.3}},{t:this.shape_536,p:{x:-191.6,y:-121.1}},{t:this.shape_1356},{t:this.shape_622,p:{x:-172.7}},{t:this.shape_472,p:{x:-165.8,y:-122.3}},{t:this.shape_1355},{t:this.shape_608,p:{x:-152.4}},{t:this.shape_1277,p:{x:-145.9}},{t:this.shape_1040,p:{x:-140.6,y:-119.5}},{t:this.shape_1120,p:{y:-87.1}},{t:this.shape_1038,p:{y:-83,x:-318.3}},{t:this.shape_845,p:{x:-308,y:-87.1}},{t:this.shape_547,p:{x:-300.9,y:-85.7}},{t:this.shape_1300,p:{x:-294.8,y:-87.2}},{t:this.shape_545,p:{x:-289.2,y:-85.7}},{t:this.shape_123,p:{x:-281.9,y:-85.7}},{t:this.shape_297,p:{x:-275.6,y:-86.7}},{t:this.shape_1354},{t:this.shape_549,p:{x:-257.9,y:-85.7}},{t:this.shape_292,p:{x:-251.4,y:-86.7}},{t:this.shape_113,p:{x:-245.2,y:-85.7}},{t:this.shape_590,p:{x:-238}},{t:this.shape_1353},{t:this.shape_326,p:{x:-220.1,y:-85.7}},{t:this.shape_272,p:{x:-212.6,y:-85.7}},{t:this.shape_1117,p:{y:-87.2,x:-206.6}},{t:this.shape_699,p:{x:-202.4,y:-83}},{t:this.shape_1352},{t:this.shape_1351},{t:this.shape_260,p:{x:-177.5,y:-85.8}},{t:this.shape_361,p:{x:-170.1,y:-87.2}},{t:this.shape_106,p:{x:-162.2,y:-85.7}},{t:this.shape_589,p:{x:-155.1,y:-85.8}},{t:this.shape_583,p:{x:-145,y:-87.2}},{t:this.shape_104,p:{x:-137.4,y:-85.7}},{t:this.shape_103,p:{x:-129.9,y:-85.7}},{t:this.shape_430,p:{x:-123.9,y:-87.2}},{t:this.shape_788,p:{x:-120.3,y:-87.1}},{t:this.shape_255,p:{x:-114.4,y:-85.8}},{t:this.shape_519,p:{x:-107,y:-84.6}},{t:this.shape_965,p:{x:-95.3,y:-87.2}},{t:this.shape_396,p:{x:-88.4,y:-85.8}},{t:this.shape_585,p:{x:-82.4,y:-85.7}},{t:this.shape_571,p:{x:-75.8,y:-85.7}},{t:this.shape_570,p:{x:-69.2,y:-87.2}},{t:this.shape_133,p:{x:-58.3,y:-86.7}},{t:this.shape_824,p:{x:-51.9,y:-85.7}},{t:this.shape_129,p:{x:-44.4,y:-85.7}},{t:this.shape_567,p:{x:-38.3,y:-87.2}},{t:this.shape_1155,p:{x:-33.8,y:-85.7}},{t:this.shape_1350},{t:this.shape_605,p:{x:-318.3,y:-46.5}},{t:this.shape_797,p:{x:-308,y:-50.6}},{t:this.shape_435,p:{x:-302.9}},{t:this.shape_905,p:{x:-294.9,y:-49.3}},{t:this.shape_1349},{t:this.shape_258,p:{x:-282.9,y:-50.7}},{t:this.shape_449,p:{x:-277.4,y:-49.2}},{t:this.shape_236,p:{x:-270.5,y:-49.3}},{t:this.shape_1348},{t:this.shape_1347},{t:this.shape_470,p:{x:-244.1,y:-49.2}},{t:this.shape_442,p:{x:-237.4}},{t:this.shape_880,p:{x:-231.3,y:-50.7}},{t:this.shape_429,p:{x:-225.7}},{t:this.shape_1346},{t:this.shape_1345},{t:this.shape_439,p:{x:-207.7,y:-50.6}},{t:this.shape_245,p:{x:-201.7,y:-49.3}},{t:this.shape_477,p:{x:-194.4,y:-48.1}},{t:this.shape_1344},{t:this.shape_460,p:{x:-174.5,y:-50.6}},{t:this.shape_1343},{t:this.shape_453,p:{x:-163}},{t:this.shape_169,p:{x:-152.7,y:-50.7}},{t:this.shape_440,p:{x:-147.3,y:-49.2}},{t:this.shape_426,p:{x:-140.8,y:-49.2}},{t:this.shape_415,p:{x:-135.1,y:-49.2}},{t:this.shape_1342},{t:this.shape_466,p:{x:-117.7}},{t:this.shape_464,p:{x:-111.3}},{t:this.shape_1341,p:{x:-103.8}},{t:this.shape_516,p:{x:-97.7,y:-50.7}},{t:this.shape_1340},{t:this.shape_484,p:{x:-83.2,y:-47.8}},{t:this.shape_412,p:{x:-76}},{t:this.shape_568,p:{x:-68.4,y:-49.2}},{t:this.shape_1339},{t:this.shape_427,p:{x:-51.7}},{t:this.shape_296,p:{x:-46.3,y:-49.3}},{t:this.shape_1338},{t:this.shape_375,p:{x:-35,y:-50.7}},{t:this.shape_417,p:{x:-29.4}},{t:this.shape_457,p:{x:-18.5}},{t:this.shape_425,p:{x:-12,y:-50.7}},{t:this.shape_406,p:{x:-4.4}},{t:this.shape_572,p:{x:6.8,y:-49.3}},{t:this.shape_405,p:{x:12.8}},{t:this.shape_459,p:{x:20.1,y:-48.1}},{t:this.shape_920,p:{x:25.4,y:-50.6}},{t:this.shape_1337},{t:this.shape_241,p:{x:38.8,y:-49.3}},{t:this.shape_454,p:{x:49.7}},{t:this.shape_418,p:{x:56.2,y:-50.7}},{t:this.shape_437,p:{x:63.6,y:-49.2}},{t:this.shape_419,p:{x:70.2}},{t:this.shape_408,p:{x:80.5}},{t:this.shape_422,p:{x:87.7}},{t:this.shape_502,p:{x:95.3,y:-49.2}},{t:this.shape_1336},{t:this.shape_357,p:{x:113.3,y:-50.7}},{t:this.shape_409,p:{x:118.8,y:-49.2}},{t:this.shape_218,p:{x:126.3,y:-49.3}},{t:this.shape_403,p:{x:137.1}},{t:this.shape_923,p:{x:143.6,y:-49.2}},{t:this.shape_1335},{t:this.shape_451,p:{x:158.5,y:-50.6}},{t:this.shape_1334},{t:this.shape_514,p:{x:170,y:-46.5}},{t:this.shape_1061,p:{y:-14.1}},{t:this.shape_424,p:{x:-318.3,y:-10}},{t:this.shape_1156,p:{x:-305.6,y:-14}},{t:this.shape_1333,p:{x:-296.9}},{t:this.shape_366,p:{x:-289.8,y:-12.7}},{t:this.shape_1197,p:{x:-282.5,y:-12.7}},{t:this.shape_413,p:{x:-270.3,y:-11.3}},{t:this.shape_1332},{t:this.shape_467,p:{x:-255.5,y:-12.7}},{t:this.shape_271,p:{x:-248.5,y:-12.8}},{t:this.shape_1115,p:{x:-237.9,y:-12.7}},{t:this.shape_411,p:{x:-230.6,y:-12.7}},{t:this.shape_184,p:{x:-223.6,y:-12.8}},{t:this.shape_557,p:{x:-218.6,y:-12.7}},{t:this.shape_1088,p:{x:-212,y:-12.7}},{t:this.shape_334,p:{x:-205,y:-12.8}},{t:this.shape_1094,p:{x:-194.1,y:-12.7}},{t:this.shape_195,p:{x:-186.6,y:-12.8}},{t:this.shape_1331},{t:this.shape_1330},{t:this.shape_1329,p:{x:-161.9}},{t:this.shape_553,p:{x:-155.4,y:-14.2}},{t:this.shape_1196,p:{x:-147.8,y:-12.7}},{t:this.shape_543,p:{x:-136.2,y:-12.7}},{t:this.shape_1118,p:{x:-129.5,y:-12.7}},{t:this.shape_308,p:{x:-123.4,y:-14.2}},{t:this.shape_1116,p:{x:-117.8,y:-12.7}},{t:this.shape_1111,p:{x:-110.6,y:-12.7}},{t:this.shape_1328,p:{x:-104.3}},{t:this.shape_1327},{t:this.shape_1326},{t:this.shape_180,p:{x:-86.3,y:-12.8}},{t:this.shape_1191,p:{x:-73.9,y:-12.7}},{t:this.shape_160,p:{x:-66.4,y:-12.8}},{t:this.shape_353,p:{x:-58.9,y:-14.2}},{t:this.shape_310,p:{x:-46.2,y:-14.2}},{t:this.shape_822,p:{x:-38.8,y:-12.8}},{t:this.shape_1188,p:{x:-33,y:-12.7}},{t:this.shape_448,p:{x:-25.8,y:-11.6}},{t:this.shape_1179,p:{x:-15.5,y:-14.1}},{t:this.shape_1325,p:{x:-10.5}},{t:this.shape_1324,p:{x:0}},{t:this.shape_1102,p:{x:6.5,y:-12.7}},{t:this.shape_1323,p:{x:18.1}},{t:this.shape_546,p:{x:24.6,y:-14.2}},{t:this.shape_1112,p:{x:32.2,y:-12.7}},{t:this.shape_1183,p:{x:44.6,y:-12.7}},{t:this.shape_251,p:{x:51.6,y:-12.8}},{t:this.shape_1109,p:{x:57.5,y:-12.7}},{t:this.shape_1106,p:{x:65,y:-12.7}},{t:this.shape_1114,p:{x:76.5,y:-13.7}},{t:this.shape_135,p:{x:83,y:-14.2}},{t:this.shape_1087,p:{x:90.5,y:-12.7}},{t:this.shape_1113,p:{x:97,y:-13.7}},{t:this.shape_243,p:{x:108.2,y:-11.3}},{t:this.shape_1322},{t:this.shape_393,p:{x:122.9,y:-12.7}},{t:this.shape_345,p:{x:135.5,y:-12.7}},{t:this.shape_131,p:{x:142.1,y:-12.7}},{t:this.shape_1098,p:{x:148.8,y:-12.7}},{t:this.shape_1107,p:{x:160.4,y:-13.7}},{t:this.shape_1321},{t:this.shape_1320,p:{x:178.5}},{t:this.shape_1319,p:{x:182.6}},{t:this.shape_1200,p:{x:188.2,y:-12.7}},{t:this.shape_1104,p:{x:199.6,y:-13.7}},{t:this.shape_130,p:{x:206.1,y:-14.2}},{t:this.shape_1089,p:{x:213.7,y:-12.7}},{t:this.shape_115,p:{x:-325.1,y:4.6}},{t:this.shape_293,p:{x:-318.8,y:5.5}},{t:this.shape_239,p:{x:-311.8,y:5.4}},{t:this.shape_320,p:{x:-306.1,y:6.7}},{t:this.shape_476,p:{x:-298.9,y:5.5}},{t:this.shape_110,p:{x:-292.2,y:4.6}},{t:this.shape_473,p:{x:-285.7,y:5.5}},{t:this.shape_300,p:{x:-278.3,y:4.1}},{t:this.shape_443,p:{x:-266.7,y:5.4}},{t:this.shape_340,p:{x:-260.8,y:5.5}},{t:this.shape_259,p:{x:-253.4,y:6.7}},{t:this.shape_772,p:{x:-248.2,y:4.1}},{t:this.shape_112,p:{x:-242.3,y:5.5}},{t:this.shape_140,p:{x:-234.7,y:5.4}},{t:this.shape_342,p:{x:-228.5,y:8.3}},{t:this.shape_1039,p:{y:40.6}},{t:this.shape_283,p:{x:-318.3,y:44.8}},{t:this.shape_1318,p:{x:-304.2,y:40.6}},{t:this.shape_1276,p:{x:-297.3,y:42}},{t:this.shape_192,p:{x:-282.9,y:43.4}},{t:this.shape_808,p:{x:-275.7,y:42}},{t:this.shape_325,p:{x:-268.2,y:42.1}},{t:this.shape_274,p:{x:-252.7,y:40.6}},{t:this.shape_153,p:{x:-245.3,y:41.9}},{t:this.shape_1317},{t:this.shape_204,p:{x:-232.3,y:43.2}},{t:this.shape_1316},{t:this.shape_639,p:{x:-212.8,y:41.1}},{t:this.shape_637,p:{x:-206.3,y:40.5}},{t:this.shape_1133,p:{y:42,x:-198.7}},{t:this.shape_838,p:{x:-183.1,y:42}},{t:this.shape_198,p:{x:-176.1,y:41.9}},{t:this.shape_624,p:{x:-172.2,y:40.6}},{t:this.shape_194,p:{x:-166.5,y:43.2}},{t:this.shape_1123,p:{x:-161.2,y:40.6}},{t:this.shape_137,p:{x:-155.3,y:41.9}},{t:this.shape_1315},{t:this.shape_275,p:{x:-141.8,y:40.6}},{t:this.shape_1273,p:{x:-129.2,y:42}},{t:this.shape_1131,p:{x:-122.5,y:42}},{t:this.shape_244,p:{x:-116.4,y:40.6}},{t:this.shape_1128,p:{x:-110.8,y:42}},{t:this.shape_1280,p:{x:-103.6,y:42}},{t:this.shape_638,p:{x:-97.3,y:41.1}},{t:this.shape_1127,p:{x:-90.8,y:42}},{t:this.shape_254,p:{x:-83.3,y:40.6}},{t:this.shape_1219,p:{x:-67.5}},{t:this.shape_148,p:{x:-60.6,y:41.9}},{t:this.shape_1126,p:{x:-54.6,y:42}},{t:this.shape_1218,p:{x:-47.2}},{t:this.shape_1272,p:{x:-32.6,y:42}},{t:this.shape_634,p:{x:-26,y:40.5}},{t:this.shape_810,p:{x:-18.4,y:42}},{t:this.shape_1314},{t:this.shape_815,p:{x:-1.5}},{t:this.shape_632,p:{x:12.3,y:41.1}},{t:this.shape_620,p:{x:18.8,y:40.5}},{t:this.shape_1125,p:{x:26.4,y:42}},{t:this.shape_643,p:{x:41,y:42}},{t:this.shape_805,p:{x:47.5,y:42}},{t:this.shape_229,p:{x:57,y:41.9}},{t:this.shape_807,p:{x:66.6,y:42}},{t:this.shape_1313},{t:this.shape_1284,p:{x:88,y:40.6}},{t:this.shape_1216,p:{x:93.7,y:42}},{t:this.shape_636,p:{x:101,y:42}},{t:this.shape_646,p:{x:107.1,y:40.6}},{t:this.shape_642,p:{x:111.7,y:42}},{t:this.shape_803,p:{x:126.2,y:42}},{t:this.shape_640,p:{x:132.7,y:42}},{t:this.shape_627,p:{x:146.5,y:41.1}},{t:this.shape_613,p:{x:153,y:40.5}},{t:this.shape_630,p:{x:160.6,y:42}},{t:this.shape_1312,p:{x:174.7,y:40.6}},{t:this.shape_799,p:{x:180.2,y:42}},{t:this.shape_611,p:{x:186.7,y:42}},{t:this.shape_606,p:{x:192.3,y:42}},{t:this.shape_397,p:{x:198.9,y:42}},{t:this.shape_618,p:{x:206.5,y:42}},{t:this.shape_238,p:{x:213.9,y:40.6}},{t:this.shape_155,p:{x:-325.2,y:60.3}},{t:this.shape_159,p:{x:-318.5,y:60.3}},{t:this.shape_212,p:{x:-312.4,y:58.8}},{t:this.shape_157,p:{x:-306.8,y:60.3}},{t:this.shape_143,p:{x:-299.6}},{t:this.shape_146,p:{x:-293.3,y:59.3}},{t:this.shape_1202,p:{x:-288.8}},{t:this.shape_150,p:{x:-282.9}},{t:this.shape_111,p:{x:-275.3,y:60.2}},{t:this.shape_645,p:{x:-263.9,y:61.7}},{t:this.shape_1204,p:{x:-256.7}},{t:this.shape_276,p:{x:-249.1,y:60.3}},{t:this.shape_163,p:{x:-237.5}},{t:this.shape_791,p:{x:-230.5,y:60.2}},{t:this.shape_147,p:{x:-224.6,y:60.3}},{t:this.shape_222,p:{x:-212.9,y:58.8}},{t:this.shape_105,p:{x:-205.6,y:60.2}},{t:this.shape_154,p:{x:-199.8}},{t:this.shape_179,p:{x:-192.5,y:61.4}},{t:this.shape_139,p:{x:-185.5,y:61.4}},{t:this.shape_181,p:{x:-180.3}},{t:this.shape_108,p:{x:-174.3,y:60.2}},{t:this.shape_99,p:{x:-167,y:61.4}},{t:this.shape_210,p:{x:-161.1,y:63}},{t:this.shape_1311},{t:this.shape_127,p:{x:-318.3,y:99.5}},{t:this.shape_1310},{t:this.shape_338,p:{x:-300,y:96.8}},{t:this.shape_1309},{t:this.shape_335,p:{x:-284.7,y:96.8}},{t:this.shape_1308},{t:this.shape_866,p:{x:-270.7,y:95.8}},{t:this.shape_864,p:{x:-260.9,y:95.8}},{t:this.shape_530,p:{x:-254.4,y:95.3}},{t:this.shape_328,p:{x:-246.8,y:96.8}},{t:this.shape_1307},{t:this.shape_789,p:{x:-227.8,y:96.7}},{t:this.shape_1150,p:{x:-221.9,y:96.8}},{t:this.shape_481,p:{x:-214.7,y:96.8}},{t:this.shape_309,p:{x:-207.5,y:96.8}},{t:this.shape_314,p:{x:-200.9,y:96.8}},{t:this.shape_312,p:{x:-195.2,y:96.8}},{t:this.shape_213,p:{x:-184.4,y:96.8}},{t:this.shape_100,p:{x:-176.8,y:96.7}},{t:this.shape_861,p:{x:-170.1,y:95.8}},{t:this.shape_1261,p:{x:-165.6,y:95.4}},{t:this.shape_187,p:{x:-161.2,y:95.3}},{t:this.shape_373,p:{x:-151.7,y:98.2}},{t:this.shape_855,p:{x:-144.5,y:96.8}},{t:this.shape_144,p:{x:-137,y:96.8}},{t:this.shape_1306},{t:this.shape_149,p:{x:-118.4,y:96.7}},{t:this.shape_303,p:{x:-112.4,y:96.8}},{t:this.shape_285,p:{x:-101.6,y:96.8}},{t:this.shape_1305},{t:this.shape_856,p:{x:-88.6,y:95.8}},{t:this.shape_1304,p:{x:-84.1,y:95.4}},{t:this.shape_284,p:{x:-79.1,y:96.8}},{t:this.shape_1303},{t:this.shape_521,p:{x:-69.3,y:95.4}},{t:this.shape_291,p:{x:-63.4,y:96.8}},{t:this.shape_102,p:{x:-55.9,y:95.3}},{t:this.shape_1151,p:{x:-42.4,y:96.8}},{t:this.shape_529,p:{x:-35.4,y:95.4}},{t:this.shape_503,p:{x:-30.4,y:95.8}},{t:this.shape_480,p:{x:-23.9,y:95.3}},{t:this.shape_483,p:{x:-13.1,y:95.8}},{t:this.shape_474,p:{x:-6.6,y:95.3}},{t:this.shape_286,p:{x:1,y:96.8}},{t:this.shape_162,p:{x:12.3,y:96.7}},{t:this.shape_280,p:{x:18.2,y:96.8}},{t:this.shape_279,p:{x:24.8,y:96.8}},{t:this.shape_107,p:{x:31.5,y:96.8}},{t:this.shape_125,p:{x:37.6,y:95.3}},{t:this.shape_475,p:{x:42.2,y:95.8}},{t:this.shape_98,p:{x:47.3,y:99.5}}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape_908,p:{x:-323.9}},{t:this.shape_743,p:{x:-318,y:-158.7}},{t:this.shape_122,p:{x:-310.3,y:-160.2}},{t:this.shape_772,p:{x:-305.4,y:-160.1}},{t:this.shape_555,p:{x:-299.5,y:-158.8}},{t:this.shape_320,p:{x:-292.1,y:-157.6}},{t:this.shape_527,p:{x:-279.3,y:-158.7}},{t:this.shape_537,p:{x:-272.6,y:-158.8}},{t:this.shape_740,p:{x:-265.2,y:-158.7}},{t:this.shape_1449},{t:this.shape_515,p:{x:-250.9,y:-158.7}},{t:this.shape_323,p:{x:-244.3,y:-160.2}},{t:this.shape_315,p:{x:-236.7,y:-158.7}},{t:this.shape_732,p:{x:-230.1,y:-159.7}},{t:this.shape_499,p:{x:-224.6,y:-158.7}},{t:this.shape_1448},{t:this.shape_1206,p:{x:-205.1,y:-160.2}},{t:this.shape_331,p:{x:-199.7,y:-158.7}},{t:this.shape_1189,p:{x:-192.5,y:-157.3}},{t:this.shape_314,p:{x:-186.3,y:-158.7}},{t:this.shape_311,p:{x:-173.2,y:-158.7}},{t:this.shape_1379,p:{x:-158.8}},{t:this.shape_322,p:{x:-153.3,y:-160.1}},{t:this.shape_773,p:{x:-147.8,y:-158.7}},{t:this.shape_586,p:{x:-140.6,y:-158.7}},{t:this.shape_587,p:{x:-134,y:-159.7}},{t:this.shape_305,p:{x:-127.6,y:-158.7}},{t:this.shape_308,p:{x:-121.6,y:-160.2}},{t:this.shape_1447},{t:this.shape_828,p:{x:-104.1,y:-158.7}},{t:this.shape_461,p:{x:-98,y:-160.2}},{t:this.shape_291,p:{x:-92.4,y:-158.7}},{t:this.shape_307,p:{x:-80.2,y:-160.1}},{t:this.shape_534,p:{x:-74.3,y:-158.8}},{t:this.shape_1446},{t:this.shape_286,p:{x:-54.7,y:-158.7}},{t:this.shape_574,p:{x:-48,y:-159.7}},{t:this.shape_573,p:{x:-41.6,y:-158.7}},{t:this.shape_730,p:{x:-34,y:-158.7}},{t:this.shape_287,p:{x:-26.8,y:-158.7}},{t:this.shape_318,p:{x:-19.5,y:-160.2}},{t:this.shape_1138,p:{x:-13.9,y:-160.1}},{t:this.shape_532,p:{x:-8,y:-158.8}},{t:this.shape_259,p:{x:-0.6,y:-157.6}},{t:this.shape_724,p:{x:13.5,y:-157.4}},{t:this.shape_278,p:{x:21,y:-160.2}},{t:this.shape_1445},{t:this.shape_554,p:{x:35.1,y:-159.7}},{t:this.shape_778,p:{x:41.6}},{t:this.shape_312,p:{x:48.1,y:-158.7}},{t:this.shape_825,p:{x:60.4,y:-160.2}},{t:this.shape_1444},{t:this.shape_1443},{t:this.shape_333,p:{x:85.1,y:-159.7}},{t:this.shape_273,p:{x:93,y:-158.7}},{t:this.shape_272,p:{x:101.9,y:-158.7}},{t:this.shape_789,p:{x:115.5,y:-158.8}},{t:this.shape_280,p:{x:121.5,y:-158.7}},{t:this.shape_302,p:{x:128.9,y:-158.7}},{t:this.shape_285,p:{x:135.4,y:-158.7}},{t:this.shape_112,p:{x:142,y:-158.7}},{t:this.shape_508,p:{x:149.6,y:-158.8}},{t:this.shape_284,p:{x:156.2,y:-158.7}},{t:this.shape_1060,p:{y:-156,x:161.4}},{t:this.shape_513,p:{x:174.8,y:-160.1}},{t:this.shape_1442},{t:this.shape_756,p:{x:185.2,y:-158.8}},{t:this.shape_279,p:{x:190.2,y:-158.7}},{t:this.shape_330,p:{x:195.9,y:-159.7}},{t:this.shape_897,p:{x:200.9,y:-154.8}},{t:this.shape_293,p:{x:213.9,y:-158.7}},{t:this.shape_1370,p:{x:-325.2}},{t:this.shape_496,p:{x:-318.5,y:-140.6}},{t:this.shape_1441},{t:this.shape_1440},{t:this.shape_717,p:{x:-296.8}},{t:this.shape_1073,p:{x:-290.2,y:-142}},{t:this.shape_1439},{t:this.shape_1438},{t:this.shape_653,p:{x:-264,y:-140.5}},{t:this.shape_1437},{t:this.shape_491,p:{x:-249.4,y:-140.6}},{t:this.shape_695,p:{x:-237,y:-140.5}},{t:this.shape_1068,p:{x:-230.3,y:-140.5}},{t:this.shape_239,p:{x:-223.3,y:-140.6}},{t:this.shape_701,p:{x:-217.7,y:-140.4}},{t:this.shape_1065,p:{x:-210.5,y:-140.5}},{t:this.shape_711,p:{x:-197.2}},{t:this.shape_685,p:{x:-190.7,y:-140.5}},{t:this.shape_694,p:{x:-178.3}},{t:this.shape_1436},{t:this.shape_680,p:{x:-157.4}},{t:this.shape_684,p:{x:-150.9,y:-140.5}},{t:this.shape_992,p:{x:-144.2,y:-140.5}},{t:this.shape_357,p:{x:-138.1,y:-141.9}},{t:this.shape_647,p:{x:-134.5}},{t:this.shape_486,p:{x:-128.6,y:-140.6}},{t:this.shape_989,p:{x:-121,y:-140.5}},{t:this.shape_1435},{t:this.shape_1434},{t:this.shape_236,p:{x:-95.4,y:-140.6}},{t:this.shape_668,p:{x:-83.8,y:-140.5}},{t:this.shape_478,p:{x:-76.3,y:-140.6}},{t:this.shape_645,p:{x:-69,y:-139.1}},{t:this.shape_1433},{t:this.shape_705,p:{x:-50.8,y:-140.4}},{t:this.shape_1432},{t:this.shape_683,p:{x:-37.6,y:-140.4}},{t:this.shape_153,p:{x:-30.6,y:-140.6}},{t:this.shape_712,p:{x:-24.6,y:-140.5}},{t:this.shape_700,p:{x:-11.2,y:-140.5}},{t:this.shape_488,p:{x:-3.7,y:-141.9}},{t:this.shape_1070,p:{x:2.2,y:-141.9}},{t:this.shape_1431},{t:this.shape_679,p:{x:12.7,y:-140.5}},{t:this.shape_1040,p:{x:17.9,y:-137.7}},{t:this.shape_1134,p:{y:-141.8,x:28.4}},{t:this.shape_1430},{t:this.shape_1429},{t:this.shape_1079,p:{x:52,y:-140.5}},{t:this.shape_592,p:{x:59.5,y:-140.4}},{t:this.shape_652,p:{x:72.8,y:-140.5}},{t:this.shape_625,p:{x:79.8,y:-140.6}},{t:this.shape_697,p:{x:85.7,y:-140.5}},{t:this.shape_585,p:{x:99.2,y:-140.4}},{t:this.shape_463,p:{x:106.8,y:-140.6}},{t:this.shape_648,p:{x:113.4,y:-140.5}},{t:this.shape_649,p:{x:119.9,y:-140.5}},{t:this.shape_1428},{t:this.shape_242,p:{x:130.9,y:-141.9}},{t:this.shape_980,p:{x:135.9,y:-142}},{t:this.shape_1427},{t:this.shape_690,p:{x:146,y:-140.5}},{t:this.shape_404,p:{x:153.4,y:-141.9}},{t:this.shape_1426},{t:this.shape_226,p:{x:175.6,y:-141.9}},{t:this.shape_706,p:{x:180.6}},{t:this.shape_1069,p:{x:187.1,y:-142}},{t:this.shape_703,p:{x:199.6}},{t:this.shape_681,p:{x:206.1,y:-142}},{t:this.shape_650,p:{x:213.7,y:-140.5}},{t:this.shape_472,p:{x:-324.7,y:-122.3}},{t:this.shape_1125,p:{x:-318.8,y:-122.2}},{t:this.shape_643,p:{x:-312.2,y:-122.2}},{t:this.shape_568,p:{x:-305.5,y:-122.2}},{t:this.shape_430,p:{x:-299.4,y:-123.7}},{t:this.shape_1425},{t:this.shape_1281,p:{x:-289.7}},{t:this.shape_192,p:{x:-278.1,y:-120.8}},{t:this.shape_810,p:{x:-270.9,y:-122.2}},{t:this.shape_502,p:{x:-263.3,y:-122.2}},{t:this.shape_1280,p:{x:-250.6,y:-122.2}},{t:this.shape_1424,p:{x:-243.5}},{t:this.shape_455,p:{x:-236,y:-122.3}},{t:this.shape_819,p:{x:-224.9,y:-122.2}},{t:this.shape_467,p:{x:-217.9,y:-122.2}},{t:this.shape_642,p:{x:-211.3,y:-122.2}},{t:this.shape_1423},{t:this.shape_640,p:{x:-194.6,y:-122.2}},{t:this.shape_616,p:{x:-190,y:-123.6}},{t:this.shape_741,p:{x:-182,y:-122.3}},{t:this.shape_389,p:{x:-172.1,y:-120.9}},{t:this.shape_244,p:{x:-166.2,y:-123.7}},{t:this.shape_1187,p:{x:-160.9,y:-120.8}},{t:this.shape_204,p:{x:-148.5,y:-121.1}},{t:this.shape_397,p:{x:-141.3,y:-122.2}},{t:this.shape_1130,p:{x:-128,y:-123.7}},{t:this.shape_1362,p:{x:-120.7}},{t:this.shape_621,p:{x:-113.5,y:-122.2}},{t:this.shape_1422},{t:this.shape_814,p:{x:-94.7,y:-123.2}},{t:this.shape_374,p:{x:-88.3,y:-122.2}},{t:this.shape_811,p:{x:-76.2,y:-123.2}},{t:this.shape_634,p:{x:-69.7,y:-123.7}},{t:this.shape_807,p:{x:-62.1,y:-122.2}},{t:this.shape_611,p:{x:-50.1,y:-122.2}},{t:this.shape_434,p:{x:-43.4,y:-122.3}},{t:this.shape_644,p:{x:-36}},{t:this.shape_1248,p:{x:-28.2,y:-120.9}},{t:this.shape_606,p:{x:-21.7,y:-122.2}},{t:this.shape_620,p:{x:-15.1,y:-123.7}},{t:this.shape_808,p:{x:-7.5,y:-122.2}},{t:this.shape_806,p:{x:-0.9,y:-123.2}},{t:this.shape_950,p:{x:10.7,y:-120.8}},{t:this.shape_1286,p:{x:17.9}},{t:this.shape_411,p:{x:25.4,y:-122.2}},{t:this.shape_544,p:{x:30.3,y:-127.3}},{t:this.shape_617,p:{x:34.8,y:-122.2}},{t:this.shape_636,p:{x:42.1,y:-122.2}},{t:this.shape_639,p:{x:54.2,y:-123.2}},{t:this.shape_622,p:{x:60.5}},{t:this.shape_383,p:{x:68.2,y:-123.7}},{t:this.shape_630,p:{x:75.1,y:-122.2}},{t:this.shape_407,p:{x:82.7,y:-122.3}},{t:this.shape_1421},{t:this.shape_624,p:{x:104.1,y:-123.6}},{t:this.shape_638,p:{x:109.1,y:-123.2}},{t:this.shape_613,p:{x:115.6,y:-123.7}},{t:this.shape_626,p:{x:123.2,y:-122.2}},{t:this.shape_393,p:{x:130.7,y:-122.2}},{t:this.shape_632,p:{x:137.4,y:-123.2}},{t:this.shape_379,p:{x:149.2,y:-123.7}},{t:this.shape_359,p:{x:157,y:-122.2}},{t:this.shape_1420},{t:this.shape_380,p:{x:168.5,y:-122.3}},{t:this.shape_194,p:{x:175.9,y:-121.1}},{t:this.shape_618,p:{x:188.6,y:-122.2}},{t:this.shape_1216,p:{x:195.9,y:-122.2}},{t:this.shape_627,p:{x:202.2,y:-123.2}},{t:this.shape_396,p:{x:208.2,y:-122.3}},{t:this.shape_608,p:{x:214}},{t:this.shape_1419},{t:this.shape_1418},{t:this.shape_184,p:{x:-306.8,y:-104.1}},{t:this.shape_1417},{t:this.shape_1416},{t:this.shape_1415},{t:this.shape_345,p:{x:-266.7,y:-103.9}},{t:this.shape_364,p:{x:-259.1,y:-104.1}},{t:this.shape_367,p:{x:-251.6,y:-105.4}},{t:this.shape_1048,p:{x:-243.8,y:-104}},{t:this.shape_484,p:{x:-229.5,y:-102.6}},{t:this.shape_1414},{t:this.shape_325,p:{x:-214.8,y:-103.9}},{t:this.shape_334,p:{x:-207.7,y:-104.1}},{t:this.shape_177,p:{x:-195.7,y:-104}},{t:this.shape_1051,p:{x:-190,y:-104.9}},{t:this.shape_1252,p:{x:-183.5,y:-104}},{t:this.shape_883,p:{x:-175.6,y:-102.6}},{t:this.shape_168,p:{x:-169.2,y:-104}},{t:this.shape_1038,p:{y:-101.2,x:-163.9}},{t:this.shape_797,p:{x:-150.8,y:-105.4}},{t:this.shape_1249,p:{x:-143.7,y:-104}},{t:this.shape_1049,p:{x:-136.4,y:-104}},{t:this.shape_882,p:{x:-129.2,y:-104}},{t:this.shape_354,p:{x:-121.7,y:-104.1}},{t:this.shape_361,p:{x:-114.2,y:-105.4}},{t:this.shape_1413},{t:this.shape_413,p:{x:-94.5,y:-102.6}},{t:this.shape_877,p:{x:-87.3}},{t:this.shape_276,p:{x:-79.8,y:-103.9}},{t:this.shape_1412,p:{x:-65.3}},{t:this.shape_251,p:{x:-58.3,y:-104.1}},{t:this.shape_400,p:{x:-52.4,y:-104}},{t:this.shape_884,p:{x:-37.9,y:-104}},{t:this.shape_431,p:{x:-30.1,y:-105.4}},{t:this.shape_258,p:{x:-24.1,y:-105.4}},{t:this.shape_387,p:{x:-18.5,y:-104}},{t:this.shape_207,p:{x:-4.8,y:-104.9}},{t:this.shape_878,p:{x:1.6,y:-104}},{t:this.shape_156,p:{x:15.2,y:-104}},{t:this.shape_1411},{t:this.shape_1410},{t:this.shape_202,p:{x:35.3,y:-104.9}},{t:this.shape_970,p:{x:41.4,y:-104}},{t:this.shape_1409},{t:this.shape_1296,p:{x:63.6,y:-105.4}},{t:this.shape_872,p:{x:70.9,y:-104}},{t:this.shape_876,p:{x:78.1,y:-104}},{t:this.shape_1408},{t:this.shape_871,p:{x:99.3,y:-104}},{t:this.shape_348,p:{x:106.8,y:-104.1}},{t:this.shape_353,p:{x:114.2,y:-105.4}},{t:this.shape_1407,p:{x:128.2}},{t:this.shape_1406},{t:this.shape_149,p:{x:141.3,y:-104.1}},{t:this.shape_200,p:{x:146.3,y:-104.9}},{t:this.shape_875,p:{x:152.8,y:-105.5}},{t:this.shape_820,p:{x:167.7,y:-105.4}},{t:this.shape_378,p:{x:175.2,y:-104}},{t:this.shape_197,p:{x:181.8,y:-104.9}},{t:this.shape_1405},{t:this.shape_369,p:{x:198.7,y:-104}},{t:this.shape_362,p:{x:206.3,y:-104}},{t:this.shape_321,p:{x:213.9,y:-104.1}},{t:this.shape_310,p:{x:-324.3,y:-87.2}},{t:this.shape_551,p:{x:-318.4}},{t:this.shape_1404},{t:this.shape_787,p:{x:-308.3,y:-87.2}},{t:this.shape_601,p:{x:-302.2}},{t:this.shape_105,p:{x:-295.1,y:-85.8}},{t:this.shape_599,p:{x:-289.2}},{t:this.shape_301,p:{x:-281.6,y:-85.8}},{t:this.shape_327,p:{x:-274.9,y:-86.7}},{t:this.shape_795,p:{x:-265.2,y:-85.7}},{t:this.shape_298,p:{x:-258.6,y:-85.8}},{t:this.shape_1266,p:{x:-251.1}},{t:this.shape_943,p:{x:-243.3,y:-84.4}},{t:this.shape_571,p:{x:-236.9,y:-85.7}},{t:this.shape_596,p:{x:-230.2}},{t:this.shape_595,p:{x:-222.7,y:-85.7}},{t:this.shape_316,p:{x:-216.1,y:-86.7}},{t:this.shape_557,p:{x:-210.6,y:-85.7}},{t:this.shape_243,p:{x:-200.1,y:-84.3}},{t:this.shape_564,p:{x:-192.9,y:-85.7}},{t:this.shape_213,p:{x:-185.3,y:-85.7}},{t:this.shape_206,p:{y:-90.8,x:-180.4}},{t:this.shape_600,p:{x:-175.9,y:-85.7}},{t:this.shape_588,p:{x:-168.7}},{t:this.shape_304,p:{x:-157.8,y:-86.7}},{t:this.shape_1265,p:{x:-151.5}},{t:this.shape_539,p:{x:-143.8}},{t:this.shape_577,p:{x:-136.9}},{t:this.shape_281,p:{x:-129.3,y:-85.8}},{t:this.shape_297,p:{x:-118.5,y:-86.7}},{t:this.shape_1003,p:{x:-112,y:-85.7}},{t:this.shape_113,p:{x:-100.6,y:-85.7}},{t:this.shape_129,p:{x:-93.4,y:-85.7}},{t:this.shape_905,p:{x:-83.9,y:-85.8}},{t:this.shape_1403},{t:this.shape_579,p:{x:-66.7,y:-85.7}},{t:this.shape_589,p:{x:-59.7,y:-85.8}},{t:this.shape_562,p:{x:-53.8,y:-85.7}},{t:this.shape_292,p:{x:-42.9,y:-86.7}},{t:this.shape_590,p:{x:-36.4}},{t:this.shape_560,p:{x:-28.8,y:-85.7}},{t:this.shape_288,p:{x:-17.1,y:-85.7}},{t:this.shape_198,p:{x:-10.1,y:-85.8}},{t:this.shape_101,p:{x:-6.1,y:-87.1}},{t:this.shape_179,p:{x:-0.4,y:-84.6}},{t:this.shape_790,p:{x:4.8,y:-87.1}},{t:this.shape_266,p:{x:10.8,y:-85.8}},{t:this.shape_549,p:{x:18.2,y:-85.7}},{t:this.shape_275,p:{x:24.2,y:-87.2}},{t:this.shape_109,p:{x:32,y:-87.1}},{t:this.shape_450,p:{x:40,y:-85.8}},{t:this.shape_103,p:{x:49.4,y:-85.7}},{t:this.shape_139,p:{x:56.7,y:-84.6}},{t:this.shape_552,p:{x:63.9,y:-85.7}},{t:this.shape_1402,p:{x:77.1,y:-85.7}},{t:this.shape_538,p:{x:84.1}},{t:this.shape_133,p:{x:89.1,y:-86.7}},{t:this.shape_583,p:{x:95.6,y:-87.2}},{t:this.shape_115,p:{x:106.5,y:-86.7}},{t:this.shape_570,p:{x:113,y:-87.2}},{t:this.shape_547,p:{x:120.6,y:-85.7}},{t:this.shape_545,p:{x:132.4,y:-85.7}},{t:this.shape_300,p:{x:139.8,y:-87.2}},{t:this.shape_1121,p:{x:145.7,y:-87.1}},{t:this.shape_110,p:{x:150.7,y:-86.7}},{t:this.shape_106,p:{x:157.2,y:-85.7}},{t:this.shape_274,p:{x:164.7,y:-87.2}},{t:this.shape_824,p:{x:176.7,y:-85.7}},{t:this.shape_260,p:{x:184.3,y:-85.8}},{t:this.shape_104,p:{x:191.9,y:-85.7}},{t:this.shape_699,p:{x:198.1,y:-83}},{t:this.shape_1120,p:{y:-50.6}},{t:this.shape_605,p:{x:-318.3,y:-46.5}},{t:this.shape_1147,p:{y:-50.6}},{t:this.shape_1341,p:{x:-298.2}},{t:this.shape_457,p:{x:-287.4}},{t:this.shape_1401},{t:this.shape_1400},{t:this.shape_1399},{t:this.shape_415,p:{x:-257.1,y:-49.2}},{t:this.shape_454,p:{x:-251.4}},{t:this.shape_464,p:{x:-244.9}},{t:this.shape_443,p:{x:-237.9,y:-49.3}},{t:this.shape_942,p:{x:-232.3,y:-47.8}},{t:this.shape_1168,p:{x:-220.5,y:-50.6}},{t:this.shape_409,p:{x:-213.9,y:-49.2}},{t:this.shape_187,p:{x:-207.9,y:-50.7}},{t:this.shape_406,p:{x:-202.3}},{t:this.shape_419,p:{x:-195.6}},{t:this.shape_403,p:{x:-190.1}},{t:this.shape_405,p:{x:-183.6}},{t:this.shape_514,p:{x:-177.4,y:-46.5}},{t:this.shape_1398},{t:this.shape_424,p:{x:-318.3,y:-10}},{t:this.shape_1082,p:{y:-14.1}},{t:this.shape_212,p:{x:-300.7,y:-14.2}},{t:this.shape_1319,p:{x:-297.1}},{t:this.shape_1111,p:{x:-291.5,y:-12.7}},{t:this.shape_1090,p:{x:-284.1,y:-14.2}},{t:this.shape_1397},{t:this.shape_255,p:{x:-265.5,y:-12.8}},{t:this.shape_1329,p:{x:-254.7}},{t:this.shape_553,p:{x:-248.2,y:-14.2}},{t:this.shape_1112,p:{x:-240.6,y:-12.7}},{t:this.shape_245,p:{x:-228.8,y:-12.8}},{t:this.shape_1109,p:{x:-221.2,y:-12.7}},{t:this.shape_1012,p:{x:-212.2,y:-12.7}},{t:this.shape_543,p:{x:-200,y:-12.7}},{t:this.shape_241,p:{x:-193.3,y:-12.8}},{t:this.shape_1106,p:{x:-185.9,y:-12.7}},{t:this.shape_1396},{t:this.shape_131,p:{x:-171.6,y:-12.7}},{t:this.shape_546,p:{x:-165,y:-14.2}},{t:this.shape_1395},{t:this.shape_1328,p:{x:-150.8}},{t:this.shape_965,p:{x:-139.8,y:-14.2}},{t:this.shape_144,p:{x:-132.4,y:-12.7}},{t:this.shape_1325,p:{x:-125.7}},{t:this.shape_1324,p:{x:-120.2}},{t:this.shape_1394},{t:this.shape_218,p:{x:-106.2,y:-12.8}},{t:this.shape_1087,p:{x:-94.5,y:-12.7}},{t:this.shape_1323,p:{x:-88}},{t:this.shape_1114,p:{x:-78.2,y:-13.7}},{t:this.shape_135,p:{x:-71.7,y:-14.2}},{t:this.shape_1098,p:{x:-64.1,y:-12.7}},{t:this.shape_336,p:{x:-52,y:-14.2}},{t:this.shape_1092,p:{x:-44.6,y:-12.7}},{t:this.shape_1113,p:{x:-38,y:-13.7}},{t:this.shape_1107,p:{x:-32.5,y:-13.7}},{t:this.shape_1333,p:{x:-26}},{t:this.shape_394,p:{x:-16.5,y:-12.8}},{t:this.shape_1178,p:{x:-2.7,y:-12.7}},{t:this.shape_1320,p:{x:3.9}},{t:this.shape_1104,p:{x:13.2,y:-13.7}},{t:this.shape_130,p:{x:19.7,y:-14.2}},{t:this.shape_1089,p:{x:27.3,y:-12.7}},{t:this.shape_1393},{t:this.shape_1392},{t:this.shape_195,p:{x:53.5,y:-12.8}},{t:this.shape_254,p:{x:60.9,y:-14.2}},{t:this.shape_1088,p:{x:68.8,y:-12.7}},{t:this.shape_1391,p:{x:77.7,y:-12.7}},{t:this.shape_342,p:{x:83.8,y:-10}},{t:this.shape_1061,p:{y:22.4}},{t:this.shape_283,p:{x:-318.3,y:26.5}},{t:this.shape_974,p:{x:-308,y:22.3}},{t:this.shape_180,p:{x:-296.7,y:23.7}},{t:this.shape_252,p:{x:-289.1}},{t:this.shape_851,p:{x:-280.1,y:23.8}},{t:this.shape_248,p:{x:-267.9}},{t:this.shape_160,p:{x:-261.3,y:23.7}},{t:this.shape_268,p:{x:-253.8,y:23.8}},{t:this.shape_269,p:{x:-246}},{t:this.shape_225,p:{x:-239.6}},{t:this.shape_1232,p:{x:-232.9}},{t:this.shape_1390,p:{x:-225.4,y:23.8}},{t:this.shape_693,p:{x:-218.8,y:22.8}},{t:this.shape_263,p:{x:-208.2,y:23.8}},{t:this.shape_1389},{t:this.shape_1388},{t:this.shape_246,p:{x:-185.2}},{t:this.shape_256,p:{x:-177.8,y:23.8}},{t:this.shape_148,p:{x:-170.8,y:23.7}},{t:this.shape_214,p:{x:-165.9}},{t:this.shape_233,p:{x:-155.2,y:23.8}},{t:this.shape_689,p:{x:-148.6,y:22.8}},{t:this.shape_264,p:{x:-138.9,y:22.8}},{t:this.shape_1224,p:{x:-132.4}},{t:this.shape_237,p:{x:-124.8}},{t:this.shape_247,p:{x:-113.9,y:22.8}},{t:this.shape_981,p:{x:-107.5,y:23.8}},{t:this.shape_1165,p:{x:-99.6,y:25.1}},{t:this.shape_1387,p:{x:-88,y:23.8}},{t:this.shape_1386},{t:this.shape_235,p:{x:-72.1,y:22.8}},{t:this.shape_224,p:{x:-65.6}},{t:this.shape_221,p:{x:-58}},{t:this.shape_1385,p:{x:-45.9,y:25.1}},{t:this.shape_223,p:{x:-38.6,y:23.8}},{t:this.shape_169,p:{x:-32.6,y:22.3}},{t:this.shape_219,p:{x:-27}},{t:this.shape_217,p:{x:-20.3,y:22.8}},{t:this.shape_211,p:{x:-14.8,y:22.8}},{t:this.shape_215,p:{x:-8.3}},{t:this.shape_210,p:{x:-2.1,y:26.5}},{t:this.shape_1039,p:{y:58.9}},{t:this.shape_127,p:{x:-318.3,y:63}},{t:this.shape_1008,p:{x:-306.9,y:59}},{t:this.shape_1384},{t:this.shape_1240,p:{x:-289.8,y:60.3}},{t:this.shape_373,p:{x:-276.9,y:61.7}},{t:this.shape_1205,p:{x:-269.7}},{t:this.shape_107,p:{x:-262.2,y:60.3}},{t:this.shape_158,p:{x:-250.7}},{t:this.shape_165,p:{x:-243.6}},{t:this.shape_140,p:{x:-236.1,y:60.2}},{t:this.shape_155,p:{x:-225.3,y:60.3}},{t:this.shape_1013,p:{x:-217.3,y:60.3}},{t:this.shape_196,p:{x:-210.3,y:58.9}},{t:this.shape_175,p:{x:-205.3,y:59.3}},{t:this.shape_143,p:{x:-199.1}},{t:this.shape_1383},{t:this.shape_193,p:{x:-179.8,y:58.8}},{t:this.shape_351,p:{x:-172.3,y:60.3}},{t:this.shape_172,p:{x:-165.7,y:59.3}},{t:this.shape_1382},{t:this.shape_344,p:{x:-148.8,y:60.3}},{t:this.shape_208,p:{x:-141.2,y:60.3}},{t:this.shape_137,p:{x:-133.6,y:60.2}},{t:this.shape_167,p:{x:-122.7,y:59.3}},{t:this.shape_166,p:{x:-116.2}},{t:this.shape_203,p:{x:-108.6,y:60.3}},{t:this.shape_145,p:{x:-96.9}},{t:this.shape_162,p:{x:-89.9,y:60.2}},{t:this.shape_1381},{t:this.shape_99,p:{x:-80.2,y:61.4}},{t:this.shape_181,p:{x:-75}},{t:this.shape_111,p:{x:-69,y:60.2}},{t:this.shape_163,p:{x:-61.6}},{t:this.shape_125,p:{x:-55.6,y:58.8}},{t:this.shape_961,p:{x:-46.7,y:58.8}},{t:this.shape_1202,p:{x:-42.6}},{t:this.shape_227,p:{x:-38.2,y:58.8}},{t:this.shape_176,p:{x:-32.6,y:60.3}},{t:this.shape_154,p:{x:-20.9}},{t:this.shape_108,p:{x:-13.4,y:60.2}},{t:this.shape_238,p:{x:-6,y:58.8}},{t:this.shape_164,p:{x:5.2,y:59.3}},{t:this.shape_142,p:{x:11.7}},{t:this.shape_161,p:{x:19.3,y:60.3}},{t:this.shape_159,p:{x:31.1,y:60.3}},{t:this.shape_222,p:{x:38.5,y:58.8}},{t:this.shape_1380},{t:this.shape_146,p:{x:49.4,y:59.3}},{t:this.shape_157,p:{x:55.9,y:60.3}},{t:this.shape_102,p:{x:63.4,y:58.8}},{t:this.shape_1204,p:{x:75.4}},{t:this.shape_100,p:{x:83,y:60.2}},{t:this.shape_147,p:{x:90.6,y:60.3}},{t:this.shape_98,p:{x:96.8,y:63}}]},1).to({state:[{t:this.shape_282,p:{x:-323.3,y:-160.1}},{t:this.shape_463,p:{x:-314.8,y:-158.8}},{t:this.shape_304,p:{x:-299.8,y:-159.7}},{t:this.shape_736,p:{x:-293.3,y:-160.2}},{t:this.shape_733,p:{x:-285.7,y:-158.7}},{t:this.shape_724,p:{x:-269.5,y:-157.4}},{t:this.shape_756,p:{x:-262.6,y:-158.8}},{t:this.shape_720,p:{x:-256.7,y:-158.7}},{t:this.shape_773,p:{x:-249.5,y:-158.7}},{t:this.shape_1476},{t:this.shape_129,p:{x:-238.3,y:-158.7}},{t:this.shape_1091,p:{x:-230.8,y:-158.7}},{t:this.shape_746,p:{x:-224.2}},{t:this.shape_719,p:{x:-210.2}},{t:this.shape_244,p:{x:-205.1,y:-160.2}},{t:this.shape_1475},{t:this.shape_404,p:{x:-195.7,y:-160.2}},{t:this.shape_525,p:{x:-187.8,y:-158.7}},{t:this.shape_786,p:{x:-170.5,y:-158.7}},{t:this.shape_500,p:{x:-161.5,y:-158.7}},{t:this.shape_206,p:{y:-163.8,x:-156.6}},{t:this.shape_600,p:{x:-152.1,y:-158.7}},{t:this.shape_495,p:{x:-144.8,y:-158.7}},{t:this.shape_379,p:{x:-129.1,y:-160.2}},{t:this.shape_727,p:{x:-123.2}},{t:this.shape_718,p:{x:-118.2}},{t:this.shape_721,p:{x:-111.9,y:-158.7}},{t:this.shape_1077,p:{x:-104.7,y:-158.7}},{t:this.shape_528,p:{x:-98.1,y:-158.7}},{t:this.shape_527,p:{x:-92.4,y:-158.7}},{t:this.shape_728,p:{x:-77.5,y:-160.2}},{t:this.shape_112,p:{x:-69.9,y:-158.7}},{t:this.shape_1474},{t:this.shape_1473},{t:this.shape_749,p:{x:-36.8,y:-158.7}},{t:this.shape_768,p:{x:-29.3,y:-158.7}},{t:this.shape_324,p:{x:-13.7,y:-158.7}},{t:this.shape_754,p:{x:-6.6,y:-158.7}},{t:this.shape_455,p:{x:0.9,y:-158.8}},{t:this.shape_515,p:{x:15.8,y:-158.7}},{t:this.shape_743,p:{x:22.3,y:-158.7}},{t:this.shape_1472},{t:this.shape_490,p:{x:34.9,y:-158.7}},{t:this.shape_519,p:{x:42.3,y:-157.6}},{t:this.shape_730,p:{x:49.5,y:-158.7}},{t:this.shape_740,p:{x:57,y:-158.7}},{t:this.shape_894,p:{x:63.9,y:-158.8}},{t:this.shape_367,p:{x:69.7,y:-160.2}},{t:this.shape_1189,p:{x:85.6,y:-157.3}},{t:this.shape_595,p:{x:92.8,y:-158.7}},{t:this.shape_705,p:{x:100.3,y:-158.7}},{t:this.shape_472,p:{x:107.4,y:-158.8}},{t:this.shape_1402,p:{x:123,y:-158.7}},{t:this.shape_114,p:{x:132,y:-158.7}},{t:this.shape_775,p:{x:139,y:-158.8}},{t:this.shape_1471},{t:this.shape_896,p:{x:160.6,y:-160.2}},{t:this.shape_645,p:{x:167.7,y:-157.3}},{t:this.shape_297,p:{x:182.3,y:-159.7}},{t:this.shape_331,p:{x:188.6,y:-158.7}},{t:this.shape_739,p:{x:196.3}},{t:this.shape_1138,p:{x:201.2,y:-160.1}},{t:this.shape_434,p:{x:207.1,y:-158.8}},{t:this.shape_477,p:{x:214.5,y:-157.6}},{t:this.shape_695,p:{x:-325.2,y:-140.5}},{t:this.shape_407,p:{x:-318.5,y:-140.6}},{t:this.shape_256,p:{x:-311.1,y:-140.5}},{t:this.shape_1385,p:{x:-303.3,y:-139.1}},{t:this.shape_685,p:{x:-296.8,y:-140.5}},{t:this.shape_1081,p:{x:-290.2,y:-142}},{t:this.shape_1439},{t:this.shape_264,p:{x:-276,y:-141.4}},{t:this.shape_684,p:{x:-270.5,y:-140.5}},{t:this.shape_699,p:{x:-265.3,y:-137.7}},{t:this.shape_1318,p:{x:-250.2,y:-141.9}},{t:this.shape_380,p:{x:-242.3,y:-140.6}},{t:this.shape_1387,p:{x:-234.7,y:-140.5}},{t:this.shape_247,p:{x:-228.1,y:-141.4}},{t:this.shape_1073,p:{x:-221.6,y:-142}},{t:this.shape_712,p:{x:-214,y:-140.5}},{t:this.shape_501,p:{x:-207,y:-140.6}},{t:this.shape_450,p:{x:-190,y:-140.6}},{t:this.shape_700,p:{x:-180.4,y:-140.5}},{t:this.shape_235,p:{x:-173.7,y:-141.4}},{t:this.shape_1069,p:{x:-167.2,y:-142}},{t:this.shape_1390,p:{x:-159.7,y:-140.5}},{t:this.shape_361,p:{x:-152.3,y:-141.9}},{t:this.shape_981,p:{x:-135.4,y:-140.5}},{t:this.shape_980,p:{x:-128.8,y:-142}},{t:this.shape_253,p:{x:-113.3,y:-139.1}},{t:this.shape_329,p:{x:-106.4,y:-140.6}},{t:this.shape_697,p:{x:-100.5,y:-140.5}},{t:this.shape_679,p:{x:-93.9,y:-140.5}},{t:this.shape_690,p:{x:-87.2,y:-140.5}},{t:this.shape_416,p:{x:-80.2,y:-140.6}},{t:this.shape_701,p:{x:-74.6,y:-140.4}},{t:this.shape_1470},{t:this.shape_364,p:{x:-63.4,y:-140.6}},{t:this.shape_459,p:{x:-56.1,y:-139.3}},{t:this.shape_373,p:{x:-40.1,y:-139.1}},{t:this.shape_1469},{t:this.shape_683,p:{x:-25.4,y:-140.4}},{t:this.shape_443,p:{x:-18.3,y:-140.6}},{t:this.shape_1079,p:{x:-3.4,y:-140.5}},{t:this.shape_296,p:{x:3.6,y:-140.6}},{t:this.shape_1070,p:{x:7.6,y:-141.9}},{t:this.shape_448,p:{x:13.3,y:-139.3}},{t:this.shape_226,p:{x:18.5,y:-141.9}},{t:this.shape_354,p:{x:24.5,y:-140.6}},{t:this.shape_233,p:{x:31.9,y:-140.5}},{t:this.shape_1312,p:{x:37.9,y:-141.9}},{t:this.shape_1034,p:{x:54,y:-140.4}},{t:this.shape_1080,p:{x:62.9,y:-140.5}},{t:this.shape_396,p:{x:69.9,y:-140.6}},{t:this.shape_1468},{t:this.shape_242,p:{x:90,y:-141.9}},{t:this.shape_648,p:{x:94.9,y:-140.5}},{t:this.shape_217,p:{x:109.7,y:-141.4}},{t:this.shape_1467},{t:this.shape_834,p:{x:132.2,y:-140.6}},{t:this.shape_650,p:{x:138.1,y:-140.5}},{t:this.shape_211,p:{x:144.8,y:-141.4}},{t:this.shape_993,p:{x:151.2,y:-140.5}},{t:this.shape_592,p:{x:158.8,y:-140.4}},{t:this.shape_653,p:{x:166,y:-140.5}},{t:this.shape_681,p:{x:173.3,y:-142}},{t:this.shape_687,p:{x:189.9,y:-140.5}},{t:this.shape_348,p:{x:197.4,y:-140.6}},{t:this.shape_223,p:{x:213.9,y:-140.5}},{t:this.shape_353,p:{x:-324.3,y:-123.7}},{t:this.shape_585,p:{x:-316.4,y:-122.2}},{t:this.shape_1466},{t:this.shape_607,p:{x:-302.6,y:-123.7}},{t:this.shape_1284,p:{x:-299,y:-123.6}},{t:this.shape_1280,p:{x:-293.4,y:-122.2}},{t:this.shape_1424,p:{x:-286.3}},{t:this.shape_639,p:{x:-279.7,y:-123.2}},{t:this.shape_1127,p:{x:-273.2,y:-122.2}},{t:this.shape_310,p:{x:-265.8,y:-123.7}},{t:this.shape_1117,p:{y:-123.7,x:-252}},{t:this.shape_1362,p:{x:-246.6}},{t:this.shape_1187,p:{x:-239.4,y:-120.8}},{t:this.shape_1126,p:{x:-232.2,y:-122.2}},{t:this.shape_826,p:{x:-225.1,y:-122.3}},{t:this.shape_616,p:{x:-213.8,y:-123.6}},{t:this.shape_321,p:{x:-207.9,y:-122.3}},{t:this.shape_611,p:{x:-201.3,y:-122.2}},{t:this.shape_638,p:{x:-195.6,y:-123.2}},{t:this.shape_1125,p:{x:-189.1,y:-122.2}},{t:this.shape_644,p:{x:-181.6}},{t:this.shape_300,p:{x:-174.3,y:-123.7}},{t:this.shape_1465},{t:this.shape_1464},{t:this.shape_632,p:{x:-140,y:-123.2}},{t:this.shape_637,p:{x:-133.5,y:-123.7}},{t:this.shape_807,p:{x:-125.9,y:-122.2}},{t:this.shape_839,p:{x:-111,y:-122.2}},{t:this.shape_236,p:{x:-104,y:-122.3}},{t:this.shape_1463},{t:this.shape_320,p:{x:-94.3,y:-121.1}},{t:this.shape_1275,p:{x:-89.1}},{t:this.shape_301,p:{x:-83.1,y:-122.3}},{t:this.shape_622,p:{x:-75.7}},{t:this.shape_461,p:{x:-69.7,y:-123.7}},{t:this.shape_374,p:{x:-56.8,y:-122.2}},{t:this.shape_298,p:{x:-49.2,y:-122.3}},{t:this.shape_636,p:{x:-41.6,y:-122.2}},{t:this.shape_605,p:{x:-35.4,y:-119.5}},{t:this.shape_1374,p:{x:-19.4,y:-123.5}},{t:this.shape_634,p:{x:-9.7,y:-123.7}},{t:this.shape_630,p:{x:-2.1,y:-122.2}},{t:this.shape_281,p:{x:5.5,y:-122.3}},{t:this.shape_942,p:{x:20.1,y:-120.8}},{t:this.shape_626,p:{x:27.3,y:-122.2}},{t:this.shape_568,p:{x:34.9,y:-122.2}},{t:this.shape_1462},{t:this.shape_1123,p:{x:53,y:-123.6}},{t:this.shape_266,p:{x:58.9,y:-122.3}},{t:this.shape_624,p:{x:64.5,y:-123.6}},{t:this.shape_606,p:{x:69.5,y:-122.2}},{t:this.shape_620,p:{x:76.1,y:-123.7}},{t:this.shape_184,p:{x:90.5,y:-122.3}},{t:this.shape_618,p:{x:96.5,y:-122.2}},{t:this.shape_627,p:{x:103.1,y:-123.2}},{t:this.shape_633,p:{x:109.6}},{t:this.shape_502,p:{x:117.1,y:-122.2}},{t:this.shape_1461},{t:this.shape_613,p:{x:131.6,y:-123.7}},{t:this.shape_619,p:{x:137.2,y:-123.6}},{t:this.shape_260,p:{x:143.2,y:-122.3}},{t:this.shape_259,p:{x:150.5,y:-121.1}},{t:this.shape_1460},{t:this.shape_892,p:{x:169.9,y:-120.8}},{t:this.shape_631,p:{x:177.1}},{t:this.shape_467,p:{x:184.6,y:-122.2}},{t:this.shape_621,p:{x:199.2,y:-122.2}},{t:this.shape_608,p:{x:206.3}},{t:this.shape_255,p:{x:213.8,y:-122.3}},{t:this.shape_965,p:{x:-323.9,y:-105.4}},{t:this.shape_212,p:{x:-317.9,y:-105.4}},{t:this.shape_362,p:{x:-312.3,y:-104}},{t:this.shape_245,p:{x:-304.7,y:-104.1}},{t:this.shape_274,p:{x:-297.3,y:-105.4}},{t:this.shape_172,p:{x:-286.1,y:-104.9}},{t:this.shape_1391,p:{x:-278.2,y:-103.9}},{t:this.shape_878,p:{x:-269.3,y:-104}},{t:this.shape_468,p:{x:-259,y:-105.4}},{t:this.shape_1412,p:{x:-253.6}},{t:this.shape_484,p:{x:-246.4,y:-102.6}},{t:this.shape_351,p:{x:-239.2,y:-104}},{t:this.shape_105,p:{x:-232.1,y:-104.1}},{t:this.shape_155,p:{x:-227.2,y:-104}},{t:this.shape_884,p:{x:-216.5,y:-104}},{t:this.shape_241,p:{x:-209,y:-104.1}},{t:this.shape_254,p:{x:-201.5,y:-105.4}},{t:this.shape_1407,p:{x:-190.4}},{t:this.shape_227,p:{x:-185.8,y:-105.4}},{t:this.shape_872,p:{x:-180.3,y:-104}},{t:this.shape_167,p:{x:-173.8,y:-104.9}},{t:this.shape_164,p:{x:-168.2,y:-104.9}},{t:this.shape_344,p:{x:-161.7,y:-104}},{t:this.shape_218,p:{x:-154.1,y:-104.1}},{t:this.shape_146,p:{x:-143.3,y:-104.9}},{t:this.shape_875,p:{x:-136.8,y:-105.5}},{t:this.shape_208,p:{x:-129.2,y:-104}},{t:this.shape_1459},{t:this.shape_977,p:{x:-111.4,y:-104.1}},{t:this.shape_871,p:{x:-102,y:-104}},{t:this.shape_204,p:{x:-94.7,y:-102.8}},{t:this.shape_203,p:{x:-87.5,y:-104}},{t:this.shape_514,p:{x:-81.3,y:-101.2}},{t:this.shape_1120,p:{y:-68.9}},{t:this.shape_424,p:{x:-318.3,y:-64.7}},{t:this.shape_1458},{t:this.shape_162,p:{x:-299.6,y:-67.6}},{t:this.shape_517,p:{x:-293.8,y:-67.5}},{t:this.shape_194,p:{x:-286.5,y:-66.3}},{t:this.shape_413,p:{x:-275.4,y:-66.1}},{t:this.shape_1152,p:{x:-268.2,y:-67.5}},{t:this.shape_411,p:{x:-260.7,y:-67.4}},{t:this.shape_334,p:{x:-253.6,y:-67.6}},{t:this.shape_855,p:{x:-243.5,y:-67.5}},{t:this.shape_251,p:{x:-236.5,y:-67.6}},{t:this.shape_1304,p:{x:-232.6,y:-68.9}},{t:this.shape_179,p:{x:-226.9,y:-66.3}},{t:this.shape_505,p:{x:-221.6,y:-68.9}},{t:this.shape_195,p:{x:-215.7,y:-67.6}},{t:this.shape_509,p:{x:-208.2,y:-67.5}},{t:this.shape_430,p:{x:-202.2,y:-68.9}},{t:this.shape_275,p:{x:-193.9,y:-68.9}},{t:this.shape_493,p:{x:-188.5,y:-67.5}},{t:this.shape_492,p:{x:-181.3,y:-66.1}},{t:this.shape_489,p:{x:-174.1,y:-67.5}},{t:this.shape_271,p:{x:-167,y:-67.6}},{t:this.shape_1035,p:{x:-156.9,y:-67.5}},{t:this.shape_180,p:{x:-149.4,y:-67.6}},{t:this.shape_856,p:{x:-142.7,y:-68.4}},{t:this.shape_487,p:{x:-136.3}},{t:this.shape_503,p:{x:-125.5,y:-68.4}},{t:this.shape_474,p:{x:-119,y:-69}},{t:this.shape_476,p:{x:-111.4,y:-67.5}},{t:this.shape_1008,p:{x:-98.9,y:-68.8}},{t:this.shape_473,p:{x:-90.7,y:-67.5}},{t:this.shape_851,p:{x:-81.7,y:-67.4}},{t:this.shape_911,p:{x:-68.3,y:-68.8}},{t:this.shape_479,p:{x:-61.6,y:-67.5}},{t:this.shape_257,p:{x:-54.4,y:-66.1}},{t:this.shape_340,p:{x:-47.2,y:-67.5}},{t:this.shape_239,p:{x:-40.1,y:-67.6}},{t:this.shape_1457},{t:this.shape_393,p:{x:-22.1,y:-67.4}},{t:this.shape_483,p:{x:-15.4,y:-68.4}},{t:this.shape_475,p:{x:-9.9,y:-68.4}},{t:this.shape_512,p:{x:-3.4,y:-67.5}},{t:this.shape_160,p:{x:4.1,y:-67.6}},{t:this.shape_342,p:{x:10.3,y:-64.7}},{t:this.shape_1456},{t:this.shape_283,p:{x:-318.3,y:-28.2}},{t:this.shape_974,p:{x:-308,y:-32.4}},{t:this.shape_238,p:{x:-296.9,y:-32.4}},{t:this.shape_345,p:{x:-289,y:-30.9}},{t:this.shape_1248,p:{x:-281.1,y:-29.6}},{t:this.shape_258,p:{x:-275.1,y:-32.4}},{t:this.shape_1455},{t:this.shape_1011,p:{x:-265.9,y:-31}},{t:this.shape_381,p:{x:-258.8,y:-31}},{t:this.shape_386,p:{x:-252.3,y:-31.9}},{t:this.shape_176,p:{x:-245.8,y:-31}},{t:this.shape_222,p:{x:-238.3,y:-32.4}},{t:this.shape_880,p:{x:-227.7,y:-32.4}},{t:this.shape_368,p:{x:-222.3,y:-31}},{t:this.shape_243,p:{x:-215.1,y:-29.6}},{t:this.shape_161,p:{x:-207.9,y:-31}},{t:this.shape_822,p:{x:-200.8,y:-31.1}},{t:this.shape_813,p:{x:-190.7,y:-31}},{t:this.shape_1454},{t:this.shape_360,p:{x:-174.8,y:-31.9}},{t:this.shape_349,p:{x:-168.3,y:-32.5}},{t:this.shape_159,p:{x:-160.7,y:-31}},{t:this.shape_397,p:{x:-148.9,y:-31}},{t:this.shape_198,p:{x:-141.9,y:-31.1}},{t:this.shape_1016,p:{x:-138,y:-32.4}},{t:this.shape_139,p:{x:-132.3,y:-29.8}},{t:this.shape_835,p:{x:-127}},{t:this.shape_140,p:{x:-121.1,y:-31.1}},{t:this.shape_365,p:{x:-113.6,y:-31}},{t:this.shape_187,p:{x:-107.6,y:-32.4}},{t:this.shape_1010,p:{x:-99.8,y:-32.4}},{t:this.shape_343,p:{x:-94.9,y:-31}},{t:this.shape_350,p:{x:-84.4}},{t:this.shape_148,p:{x:-77.7,y:-31.1}},{t:this.shape_157,p:{x:-71.7,y:-31}},{t:this.shape_355,p:{x:-64.3,y:-31}},{t:this.shape_352,p:{x:-57.7,y:-31.9}},{t:this.shape_147,p:{x:-51.2,y:-31}},{t:this.shape_102,p:{x:-43.8,y:-32.4}},{t:this.shape_210,p:{x:-37.3,y:-28.2}},{t:this.shape_1061,p:{y:4.1}},{t:this.shape_127,p:{x:-318.3,y:8.3}},{t:this.shape_1164,p:{x:-307.6,y:4.2}},{t:this.shape_332,p:{x:-299.7,y:4}},{t:this.shape_904,p:{x:-294.1,y:4.1}},{t:this.shape_499,p:{x:-289.2,y:5.5}},{t:this.shape_292,p:{x:-279.3,y:4.6}},{t:this.shape_338,p:{x:-272.8,y:5.5}},{t:this.shape_306,p:{x:-265.5,y:5.5}},{t:this.shape_323,p:{x:-258.3,y:4}},{t:this.shape_137,p:{x:-250.7,y:5.4}},{t:this.shape_821,p:{x:-245.1,y:4.1}},{t:this.shape_1453},{t:this.shape_325,p:{x:-231.4,y:5.6}},{t:this.shape_335,p:{x:-223.8,y:5.5}},{t:this.shape_276,p:{x:-212,y:5.6}},{t:this.shape_314,p:{x:-205.4,y:5.5}},{t:this.shape_213,p:{x:-198.7,y:5.6}},{t:this.shape_311,p:{x:-191.3,y:5.5}},{t:this.shape_125,p:{x:-185.3,y:4.1}},{t:this.shape_169,p:{x:-181.2,y:4.1}},{t:this.shape_192,p:{x:-175.9,y:6.9}},{t:this.shape_328,p:{x:-164.5,y:5.5}},{t:this.shape_111,p:{x:-156.9,y:5.4}},{t:this.shape_318,p:{x:-149.3,y:4}},{t:this.shape_305,p:{x:-141.8,y:5.5}},{t:this.shape_108,p:{x:-134.3,y:5.4}},{t:this.shape_294,p:{x:-127.1,y:5.5}},{t:this.shape_309,p:{x:-119.8,y:5.5}},{t:this.shape_312,p:{x:-113.2,y:5.5}},{t:this.shape_133,p:{x:-103.3,y:4.6}},{t:this.shape_278,p:{x:-96.8,y:4}},{t:this.shape_303,p:{x:-89.2,y:5.5}},{t:this.shape_791,p:{x:-78,y:5.4}},{t:this.shape_291,p:{x:-72,y:5.5}},{t:this.shape_285,p:{x:-65.4,y:5.5}},{t:this.shape_144,p:{x:-58.8,y:5.6}},{t:this.shape_646,p:{x:-52.7,y:4.1}},{t:this.shape_115,p:{x:-48,y:4.6}},{t:this.shape_284,p:{x:-42.5,y:5.5}},{t:this.shape_897,p:{x:-37.3,y:9.5}},{t:this.shape_394,p:{x:-24.6,y:5.4}},{t:this.shape_302,p:{x:-15.1,y:5.5}},{t:this.shape_270,p:{x:-7.5}},{t:this.shape_322,p:{x:-2.6,y:4.1}},{t:this.shape_100,p:{x:3.4,y:5.4}},{t:this.shape_99,p:{x:10.7,y:6.7}},{t:this.shape_1452},{t:this.shape_556,p:{x:29,y:5.5}},{t:this.shape_107,p:{x:36.6,y:5.6}},{t:this.shape_149,p:{x:43.6,y:5.4}},{t:this.shape_273,p:{x:55.2,y:5.6}},{t:this.shape_272,p:{x:64.1,y:5.5}},{t:this.shape_153,p:{x:71.1,y:5.4}},{t:this.shape_122,p:{x:77.2,y:4}},{t:this.shape_229,p:{x:90.3,y:5.4}},{t:this.shape_315,p:{x:99.9,y:5.5}},{t:this.shape_216,p:{x:106.9,y:5.4}},{t:this.shape_286,p:{x:112.8,y:5.5}},{t:this.shape_789,p:{x:124.1,y:5.4}},{t:this.shape_280,p:{x:130,y:5.5}},{t:this.shape_293,p:{x:137.5,y:5.5}},{t:this.shape_1451},{t:this.shape_1450},{t:this.shape_279,p:{x:152,y:5.5}},{t:this.shape_110,p:{x:157.7,y:4.6}},{t:this.shape_772,p:{x:162.2,y:4.1}},{t:this.shape_287,p:{x:167.8,y:5.5}},{t:this.shape_98,p:{x:173.7,y:8.3}}]},1).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.shape_1487},{t:this.shape_1486},{t:this.shape_1485},{t:this.shape_1484},{t:this.shape_1483},{t:this.shape_1482},{t:this.shape_1481},{t:this.shape_1480},{t:this.shape_1479},{t:this.shape_1478},{t:this.shape_1477}]},1).wait(1));

	// slide_number
	this.text = new cjs.Text("Slide 1 of 12", "14px 'Trebuchet MS'", "#666666");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 159;
	this.text.parent = this;
	this.text.setTransform(26.9,214.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({text:"Slide 2 of 12"},0).wait(1).to({text:"Slide 3 of 12"},0).wait(1).to({text:"Slide 4 of 12"},0).wait(1).to({text:"Slide 5 of 12"},0).wait(2).to({text:"Slide 6 of 12"},0).wait(1).to({text:"Slide 7 of 12"},0).wait(1).to({text:"Slide 8 of 12"},0).wait(1).to({text:"Slide 9 of 12"},0).wait(1).to({text:"Slide 10 of 12"},0).wait(1).to({text:"Slide 11 of 12"},0).wait(1).to({text:"Slide 12 of 12"},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-330,-237.1,550,475.8);


(lib.btn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15));

	// Layer 4
	this.instance = new lib.flashmo016buttonG();
	this.instance.parent = this;
	this.instance.setTransform(-2.1,15.2);
	this.instance.alpha = 0;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},8).wait(7));

	// txt
	this.text = new cjs.Text("Next", "12px 'Trebuchet MS'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 122;
	this.text.parent = this;
	this.text.setTransform(59.9,5.7);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,2);

	this.timeline.addTween(cjs.Tween.get(this.text).to({y:12.7,text:"uwu"},7).to({y:5.7,text:"Next"},7).wait(1));

	// graphic
	this.instance_1 = new lib.flashmo016buttonG();
	this.instance_1.parent = this;
	this.instance_1.setTransform(75,15.2,1,1,0,0,0,80,0);
	this.instance_1.shadow = new cjs.Shadow("rgba(102,102,102,1)",1,1,3);
	this.instance_1.filters = [new cjs.ColorFilter(0.8, 0.8, 0.8, 1, 0, 0, 0, 0)];
	this.instance_1.cache(0,-14,133,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:22.2},7).to({y:15.2},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-4.8,151,45);


(lib.btn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{go:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(8));

	// mouse_over_layer
	this.instance = new lib.flashmo016buttonG();
	this.instance.parent = this;
	this.instance.setTransform(-90,2);
	this.instance.alpha = 0;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},8).wait(7));

	// txt
	this.text = new cjs.Text("Previous", "12px 'Trebuchet MS'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 122;
	this.text.parent = this;
	this.text.setTransform(-33.7,-7.2);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,2);

	this.timeline.addTween(cjs.Tween.get(this.text).to({y:-0.2,text:"uwu"},7).to({y:-7.2,text:"Previous"},7).wait(1));

	// graphic
	this.instance_1 = new lib.flashmo016buttonG();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-18.6,2.4,1,1,0,0,0,80,0);
	this.instance_1.shadow = new cjs.Shadow("rgba(102,102,102,1)",1,1,3);
	this.instance_1.filters = [new cjs.ColorFilter(0.8, 0.8, 0.8, 1, 0, 0, 0, 0)];
	this.instance_1.cache(0,-14,133,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:8.4},7).to({y:2.4},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.1,-17.6,151,44);


// stage content:
(lib.facialClimbRowboat_SY_HTML5Canvas_presentation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		_this.content_slides.stop();
		
		
		var frameNumber = this.currentFrame;
		
		
		
		_this.m2.on('click', function(){
		
			frameNumber = frameNumber + 1
			_this.content_slides.gotoAndStop(frameNumber);
		
		});
		
		_this.m1.on('click', function(){
		
			if (frameNumber == 0 ) {
			_this.content_slides.gotoAndStop(11);
				frameNumber = 11;
			}
			else {
			frameNumber = frameNumber - 1
			_this.content_slides.gotoAndStop(frameNumber);
			}
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// right_btn
	this.m2 = new lib.btn2();
	this.m2.name = "m2";
	this.m2.parent = this;
	this.m2.setTransform(708.6,525.3,1,1,0,0,0,65.5,12.4);

	this.timeline.addTween(cjs.Tween.get(this.m2).wait(1));

	// left_btn
	this.m1 = new lib.btn1();
	this.m1.name = "m1";
	this.m1.parent = this;
	this.m1.setTransform(124.2,525.7,1,1.002);

	this.timeline.addTween(cjs.Tween.get(this.m1).wait(1));

	// Slides
	this.content_slides = new lib.ContentSlides();
	this.content_slides.name = "content_slides";
	this.content_slides.parent = this;
	this.content_slides.setTransform(390,300);

	this.timeline.addTween(cjs.Tween.get(this.content_slides).wait(1));

	// header footer
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgNAHIAAgNIAaAAIAAANg");
	this.shape.setTransform(708.9,66.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AAKAbIAAgbQAAgHgBgDQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBgBQgCgBgDAAQgCAAgDACQgDACgBADIgBALIAAAYIgOAAIAAgzIANAAIAAAIQAHgKAJABQAFgBADACQAEABACAEQACACABADIABAJIAAAgg");
	this.shape_1.setTransform(699.2,66);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgTAXQgEgEAAgHQAAgEACgEQACgDAEgBIALgDIAMgEIAAgBQAAgEgCgCQgCgBgEAAQgEAAgCABQgCACgBADIgNgDQACgHAFgDQAGgEAJAAQAJAAAEACQAFACACADQACAEAAAJIgBAPIABAKIACAHIgNAAIgBgEIgBgBQgDADgEABQgDACgFAAQgIAAgFgEgAAAADIgHACQgCACAAAEQAAADACABQACACADAAQADAAADgCIAEgEIAAgHIAAgDg");
	this.shape_2.setTransform(692.3,66.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgPAZQgEgDgCgEQgBgEAAgHIAAggIANAAIAAAYQAAAJABADQAAABAAAAQABABAAAAQAAABABAAQAAABAAAAIAFABQADAAADgBQADgDABgDQABgCAAgLIAAgVIAOAAIAAAzIgNAAIAAgIQgDAEgEADQgFACgFAAQgFAAgEgCg");
	this.shape_3.setTransform(685.5,66.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgGAkIAAgeIgagpIARAAIAPAcIAQgcIARAAIgaApIAAAeg");
	this.shape_4.setTransform(678.2,65.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AAKAbIAAgbQAAgHgBgDQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBgBQgCgBgDAAQgCAAgDACQgDACgBADIgBALIAAAYIgOAAIAAgzIANAAIAAAIQAHgKAJABQAFgBADACQAEABACAEQACACABADIABAJIAAAgg");
	this.shape_5.setTransform(667,66);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgSASQgFgGAAgMQAAgMAHgHQAGgHAKAAQALAAAHAHQAHAJgBAOIghAAQAAAGADAEQADADAEAAQADAAADgCQACgCABgEIAOADQgDAIgGAEQgFADgJAAQgMAAgHgJgAALgDQAAgHgDgCQgDgDgEAAQgEAAgDADQgDADAAAGIAUAAIAAAAg");
	this.shape_6.setTransform(660.1,66.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgFAaIgVgzIAOAAIAKAZIACAJIACgEIABgFIAKgZIAOAAIgVAzg");
	this.shape_7.setTransform(653.6,66.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgSASQgFgGAAgMQAAgMAHgHQAGgHAKAAQALAAAHAHQAHAJgBAOIghAAQAAAGADAEQADADAEAAQADAAADgCQACgCABgEIAOADQgDAIgGAEQgFADgJAAQgMAAgHgJgAALgDQAAgHgDgCQgDgDgEAAQgEAAgDADQgDADAAAGIAUAAIAAAAg");
	this.shape_8.setTransform(647,66.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AgBAjIgFgEIgBgFIgBgKIAAgWIgGAAIAAgKIAGAAIAAgKIANgJIAAATIAJAAIAAAKIgJAAIAAAVIAAAHIABACIADABIAFgCIABALQgEACgHAAIgFgBg");
	this.shape_9.setTransform(641.7,65.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgTAfQgIgHgBgMIAOgBQABAHAEADQAEAEAGAAQAHAAADgDQAEgDAAgEQAAgBAAAAQAAgBgBgBQAAAAAAAAQAAgBgBAAQgBgCgEgBIgLgEQgLgCgFgEQgHgGAAgIQAAgGAEgEQADgFAGgDQAFgCAIAAQANAAAHAGQAHAGAAAKIgOAAQgBgFgDgDQgDgCgGAAQgGAAgDACQgDACAAADQAAAAAAABQAAABABAAQAAABAAAAQABABAAAAQADADAKACQAKADAFACQAFADADAEQADAEAAAHQAAAGgDAFQgEAGgGACQgGADgKAAQgMAAgHgGg");
	this.shape_10.setTransform(635.6,65.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AgMAHIAAgNIAaAAIAAANg");
	this.shape_11.setTransform(626.2,66.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AgUBCIgNgDIgDABIgCADIgEAAIAAguIAFAAQADAQAGAJQAKAQASAAQAKAAAHgGQAGgGAAgJQAAgGgEgGQgDgFgJgGIgPgJQgSgJgIgIQgIgKAAgNQAAgQALgKQAMgKARAAQAGAAAJADIAKADIAEgBIACgCIADAAIABAnIgEAAQgDgOgFgHQgIgOgQAAQgKAAgGAGQgFAGAAAIQAAANATAKIASAKQAeAQAAAVQAAARgMALQgNAKgTAAQgIAAgLgCg");
	this.shape_12.setTransform(764.4,40.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AhCBiIAAgEQANgBAEgFQADgEAAgLIAAiHQAAgLgCgCQgDgDgHgBIgDAAIgEABIAAgFIANgEIAdgKIABABIAAACIAAATQAJgKAIgFQALgHAOgBQATAAAOARQAOARAAAdQAAAcgQAWQgRAXgaAAQgIAAgFgCQgJgDgHgIIAAAvQAAAOAEADQAFADAPACIAAAEgAgNhKQgIAHAAAGIAABGQADAKAIAFQAHAEAJAAQAPAAALgOQALgPAAgbQAAgagLgNQgMgNgPAAQgJAAgJAGg");
	this.shape_13.setTransform(751,43.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AgrAwQgOgUAAgaQAAgcARgUQARgVAaAAQAUAAAPAOQAPAOAAAZIhZAAQABAgAOAPQANAPARAAQAPAAALgIQAKgIAIgOIAFABQgFATgQAPQgQAPgWAAQgbAAgPgUgAAXgXQgCgOgDgHQgHgNgQAAQgQAAgIAPQgFAHgCAMIA7AAIAAAAg");
	this.shape_14.setTransform(737.6,40.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AgSBHQgDgIAAgPIAAhVIgPAAIgBAAIgBgCIABgCIAEgDIAOgNIATgbIADAAIAAACIAAAjIAdAAIAAAKIgdAAIgBBRQAAALACAFQAEAKAKAAQAFAAADgCIAJgIIAEADIgEAEQgHAKgIAEQgIAEgIAAQgQAAgGgOg");
	this.shape_15.setTransform(727.4,38.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AgXBfIgRgGQgFAAgCADIgCAHIgHAAIgIg+IAGAAQAIAUAKAMQARAUAYAAQAOAAALgIQAKgKAAgPQAAgOgLgLQgGgGgUgOIgZgOQgLgHgHgIQgMgOAAgQQAAgWAOgOQAPgPAYAAQAJAAAOAFIAQAFQAFAAACgDIADgHIAGAAIAHA+IgHAAQgHgcgQgLQgQgLgOAAQgMAAgJAHQgJAHAAAMQAAAMAHAHQAHAJAOAIIAZAQQAYAOAJAMQAKAMAAARQAAAXgRAPQgRAQgbAAQgNAAgOgFg");
	this.shape_16.setTransform(714.8,37.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AgyBZQgNgJAAgLQAAgFADgFIAPgOIAJgJIACgBIgKgFQgGgFAAgFQAAgGAFgGQAFgGAQgNQgNgFgHgKQgHgLAAgOQAAgRANgOQANgPAYAAQAKAAAMAFQANAEALAAIAJAAIAJAAIABAAIAAAMIgYAAIAEAKQACAIAAAHQAAARgNANQgNAOgWAAIgNgCQgEAAgHAHQgHAGAAAFQAAAEAKACIAPACQAjAAANAEQAWAGAAAWQAAAXgZANQgZANgZAAQgXAAgOgJgAgkAtQgGAJAAAHQAAAMANAFQANAEARAAQAXAAAPgIQAPgIAAgMQAAgJgMgDQgIgCgUgBIgLAAIgKAAIgKgBIgKgCQgCAAgHAJgAgYhMQgDAHAAAKQAAARAIAOQAJAOAMAAQAIAAAFgEQAJgHAAgRQAAgOgHgQQgHgRgPAAQgOAAgFANg");
	this.shape_17.setTransform(692.5,43.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AAIBDIAAgEQAKgCAEgEQAEgEAAgPIAAg7QAAgMgFgIQgEgIgMAAQgIAAgIAFIgMALIAABOQAAALAFADQAEAEAJAAIAAAEIg+AAIAAgEQALgBAEgEQAEgEAAgNIAAhHQAAgJgCgEQgDgFgIAAIgCAAIgEABIAAgFIAbgJIAOgEIABAAIAAACIAAAVQANgMAIgFQAKgHAMAAQAJAAAIAGQAPALABAbIAABBQAAALADAEQAEAFAKAAIAAAEg");
	this.shape_18.setTransform(678.1,40.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AghBjIAAgEQAPgCAEgDQADgEAAgRIAAhDIgBgMQgBgGgIAAIgCAAIgJADIAAgFIAGgCIAhgMIAGgBIAAACIAABkQAAAQAEAFQADAEAOABIAAAEgAgLhJQgEgEAAgGQAAgGAEgFQAFgEAFAAQAGAAAEAEQAEAFABAGQgBAGgEAEQgEAFgGAAQgFAAgFgFg");
	this.shape_19.setTransform(666.8,37.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AAIBjIAAgEQAMgCAEgEQAEgEAAgQIAAg5QAAgNgFgIQgFgJgMAAQgKAAgLAIQgKAIAAACIAABFQAAAQAEAEQADAEAMACIAAAEIg+AAIAAgEQALgCAEgEQAEgEAAgQIAAiHQAAgIgCgDQgCgEgIAAIgDAAIgEABIAAgFIAQgFIAMgEIAOgEIAAABIAABXQAJgKAHgFQALgIAPAAQAXAAAIATQAFAKAAAQIAAA5QAAAPADAFQAEAEAKACIAAAEg");
	this.shape_20.setTransform(655.5,37.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgmAzQgSgRABgfQAAgcASgVQATgVAbAAQASAAAMAJQANAJABALQgBAEgDAFQgDADgHAAQgFABgEgDQgEgEgBgGIgCgHQgBgIgFgDQgFgDgHAAQgQAAgKAOQgMAOAAAXQAAAVANARQAMARATAAQAPAAALgKQAHgFAJgMIADACQgHASgKAJQgRATgWAAQgWAAgQgRg");
	this.shape_21.setTransform(641.8,40.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgmA6QgLgIAAgVIAAhIQAAgMgFgEQgDgCgKgBIAAgEIAqAAIAABaQAAAJADAGQAFALAOAAQAJAAAJgGQAFgEAGgGIAAhNQAAgLgFgDQgEgDgNgBIAAgFIAuAAIAABjQAAAJAEAEQADAEALgBIAAAEIgLADIgNAEIgQAGIgBAAIAAgCIAAgXQgJAMgIAFQgLAJgOAAQgMAAgLgJg");
	this.shape_22.setTransform(628,40.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AgtAxQgSgUAAgdQAAgdASgTQARgUAcAAQAcAAASATQASASAAAfQAAAbgRAVQgSAVgdAAQgaAAgTgUgAgXg0QgOANAAAgQAAAYALAWQAMAWATAAQAQAAAIgPQAJgPAAgXQAAgYgLgVQgLgWgTAAQgMAAgIAHg");
	this.shape_23.setTransform(613.6,40.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AgSBHQgDgIAAgPIAAhVIgPAAIgBAAIgBgCIABgCIAEgDIAOgNIATgbIADAAIAAACIAAAjIAdAAIAAAKIgdAAIgBBRQAAALACAFQAEAKAKAAQAFAAADgCIAJgIIAEADIgEAEQgHAKgIAEQgIAEgIAAQgQAAgGgOg");
	this.shape_24.setTransform(602.6,38.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AgrAwQgOgUAAgaQAAgcARgUQARgVAaAAQAUAAAPAOQAPAOAAAZIhZAAQABAgAOAPQANAPARAAQAPAAALgIQAKgIAIgOIAFABQgFATgQAPQgQAPgWAAQgbAAgPgUgAAXgXQgCgOgDgHQgHgNgQAAQgQAAgIAPQgFAHgCAMIA7AAIAAAAg");
	this.shape_25.setTransform(591.9,40.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AAvBgIhIhZIgNABIAAA4QAAAQAFAFQAFAEAQABIAAAGIhQAAIAAgGQARgBADgFQAFgFAAgSIAAh8QgBgPgEgFQgFgFgPgBIAAgGIBQAAQAYAAARAGQAfANAAAfQABAXgOALQgPALgYADIA8BKQAFAGAGAEQAGADAIAAIAAAGgAgjhSQgDACAAAGIAABIQAggBAMgGQAXgJAAgbQAAgZgVgJQgKgFgSAAQgMAAgDACg");
	this.shape_26.setTransform(575.9,37.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// BG enhancements
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.502)").s().p("AjCdYQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAljIhpAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAj6QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAID6AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAABpIFiAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAH0QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAi9dOIHpAAIAAnqIldAAIAACHQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIiHAAgAi9XmICCAAIAAiCIiCAAgAkrXmIBkAAIAAiHQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAICHAAIAAhkIjwAAgAjCzrQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAljIhpAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAj6QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAID6AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAABpIFiAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAH0QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAi9z1IHpAAIAAnqIldAAIAACHQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIiHAAgAi95dICCAAIAAiCIiCAAgAkr5dIBkAAIAAiHQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAICHAAIAAhkIjwAAg");
	this.shape_27.setTransform(746.5,299.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#990000").s().p("EA7iAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEA5qAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEA3yAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEA16AgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEA0CAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAyKAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAwSAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAuaAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAsiAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAqqAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAoyAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAm6AgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAlCAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAjKAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAhSAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAfaAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAdiAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAbqAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAZyAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAX6AgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAWCAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAUKAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEASSAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAQaAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAOiAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAMqAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAKyAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAI6AgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAHCAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAFKAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEADSAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEABaAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgAdAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA7AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgCVAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgENAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgGFAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgH9AgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgJ1AgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgLtAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgNlAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgPdAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgRVAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgTNAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgVFAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgW9AgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgY1AgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgatAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgclAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgedAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEggVAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgiNAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgkFAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgl9AgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgn1AgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgptAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgrlAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgtdAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgvVAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgxNAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgzFAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEg09AgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEg21AgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEg4tAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEg6lAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEg8dAgHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEA7igf8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEA5qgf8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEA3ygf8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEA16gf8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEA0Cgf8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAyKgf8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAwSgf8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAuagf8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAsigf8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAqqgf8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAoygf8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAm6gf8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAlCgf8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAjKgf8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAhSgf8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAfa/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAdi/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAbq/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAZy/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAX6/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAWC/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAUK/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgASS/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAQa/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAOi/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAMq/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAKy/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAI6/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAHC/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAFK/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgADS/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgABa/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAgd/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA7AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAiV/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAkN/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAmF/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAn9/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAp1/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgArt/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAtl/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAvd/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAxV/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAzN/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgA1F/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgA29/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgA41/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgA6t/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgA8l/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgA+d/8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEggVgf8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgiNgf8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgkFgf8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgl9gf8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgn1gf8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgptgf8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgrlgf8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgtdgf8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgvVgf8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgxNgf8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgzFgf8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEg09gf8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEg21gf8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEg4tgf8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEg6lgf8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEg8dgf8QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAg");
	this.shape_28.setTransform(397,300);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(255,255,255,0.102)","rgba(255,255,255,0.2)"],[0,1],-92.4,-160,98.7,45.9).s().p("AyC3+MBFXAImMhmpAnXg");
	this.shape_29.setTransform(412.5,318.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]}).wait(1));

	// BG main
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#990000").s().p("Eg87AfQMAAAg+fMB53AAAMAAAA+fg");
	this.shape_30.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(1));

	// BG gray
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#D9D9D9","#FFFFFF"],[0,1],0,-45,0,45).s().p("Eg87AHCIAAuDMB53AAAIAAODg");
	this.shape_31.setTransform(400,545);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#D9D9D9","#FFFFFF"],[0,1],0,45,0,-45).s().p("Eg87AHCIAAuDMB53AAAIAAODg");
	this.shape_32.setTransform(400,55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(409,310,781,580.1);
// library properties:
lib.properties = {
	id: '06F24612399B4767BA7038567E8ADCF6',
	width: 800,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/facialClimbRowboat_SY_HTML5 Canvas_presentation_atlas_.png?1560547120824", id:"facialClimbRowboat_SY_HTML5 Canvas_presentation_atlas_"}
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
an.compositions['06F24612399B4767BA7038567E8ADCF6'] = {
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