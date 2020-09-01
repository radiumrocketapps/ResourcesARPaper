const PARAMS = {
	TOP_INTERVAL: 10, // seconds
	EXECUTION_TIME: 10000, // miliseconds, should be TOP_INTERVAL + 20000 miliseconds
	RUN_TIMES: 1,
	APPS: {
		ANDROID: {
			FIDUCIAL_MARKERS: {
				NAME: "Fiducial Markers",
				RUN: false,
				PACKAGE_NAME: "com.radiumrocket.fiducialmarkers",
				ACTIVITY: "com.radiumrocket.fiducialmarkers.MainActivity",
				MAIN_PROCESS_NAME: "com.radiumrocket.fiducialmarkers",
				READ_CPU: "com.radiumrocke+"
			},
			NATURAL_MARKERS_CUBE: {
				NAME: "Natural Markers Cube",
				RUN: false,
				PACKAGE_NAME: "com.radiumrocket.naturalmarkers.cube",
				ACTIVITY: "com.radiumrocket.naturalmarkers.cube.MainActivity",
				MAIN_PROCESS_NAME: "com.radiumrocket.naturalmarkers.cube",
				READ_CPU: "com.radiumrocke+"
			},
			NATURAL_MARKERS_CYLINDER: {
				NAME: "Natural Markers Cylinder",
				RUN: false,
				PACKAGE_NAME: "com.radiumrocket.naturalmarkers.cylinder",
				ACTIVITY: "com.radiumrocket.naturalmarkers.cylinder.MainActivity",
				MAIN_PROCESS_NAME: "com.radiumrocket.naturalmarkers.cylinder",
				READ_CPU: "com.radiumrocke+"
			},
			NATURAL_MARKERS_PYRAMID: {
				NAME: "Natural Markers Pyramid",
				RUN: false,
				PACKAGE_NAME: "com.radiumrocket.naturalmarkers.pyramid",
				ACTIVITY: "com.radiumrocket.naturalmarkers.pyramid.MainActivity",
				MAIN_PROCESS_NAME: "com.radiumrocket.naturalmarkers.pyramid",
				READ_CPU: "com.radiumrocke+"
			},
			NATURAL_MARKERS_SPHERE: {
				NAME: "Natural Markers Sphere",
				RUN: true,
				PACKAGE_NAME: "com.radiumrocket.naturalmarkers.sphere",
				ACTIVITY: "com.radiumrocket.naturalmarkers.sphere.MainActivity",
				MAIN_PROCESS_NAME: "com.radiumrocket.naturalmarkers.sphere",
				READ_CPU: "com.radiumrocke+"
			}
		}
	}
};

export default PARAMS;
