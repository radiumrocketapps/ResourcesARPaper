var World = {
	loaded: false,
	drawables: [],
	cylinderRotation: {
		x: 0,
		y: 0,
		z: 0
	},
	cylinderCenter: {
		x: 0,
		y: -0.14,
		z: 0
	},
	cylinderLength: 0.33,
	cylinderHeight: 0.2,

	init: function initFn() {
		World.createOccluder();
		World.createTyrannosaurus();
		World.createTracker();
	},

	createOccluder: function createOccluderFn() {
		var occluderScale = 0.0065 * this.cylinderLength;

		this.cylinderOccluder = new AR.Occluder("assets/cylinder_occluder.wt3", {
			onLoaded: World.showInfoBar,
			scale: {
				x: occluderScale,
				y: occluderScale,
				z: occluderScale
			},
			translate: this.cylinderCenter,
			rotate: {
				x: 180
			},
			onError: World.onError
		});
		World.drawables.push(this.cylinderOccluder);
	},

	createTyrannosaurus: function createTyrannosaurusFn() {
		var tyrannosaurusCenter = World.getTyrannosaurus(0, 0);
		World.drawables.push(tyrannosaurusCenter);
	},

	getTyrannosaurus: function getTyrannosaurusFn(positionX, positionZ) {
		var tyrannosaurusScale = 5 * this.cylinderLength;

		return new AR.Model("assets/tyrannosaurus.wt3", {
			scale: {
				x: tyrannosaurusScale,
				y: tyrannosaurusScale,
				z: tyrannosaurusScale
			},
			translate: {
				x: positionX,
				y: World.cylinderCenter.y,
				z: positionZ
			},
			rotate: {
				x: -90
			},
			onError: World.onError
		});
	},

	createTracker: function createTrackerFn() {
		this.targetCollectionResource = new AR.TargetCollectionResource(
			"assets/cylinder.wto",
			{
				onError: World.onError
			}
		);

		this.tracker = new AR.ObjectTracker(this.targetCollectionResource, {
			onError: World.onError
		});

		this.objectTrackable = new AR.ObjectTrackable(this.tracker, "*", {
			drawables: {
				cam: World.drawables
			},
			onObjectRecognized: World.objectRecognized,
			onObjectLost: World.objectLost,
			onError: World.onError
		});
	},

	objectRecognized: function objectRecognizedFn() {
		World.hideInfoBar();
		World.setAugmentationsEnabled(true);
	},

	objectLost: function objectLostFn() {
		World.setAugmentationsEnabled(false);
	},

	setAugmentationsEnabled: function setAugmentationsEnabledFn(enabled) {
		for (var i = 0; i < World.drawables.length; i++) {
			World.drawables[i].enabled = enabled;
		}
	},

	onError: function onErrorFn(error) {
		alert(error);
	},

	hideInfoBar: function hideInfoBarFn() {
		document.getElementById("infoBox").style.display = "none";
	},

	showInfoBar: function worldLoadedFn() {
		document.getElementById("infoBox").style.display = "table";
		document.getElementById("loadingMessage").style.display = "none";
	}
};

World.init();
