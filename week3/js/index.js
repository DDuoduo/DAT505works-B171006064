var container, stats;
var camera, scene, raycaster, renderer;



init();
render();

function init() {
  container = document.createElement( 'div' );
  document.body.appendChild( container );

  camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 1, 10000 );

  camera.position.y-=300;
  camera.position.z+=1600;
  
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xf0f0f0 );

  var light = new THREE.DirectionalLight( 0xffffff, 3 );
  light.position.set(  10,10,10 ).normalize();
  scene.add( light );

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth/1.2, window.innerHeight/1.2);
  container.appendChild( renderer.domElement);
}

  function ball1(){

  // Model/material loading!
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.load("football.mtl", function(materials){

		materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load("ball.obj", function(mesh){
    mesh.scale.set(10,10,10);
    scene.add(mesh);
    });
  });
  }

  function ball2(){

  // Model/material loading!
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.load("basketball.mtl", function(materials){

		materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load("ball2.obj", function(mesh){
    mesh.scale.set(10,10,10);
    scene.add(mesh);
    });
  });
  }

  function ball3(){

  // Model/material loading!
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.load("earth.mtl", function(materials){

		materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load("ball3.obj", function(mesh){
    mesh.scale.set(10,10,10);
    scene.add(mesh);
    });
  });
  }



  function render() {
    requestAnimationFrame(render);
    renderer.render(scene,camera);
    document.getElementById("ball1").addEventListener("click",ball1);
    document.getElementById("ball2").addEventListener("click",ball2);
    document.getElementById("ball3").addEventListener("click",ball3);

  }
